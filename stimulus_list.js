// Orientation reproduction task
	        
	    // practice stimuli
	    const training_stimuli = [
		    { stimulus: "gabor_stimuli_matching/gabor_ori15_phase0.05.png", orientation: 15},
		    { stimulus: "gabor_stimuli_matching/gabor_ori139_phase0.05.png", orientation: 139},
	    ];
	    
	    // test stimuli for condition 1
    	const test_stimuli_range1 = [
		    { stimulus: "gabor_stimuli_matching/gabor_ori41_phase0.05.png", orientation: 41},
		    { stimulus: "gabor_stimuli_matching/gabor_ori50_phase0.05.png", orientation: 50},
		    { stimulus: "gabor_stimuli_matching/gabor_ori59_phase0.05.png", orientation: 59},
		    { stimulus: "gabor_stimuli_matching/gabor_ori68_phase0.05.png", orientation: 68},
		    { stimulus: "gabor_stimuli_matching/gabor_ori77_phase0.05.png", orientation: 77},
	    ];
	    
	    // test stimuli for condition 2
	    const test_stimuli_range2 = [
		    { stimulus: "gabor_stimuli_matching/gabor_ori77_phase0.05.png", orientation: 77},
		    { stimulus: "gabor_stimuli_matching/gabor_ori86_phase0.05.png", orientation: 86},
		    { stimulus: "gabor_stimuli_matching/gabor_ori95_phase0.05.png", orientation: 95},
		    { stimulus: "gabor_stimuli_matching/gabor_ori104_phase0.05.png", orientation: 104},
		    { stimulus: "gabor_stimuli_matching/gabor_ori113_phase0.05.png", orientation: 113},
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
