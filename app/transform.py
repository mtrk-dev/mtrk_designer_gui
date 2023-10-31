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
            # completeObjectInformation(sequence_data=sequence_data, objectName=stepToModify.object)
            stepToModify.time = int(float(box["start_time"]))

        case "rf":
            stepToModify.object= box["name"]
            if stepToModify.object not in sequence_data.objects:
                addObject(sequence_data=sequence_data, objectName=stepToModify.object, objectType=box["type"])
            # completeObjectInformation(sequence_data=sequence_data, objectName=stepToModify.object)
            stepToModify.time = int(float(box["start_time"]))
            
        
        case "adc":
            stepToModify.object= box["name"]
            if stepToModify.object not in sequence_data.objects:
                addObject(sequence_data=sequence_data, objectName=stepToModify.object, objectType=box["type"])
            # completeObjectInformation(sequence_data=sequence_data, objectName=stepToModify.object)
            stepToModify.time = int(float(box["start_time"]))
        
        case _:
            print("The type " + actionInfo + " could not be identified.")