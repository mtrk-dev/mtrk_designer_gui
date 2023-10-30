// import data from "./miniflash.json" assert { type: 'json' };

// Taking standard x-axis for all the plots.
// const x_standard = []
// for (let i=0; i<20000; i+=10) {
//     x_standard.push(i/1000);
// }

// storing the objects
// const objects = data["objects"];

const dummy_data = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0]
const rf_array = [3.13304e-005,3.14159,0.000275274,3.14159,0.000741752,3.14159,0.00140054,3.14159,0.00221321,3.14159,0.0031333,3.14159,0.00410657,3.14159,0.00507138,3.14159,0.00595912,3.14159,0.00669486,3.14159,0.00719792,3.14159,0.00738272,3.14159,0.00715954,3.14159,0.0064355,3.14159,0.00511552,3.14159,0.00310332,3.14159,0.00030259,3.14159,0.00338198,0,0.00804349,0,0.0137717,0,0.0206519,0,0.0287638,0,0.0381802,0,0.0489663,0,0.0611784,0,0.0748629,0,0.0900558,0,0.106781,0,0.125052,0,0.144867,0,0.166213,0,0.189063,0,0.213376,0,0.239097,0,0.266157,0,0.294475,0,0.323954,0,0.354486,0,0.385951,0,0.418216,0,0.451138,0,0.484565,0,0.518335,0,0.552279,0,0.586221,0,0.619982,0,0.653377,0,0.686221,0,0.718326,0,0.749508,0,0.779582,0,0.80837,0,0.835698,0,0.861398,0,0.885311,0,0.90729,0,0.927195,0,0.9449,0,0.960293,0,0.973275,0,0.983763,0,0.991689,0,0.997001,0,0.999666,0,0.999666,0,0.997001,0,0.991689,0,0.983763,0,0.973275,0,0.960293,0,0.9449,0,0.927195,0,0.90729,0,0.885311,0,0.861398,0,0.835698,0,0.80837,0,0.779582,0,0.749508,0,0.718326,0,0.686221,0,0.653377,0,0.619982,0,0.586221,0,0.552279,0,0.518335,0,0.484565,0,0.451138,0,0.418216,0,0.385951,0,0.354486,0,0.323954,0,0.294475,0,0.266157,0,0.239097,0,0.213376,0,0.189063,0,0.166213,0,0.144867,0,0.125052,0,0.106781,0,0.0900558,0,0.0748629,0,0.0611784,0,0.0489663,0,0.0381802,0,0.0287638,0,0.0206519,0,0.0137717,0,0.00804349,0,0.00338198,0,0.00030259,3.14159,0.00310332,3.14159,0.00511552,3.14159,0.0064355,3.14159,0.00715954,3.14159,0.00738272,3.14159,0.00719792,3.14159,0.00669486,3.14159,0.00595912,3.14159,0.00507138,3.14159,0.00410657,3.14159,0.0031333,3.14159,0.00221321,3.14159,0.00140054,3.14159,0.000741752,3.14159,0.000275274,3.14159,3.13304e-005,3.14159]
const grad_slice_select_array = [0.0, 0.0455, 0.0909, 0.1364, 0.1818, 0.2273, 0.2727, 0.3182, 0.3636, 0.4091, 0.4545, 0.5, 0.5455, 0.5909, 0.6364, 0.6818, 0.7273, 0.7727, 0.8182, 0.8636, 0.9091, 0.9545, 1.0, 1.0, 0.9545, 0.9091, 0.8636, 0.8182, 0.7727, 0.7273, 0.6818, 0.6364, 0.5909, 0.5455, 0.5, 0.4545, 0.4091, 0.3636, 0.3182, 0.2727, 0.2273, 0.1818, 0.1364, 0.0909, 0.0455, 0.0]
const adc_readout_array = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]

const rf_pulse_array = [];
for (let i=0; i < 128; i++) {
    if (i < 20) continue;
    if (i > 108) break;
    rf_pulse_array.push(rf_array[2*i]);
}

const object_to_array = {
    "rf_excitation_btn" : rf_pulse_array,
    "gradient_btn" : grad_slice_select_array,
    "adc_readout_btn" : adc_readout_array,

}

const object_to_type = {
    "rf_excitation_btn" : "rf",
    "gradient_btn" : "grad",
    "adc_readout_btn" : "adc",
}

const axis_id_to_color = {
    "rf_chart" : "blue",
    "slice_chart" : "orange",
    "phase_chart" : "green",
    "readout_chart": "red",
    "adc_chart": "violet"
}

const plot_rf_data = {
// x: x_standard,
// y: dummy_data,
// xaxis: 'x1',
// yaxis: 'y1',
// type: 'scatter',
name: 'RF pulse',
line: {
    color: "blue",
}
// hovertemplate: '<b>' + text + '</b><br> %{y:.2f}<extra></extra>'
};

const plot_slice_data = {
// x: x_standard,
// y: dummy_data,
// xaxis: 'x2',
// yaxis: 'y2',
// type: 'scatter',
name: 'slice',
line: {
    color: 'orange',
  }
// text: slice_text,
// hovertemplate: '<b> %{text}</b><br> %{y:.2f}<extra></extra>'
};

const plot_phase_data = {
// x: x_standard,
// y: dummy_data,
// xaxis: 'x3',
// yaxis: 'y3',
// type: 'scatter',
name: 'phase',
line: {
    color: 'green',
  }
// text: phase_text,
// hovertemplate: '<b> %{text}</b><br> %{y:.2f}<extra></extra>'
};

const plot_readout_data = {
// x: x_standard,
// y: dummy_data,
// xaxis: 'x4',
// yaxis: 'y4',
// type: 'scatter',
name: 'readout',
line: {
    color: 'red',
  }
// text: readout_text,
// hovertemplate: '<b> %{text}</b><br> %{y:.2f}<extra></extra>'
};

const plot_adc_data = {
// x: x_standard,
// y: dummy_data,
// xaxis: 'x5',
// yaxis: 'y5',
// type: 'scatter',
name: 'ADC',
line: {
    color: 'violet',
  }
// text: adc_text,
// hovertemplate: '<b> %{text}</b><br> %{y:.2f}<extra></extra>'
};

const layout = {
    plot_bgcolor:"rgba(0,0,0,0.1)",
    paper_bgcolor:"rgba(0,0,0,0.6)",
    height: window.innerHeight/5,
    legend: {
        font: {
        family: 'sans-serif',
        size: 12,
        color: 'rgba(255,255,255,0.8)'
        },
    },
    showlegend: false,
      margin: {
        t: 20,
        b: 40
      },
    title : {
        text: ""
    },
    xaxis: {
        title: "time (ms)",
        titlefont: {
            family: 'Arial, sans-serif',
            size: 12,
            color: 'rgba(255,255,255,0.9)'
        },
        tickformat: "digits",
        tickfont : {
        color : 'rgba(255,255,255,0.9)'
        },
        "gridcolor": "rgba(255,255,255,0.05)",
        "zerolinecolor": "rgba(255,255,255,0.1)",
        range: [0, 200],
        // fixedrange: true,
    },
    yaxis: {
        title: "RF (V)",
        titlefont: {
            family: 'Arial, sans-serif',
            size: 12,
            color: 'rgba(255,255,255,0.9)'
        },
        tickfont : {
        color : 'rgba(255,255,255,0.9)'
        },
        "gridcolor": "rgba(255,255,255,0.05)",
        "zerolinecolor": "rgba(255,255,255,0.1)",
        fixedrange: true,
        range: [-1.75, 1.75],
    },
};

var rf_layout = JSON.parse(JSON.stringify(layout));
var slice_layout =  JSON.parse(JSON.stringify(layout));
var phase_layout = JSON.parse(JSON.stringify(layout));
var readout_layout = JSON.parse(JSON.stringify(layout));
var adc_layout = JSON.parse(JSON.stringify(layout));

rf_layout["yaxis"]["title"] = "RF (V)";
slice_layout["yaxis"]["title"] = "Slice (mT/m)";
phase_layout["yaxis"]["title"] = "Phase (mT/m)";
readout_layout["yaxis"]["title"] = "Readout (mT/m)";
adc_layout["yaxis"]["title"] = "ADC (on/off)";

rf_layout["xaxis"]["title"] = "";
slice_layout["xaxis"]["title"] = "";
phase_layout["xaxis"]["title"] = "";
readout_layout["xaxis"]["title"] = "";

// We will use the shape template and keep adding to the total shapes in one axis.
var shapes_array = [];
const shape_height = 1.1;
var shape_template = 
    {
      type: 'rect',
    //   layer: 'above',
      xref: 'x',
      yref: 'y',
      x0: 0,
      y0: 0,
      x1: 50,
      y1: shape_height,
      line: {
        color: 'rgb(129, 133, 137)',
        width: 1
      },
      fillcolor: 'rgba(129, 133, 137, 0.2)'
    };

var line_shape_template = {
    type: 'line',
    layer: 'below',
    x0: 0,
    y0: 0,
    x1: 0,
    // yref: 'paper',
    y1: shape_height,
    line: {
        color: 'grey',
        width: 1.5,
        dash: 'dot'
    },
}

// keeping default 10 for now, later to be set by user.
const anchor_time = 10;

const config = {
    scrollZoom: true,
    responsive: true,
    editable: true,
    edits: {
        axisTitleText: false,
        titleText: false,
        // shapePosition: false
    },
    // doubleClick: false,
    // displayModeBar: false,
}

Plotly.newPlot('rf_chart', [plot_rf_data], rf_layout, config);
Plotly.newPlot('slice_chart', [plot_slice_data], slice_layout, config);
Plotly.newPlot('phase_chart', [plot_phase_data], phase_layout, config);
Plotly.newPlot('readout_chart', [plot_readout_data], readout_layout, config);
Plotly.newPlot('adc_chart', [plot_adc_data], adc_layout, config);

// If the size of window is changed, we update the layout!
const rf_chart = document.getElementById('rf_chart');
const slice_chart = document.getElementById('slice_chart');
const phase_chart = document.getElementById('phase_chart');
const readout_chart = document.getElementById('readout_chart');
const adc_chart = document.getElementById('adc_chart')
window.onresize = function() {
    var update = {
        "height": window.innerHeight/5,
        "width": rf_chart.offsetWidth,
    }
    Plotly.relayout(rf_chart, update);
    Plotly.relayout(slice_chart, update);
    Plotly.relayout(phase_chart, update);
    Plotly.relayout(readout_chart, update);
    Plotly.relayout(adc_chart, update);
};

$(document).ready(function() {
    let dragged = null;

    $(".drag").each(function () {
        var source = this;
        source.addEventListener("dragstart", (event) => {
        // store the element that is being dragged.
        dragged = event.target;
        });
    });

    $(".dropzone").each(function () {
        var target = this;
        target.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
        });
    });

    $(".dropzone").each(function () {
        var target = this;
        target.addEventListener("drop", (event) => {
        // prevent default action (open as link for some elements)
        event.preventDefault();

        let xInDataCoord = mx*event.x + cx;
        console.log(dragged.id +" dropped at " + target.id + " | Location: " + Math.round(xInDataCoord));
        
        let dragged_array = object_to_array[dragged.id];
        let starting_point = xInDataCoord;
        // if ("shapes" in target.layout) {
        //     // If a trace is added previously, retrieving its end time.
        //     starting_point = target.layout.shapes.slice(-1)[0]["x1"]+10;
        // }
        let x_data = []
        for (let i=0; i<dragged_array.length; i+=1) {
            x_data.push(starting_point+i);
        }
        let data = {};
        data["y"] = dragged_array;
        data["x"] = x_data;
        data["line"] = {"color" : axis_id_to_color[target.id]};
        data["hovertemplate"] = '<b>' +  dragged.innerHTML + '</b><br> %{y:.2f}<extra></extra>';
        Plotly.addTraces(target, data);

        // Update the trace by adding a box around it.
        var shape = JSON.parse(JSON.stringify(shape_template));
        shape["x0"] = starting_point;
        shape["x1"] = starting_point + dragged_array.length;
        let added_shapes=[];
        if ("shapes" in target.layout) { added_shapes = target.layout.shapes;}
        added_shapes.push(shape);

        // add a line shape to show anchor point.
        var line_shape = JSON.parse(JSON.stringify(line_shape_template));
        line_shape["x0"] = starting_point+anchor_time;
        line_shape["x1"] = starting_point+anchor_time;
        added_shapes.push(line_shape);

        var update = {
            shapes: added_shapes
            };
        Plotly.relayout(target, update);
        
        // We create a new Box object and store it.
        // target.id + trace_number : Box object
        boxObj = new Box(object_to_type[dragged.id], starting_point);
        let trace_number = target.data.length - 1; // Trace number is simply the index of current added trace i.e last index.
        trace_to_box_object[target.id + trace_number] = boxObj
        });
    });

    // Delete last drawn trace on the respective axis.
    // Commenting it out for now- might be better to implement this using edit object popup.
    // $(".dropzone").each(function () {
    //     var plot = this;
    //     plot.on('plotly_doubleclick', function(data) {
    //         if (shiftIsPressed) {
    //             try {
    //                 Plotly.deleteTraces(plot, -1);
    //                 console.log("Deleted last trace from " + plot.id);
    //               }
    //               catch(err) {
    //                 console.log("No traces to delete!")
    //               }
    //         }
    //     });
    // });

    // sync zoom among all plots.
    // var plots = [rf_chart, slice_chart, phase_chart, readout_chart, adc_chart];
    // function relayout(ed) {
    //     plots.forEach((plot, i) => {
    //         let x = plot.layout.xaxis;
    //         if (ed["xaxis.autorange"] && x.autorange) return;
    //         if (
    //         x.range[0] != ed["xaxis.range[0]"] ||
    //         x.range[1] != ed["xaxis.range[1]"]
    //         )
    //         Plotly.relayout(plot, ed);
    //     });
    // }
    $(".dropzone").each(function () {
        var plot = this;
        plot.on("plotly_relayout", function(ed) {
            if ("shapes" in ed || "xaxis.range[0]" in ed) {
                console.log("Not moved!");
            } else {
                try {
                    console.log("Moved!");
                    // Here, the offset of 1 is because there is one default trace present in the plot to show empty plots.
                    // and division by 2 is because we have 2 shapes per trace. One for box and other for anchor position.
                    let shape_number = parseInt(Object.keys(ed)[0][7]);
                    let trace_number = (shape_number/2)+1;
                    for (var key in ed) {
                        if (key.endsWith(".x0")) {
                            var starting_point = ed[key];
                        }
                        if (key.endsWith(".y0")) {
                            var y0_val = ed[key];
                        }
                        if (key.endsWith(".x1")) {
                            var ending_point = ed[key];
                        }
                        if (key.endsWith(".y1")) {
                            var y1_val = ed[key];
                        }
                    }

                    // If the width or height of the shape is changed, it has been stretched/squeezed not moved.
                    var dimensions = get_trace_dimensions(plot, trace_number);
                    if (Math.abs((ending_point - starting_point) - dimensions[0]) > 2 || Math.abs((y1_val - y0_val) - dimensions[1]) > 0.25) {
                        console.log("Stretched/squeezed not moved!!!");
                        // We revert the stretch/squeeze and return.
                        revert_shape_change(plot, shape_number);
                        return;
                    }

                    // If the y0 value is not zero after moving for a shape, we want to move the shape to zero.
                    if (Math.abs(y0_val) != 0) {
                        console.log("Lifted!");
                        move_shape_to_zero_line(plot, shape_number);
                    }
                    
                    let y = plot.data[trace_number]["y"];
                    let line = plot.data[trace_number]["line"];
                    let hovertemplate = plot.data[trace_number]["hovertemplate"];
                    
                    
                    
                    // Draw a trace at the new location
                    let x_data = []
                    for (let i=0; i<y.length; i+=1) {
                        x_data.push(starting_point+i);
                    }
                    let data = {};
                    data["y"] = y;
                    data["x"] = x_data;
                    data["line"] = line;
                    data["hovertemplate"] = hovertemplate;

                    if (plot.data[trace_number]["mode"]=="markers") {
                        data["type"] = "scatter";
                        data["mode"] = "markers";
                        data["marker"] = {
                            color: line.color,
                            size: 4,
                            }
                        }
                                        
                    // delete the trace from the old location.
                    Plotly.deleteTraces(plot, trace_number);

                    Plotly.addTraces(plot, data, trace_number);

                    // Move the vertical line shape to the new location
                    // Here, shape_number + 1, will give the line shape number, as we are always creating line shape after box shape.
                    move_vertical_line_shape(plot, shape_number+1, starting_point);

                    // Update the starting point in the box object as well.
                    trace_to_box_object[plot.id + trace_number].start_time = starting_point;
                }
                catch (err) {
                    console.log(err);
                    console.log("Not a valid move!");
                }
            }
        });
    });

    var selected_trace_number = null;
    var selected_plot = null;
    $(".dropzone").each(function () {
        let plot = this;
        plot.on('plotly_click', function(data){
            if (!shiftIsPressed) return;
            selected_trace_number = data.points[0].curveNumber;
            selected_plot = plot;
            load_modal_values(plot, selected_trace_number);
            $('#parametersModal').modal('toggle');
        });
    });

    $("#save_changes_btn").on( "click", function(event) {
        let plot = selected_plot;
        let elements = document.forms["parametersForm"].getElementsByTagName("input");
        elements = Array.from(elements);
        save_modal_values(plot, selected_trace_number);

        // If the trace is already variable, we return.
        if (plot.data[selected_trace_number]["mode"]=="markers") {
            $('#parametersModal').modal('toggle');
            return;
        }
        if ($("#variableRadio").is(':checked')) {
            // Replot the trace and give it variable appearance.
            make_trace_variable(plot, selected_trace_number);
        }
        $('#parametersModal').modal('toggle');
    });

    $("#delete_object_btn").on( "click", function(event) {
        let plot = selected_plot;
        $('#parametersModal').modal('toggle');
        Plotly.deleteTraces(plot, selected_trace_number);
        delete_shapes(plot, (selected_trace_number-1)*2);
        delete trace_to_box_object[plot.id + selected_trace_number];
    });

    $("#kernel-time-btn").click(function () {
        var kernel_time = $("#kernelTimeInput").val();
        $(".dropzone").each(function () {
            var plot = this;
            // Change the range and relayout plot.
            let update = {
                "xaxis.range": [0, kernel_time]
                };
            Plotly.relayout(plot, update);
            recalculate_mouse_to_plot_conversion_variables();
        });
    });

    $("#modal_close_btn").on( "click", function() {
        $('#parametersModal').modal('toggle');
    });
    $("#modal_close_logo_btn").on( "click", function() {
        $('#parametersModal').modal('toggle');
    });

    $('#variableAmplitudeGroup').hide();

    $('input[type="radio"]').click(function(){
        if ($(this).is(':checked')) {
          if ($(this).val() == "constant") {
            $('#variableAmplitudeGroup').hide();
          }
          else if ($(this).val() == "variable") {
            $('#variableAmplitudeGroup').show();
          }
        }
    });

    $("#generate-sdl-btn").click(function(){
        const sdl_objects = [];
        for (var key in trace_to_box_object) {
            sdl_objects.push(JSON.stringify(trace_to_box_object[key]));
        }
        send_data(sdl_objects);
    });
});

// Check whether shift button is pressed
$(document).keydown(function(event) {
    if (event.which == "16") {
        shiftIsPressed = true;
    }
});
$(document).keyup(function() {
    shiftIsPressed = false;
});
var shiftIsPressed = false;

// Pre processing code to convert the mouse point x-value to plot's xaxis value.
var xaxis = rf_chart._fullLayout.xaxis;
var margin = rf_chart._fullLayout.margin;
var offsets = rf_chart.getBoundingClientRect();
var xy1 = rf_chart.layout.xaxis.range[0];
var xy2 = rf_chart.layout.xaxis.range[1];
var xx1 = offsets.left + margin.l;
var xx2 = offsets.left + rf_chart.offsetWidth - margin.r;
var mx = (xy2 - xy1) / (xx2 - xx1);
var cx = -(mx * xx1) + xy1;

function recalculate_mouse_to_plot_conversion_variables() {
    xaxis = rf_chart._fullLayout.xaxis;
    margin = rf_chart._fullLayout.margin;
    offsets = rf_chart.getBoundingClientRect();
    xy1 = rf_chart.layout.xaxis.range[0];
    xy2 = rf_chart.layout.xaxis.range[1];
    xx1 = offsets.left + margin.l;
    xx2 = offsets.left + rf_chart.offsetWidth - margin.r;
    mx = (xy2 - xy1) / (xx2 - xx1);
    cx = -(mx * xx1) + xy1;
}

function move_shape_to_zero_line(plot, shape_number) {
    let shapes = JSON.parse(JSON.stringify(plot.layout["shapes"]));
    let trace_number = (shape_number/2)+1;
    if (plot.data[trace_number]["mode"]=="markers") shapes[shape_number]["y0"] = -shape_height;
    else shapes[shape_number]["y0"] = 0;
    shapes[shape_number]["y1"] = shape_height;
    var update = {
        shapes: shapes
        };
    Plotly.relayout(plot, update);
}

function move_vertical_line_shape(plot, line_shape_number, starting_point) {
    let shapes = JSON.parse(JSON.stringify(plot.layout["shapes"]));
    let pos = starting_point + anchor_time;
    shapes[line_shape_number]["x0"] = pos;
    shapes[line_shape_number]["x1"] = pos;
    var update = {
        shapes: shapes
        };
    Plotly.relayout(plot, update);
}

function get_trace_dimensions(plot, trace_number) {
    let x_arr = plot.data[trace_number]["x"];
    let y_arr = plot.data[trace_number]["y"];
    let width = x_arr.slice(-1)[0] - x_arr[0] + 1;
    let height = Math.max(...y_arr) - Math.min(...y_arr);
    return [width, height];
}

function revert_shape_change(plot, shape_number) {
    let shapes = JSON.parse(JSON.stringify(plot.layout["shapes"]));
    let trace_number = (shape_number/2)+1;
    if (plot.data[trace_number]["mode"]=="markers") shapes[shape_number]["y0"] = -shape_height;
    else shapes[shape_number]["y0"] = 0;
    shapes[shape_number]["y1"] = shape_height;
    let x_arr = plot.data[trace_number]["x"];
    shapes[shape_number]["x0"] = x_arr[0];
    shapes[shape_number]["x1"] = x_arr.slice(-1)[0];
    let update = {
        shapes: shapes
        };
    Plotly.relayout(plot, update);
}

function make_trace_variable(plot, trace_number) {
    let y = plot.data[trace_number]["y"];
    let x = plot.data[trace_number]["x"];
    let line = plot.data[trace_number]["line"];
    let hovertemplate = plot.data[trace_number]["hovertemplate"];
    
    // delete the old trace.
    Plotly.deleteTraces(plot, trace_number);
    
    // Draw a trace at the new location
    let y_data = []
    for (let i=0; i<y.length; i++) {
        let val = y[i];
        if (i % 2 == 0) val = val * -1;
        y_data.push(val);
    }
    let data = {};
    data["y"] = y_data;
    data["x"] = x;
    data["line"] = line;
    data["hovertemplate"] = hovertemplate;
    data["type"] = "scatter";
    data["mode"] = "markers";
    data["marker"] = {
        color: line.color,
        size: 4,
      },
    Plotly.addTraces(plot, data, trace_number);
    change_shapes_variable(plot, (trace_number-1)*2);
}

function change_shapes_variable(plot, shape_number) {
    let line_shape_number = shape_number + 1;
    let box_shape_number = shape_number;
    let shapes = JSON.parse(JSON.stringify(plot.layout["shapes"])); 
    shapes[line_shape_number]["y0"] = -shape_height;
    shapes[box_shape_number]["y0"] = -shape_height;
    shapes[box_shape_number]["fillcolor"] = 'rgba(206 249 113, 0.1)';
    var update = {
        shapes: shapes
        };
    Plotly.relayout(plot, update);
}

function delete_shapes(plot, shape_number) {
    let shapes = JSON.parse(JSON.stringify(plot.layout["shapes"]));
    // This will delete both vertical and box shape.
    shapes.splice(shape_number, 2)
    var update = {
        shapes: shapes
        };
    Plotly.relayout(plot, update);
}

function load_modal_values(plot, trace_number) {
    boxObj = trace_to_box_object[plot.id + trace_number];
    if (boxObj.type == "rf") {
        $('#rf-parameters-group').show();
    }
    else {
        $('#rf-parameters-group').hide();
    }
    $('#inputName').val(boxObj.name);
    $('#inputStartTime').val(boxObj.start_time);
    $('#inputAnchorTime').val(boxObj.anchor_time);
    $('#inputConstantAmplitude').val(boxObj.amplitude);
    if (boxObj.variable_amplitude) {
        $("#variableRadio").prop("checked", true);
        $('#variableAmplitudeGroup').show();
    }
    else {
        $("#constantRadio").prop("checked", true);
        $('#variableAmplitudeGroup').hide();
    }
    $('#inputStepChange').val(boxObj.step_change);
    $('#inputLoopNumber').val(boxObj.loop_number);
}

function save_modal_values(plot, trace_number) {
    boxObj = trace_to_box_object[plot.id + trace_number];
    boxObj.name = $('#inputName').val();
    boxObj.start_time = $('#inputStartTime').val();
    boxObj.anchor_time = $('#inputAnchorTime').val();
    boxObj.amplitude = $('#inputConstantAmplitude').val();
    boxObj.variable_amplitude = $('#variableRadio').is(':checked');
    boxObj.step_change = $('#inputStepChange').val();
    boxObj.loop_number = $('#inputLoopNumber').val();
}

function send_data(box_objects) {
    $.ajax({
        url: '/process',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ 'box_objects': box_objects}),
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

class Box {
    type = "";
    name = "";
    start_time = 0;
    anchor_time = 0;
    amplitude = 0;
    variable_amplitude = false;
    step_change = 0;
    loop_number = 0;

    constructor(type, start_time) {
        this.type = type;
        this.start_time = start_time;
    }
}

const trace_to_box_object = {}