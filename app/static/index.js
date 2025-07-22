// Hide the spinner by default
$("#sdl-load-spinner").hide();

// Block duration range slider configuration
$("#blockDurationSlider").ionRangeSlider({
    type: "double",
    skin: "flat",
    grid: true,
    min: 0,
    max: 30,
    from: 0,
    to: 10,
    step: 1,
    hide_min_max: true,
    hide_from_to: false,
    drag_interval: true,
    min_interval: 1,
    // postfix: "ms",
    onFinish: function (data) {
        // relayout the plot with new range selection.
        $(".dropzone").each(function () {
            let plot = this;
            let update = {
                "xaxis.range": [data.from, data.to]
            };
            Plotly.relayout(plot, update);
        });
        recalculate_mouse_to_plot_conversion_variables();

        // update the slider max value if the user has selected max value
        let selected_block = $("#block-select").val();
        if (data.to == data.max && selected_block == main_block_str) {
            slider.update({
                max: data.max + 50
            })
        }
    }
});
var slider = $("#blockDurationSlider").data("ionRangeSlider");

const dummy_data = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0]
const rf_array = [3.13304e-005,3.14159,0.000275274,3.14159,0.000741752,3.14159,0.00140054,3.14159,0.00221321,3.14159,0.0031333,3.14159,0.00410657,3.14159,0.00507138,3.14159,0.00595912,3.14159,0.00669486,3.14159,0.00719792,3.14159,0.00738272,3.14159,0.00715954,3.14159,0.0064355,3.14159,0.00511552,3.14159,0.00310332,3.14159,0.00030259,3.14159,0.00338198,0,0.00804349,0,0.0137717,0,0.0206519,0,0.0287638,0,0.0381802,0,0.0489663,0,0.0611784,0,0.0748629,0,0.0900558,0,0.106781,0,0.125052,0,0.144867,0,0.166213,0,0.189063,0,0.213376,0,0.239097,0,0.266157,0,0.294475,0,0.323954,0,0.354486,0,0.385951,0,0.418216,0,0.451138,0,0.484565,0,0.518335,0,0.552279,0,0.586221,0,0.619982,0,0.653377,0,0.686221,0,0.718326,0,0.749508,0,0.779582,0,0.80837,0,0.835698,0,0.861398,0,0.885311,0,0.90729,0,0.927195,0,0.9449,0,0.960293,0,0.973275,0,0.983763,0,0.991689,0,0.997001,0,0.999666,0,0.999666,0,0.997001,0,0.991689,0,0.983763,0,0.973275,0,0.960293,0,0.9449,0,0.927195,0,0.90729,0,0.885311,0,0.861398,0,0.835698,0,0.80837,0,0.779582,0,0.749508,0,0.718326,0,0.686221,0,0.653377,0,0.619982,0,0.586221,0,0.552279,0,0.518335,0,0.484565,0,0.451138,0,0.418216,0,0.385951,0,0.354486,0,0.323954,0,0.294475,0,0.266157,0,0.239097,0,0.213376,0,0.189063,0,0.166213,0,0.144867,0,0.125052,0,0.106781,0,0.0900558,0,0.0748629,0,0.0611784,0,0.0489663,0,0.0381802,0,0.0287638,0,0.0206519,0,0.0137717,0,0.00804349,0,0.00338198,0,0.00030259,3.14159,0.00310332,3.14159,0.00511552,3.14159,0.0064355,3.14159,0.00715954,3.14159,0.00738272,3.14159,0.00719792,3.14159,0.00669486,3.14159,0.00595912,3.14159,0.00507138,3.14159,0.00410657,3.14159,0.0031333,3.14159,0.00221321,3.14159,0.00140054,3.14159,0.000741752,3.14159,0.000275274,3.14159,3.13304e-005,3.14159]
const grad_slice_select_array = [0.0, 0.0455, 0.0909, 0.1364, 0.1818, 0.2273, 0.2727, 0.3182, 0.3636, 0.4091, 0.4545, 0.5, 0.5455, 0.5909, 0.6364, 0.6818, 0.7273, 0.7727, 0.8182, 0.8636, 0.9091, 0.9545, 1.0, 1.0, 0.9545, 0.9091, 0.8636, 0.8182, 0.7727, 0.7273, 0.6818, 0.6364, 0.5909, 0.5455, 0.5, 0.4545, 0.4091, 0.3636, 0.3182, 0.2727, 0.2273, 0.1818, 0.1364, 0.0909, 0.0455, 0.0]
const adc_readout_array = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]

const rf_pulse_array = [];
const rf_phase_array = [];
for (let i=0; i < 128; i++) {
    rf_pulse_array.push(rf_array[2*i]);
}
for (let i=0; i < rf_array.length; i++) {
    if (i % 2 == 1) rf_phase_array.push(rf_array[i]);
}
const step_size = 100;

const block_colors = ["#cf7856", "#978eff", "#5343ff", "#ff0065", "#77b6df", "#457480", "#ba029c", "#31e658", "#ff7f50", "#9be5cc", "#facade", "#fab1ed", "#deface", "#c0ffee", "#beaded", "#a3b899", "#ffaa51", "#216c5c"]
var block_color_counter = 0;

plot_to_box_objects_template = {
    'rf_chart': [],
    'slice_chart': [],
    'phase_chart': [],
    'readout_chart': [],
    'adc_chart': []
}
var plot_to_box_objects = {}
var block_number_to_block_object = {}

// To maintain the block the name for Main block
const main_block_str = "Main";

// blocks will maintain plot data for all the blocks.
var blocks = {}

// To maintain the number of loops on each block.
var block_to_loops = {}

// To maintain the inner html of events for each block.
var block_to_events_html = {}

// To maintain the duration of each block.
var block_to_duration = {[main_block_str]: 10}

const event_type_to_icon_str = {
    "calc": "fa fa-calculator",
    "init": "fa fa-play",
    "sync": "fa fa-refresh"
}

var reset_flag = 0;

var undo_stack = [];
var redo_stack = [];
const max_stack_length = 8;

var viewer_url = "http://127.0.0.1:6010";
var send_to_viewer = true;

const current_version = "1.6";

// Dummy arrays dictionary for array selection.
const grad_100_2650_100 = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0];
const grad_220_10_220 = [0.0, 0.0455, 0.0909, 0.1364, 0.1818, 0.2273, 0.2727, 0.3182, 0.3636, 0.4091, 0.4545, 0.5, 0.5455, 0.5909, 0.6364, 0.6818, 0.7273, 0.7727, 0.8182, 0.8636, 0.9091, 0.9545, 1.0, 0.9545, 0.9091, 0.8636, 0.8182, 0.7727, 0.7273, 0.6818, 0.6364, 0.5909, 0.5455, 0.5, 0.4545, 0.4091, 0.3636, 0.3182, 0.2727, 0.2273, 0.1818, 0.1364, 0.0909, 0.0455, 0.0];
const grad_220_80_220 = [0.0, 0.0455, 0.0909, 0.1364, 0.1818, 0.2273, 0.2727, 0.3182, 0.3636, 0.4091, 0.4545, 0.5, 0.5455, 0.5909, 0.6364, 0.6818, 0.7273, 0.7727, 0.8182, 0.8636, 0.9091, 0.9545, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.9545, 0.9091, 0.8636, 0.8182, 0.7727, 0.7273, 0.6818, 0.6364, 0.5909, 0.5455, 0.5, 0.4545, 0.4091, 0.3636, 0.3182, 0.2727, 0.2273, 0.1818, 0.1364, 0.0909, 0.0455, 0.0];
const grad_30_3840_30 = [0.0, 0.3333, 0.6667, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.6667, 0.3333, 0.0];
var array_name_to_array = {
    "rf_pulse": rf_pulse_array,
    "rf_phase": rf_phase_array,
    "grad_100_2650_100": grad_100_2650_100,
    "grad_220_10_220": grad_220_10_220,
    "grad_220_80_220": grad_220_80_220,
    "grad_30_3840_30": grad_30_3840_30,
    "grad_slice_select": grad_slice_select_array,
    "adc_readout": adc_readout_array,
}

const object_to_array = {
    "rf_excitation_btn" : "rf_pulse",
    "gradient_btn" : "grad_slice_select",
    "adc_readout_btn" : "adc_readout",

}

const object_to_type = {
    "rf_excitation_btn" : "rf",
    "gradient_btn" : "grad",
    "adc_readout_btn" : "adc",
}

const axis_id_to_color = {
    "rf_chart" : "#2F58CD",
    "slice_chart" : "magenta",
    "phase_chart" : "magenta",
    "readout_chart": "magenta",
    "adc_chart": "#4E9F3D"
}

const axis_id_to_axis_name = {
    "rf_chart" : "rf",
    "slice_chart" : "slice",
    "phase_chart" : "phase",
    "readout_chart": "read",
    "adc_chart": "adc"
}

const axis_name_to_axis_id = {
    "rf": "rf_chart",
    "slice": "slice_chart",
    "phase": "phase_chart",
    "read": "readout_chart",
    "adc": "adc_chart"
}

const axis_id_to_default_array = {
    "rf_chart" : "rf_pulse",
    "slice_chart" : "grad_slice_select",
    "phase_chart" : "grad_slice_select",
    "readout_chart": "grad_slice_select",
    "adc_chart": "adc_readout"
}

const plot_rf_data = {
    name: 'RF pulse',
    line: {
        color: "blue",
    }
};

const plot_slice_data = {
    name: 'slice',
    line: {
        color: 'orange',
    }
};

const plot_phase_data = {
    name: 'phase',
    line: {
        color: 'green',
    }
};

const plot_readout_data = {
    name: 'readout',
    line: {
        color: 'red',
    }
};

const plot_adc_data = {
    name: 'ADC',
    line: {
        color: 'violet',
    }
};

const plot_array_data = {
    name: 'Array',
    line: {
        color: 'pink',
    }
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
        b: 25,
        r: 15,
        // l: 60
      },
    title : {
        text: ""
    },
    xaxis: {
        title: {
            text: "time (ms)",
            font: {
                family: 'Arial, sans-serif',
                size: 12,
                color: 'rgba(255,255,255,0.9)'
            }
        },
        tickformat: "~",
        tickfont : {
            family: 'Arial, sans-serif',
            color : 'rgba(255,255,255,0.9)'
        },
        "gridcolor": "rgba(255,255,255,0.05)",
        "zerolinecolor": "rgba(255,255,255,0.1)",
        range: [0, block_to_duration[main_block_str]],
        fixedrange: true,
    },
    yaxis: {
        title: {
            text: "RF (V)",
            font: {
                family: 'Arial, sans-serif',
                size: 12,
                color: 'rgba(255,255,255,0.9)'
            }
        },
        tickfont : {
            family: 'Arial, sans-serif',
            color : 'rgba(255,255,255,0.9)'
        },
        "gridcolor": "rgba(255,255,255,0.05)",
        "zerolinecolor": "rgba(255,255,255,0.1)",
        fixedrange: true,
        range: [-1.25, 1.75],
    },
    dragmode: false,
    hovermode: "x"
};

var rf_layout = JSON.parse(JSON.stringify(layout));
var slice_layout =  JSON.parse(JSON.stringify(layout));
var phase_layout = JSON.parse(JSON.stringify(layout));
var readout_layout = JSON.parse(JSON.stringify(layout));
var adc_layout = JSON.parse(JSON.stringify(layout));

rf_layout["yaxis"]["title"]["text"] = "RF";
slice_layout["yaxis"]["title"]["text"] = "Slice (mT/m)";
phase_layout["yaxis"]["title"]["text"] = "Phase (mT/m)";
readout_layout["yaxis"]["title"]["text"] = "Readout (mT/m)";
adc_layout["yaxis"]["title"]["text"] = "ADC (on/off)";

rf_layout["xaxis"]["title"]["text"] = "";
slice_layout["xaxis"]["title"]["text"] = "";
phase_layout["xaxis"]["title"]["text"] = "";
readout_layout["xaxis"]["title"]["text"] = "";

rf_layout["title"] = {
    text:main_block_str,
    font: {
        family: 'Courier New, monospace',
        size: 18,
        color: 'rgba(255,255,255,0.9)'
    },
    yref: 'paper',
    y: 1
}

// Some extra space for x-axis label.
adc_layout["margin"]["b"] = 30;

// We will use the shape template and keep adding to the total shapes in one axis.
var shapes_array = [];
var shape_height = 1.1;
const default_shape_height = 1.1;
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

var annotation_template = {
    x: 0,
    y: 1.2,
    xref: 'x',
    yref: 'y',
    text: '',
    showarrow: false,
    font: {
      family: 'monospace',
      size: 12,
      color: '#777'
    },
  }

// keeping default 0 for now, later to be set by user.
const anchor_time = 0;

const config = {
    // scrollZoom: true,
    responsive: true,
    editable: false,
    edits: {
        axisTitleText: false,
        titleText: false,
        shapePosition: false
    },
    doubleClick: false,
    displayModeBar: false,
}

Plotly.newPlot('rf_chart', [plot_rf_data], rf_layout, config);
Plotly.newPlot('slice_chart', [plot_slice_data], slice_layout, config);
Plotly.newPlot('phase_chart', [plot_phase_data], phase_layout, config);
Plotly.newPlot('readout_chart', [plot_readout_data], readout_layout, config);
Plotly.newPlot('adc_chart', [plot_adc_data], adc_layout, config);

// Array manager chart
array_chart_layout = {
    plot_bgcolor:"rgba(0,0,0,0.1)",
    paper_bgcolor:"rgba(0,0,0,0.6)",
    showlegend: false,
    // width: 0.2*window.innerWidth,
    height: 0.15*window.innerHeight,
    margin: {
        t: 25,
        b: 25,
        l: 25,
        r: 25
    },
    xaxis: {
        "gridcolor": "rgba(255,255,255,0.05)",
        "zerolinecolor": "rgba(255,255,255,0.05)",
        showticklabels: false,
        fixedrange: true,
        range: [0, block_to_duration[main_block_str]],
    },
    yaxis: {
        "gridcolor": "rgba(255,255,255,0.05)",
        "zerolinecolor": "rgba(255,255,255,0.05)",
        showticklabels: false,
        range: [0, 1.25],
        fixedrange: true,
    },
    dragmode: false
}
Plotly.newPlot('array_manager_chart', [plot_array_data], array_chart_layout, config);

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

// Note: can keep a local copy of this in the future if it causes problems.
let data_state = generate_current_data_state()
const default_data_state = JSON.stringify(data_state);

let data = JSON.parse(localStorage.getItem("data"));
if (data) {
    reload_data(data);
} else {
    // Add initial Main block data to blocks storage.
    save_data();
}

load_parameters_array_dropdown();
load_parameters_phase_array_dropdown();

$(document).ready(function() {
    let dragged = null;

    $(".drag").each(function () {
        var source = this;
        source.addEventListener("dragstart", (event) => {
            // store the element that is being dragged.
            dragged = event.target;
            // show droppable zones.
            $(".nsewdrag").css({
                "filter": "blur(3px)",
                "fill": "#4c96dd4d",
            });
            if (dragged.id == "rf_excitation_btn") {
                event.dataTransfer.setDragImage(rf_drag_image, 0, 0);
            } else if (dragged.id == "gradient_btn") {
                event.dataTransfer.setDragImage(grad_drag_image, 0, 0);
            } else if (dragged.id == "adc_readout_btn") {
                event.dataTransfer.setDragImage(adc_drag_image, 0, 0);
            } else if ($(dragged).hasClass("block_btn")) {
                event.dataTransfer.setDragImage(block_drag_image, 0, 0);
            }
        });
        source.addEventListener("dragend", (event) => {
            // hide droppable zones.
            $(".nsewdrag").css({
                "filter": "blur(0px)",
                "fill": "transparent",
            });
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
        xInDataCoord = parseFloat(xInDataCoord.toFixed(4));
        
        let dragged_array_name = object_to_array[dragged.id];
        let dragged_array = array_name_to_array[dragged_array_name];
        let starting_point = xInDataCoord;

        if (dragged.id == "rf_excitation_btn" && target.id != "rf_chart") {
            fire_alert("Object type not suitable for this axis.");
            return;
        } else if (dragged.id == "gradient_btn" && (target.id == "rf_chart" || target.id == "adc_chart")) {
            fire_alert("Object type not suitable for this axis.");
            return;
        } else if (dragged.id == "adc_readout_btn" && target.id != "adc_chart") {
            fire_alert("Object type not suitable for this axis.");
            return;
        }

        let block_duration = block_to_duration[$('#block-select').val()];
        if (starting_point < 0 || starting_point > block_duration) {
            fire_alert("Drop allowed between 0 and block duration");
            return;
        }

        if ($(dragged).hasClass("block_btn")) {
            let block_name = dragged.id;
            let cur_selected_block = $("#block-select").val();
            // If not a readout block- load directly, else get updated sdl from backend.
            if (block_name == "block_excitation" || block_name == "block_refocusing") {
                $.getJSON('/static/block_checkpoints/'+ block_name + '.json', function(block_data) {
                    load_block_checkpoint(block_data, starting_point, cur_selected_block, cur_selected_block, 0);
                  }).fail(function(jqxhr, textStatus, error) {
                    console.error('Error loading JSON file:', textStatus, error);
                });
            } else {
                let previous_block = get_previous_block(starting_point, cur_selected_block);
                let update_info = {
                    "previous_block": previous_block,
                    "parent_block": cur_selected_block,
                    "block_name": block_name,
                }
                $('#plot-col').addClass('blurred');
                $('#events-col').addClass('blurred');
                toggle_loader_animation(true);
                prepare_data_to_send("update", update_info);
            }
            return;
        }

        let multiplier = 1;
        if (object_to_type[dragged.id] == "rf") {
            multiplier = 2;
        }
        let x_data = []
        for (let i=0; i<dragged_array.length; i+=1) {
            x_data.push(starting_point + multiplier*(i/step_size));
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
        shape["x1"] = starting_point + multiplier*(dragged_array.length/step_size);
        if (target.id == "rf_chart" || target.id == "adc_chart") shape["y1"] = default_shape_height;
        else { shape["y1"] = shape_height; }
        let added_shapes=[];
        if ("shapes" in target.layout) { added_shapes = target.layout.shapes;}
        added_shapes.push(shape);

        // add a line shape to show anchor point.
        var line_shape = JSON.parse(JSON.stringify(line_shape_template));
        line_shape["x0"] = starting_point+anchor_time;
        line_shape["x1"] = starting_point+anchor_time;
        added_shapes.push(line_shape);

        // add a dummy annotation
        var annotation = JSON.parse(JSON.stringify(annotation_template));
        annotation["x"] = starting_point+2.5;
        let added_annotations=[];
        if ("annotations" in target.layout) { added_annotations = target.layout.annotations;}
        added_annotations.push(annotation);

        var update = {
            shapes: added_shapes,
            annotations: added_annotations
            };
        Plotly.relayout(target, update);
        
        // We create a new Box object and store it.
        // [target.id][trace_number-1] : Box object
        // let trace_number = target.data.length - 1; // Trace number is simply the index of current added trace i.e last index.
        boxObj = new Box(object_to_type[dragged.id], starting_point, axis_id_to_axis_name[target.id], [dragged_array_name, dragged_array]);
        boxObj.name = boxObj.type + "_" + (target.data.length - 1);
        let block_name = $('#block-select').val();
        if (!(block_name in plot_to_box_objects)) {
            plot_to_box_objects[block_name] = JSON.parse(JSON.stringify(plot_to_box_objects_template));
        }
        plot_to_box_objects[block_name][target.id].push(boxObj);

        // auto-save data.
        $( "#save-plot-btn" ).trigger( "click" );
        });
    });

    $(".dropzone").each(function () {
        var plot = this;
        plot.on("plotly_relayout", function(ed) {
            if ("shapes" in ed || "xaxis.range[0]" in ed || "xaxis.range" in ed || "yaxis" in ed || "annotations" in ed
                || "plot_bgcolor" in ed || "height" in ed || "width" in ed || Object.keys(ed).length<1) {
                    if ("height" in ed || "shape" in ed) {
                        recalculate_mouse_to_plot_conversion_variables();
                    }
            } else {
                try {
                    console.log("Moved!");
                    // Here, the offset of 1 is because there is one default trace present in the plot to show empty plots.
                    // and division by 2 is because we have 2 shapes per trace. One for box and other for anchor position.
                    let shape_number = parseInt(Object.keys(ed)[0].split("[")[1].split("]")[0]);
                    let trace_number = (shape_number/2)+1;
                    for (var key in ed) {
                        if (key.endsWith(".x0")) {
                            var starting_point = parseFloat(ed[key].toFixed(4));
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
                    block_duration = block_to_duration[$('#block-select').val()];
                    if (starting_point < 0) {
                        starting_point = 0;
                    } else if (starting_point > block_duration) {
                        starting_point = block_duration - 1;
                    }

                    // If the y0 value is not zero after moving for a shape, we want to move the shape to zero.
                    if (Math.abs(y0_val) != 0) {
                        console.log("Lifted!");
                        if ("shapes" in plot.layout)
                            move_shape_to_zero_line(plot, shape_number);
                    }

                    // Update the starting point of the box - both UI and object.
                    let block_name = $('#block-select').val();
                    boxObj = plot_to_box_objects[block_name][plot.id][trace_number-1];
                    // let shift_value =  parseInt(starting_point) - parseInt(boxObj.start_time);

                    // If the box is part of a block, shift all the boxes in that block to the same start point.
                    if (boxObj.block != null) {
                        move_block_boxes(boxObj.block, parseFloat(starting_point));
                    } else {
                        boxObj.start_time = parseFloat(starting_point);
                        change_box_start_time(plot, trace_number, parseFloat(starting_point));
                    }
                }
                catch (err) {
                    console.log(err);
                    console.log("Not a valid move!");
                }
            }
        });
    });

    var popover = new bootstrap.Popover(document.querySelector('.shortcuts-popover'), {
        container: 'body',
        html: true,
        content: $('[data-name="popover-content"]')
      })
    var selected_trace_number = null;
    var selected_plot = null;
    $(".dropzone").each(function () {
        let plot = this;
        plot.on('plotly_click', function(data){
            selected_trace_number = data.points[0].curveNumber;
            selected_plot = plot;

            // box is part of a block.
            let block_name = $('#block-select').val();
            boxObj = plot_to_box_objects[block_name][plot.id][selected_trace_number-1];
            if (boxObj.block != null) {
                if (controlIsPressed) {
                    select_block(boxObj.block);
                    return;
                }
                load_block_modal_values(plot, selected_trace_number);
                $('#blockModal').modal('toggle');
                return;
            }

            if (controlIsPressed) {
                select_box(selected_trace_number, selected_plot);
                return;
            }
            load_modal_values(plot, selected_trace_number);
            $('#parametersModal').modal('toggle');
        });
    });

    $("#save_changes_btn").on( "click", function(event) {
        let plot = selected_plot;
        if (save_modal_values(plot, selected_trace_number)) {
            $('#parametersModal').modal('toggle');
            // auto-save data.
            $( "#save-plot-btn" ).trigger( "click" );
        }
    });

    $("#block_save_changes_btn").on( "click", function(event) {
        let plot = selected_plot;
        save_block_modal_values(plot, selected_trace_number);
        $('#blockModal').modal('toggle');
    });

    $("#delete_object_btn").on( "click", function(event) {
        let plot = selected_plot;
        $('#parametersModal').modal('toggle');
        Plotly.deleteTraces(plot, selected_trace_number);
        delete_shapes(plot, (selected_trace_number-1)*2);
        delete_annotation(plot, selected_trace_number-1);
        let block_name = $('#block-select').val();
        plot_to_box_objects[block_name][plot.id].splice(selected_trace_number-1, 1);
        scale_boxes_amplitude();
    });

    $("#generate-waveform-btn").on( "click", function(event) {
        // Relying on the last set boxObj by the parameters modal loading for type.
        if (boxObj.type == "grad") {
            load_waveform_modal_values($("#gradient-type-select").val());
        } else if (boxObj.type == "rf") {
            load_waveform_modal_values($("#rf-type-select").val());
        } else {
            return;
        }
        $("#waveformModal").modal('toggle');
        $("#parametersModal").modal('toggle');
    });

    $('#gradient-type-select').change(function(){
        load_waveform_modal_values($("#gradient-type-select").val());
    });

    $('#rf-type-select').change(function(){
        load_waveform_modal_values($("#rf-type-select").val());
    });

    $("#adiabatic-type-select").change(function() {
        let adiabatic_type = $("#adiabatic-type-select").val();
        $(".bir4-param").hide();
        $(".wurst-param").hide();
        $(".hyperbolic-param").hide();
        if (adiabatic_type == "bir4") {
            $(".bir4-param").show();
        } else if (adiabatic_type == "wurst") {
            $(".wurst-param").show();
        } else if (adiabatic_type == "hyperbolic") {
            $(".hyperbolic-param").show();
        }
    });


    $("#waveform_save_changes_btn").on( "click", function(event) {
        let event_type = "gradient";
        let selected_type = null;
        if (boxObj.type == "rf") {
            event_type = "rf";
        }
        if (event_type == "gradient") {
            selected_type = $("#gradient-type-select").val();
        } else if (event_type == "rf") {
            selected_type = $("#rf-type-select").val();
        }
        save_waveform_modal_values(event_type, selected_type);
    });

    $(".duplicate-dropdown-item").on( "click", function(e) {
        let target_plot_name = axis_name_to_axis_id[$(e.target).text()];
        let target_plot = document.getElementById(target_plot_name);
        let plot = selected_plot;
        if (plot.id == "rf_chart" && target_plot.id != "rf_chart") {
            fire_alert("Object type not suitable for this axis.");
            return;
        } else if ((plot.id == "slice_chart"  || plot.id == "phase_chart" || plot.id == "readout_chart")
            && (target_plot.id == "rf_chart" || target_plot.id == "adc_chart")) {
            fire_alert("Object type not suitable for this axis.");
            return;
        } else if (plot.id == "adc_chart" && target_plot.id != "adc_chart") {
            fire_alert("Object type not suitable for this axis.");
            return;
        }
        $('#parametersModal').modal('toggle');
        duplicate_box(plot, selected_trace_number, target_plot);
    });

    $("#block_delete_object_btn").on( "click", function(event) {
        let plot = selected_plot;
        let current_block_name = $('#block-select').val();
        boxObj = plot_to_box_objects[current_block_name][plot.id][selected_trace_number-1];
        let block_number = boxObj.block;

        // deleting block from memory
        blockObj = block_number_to_block_object[block_number];
        let block_to_delete = blockObj.name;
        delete blocks[block_to_delete];
        delete block_number_to_block_object[block_number];
        delete block_to_loops[block_to_delete];
        delete block_to_duration[block_to_delete];
        delete block_to_events_html[block_to_delete];
        delete blockObj;

        // deleting block UI in current block window.
        for (var key in plot_to_box_objects[current_block_name]) {
            plot_to_box_objects[current_block_name][key].forEach(function (boxObj, index) {
                if (boxObj.block == block_number) {
                    let trace_number = index + 1;
                    let plot_id = axis_name_to_axis_id[boxObj.axis];
                    let plot = document.getElementById(plot_id);
                    Plotly.deleteTraces(plot, trace_number);
                    delete_shapes(plot, (trace_number-1)*2);
                    delete_annotation(plot, trace_number-1);
                    plot_to_box_objects[current_block_name][plot.id].splice(trace_number-1, 1);
                }
            });
        }
        delete plot_to_box_objects[block_to_delete];

        load_block_select_options();
        $('#block-select').val(current_block_name);
        $('#blockModal').modal('toggle');
    });

    $("#block_enter_btn").on( "click", function() {
        let plot = selected_plot;
        let cur_block = $('#block-select').val();
        let trace_number = selected_trace_number;

        boxObj = plot_to_box_objects[cur_block][plot.id][trace_number-1];
        blockObj = block_number_to_block_object[boxObj.block];
        let new_block = blockObj.name;

        save_block_data(cur_block);
        load_block_data(new_block);
        $('#block-select').val(new_block);
        scale_boxes_amplitude();
        $('#blockModal').modal('toggle');
    });


    $("#block-time-btn").click(function () {
        let block_duration = parseFloat($("#blockDurationInput").val());
        block_to_duration[$('#block-select').val()] = block_duration;
        // Update slider to new max
        slider.update({
            max: Math.ceil(block_duration),
        });
    });

    $("#modal_close_btn").on( "click", function() {
        $('#parametersModal').modal('toggle');
    });
    $("#block_modal_close_btn").on( "click", function() {
        $('#blockModal').modal('toggle');
    });
    $("#modal_close_logo_btn").on( "click", function() {
        $('#parametersModal').modal('toggle');
    });

    $('#variableAmplitudeGroup').hide();

    $('input[type="radio"]').click(function(){
        if ($(this).is(':checked')) {
          if ($(this).val() == "constant") {
            $('#variableAmplitudeGroup').hide();
            $('#inputConstantAmplitude').show();
          }
          else if ($(this).val() == "variable") {
            $('#variableAmplitudeGroup').show();
            $('#inputConstantAmplitude').hide();
          }
        }
    });

    $('#inputMdh').on('input', function() {
        let element = $(this);
        // Resize the textarea according to the text size
        element.css('height', 'auto');
        element.css('height', element.prop('scrollHeight') + 'px');

        // Prettify if the JSON is valid, else signal invalid JSON.
        let text = element.val();
        try {
            let json = JSON.parse(text);
            let prettyText = JSON.stringify(json, null, 4);
            element.removeClass('is-invalid').addClass('is-valid');
            element.val(prettyText);
        } catch (e) {
            element.removeClass('is-valid').addClass('is-invalid');
        }
    });

    $("#reset-btn").click(function(){
        Swal.fire({
            icon: "warning",
            iconColor: "#c35858",
            title: "Do you want to reset the page?",
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: "Reset",
            denyButtonText: "Cancel",
            confirmButtonColor: "red",
            denyButtonColor: "green",
            background: "#3c3c3c",
            color: "white",
            didOpen: () => Swal.getConfirmButton().blur(),
          }).then((result) => {
            if (result.isConfirmed) {
                reset_flag = 1;
                localStorage.removeItem("data");
                location.reload();
            }
        });
    });

    $("#generate-sdl-btn").click(function(){
        prepare_data_to_send("process");
    });

    $(document).on('click', '.array-dropdown', function () {
        $('#array-dropdown-btn').text($(this).text());
    });
    $(document).on('click', '.phase-array-dropdown', function () {
        $('#phase-array-dropdown-btn').text($(this).text());
    });

    $('#arrayConfigModal').on('hidden.bs.modal', function () {
        $('#parametersModal').removeClass('blurred');
        $('#inputArrayName').val("");
        $('#inputArrayValues').val("");
        $('#inputArrayName').removeClass('is-invalid');
        $('#inputArrayName').removeClass('is-valid');
        $('#inputArrayValues').removeClass('is-invalid')
        $('#inputArrayValues').removeClass('is-valid')
        $('#inputArrayNameInvalidFeedback').hide();
        $('#inputArrayValuesInvalidFeedback').hide();
        $('#addArrayValidFeedback').hide();
    });

    $('#save-array-btn').click(function () {
        let arrayName = $('#inputArrayName').val();
        let arrayValues = $('#inputArrayValues').val();
        isNameValid = validateArrayName(arrayName);
        const [areValuesValid, validated_array] = validateArrayValues(arrayValues);
        if (!isNameValid) {
            $('#inputArrayNameInvalidFeedback').show();
            $('#inputArrayName').removeClass('is-valid').addClass('is-invalid');
        }
        if (!areValuesValid) {
            $('#inputArrayValuesInvalidFeedback').show();
            $('#inputArrayValues').removeClass('is-valid').addClass('is-invalid');
        }
        if (isNameValid) {
            $('#inputArrayNameInvalidFeedback').hide();
            $('#inputArrayName').removeClass('is-invalid').addClass('is-valid');
        }
        if (areValuesValid) {
            $('#inputArrayValuesInvalidFeedback').hide();
            $('#inputArrayValues').removeClass('is-invalid').addClass('is-valid');
        }
        if (isNameValid && areValuesValid) {
            $('#addArrayValidFeedback').show();

            // If new array is selected, we simply add the array. We update it otherwise.
            let selected_array_name = $("#array-select").val();
            if (selected_array_name == "New Array") {
                array_name_to_array[arrayName] = validated_array;
            } else {
                // Handling name changed case.
                if (selected_array_name !== arrayName) {
                    delete array_name_to_array[selected_array_name];
                }
                array_name_to_array[arrayName] = validated_array;
            }

            // populate the array selection again with the addition of new array.
            load_parameters_array_dropdown();
            load_parameters_phase_array_dropdown();
            load_array_manager_select_options();
            $("#array-select").val(arrayName);
            update_array_manager_chart(validated_array);
        }
    });

    $('#flexSwitchCheckChecked').click(function(){
        let current_theme = document.documentElement.getAttribute('data-bs-theme');
        if (current_theme == "light") {
            update_theme("dark");
        } else {
            update_theme("light");
        }
    });

    $('#add-block-btn').click(function(){
        if (!add_block_with_selected_boxes())
            return;
        let block_text = "Block_" + block_color_counter;
        let o = new Option(block_text, block_text);
        $(o).html(block_text);
        $("#block-select").append(o);
    });

    $('#save-plot-btn').click(function(){
        save_data();
        $('#saved-msg').removeClass("d-none");
        $('#saved-msg').show();
        setTimeout(function(){
            $('#saved-msg').fadeOut();
          },1000);
    });

    $('#undo-btn').click(function(){
        undo_data();
        recalculate_mouse_to_plot_conversion_variables();
    });

    $('#redo-btn').click(function(){
        redo_data();
        recalculate_mouse_to_plot_conversion_variables();
    });

    $('#checkpoint-collapse-btn').click(function(){
        $(this).find('i').toggleClass('fa-eye-slash fa-eye');
    });

    $('#loops-btn').click(function(){
        load_loops_configuration();
        $('#loopsModal').modal('toggle');
    });
    $('#loops_modal_close_btn').click(function(){
        $('#loopsModal').modal('toggle');
    });

    $('#events_modal_close_btn').click(function(){
        $('#eventsModal').modal('toggle');
    });

    $("#settings_modal_close_btn").click(function(){
        $('#settingsModal').modal('toggle');
    })
    $("#settings_save_changes_btn").click(function(){
        // let old_config = JSON.parse(localStorage.getItem("data"))["configurations"];
        // let new_config = save_configurations();
        // if (old_config["info"]["fov"] !== new_config["info"]["fov"] || old_config["info"]["resolution"] !== new_config["info"]["resolution"]) {
        //     save_data();
        //     prepare_data_to_send("update");
        // }
        $('#settingsModal').modal('toggle');
    })

    $('#arrays-config-btn').click(function(){
        load_array_manager_select_options();
        let plot = document.getElementById("array_manager_chart");
        if (plot.data.length > 0) {
            Plotly.deleteTraces(plot, -1);
        }
        $('#arrayConfigModal').modal('toggle');
    });

    $("#settings-btn").click(function(){
        $("#settingsModal").modal('toggle');
    })

    $('#block-select').change(function(){
        // The title of the displayed block will become our previous block.
        let prev_block = rf_chart.layout["title"]["text"];
        save_block_data(prev_block);
        let current_block = $(this).val();
        load_block_data(current_block);
        scale_boxes_amplitude();
    });

    $('#array-select').change(function(){
        let selected_array_name = $(this).val();
        if (selected_array_name == "New Array") {
            $("#inputArrayName").val("");
            $('#inputArrayValues').val("");
            Plotly.deleteTraces("array_manager_chart", -1);
        } else {
            let selected_array_values = array_name_to_array[selected_array_name];
            $("#inputArrayName").val(selected_array_name);
            $('#inputArrayValues').val(selected_array_values);
            update_array_manager_chart(selected_array_values);
        }
        $('#inputArrayName').removeClass('is-valid');
        $('#inputArrayName').removeClass('is-invalid');
        $('#inputArrayValues').removeClass('is-valid');
        $('#inputArrayValues').removeClass('is-invalid');
        $('#inputArrayNameInvalidFeedback').hide();
        $('#inputArrayValuesInvalidFeedback').hide();
        $('#addArrayValidFeedback').hide();
    });

    $("#inputAnchorTime").hide();
    $('#anchor-time-mode-select').change(function(){
        let selected_mode = $(this).val();
        if (selected_mode == "custom") {
            $("#inputAnchorTime").show();
        } else {
            $("#inputAnchorTime").hide();
        }
    });

    $(".init-params").hide();
    $(".sync-params").hide();
    $('#event-action-select').change(function(){
        $(".calc-params").hide();
        $(".init-params").hide();
        $(".sync-params").hide();
        let selected_action = $(this).val();
        if (selected_action == "calc") {
            $(".calc-params").show();
        } else if (selected_action == "init") {
            $(".init-params").show();
        } else if (selected_action == "sync") {
            $(".sync-params").show();
        }
    });

    $("#loops_save_changes_btn").click(function() {
        let base_block = $('#block-select').val();
        $.each($('.loops-input'), function(index, input) {
            let block = input.dataset.block;
            let loops = input.value;
            let old_loops = block_to_loops[block];
            block_to_loops[block] = loops;
            if (!old_loops) old_loops = 1;
            if (loops != old_loops) {
                reflect_block_loops_change(block, loops, old_loops, base_block);
            }
        });
        // Need to save data here as the annotation update would use the blocks structure.
        save_data();
        update_annotations_loops_count();
        $('#loopsModal').modal('toggle');
    });

    // handle checkpoint file loading.
    const fileInput = document.getElementById('formFileCheckpoint');
    fileInput.oninput = () => {
        let selectedFile = fileInput.files[0];
        let reader = new FileReader();
        reader.readAsText(selectedFile, "UTF-8");
        reader.onload = function(e) {
            try {
                let content = JSON.parse(reader.result);
                let version = content["version"];
                let data = content["data"];
                if (version === current_version) {
                    reload_data(data);
                    save_data();
                } else {
                    fire_alert("Version not supported anymore");
                }
            } catch ({ name, message }) {
                fire_alert("Invalid Checkpoint File");
            }
        };
    }

    $("#download-checkpoint-btn").click(function () {
        let checkpoint_content = {};
        checkpoint_content["version"] = current_version;
        checkpoint_content["data"] = generate_current_data_state();
        let checkpoint_file = new File([JSON.stringify(checkpoint_content)], 'checkpoint_file.json', {
            type: 'text/plain',
        });
        let link = document.createElement('a');
        let url = URL.createObjectURL(checkpoint_file);
        // window.open(url, '_blank').focus();

        link.href = url;
        link.download = checkpoint_file.name;
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    });

    $("#sendToViewerCheck").click(function(){
        send_to_viewer = $(this).is(":checked");
    });

    $("#events_save_changes_btn").click(function() {
        let event_data = {};
        let selected_action = $("#event-action-select").val();
        event_data["event-type"] = selected_action;

        // Save and then reset values.
        // Saving data with hyphens (-) as it gets converted to camel case when data attributes are used.
        if (selected_action == "calc") {
            event_data["input-calc-action-type"] = $("#inputCalcActionType").val();
            event_data["input-calc-float"] = $("#inputCalcFloat").val();
            event_data["input-calc-increment"] = $("#inputCalcIncrement").val();
        } else if (selected_action == "init") {
            event_data["input-init-action-gradients"] = $("#inputInitActionGradients").val();
        } else if (selected_action == "sync") {
            event_data["input-sync-time"] = $("#inputSyncTime").val();
            event_data["input-sync-duration"] = $("#inputSyncDuration").val();
            event_data["input-sync-object"] = $("#inputSyncObject").val();
            event_data["input-sync-event-param"] = $("#inputSyncEventParam").val();
        }
        if (selected_event_btn == null) {
            add_new_event(event_data);
        } else {
            update_event(event_data);
        }
        $('#eventsModal').modal('toggle');
        // save event data.
        let block_name = $('#block-select').val();
        let events_col_inner_html = $("#events-col")[0].innerHTML;
        block_to_events_html[block_name] = events_col_inner_html;
    });

    $("#delete_event_btn").click(function () {
        selected_event_btn.remove();
        $('#eventsModal').modal('toggle');
        // save event data.
        let block_name = $('#block-select').val();
        let events_col_inner_html = $("#events-col")[0].innerHTML;
        block_to_events_html[block_name] = events_col_inner_html;
    });

    $("#add-variable-btn").click(function () {
        let selected_theme = document.documentElement.getAttribute('data-bs-theme');
        let btn_class = selected_theme == "dark" ? "btn-secondary" : "btn-light";
        let variable_group_html = `
            <div class="form-group row variable-group">
                <div class="col-5">
                    <input type="text" class="form-control" placeholder="Name">
                </div>
                <div class="col-1 d-flex align-items-center">
                    <span>:</span>
                </div>
                <div class="col-5">
                    <input type="number" class="form-control" placeholder="Value">
                </div>
                <div class="col-1 d-flex align-items-center">
                    <button class="btn ${btn_class} btn-sm delete-variable-btn">
                        <i class="fa fa-minus-circle"></i>
                    </button>
                </div>
            </div>`;
        $('#variables-section').append(variable_group_html);
    });

    // Handle sdl file uploading.
    const sdlFileInput = document.getElementById('sdlFileInput');
    sdlFileInput.oninput = () => {
        let selectedFile = sdlFileInput.files[0];
        let reader = new FileReader();
        try {
            reader.readAsText(selectedFile, "UTF-8");
            $("#sdl-load-spinner").show();
            $("#sdl-upload-icon").hide();
            $('#plot-col').addClass('blurred');
            $('#events-col').addClass('blurred');
            toggle_loader_animation(true);
        } catch {
            return;
        }
        reader.onload = function(e) {
            try {
                let text = reader.result;
                text = text.replace(/main/g, main_block_str);
                let data_sdl = JSON.parse(text);
                save_data();
                reload_data(JSON.parse(default_data_state));
                populate_global_variables_with_sdl_data(data_sdl);
                make_dummy_blocks();
                load_block_data(main_block_str);
                scale_boxes_amplitude();
                reflect_loops_from_sdl();
                block_color_counter = Object.keys(visited_blocks).length;
            } catch (e) {
                fire_alert("Could not load SDL file");
                console.log(e);
                undo_data();
                redo_stack = [];
            } finally {
                $("#sdl-load-spinner").hide();
                $("#sdl-upload-icon").show();
                $('#plot-col').removeClass('blurred');
                $('#events-col').removeClass('blurred');
                toggle_loader_animation(false);
            }
        };
    }
    $("#upload-sdl-btn").click(function () {
        $("#sdlFileInput").trigger("click");
    });
});

// Check whether shift button is pressed
$(document).keydown(function(event) {
    if (event.which == "16") {
        shiftIsPressed = true;
        update_plot_config(shiftIsPressed);
    }
    if (event.which == "17") {
        controlIsPressed = true;
    }
});
$(document).keyup(function() {
    shiftIsPressed = false;
    update_plot_config(shiftIsPressed);
    controlIsPressed = false;
});
var shiftIsPressed = false;
var controlIsPressed = false;

// Add click handler to add event button.
$(document).on("click", "#add-event-btn", function(){
    // update/clear the modal to default
    $("#eventsModalLabel").text("Add Event");
    $("#event-action-select").val("calc");
    $('#event-action-select').change();
    $("#inputCalcActionType").val('');
    $("#inputCalcFloat").val('');
    $("#inputCalcIncrement").val('');
    $("#inputInitActionGradients").val('');
    $("#inputSyncTime").val('');
    $("#inputSyncDuration").val('');
    $("#inputSyncObject").val('');
    $("#inputSyncEventParam").val('');
    $("#delete_event_btn").hide();
    $('#event-action-select').attr("disabled", false);
    $('#eventsModal').modal('toggle');
    selected_event_btn = null;
});

// Add click handler to each event button.
var selected_event_btn = null;
$(document).on("click", ".event-btn", function () {
    selected_event_btn = $(this);
    let clicked_event_data = $(this).data();
    let event_type = clicked_event_data["eventType"];
    $("#event-action-select").val(event_type);
    $('#event-action-select').change();
    $('#event-action-select').attr("disabled", true);
    $("#eventsModalLabel").text("Configure Event");
    $("#delete_event_btn").show();

    if (event_type == "calc") {
        $("#inputCalcActionType").val(clicked_event_data["inputCalcActionType"]);
        $("#inputCalcFloat").val(clicked_event_data["inputCalcFloat"]);
        $("#inputCalcIncrement").val(clicked_event_data["inputCalcIncrement"]);
    } else if (event_type == "init") {
        $("#inputInitActionGradients").val(clicked_event_data["inputInitActionGradients"]);
    } else if (event_type == "sync") {
        $("#inputSyncTime").val(clicked_event_data["inputSyncTime"]);
        $("#inputSyncDuration").val(clicked_event_data["inputSyncDuration"]);
        $("#inputSyncObject").val(clicked_event_data["inputSyncObject"]);
        $("#inputSyncEventParam").val(clicked_event_data["inputSyncEventParam"]);
    }

    $('#eventsModal').modal('toggle');
})

// Add click handler to delete each variable item in the settings.
$(document).on('click', '.delete-variable-btn', function() {
    $(this).closest('.variable-group').remove();
});

// Add click handler the plot size button.
$(document).on("click", "#plot-size-btn", function () {
    if ($("#leftSidebar").is(":visible")) {
        maximize_plot_area();
        $("#plot-size-icon").removeClass("fa-expand").addClass("fa-compress");
    } else {
        minimize_plot_area();
        $("#plot-size-icon").removeClass("fa-compress").addClass("fa-expand");
    }
});

// Initialize drag images
let rf_drag_image = new Image();
let grad_drag_image = new Image();
let adc_drag_image = new Image();
let block_drag_image = new Image();
rf_drag_image.src = "/static/drag_images/rf.png";
grad_drag_image.src = "/static/drag_images/gradient.png";
adc_drag_image.src = "/static/drag_images/adc.png";
block_drag_image.src = "/static/drag_images/block.png";

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
    // if (plot.data[trace_number]["mode"]=="markers") shapes[shape_number]["y0"] = -shape_height;
    shapes[shape_number]["y0"] = 0;

    let height = shape_height;
    if (plot.id == "rf_chart" || plot.id == "adc_chart") height = default_shape_height;

    // changing shape if the data is negative.
    let y = plot.data[trace_number]["y"];
    let middle_element = y[Math.floor(y.length / 2)];
    if (middle_element < 0) {
        shapes[shape_number]["y1"] = -height;
    } else {
        shapes[shape_number]["y1"] = height;
    }

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

function move_box_shape(plot, box_shape_number, starting_point) {
    let shapes = JSON.parse(JSON.stringify(plot.layout["shapes"]));
    let pos = starting_point;
    let width = shapes[box_shape_number]["x1"] - shapes[box_shape_number]["x0"];
    shapes[box_shape_number]["x0"] = pos;
    shapes[box_shape_number]["x1"] = pos + width;
    var update = {
        shapes: shapes
        };
    Plotly.relayout(plot, update);
}

function move_annotation(plot, annotation_number, middle_point) {
    let annotations = JSON.parse(JSON.stringify(plot.layout["annotations"]));
    annotations[annotation_number]["x"] = middle_point;
    var update = {
        annotations: annotations
        };
    Plotly.relayout(plot, update);
}

function change_annotation_text(plot, annotation_number, block_name) {
    let annotations = JSON.parse(JSON.stringify(plot.layout["annotations"]));
    let loops = block_to_loops[block_name];
    annotations[annotation_number]["text"] = block_name + " (x" + loops + ")";
    var update = {
        annotations: annotations
        };
    Plotly.relayout(plot, update);
}

function update_hover_template(trace_number, plot, hover_text) {
    let update = {
        'hovertemplate': hover_text
    };
    Plotly.restyle(plot, update, trace_number);
}

function update_block_boxes_name(block_number, text) {
    let block_name = $('#block-select').val();
    for (var key in plot_to_box_objects_template) {
        plot_to_box_objects[block_name][key].forEach(function (boxObj, index) {
                if (boxObj.block == block_number) {
                    let trace_number = index + 1;
                    let plot_id = axis_name_to_axis_id[boxObj.axis];
                    let plot = document.getElementById(plot_id);
                    change_annotation_text(plot, trace_number-1, text);
                    let hover_text = '<b>' + text + '</b><extra></extra>';
                    update_hover_template(trace_number, plot, hover_text);
                }
        });
    }
}

function update_box_shape(plot, box_shape_number, starting_point, ending_point) {
    let shapes = JSON.parse(JSON.stringify(plot.layout["shapes"]));
    shapes[box_shape_number]["x0"] = starting_point;
    shapes[box_shape_number]["x1"] = ending_point;
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

function change_trace_type(plot, trace_number, box_array_name, toVariable) {
    let  y = array_name_to_array[box_array_name];

    let x = plot.data[trace_number]["x"];
    let line = plot.data[trace_number]["line"];
    let hovertemplate = plot.data[trace_number]["hovertemplate"];
    
    // delete the old trace.
    Plotly.deleteTraces(plot, trace_number);
    
    // Draw a trace at the new location
    let y_data = [];
    let x_data = [];
    let data = {};

    if (toVariable) {
        let max_amplitude = shape_height - 0.1;
        for (let i=0; i<y.length; i++) {
            let val = y[i];
            x_data.push(x[i]);
            x_data.push(x[i] + 0.0000001);
            x_data.push(x[i] + 0.0000002);
            x_data.push(x[i] + 0.0000003);
            y_data.push(val * max_amplitude);
            y_data.push(val * 0.75 * max_amplitude);
            y_data.push(val * 0.5 * max_amplitude);
            y_data.push(val * 0.25 * max_amplitude);
        }
        data["type"] = "scatter";
        data["mode"] = "markers";
        data["marker"] = {
            color: line.color,
            size: 2,
        };
    } else {
        for (let i=0; i<x.length; i+=4) {
            x_data.push(x[i]);
        }
        for (let i=0; i<y.length; i+=1) {
            y_data.push(y[i]);
        }
    }

    data["y"] = y_data;
    data["x"] = x_data;
    data["line"] = line;
    data["hovertemplate"] = hovertemplate;
    Plotly.addTraces(plot, data, trace_number);
    change_shapes_variable(plot, (trace_number-1)*2, toVariable);
}

function change_shapes_variable(plot, shape_number, toVariable) {
    let line_shape_number = shape_number + 1;
    let box_shape_number = shape_number;
    let shapes = JSON.parse(JSON.stringify(plot.layout["shapes"]));
    if (toVariable) {
        shapes[box_shape_number]["fillcolor"] = 'rgba(206 249 113, 0.1)';
        shapes[box_shape_number]["y1"] = shape_height;
        shapes[line_shape_number]["y1"] = shape_height;
    }
    else shapes[box_shape_number]["fillcolor"] = 'rgba(129, 133, 137, 0.2)';
    var update = {
        shapes: shapes
        };
    Plotly.relayout(plot, update);
}

function flip_shapes(plot, shape_number, multiplier) {
    let line_shape_number = shape_number + 1;
    let box_shape_number = shape_number;
    let shapes = JSON.parse(JSON.stringify(plot.layout["shapes"]));
    let current_y1 = shapes[box_shape_number]["y1"];
    shapes[line_shape_number]["y1"] = Math.abs(current_y1) * multiplier;
    shapes[box_shape_number]["y1"] = Math.abs(current_y1) * multiplier;
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

function delete_annotation(plot, annotation_number) {
    let annotations = JSON.parse(JSON.stringify(plot.layout["annotations"]));
    annotations.splice(annotation_number, 1);
    var update = {
        annotations: annotations
        };
    Plotly.relayout(plot, update);
}

function load_modal_values(plot, trace_number) {
    let block_name = $('#block-select').val();
    boxObj = plot_to_box_objects[block_name][plot.id][trace_number-1];
    $('.rf-param').hide();
    $('.grad-param').hide();
    $('.adc-param').hide();
    if (boxObj.type == "rf") {
        $('.rf-param').show();
    } else if (boxObj.type == "grad") {
        $('.grad-param').show();
    } else {
        $('.adc-param').show();
    }
    $('#inputName').val(boxObj.name);
    $('#inputStartTime').val(boxObj.start_time);
    $('#inputAnchorTime').val(boxObj.anchor_time);
    $('#array-dropdown-btn').text(boxObj.array_info.name);
    $('#phase-array-dropdown-btn').text(boxObj.phase_array_info.name);

    if (boxObj.type == "rf") {
        $('#inputRfAddedPhaseType').val(boxObj.rf_added_phase_type);
        $('#inputRfAddedPhase').val(boxObj.rf_added_phase_float);
        $('#inputRfInitialPhase').val(boxObj.init_phase);
        $('#inputRfThickness').val(boxObj.thickness);
        $('#inputRfFlipAngle').val(boxObj.flip_angle);
        $('#inputRfDuration').val(boxObj.rf_duration);
        if (!boxObj.purpose || boxObj.purpose == "excitation") {
            $("#rfExcitationRadio").prop("checked", true);
        } else {
            $("#rfRefocusRadio").prop("checked", true);
        }
    } else if (boxObj.type == "grad") {
        $('#inputConstantAmplitude').val(boxObj.amplitude);
        // $('#inputLoopNumber').val(boxObj.loop_number);
        $('#inputGradEquationName').val(boxObj.equation_info.name);
        $('#inputGradEquationExpression').val(boxObj.equation_info.expression);
        if (boxObj.variable_amplitude) {
            $("#variableRadio").prop("checked", true);
            $('#variableAmplitudeGroup').show();
            $('#inputConstantAmplitude').hide();
        } else {
            $("#constantRadio").prop("checked", true);
            $('#variableAmplitudeGroup').hide();
            $('#inputConstantAmplitude').show();
        }
        if (boxObj.flip_amplitude) {
            $("#flipAmplitudeCheck").prop("checked", true);
        } else {
            $("#flipAmplitudeCheck").prop("checked", false);
        }
    } else {
        $('#inputAdcDuration').val(boxObj.adc_duration);
        $('#inputAdcFrequency').val(boxObj.frequency);
        $('#inputAdcPhase').val(boxObj.phase);
        $('#inputAdcAddedPhaseType').val(boxObj.adc_added_phase_type);
        $('#inputAdcAddedPhase').val(boxObj.adc_added_phase_float);
        $('#inputAdcSamples').val(boxObj.samples);
        $('#inputAdcDwellTime').val(boxObj.dwell_time);
        $('#inputMdh').val(boxObj.mdh);
        $("#inputMdh").removeClass('is-invalid');
        $("#inputMdh").removeClass('is-valid');
    }
}

function load_block_modal_values(plot, trace_number) {
    let block_name = $('#block-select').val();
    boxObj = plot_to_box_objects[block_name][plot.id][trace_number-1];
    blockObj = block_number_to_block_object[boxObj.block];
    $('#inputBlockName').val(blockObj.name);
    $('#blockStartTime').val(blockObj.start_time);
    $('#inputBlockMessage').val(blockObj.message);
    if (blockObj.print_counter) {
        $("#printCounterCheck").prop("checked", true);
    } else {
        $("#printCounterCheck").prop("checked", false);
    }
    $('#displayBlockDuration').val(block_to_duration[blockObj.name].toFixed(2));
}

function save_modal_values(plot, trace_number) {
    if (!validateBoxName($('#inputName').val())) {
        fire_alert("Name cannot be empty.");
        return false;
    }
    let block_name = $('#block-select').val();
    boxObj = plot_to_box_objects[block_name][plot.id][trace_number-1];
    boxObj.name = $('#inputName').val();

    // If the start time has been changed in the modal, we move the box.
    let input_start_time = $('#inputStartTime').val();
    if (boxObj.start_time != input_start_time)
        change_box_start_time(plot, trace_number, parseFloat(input_start_time));


    // if selected array has been changed, we change the box array.
    let selected_box_array_name = $('#array-dropdown-btn').text();
    let selected_phase_array_name = $('#phase-array-dropdown-btn').text();
    let flip = $('#flipAmplitudeCheck').is(':checked');
    let array_changed_flag = false;
    if (selected_box_array_name != boxObj.array_info.name) {
        let new_array = array_name_to_array[selected_box_array_name];
        change_box_array(plot, trace_number, parseFloat(input_start_time), new_array);
        array_changed_flag = true;
    }

    // If the selected trace type is different than what it already is we change trace - fixed/variable.
    let trace_type_changed_flag = false;
    if (boxObj.type == "grad") {
        if ($("#variableRadio").is(':checked')) {
            if (!boxObj.variable_amplitude || array_changed_flag) {
                change_trace_type(plot, trace_number, selected_box_array_name, true);
                trace_type_changed_flag = true;
            }
        } else {
            if (boxObj.variable_amplitude) {
                change_trace_type(plot, trace_number, selected_box_array_name, false);
                trace_type_changed_flag = true;
            }
        }
    }

    // If the amplitude for a grad box has been changed/flipped we update and adjust the scale.
    if (boxObj.type == "grad" && (!$("#variableRadio").is(':checked'))) {
        let input_constant_amplitude = $('#inputConstantAmplitude').val();
        let base_array = array_name_to_array[selected_box_array_name];
        if (!(input_constant_amplitude == boxObj.amplitude && flip == boxObj.flip_amplitude) || array_changed_flag || trace_type_changed_flag) {
            if (flip) {
                input_constant_amplitude *= -1;
            }
            update_trace_amplitude(plot, trace_number, base_array, input_constant_amplitude);
            scale_boxes_amplitude();
        }
    }

    boxObj.start_time = parseFloat(input_start_time);
    boxObj.anchor_time = $('#inputAnchorTime').val();
    boxObj.array_info.name = selected_box_array_name;
    boxObj.array_info.array = array_name_to_array[selected_box_array_name];

    if (boxObj.type == "rf") {
        boxObj.rf_added_phase_type = $('#inputRfAddedPhaseType').val();
        boxObj.rf_added_phase_float = $('#inputRfAddedPhase').val();
        boxObj.init_phase = $('#inputRfInitialPhase').val();
        boxObj.thickness = $('#inputRfThickness').val();
        boxObj.flip_angle = $('#inputRfFlipAngle').val();
        boxObj.rf_duration = parseFloat($('#inputRfDuration').val());
        if ($('#rfExcitationRadio').is(':checked')) {
            boxObj.purpose = "excitation";
        } else {
            boxObj.purpose = "refocusing";
        }
        boxObj.phase_array_info.name = selected_phase_array_name;
        if (selected_phase_array_name != "Select Array") {
            boxObj.phase_array_info.array = array_name_to_array[selected_phase_array_name];
        } else {
            boxObj.phase_array_info.array = [];
        }
    } else if (boxObj.type == "grad") {
        if (!$('#variableRadio').is(':checked')) {
            boxObj.amplitude = $('#inputConstantAmplitude').val();
        } else {
            // boxObj.loop_number = $('#inputLoopNumber').val();
            boxObj.equation_info.name = $('#inputGradEquationName').val();
            boxObj.equation_info.expression = $('#inputGradEquationExpression').val();
        }
        boxObj.variable_amplitude = $('#variableRadio').is(':checked');
        boxObj.flip_amplitude = $('#flipAmplitudeCheck').is(':checked');
    } else {
        // Update the adc trace if adc_duration is changed.
        let new_duration = $('#inputAdcDuration').val();
        if (new_duration && new_duration !== boxObj.adc_duration) {
            update_adc_trace_duration(plot, trace_number, parseFloat(input_start_time), parseFloat(new_duration));
        }
        boxObj.adc_duration = parseFloat(new_duration);
        boxObj.frequency = $('#inputAdcFrequency').val();
        boxObj.phase = $('#inputAdcPhase').val();
        boxObj.adc_added_phase_type = $('#inputAdcAddedPhaseType').val();
        boxObj.adc_added_phase_float = $('#inputAdcAddedPhase').val();
        boxObj.samples = $('#inputAdcSamples').val();
        boxObj.dwell_time = $('#inputAdcDwellTime').val();
        boxObj.mdh = $('#inputMdh').val();
    }
    return true;
}

function save_block_modal_values(plot, trace_number) {
    let block_name = $('#block-select').val();
    boxObj = plot_to_box_objects[block_name][plot.id][trace_number-1];
    blockObj = block_number_to_block_object[boxObj.block];

    // If the start time has been changed in the modal, we move the block.
    let block_start_time = parseFloat($('#blockStartTime').val());
    if (blockObj.start_time != block_start_time) {
        // let shift_value =  parseInt(block_start_time) - parseInt(blockObj.start_time);
        move_block_boxes(boxObj.block, parseFloat(block_start_time));
    }

    let input_block_name = $('#inputBlockName').val();
    let cur_block_name = blockObj.name;
    // If block name has been changed, we update the block name in our data structures.
    if (input_block_name != cur_block_name) {
        let plot_to_box_data = plot_to_box_objects[cur_block_name];
        delete plot_to_box_objects[cur_block_name];
        plot_to_box_objects[input_block_name] = plot_to_box_data;

        let block_data = blocks[cur_block_name];
        delete blocks[cur_block_name];
        blocks[input_block_name] = block_data;

        let block_loops = block_to_loops[cur_block_name];
        delete block_to_loops[cur_block_name];

        if (block_loops === undefined) block_loops = 1;
        block_to_loops[input_block_name] = block_loops;

        let block_events_inner_html = block_to_events_html[cur_block_name];
        delete block_to_events_html[cur_block_name];
        block_to_events_html[input_block_name] = block_events_inner_html;

        let block_duration = block_to_duration[cur_block_name];
        delete block_to_duration[cur_block_name];
        block_to_duration[input_block_name] = block_duration;

        load_block_select_options();
        $('#block-select').val(block_name);
        update_block_boxes_name(boxObj.block, input_block_name);
    }

    blockObj.name = input_block_name;
    blockObj.start_time = parseFloat(block_start_time);
    blockObj.message = $('#inputBlockMessage').val();
    blockObj.print_counter = $('#printCounterCheck').is(':checked');
}

function save_configurations() {
    let configs = {};
    // File configs
    let format = $('#formatConfigInput').val();
    let version = $('#versionConfigInput').val();
    let measurement = $('#measurementConfigInput').val();
    let system = $('#systemConfigInput').val();
    // Settings
    let readout = $('#readoutSettingInput').val();
    // Info
    let description = $('#descriptionInfoInput').val();
    let slices = $('#slicesInfoInput').val();
    let fov = $('#fovInfoInput').val();
    let seqstring = $('#seqstringInfoInput').val();
    let reconstruction = $('#reconstructionInfoInput').val();
    let resolution = $('#resolutionInfoInput').val();

    // Add default values if left empty
    if (format == "") { format = "mtrk-SDL"; }
    if (version == "") { version = "1"; }
    if (measurement == "") { measurement = "abc"; }
    if (system == "") { system = "Skyra-XQ"; }
    if (readout == "") { readout = "2"; }
    if (description == "") { description = "MiniFlash"; }
    if (slices == "") { slices = "1"; }
    if (fov == "") { fov = "300"; }
    if (seqstring == "") { seqstring = "YARRA"; }
    if (reconstruction == "") { reconstruction = "%SiemensIceProgs%\\IceProgram2D"; }
    else { reconstruction = reconstruction.replace(/\\\\/g, "\\"); }
    if (resolution == "") { resolution = "128"; }

    configs['file'] = {
        'format': format,
        'version': version,
        'measurement': measurement,
        'system': system
    }
    configs['settings'] = {
        'readout': readout
    }
    configs['info'] = {
        'description': description,
        'slices': slices,
        'fov': fov,
        'seqstring': seqstring,
        'reconstruction': reconstruction,
        'resolution': resolution
    }
    return configs
}

function load_configurations(configs) {
    // File configs
    $('#formatConfigInput').val(configs['file']['format']);
    $('#versionConfigInput').val(configs['file']['version']);
    $('#measurementConfigInput').val(configs['file']['measurement']);
    $('#systemConfigInput').val(configs['file']['system']);
    // Settings
    $('#readoutSettingInput').val(configs['settings']['readout']);
    // Info
    $('#descriptionInfoInput').val(configs['info']['description']);
    $('#slicesInfoInput').val(configs['info']['slices']);
    $('#fovInfoInput').val(configs['info']['fov']);
    $('#seqstringInfoInput').val(configs['info']['seqstring']);
    $('#reconstructionInfoInput').val(configs['info']['reconstruction']);
    $('#resolutionInfoInput').val(configs['info']['resolution']);
}

function update_plot_config(shiftIsPressed) {
    // If shift is pressed, we restrict shape movement.
    if (config["edits"]["shapePosition"] == shiftIsPressed) return;
    config["edits"]["shapePosition"] = shiftIsPressed;
    $(".dropzone").each(function () {
        var plot = this;
        Plotly.react(plot, plot.data, plot.layout, config);
    });
}

function save_data() {
    let current_state_data = generate_current_data_state();
    localStorage.setItem("data", JSON.stringify(current_state_data));

    // Limit the length of undo stack
    undo_stack.push(JSON.parse(JSON.stringify(current_state_data)));
    if (undo_stack.length > max_stack_length) {
        undo_stack.shift(); // Remove the oldest item
    }
    // Clear redo stack whenever a new state is saved
    redo_stack = [];
}

function reload_data(data) {
    let block_name = data["selected_block"];
    let plots_data = data["plots_data"][block_name];
    let configurations = data["configurations"];
    block_to_duration = data["block_to_duration"];
    $("#blockDurationInput").val(block_to_duration[block_name].toFixed(2));
    slider.update({
        from: 0,
        to: Math.ceil(block_to_duration[block_name]),
        max: Math.ceil(block_to_duration[block_name])
    });
    load_configurations(configurations);
    $(".dropzone").each(function () {
        var plot = this;
        let plot_data = plots_data[plot.id];
        let layout = plot_data[1];
        layout["height"] = window.innerHeight/5;
        layout["width"] =  rf_chart.offsetWidth;
        layout["xaxis"]["range"] = [0, Math.ceil(block_to_duration[block_name])];
        Plotly.react(plot, plot_data[0], layout);
    });
    blocks = data["plots_data"];
    plot_to_box_objects = data["plot_to_box_objects"];
    block_number_to_block_object = data["block_number_to_block_object"];
    block_color_counter = data["block_color_counter"];
    block_to_loops = data["block_to_loops"];
    array_name_to_array = data["array_name_to_array"];
    block_to_events_html = data["block_to_events_html"];
    load_events_data(block_name);
    theme = data["theme"];
    let current_theme = document.documentElement.getAttribute('data-bs-theme');
    update_theme(current_theme);
    load_block_select_options();
    $('#block-select').val(block_name);
    scale_boxes_amplitude();
    // In case the plot was expanded before data reload.
    $("#plot-size-icon").removeClass("fa-compress").addClass("fa-expand");
}

function generate_current_data_state() {
    let block_name = $('#block-select').val();
    save_block_data(block_name);
    let theme = "dark";
    if (document.documentElement.getAttribute('data-bs-theme') == 'light') theme = "light";
    let configurations = save_configurations();
    let current_state_data = {
        "plots_data": blocks,
        "plot_to_box_objects": plot_to_box_objects,
        "block_number_to_block_object": block_number_to_block_object,
        "block_color_counter": block_color_counter,
        "theme": theme,
        "selected_block": block_name,
        "configurations": configurations,
        "block_to_loops": block_to_loops,
        "array_name_to_array": array_name_to_array,
        "block_to_events_html": block_to_events_html,
        "block_to_duration": block_to_duration
    }
    return current_state_data;
}

function undo_data() {
    if (undo_stack.length > 0) {
        // Generating the current state of data:
        // As current data might not be the same as last saved.
        let current_state_data = generate_current_data_state();

        redo_stack.push(current_state_data);
        let prev_state_data = undo_stack.pop();
        localStorage.setItem('data', JSON.stringify(prev_state_data));
        reload_data(prev_state_data);
    } else {
        fire_alert("Cannot undo further!");
    }
}

function redo_data() {
    if (redo_stack.length > 0) {
        // Generating the current state of data:
        // As current data might not be the same as last saved.
        let current_state_data = generate_current_data_state();

        undo_stack.push(current_state_data);
        let next_state_data = redo_stack.pop();
        localStorage.setItem('data', JSON.stringify(next_state_data));
        reload_data(next_state_data);
    } else {
        fire_alert("Cannot redo further!");
    }
}

function change_box_start_time(plot, trace_number, starting_point) {
    let x = plot.data[trace_number]["x"];
    let y = plot.data[trace_number]["y"];
    let line = plot.data[trace_number]["line"];
    let hovertemplate = plot.data[trace_number]["hovertemplate"];
    let shape_number = (trace_number-1)*2;

    // Draw a trace at the new location
    let x_data = []
    let offset = x[0] - starting_point;
    for (let i=0; i<x.length; i+=1) {
        // x_data.push(starting_point+(i/step_size));
        x_data.push(x[i] - offset);
    }
    let data = {};
    data["y"] = y;
    data["x"] = x_data;
    data["line"] = line;
    data["hovertemplate"] = hovertemplate;
    data["mode"] = "lines";

    if (plot.data[trace_number]["mode"]=="markers") {
        data["type"] = "scatter";
        data["mode"] = "markers";
        data["marker"] = {
            color: line.color,
            size: 2,
            }
        }
    
    // delete the trace from the old location and add at new location.
    Plotly.deleteTraces(plot, trace_number);
    Plotly.addTraces(plot, data, trace_number);

    // Move the box shape and vertical line shape to the new location
    // Here, shape_number + 1, will give the line shape number, as we are always creating line shape after box shape.
    move_box_shape(plot, shape_number, starting_point)
    move_vertical_line_shape(plot, shape_number+1, starting_point);
    let middle_point = x_data[Math.floor(x_data.length/2)];
    move_annotation(plot, trace_number-1, middle_point);
}

function change_block_box_end_time(plot, trace_number, ending_point) {
    let x = plot.data[trace_number]["x"];
    let y = plot.data[trace_number]["y"];
    let line = plot.data[trace_number]["line"];
    let hovertemplate = plot.data[trace_number]["hovertemplate"];
    let shape_number = (trace_number-1)*2;

    // Draw a trace with updated end point.
    let x_data = [];
    let y_data = [];
    let starting_point = x[0];
    let increment = get_increment_size_for_dummy_blocks(parseInt(ending_point - starting_point));
    for (let i=starting_point; i<=ending_point; i+=increment) {
        x_data.push(i);
        y_data.push(0);
    }
    if (ending_point % increment != 0) {
        x_data.push(ending_point);
        y_data.push(0);
    }
    let data = {};
    data["y"] = y_data;
    data["x"] = x_data;
    data["line"] = line;
    data["hovertemplate"] = hovertemplate;
    data["mode"] = "lines";

    // delete the old trace and add updated one.
    Plotly.deleteTraces(plot, trace_number);
    Plotly.addTraces(plot, data, trace_number);

    update_box_shape(plot, shape_number, starting_point, ending_point);
    let middle_point = starting_point + (ending_point-starting_point)/2;
    move_annotation(plot, trace_number-1, middle_point);
}

function change_box_array(plot, trace_number, starting_point, new_array) {
    let y = new_array;
    let line = plot.data[trace_number]["line"];
    let hovertemplate = plot.data[trace_number]["hovertemplate"];
    let shape_number = (trace_number-1)*2;

    let multiplier = 1;
    if (plot.id == "rf_chart") {
        multiplier = 2;
    }
    let x_data = []
    for (let i=0; i<y.length; i+=1) {
        x_data.push(starting_point+ multiplier*(i/step_size));
    }
    let data = {};
    data["y"] = y;
    data["x"] = x_data;
    data["line"] = line;
    data["hovertemplate"] = hovertemplate;

    // delete the trace from the old location and add at new location.
    Plotly.deleteTraces(plot, trace_number);
    Plotly.addTraces(plot, data, trace_number);

    // Update the box shape according to the new trace array
    let ending_point = starting_point + multiplier*(y.length/step_size);
    update_box_shape(plot, shape_number, starting_point, ending_point);
    move_vertical_line_shape(plot, shape_number+1, starting_point);
}

function update_adc_trace_duration(plot, trace_number, starting_point, new_duration) {
    let line = plot.data[trace_number]["line"];
    let hovertemplate = plot.data[trace_number]["hovertemplate"];
    let shape_number = (trace_number-1)*2;

    let x_data = [];
    let y_data = [];
    for (let i=0; i<=new_duration*step_size; i+=1) {
        x_data.push(starting_point+(i/step_size));
        if (i==0 || i==(new_duration*step_size)) y_data.push(0);
        else y_data.push(0.8);
    }

    let data = {};
    data["y"] = y_data;
    data["x"] = x_data;
    data["line"] = line;
    data["hovertemplate"] = hovertemplate;

    // delete the trace from the old location and add at new location.
    Plotly.deleteTraces(plot, trace_number);
    Plotly.addTraces(plot, data, trace_number);

    // Update the box shape according to the new trace array
    let ending_point = starting_point + (y_data.length/step_size)
    update_box_shape(plot, shape_number, starting_point, ending_point);
    move_vertical_line_shape(plot, shape_number+1, starting_point);
}

function update_trace_amplitude(plot, trace_number, base_array, amplitude) {
    let y = base_array;
    let x = plot.data[trace_number]["x"];
    let line = plot.data[trace_number]["line"];
    let hovertemplate = plot.data[trace_number]["hovertemplate"];

    // delete the old trace.
    Plotly.deleteTraces(plot, trace_number);

    // Draw a trace at the new location
    let data = {};

    y = y.map(x => x * amplitude);

    data["y"] = y;
    data["x"] = x;
    data["line"] = line;
    data["hovertemplate"] = hovertemplate;
    Plotly.addTraces(plot, data, trace_number);

    if (amplitude < 0) {
        flip_shapes(plot, (trace_number-1)*2, -1);
    } else {
        flip_shapes(plot, (trace_number-1)*2, 1);
    }
}

function scale_boxes_amplitude() {
    // Find the maximum amplitude.
    let max_amplitude = 1;
    $(".dropzone").each(function () {
        let plot = this;
        let data = plot.data;
        if (plot.id != "rf_chart" && plot.id != "adc_chart" && data.length > 1) {
            // 0th index is dummy so skipping that.
            for(let i=1; i<data.length; i++) {
                if ("y" in data[i] && (data[i]["type"] != "scatter")) {
                    let temp_max = Math.max(...data[i]["y"].map(a => Math.abs(a)));
                    max_amplitude = Math.max(max_amplitude, temp_max);
                }
            }
        }
    });
    // Update the size of boxes.
    shape_height = max_amplitude + 0.1;
    $(".dropzone").each(function () {
        let plot = this;
        if (plot.id != "rf_chart" && plot.id != "adc_chart") {
            if ("shapes" in plot.layout) {
                var shapes = JSON.parse(JSON.stringify(plot.layout["shapes"]));
                shapes.forEach(function (shape) {
                    shape["y1"] = Math.sign(shape["y1"]) * shape_height;
                });
            }
            if ("annotations" in plot.layout) {
                var annotations = JSON.parse(JSON.stringify(plot.layout["annotations"]));
                annotations.forEach(function (annotation) {
                    annotation["y"] = shape_height + 0.75;
                });
            }
            let yaxis = JSON.parse(JSON.stringify(plot.layout["yaxis"]));
            yaxis.range = [-shape_height, shape_height+0.75];
            let update = {
                yaxis: yaxis,
                shapes: shapes,
                annotations
                };
            Plotly.relayout(plot, update);
        }
    });
    scale_variable_traces();
}

function scale_variable_traces() {
    let max_amplitude = shape_height - 0.1;

    $(".dropzone").each(function () {
        let plot = this;
        let data = plot.data;
        if (plot.id != "rf_chart" && plot.id != "adc_chart" && data.length > 1) {
            let trace_numbers = [];
            for(let i=1; i<data.length; i++) {
                if ("type" in data[i] && data[i]["type"]=="scatter") {
                    trace_numbers.push(i);
                }
            }
            // For each variable trace, scale its original array to max amplitude.
            trace_numbers.forEach(function (trace_number) {
                let y = [];
                let x = plot.data[trace_number]["x"];
                let line = plot.data[trace_number]["line"];
                let hovertemplate = plot.data[trace_number]["hovertemplate"];

                let block_name = $('#block-select').val();
                let boxObjCopy = JSON.parse(JSON.stringify(plot_to_box_objects[block_name][plot.id][trace_number-1]));
                let array_name = boxObjCopy.array_info.name;

                y = array_name_to_array[array_name];

                y = y.map(val => val * max_amplitude);

                let y_data_new = [];
                for (i=0; i<x.length; i++) {
                    let val = y[i];
                    y_data_new.push(val);
                    y_data_new.push(val*0.75);
                    y_data_new.push(val*0.5);
                    y_data_new.push(val*0.25);
                }

                // delete the old trace.
                Plotly.deleteTraces(plot, trace_number);

                // Draw a trace at the new location
                let new_data = {};
                new_data["y"] = y_data_new;
                new_data["x"] = x;
                new_data["line"] = line;
                new_data["hovertemplate"] = hovertemplate;
                new_data["type"] = "scatter";
                new_data["mode"] = "markers";
                new_data["marker"] = {
                    color: line.color,
                    size: 2,
                };
                Plotly.addTraces(plot, new_data, trace_number);
            });
        }
    });
}

function load_parameters_array_dropdown() {
    let ul = document.getElementById("array-dropdown-menu");
    ul.innerHTML = '';
    for (const [key, value] of Object.entries(array_name_to_array)) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(key));
        li.setAttribute("id", key + "-array-item");
        li.setAttribute("class", "dropdown-item array-dropdown")
        ul.appendChild(li);
    }
    // ul.innerHTML += '<li><hr class="dropdown-divider"></li> \
    // <li id="add-new-array-item"><a class="dropdown-item">&#43;</a></li>';
}

function load_parameters_phase_array_dropdown() {
    let ul = document.getElementById("phase-array-dropdown-menu");
    ul.innerHTML = '';
    ul.innerHTML += '<li><a class="dropdown-item phase-array-dropdown">Select Array</a></li>';
    for (const [key, value] of Object.entries(array_name_to_array)) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(key));
        li.setAttribute("id", key + "-array-item");
        li.setAttribute("class", "dropdown-item phase-array-dropdown")
        ul.appendChild(li);
    }
}

function validateArrayName(arrayName) {
    return !(arrayName == "");
}

function validateBoxName(boxName) {
    return !(boxName.trim().length === 0);
}

function validateArrayValues(arrayValues) {
    if (arrayValues.length <  1) {
        return [false, -1]
    }
    let stringVals = arrayValues.split(",");
    let floatVals = [];
    for (i=0; i<stringVals.length; i++) {
        let trimVal = stringVals[i].trim()
        try {
            let floatVal = parseFloat(trimVal);
            if (isNaN(floatVal)) return [false, -1]
            floatVals.push(floatVal)
        } catch (exception) {
            console.log(exception);
            return [false, -1]
        }
    }
    return [true, floatVals]
}

function update_theme(toTheme) {
    if (toTheme == "light") {
        document.documentElement.setAttribute('data-bs-theme','light');
        $('#flexSwitchCheckChecked').attr("checked", false);
        $(".btn-secondary").each(function(){
            $(this).removeClass("btn-secondary");
            $(this).addClass("btn-light");
        });
        $(".event-btn").each(function(){
            $(this).removeClass("btn-secondary");
            $(this).addClass("btn-light");
        });
        $("body").css('background', "#f8fafc");
        $("body").css("--slider-bar","#7d51a0");
        $("body").css("--slider-handle","#7d51a0");
        $("body").css("--slider-bar-hover","#4e0858");
        toggle_plot_color(true);
        $("#events-col").css({'background': "#ffffff", 'border-right': "1px solid #dfe2e6"});
        $("#plot-col").css({'background': "#ffffff", 'border-left': "1px solid #dfe2e6"});
        $("#object-btns-group button").css('border-color', '#dfe2e6');
        $("#block-btns-group button").css('border-color', '#dfe2e6');
        $(".checkpoint-icon").css({'background': "#ffffff", 'border': "1px solid #dfe2e6"});
        $("#reset-btn, #undo-btn, #redo-btn, #save-plot-btn").css('background', "#ffffff");
        $("#mtrk-logo").hide();
        $("#mtrk-logo-dark").show();
        $("#mtrk-logo").removeClass("d-inline-block");
        $("#mtrk-logo-dark").addClass("d-inline-block");
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark');
        $('#flexSwitchCheckChecked').attr("checked", true);
        $(".btn-light").each(function(){
            $(this).removeClass("btn-light");
            $(this).addClass("btn-secondary");
        });
        $(".event-btn").each(function(){
            $(this).removeClass("btn-light");
            $(this).addClass("btn-secondary");
        });
        $("body").css('background', "var(--bs-body-bg)");
        $("body").css("--slider-bar","#6d757d");
        $("body").css("--slider-handle","#6d757d");
        $("body").css("--slider-bar-hover","#dfd8e0");
        toggle_plot_color(false);
        $("#events-col").css({'background': "#0e0f10", "border-right": "1px solid #34373b"});
        $("#plot-col").css({'background': "var(--bs-body-bg)", "border-left": "1px solid #34373b"});
        $("#object-btns-group button").css('border-color', '#ffffff1f');
        $("#block-btns-group button").css('border-color', '#ffffff1f');
        $(".checkpoint-icon").css({'background': "transparent", 'border': "1px solid gray"});
        $("#reset-btn, #undo-btn, #redo-btn, #save-plot-btn").css('background', "transparent");
        $("#mtrk-logo").show();
        $("#mtrk-logo-dark").hide();
        $("#mtrk-logo-dark").removeClass("d-inline-block");
        $("#mtrk-logo").addClass("d-inline-block");
    }
}

function toggle_plot_color(isDark) {
    if (isDark) {
        var update = {
            "plot_bgcolor":"rgba(255,255,255,0.1)",
            "paper_bgcolor":"rgba(255,255,255,0.1)",
            "xaxis.title.font.color": "rgba(0,0,0,0.9)",
            "xaxis.tickfont.color": "rgba(0,0,0,0.9)",
            "xaxis.gridcolor": "rgba(0,0,0,0.05)",
            "xaxis.zerolinecolor": "rgba(0,0,0,0.2)",
            "yaxis.title.font.color": "rgba(0,0,0,0.9)",
            "yaxis.tickfont.color": "rgba(0,0,0,0.9)",
            "yaxis.gridcolor": "rgba(0,0,0,0.05)",
            "yaxis.zerolinecolor": "rgba(0,0,0,0.2)",
            "title.font.color": 'rgba(0,0,0,0.9)'
        }
    } else {
        var update = {
            "plot_bgcolor":"rgba(0,0,0,0.1)",
            "paper_bgcolor":"rgba(0,0,0,0.6)",
            "xaxis.title.font.color": "rgba(255,255,255,0.9)",
            "xaxis.tickfont.color": "rgba(255,255,255,0.9)",
            "xaxis.gridcolor": "rgba(255,255,255,0.05)",
            "xaxis.zerolinecolor": "rgba(255,255,255,0.1)",
            "yaxis.title.font.color": "rgba(255,255,255,0.9)",
            "yaxis.tickfont.color": "rgba(255,255,255,0.9)",
            "yaxis.gridcolor": "rgba(255,255,255,0.05)",
            "yaxis.zerolinecolor": "rgba(255,255,255,0.1)",
            "title.font.color": 'rgba(255,255,255,0.9)'
        }
    }

    Plotly.relayout(rf_chart, update);
    Plotly.relayout(slice_chart, update);
    Plotly.relayout(phase_chart, update);
    Plotly.relayout(readout_chart, update);
    Plotly.relayout(adc_chart, update);
}

function toggle_loader_animation(showLoader) {
    if (showLoader) {
        var loader = document.getElementById('loader');
        loader.style.opacity = '1';
        loader.style.display = 'flex';
        loader.style.background = 'transparent';
    } else {
        var loader = document.getElementById('loader');
        loader.style.opacity = '0';
        loader.style.display = 'none';
        loader.style.background = 'black';
    }
}

function select_box(trace_number, plot) {
    let shape_number = (trace_number-1)*2;
    let shapes = JSON.parse(JSON.stringify(plot.layout["shapes"]));
    let block_name = $('#block-select').val();
    boxObj = plot_to_box_objects[block_name][plot.id][trace_number-1];

    // If previously not selected, we select it. Otherwise, unselect it.
    if (!boxObj.isSelected) {
        shapes[shape_number]["line"] = {
            color: 'rgba(37, 122, 253, 0.6)',
            width: 3
        };
        boxObj.isSelected = true;
    } else {
        let color = "rgb(129, 133, 137)";
        if (boxObj.block != null) {
            color = block_colors[boxObj.block];
        }
        shapes[shape_number]["line"] =  {
            color: color,
            width: 1
          };
          boxObj.isSelected = false;
    }

    var update = {
        shapes: shapes
        };
    Plotly.relayout(plot, update);
}

function select_block(block_number) {
    let block_name = $('#block-select').val();
    for (var key in plot_to_box_objects_template) {
        plot_to_box_objects[block_name][key].forEach(function (boxObj, index) {
            if (boxObj.block == block_number) {
                let trace_number = index + 1
                let plot_id = axis_name_to_axis_id[boxObj.axis];
                let plot = document.getElementById(plot_id);
                select_box(trace_number, plot);
            }
        });
    }
}

function update_trace(trace_number, plot) {
    let update = {
        'line.color': block_colors[block_color_counter],
        'hovertemplate': '<b>Block ' + (block_color_counter + 1) + '</b><extra></extra>'
    };
    Plotly.restyle(plot, update, trace_number);
}

function add_block_with_selected_boxes() {
    let selected_boxes_count = 0;
    let start_time = Number.MAX_VALUE;
    let end_time = Number.MIN_VALUE;

    // Storing the base trace in the block by default.
    let block_data = {}
    let block_name = "Block_"+(block_color_counter+1);
    plot_to_box_objects[block_name] = JSON.parse(JSON.stringify(plot_to_box_objects_template));
    $(".dropzone").each(function () {
        var plot = this;
        let layout_copy = JSON.parse(JSON.stringify(plot.layout));
        layout_copy["shapes"] = [];
        layout_copy["annotations"] = [];
        block_data[plot.id] = [[plot.data[0]], layout_copy];
    });

    let cur_block_name = $('#block-select').val();
    for (var key in plot_to_box_objects[cur_block_name]) {
        let boxes = JSON.parse(JSON.stringify(plot_to_box_objects[cur_block_name][key]));
        let deletionOffset = 0;
        boxes.forEach(function (boxObj, index) {
            if (boxObj.isSelected) {
                index = index - deletionOffset;
                if (boxObj.block == null)  {
                    boxObj.block = block_color_counter;
                }
                selected_boxes_count += 1;

                // We unselect the box now by calling the function again and update it.
                // Here, index of the object in the array plus 1 will give us the trace number.
                let trace_number = index + 1
                let plot_id = axis_name_to_axis_id[boxObj.axis];
                let plot = document.getElementById(plot_id);
                select_box(trace_number, plot);

                // We push the objects to the plot to box objects map
                objCopy = Object.assign(Object.create(Object.getPrototypeOf(boxObj)), boxObj);
                objCopy.isSelected = false;
                // If the box is not a part of any block, we set the block to null.
                if (boxObj.block == block_color_counter) objCopy.block = null;
                plot_to_box_objects[block_name][plot.id].push(objCopy);

                // Adding the data of block to the global blocks object.
                let trace = JSON.parse(JSON.stringify(plot.data[trace_number]));
                let shape_number = (trace_number-1)*2;
                let shape = plot.layout["shapes"][shape_number];
                let line_shape = plot.layout["shapes"][shape_number+1];
                let annotation = plot.layout["annotations"][trace_number-1];
                block_data[plot.id][0].push(JSON.parse(JSON.stringify(trace)));
                block_data[plot.id][1]["shapes"].push(JSON.parse(JSON.stringify(shape)));
                block_data[plot.id][1]["shapes"].push(JSON.parse(JSON.stringify(line_shape)));
                block_data[plot.id][1]["annotations"].push(JSON.parse(JSON.stringify(annotation)));

                // Calculating the block start time and end time.
                start_time = Math.min(start_time, shape["x0"]);
                end_time = Math.max(end_time, shape["x1"]);

                Plotly.deleteTraces(plot, trace_number);
                delete_shapes(plot, (trace_number-1)*2);
                delete_annotation(plot, trace_number-1);
                plot_to_box_objects[cur_block_name][plot.id].splice(trace_number-1, 1);
                deletionOffset += 1;
            }
        });
    }
    if (selected_boxes_count < 1) {
        fire_alert("no boxes selected!");
        return false;
    }
    blocks[block_name] = block_data;
    blockObj = new Block(block_name, start_time);
    block_number_to_block_object[block_color_counter] = blockObj;
    block_to_duration[block_name] = parseFloat(end_time) - parseFloat(start_time);

    add_dummy_block_boxes(start_time, end_time);
    offset_boxes_inside_block(block_name, start_time);

    block_color_counter += 1;
    if (block_color_counter >= block_colors.length) block_color_counter = 0;
    return true;
}

function move_block_boxes(block_number, starting_point) {
    let block_name = $('#block-select').val();
    for (var key in plot_to_box_objects_template) {
        plot_to_box_objects[block_name][key].forEach(function (boxObj, index) {
                if (boxObj.block == block_number) {
                    let trace_number = index + 1
                    let plot_id = axis_name_to_axis_id[boxObj.axis];
                    let plot = document.getElementById(plot_id);
                    // let starting_point = parseInt(boxObj.start_time) + shift_value;
                    change_box_start_time(plot, trace_number, starting_point);
                    boxObj.start_time = starting_point;
                }
        });
    }
    blockObj = block_number_to_block_object[block_number];
    blockObj.start_time = starting_point;
}

function add_dummy_block_boxes(starting_point, ending_point) {
    for (var key in plot_to_box_objects_template) {
        let target = document.getElementById(key);
        let x_data = [];
        let y_data = [];
        starting_point = parseFloat(starting_point);
        ending_point = parseFloat(ending_point);
        let increment = get_increment_size_for_dummy_blocks(parseInt(ending_point - starting_point));
        for (let i=starting_point; i<=ending_point; i+=increment) {
            x_data.push(i);
            y_data.push(0);
        }
        if (ending_point % increment != 0) {
            x_data.push(ending_point);
            y_data.push(0);
        }
        let data = {};
        data["y"] = y_data;
        data["x"] = x_data;
        data["line"] = {"color" : block_colors[block_color_counter]};
        data["hovertemplate"] = '<b>Block ' + (block_color_counter + 1) + '</b><extra></extra>';
        data["mode"] = "lines";
        Plotly.addTraces(target, data);

        var shape = JSON.parse(JSON.stringify(shape_template));
        let block_color = block_colors[block_color_counter];
        shape["x0"] = starting_point;
        shape["x1"] = ending_point;
        if (target.id == "rf_chart" || target.id == "adc_chart") shape["y1"] = default_shape_height;
        else { shape["y1"] = shape_height; }
        shape["line"] =  {
            color: block_color+"FF",
            width: 1,
        };
        shape["fillcolor"] = block_color + "2F";
        let added_shapes=[];
        if ("shapes" in target.layout) { added_shapes = target.layout.shapes;}
        added_shapes.push(shape);

        var line_shape = JSON.parse(JSON.stringify(line_shape_template));
        line_shape["x0"] = starting_point+anchor_time;
        line_shape["x1"] = starting_point+anchor_time;
        added_shapes.push(line_shape);

        var annotation = JSON.parse(JSON.stringify(annotation_template));
        let middle_point = (starting_point+ending_point)/2;
        annotation["x"] = middle_point;
        annotation["text"] = "Block_"+(block_color_counter+1) + " (x1)";
        if (target.id != "rf_chart" && target.id != "adc_chart") {
            if (shape_height > default_shape_height) annotation["y"] = shape_height + 0.5;
        }
        let added_annotations=[];
        if ("annotations" in target.layout) { added_annotations = target.layout.annotations;}
        added_annotations.push(annotation);

        var update = {
            shapes: added_shapes,
            annotations: added_annotations
            };
        Plotly.relayout(target, update);

        boxObj = new Box("Block", starting_point, axis_id_to_axis_name[target.id], ["dummy_block_array", y_data]);
        boxObj.name = "dummy_box_" + (target.data.length-1);
        let block_name = $('#block-select').val();
        if (!(block_name in plot_to_box_objects)) {
            plot_to_box_objects[block_name] = JSON.parse(JSON.stringify(plot_to_box_objects_template));
        }
        boxObj.block = block_color_counter;
        plot_to_box_objects[block_name][target.id].push(boxObj);
    }
}

function offset_boxes_inside_block(block_name, offset_time) {
    let current_block = $('#block-select').val();
    load_block_data(block_name);
    $("#block-select").val(block_name);
    for (var key in plot_to_box_objects_template) {
        plot_to_box_objects[block_name][key].forEach(function (boxObj, index) {
            let trace_number = index + 1
            let plot_id = axis_name_to_axis_id[boxObj.axis];
            let plot = document.getElementById(plot_id);
            change_box_start_time(plot, trace_number, boxObj.start_time - offset_time);
            boxObj.start_time = parseFloat(boxObj.start_time - offset_time);
        });
    }
    load_block_data(current_block);
    $("#block-select").val(current_block);
}

function get_increment_size_for_dummy_blocks(block_duration) {
    let increment = 0.01;
    if (block_duration >= 10 && block_duration < 50) {
        increment = 0.1;
    }
    else if (block_duration >= 50 && block_duration < 1000) {
        increment = 1;
    }
    else if (block_duration >= 1000 && block_duration < 5000) {
        increment = 5;
    }
    else if (block_duration >= 5000) {
        increment = 10;
    }
    return increment;
}

function duplicate_box(plot, trace_number, target_plot) {
    // Adding the new trace to the plot.
    let new_data = JSON.parse(JSON.stringify(plot.data[trace_number]));
    Plotly.addTraces(target_plot, new_data);

    // Adding the new shapes and annotations to the plot.
    let shape_number = (trace_number-1)*2;
    let line_shape_number = shape_number + 1;
    let annotation_number = trace_number-1;
    let new_shape = JSON.parse(JSON.stringify(plot.layout["shapes"][shape_number]));
    let new_line_shape = JSON.parse(JSON.stringify(plot.layout["shapes"][line_shape_number]));
    let new_annotation = JSON.parse(JSON.stringify(plot.layout["annotations"][annotation_number]));

    let shapes = [];
    let annotations = [];
    if ("shapes" in target_plot.layout) { shapes = target_plot.layout.shapes;}
    if ("annotations" in target_plot.layout) { annotations = target_plot.layout.annotations;}
    shapes.push(new_shape);
    shapes.push(new_line_shape);
    annotations.push(new_annotation);

    let update = {
        shapes: shapes,
        annotations: annotations
    };
    Plotly.relayout(target_plot, update);

    // Adding the new duplicate box object to the plot to box objects map.
    let block_name = $('#block-select').val();
    let boxObj = plot_to_box_objects[block_name][plot.id][trace_number-1];
    // Creating a deep copy of the box object.
    let boxObjCopy = Object.assign(Object.create(Object.getPrototypeOf(boxObj),), JSON.parse(JSON.stringify(boxObj)),);
    boxObjCopy.axis = axis_id_to_axis_name[target_plot.id];
    boxObjCopy.name = boxObj.name + "_copy";
    plot_to_box_objects[block_name][target_plot.id].push(boxObjCopy);

    // If plot and target plot are the same, we move the duplicate box a little.
    if (plot.id == target_plot.id) {
        boxObjCopy.start_time = parseFloat(boxObjCopy.start_time + 0.2);
        change_box_start_time(target_plot, target_plot.data.length-1, boxObjCopy.start_time);
    }
}

function update_array_manager_chart(y_data) {
    let plot = document.getElementById("array_manager_chart");
    let x_data = []
    let starting_point = 1;
    for (let i=0; i<y_data.length; i+=1) {
        x_data.push(starting_point + (i/step_size));
    }
    let data = {};
    data["y"] = y_data;
    data["x"] = x_data;

    // Delete the last trace, and add the new trace.
    if (plot.data.length > 0) {
        Plotly.deleteTraces(plot, -1);
    }
    Plotly.addTraces(plot, data, -1);
}

function save_block_data(block_name) {
    let plot_data = {}
    $(".dropzone").each(function () {
        var plot = this;
        plot_data[plot.id] = [plot.data, plot.layout];
    });
    blocks[block_name] = plot_data;
    // save event data for the block.
    let events_col_inner_html = $("#events-col")[0].innerHTML;
    block_to_events_html[block_name] = events_col_inner_html;
}

function load_block_data(block_name) {
    let plots_data = {};
    if (block_name in blocks) plots_data = blocks[block_name]
    $(".dropzone").each(function () {
        var plot = this;
        let plot_data = plots_data[plot.id];
        let layout = plot_data[1];
        if (plot.id == "rf_chart") {
            layout["title"] = {
                text: block_name,
                font: { 
                    family: 'Courier New, monospace',
                    size: 18,
                    color: 'rgba(255,255,255,0.9)'
                },
                yref: 'paper',
                y: 1
            };
        }
        // changing the height to handle the case where plot dimension has been changed after block creation.
        layout["height"] = window.innerHeight/5;
        layout["width"] =  rf_chart.offsetWidth;
        $("#blockDurationInput").val(block_to_duration[block_name].toFixed(2));
        let zoom_range = calculate_block_range(block_name);
        layout["xaxis"]["range"] = zoom_range;
        slider.update({
            from: 0,
            to: zoom_range[1],
            max: zoom_range[1],
        });
        Plotly.react(plot, plot_data[0], layout);
        recalculate_mouse_to_plot_conversion_variables();
    });
    // Load events data for the block.
    load_events_data(block_name);
    // For the cases when different theme was selected during block creation.
    // This ensures the plot color matches the selected theme.
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        update_theme("dark");
    }
    else {
        update_theme("light");
    }
}

function calculate_block_range(block_name) {
    let start_time = Number.MAX_VALUE;
    let end_time = 0;

    for (var key in blocks[block_name]) {
        let layout = blocks[block_name][key][1];
        if (!layout.shapes) continue;
        layout.shapes.forEach(function (shape) {
            start_time = Math.min(start_time, Math.floor(shape["x0"]));
            end_time = Math.max(end_time, Math.ceil(shape["x1"]));
        });
    }

    if (start_time == Number.MAX_VALUE || end_time == 0) {
        // The block is probably empty, so just return a safe zoom range.
        start_time = 0;
        end_time = 10;
    }

    return [start_time, end_time];
}

function reflect_block_loops_change(block, loops, old_loops, base_block) {
    // This will store the blocks that need to be shifted in the UI after the loops are reflected.
    let block_name_to_shift_val = {};

    // Do a DFS on the structure to reach the block
    // calculate the shift needed for each parent block's UI simultaneously.
    let structure = generate_blocks_nesting_structure();
    function dfs_shift_value(block_name, parent_block) {
        if (block_name == block) {
            let block_duration = block_to_duration[block_name];
            let loops_duration = parseFloat(block_duration) * parseFloat(loops);
            let old_loops_duration = parseFloat(block_duration) * parseFloat(old_loops);
            let shift_value = parseFloat(old_loops_duration - loops_duration);
            block_name_to_shift_val[block_name] = [shift_value, parent_block];
            return shift_value;
        }
        if (!(block_name in structure)) {
            return 0;
        }
        for (let child of structure[block_name]) {
            let child_shift_value = dfs_shift_value(child, block_name);
            if (child_shift_value != 0) {
                let shift_value = parseFloat(block_to_loops[block_name]) * parseFloat(child_shift_value);
                block_name_to_shift_val[block_name] = [shift_value, parent_block];
                return shift_value;
            }
        }
        return 0;
    }
    dfs_shift_value(main_block_str, null);
    propagate_loop_change_ui(block_name_to_shift_val);
    save_block_data($('#block-select').val());
    $("#block-select").val(base_block);
    load_block_data(base_block);
}

function propagate_loop_change_ui(block_name_to_shift_val) {
    for (let cur_block in block_name_to_shift_val) {
        if (cur_block == main_block_str) continue;

        let relative_shift_start = null;
        let [shift_val, parent_block] = block_name_to_shift_val[cur_block];
        save_block_data($('#block-select').val());
        $("#block-select").val(parent_block);
        load_block_data(parent_block);

        // Update the end time of the block with shift value.
        for (var key in plot_to_box_objects_template) {
            plot_to_box_objects[parent_block][key].forEach(function (boxObj, index) {
                if (boxObj.block != null) {
                    blockObj = block_number_to_block_object[boxObj.block];
                    if (blockObj.name == cur_block) {
                        let trace_number = index + 1;
                        let plot_id = axis_name_to_axis_id[boxObj.axis];
                        let plot = document.getElementById(plot_id);
                        let x_data = plot.data[trace_number]["x"];
                        let cur_end_time = x_data[x_data.length-1];
                        let shifted_end_time = parseFloat(cur_end_time) - parseFloat(shift_val);
                        change_block_box_end_time(plot, trace_number, shifted_end_time);
                        relative_shift_start = blockObj.start_time;
                    }
                }
            });
        }

        // Update the relative position of the other boxes/blocks.
        for (var key in plot_to_box_objects_template) {
            plot_to_box_objects[parent_block][key].forEach(function (boxObj, index) {
                if (relative_shift_start != null && boxObj.start_time > relative_shift_start) {
                    let trace_number = index + 1;
                    let plot_id = axis_name_to_axis_id[boxObj.axis];
                    let plot = document.getElementById(plot_id);
                    let shifted_start_time = parseFloat(boxObj.start_time) - shift_val;
                    change_box_start_time(plot, trace_number, shifted_start_time);
                    boxObj.start_time = shifted_start_time;
                    if (boxObj.block != null) {
                        blockObj = block_number_to_block_object[boxObj.block];
                        blockObj.start_time = shifted_start_time;
                    }
                }
            });
        }

        block_to_duration[parent_block] = parseFloat(block_to_duration[parent_block]) - parseFloat(shift_val);
    }
}

function load_events_data(block_name) {
    if (block_name in block_to_events_html && block_to_events_html[block_name]) {
        $("#events-col")[0].innerHTML = block_to_events_html[block_name];
    } else {
        $("#calc-events")[0].innerHTML = "";
        $("#init-events")[0].innerHTML = "";
        $("#sync-events")[0].innerHTML = "";
    }
}

function load_block_select_options() {
    $("#block-select").empty();
    // Add the blocks in the block select.
    for (var block_text in blocks) {
        let o = new Option(block_text, block_text);
        $(o).html(block_text);
        $("#block-select").append(o);
    }
}

function load_array_manager_select_options() {
    $("#array-select").empty();
    // Add a default new array option.
    let o = new Option("New Array", "New Array");
    $(o).html("New Array");
    $("#array-select").append(o);
    // Add all the available arrays.
    for (var array_text in array_name_to_array) {
        let o = new Option(array_text, array_text);
        $(o).html(array_text);
        $("#array-select").append(o);
    }
}

function load_loops_configuration() {
    // saving the parent block data from the page before using it
    // as it might not be up-to-date because of new events.
    save_block_data($('#block-select').val());

    if (Object.keys(plot_to_box_objects).length === 0) return;
    let structure = generate_blocks_nesting_structure();
    $("#loopsInputGroup").empty();
    $("#nestingCol").empty();

    // DFS to make the structure in a nested manner.
    function dfs(root, parentDiv, depth) {
        let loopInput =
        `<div style="left: ${depth*12}%; position:absolute; top:0; bottom:0; border-left: 1px solid #4f4848"></div>
        <div class="row loop-config-row">
            <div class="col-9">
                <a class="list-group-item list-group-item-action list-group-item-info block-loop-item"
                style="margin-left: ${depth*15}%; width: ${100-(depth*15)}%">`
                +  root + `</a>
            </div>
            <div class="col-2">
                <div class="input-group input-number-blocks">
                    <span class="input-group-text">x</span>
                    <input name="loop-input" type="number" class="form-control loops-input" data-block=${root} value=1 placeholder=1 min=1>
                </div>
            </div>
        </div>`;
        let curDiv = document.createElement('div');
        curDiv.classList.add("loops-group");
        curDiv.innerHTML = loopInput.trim();
        parentDiv.appendChild(curDiv);

        if (!(root in structure)) {
            return;
        }
        structure[root].forEach(function (child) {
            dfs(child, curDiv, depth+1);
        });
    }
    let parentDiv = document.getElementById("loopsInputGroup");
    dfs(main_block_str, parentDiv, 0);

    $(".block-loop-item").click(function() {
        $(this).toggleClass("active");
    });

    reload_loops_count();
}

function generate_blocks_nesting_structure() {
    // Making a graph of block structure.
    let structure = {};
    $("#block-select option").each(function() {
        let parent_block = $(this).val();
        let seen_blocks = new Set();
        for (var key in plot_to_box_objects_template) {
            // Can remove the key loop as if we have dummy boxes on all the axes.
            plot_to_box_objects[parent_block][key].forEach(function (boxObj, index) {
                if (boxObj.block !== null) {
                    if (!seen_blocks.has(boxObj.block)) {
                        blockObj = block_number_to_block_object[boxObj.block];
                        let child_block = blockObj.name;
                        if (parent_block in structure) {
                            structure[parent_block].push(child_block);
                        } else {
                            structure[parent_block] = [child_block];
                        }
                        seen_blocks.add(boxObj.block);
                    }
                }
            });
        }
    });
    return structure;
}

function reload_loops_count() {
    $.each($('.loops-input'), function(index, input) {
        let block = input.dataset.block;
        if (block == main_block_str) input.disabled = true;
        if (block in block_to_loops) {
            let loops = block_to_loops[block];
            input.value = loops;
        }
    });
}

function update_annotations_loops_count() {
    $("#block-select option").each(function() {
        let parent_block = $(this).val();
        for (let key in plot_to_box_objects_template) {
            let layout = blocks[parent_block][key][1];
            layout.annotations.forEach(function (annotation, index) {
                let text = annotation.text;
                let block_name = text.substring(0, text.indexOf("(")-1);
                if (block_name !== "") {
                    let loops = block_to_loops[block_name];
                    annotation.text = block_name + " (x" + loops + ")";
                }
            });
        }
    });
    load_block_data($('#block-select').val());
}

function add_new_event(event_data) {
    let event_type = event_data["event-type"];
    let event_icon_str = event_type_to_icon_str[event_type];

    let data_attributes_str = create_data_attributes_string(event_data);
    let selected_theme = document.documentElement.getAttribute('data-bs-theme');
    let btn_class = selected_theme == "dark" ? "btn-secondary" : "btn-light";

    let event_btn_str = `<a
        class="btn btn-sm ${btn_class} event-btn"
        role="button" data-bs-toggle="tooltip" data-bs-placement="bottom"
        title="${event_type} event" ${data_attributes_str}>
            <i class="${event_icon_str}"></i>
        </a>`;
    let el = document.createElement('div');
    el.innerHTML = event_btn_str;

    if (event_type == "calc") {
        $("#calc-events").append(el);
    } else if (event_type == "init") {
        $("#init-events").append(el);
    } else if (event_type == "sync") {
        $("#sync-events").append(el);
    }
}

function update_event(event_data) {
    for (let key in event_data) {
        if (event_data[key] == "") continue;
        // adding it in the both dataset and string attributes for utility.
        selected_event_btn.data(key, event_data[key]);
        selected_event_btn.attr("data-"+key, event_data[key]);
    }
}

function create_data_attributes_string(event_data) {
    let data_attributes_str = ``;
    for (let key in event_data) {
        if (event_data[key] == "") continue;
        data_attributes_str += "data-" + key + "=" + event_data[key] + " ";
    }
    return data_attributes_str;
}

function serialize_events_data() {
    let events_data = {};
    Object.keys(block_to_events_html).forEach(function (block_name){
        $("#events-col")[0].innerHTML = block_to_events_html[block_name];
        events_data[block_name] = [];
        $(".event-btn").each(function(){
            events_data[block_name].push($(this).data());
        });
    });
    // set current event data again.
    let block_name = $('#block-select').val();
    load_events_data(block_name);
    return events_data;
}

function load_waveform_modal_values(selected_type) {
    $(".trap-param").hide();
    $(".ramp-sampled-param").hide();
    $(".slr-param").hide();
    $(".sinc-param").hide();
    $(".adiabatic-param").hide();
    if (selected_type == "trap") {
        $(".trap-param").show();
    } else if (selected_type == "ramp_sampled" || selected_type == "min_trap") {
        $(".ramp-sampled-param").show();
    } else if (selected_type == "slr") {
        $(".slr-param").show();
    } else if (selected_type == "sinc") {
        $(".sinc-param").show();
    } else if (selected_type == "adiabatic") {
        $(".adiabatic-param").show();
        let adiabatic_type = $("#adiabatic-type-select").val();
        $(".bir4-param").hide();
        $(".wurst-param").hide();
        $(".hyperbolic-param").hide();
        if (adiabatic_type == "bir4") {
            $(".bir4-param").show();
        } else if (adiabatic_type == "wurst") {
            $(".wurst-param").show();
        } else if (adiabatic_type == "hyperbolic") {
            $(".hyperbolic-param").show();
        }
    }
}

function save_waveform_modal_values(event_type, selected_type) {
    let waveform_data = {};
    waveform_data["event_type"] = event_type;
    waveform_data["waveform_type"] = selected_type;

    if (event_type == "gradient") {
        if (selected_type == "trap") {
            $(".trap-param input").each(function() {
                let param_name = $(this).attr("id");
                let param_value = $(this).val();
                if (param_value == "") {
                    param_value = 0;
                }
                waveform_data[param_name] = parseFloat(param_value);
            });
        } else if (selected_type == "ramp_sampled" || selected_type == "min_trap") {
            $(".ramp-sampled-param input").each(function() {
                let param_name = $(this).attr("id");
                let param_value = $(this).val();
                if (param_value == "") {
                    param_value = 0;
                }
                waveform_data[param_name] = parseFloat(param_value);
            });
        }
    } else if (event_type == "rf") {
        if (selected_type == "slr") {
            $(".slr-param input").each(function() {
                let param_name = $(this).attr("id");
                let param_value = $(this).val();
                if ($(this).attr("type") == "number") {
                    param_value = parseFloat(param_value);
                } else if ($(this).attr("type") == "text") {
                    param_value = param_value.trim();
                }
                waveform_data[param_name] = param_value;
            });
            waveform_data["p_type"] = $("#rf_pulse_type").val();
            waveform_data["f_type"] = $("#filter_type").val();
        } else if (selected_type == "sinc") {
            $(".sinc-param input").each(function() {
                let param_name = $(this).attr("id");
                let param_value = $(this).val();
                if ($(this).attr("type") == "number") {
                    param_value = parseFloat(param_value);
                } else if ($(this).attr("type") == "text") {
                    param_value = param_value.trim();
                }
                waveform_data[param_name] = param_value;
            });
        } else if (selected_type == "adiabatic") {
            $(".adiabatic-param input").each(function() {
                let param_name = $(this).attr("id");
                let param_value = $(this).val();
                if ($(this).attr("type") == "number") {
                    param_value = parseFloat(param_value);
                } else if ($(this).attr("type") == "text") {
                    param_value = param_value.trim();
                }
                waveform_data[param_name] = param_value;
            });
            waveform_data["adiabatic_type"] = $("#adiabatic-type-select").val();
        }
    }

    $.ajax({
        url: '/waveform',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(waveform_data),
        success: function(response) {
           let waveform_name = event_type + "_" + selected_type;
           let hash = Math.random().toString(36).substring(2, 5);
           waveform_name += "_" + hash;

           array_name_to_array[waveform_name] = response["waveform"];
           if (response["phase"] !== null) {
               array_name_to_array[waveform_name + "_phase"] = response["phase"];
            }
           load_parameters_array_dropdown();
           load_parameters_phase_array_dropdown();
           $('#array-dropdown-btn').text(waveform_name);
           if (response["phase"] !== null) {
               $('#phase-array-dropdown-btn').text(waveform_name + "_phase");
           }
           Swal.fire({
            icon: "success",
            title: "Generated Waveform: " + waveform_name,
            text: "Array is now stored and selected in the dropdown. Save changes to update the event!",
            showConfirmButton: true,
            background: "#3c3c3c",
            color: "white",
          });
        },
        error: function(error) {
            console.log("Params used: ", waveform_data);
            fire_alert("Error generating waveform data: " + error.responseJSON.error);
        }
    }).always(function() {
        $('#waveformModal').modal('toggle');
        $('#parametersModal').modal('toggle');
        // $('#waveformModal input').val('');
    });

}

function maximize_plot_area() {
    $("#leftSidebar").hide();
    $("#rightSidebar").hide();
    $("#body-container").removeClass("container-lg").addClass("container-fluid");
    $("#plot-col").removeClass("col-lg-8").addClass("col-lg-11");
    $("#events-col").removeClass("col-auto").addClass("col-lg-1");
    let update = {
        "height": window.innerHeight/5,
        "width": rf_chart.offsetWidth,
    }
    Plotly.relayout(rf_chart, update);
    Plotly.relayout(slice_chart, update);
    Plotly.relayout(phase_chart, update);
    Plotly.relayout(readout_chart, update);
    Plotly.relayout(adc_chart, update);
}

function minimize_plot_area() {
    $("#leftSidebar").show();
    $("#rightSidebar").show();
    $("#plot-col").removeClass("col-lg-11").addClass("col-lg-8");
    $("#events-col").removeClass("col-lg-1").addClass("col-auto");
    $("#body-container").removeClass("container-fluid").addClass("container-lg");
    let update = {
        "height": window.innerHeight/5,
        "width": rf_chart.offsetWidth,
    }
    Plotly.relayout(rf_chart, update);
    Plotly.relayout(slice_chart, update);
    Plotly.relayout(phase_chart, update);
    Plotly.relayout(readout_chart, update);
    Plotly.relayout(adc_chart, update);
}

function fire_alert(message) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
        background: "#3c3c3c",
        color: "white"
      });
}

function download_file(file) {
    let link = document.createElement('a');
    let url = URL.createObjectURL(file);
    // window.open(url, '_blank');

    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

function evaluate_equation(equation) {
    // To replace set(parameter) with parameter value from settings.
    function set(parameter) {
        if (parameter in settings) {
            return settings[parameter];
        } else {
            throw new Error("Parameter " + parameter + " not found in settings.");
        }
    }

    // To add quotation marks around the parameter names in the equation.
    equation = equation.replace(/set\((\w+)\)/g, "set('$1')");

    var newEquation = equation.replace("sin", "Math.sin");
    newEquation = newEquation.replace("cos", "Math.cos");
    newEquation = newEquation.replace("tan", "Math.tan");
    newEquation = newEquation.replace("cot", "Math.cot");
    newEquation = newEquation.replace("sec", "Math.sec");
    newEquation = newEquation.replace("csc", "Math.csc");
    newEquation = newEquation.replace("exp", "Math.exp");
    newEquation = newEquation.replace("log", "Math.log");
    newEquation = newEquation.replace("sqrt", "Math.sqrt");

    var val = eval(newEquation);
    return val;
}

function get_previous_block(starting_point, selected_block) {
    if (!(plot_to_box_objects[selected_block])) return null;
    let previous_block_box = null;
    for (var key in plot_to_box_objects_template) {
        plot_to_box_objects[selected_block][key].forEach(function (boxObj, index) {
            if (boxObj.block !== null && boxObj.start_time < starting_point) {
                if (previous_block_box === null || boxObj.start_time > previous_block_box.start_time) {
                    previous_block_box = boxObj;
                }
            }
        });
    }
    blockObj = previous_block_box ? block_number_to_block_object[previous_block_box.block] : null;
    return blockObj.name;
}

function prepare_data_to_send(action, update_info=null) {
    let block_to_sdl_objects = {};
    for (let block in plot_to_box_objects) {
        let sdl_objects = [];
        for (var key in plot_to_box_objects[block]) {
            sdl_objects.push(...plot_to_box_objects[block][key]);
        }
        block_to_sdl_objects[block] = sdl_objects;
        // add default loop value for missing blocks.
        if (!(block in block_to_loops)) block_to_loops[block] = 1;
    }
    if (Object.keys(block_to_sdl_objects).length === 0) {
        fire_alert("Add boxes to generate SDL file.");
        return;
    }
    let configurations = save_configurations();
    let structure = generate_blocks_nesting_structure();
    let serialized_events = serialize_events_data();
    send_data(block_to_sdl_objects, configurations, structure, serialized_events, block_to_duration, action, update_info);
}

function send_data(block_to_box_objects, configurations, block_structure, events, block_to_duration, action, update_info) {
    $.ajax({
        url: '/process',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ 
            'block_to_box_objects': block_to_box_objects,
            'configurations': configurations,
            'block_structure': block_structure,
            'block_to_loops': block_to_loops,
            'block_number_to_block_object': block_number_to_block_object,
            'events': events,
            "block_to_duration": block_to_duration
        }),
        success: function(response) {
            if (action == "process") {
                console.log(response);
                let response_blob = new Blob([response], { type: 'application/json' });
                let response_file = new File([response_blob], 'output_sdl_file.mtrk');
                download_file(response_file);

                $.ajax({
                    url: '/convert',
                    type: 'GET',
                    contentType: 'text/plain',
                    success: function(convert_response) {
                        let converted_response_blob = new Blob([convert_response], { type: 'application/json' });
                        let converted_response_file = new File([converted_response_blob], 'output_pulseq.seq');
                        download_file(converted_response_file);
                    },
                    error: function(convert_error) {
                        let convert_error_response = convert_error.responseJSON;
                        console.log(convert_error_response.traceback);
                        fire_alert('Conversion Error: ' + convert_error_response.error + ' (' + convert_error_response.type + ')');
                    }
                });

                if (send_to_viewer) {
                    $.ajax({
                        url: '/get_port_mapping',
                        method: 'GET',
                        success: function(data) {
                            viewer_url = "http://127.0.0.1:" + data["6010"];
                            verify_and_open_viewer(viewer_url, response);
                        }
                    });
                }
            } else if (action == "update") {
                let cur_selected_block = $('#block-select').val();
                $.ajax({
                    url: '/update',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        'configurations': configurations,
                        'update_info': update_info
                    }),
                    success: function(update_response) {
                        update_response = update_response.replace(/main/g, main_block_str);
                        let updated_sdl = JSON.parse(update_response);
                        console.log(updated_sdl);
                        try {
                            // replicating sdl load functionality
                            reload_data(JSON.parse(default_data_state));
                            populate_global_variables_with_sdl_data(updated_sdl);
                            make_dummy_blocks();
                            load_block_data(main_block_str);
                            scale_boxes_amplitude();
                            reflect_loops_from_sdl();
                            block_color_counter = Object.keys(visited_blocks).length;
                        } catch (e) {
                            fire_alert("Could not load updated SDL file");
                            console.log(e);
                            undo_data();
                            redo_stack = [];
                        }
                    },
                    error: function(update_error) {
                        let update_error_response = update_error.responseJSON;
                        console.log(update_error_response.traceback);
                        fire_alert('Internal Error: ' + update_error_response.error + ' (' + update_error_response.type + ')');
                    }
                }).always(function() {
                    load_block_data(cur_selected_block);
                    $("#block-select").val(cur_selected_block);
                    $('#plot-col').removeClass('blurred');
                    $('#events-col').removeClass('blurred');
                    toggle_loader_animation(false);
                });
            }
        },
        error: function(error) {
            let errorResponse = error.responseJSON;
            console.log(errorResponse.traceback);
            fire_alert('Internal Error: ' + errorResponse.error + ' (' + errorResponse.type + ')');
        }
    });
}

window.onbeforeunload = function (e) {
    if (reset_flag == 0) {
        save_data();
    }
};

window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    loader.style.opacity = '0'; // Fade out loader
    setTimeout(function() {
        loader.style.display = 'none'; // Hide loader
    }, 500); // Wait for fade-out effect to complete
});

async function verify_and_open_viewer(url, sdl_file) {
    try {
        let response = await fetch(url, { method: 'HEAD' });
        if (response.ok) {
            console.log(`The viewer URL ${url} is accessible. Opening in a new window.`);
            let otherWindow = window.open(url);
            setTimeout(() => { otherWindow.postMessage(sdl_file, url); }, 1000);
        } else {
            console.log(`The viewer URL ${url} returned status: ${response.status}. Not opening the URL.`);
        }
    } catch (error) {
        console.log(`The URL ${url}  for viewer is not accessible. Error: ${error.message}. Not opening the URL.`);
    }
}

class Box {
    type = "";
    axis = "";
    name = "";
    start_time = 0;
    anchor_time = 0;
    amplitude = null;
    variable_amplitude = false;
    flip_amplitude = false;
    // step_change = null;
    // loop_number = null;
    isSelected = false;
    block = null;
    purpose = "";
    rf_added_phase_type = "";
    rf_added_phase_float = null;
    init_phase = null;
    thickness = null;
    flip_angle = null;
    adc_duration = null;
    rf_duration = null;
    frequency = null;
    adc_added_phase_type = "";
    adc_added_phase_float = null;
    phase = null;
    samples = null;
    dwell_time = null;
    mdh = null;
    array_info = {
        name: "",
        array: []
    };
    phase_array_info = {
        name: "",
        array: []
    }
    equation_info = {
        name: "",
        expression: ""
    }

    constructor(type, start_time, axis, array_info) {
        this.type = type;
        this.start_time = start_time;
        this.axis = axis;
        this.array_info.name = array_info[0];
        this.array_info.array = array_info[1];

        // Add default values according to box type.
        if (type == "rf") {
            this.rf_duration = 2.560;
            this.init_phase = 0;
            this.thickness = 5;
            this.flip_angle = 15;
            this.purpose = "excitation";
            this.rf_added_phase_type = "float";
            this.rf_added_phase_float = 0;
            this.phase_array_info.name = "rf_phase";
            this.phase_array_info.array = array_name_to_array["rf_phase"];
        } else if (type == "grad") {
            this.amplitude = 1;
        } else if (type == "adc") {
            this.adc_duration = 1;
            this.frequency = 0;
            this.phase = 0;
            this.adc_added_phase_type = "float";
            this.adc_added_phase_float = 0;
            this.samples = 128;
            this.dwell_time = 30;
            this.mdh = "{}";
        }
    }
}

class Block {
    name = "";
    start_time = 0;
    message = "";
    print_counter = false;

    constructor(name, start_time) {
        this.name = name;
        this.start_time = start_time;
    }
}

// SDL load related functions - start
var objects = null;
var arrays = null;
var instructions = null;
var equations = null;
var file = null;
var settings = null;
var info = null;
var min_time = null;
var max_time = null;
var offset_time = 0;
var visited_blocks = {};
var dummy_blocks = {};
function populate_global_variables_with_sdl_data(data_sdl) {
    objects = data_sdl.objects;
    arrays = data_sdl.arrays;
    instructions = data_sdl.instructions;
    equations = data_sdl.equations;
    file = data_sdl.file;
    settings = data_sdl.settings;
    info = data_sdl.infos;
    info["resolution"] = info["pelines"];
    let config_data = {
        "file": file,
        "settings": settings,
        "info": info
    }
    load_configurations(config_data);
    visited_blocks = {};
    dummy_blocks = {};
    for (let array_name in arrays) {
        let array_data = arrays[array_name].data;
        if (array_name.includes("rf") && arrays[array_name].type == "complex_float") {
            let new_array_data = [];
            let new_phase_data = [];
            for (let i=0; i < array_data.length; i++) {
                if (i % 2 == 0) {
                    new_array_data.push(array_data[i]);
                } else {
                    new_phase_data.push(array_data[i]);
                }
            }
            array_name_to_array[array_name] = new_array_data;
            array_name_to_array[array_name + "_phase"] = new_phase_data;
            arrays[array_name].data = new_array_data;
        } else {
            array_name_to_array[array_name] = array_data;
        }
    }
    for (let block_name in instructions) {
        dfs_visit_block(block_name, instructions, visited_blocks, null, Number.MAX_SAFE_INTEGER, 0);
        visited_blocks[block_name] = true;
    }
}

function dfs_visit_block(block_name, instructions, visited_blocks, prev_block, min_time, max_time) {
    if (block_name in visited_blocks) return;
    if (block_name != main_block_str) add_block_option(block_name);
    plot_to_box_objects[block_name] = JSON.parse(JSON.stringify(plot_to_box_objects_template));

    let block_data_temp = {}
    $(".dropzone").each(function () {
        let plot = this;
        let layout_copy = JSON.parse(JSON.stringify(plot.layout));
        layout_copy["shapes"] = [];
        layout_copy["annotations"] = [];
        block_data_temp[plot.id] = [[plot.data[0]], layout_copy];
    });

    $("#calc-events")[0].innerHTML = "";
    $("#init-events")[0].innerHTML = "";
    $("#sync-events")[0].innerHTML = "";

    visited_blocks[block_name] = true;
    let block_data = instructions[block_name];
    let steps = block_data.steps;
    let range = "1";
    let inner_block_time = null;
    let mark_time = null;
    for (let i=0; i < steps.length; i++) {
        let step = steps[i];

        if (typeof step.time === 'object' && step.time.type === "equation") {
            let equation_name = step.time.equation;
            if (!(equation_name in equations)) {
                fire_alert("Equation " + equation_name + " not found in equations.");
                return;
            }
            let equation = equations[equation_name].equation;
            let equation_result = evaluate_equation(equation);
            if (equation_result === null) {
                fire_alert("Error evaluating equation: " + equation);
                return;
            }
            step.time = equation_result;
        }

        if (step.action == "run_block") {
            inner_block_time = null;
            inner_block_time = dfs_visit_block(step.block, instructions, visited_blocks, block_name, Number.MAX_SAFE_INTEGER, 0);
            min_time = Math.min(min_time, inner_block_time[0]);
            max_time = Math.max(max_time, inner_block_time[1]);
            if (!(step.block in block_to_loops)) block_to_loops[step.block] = 1;
        } else if (step.action == "loop") {
            range = step.range;
            steps.splice(i + 1, 0, ...step.steps);
            // TODO: verify if the loop count will always be valid like this.
            if ("block" in step.steps[0]) {
                repeating_block_name = step.steps[0].block;
                block_to_loops[repeating_block_name] = range;
            }
        } else if (step.action == "rf" || step.action == "grad" || step.action == "adc") {
            min_time = Math.min(min_time, offset_time + parseFloat(step.time/1000));
            let object_name = step.object;
            let step_duration = parseFloat(objects[object_name].duration/1000);
            max_time = Math.max(max_time, offset_time + parseFloat(step.time/1000+step_duration));
            add_step(step, block_name, block_data_temp);
        } else if (step.action == "init" || step.action == "sync" || step.action == "calc") {
            add_event_from_sdl_data(step, block_name);
        } else if (step.action == "mark") {
            mark_time = parseFloat(step.time/1000);
        }
    }

    if (inner_block_time) {
        min_time = Math.min(min_time, inner_block_time[0]);
        max_time = Math.max(max_time, inner_block_time[1]);
    }
    blocks[block_name] = block_data_temp;
    if (mark_time != null) {
        max_time = offset_time + mark_time;
        mark_time = null;
    }
    if (block_name == main_block_str) {
        min_time = 0;
    }
    if (min_time == Number.MAX_SAFE_INTEGER) {
        min_time = offset_time;
    }
    offset_time = max_time;
    block_to_duration[block_name] = max_time - min_time;
    block_data_temp = {};
    blockObj = new Block(block_name, min_time);
    blockObj.message = instructions[block_name].print_message;
    blockObj.print_counter = instructions[block_name].print_counter == "on" ? true : false;
    block_number_to_block_object[block_color_counter] = blockObj;

    if (prev_block != null) {
        // max_time = max_time * parseInt(range);
        if (prev_block in dummy_blocks) {
            dummy_blocks[prev_block].push([block_color_counter, block_name, min_time, max_time]);
        }
        else dummy_blocks[prev_block] = [[block_color_counter, block_name, min_time, max_time]];
    }
    block_color_counter += 1;

    return [min_time, max_time];
}

function add_block_option(block_text) {
    let o = new Option(block_text, block_text);
    $(o).html(block_text);
    $("#block-select").append(o);
}

function add_step(step, block_name, block_data_temp) {
    let object_name = step.object;
    let object = objects[object_name];
    let array = adc_readout_array;
    if (object.type != "adc") array = arrays[object.array];
    let axis = "rf";
    if ("axis" in step) {
        axis = step.axis;
    } else if (object.type == "adc") {
        axis = "adc";
    }
    let plot_id = axis_name_to_axis_id[axis];
    let plot = document.getElementById(plot_id);
    add_box_to_plot_ui(plot, array.data, parseFloat(step.time)/1000, object.type);
    let box = new Box(object.type, parseFloat(step.time)/1000, axis, [object.array, array.data]);
    box.name = object_name;
    let flip_multiplier = 1;
    if (object.type == "grad") {
        if ("amplitude" in step && step.amplitude.type == "equation") {
            box.variable_amplitude = true;
            let equation_name = step.amplitude.equation;
            box.equation_info.name = equation_name;
            box.equation_info.expression = equations[equation_name].equation;
        } else {
            box.amplitude = object.amplitude;
            if ("amplitude" in step  && step.amplitude == "flip") {
                box.flip_amplitude = true;
                flip_multiplier = -1;
            }
        }
    } else if (object.type == "rf") {
        box.rf_duration = parseFloat(object.duration)/1000;
        box.init_phase = object.initial_phase;
        box.thickness = object.thickness;
        box.flip_angle = object.flipangle;
        box.purpose = object.purpose;
        box.rf_added_phase_type = step.added_phase.type;
        box.rf_added_phase_float = step.added_phase.float;
        let phase_array_name = object.array + "_phase";
        box.phase_array_info.name = phase_array_name;
        box.phase_array_info.array = array_name_to_array[phase_array_name];
    } else if (object.type == "adc") {
        box.adc_duration = parseFloat(object.duration)/1000;
        box.frequency = step.frequency;
        box.phase = step.phase;
        box.adc_added_phase_type = step.added_phase.type;
        box.adc_added_phase_float = step.added_phase.float;
        box.samples = object.samples;
        box.dwell_time = parseFloat(object.dwelltime)/1000;
        box.mdh = JSON.stringify(step.mdh, null, 4);
    }
    plot_to_box_objects[block_name][plot_id].push(box);

    // Updating the trace amplitude or duration based on the  newly box added.
    // plot.data.length-1 relfects the last added trace to the plot.
    if (object.type == "grad") {
        if (box.variable_amplitude) {
            change_trace_type(plot, plot.data.length-1, box.array_info.name, true);
        } else {
            update_trace_amplitude(plot, plot.data.length-1, box.array_info.array, box.amplitude * flip_multiplier);
        }
    } else if (object.type == "adc") {
        update_adc_trace_duration(plot, plot.data.length-1, parseFloat(box.start_time), parseFloat(box.adc_duration));
    }

    // Update temp block data to be sent back
    let trace_number = plot.data.length-1;
    let shape_number = plot.layout.shapes.length-2;
    let line_shape_number = shape_number + 1;
    let annotation_number = plot.layout.annotations.length-1;
    let data = plot.data[trace_number];
    let shape = plot.layout.shapes[shape_number];
    let line_shape = plot.layout.shapes[line_shape_number];
    let annotation = plot.layout.annotations[annotation_number];
    block_data_temp[plot.id][0].push(JSON.parse(JSON.stringify(data)));
    block_data_temp[plot.id][1]["shapes"].push(JSON.parse(JSON.stringify(shape)));
    block_data_temp[plot.id][1]["shapes"].push(JSON.parse(JSON.stringify(line_shape)));
    block_data_temp[plot.id][1]["annotations"].push(JSON.parse(JSON.stringify(annotation)));
}

// Replicating the functionality of drop.
function add_box_to_plot_ui(plot, array, starting_point, box_type) {
    if (box_type == "adc") {
        array = array_name_to_array[axis_id_to_default_array[plot.id]];
    }
    let multiplier = 1;
    if (plot.id == "rf_chart") {
        multiplier = 2;
    }
    let x_data = []
    for (let i=0; i<array.length; i+=1) {
        x_data.push(starting_point + multiplier*(i/step_size));
    }
    let data = {};
    data["y"] = array;
    data["x"] = x_data;
    data["line"] = {"color" : axis_id_to_color[plot.id]};
    data["hovertemplate"] = '<b>' +  box_type + '</b><br> %{y:.2f}<extra></extra>';
    Plotly.addTraces(plot, data);

    // Update the trace by adding a box around it.
    var shape = JSON.parse(JSON.stringify(shape_template));
    shape["x0"] = starting_point;
    shape["x1"] = starting_point + multiplier*(array.length/step_size);
    if (plot.id == "rf_chart" || plot.id == "adc_chart") shape["y1"] = default_shape_height;
    else { shape["y1"] = shape_height; }
    let added_shapes=[];
    if ("shapes" in plot.layout) { added_shapes = plot.layout.shapes;}
    added_shapes.push(shape);

    // add a line shape to show anchor point.
    var line_shape = JSON.parse(JSON.stringify(line_shape_template));
    line_shape["x0"] = starting_point+anchor_time;
    line_shape["x1"] = starting_point+anchor_time;
    added_shapes.push(line_shape);

    // add a dummy annotation
    var annotation = JSON.parse(JSON.stringify(annotation_template));
    annotation["x"] = starting_point+2.5;
    let added_annotations=[];
    if ("annotations" in plot.layout) { added_annotations = plot.layout.annotations;}
    added_annotations.push(annotation);

    var update = {
        shapes: added_shapes,
        annotations: added_annotations
        };
    Plotly.relayout(plot, update);
}

function make_dummy_blocks() {
    for (let block_name in dummy_blocks) {
        $("#block-select").val(block_name);
        load_block_data(block_name);
        let info_ranges = dummy_blocks[block_name];
        let first_block_offset_time = null;
        for (let info_range of info_ranges) {
            if (first_block_offset_time == null) {
                first_block_offset_time = parseFloat(info_range[2]);
            }
            block_color_counter = info_range[0];
            let start_time = parseFloat(info_range[2]) - first_block_offset_time;
            let end_time_loops = parseFloat(info_range[3]) - first_block_offset_time;
            add_dummy_block_boxes(start_time, end_time_loops);
            update_block_boxes_name(block_color_counter, info_range[1]);
            blockObj = block_number_to_block_object[block_color_counter];
            blockObj.start_time = start_time;
        }
    }
}

function add_event_from_sdl_data(step, block_name) {
    let event_data = {};
    let event_action = step.action;
    event_data["event-type"] = event_action;

    if (event_action == "calc") {
        // TODO: use the info from the step to populate the event_data for calc event.
        event_data["input-calc-action-type"] = $("#inputCalcActionType").val();
        event_data["input-calc-float"] = $("#inputCalcFloat").val();
        event_data["input-calc-increment"] = $("#inputCalcIncrement").val();
    } else if (event_action == "init") {
        event_data["input-init-action-gradients"] = step.gradients;
    } else if (event_action == "sync") {
        let object = objects[step.object];
        let time = (step.time == 0) ? "0" : toString(step.time);
        event_data["input-sync-time"] = time;
        event_data["input-sync-object"] = step.object;
        event_data["input-sync-duration"] = object.duration;
        event_data["input-sync-event-param"] = object.event;
    }

    add_new_event(event_data);
    let events_col_inner_html = $("#events-col")[0].innerHTML;
    block_to_events_html[block_name] = events_col_inner_html;
}

function reflect_loops_from_sdl() {
    for (let block_name in block_to_loops) {
        let loops = block_to_loops[block_name];
        if (loops != 1) reflect_block_loops_change(block_name, loops, 1, main_block_str);
    }
}
// SDL load related functions - end


// Block checkpoint related functions - start
function generate_block_checkpoint_state(block_name) {
    let block_state = {};

    block_state["block_name"] = block_name;
    block_state["block_data"] = blocks[block_name];
    block_state["block_duration"] = block_to_duration[block_name];
    block_state["block_events_html"] = block_to_events_html[block_name];
    block_state["plot_to_box_objects"] = plot_to_box_objects[block_name];
    block_state["array_name_to_array"] = array_name_to_array;
    block_state["block_number_to_block_object"] = block_number_to_block_object;
    block_state["block_to_loops"] = block_to_loops;

    let min_block_state = JSON.stringify(block_state);

    let blob = new Blob([min_block_state], { type: 'application/json' });
    let file_name = block_name + "_checkpoint.json";
    let file = new File([blob], file_name);
    download_file(file);

    return block_state;
}

function load_block_checkpoint(block_state, start_time, parent_block, base_block, active_calls) {
    if ($("#block-select").val() != parent_block) {
        load_block_data(parent_block);
        $("#block-select").val(parent_block);
    }

    let block_name = block_state["block_name"];
    while (block_name in plot_to_box_objects) {
        block_name = block_name + "_" + Math.random().toString(36).substring(2, 6);
    }
    plot_to_box_objects[block_name] = JSON.parse(JSON.stringify(plot_to_box_objects_template));

    blocks[block_name] = block_state["block_data"];
    block_to_duration[block_name] = parseFloat(block_state["block_duration"]);
    block_to_events_html[block_name] = block_state["block_events_html"];
    block_to_loops[block_name] = 1;
    if (block_state["block_to_loops"] && block_name in block_state["block_to_loops"]) {
        block_to_loops[block_name] = block_state["block_to_loops"][block_name];
    }
    let loops = parseInt(block_to_loops[block_name]);

    // update the arrays only with the additional arrays that might be present in the block.
    for (let key in block_state["array_name_to_array"]) {
        if (!(key in array_name_to_array)) {
            array_name_to_array[key] = block_state["array_name_to_array"][key];
        }
    }

    // convert all the box objects to actual Box class objects for coherence.
    let inner_blocks = {};
    let temp_block_number_objects = block_state["block_number_to_block_object"];
    for (let key in plot_to_box_objects_template) {
        block_state["plot_to_box_objects"][key].forEach(function (Obj) {
            if (Obj.type == "Block") {
                if (!(block_name in inner_blocks)) {
                    let inner_block_name = temp_block_number_objects[Obj.block].name;
                    inner_blocks[inner_block_name] = temp_block_number_objects[Obj.block].start_time;
                    blocks[block_name] = JSON.parse(default_data_state).plots_data.Main;
                }
            } else {
                let boxObj = new Box(Obj.type, Obj.start_time, Obj.axis, [Obj.array_info.name, Obj.array_info.array]);
                Object.assign(boxObj, Obj);
                plot_to_box_objects[block_name][key].push(boxObj);
            }
        });
    }

    let end_time = start_time + (block_to_duration[block_name] * loops);
    blockObj = new Block(block_name, start_time);
    block_number_to_block_object[block_color_counter] = blockObj;
    add_dummy_block_boxes(start_time, end_time);
    update_block_boxes_name(block_color_counter, block_name);
    block_color_counter += 1;

    let o = new Option(block_name, block_name);
    $(o).html(block_name);
    $("#block-select").append(o);

    for (let inner_block_name in inner_blocks) {
        active_calls += 1;
        $.getJSON('/static/block_checkpoints/'+ inner_block_name + '.json', function(inner_block_data) {
            load_block_checkpoint(inner_block_data, inner_blocks[inner_block_name], block_name, base_block, active_calls);
          }).fail(function(jqxhr, textStatus, error) {
            console.error('Error loading JSON file:', textStatus, error);
          }).always(function() {
            active_calls -= 1;
            if (active_calls == 0) {
                load_block_data(base_block);
                $("#block-select").val(base_block);
            }
        });
    }
}
// Block checkpoint related functions - end