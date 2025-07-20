document.addEventListener('DOMContentLoaded', function() {

    // --- Live API Configuration (for presentation) ---
    // This section shows the code for live API calls.
    // It is not used in the final demo to ensure reliability.

    const HF_API_TOKEN = "YOUR_HF_API_TOKEN_HERE"; // Placeholder for the token
    const MODEL_URL = "https://api-inference.huggingface.co/models/google/gemma-2b-it";
    const SPEECHIFY_API_KEY = "YOUR_SPEECHIFY_API_KEY_HERE";
    const SPEECHIFY_CLONE_URL = "https://api.speechify.com/v1/voice/clone";

    function queryLiveApi(prompt) {
        /*
        This function would call the live GenAI model.
        It is not used in the final demo to avoid network issues.
        
        fetch(MODEL_URL, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${HF_API_TOKEN}` },
            body: JSON.stringify({ "inputs": prompt, "parameters": { "return_full_text": false } })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Live API response:", data[0].generated_text);
        })
        .catch(error => console.error("Live API call failed:", error));
        */
       console.log("Demonstrating live GenAI API call (not active).");
    }

    function cloneVoiceWithSpeechify(text, voice_sample_url) {
        /*
        This function would call a voice cloning API like Speechify.
        It is not used in the final demo.
        
        fetch(SPEECHIFY_CLONE_URL, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${SPEECHIFY_API_KEY}` },
            body: JSON.stringify({ "text": text, "voice_sample_url": voice_sample_url })
        })
        .then(response => response.blob()) // Assuming it returns an audio file
        .then(audioBlob => {
            const audioUrl = URL.createObjectURL(audioBlob);
            console.log("Generated cloned voice audio URL:", audioUrl);
            // new Audio(audioUrl).play();
        })
        .catch(error => console.error("Voice cloning API call failed:", error));
        */
       console.log("Demonstrating voice cloning API call (not active).");
    }
    // --- End of Live API code ---


    // --- DATA & CONFIGURATION (Moved from Python backend) ---

    // 1. EEG Data (from your eeg_dummy_dataset.csv file)
    const eegData = {
        "Thirsty, Water": [0.583397911, 0.632349372, 0.627478957, 0.588873327, 0.535896122, 0.523616254, 0.52733332, 0.53438133, 0.584984183, 0.511392951, 0.505892158, 0.5116781, 0.518606782, 0.501584888, 0.523498178, 0.50320673, 0.534427404, 0.51348418, 0.521841288, 0.51322198, 0.521845341, 0.511211395, 0.52123332, 0.505494118, 0.512616277, 0.504221976, 0.512110233, 0.502698183, 0.511873305, 0.501860678, 0.513410211, 0.50341022, 0.515494108, 0.505494118, 0.51625973, 0.50625974, 0.515892148, 0.505892158, 0.51438135, 0.50438136, 0.514134884, 0.504134893, 0.515666664, 0.505666673, 0.518102169, 0.508102179, 0.519860685, 0.509860695, 0.520145357, 0.510145366, 0.518873334, 0.508873343, 0.516589761, 0.50658977, 0.515145361, 0.505145371, 0.515221953, 0.505221963, 0.516981184, 0.506981194, 0.519266665, 0.509266675, 0.520892143, 0.510892153, 0.521381319, 0.511381328, 0.520303845, 0.510303855, 0.518018842, 0.508018851, 0.515494108, 0.505494118, 0.514018834, 0.504018843, 0.51426667, 0.50426668, 0.516178072, 0.506178081, 0.518981159, 0.508981168, 0.52110219, 0.511102199, 0.521845341, 0.51184535, 0.521110237, 0.511110246, 0.519266665, 0.509266675, 0.517178059, 0.507178068, 0.515892148, 0.505892158, 0.515892148, 0.505892158, 0.516981184, 0.506981194, 0.518102169, 0.508102179, 0.518606782, 0.508606791, 0.518102169, 0.508102179, 0.516410232, 0.506410241, 0.51438135, 0.50438136, 0.51322198, 0.503221989, 0.51348418, 0.50348419, 0.514981151, 0.50498116, 0.517178059, 0.507178068, 0.518981159, 0.508981168, 0.520145357, 0.510145366, 0.520381331, 0.510381341, 0.519616246, 0.509616256, 0.518102169, 0.508102179, 0.516178072, 0.506178081, 0.51438135, 0.50438136, 0.51348418, 0.50348419, 0.513892114, 0.503892124, 0.515494108, 0.505494118, 0.517427444, 0.507427454, 0.519145369, 0.50914538, 0.520145357, 0.510145366, 0.520145357, 0.510145366, 0.519381344, 0.509381354, 0.518221974, 0.508221984, 0.516892135, 0.506892145],
        "Yes, Pain": [0.490333319, 0.443740249, 0.448873341, 0.495221972, 0.548494101, 0.559860647, 0.556259751, 0.549266636, 0.49658972, 0.572110236, 0.577845335, 0.572333336, 0.56549412, 0.581381321, 0.559266686, 0.579616249, 0.549145341, 0.5698607, 0.561110258, 0.570145369, 0.561102152, 0.572427452, 0.561845362, 0.577178061, 0.570698142, 0.578494132, 0.571102142, 0.580145359, 0.571381331, 0.580892146, 0.570145369, 0.579381347, 0.568102181, 0.577178061, 0.567333341, 0.576178074, 0.567845345, 0.576666653, 0.569381356, 0.578102171, 0.570145369, 0.578873336, 0.569616258, 0.57838136, 0.56838131, 0.577178061, 0.567178071, 0.57598114, 0.566666663, 0.575494111, 0.567427456, 0.576259732, 0.568873346, 0.57766664, 0.570145369, 0.579145372, 0.570892155, 0.579860687, 0.570381343, 0.579381347, 0.569145381, 0.578102171, 0.567845345, 0.576666653, 0.567333341, 0.57598114, 0.567845345, 0.576410234, 0.569145381, 0.577845335, 0.570381343, 0.579145372, 0.571102142, 0.579860687, 0.571102142, 0.579860687, 0.570381343, 0.579145372, 0.569145381, 0.577845335, 0.568102181, 0.576666653, 0.567845345, 0.576410234, 0.56838131, 0.576981127, 0.569381356, 0.577845335, 0.570145369, 0.578606784, 0.570145369, 0.578606784, 0.569616258, 0.578102171, 0.568873346, 0.577178061, 0.56838131, 0.576666653, 0.56838131, 0.576666653, 0.568873346, 0.577178061, 0.569616258, 0.577845335, 0.570145369, 0.57838136, 0.570145369, 0.57838136, 0.5698607, 0.578102171, 0.569381356, 0.57766664, 0.568873346, 0.577178061, 0.568873346, 0.577178061, 0.569145381, 0.577427447, 0.5698607, 0.578102171, 0.570381343, 0.578606784, 0.570698142, 0.578873336, 0.570698142, 0.578873336, 0.570381343, 0.578606784, 0.5698607, 0.578102171, 0.569381356, 0.57766664],
        "No, Pain": [0.448494136, 0.40742746, 0.41211021, 0.453221977, 0.504221976, 0.515221953, 0.511873305, 0.50498116, 0.454666674, 0.526892126, 0.532333314, 0.527178049, 0.52069813, 0.535892129, 0.514666677, 0.534134865, 0.504860699, 0.525666654, 0.517427444, 0.525892138, 0.517427444, 0.527427435, 0.518102169, 0.531845331, 0.521845341, 0.533110201, 0.522333324, 0.534666657, 0.522616267, 0.535410225, 0.521625996, 0.534134865, 0.519860685, 0.532333314, 0.51914537, 0.53138131, 0.519616246, 0.531845331, 0.521110237, 0.533333302, 0.521845341, 0.534134865, 0.521381319, 0.533628643, 0.520145357, 0.532333314, 0.518873334, 0.531110227, 0.518381357, 0.530616283, 0.51914537, 0.53138131, 0.520381331, 0.532616258, 0.521625996, 0.533892155, 0.522110224, 0.53438133, 0.521845341, 0.534134865, 0.520616293, 0.532892108, 0.51914537, 0.53138131, 0.518606782, 0.530892134, 0.51914537, 0.53138131, 0.520381331, 0.532616258, 0.521381319, 0.533628643, 0.521845341, 0.534134865, 0.521845341, 0.534134865, 0.521381319, 0.533628643, 0.520381331, 0.532616258, 0.519381344, 0.531625986, 0.51914537, 0.53138131, 0.519616246, 0.531845331, 0.520616293, 0.532892108, 0.521381319, 0.533628643, 0.521625996, 0.533892155, 0.521381319, 0.533628643, 0.520892143, 0.533110201, 0.520145357, 0.532333314, 0.519616246, 0.531845331, 0.519616246, 0.531845331, 0.520145357, 0.532333314, 0.520892143, 0.533110201, 0.521381319, 0.533628643, 0.521381319, 0.533628643, 0.521110237, 0.533333302, 0.520616293, 0.532892108, 0.520145357, 0.532333314, 0.520145357, 0.532333314, 0.520381331, 0.532616258, 0.521110237, 0.533333302, 0.521625996, 0.533892155, 0.521845341, 0.534134865, 0.521845341, 0.534134865, 0.521625996, 0.533892155, 0.521110237, 0.533333302, 0.520616293, 0.532892108],
        "Urgent, Washroom": [0.493892133, 0.447178066, 0.452333331, 0.498606801, 0.551845372, 0.563333333, 0.559616268, 0.552616239, 0.500145376, 0.575494111, 0.581110239, 0.57589215, 0.569145381, 0.58466667, 0.562616289, 0.583110213, 0.552427471, 0.573333323, 0.56549412, 0.573628664, 0.56549412, 0.575666666, 0.566178083, 0.579860687, 0.5698607, 0.581381321, 0.570381343, 0.58289212, 0.570698142, 0.583628654, 0.569616258, 0.582333326, 0.567845345, 0.580616295, 0.567178071, 0.579616249, 0.56766665, 0.580145359, 0.569145381, 0.581625998, 0.5698607, 0.582333326, 0.569381356, 0.581845343, 0.568102181, 0.580616295, 0.566892147, 0.579381347, 0.566410244, 0.578873336, 0.567178071, 0.579616249, 0.568606794, 0.581110239, 0.5698607, 0.58261627, 0.570381343, 0.583110213, 0.5698607, 0.58261627, 0.568873346, 0.581381321, 0.56766665, 0.580145359, 0.567178071, 0.579616249, 0.56766665, 0.580145359, 0.568873346, 0.581381321, 0.5698607, 0.582333326, 0.570381343, 0.58289212, 0.570381343, 0.58289212, 0.5698607, 0.582333326, 0.568873346, 0.581381321, 0.567845345, 0.580381334, 0.56766665, 0.580145359, 0.568102181, 0.580616295, 0.568873346, 0.581381321, 0.569616258, 0.582110226, 0.5698607, 0.582333326, 0.569616258, 0.582110226, 0.569145381, 0.581625998, 0.56838131, 0.580892146, 0.567845345, 0.580381334, 0.567845345, 0.580381334, 0.56838131, 0.580892146, 0.569145381, 0.581625998, 0.569616258, 0.582110226, 0.569616258, 0.582110226, 0.569381356, 0.581845343, 0.568873346, 0.581381321, 0.568606794, 0.581110239, 0.568606794, 0.581110239, 0.568873346, 0.581381321, 0.569381356, 0.581845343, 0.5698607, 0.582333326, 0.570145376, 0.58261627, 0.570145376, 0.58261627, 0.5698607, 0.582333326, 0.569381356, 0.581845343, 0.568873346, 0.581381321],
        "Help, Fall": [0.463410258, 0.419616282, 0.424381316, 0.468102157, 0.51914537, 0.529860675, 0.526666641, 0.519860685, 0.469616264, 0.5413813, 0.546666682, 0.541625977, 0.535410225, 0.550145328, 0.529616296, 0.548606753, 0.519616246, 0.540145338, 0.532333314, 0.540381312, 0.532333314, 0.542333305, 0.533110201, 0.546410263, 0.536666632, 0.547845364, 0.53717804, 0.549381316, 0.537427425, 0.550145328, 0.536410272, 0.548873305, 0.534666657, 0.54717803, 0.533892155, 0.546178043, 0.53438133, 0.546666682, 0.535892129, 0.54810214, 0.536666632, 0.548873305, 0.536178052, 0.548381329, 0.534892142, 0.54717803, 0.533628643, 0.545981169, 0.533110201, 0.545494139, 0.533892155, 0.546178043, 0.535145342, 0.547427416, 0.536410272, 0.548606753, 0.536892116, 0.549145341, 0.536666632, 0.548873305, 0.535666645, 0.547666669, 0.53438133, 0.546178043, 0.533892155, 0.545666635, 0.53438133, 0.546178043, 0.535666645, 0.547427416, 0.536666632, 0.548381329, 0.53717804, 0.548873305, 0.53717804, 0.548873305, 0.536666632, 0.548381329, 0.535666645, 0.547427416, 0.534666657, 0.546410263, 0.53438133, 0.546178043, 0.534892142, 0.546666682, 0.535666645, 0.547427416, 0.536410272, 0.54810214, 0.536666632, 0.548381329, 0.536410272, 0.54810214, 0.535892129, 0.547666669, 0.535145342, 0.546892107, 0.534666657, 0.546410263, 0.534666657, 0.546410263, 0.535145342, 0.546892107, 0.535892129, 0.547666669, 0.536410272, 0.54810214, 0.536410272, 0.54810214, 0.536178052, 0.547845364, 0.535666645, 0.547427416, 0.535410225, 0.54717803, 0.535410225, 0.54717803, 0.535666645, 0.547427416, 0.536178052, 0.547845364, 0.536666632, 0.548381329, 0.536892116, 0.548606753, 0.536892116, 0.548606753, 0.536666632, 0.548381329, 0.536178052, 0.547845364, 0.535666645, 0.547427416],
        "cold,blanket": [0.455981165, 0.413740247, 0.418381333, 0.460698128, 0.5116781, 0.522616267, 0.519381344, 0.512381315, 0.462110221, 0.534134865, 0.539381325, 0.53438133, 0.528381348, 0.542892158, 0.522333324, 0.5413813, 0.512110233, 0.532892108, 0.525145352, 0.533110201, 0.525145352, 0.535145342, 0.525892138, 0.53914535, 0.529381335, 0.540616274, 0.529860675, 0.542110205, 0.530145347, 0.542892158, 0.52914536, 0.541625977, 0.527427435, 0.539860725, 0.526666641, 0.538873315, 0.52717804, 0.539381325, 0.528606772, 0.540892124, 0.529381335, 0.541625977, 0.528873324, 0.541110218, 0.527666628, 0.539860725, 0.526410282, 0.538606763, 0.525892138, 0.53810215, 0.526666641, 0.538873315, 0.527892113, 0.540145338, 0.52914536, 0.5413813, 0.529616237, 0.541845322, 0.529381335, 0.541625977, 0.528381348, 0.540381312, 0.52717804, 0.539381325, 0.526666641, 0.538873315, 0.52717804, 0.539381325, 0.528381348, 0.540381312, 0.529381335, 0.5413813, 0.529860675, 0.541845322, 0.529860675, 0.541845322, 0.529381335, 0.5413813, 0.528381348, 0.540381312, 0.527427435, 0.539616287, 0.52717804, 0.539381325, 0.527666628, 0.539860725, 0.528381348, 0.540381312, 0.52914536, 0.541110218, 0.529381335, 0.5413813, 0.52914536, 0.541110218, 0.528606772, 0.540616274, 0.527892113, 0.539860725, 0.527427435, 0.539381325, 0.527427435, 0.539381325, 0.527892113, 0.539860725, 0.528606772, 0.540616274, 0.52914536, 0.541110218, 0.52914536, 0.541110218, 0.528873324, 0.540892124, 0.528381348, 0.540381312, 0.52810216, 0.540145338, 0.52810216, 0.540145338, 0.528381348, 0.540381312, 0.528873324, 0.540892124, 0.529381335, 0.5413813, 0.529616237, 0.541625977, 0.529616237, 0.541625977, 0.529381335, 0.5413813, 0.528873324, 0.540892124, 0.528381348, 0.540381312],
        "hungry, food": [0.490333319, 0.443740249, 0.448873341, 0.495221972, 0.548494101, 0.559860647, 0.556259751, 0.549266636, 0.49658972, 0.572110236, 0.577845335, 0.572333336, 0.56549412, 0.581381321, 0.559266686, 0.579616249, 0.549145341, 0.5698607, 0.561110258, 0.570145369, 0.561102152, 0.572427452, 0.561845362, 0.577178061, 0.570698142, 0.578494132, 0.571102142, 0.580145359, 0.571381331, 0.580892146, 0.570145369, 0.579381347, 0.568102181, 0.577178061, 0.567333341, 0.576178074, 0.567845345, 0.576666653, 0.569381356, 0.578102171, 0.570145369, 0.578873336, 0.569616258, 0.57838136, 0.56838131, 0.577178061, 0.567178071, 0.57598114, 0.566666663, 0.575494111, 0.567427456, 0.576259732, 
        "tired, rest": [0.5, 0.6, 0.7, 0.51, 0.62, 0.73, 0.52, 0.64, 0.76, 0.53, 0.66, 0.79, 0.54, 0.68, 0.82, 0.55, 0.7, 0.85, 0.56, 0.72, 0.88, 0.57, 0.74, 0.91, 0.58, 0.76, 0.94, 0.59, 0.78, 0.97, 0.6, 0.8, 1.0, 0.61, 0.82, 1.03, 0.62, 0.84, 1.06, 0.63, 0.86, 1.09, 0.64, 0.88, 1.12, 0.65, 0.9, 1.15, 0.66, 0.92, 1.18, 0.67, 0.94, 1.21, 0.68, 0.96, 1.24, 0.69, 0.98, 1.27, 0.7, 1.0, 1.3, 0.71, 1.02, 1.33, 0.72, 1.04, 1.36, 0.73, 1.06, 1.39, 0.74, 1.08, 1.42, 0.75, 1.1, 1.45, 0.76, 1.12, 1.48, 0.77, 1.14, 1.51, 0.78, 1.16, 1.54, 0.79, 1.18, 1.57, 0.8, 1.2, 1.6, 0.81, 1.22, 1.63, 0.82, 1.24, 1.66, 0.83, 1.26, 1.69, 0.84, 1.28, 1.72, 0.85, 1.3, 1.75, 0.86, 1.32, 1.78, 0.87, 1.34, 1.81, 0.88, 1.36, 1.84, 0.89, 1.38, 1.87, 0.9, 1.4, 1.9]
    };

    // 2. GenAI Sentence Cache
    const genaiSentenceCache = {
        "thirsty, water": [
            "I'm feeling very thirsty, could I please get some water?",
            "Could you please give me a glass of water?",
            "My throat is getting dry, I think I need some water."
        ],
        "yes, pain": [
            "Yes, it's hurting a little bit.",
            "I am feeling some pain, yes.",
            "Yes, there is definitely some discomfort."
        ],
        "no, pain": [
            "No, I'm not feeling any pain right now, thank you.",
            "I'm feeling alright, there's no pain.",
            "No, it's not hurting."
        ],
        "urgent, washroom": [
            "I really need to use the washroom, it's quite urgent.",
            "Could you please help me to the toilet? It's an emergency.",
            "I need to go to the washroom right now, please."
        ],
        "help, fall": [
            "Help, please! I've fallen down and I can't seem to get up.",
            "I need help, I've had a fall.",
            "Please, I need assistance. I have fallen."
        ],
        "cold,blanket": [
            "I'm feeling a bit cold, could I please get a blanket?",
            "Could you cover me with a blanket? I'm starting to feel a chill.",
            "A blanket would be nice, I'm feeling cold."
        ],
        "hungry, food": [
            "I'm starting to feel hungry, is it time to eat soon?",
            "Could I please have some food? I'm feeling quite hungry.",
            "I think I'm ready for my meal now."
        ],
        "tired, rest": [
            "I feel very tired, I think I need to rest for a bit.",
            "I'm feeling quite exhausted, could I lie down and rest?",
            "I think it's time for me to take a nap."
        ]
    };

    // --- DOM Element References ---
    const intentSelect = document.getElementById('intent-select');
    const generateForm = document.getElementById('generate-form');
    const featuresDisplay = document.getElementById('features-display');
    const featuresDisplayBox = featuresDisplay.querySelector('.features-display-box');
    const eegInputBox = document.getElementById('eeg-input-box');
    const decodeButton = document.getElementById('decode-button');
    const resultsContainer = document.getElementById('results-container');
    const loader1 = document.getElementById('loader1');
    const loader2 = document.getElementById('loader2');

    // --- State Variable ---
    let currentDecodedIntent = null;

    // --- Functions ---

    // Populate dropdown from data
    function populateDropdown() {
        const intents = Object.keys(eegData);
        intents.forEach(intent => {
            const option = document.createElement('option');
            option.value = intent;
            option.textContent = intent;
            intentSelect.appendChild(option);
        });
    }

    // Text-to-Speech using Web Speech API
    function textToSpeech(text) {
        // Cancel any previous speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        
        const voices = window.speechSynthesis.getVoices();
        // Try to find a female voice, which can often sound more natural
        let femaleVoice = voices.find(v => v.name.includes('Female') || v.gender === 'female');
        utterance.voice = femaleVoice || voices[0]; // Fallback to the first voice

        utterance.rate = 0.9; // Slightly slower for clarity
        utterance.pitch = 1;
        
        window.speechSynthesis.speak(utterance);
    }

    // --- Event Listeners ---

    // 1. Generate EEG Signals
    generateForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedIntent = intentSelect.value;
        if (!selectedIntent) {
            alert("Please choose an intent from the dropdown.");
            return;
        }

        loader1.style.display = 'block';
        featuresDisplay.style.display = 'none';
        eegInputBox.value = '';
        decodeButton.disabled = true;
        resultsContainer.innerHTML = '';
        currentDecodedIntent = null; // Reset state

        // Simulate a short delay for effect
        setTimeout(() => {
            loader1.style.display = 'none';
            
            const features = eegData[selectedIntent];
            const featuresString = JSON.stringify(features.map(f => f.toFixed(3))); // Format for display
            
            featuresDisplay.style.display = 'block';
            featuresDisplayBox.textContent = featuresString;
            eegInputBox.value = featuresString;
            
            // Simulate the "decoding" by storing the known intent
            currentDecodedIntent = selectedIntent;
            
            decodeButton.disabled = false;
        }, 500); // 0.5 second delay
    });

    // 2. Decode Intent and Generate Speech
    decodeButton.addEventListener('click', function() {
        if (!currentDecodedIntent) {
            alert("Please generate EEG signals first.");
            return;
        }

        loader2.style.display = 'block';
        resultsContainer.innerHTML = '';
        decodeButton.disabled = true;

        // Simulate processing delay
        setTimeout(() => {
            loader2.style.display = 'none';
            decodeButton.disabled = false;

            const lookupKey = currentDecodedIntent.toLowerCase();
            const sentences = genaiSentenceCache[lookupKey];
            const generatedSentence = sentences[Math.floor(Math.random() * sentences.length)];

            let resultsHTML = `
                <div class="result-box">
                    <p><strong>✅ Decoded Intent:</strong> ${currentDecodedIntent}</p>
                </div>
                <div class="result-box">
                    <p><strong>🗣️ Generated Sentence:</strong> ${generatedSentence}</p>
                </div>
                <div class="result-box">
                    <p><strong>🔊 Audio Output:</strong></p>
                    <p><em>(Speech will play automatically)</em></p>
                </div>
            `;
            resultsContainer.innerHTML = resultsHTML;
            textToSpeech(generatedSentence);

        }, 500); // 0.5 second delay
    });

    // --- Initial Setup ---
    populateDropdown();
    // The Web Speech API needs a moment to load voices on some browsers.
    // This helps ensure voices are available when textToSpeech is called.
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => {};
    }
});
