// import data from "./miniflash.json" assert { type: 'json' };

// Taking standard x-axis for all the plots.
const x_standard = []
// for (let i=0; i<20000; i+=10) {
//     x_standard.push(i/1000);
// }

// storing the objects
// const objects = data["objects"];

const dummy_data = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0]
const rf_pulse_array = [3.13304e-005,3.14159,0.000275274,3.14159,0.000741752,3.14159,0.00140054,3.14159,0.00221321,3.14159,0.0031333,3.14159,0.00410657,3.14159,0.00507138,3.14159,0.00595912,3.14159,0.00669486,3.14159,0.00719792,3.14159,0.00738272,3.14159,0.00715954,3.14159,0.0064355,3.14159,0.00511552,3.14159,0.00310332,3.14159,0.00030259,3.14159,0.00338198,0,0.00804349,0,0.0137717,0,0.0206519,0,0.0287638,0,0.0381802,0,0.0489663,0,0.0611784,0,0.0748629,0,0.0900558,0,0.106781,0,0.125052,0,0.144867,0,0.166213,0,0.189063,0,0.213376,0,0.239097,0,0.266157,0,0.294475,0,0.323954,0,0.354486,0,0.385951,0,0.418216,0,0.451138,0,0.484565,0,0.518335,0,0.552279,0,0.586221,0,0.619982,0,0.653377,0,0.686221,0,0.718326,0,0.749508,0,0.779582,0,0.80837,0,0.835698,0,0.861398,0,0.885311,0,0.90729,0,0.927195,0,0.9449,0,0.960293,0,0.973275,0,0.983763,0,0.991689,0,0.997001,0,0.999666,0,0.999666,0,0.997001,0,0.991689,0,0.983763,0,0.973275,0,0.960293,0,0.9449,0,0.927195,0,0.90729,0,0.885311,0,0.861398,0,0.835698,0,0.80837,0,0.779582,0,0.749508,0,0.718326,0,0.686221,0,0.653377,0,0.619982,0,0.586221,0,0.552279,0,0.518335,0,0.484565,0,0.451138,0,0.418216,0,0.385951,0,0.354486,0,0.323954,0,0.294475,0,0.266157,0,0.239097,0,0.213376,0,0.189063,0,0.166213,0,0.144867,0,0.125052,0,0.106781,0,0.0900558,0,0.0748629,0,0.0611784,0,0.0489663,0,0.0381802,0,0.0287638,0,0.0206519,0,0.0137717,0,0.00804349,0,0.00338198,0,0.00030259,3.14159,0.00310332,3.14159,0.00511552,3.14159,0.0064355,3.14159,0.00715954,3.14159,0.00738272,3.14159,0.00719792,3.14159,0.00669486,3.14159,0.00595912,3.14159,0.00507138,3.14159,0.00410657,3.14159,0.0031333,3.14159,0.00221321,3.14159,0.00140054,3.14159,0.000741752,3.14159,0.000275274,3.14159,3.13304e-005,3.14159]
const grad_slice_select_array = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0]
const grad_slice_refocus_array = [0.0, 0.0455, 0.0909, 0.1364, 0.1818, 0.2273, 0.2727, 0.3182, 0.3636, 0.4091, 0.4545, 0.5, 0.5455, 0.5909, 0.6364, 0.6818, 0.7273, 0.7727, 0.8182, 0.8636, 0.9091, 0.9545, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.9545, 0.9091, 0.8636, 0.8182, 0.7727, 0.7273, 0.6818, 0.6364, 0.5909, 0.5455, 0.5, 0.4545, 0.4091, 0.3636, 0.3182, 0.2727, 0.2273, 0.1818, 0.1364, 0.0909, 0.0455, 0.0]
const grad_read_dephase_array = [0.0, 0.0455, 0.0909, 0.1364, 0.1818, 0.2273, 0.2727, 0.3182, 0.3636, 0.4091, 0.4545, 0.5, 0.5455, 0.5909, 0.6364, 0.6818, 0.7273, 0.7727, 0.8182, 0.8636, 0.9091, 0.9545, 1.0, 1.0, 0.9545, 0.9091, 0.8636, 0.8182, 0.7727, 0.7273, 0.6818, 0.6364, 0.5909, 0.5455, 0.5, 0.4545, 0.4091, 0.3636, 0.3182, 0.2727, 0.2273, 0.1818, 0.1364, 0.0909, 0.0455, 0.0]
const grad_read_readout_array = [0.0, 0.3333, 0.6667, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.6667, 0.3333, 0.0]
const grad_phase_encode_array = [0.0, 0.0455, 0.0909, 0.1364, 0.1818, 0.2273, 0.2727, 0.3182, 0.3636, 0.4091, 0.4545, 0.5, 0.5455, 0.5909, 0.6364, 0.6818, 0.7273, 0.7727, 0.8182, 0.8636, 0.9091, 0.9545, 1.0, 1.0, 0.9545, 0.9091, 0.8636, 0.8182, 0.7727, 0.7273, 0.6818, 0.6364, 0.5909, 0.5455, 0.5, 0.4545, 0.4091, 0.3636, 0.3182, 0.2727, 0.2273, 0.1818, 0.1364, 0.0909, 0.0455, 0.0]
const adc_readout_array = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]

const object_to_array = {
    "rf_excitation_btn" : rf_pulse_array,
    "grad_slice_select_btn" : grad_slice_select_array,
    "grad_slice_refocus_btn" : grad_slice_refocus_array,
    "grad_read_dephase_btn" : grad_read_dephase_array,
    "grad_read_readout_btn" : grad_read_readout_array,
    "grad_phase_encode_btn" : grad_phase_encode_array,
    "adc_readout_btn" : adc_readout_array,

}

const axis_id_to_color = {
    "rf_chart" : "blue",
    "slice_chart" : "orange",
    "phase_chart" : "green",
    "readout_chart": "red",
    "adc_chart": "violet"
}

// const text = "Hello";
const plot_rf_data = {
// x: x_standard,
// y: dummy_data,
// xaxis: 'x1',
// yaxis: 'y1',
type: 'scatter',
name: 'RF pulse',
// hovertemplate: '<b>' + text + '</b><br> %{y:.2f}<extra></extra>'
};

const plot_slice_data = {
// x: x_standard,
// y: dummy_data,
// xaxis: 'x2',
// yaxis: 'y2',
type: 'scatter',
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
type: 'scatter',
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
type: 'scatter',
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
type: 'scatter',
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


const config = {
    scrollZoom: true,
    responsive: true,
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
        console.log(dragged.id +" dropped at " + target.id);
        let dragged_array = object_to_array[dragged.id];
        let data = {};
        data["y"] = dragged_array;
        data["line"] = {"color" : axis_id_to_color[target.id]};
        data["hovertemplate"] = '<b>' +  dragged.innerHTML + '</b><br> %{y:.2f}<extra></extra>';
        Plotly.addTraces(target, data);
            });
    });

    $(".dropzone").each(function () {
        var plot = this;
        plot.on('plotly_doubleclick', function(data) {
            if (shiftIsPressed) {
                try {
                    Plotly.deleteTraces(plot, -1);
                    console.log("Deleted last trace from " + plot.id);
                  }
                  catch(err) {
                    console.log("No traces to delete!")
                  }
            }
        });
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


