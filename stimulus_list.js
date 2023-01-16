// Orientation reproduction task
	        
	    // practice stimuli for condition 1
	    const training_stimuli_range1 = [
		    { stimulus: "gabor_stimuli_matching/gabor_ori8_phase0.05.png", orientation: 8},
		    { stimulus: "gabor_stimuli_matching/gabor_ori179_phase0.05.png", orientation: 179},
	    ];
	    
	    // test stimuli for condition 1
    	const test_stimuli_range1 = [
		    { stimulus: "gabor_stimuli_matching/gabor_ori17_phase0.png", orientation: 17},
		    { stimulus: "gabor_stimuli_matching/gabor_ori26_phase0.png", orientation: 26},
		    { stimulus: "gabor_stimuli_matching/gabor_ori35_phase0.png", orientation: 35},
		    { stimulus: "gabor_stimuli_matching/gabor_ori44_phase0.png", orientation: 44},
		    { stimulus: "gabor_stimuli_matching/gabor_ori53_phase0.png", orientation: 53},
	    ];

      // practice stimuli for condition 2
	    const training_stimuli_range2 = [
		    { stimulus: "gabor_stimuli_matching/gabor_ori98_phase0.05.png", orientation: 98},
		    { stimulus: "gabor_stimuli_matching/gabor_ori107_phase0.05.png", orientation: 107},
	    ];
	    
	    // test stimuli for condition 2
	    const test_stimuli_range2 = [
		    { stimulus: "gabor_stimuli_matching/gabor_ori53_phase0.png", orientation: 53},
		    { stimulus: "gabor_stimuli_matching/gabor_ori62_phase0.png", orientation: 62},
		    { stimulus: "gabor_stimuli_matching/gabor_ori71_phase0.png", orientation: 71},
		    { stimulus: "gabor_stimuli_matching/gabor_ori80_phase0.png", orientation: 80},
		    { stimulus: "gabor_stimuli_matching/gabor_ori89_phase0.png", orientation: 89},
	    ];


// Orientation discrimination task
	    // practice stimuli
	    const discrimination_training_stimuli = [
        {
          "stimulus_directory": "gabor_stimuli_new/",
    			"first_left_gabor_orientation": 23,
    			"first_left_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase0.05.png",
   			  "first_right_gabor_orientation": 23,
   			  "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase0.05.png",
    			"second_left_gabor_orientation": 15,
    			"second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
    			"second_right_gabor_orientation": 29,
    			"second_right_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase0.05.png"
		    },
		    {
    			"stimulus_directory": "gabor_stimuli_new/",
    			"first_left_gabor_orientation": 29,
    			"first_left_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase0.05.png",
    			"first_right_gabor_orientation": 15,
    			"first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
    			"second_left_gabor_orientation": 23,
    			"second_left_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase0.05.png",
    			"second_right_gabor_orientation": 23,
    			"second_right_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase0.05.png"
		    },
	    ];
	    
      // test stimuli
	    const discrimination_test_stimuli = [
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 17,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_left_gabor_orientation": 19,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 17,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_left_gabor_orientation": 21,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 17,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_left_gabor_orientation": 23,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 17,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_left_gabor_orientation": 25,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 17,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_left_gabor_orientation": 27,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 17,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_left_gabor_orientation": 29,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 17,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 19,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 17,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 21,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 17,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 23,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 17,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 25,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 17,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 27,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 17,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 29,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 17,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 19,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 17,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 21,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 17,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 23,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 17,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 25,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 17,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 27,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 17,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 29,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 17,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 19,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 17,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 21,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 17,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 23,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 17,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 25,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 17,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 27,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 17,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 29,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 19,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 17,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 21,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 17,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 23,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 17,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 25,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 17,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 27,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 17,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 29,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 17,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 19,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 17,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 21,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 17,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 23,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 17,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 25,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 17,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 27,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 17,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 29,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase0.05.png",
          "first_right_gabor_orientation": 15,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_left_gabor_orientation": 17,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 19,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 17,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 21,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 17,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 23,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 17,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 25,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 17,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 27,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 17,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 29,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase0.05.png",
          "second_left_gabor_orientation": 15,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "second_right_gabor_orientation": 17,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 19,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori19_phase0.05.png",
          "second_left_gabor_orientation": 17,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 21,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori21_phase0.05.png",
          "second_left_gabor_orientation": 17,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 23,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori23_phase0.05.png",
          "second_left_gabor_orientation": 17,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 25,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori25_phase0.05.png",
          "second_left_gabor_orientation": 17,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 27,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori27_phase0.05.png",
          "second_left_gabor_orientation": 17,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        },
        {
          "stimulus_directory": "gabor_stimuli_new/",
          "first_left_gabor_orientation": 15,
          "first_left_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png",
          "first_right_gabor_orientation": 29,
          "first_right_gabor_filename": "gabor_stimuli_new/gabor_ori29_phase0.05.png",
          "second_left_gabor_orientation": 17,
          "second_left_gabor_filename": "gabor_stimuli_new/gabor_ori17_phase0.05.png",
          "second_right_gabor_orientation": 15,
          "second_right_gabor_filename": "gabor_stimuli_new/gabor_ori15_phase0.05.png"
        }
      ];
