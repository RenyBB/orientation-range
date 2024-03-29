// Range of phases
let start = 0;
let end = 1;

let phase_array = [];
current_phase = start;
phase_array.push(+current_phase.toFixed(2));

while (current_phase <= end) {
	current_phase = current_phase + 0.05;
	phase_array.push(+current_phase.toFixed(2));
};

// Orientation reproduction task

// practice stimuli for condition 1
let training_stimuli_range1 = [
	{ stimulus: "gabor_stimuli_matching/gabor_ori17_phase", orientation: 8},
	{ stimulus: "gabor_stimuli_matching/gabor_ori17_phase", orientation: 179},
];


/*for (var i = 0; i < training_stimuli_range1.length; i++) {
	training_stimuli_range1[i].stimulus = "gabor_stimuli_matching/gabor_ori".concat(training_stimuli_range1[i].orientation.toString()).concat("_phase").concat(training_stimuli_range1[i].phase.toString()).concat(".png");
};*/

	    
	    // test stimuli for condition 1
    	const test_stimuli_range1 = [
		    { stimulus: "gabor_stimuli_matching/gabor_ori17_phase", orientation: 17},
		    { stimulus: "gabor_stimuli_matching/gabor_ori26_phase", orientation: 26},
		    { stimulus: "gabor_stimuli_matching/gabor_ori35_phase", orientation: 35},
		    { stimulus: "gabor_stimuli_matching/gabor_ori44_phase", orientation: 44},
		    { stimulus: "gabor_stimuli_matching/gabor_ori53_phase", orientation: 53},
	    ];

      // practice stimuli for condition 2
	    const training_stimuli_range2 = [
		    { stimulus: "gabor_stimuli_matching/gabor_ori98_phase", orientation: 98},
		    { stimulus: "gabor_stimuli_matching/gabor_ori107_phase", orientation: 107},
	    ];
	    
	    // test stimuli for condition 2
	    const test_stimuli_range2 = [
		    { stimulus: "gabor_stimuli_matching/gabor_ori53_phase", orientation: 53},
		    { stimulus: "gabor_stimuli_matching/gabor_ori62_phase", orientation: 62},
		    { stimulus: "gabor_stimuli_matching/gabor_ori71_phase", orientation: 71},
		    { stimulus: "gabor_stimuli_matching/gabor_ori80_phase", orientation: 80},
		    { stimulus: "gabor_stimuli_matching/gabor_ori89_phase", orientation: 89},
	    ];


// Orientation discrimination task
	    // practice stimuli
	    const discrimination_training_stimuli = [
        {
          "stimulus_directory": "gabor_stimuli_new/",
    			"first_left_gabor_orientation": 23,
    			"first_left_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase",
   			"first_right_gabor_orientation": 23,
   			"first_right_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase",
    			"second_left_gabor_orientation": 15,
    			"second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    			"second_right_gabor_orientation": 29,
    			"second_right_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase"
		    },
		    {
    			"stimulus_directory": "gabor_stimuli_new/",
    			"first_left_gabor_orientation": 29,
    			"first_left_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase",
    			"first_right_gabor_orientation": 15,
    			"first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    			"second_left_gabor_orientation": 23,
    			"second_left_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase",
    			"second_right_gabor_orientation": 23,
    			"second_right_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase"
		    },
	    ];
	    
      // test stimuli
	    const discrimination_test_stimuli = [
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 17,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_left_gabor_orientation": 19,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 17,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_left_gabor_orientation": 21,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 17,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_left_gabor_orientation": 23,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 17,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_left_gabor_orientation": 25,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 17,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_left_gabor_orientation": 27,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 17,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_left_gabor_orientation": 29,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 17,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 19,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 17,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 21,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 17,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 23,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 17,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 25,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 17,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 27,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 17,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 29,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 17,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 19,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 17,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 21,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 17,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 23,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 17,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 25,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 17,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 27,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 17,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 29,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 17,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 19,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 17,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 21,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 17,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 23,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 17,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 25,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 17,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 27,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 17,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 29,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 19,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 17,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 21,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 17,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 23,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 17,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 25,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 17,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 27,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 17,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 29,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 17,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 19,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 17,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 21,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 17,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 23,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 17,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 25,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 17,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 27,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 17,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 29,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase",
    "first_right_gabor_orientation": 15,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_left_gabor_orientation": 17,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 19,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 17,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 21,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 17,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 23,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 17,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 25,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 17,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 27,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 17,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 29,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase",
    "second_left_gabor_orientation": 15,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "second_right_gabor_orientation": 17,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 19,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase",
    "second_left_gabor_orientation": 17,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 21,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase",
    "second_left_gabor_orientation": 17,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 23,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase",
    "second_left_gabor_orientation": 17,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 25,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase",
    "second_left_gabor_orientation": 17,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 27,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase",
    "second_left_gabor_orientation": 17,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  },
  {
    "stimulus_directory": "gabor_stimuli_new/",
    "first_left_gabor_orientation": 15,
    "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase",
    "first_right_gabor_orientation": 29,
    "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase",
    "second_left_gabor_orientation": 17,
    "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase",
    "second_right_gabor_orientation": 15,
    "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase"
  }
];
