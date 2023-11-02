import json
import jsbeautifier
import re
import ast
from pprint import pprint
from devtools import debug

# from mtrk_sdl_generator_anais.miniFlashModifier import miniFlashModifier
# from mtrk_sdl_generator_anais.sdlFileCreator import sdlFileCreator

from mtrk_sdl_generator_anais.SDL_read_write.pydanticSDLHandler import *

def create_sdl_from_ui_inputs(boxes):
    # Initialize SDL file
    # TO DO - need to intialize without loading file
    with open('/vagrant/miniflash.json') as sdlFile:
        sdlData = json.load(sdlFile)
        sequence_data = PulseSequence(**sdlData)
    sdlInitialize(sequence_data)

    updateSDLFile(sequence_data, boxes)
    
    ### writing of json schema to SDL file with formatting options
    with open('output.mtrk', 'w') as sdlFileOut:
        options = jsbeautifier.default_options()
        options.indent_size = 4
        data_to_print = jsbeautifier.beautify(json.dumps(sequence_data.model_dump(mode="json")), options)
        sdlFileOut.write(re.sub(r'}, {', '},\n            {', data_to_print)) #purely aesthetic
        

def sdlInitialize(sequence_data):
    sequence_data.file = File()
    sequence_data.infos = Info()
    sequence_data.settings = Settings()
    sequence_data.instructions = {}
    sequence_data.objects = {}
    sequence_data.arrays = {}
    sequence_data.equations = {}
    
def updateSDLFile(sequence_data, boxes):
    instructionName = "dummy_instruction_name"
    addInstruction(sequence_data, instructionName)
    completeInstructionInformation(sequence_data, sequence_data.instructions[instructionName], boxes)
        
def addInstruction(sequence_data, instructionName):
    sequence_data.instructions[instructionName] = Instruction(steps=[])
    
def addStep(instructionToModify, stepIndex, box):
    actionName = box["type"]
    match actionName:
        case "run_block":
            instructionToModify.steps.append(RunBlock())
        case "loop":
            instructionToModify.steps.append(Loop(steps=[]))
        case "calc":
            instructionToModify.steps.append(Calc())
        case "init":
            instructionToModify.steps.append(Init())
        case "sync":
            instructionToModify.steps.append(Sync())
        case "grad":
            instructionToModify.steps.append(Grad())
        case "rf":
            instructionToModify.steps.append( Rf(added_phase = AddedPhase()))
        case "adc":
            instructionToModify.steps.append( Adc(added_phase = AddedPhase(), \
                                                                        mdh={}))
        case "mark":
            instructionToModify.steps.append(Mark())
        case "submit":
            instructionToModify.steps.append(Submit())
        case _: 
            print(actionName + " is not available")
            
def addObject(sequence_data, objectName, objectType):
    typeName = objectType
    match typeName:
        case "rf":
           sequence_data.objects[objectName]=RfExcitation() 
        case "grad":
            sequence_data.objects[objectName]=GradientObject() 
        case "adc":
            sequence_data.objects[objectName]=AdcReadout() 
        case "sync":
            sequence_data.objects[objectName]=Ttl() 
        case _:
            print(typeName + " is not available")
         
def addArray(sequence_data, arrayName):
    sequence_data.arrays[arrayName] = GradientTemplate()

def completeInstructionInformation(sequence_data, instructionToModify, boxes):
    stepIndex = 0
    for box in boxes:
        addStep(instructionToModify, stepIndex, box)
        stepToModify = instructionToModify.steps[stepIndex]
        completeStepInformation(sequence_data, stepToModify, "Instruction", box)
        stepIndex += 1
            
def completeStepInformation(sequence_data, stepToModify, instructionOrLoop, box):
    actionInfo = stepToModify.action
    match actionInfo:
        case "grad":
            stepToModify.axis = box["axis"]
            stepToModify.object= box["name"]
            if stepToModify.object not in sequence_data.objects:
                addObject(sequence_data=sequence_data, objectName=stepToModify.object, objectType=box["type"])
            completeObjectInformation(sequence_data=sequence_data, objectName=stepToModify.object, box=box)
            stepToModify.time = int(float(box["start_time"]))
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "Do you want to add an amplitude option? (yes/no)")
            # if(inputParameter(UI_mode=UI_mode)=="yes"):
            #     printIfConsole(UI_mode = UI_mode, stringToPrint = "amplitude option (flip/equation)")
            #     amplitudeAnswer = inputParameter(UI_mode=UI_mode)
            #     if(amplitudeAnswer=="flip"):
            #         stepToModify.amplitude = "flip"
            #     elif(amplitudeAnswer=="equation"):
            #         stepToModify.amplitude = Amplitude()
            #         printIfConsole(UI_mode = UI_mode, stringToPrint = "amplitude type (str)")
            #         stepToModify.amplitude.type = inputParameter(UI_mode=UI_mode)
            #         printIfConsole(UI_mode = UI_mode, stringToPrint = "amplitude equation name (str)")
            #         stepToModify.amplitude.equation = inputParameter(UI_mode=UI_mode)
            #         addEquation(sequence_data=sequence_data, equationName=stepToModify.amplitude.equation)
            #         printIfConsole(UI_mode = UI_mode, stringToPrint = "Do you want to complete equation information? (yes/no)")
            #         if(inputParameter(UI_mode=UI_mode)=="yes"):
            #             printIfConsole(UI_mode = UI_mode, stringToPrint = "equation (str)")
            #             sequence_data.equations[stepToModify.amplitude.equation].equation=inputParameter(UI_mode=UI_mode)
            # else:
            #     printIfConsole(UI_mode = UI_mode, stringToPrint = "Default Gradient information used.")

        case "rf":
            stepToModify.object= box["name"]
            if stepToModify.object not in sequence_data.objects:
                addObject(sequence_data=sequence_data, objectName=stepToModify.object, objectType=box["type"])
            completeObjectInformation(sequence_data=sequence_data, objectName=stepToModify.object, box=box)
            stepToModify.time = int(float(box["start_time"]))
            # stepToModify.added_phase = AddedPhase()
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "added_phase type (str)")
            # stepToModify.added_phase.type = inputParameter(UI_mode=UI_mode)
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "added_phase float (float)")
            # stepToModify.added_phase.float = inputParameter(UI_mode=UI_mode)
        
        case "adc":
            stepToModify.object= box["name"]
            if stepToModify.object not in sequence_data.objects:
                addObject(sequence_data=sequence_data, objectName=stepToModify.object, objectType=box["type"])
            completeObjectInformation(sequence_data=sequence_data, objectName=stepToModify.object, box=box)
            stepToModify.time = int(float(box["start_time"]))
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "frequency (int)")
            # stepToModify.frequency = inputParameter(UI_mode=UI_mode)
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "phase (int)")
            # stepToModify.phase= inputParameter(UI_mode=UI_mode)
            # stepToModify.added_phase = AddedPhase()
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "added_phase type (str)")
            # stepToModify.added_phase.type = inputParameter(UI_mode=UI_mode)
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "added_phase float (float)")
            # stepToModify.added_phase.float = inputParameter(UI_mode=UI_mode)
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "mdh (dict[str, MdhOption])")
        
        case _:
            print("The type " + actionInfo + " could not be identified.")
            
def completeObjectInformation(sequence_data, objectName, box):
    typeInfo = sequence_data.objects[objectName].type
    durationInfo = len(box["array"])
    match typeInfo:
        case "rf":
            arrayInfo = typeInfo + "_default_array"
            if arrayInfo not in sequence_data.arrays:
                addArray(sequence_data=sequence_data, arrayName=arrayInfo)
            completeArrayInformation(sequence_data=sequence_data, arrayName=arrayInfo, box=box)
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "initial_phase (int)")
            # initPhaseInfo = inputParameter(UI_mode=UI_mode)
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "thickness (int)")
            # thicknessInfo = inputParameter(UI_mode=UI_mode)
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "flipangle (int)")
            # flipangleInfo = inputParameter(UI_mode=UI_mode)
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "purpose (str)")
            # purposeInfo = inputParameter(UI_mode=UI_mode)
            sequence_data.objects[objectName]=RfExcitation( \
                duration = durationInfo, array = arrayInfo)
        case "grad":
            arrayInfo = typeInfo + "_default_array"
            if arrayInfo not in sequence_data.arrays:
                addArray(sequence_data=sequence_data, arrayName=arrayInfo)
            completeArrayInformation(sequence_data=sequence_data, arrayName=arrayInfo, box=box)
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "tail (int)")
            # tailInfo = inputParameter(UI_mode=UI_mode)
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "amplitude (float)")
            amplitudeInfo = box['amplitude']
            sequence_data.objects[objectName]=GradientObject( \
                duration = durationInfo, array = arrayInfo, amplitude = amplitudeInfo) 
        case "adc":
            pass
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "samples (int)")
            # samplesInfo = inputParameter(UI_mode=UI_mode)
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "dwelltime (int)")
            # dwelltimeInfo = inputParameter(UI_mode=UI_mode)
            # sequence_data.objects[objectName]=AdcReadout( \
            #     duration = durationInfo, samples = samplesInfo, \
            #     dwelltime = dwelltimeInfo) 
        case "sync":
            pass
            # printIfConsole(UI_mode = UI_mode, stringToPrint = "event (str)")
            # eventInfo = inputParameter(UI_mode=UI_mode)
            # sequence_data.objects[objectName]=Ttl(duration = durationInfo, \
            #                                       event = eventInfo) 
        case _:
            print("The type " + typeInfo + " could not be identified.")
            
def completeArrayInformation(sequence_data, arrayName, box):
    # TO DO: change the fixed encoding and type info.
    encodingInfo = "text"
    typeInfo = "float"
    array = box['array']
    sizeInfo = len(array)
    dataInfo = array
    sequence_data.arrays[arrayName] = GradientTemplate(
                                     encoding = encodingInfo, type = typeInfo, \
                                     size = sizeInfo, data = dataInfo)