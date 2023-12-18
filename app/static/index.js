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
    rf_pulse_array.push(rf_array[2*i]);
}
const step_size = 10;

const block_colors = ["#ff0065", "#cf7856", "#978eff", "#5343ff", "#ff7f50", "#77b6df", "#457480", "#ba029c", "#31e658"]
var block_color_counter = 0;

var kernel_time = 100;

plot_to_box_objects_template = {
    'rf_chart': [],
    'slice_chart': [],
    'phase_chart': [],
    'readout_chart': [],
    'adc_chart': []
}
var plot_to_box_objects = {}
var block_number_to_block_object = {}

// blocks will maintain plot data for all the blocks.
var blocks = {}

// Dummy arrays dictionary for array selection.
const grad_100_2660_100 = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0];
const grad_220_10_220 = [0.0, 0.0455, 0.0909, 0.1364, 0.1818, 0.2273, 0.2727, 0.3182, 0.3636, 0.4091, 0.4545, 0.5, 0.5455, 0.5909, 0.6364, 0.6818, 0.7273, 0.7727, 0.8182, 0.8636, 0.9091, 0.9545, 1.0, 1.0, 0.9545, 0.9091, 0.8636, 0.8182, 0.7727, 0.7273, 0.6818, 0.6364, 0.5909, 0.5455, 0.5, 0.4545, 0.4091, 0.3636, 0.3182, 0.2727, 0.2273, 0.1818, 0.1364, 0.0909, 0.0455, 0.0];
const grad_220_80_220 = [0.0, 0.0455, 0.0909, 0.1364, 0.1818, 0.2273, 0.2727, 0.3182, 0.3636, 0.4091, 0.4545, 0.5, 0.5455, 0.5909, 0.6364, 0.6818, 0.7273, 0.7727, 0.8182, 0.8636, 0.9091, 0.9545, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.9545, 0.9091, 0.8636, 0.8182, 0.7727, 0.7273, 0.6818, 0.6364, 0.5909, 0.5455, 0.5, 0.4545, 0.4091, 0.3636, 0.3182, 0.2727, 0.2273, 0.1818, 0.1364, 0.0909, 0.0455, 0.0];
const grad_30_3840_30 = [0.0, 0.3333, 0.6667, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.6667, 0.3333, 0.0];
const array_name_to_array = {
    "RF Pulse": rf_pulse_array,
    "grad_100_2660_100": grad_100_2660_100,
    "grad_220_10_220": grad_220_10_220,
    "grad_220_80_220": grad_220_80_220,
    "grad_30_3840_30": grad_30_3840_30
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
    "slice_chart" : "blue",
    "phase_chart" : "blue",
    "readout_chart": "blue",
    "adc_chart": "blue"
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
    "rf_chart" : rf_pulse_array,
    "slice_chart" : grad_slice_select_array,
    "phase_chart" : grad_slice_select_array,
    "readout_chart": grad_slice_select_array,
    "adc_chart": adc_readout_array
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
        range: [0, kernel_time],
        fixedrange: true,
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
        range: [0, 1.75],
    },
    dragmode: false
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

rf_layout["title"] = {
    text:'Main',
    font: {
        family: 'Courier New, monospace',
        size: 18,
        color: 'rgba(255,255,255,0.9)'
    },
    yref: 'paper',
    y: 1
}
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

var annotation_template = {
    x: 0,
    y: 1.2,
    xref: 'x',
    yref: 'y',
    text: '',
    showarrow: false,
    font: {
      family: 'Courier New, monospace',
      size: 12,
      color: '#777'
    },
  }

// keeping default 10 for now, later to be set by user.
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
    // modeBarButtonsToAdd: ['select2d'],
    // modeBarButtonsToRemove: ['pan2d','lasso2d','resetScale2d','zoomOut2d', 
    // "hoverClosestGl2d", "hoverClosestPie", "toggleHover", "resetViews", "toImage", "sendDataToCloud", "toggleSpikelines", "resetViewMapbox",
    // "hoverClosestCartesian", "hoverCompareCartesian", "zoom2d", "pan2d", "lasso2d", "zoomIn2d", "zoomOut2d", "autoScale2d", "resetScale2d"],
    // displaylogo: false,
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

let data = JSON.parse(localStorage.getItem("data"));
if (data) {
    reload_data(data);
}

load_array_select();

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

        if (starting_point < 0 || starting_point > kernel_time) {
            alert("Invalid drop location");
            return;
        }
        let x_data = []
        for (let i=0; i<dragged_array.length; i+=1) {
            x_data.push(starting_point + (i/step_size));
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
        shape["x1"] = starting_point + (dragged_array.length/step_size);
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
        boxObj = new Box(object_to_type[dragged.id], starting_point, axis_id_to_axis_name[target.id], dragged_array);
        let block_name = $('#block-select').val();
        if (!(block_name in plot_to_box_objects)) {
            plot_to_box_objects[block_name] = JSON.parse(JSON.stringify(plot_to_box_objects_template));
        }
        plot_to_box_objects[block_name][target.id].push(boxObj);
        });
    });
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
            if ("shapes" in ed || "xaxis.range[0]" in ed || "xaxis.range" in ed || "annotations" in ed 
                || "plot_bgcolor" in ed || "height" in ed || "width" in ed || Object.keys(ed).length<1) {
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

                    if (starting_point < 0) {
                        starting_point = 0;
                    } else if (starting_point > kernel_time) {
                        starting_point = kernel_time - 10;
                    }

                    // Not needed for now as we have disabled stretching/squeezing.
                    // If the width or height of the shape is changed, it has been stretched/squeezed not moved.
                    // var dimensions = get_trace_dimensions(plot, trace_number);
                    // if (Math.abs((ending_point - starting_point) - dimensions[0]) > 2 || Math.abs((y1_val - y0_val) - dimensions[1]) > 0.25) {
                    //     console.log("Stretched/squeezed not moved!!!");
                    //     // We revert the stretch/squeeze and return.
                    //     revert_shape_change(plot, shape_number);
                    //     return;
                    // }

                    // If the y0 value is not zero after moving for a shape, we want to move the shape to zero.
                    if (Math.abs(y0_val) != 0) {
                        console.log("Lifted!");
                        if ("shapes" in plot.layout)
                            move_shape_to_zero_line(plot, shape_number);
                    }

                    // Update the starting point of the box - both UI and object.
                    let block_name = $('#block-select').val();
                    boxObj = plot_to_box_objects[block_name][plot.id][trace_number-1];
                    let shift_value =  parseInt(starting_point) - parseInt(boxObj.start_time);
                    // If the box is part of a block, shift all the boxes in that block.
                    if (boxObj.block != null) {
                        move_block_boxes(boxObj.block, shift_value);
                    } else {
                        boxObj.start_time = parseInt(starting_point);
                        change_box_start_time(plot, trace_number, parseInt(starting_point));
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
                load_block_modal_values(plot, selected_trace_number)
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
        let elements = document.forms["parametersForm"].getElementsByTagName("input");
        elements = Array.from(elements);
        save_modal_values(plot, selected_trace_number);
        $('#parametersModal').modal('toggle');
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
    });

    $("#kernel-time-btn").click(function () {
        kernel_time = $("#kernelTimeInput").val();
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
          }
          else if ($(this).val() == "variable") {
            $('#variableAmplitudeGroup').show();
          }
        }
    });

    $("#reset-btn").click(function(){
        // Reset the plots and plot data to default
        Plotly.purge(rf_chart);
        Plotly.purge(slice_chart);
        Plotly.purge(phase_chart);
        Plotly.purge(readout_chart);
        Plotly.purge(adc_chart);
        Plotly.newPlot('rf_chart', [plot_rf_data], rf_layout, config);
        Plotly.newPlot('slice_chart', [plot_slice_data], slice_layout, config);
        Plotly.newPlot('phase_chart', [plot_phase_data], phase_layout, config);
        Plotly.newPlot('readout_chart', [plot_readout_data], readout_layout, config);
        Plotly.newPlot('adc_chart', [plot_adc_data], adc_layout, config);
        plot_to_box_objects = {}
        block_number_to_block_object = {}
        block_color_counter = 0;
        location.reload();
    });

    $("#generate-sdl-btn").click(function(){
        const sdl_objects = [];
        // TODO: update this for the multiple blocks design.
        for (var key in trace_to_box_object) {
            sdl_objects.push(...trace_to_box_object[key]);
        }
        let configurations = save_configurations();
        send_data(sdl_objects, configurations);
    });

    $(document).on('click', '.array-dropdown', function () {
        $('#array-selection-btn').text($(this).text());
    });
    $(document).on('click', '#add-new-array-item', function () {
        $('#parametersModal').addClass('blurred');
        $('#addArrayModal').modal('toggle');
    })
    $('#addArrayModal').on('hidden.bs.modal', function () {
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
        const [areValuesValid, array] = validateArrayValues(arrayValues);
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
        }
        array_name_to_array[arrayName] = array;
        // populate the array selection again with the addition of new array.
        load_array_select();
    });

    $('input[type="checkbox"]').click(function(){
        if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
            document.documentElement.setAttribute('data-bs-theme','light')
            $(".btn").each(function(){
                $(this).removeClass("btn-secondary");
                $(this).addClass("btn-light");
            });
            toggle_plot_color(true);

        }
        else {
            document.documentElement.setAttribute('data-bs-theme','dark')
            $(".btn").each(function(){
                $(this).removeClass("btn-light");
                $(this).addClass("btn-secondary");
            });
            toggle_plot_color(false);
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

    $('#back-btn').click(function(){
        let data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            reload_data(data);
        }
    });

    $('#block-select').change(function(){
        // The title of the displayed block will become our previous block.
        let prev_block = rf_chart.layout["title"]["text"];
        save_block_data(prev_block);
        let current_block = $(this).val();
        load_block_data(current_block);
    })
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

function move_annotation(plot, annotation_number, starting_point) {
    let annotations = JSON.parse(JSON.stringify(plot.layout["annotations"]));
    annotations[annotation_number]["x"] = starting_point+2.5;
    var update = {
        annotations: annotations
        };
    Plotly.relayout(plot, update);
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

function change_trace_type(plot, trace_number, toVariable) {
    let y = plot.data[trace_number]["y"];
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
        for (let i=0; i<y.length; i++) {
            let val = y[i];
            x_data.push(x[i]);
            x_data.push(x[i] + 0.0001);
            x_data.push(x[i] + 0.0002);
            x_data.push(x[i] + 0.0003);
            y_data.push(val);
            y_data.push(val*0.75);
            y_data.push(val*0.5);
            y_data.push(val*0.25);
        }
        data["type"] = "scatter";
        data["mode"] = "markers";
        data["marker"] = {
            color: line.color,
            size: 2,
        };
    } else {
        for (let i=0; i<y.length; i+=4) {
            x_data.push(x[i]);
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
    // shapes[line_shape_number]["y0"] = -shape_height;
    // shapes[box_shape_number]["y0"] = -shape_height;
    if (toVariable) shapes[box_shape_number]["fillcolor"] = 'rgba(206 249 113, 0.1)';
    else shapes[box_shape_number]["fillcolor"] = 'rgba(129, 133, 137, 0.2)';
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
    $('#array-selection-btn').text(boxObj.array_info.name);
}

function load_block_modal_values(plot, trace_number) {
    let block_name = $('#block-select').val();
    boxObj = plot_to_box_objects[block_name][plot.id][trace_number-1];
    blockObj = block_number_to_block_object[boxObj.block];
    $('#inputBlockName').val(blockObj.name);
    $('#blockStartTime').val(blockObj.start_time);
}

function save_modal_values(plot, trace_number) {
    let block_name = $('#block-select').val();
    boxObj = plot_to_box_objects[block_name][plot.id][trace_number-1];
    boxObj.name = $('#inputName').val();

    // If the selected trace type is different than what it already is we change trace - fixed/variable.
    if ($("#variableRadio").is(':checked')) {
        if (!boxObj.variable_amplitude) {
            change_trace_type(plot, trace_number, true);
        }
    } else {
        if (boxObj.variable_amplitude) {
            change_trace_type(plot, trace_number, false);
        }
    }

    // If the start time has been changed in the modal, we move the box.
    let input_start_time = $('#inputStartTime').val();
    if (boxObj.start_time != input_start_time)
        change_box_start_time(plot, trace_number, parseInt(input_start_time));

    let selected_box_array_name = $('#array-selection-btn').text();
    if (selected_box_array_name != boxObj.array_info.name) {
        let new_array = [];
        if (selected_box_array_name == "Default Array") new_array = axis_id_to_default_array[plot.id]
        else new_array = array_name_to_array[selected_box_array_name]
        change_box_array(plot, trace_number, parseInt(input_start_time), new_array);
    }

    boxObj.start_time = input_start_time;
    boxObj.anchor_time = $('#inputAnchorTime').val();
    boxObj.amplitude = $('#inputConstantAmplitude').val();
    boxObj.variable_amplitude = $('#variableRadio').is(':checked');
    boxObj.step_change = $('#inputStepChange').val();
    boxObj.loop_number = $('#inputLoopNumber').val();
    boxObj.array_info.name = selected_box_array_name;
    if (selected_box_array_name == "Default Array") {
        boxObj.array_info.array = axis_id_to_default_array[plot.id];
    } else {
        boxObj.array_info.array = array_name_to_array[selected_box_array_name];
    }
}

function save_block_modal_values(plot, trace_number) {
    let block_name = $('#block-select').val();
    boxObj = plot_to_box_objects[block_name][plot.id][trace_number-1];
    blockObj = block_number_to_block_object[boxObj.block];

    // If the start time has been changed in the modal, we move the block.
    let block_start_time = $('#blockStartTime').val();
    if (blockObj.start_time != block_start_time) {
        let shift_value =  parseInt(block_start_time) - parseInt(blockObj.start_time);
        move_block_boxes(boxObj.block, shift_value);
    }

    blockObj.name = $('#inputBlockName').val();
    blockObj.start_time = block_start_time;
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
        'reconstruction': reconstruction
    }
    return configs
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
    let plots_data = {};
    $(".dropzone").each(function () {
        var plot = this;
        plots_data[plot.id] = [plot.data, plot.layout];
    });
    let theme = "dark";
    if (document.documentElement.getAttribute('data-bs-theme') == 'light') theme = "light";
    let data = {
        "plots_data": plots_data,
        "plot_to_box_objects": plot_to_box_objects,
        "block_number_to_block_object": block_number_to_block_object,
        "block_color_counter": block_color_counter,
        "theme": theme
    }
    localStorage.setItem("data", JSON.stringify(data));
}

function reload_data(data) {
    let plots_data = data["plots_data"];
    $(".dropzone").each(function () {
        var plot = this;
        let plot_data = plots_data[plot.id];
        Plotly.react(plot, plot_data[0], plot_data[1]);
    });
    plot_to_box_objects = data["plot_to_box_objects"];
    block_number_to_block_object = data["block_number_to_block_object"];
    block_color_counter = data["block_color_counter"];
    theme = data["theme"];
    if (theme == "light") {
        $('input[type="checkbox"]').attr("checked", false);
        document.documentElement.setAttribute('data-bs-theme','light')
        $(".btn").each(function(){
            $(this).removeClass("btn-secondary");
            $(this).addClass("btn-light");
        });
        toggle_plot_color(true);
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
    move_annotation(plot, trace_number-1, starting_point);
}

function change_box_array(plot, trace_number, starting_point, new_array) {
    let y = new_array;
    let line = plot.data[trace_number]["line"];
    let hovertemplate = plot.data[trace_number]["hovertemplate"];
    let shape_number = (trace_number-1)*2;

    let x_data = []
    for (let i=0; i<y.length; i+=1) {
        x_data.push(starting_point+(i/step_size));
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
    let ending_point = starting_point + (y.length/step_size)
    update_box_shape(plot, shape_number, starting_point, ending_point);
    move_vertical_line_shape(plot, shape_number+1, starting_point);
}

function load_array_select() {
    let ul = document.getElementById("array-dropdown-menu");
    ul.innerHTML = '';
    ul.innerHTML += '<li><a class="dropdown-item array-dropdown">Default Array</a></li>';
    for (const [key, value] of Object.entries(array_name_to_array)) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(key));
        li.setAttribute("id", key + "-array-item");
        li.setAttribute("class", "dropdown-item array-dropdown")
        ul.appendChild(li);
    }
    ul.innerHTML += '<li><hr class="dropdown-divider"></li> \
    <li id="add-new-array-item"><a class="dropdown-item">&#43;</a></li>';
}

function validateArrayName(arrayName) {
    return !(arrayName == "");
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

function toggle_plot_color(isDark) {
    if (isDark) {
        var update = {
            "plot_bgcolor":"rgba(255,255,255,0.1)",
            "paper_bgcolor":"rgba(215,215,215,0.1)",
            "xaxis.titlefont.color": "rgba(0,0,0,0.9)",
            "xaxis.tickfont.color": "rgba(0,0,0,0.9)",
            "xaxis.gridcolor": "rgba(0,0,0,0.05)",
            "xaxis.zerolinecolor": "rgba(0,0,0,0.1)",
            "yaxis.titlefont.color": "rgba(0,0,0,0.9)",
            "yaxis.tickfont.color": "rgba(0,0,0,0.9)",
            "yaxis.gridcolor": "rgba(0,0,0,0.05)",
            "yaxis.zerolinecolor": "rgba(0,0,0,0.1)",
            "title.font.color": 'rgba(0,0,0,0.9)'
        }
    } else {
        var update = {
            "plot_bgcolor":"rgba(0,0,0,0.1)",
            "paper_bgcolor":"rgba(0,0,0,0.6)",
            "xaxis.titlefont.color": "rgba(255,255,255,0.9)",
            "xaxis.tickfont.color": "rgba(255,255,255,0.9)",
            "xaxis.gridcolor": "rgba(255,255,255,0.05)",
            "xaxis.zerolinecolor": "rgba(255,255,255,0.1)",
            "yaxis.titlefont.color": "rgba(255,255,255,0.9)",
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
        shapes[shape_number]["line"] =  {
            color: 'rgb(129, 133, 137)',
            width: 1
          };
          boxObj.isSelected = false;
    }

    var update = {
        shapes: shapes
        };
    Plotly.relayout(plot, update);
}

function update_block_boxes(toBlock, trace_number, plot) {
    let shape_number = (trace_number-1)*2;
    let shapes = JSON.parse(JSON.stringify(plot.layout["shapes"]));
    let annotation_number = trace_number - 1;
    let annotations = JSON.parse(JSON.stringify(plot.layout["annotations"]));

    if (toBlock) {
        annotations[annotation_number]["text"] = "Block "+(block_color_counter+1);
        let block_color = block_colors[block_color_counter];
        shapes[shape_number]["line"] =  {
            color: block_color+"FF",
            width: 1,
          };
    } else {
        annotations[annotation_number]["text"] = "";
        shapes[shape_number]["line"] =  {
            color: 'rgb(129, 133, 137)',
            width: 1
          };
    }
    var update = {
        annotations: annotations,
        shapes: shapes,
        };
    Plotly.relayout(plot, update);
    update_trace(trace_number, plot);
}

function update_trace(trace_number, plot) {
    let update = {
        'line.color': block_colors[block_color_counter]
    };
    Plotly.restyle(plot, update, trace_number);
}

function add_block_with_selected_boxes() {
    let selected_boxes = [];
    let start_time = Number.MAX_VALUE;

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
        plot_to_box_objects[cur_block_name][key].forEach(function (boxObj, index) {
            if (boxObj.isSelected) {
                boxObj.block = block_color_counter;
                selected_boxes.push(boxObj);

                // Storing the earliest start time- it will be our block start time.
                start_time = Math.min(start_time, boxObj.start_time);

                // We unselect the box now by calling the function again and update it.
                // Here, index of the object in the array plus 1 will give us the trace number.
                let trace_number = index + 1
                let plot_id = axis_name_to_axis_id[boxObj.axis];
                let plot = document.getElementById(plot_id);
                select_box(trace_number, plot);

                // We push the objects to the plot to box objects map
                objCopy = Object.assign(Object.create(Object.getPrototypeOf(boxObj)), boxObj);
                objCopy.isSelected = false;
                objCopy.block = null;
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

                update_block_boxes(true, trace_number, plot);
            }
        });
    }
    if (!selected_boxes.length) {
        alert("no boxes selected!")
        return false;
    }
    blocks[block_name] = block_data;
    blockObj = new Block(block_name, start_time, selected_boxes);
    block_number_to_block_object[block_color_counter] = blockObj;
    block_color_counter += 1;
    if (block_color_counter >= block_colors.length) block_color_counter = 0;
    return true;
}

function move_block_boxes(block_number, shift_value) {
    let block_name = $('#block-select').val();
    for (var key in plot_to_box_objects_template) {
        plot_to_box_objects[block_name][key].forEach(function (boxObj, index) {
                if (boxObj.block == block_number) {
                    let trace_number = index + 1
                    let plot_id = axis_name_to_axis_id[boxObj.axis];
                    let plot = document.getElementById(plot_id);
                    let starting_point = boxObj.start_time + shift_value;
                    change_box_start_time(plot, trace_number, starting_point);
                    boxObj.start_time = starting_point;
                }
        });
    }
    blockObj = block_number_to_block_object[block_number];
    blockObj.start_time = parseInt(blockObj.start_time) + shift_value;
}

function save_block_data(block_name) {
    let plot_data = {}
    $(".dropzone").each(function () {
        var plot = this;
        plot_data[plot.id] = [plot.data, plot.layout];
    });
    blocks[block_name] = plot_data;
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
        Plotly.react(plot, plot_data[0], plot_data[1]);
    });
}

function send_data(box_objects, configurations) {
    $.ajax({
        url: '/process',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ 
            'box_objects': box_objects,
            'configurations': configurations
        }),
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

window.onbeforeunload = function (e) {
    save_data();
};

class Box {
    type = "";
    axis = "";
    name = "";
    start_time = 0;
    anchor_time = 0;
    amplitude = 0;
    variable_amplitude = false;
    step_change = 0;
    loop_number = 0;
    isSelected = false;
    block = null;
    array_info = {
        name: "Default Array",
        array: []
    }

    constructor(type, start_time, axis, array) {
        this.type = type;
        this.start_time = start_time;
        this.axis = axis;
        this.array_info.array = array;
    }
}

class Block {
    name = "";
    start_time = 0;
    boxes = [];

    constructor(name, start_time, box_array) {
        this.name = name;
        this.start_time = start_time;
        this.boxes = box_array;
    }
}
