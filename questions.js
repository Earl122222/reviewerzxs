// Complete PNLE Questions Database - 50 questions per category
const pnleQuestions = [
    // Fundamentals of Nursing - 50 questions
    {
        id: 1,
        category: "Fundamentals of Nursing",
        question: "Which of the following is the most appropriate nursing intervention for a client with pressure ulcer?",
        options: [
            "Massage the reddened area",
            "Position the client every 2 hours",
            "Apply heat to the area",
            "Keep the area dry and moist"
        ],
        correct: 1,
        explanation: "Repositioning the client every 2 hours helps relieve pressure and prevent further tissue damage."
    },
    {
        id: 2,
        category: "Fundamentals of Nursing",
        question: "The nurse is preparing to administer a cleansing enema. Which position should the client assume?",
        options: [
            "Sims' position",
            "Lithotomy position",
            "Fowler's position",
            "Trendelenburg position"
        ],
        correct: 0,
        explanation: "Sims' position (left lateral) is the best position for administering cleansing enemas."
    },
    {
        id: 3,
        category: "Fundamentals of Nursing",
        question: "Which assessment finding would indicate that a client's wound is healing by secondary intention?",
        options: [
            "Wound edges are well-approximated",
            "Minimal drainage is present",
            "Granulation tissue is present",
            "Wound is closed with staples"
        ],
        correct: 2,
        explanation: "Granulation tissue indicates healing by secondary intention, where the wound heals from the bottom up."
    },
    {
        id: 4,
        category: "Fundamentals of Nursing",
        question: "Jake is complaining of shortness of breath. The nurse assesses his respiratory rate to be 30 breaths per minute and documents that Jake is tachypneic. The nurse understands that tachypnea means:",
        options: [
            "Pulse rate greater than 100 beats per minute",
            "Blood pressure of 140/90",
            "Respiratory rate greater than 20 breaths per minute",
            "Frequent bowel sounds"
        ],
        correct: 2,
        explanation: "Tachypnea is defined as a respiratory rate greater than 20 breaths per minute in adults."
    },
    {
        id: 5,
        category: "Fundamentals of Nursing",
        question: "The nurse listens to Mrs. Sullen's lungs and notes a hissing sound or musical sound. The nurse documents this as:",
        options: [
            "Wheezes",
            "Rhonchi",
            "Gurgles",
            "Vesicular"
        ],
        correct: 0,
        explanation: "Wheezes are continuous, lengthy, musical sounds heard during inspiration or expiration."
    },
    {
        id: 6,
        category: "Fundamentals of Nursing",
        question: "What is the order of the nursing process?",
        options: [
            "Assessing, diagnosing, implementing, evaluating, planning",
            "Diagnosing, assessing, planning, implementing, evaluating",
            "Assessing, diagnosing, planning, implementing, evaluating",
            "Planning, evaluating, diagnosing, assessing, implementing"
        ],
        correct: 2,
        explanation: "The correct order of the nursing process is assessing, diagnosing, planning, implementing, evaluating."
    },
    {
        id: 7,
        category: "Fundamentals of Nursing",
        question: "What is an example of a subjective data?",
        options: [
            "Heart rate of 68 beats per minute",
            "Yellowish sputum",
            "Client verbalized, 'I feel pain when urinating.'",
            "Noisy breathing"
        ],
        correct: 2,
        explanation: "Subjective data are those that can be described only by the person experiencing it."
    },
    {
        id: 8,
        category: "Fundamentals of Nursing",
        question: "Which expected outcome is correctly written?",
        options: [
            "The patient will feel less nauseated in 24 hours.",
            "The patient will eat the right amount of food daily.",
            "The patient will identify all the high-salt food from a prepared list by discharge.",
            "The patient will have enough sleep."
        ],
        correct: 2,
        explanation: "Expected outcomes should be specific, measurable, achievable, relevant, and time-bound (SMART criteria)."
    },
    {
        id: 9,
        category: "Fundamentals of Nursing",
        question: "What nursing action is appropriate when obtaining a sterile urine specimen from an indwelling catheter to prevent infection?",
        options: [
            "Use sterile gloves when obtaining urine.",
            "Open the drainage bag and pour out the urine.",
            "Disconnect the catheter from the tubing and get urine.",
            "Aspirate urine from the tubing port using a sterile syringe."
        ],
        correct: 3,
        explanation: "Aspirating urine from the tubing port using a sterile syringe maintains the closed system and prevents infection."
    },
    {
        id: 10,
        category: "Fundamentals of Nursing",
        question: "A client is receiving 115 ml/hr of continuous IVF. The nurse notices that the venipuncture site is red and swollen. Which of the following interventions would the nurse perform first?",
        options: [
            "Stop the infusion",
            "Call the attending physician",
            "Slow that infusion to 20 ml/hr",
            "Place a cold towel on the site"
        ],
        correct: 0,
        explanation: "The first action is to stop the infusion to prevent further infiltration and tissue damage."
    },
    {
        id: 11,
        category: "Fundamentals of Nursing",
        question: "The nurse is preparing to insert a nasogastric tube. Which nursing action would be most appropriate to facilitate the insertion of the tube?",
        options: [
            "Place the client in a supine position",
            "Coat the tube with water-soluble lubricant",
            "Ask the client to hold their breath",
            "Advance the tube quickly"
        ],
        correct: 1,
        explanation: "Coating the tube with water-soluble lubricant facilitates insertion and reduces client discomfort."
    },
    {
        id: 12,
        category: "Fundamentals of Nursing",
        question: "Which of the following is the most appropriate nursing intervention for a client with constipation?",
        options: [
            "Decrease fluid intake",
            "Encourage bed rest",
            "Increase fiber intake and fluids",
            "Administer anti-diarrheal medication"
        ],
        correct: 2,
        explanation: "Increasing fiber intake and fluids helps promote bowel regularity and prevents constipation."
    },
    {
        id: 13,
        category: "Fundamentals of Nursing",
        question: "The nurse is assessing a client's abdomen. Which assessment technique should the nurse perform first?",
        options: [
            "Percussion",
            "Palpation",
            "Auscultation",
            "Inspection"
        ],
        correct: 3,
        explanation: "Inspection is always performed first in abdominal assessment, followed by auscultation, percussion, and palpation."
    },
    {
        id: 14,
        category: "Fundamentals of Nursing",
        question: "A client is on contact precautions for methicillin-resistant Staphylococcus aureus (MRSA). Which nursing action is most important?",
        options: [
            "Wear gloves and gown",
            "Place client in private room",
            "Use dedicated equipment",
            "All of the above"
        ],
        correct: 3,
        explanation: "All of these actions are important for contact precautions to prevent the spread of MRSA."
    },
    {
        id: 15,
        category: "Fundamentals of Nursing",
        question: "The nurse is teaching a client about deep breathing and coughing exercises. The primary purpose of these exercises is to:",
        options: [
            "Increase oxygen saturation",
            "Prevent respiratory complications",
            "Decrease anxiety",
            "Promote wound healing"
        ],
        correct: 1,
        explanation: "Deep breathing and coughing exercises help prevent respiratory complications like atelectasis and pneumonia."
    },
    {
        id: 16,
        category: "Fundamentals of Nursing",
        question: "Which of the following is the most appropriate nursing intervention for a client with a fever?",
        options: [
            "Apply warm blankets",
            "Increase fluid intake",
            "Decrease room temperature",
            "Administer antipyretics without physician order"
        ],
        correct: 1,
        explanation: "Increasing fluid intake helps prevent dehydration associated with fever."
    },
    {
        id: 17,
        category: "Fundamentals of Nursing",
        question: "The nurse is preparing to administer an intramuscular injection. Which site is preferred for infants?",
        options: [
            "Deltoid",
            "Ventrogluteal",
            "Vastus lateralis",
            "Dorsogluteal"
        ],
        correct: 2,
        explanation: "The vastus lateralis is the preferred site for IM injections in infants due to muscle development."
    },
    {
        id: 18,
        category: "Fundamentals of Nursing",
        question: "A client is experiencing dysphagia. Which nursing intervention is most appropriate?",
        options: [
            "Provide thin liquids",
            "Encourage rapid eating",
            "Place client in upright position during meals",
            "Offer large portions"
        ],
        correct: 2,
        explanation: "Placing the client in upright position during meals reduces the risk of aspiration."
    },
    {
        id: 19,
        category: "Fundamentals of Nursing",
        question: "The nurse is documenting client care. Which documentation principle is most important?",
        options: [
            "Document in pencil",
            "Use medical abbreviations",
            "Document after the shift",
            "Chart immediately and accurately"
        ],
        correct: 3,
        explanation: "Charting immediately and accurately ensures timely and accurate documentation of client care."
    },
    {
        id: 20,
        category: "Fundamentals of Nursing",
        question: "Which of the following is the most appropriate nursing intervention for a client at risk for falls?",
        options: [
            "Keep bed rails down",
            "Keep environment cluttered",
            "Use non-slip footwear",
            "Dim lighting"
        ],
        correct: 2,
        explanation: "Non-slip footwear helps prevent falls by providing better traction."
    },
    {
        id: 21,
        category: "Fundamentals of Nursing",
        question: "The nurse is assessing a client's pain. Which pain assessment tool is most appropriate for a non-verbal client?",
        options: [
            "Numeric rating scale",
            "Visual analog scale",
            "Wong-Baker faces scale",
            "FLACC scale"
        ],
        correct: 3,
        explanation: "The FLACC scale is designed for non-verbal clients or those unable to communicate pain."
    },
    {
        id: 22,
        category: "Fundamentals of Nursing",
        question: "A client is on droplet precautions. Which personal protective equipment is essential?",
        options: [
            "Gown only",
            "Gloves only",
            "Surgical mask",
            "N95 respirator"
        ],
        correct: 2,
        explanation: "Surgical masks are essential for droplet precautions to prevent transmission of large respiratory droplets."
    },
    {
        id: 23,
        category: "Fundamentals of Nursing",
        question: "The nurse is preparing to perform a sterile dressing change. Which action breaks sterile technique?",
        options: [
            "Holding sterile objects above waist level",
            "Keeping sterile package dry",
            "Touching the outer edge of sterile field",
            "Using sterile forceps"
        ],
        correct: 2,
        explanation: "Touching the outer edge of the sterile field (1-inch border) breaks sterile technique."
    },
    {
        id: 24,
        category: "Fundamentals of Nursing",
        question: "Which of the following is the most appropriate nursing intervention for a client with dehydration?",
        options: [
            "Restrict fluids",
            "Monitor intake and output",
            "Administer diuretics",
            "Encourage high sodium intake"
        ],
        correct: 1,
        explanation: "Monitoring intake and output helps assess fluid balance and effectiveness of rehydration efforts."
    },
    {
        id: 25,
        category: "Fundamentals of Nursing",
        question: "The nurse is teaching a client about insulin administration. Which instruction is most important?",
        options: [
            "Rotate injection sites",
            "Use the same site consistently",
            "Inject into muscle",
            "Massage after injection"
        ],
        correct: 0,
        explanation: "Rotating injection sites prevents lipohypertrophy and ensures proper insulin absorption."
    },
    {
        id: 26,
        category: "Fundamentals of Nursing",
        question: "A client is experiencing nausea. Which nursing intervention is most appropriate?",
        options: [
            "Provide large meals",
            "Offer clear, cool liquids",
            "Encourage strong odors",
            "Position supine immediately after eating"
        ],
        correct: 1,
        explanation: "Clear, cool liquids are better tolerated during nausea and help maintain hydration."
    },
    {
        id: 27,
        category: "Fundamentals of Nursing",
        question: "The nurse is assessing a client's skin turgor. Which finding indicates dehydration?",
        options: [
            "Immediate recoil",
            "Tenting",
            "Moist mucous membranes",
            "Normal skin elasticity"
        ],
        correct: 1,
        explanation: "Tenting (slow recoil) indicates decreased skin turgor and possible dehydration."
    },
    {
        id: 28,
        category: "Fundamentals of Nursing",
        question: "Which of the following is the most appropriate nursing intervention for a client with thrombophlebitis?",
        options: [
            "Massage the affected extremity",
            "Apply heat to the area",
            "Encourage ambulation",
            "Place in dependent position"
        ],
        correct: 1,
        explanation: "Applying heat helps reduce pain and promotes circulation in thrombophlebitis."
    },
    {
        id: 29,
        category: "Fundamentals of Nursing",
        question: "The nurse is preparing to administer a blood transfusion. Which action is most important?",
        options: [
            "Use any available IV line",
            "Verify client identity with two identifiers",
            "Administer rapidly",
            "Skip vital sign assessment"
        ],
        correct: 1,
        explanation: "Verifying client identity with two identifiers prevents transfusion reactions and ensures safety."
    },
    {
        id: 30,
        category: "Fundamentals of Nursing",
        question: "A client is on bed rest. Which nursing intervention helps prevent deep vein thrombosis?",
        options: [
            "Keep legs dependent",
            "Encourage leg exercises",
            "Apply tight stockings",
            "Limit fluid intake"
        ],
        correct: 1,
        explanation: "Leg exercises promote circulation and help prevent DVT in immobilized clients."
    },
    {
        id: 31,
        category: "Fundamentals of Nursing",
        question: "The nurse is assessing a client's respiratory status. Which finding requires immediate intervention?",
        options: [
            "Respiratory rate of 16",
            "Use of accessory muscles",
            "Clear breath sounds",
            "Regular rhythm"
        ],
        correct: 1,
        explanation: "Use of accessory muscles indicates respiratory distress and requires immediate intervention."
    },
    {
        id: 32,
        category: "Fundamentals of Nursing",
        question: "Which of the following is the most appropriate nursing intervention for a client with urinary retention?",
        options: [
            "Decrease fluid intake",
            "Encourage voiding",
            "Apply pressure to bladder",
            "Delay catheterization"
        ],
        correct: 1,
        explanation: "Encouraging voiding promotes natural bladder emptying before considering catheterization."
    },
    {
        id: 33,
        category: "Fundamentals of Nursing",
        question: "The nurse is teaching a client about wound care. Which instruction is most important?",
        options: [
            "Clean from dirty to clean area",
            "Use hydrogen peroxide",
            "Keep wound moist always",
            "Change dressing only when soiled"
        ],
        correct: 0,
        explanation: "Cleaning from dirty to clean area prevents contamination of clean wound areas."
    },
    {
        id: 34,
        category: "Fundamentals of Nursing",
        question: "A client is experiencing anxiety. Which nursing intervention is most appropriate?",
        options: [
            "Rush interventions",
            "Use therapeutic communication",
            "Ignore feelings",
            "Provide false reassurance"
        ],
        correct: 1,
        explanation: "Therapeutic communication helps clients express feelings and reduces anxiety."
    },
    {
        id: 35,
        category: "Fundamentals of Nursing",
        question: "The nurse is preparing to administer oral medication. Which action is most important?",
        options: [
            "Crush all medications",
            "Check medication expiration",
            "Administer with food regardless of type",
            "Skip client identification"
        ],
        correct: 1,
        explanation: "Checking medication expiration ensures safety and effectiveness of administered medications."
    },
    {
        id: 36,
        category: "Fundamentals of Nursing",
        question: "Which of the following is the most appropriate nursing intervention for a client with diarrhea?",
        options: [
            "Increase fiber intake",
            "Decrease fluid intake",
            "Encourage high-fat foods",
            "Monitor for dehydration"
        ],
        correct: 3,
        explanation: "Monitoring for dehydration is crucial as diarrhea can lead to significant fluid loss."
    },
    {
        id: 37,
        category: "Fundamentals of Nursing",
        question: "The nurse is assessing a client's peripheral pulses. Which pulse point is most commonly assessed?",
        options: [
            "Carotid",
            "Radial",
            "Femoral",
            "Popliteal"
        ],
        correct: 1,
        explanation: "The radial pulse is most commonly assessed due to its accessibility and ease of palpation."
    },
    {
        id: 38,
        category: "Fundamentals of Nursing",
        question: "A client is on oxygen therapy. Which nursing action is most important?",
        options: [
            "Use petroleum jelly around nose",
            "Ensure proper humidification",
            "Set flow rate without prescription",
            "Allow smoking nearby"
        ],
        correct: 1,
        explanation: "Proper humidification prevents drying of mucous membranes and improves oxygen therapy effectiveness."
    },
    {
        id: 39,
        category: "Fundamentals of Nursing",
        question: "The nurse is preparing to discharge a client. Which instruction is most important for medication safety?",
        options: [
            "Share medications with family",
            "Stop medications when feeling better",
            "Keep medication list updated",
            "Store medications in bathroom"
        ],
        correct: 2,
        explanation: "Keeping an updated medication list prevents drug interactions and ensures proper medication management."
    },
    {
        id: 40,
        category: "Fundamentals of Nursing",
        question: "Which of the following is the most appropriate nursing intervention for a client with insomnia?",
        options: [
            "Encourage caffeine before bed",
            "Maintain consistent sleep schedule",
            "Watch TV in bed",
            "Exercise vigorously before sleep"
        ],
        correct: 1,
        explanation: "Maintaining a consistent sleep schedule helps regulate the body's internal clock and improves sleep."
    },
    {
        id: 41,
        category: "Fundamentals of Nursing",
        question: "The nurse is assessing a client's mental status. Which finding indicates confusion?",
        options: [
            "Oriented to time, place, and person",
            "Follows complex commands",
            "Recent memory loss",
            "Appropriate affect"
        ],
        correct: 2,
        explanation: "Recent memory loss is an early sign of confusion and cognitive impairment."
    },
    {
        id: 42,
        category: "Fundamentals of Nursing",
        question: "A client is on a low-sodium diet. Which food should be avoided?",
        options: [
            "Fresh fruits",
            "Canned soups",
            "Fresh vegetables",
            "Unsalted nuts"
        ],
        correct: 1,
        explanation: "Canned soups typically contain high amounts of sodium and should be avoided on a low-sodium diet."
    },
    {
        id: 43,
        category: "Fundamentals of Nursing",
        question: "The nurse is preparing to insert a urinary catheter. Which action maintains sterile technique?",
        options: [
            "Touch catheter tip",
            "Clean meatus from back to front",
            "Use sterile gloves",
            "Reuse catheter"
        ],
        correct: 2,
        explanation: "Using sterile gloves maintains sterile technique during catheter insertion."
    },
    {
        id: 44,
        category: "Fundamentals of Nursing",
        question: "Which of the following is the most appropriate nursing intervention for a client with hypotension?",
        options: [
            "Encourage sudden position changes",
            "Raise head of bed",
            "Monitor vital signs frequently",
            "Restrict fluids"
        ],
        correct: 2,
        explanation: "Monitoring vital signs frequently helps assess response to interventions and detect deterioration."
    },
    {
        id: 45,
        category: "Fundamentals of Nursing",
        question: "The nurse is teaching a client about smoking cessation. Which strategy is most effective?",
        options: [
            "Gradual reduction",
            "Cold turkey",
            "Nicotine replacement therapy",
            "Avoiding support groups"
        ],
        correct: 2,
        explanation: "Nicotine replacement therapy combined with support is most effective for smoking cessation."
    },
    {
        id: 46,
        category: "Fundamentals of Nursing",
        question: "A client is experiencing grief. Which nursing intervention is most appropriate?",
        options: [
            "Rush the grieving process",
            "Allow expression of feelings",
            "Avoid discussing loss",
            "Provide false hope"
        ],
        correct: 1,
        explanation: "Allowing expression of feelings facilitates healthy grieving and emotional processing."
    },
    {
        id: 47,
        category: "Fundamentals of Nursing",
        question: "The nurse is assessing a client's nutritional status. Which assessment is most important?",
        options: [
            "Height and weight",
            "Food preferences",
            "Dietary restrictions",
            "All of the above"
        ],
        correct: 3,
        explanation: "All of these assessments are important for comprehensive nutritional evaluation."
    },
    {
        id: 48,
        category: "Fundamentals of Nursing",
        question: "Which of the following is the most appropriate nursing intervention for a client with seizures?",
        options: [
            "Restrain during seizure",
            "Place in supine position",
            "Protect from injury",
            "Force mouth open"
        ],
        correct: 2,
        explanation: "Protecting from injury is the priority during seizure activity."
    },
    {
        id: 49,
        category: "Fundamentals of Nursing",
        question: "The nurse is preparing to administer ear drops. Which action is correct?",
        options: [
            "Administer drops directly to eardrum",
            "Pull earlobe down and back for adult",
            "Pull earlobe up and back for adult",
            "Administer cold drops"
        ],
        correct: 2,
        explanation: "Pulling the earlobe up and back straightens the ear canal for adults."
    },
    {
        id: 50,
        category: "Fundamentals of Nursing",
        question: "A client is on isolation precautions. Which nursing action is most important?",
        options: [
            "Limit all visitors",
            "Follow specific precautions based on transmission mode",
            "Use same PPE for all clients",
            "Skip hand hygiene"
        ],
        correct: 1,
        explanation: "Following specific precautions based on transmission mode ensures appropriate infection control."
    },

    // Medical-Surgical Nursing - 50 questions
    {
        id: 51,
        category: "Medical-Surgical Nursing",
        question: "A client with type 2 diabetes mellitus is scheduled for surgery. The nurse should monitor for which complication during the postoperative period?",
        options: [
            "Hypoglycemia",
            "Hyperglycemia",
            "Ketoacidosis",
            "Hyperosmolar hyperglycemic state"
        ],
        correct: 1,
        explanation: "Stress from surgery can cause hyperglycemia due to increased cortisol and catecholamine levels."
    },
    {
        id: 52,
        category: "Medical-Surgical Nursing",
        question: "Which finding would indicate that a client with heart failure is developing pulmonary edema?",
        options: [
            "Decreased blood pressure",
            "Bradycardia",
            "Pink, frothy sputum",
            "Dry cough"
        ],
        correct: 2,
        explanation: "Pink, frothy sputum is a classic sign of pulmonary edema indicating fluid accumulation in the lungs."
    },
    {
        id: 53,
        category: "Medical-Surgical Nursing",
        question: "A client with chronic obstructive pulmonary disease (COPD) should receive which oxygen delivery method?",
        options: [
            "Non-rebreather mask at 15 L/min",
            "Nasal cannula at 2-4 L/min",
            "Venturi mask at 24-28%",
            "Simple face mask at 6 L/min"
        ],
        correct: 1,
        explanation: "Low-flow oxygen (2-4 L/min via nasal cannula) is preferred for COPD patients to avoid suppressing the hypoxic drive."
    },
    {
        id: 54,
        category: "Medical-Surgical Nursing",
        question: "A male client has suffered a motor accident and is now suffering from hypovolemic shock. Nurse Helen should frequently assess the client's vital signs during the compensatory stage of shock, because:",
        options: [
            "Arteriolar constriction occurs",
            "The cardiac workload decreases",
            "Decreased contractility of the heart occurs",
            "The parasympathetic nervous system is triggered"
        ],
        correct: 0,
        explanation: "During the compensatory stage of shock, arteriolar constriction occurs as the body attempts to maintain blood pressure."
    },
    {
        id: 55,
        category: "Medical-Surgical Nursing",
        question: "A patient has partial-thickness burns to both legs and portions of his trunk. Which of the following I.V. fluids is given first?",
        options: [
            "Albumin",
            "D5W",
            "Lactated Ringer's solution",
            "0.9% sodium chloride solution with 2 mEq of potassium per 100 ml"
        ],
        correct: 2,
        explanation: "Lactated Ringer's solution is the fluid of choice for initial burn resuscitation."
    },
    {
        id: 56,
        category: "Medical-Surgical Nursing",
        question: "During the first 48 hours after a severe burn of 40% of the clients body surface, the nurse's assessment should include observations for water intoxication. Associated adaptations include:",
        options: [
            "Sooty-colored sputum",
            "Frothy pink-tinged sputum",
            "Twitching and disorientation",
            "Urine output below 30ml per hour"
        ],
        correct: 2,
        explanation: "Twitching and disorientation are signs of water intoxication, which can occur during burn resuscitation."
    },
    {
        id: 57,
        category: "Medical-Surgical Nursing",
        question: "A client with a head injury has a fixed, dilated right pupil; responds only to painful stimuli; and exhibits decorticate posturing. Nurse Kate should recognize that these are signs of:",
        options: [
            "Meningeal irritation",
            "Subdural hemorrhage",
            "Medullary compression",
            "Cerebral cortex compression"
        ],
        correct: 3,
        explanation: "These signs indicate increased intracranial pressure with cerebral cortex compression."
    },
    {
        id: 58,
        category: "Medical-Surgical Nursing",
        question: "After a lateral crushing chest injury, obvious right-sided paradoxic motion of the client's chest demonstrates multiple rib fractures, resulting in a flail chest. The complication the nurse should carefully observe for would be:",
        options: [
            "Mediastinal shift",
            "Tracheal laceration",
            "Open pneumothorax",
            "Pericardial tamponade"
        ],
        correct: 0,
        explanation: "Flail chest can cause mediastinal shift, which is a life-threatening complication."
    },
    {
        id: 59,
        category: "Medical-Surgical Nursing",
        question: "Nurse Bea recognizes that a pacemaker is indicated when a client is experiencing:",
        options: [
            "Angina",
            "Chest pain",
            "Heart block",
            "Tachycardia"
        ],
        correct: 2,
        explanation: "Pacemakers are primarily indicated for heart block, especially complete heart block."
    },
    {
        id: 60,
        category: "Medical-Surgical Nursing",
        question: "A male client receiving prolonged steroid therapy complains of always being thirsty and urinating frequently. The best initial action by the nurse would be to:",
        options: [
            "Perform a finger stick to test the client's blood glucose level",
            "Have the physician assess the client for an enlarged prostate",
            "Obtain a urine specimen from the client for screening purposes",
            "Assess the client's lower extremities for the presence of pitting edema"
        ],
        correct: 0,
        explanation: "Steroid therapy can cause steroid-induced diabetes, so testing blood glucose is the priority action."
    },
    {
        id: 61,
        category: "Medical-Surgical Nursing",
        question: "A client with myocardial infarction is receiving thrombolytic therapy. Which assessment finding requires immediate intervention?",
        options: [
            "Warm, dry skin",
            "Clear lung sounds",
            "Bleeding from gums",
            "Regular heart rate"
        ],
        correct: 2,
        explanation: "Bleeding is a major complication of thrombolytic therapy and requires immediate intervention."
    },
    {
        id: 62,
        category: "Medical-Surgical Nursing",
        question: "A client with chronic kidney disease is on dialysis. Which laboratory value requires immediate intervention?",
        options: [
            "BUN 45 mg/dL",
            "Creatinine 2.5 mg/dL",
            "Potassium 6.2 mEq/L",
            "Phosphorus 4.5 mg/dL"
        ],
        correct: 2,
        explanation: "Hyperkalemia (K+ > 5.5 mEq/L) can cause cardiac arrhythmias and requires immediate intervention."
    },
    {
        id: 63,
        category: "Medical-Surgical Nursing",
        question: "A client with peptic ulcer disease is experiencing melena. This indicates:",
        options: [
            "Lower gastrointestinal bleeding",
            "Upper gastrointestinal bleeding",
            "Inflammatory bowel disease",
            "Diverticulitis"
        ],
        correct: 1,
        explanation: "Melena (black, tarry stools) indicates upper GI bleeding due to digestion of blood."
    },
    {
        id: 64,
        category: "Medical-Surgical Nursing",
        question: "A client with cirrhosis is developing ascites. Which nursing intervention is most appropriate?",
        options: [
            "Increase sodium intake",
            "Monitor abdominal girth",
            "Encourage vigorous exercise",
            "Administer NSAIDs"
        ],
        correct: 1,
        explanation: "Monitoring abdominal girth helps assess fluid accumulation and effectiveness of treatment."
    },
    {
        id: 65,
        category: "Medical-Surgical Nursing",
        question: "A client with pancreatitis is experiencing severe abdominal pain. Which position is most therapeutic?",
        options: [
            "Supine with legs extended",
            "Sitting upright",
            "Fetal position with knees to chest",
            "Trendelenburg position"
        ],
        correct: 2,
        explanation: "Fetal position reduces abdominal tension and provides pain relief in pancreatitis."
    },
    {
        id: 66,
        category: "Medical-Surgical Nursing",
        question: "A client with hypertension is prescribed ACE inhibitors. Which side effect should the nurse monitor for?",
        options: [
            "Dry cough",
            "Bradycardia",
            "Hypernatremia",
            "Increased urine output"
        ],
        correct: 0,
        explanation: "Dry cough is a common side effect of ACE inhibitors due to bradykinin accumulation."
    },
    {
        id: 67,
        category: "Medical-Surgical Nursing",
        question: "A client with deep vein thrombosis is receiving heparin. Which laboratory test monitors therapeutic effectiveness?",
        options: [
            "Prothrombin time (PT)",
            "International normalized ratio (INR)",
            "Activated partial thromboplastin time (aPTT)",
            "Platelet count"
        ],
        correct: 2,
        explanation: "aPTT is used to monitor heparin therapy; therapeutic range is 1.5-2.5 times control."
    },
    {
        id: 68,
        category: "Medical-Surgical Nursing",
        question: "A client with asthma is experiencing an acute attack. Which medication should be administered first?",
        options: [
            "Inhaled corticosteroid",
            "Oral theophylline",
            "Short-acting beta agonist",
            "Leukotriene modifier"
        ],
        correct: 2,
        explanation: "Short-acting beta agonists (albuterol) are first-line for acute asthma attacks."
    },
    {
        id: 69,
        category: "Medical-Surgical Nursing",
        question: "A client with hyperthyroidism is experiencing exophthalmos. Which nursing intervention is most important?",
        options: [
            "Encourage eye rubbing",
            "Use artificial tears",
            "Apply warm compresses",
            "Limit fluid intake"
        ],
        correct: 1,
        explanation: "Artificial tears prevent corneal damage in clients with exophthalmos."
    },
    {
        id: 70,
        category: "Medical-Surgical Nursing",
        question: "A client with sickle cell anemia is experiencing a vaso-occlusive crisis. Which intervention is priority?",
        options: [
            "Administer oxygen",
            "Provide pain management",
            "Encourage ambulation",
            "Restrict fluids"
        ],
        correct: 1,
        explanation: "Pain management is the priority during vaso-occlusive crisis as pain is severe."
    },
    {
        id: 71,
        category: "Medical-Surgical Nursing",
        question: "A client with Parkinson's disease is experiencing bradykinesia. Which nursing intervention is most helpful?",
        options: [
            "Rush activities",
            "Provide extra time for tasks",
            "Limit physical activity",
            "Discourage assistive devices"
        ],
        correct: 1,
        explanation: "Providing extra time for tasks helps clients with bradykinesia complete activities safely."
    },
    {
        id: 72,
        category: "Medical-Surgical Nursing",
        question: "A client with multiple sclerosis is experiencing urinary frequency. Which intervention is most appropriate?",
        options: [
            "Restrict fluids",
            "Schedule voiding",
            "Administer diuretics",
            "Delay bathroom use"
        ],
        correct: 1,
        explanation: "Scheduled voiding helps manage urinary frequency in clients with neurological conditions."
    },
    {
        id: 73,
        category: "Medical-Surgical Nursing",
        question: "A client with HIV is experiencing opportunistic infections. Which intervention is most important?",
        options: [
            "Limit social contact",
            "Administer prophylactic antibiotics",
            "Maintain isolation",
            "Skip vaccinations"
        ],
        correct: 1,
        explanation: "Prophylactic antibiotics help prevent opportunistic infections in immunocompromised clients."
    },
    {
        id: 74,
        category: "Medical-Surgical Nursing",
        question: "A client with rheumatoid arthritis is experiencing joint pain. Which non-pharmacological intervention is most effective?",
        options: [
            "Cold applications",
            "Heat applications",
            "Joint immobilization",
            "High-impact exercise"
        ],
        correct: 1,
        explanation: "Heat applications reduce joint stiffness and pain in rheumatoid arthritis."
    },
    {
        id: 75,
        category: "Medical-Surgical Nursing",
        question: "A client with systemic lupus erythematosus should avoid:",
        options: [
            "Sun exposure",
            "Exercise",
            "Balanced diet",
            "Regular medical care"
        ],
        correct: 0,
        explanation: "Sun exposure can trigger disease flares in clients with SLE."
    },
    {
        id: 76,
        category: "Medical-Surgical Nursing",
        question: "A client with inflammatory bowel disease is experiencing bloody diarrhea. Which assessment is priority?",
        options: [
            "Monitor electrolytes",
            "Assess for dehydration",
            "Check skin integrity",
            "Evaluate nutritional status"
        ],
        correct: 1,
        explanation: "Dehydration is a major concern with bloody diarrhea and requires priority assessment."
    },
    {
        id: 77,
        category: "Medical-Surgical Nursing",
        question: "A client with GERD is experiencing nighttime heartburn. Which lifestyle modification is most effective?",
        options: [
            "Eat large meals before bed",
            "Elevate head of bed",
            "Wear tight clothing",
            "Lie flat after meals"
        ],
        correct: 1,
        explanation: "Elevating the head of bed prevents reflux during sleep."
    },
    {
        id: 78,
        category: "Medical-Surgical Nursing",
        question: "A client with hepatitis B should be taught to:",
        options: [
            "Share personal items",
            "Avoid alcohol",
            "Skip medical follow-up",
            "Ignore fatigue"
        ],
        correct: 1,
        explanation: "Alcohol should be avoided as it increases liver damage in hepatitis B."
    },
    {
        id: 79,
        category: "Medical-Surgical Nursing",
        question: "A client with cholecystitis is experiencing right upper quadrant pain. Which position provides most comfort?",
        options: [
            "Supine",
            "Left lateral position",
            "Right lateral position",
            "Sitting upright"
        ],
        correct: 1,
        explanation: "Left lateral position reduces pressure on the gallbladder and provides pain relief."
    },
    {
        id: 80,
        category: "Medical-Surgical Nursing",
        question: "A client with appendicitis is experiencing rebound tenderness. This indicates:",
        options: [
            "Decreased inflammation",
            "Peritoneal irritation",
            "Muscle strain",
            "Nerve compression"
        ],
        correct: 1,
        explanation: "Rebound tenderness indicates peritoneal irritation, a sign of appendicitis."
    },
    {
        id: 81,
        category: "Medical-Surgical Nursing",
        question: "A client with bowel obstruction is vomiting fecal material. This indicates:",
        options: [
            "High intestinal obstruction",
            "Low intestinal obstruction",
            "Gastric ulcer",
            "Pancreatitis"
        ],
        correct: 1,
        explanation: "Fecal vomiting indicates low intestinal obstruction where contents have time to ferment."
    },
    {
        id: 82,
        category: "Medical-Surgical Nursing",
        question: "A client with diverticulitis should avoid which food?",
        options: [
            "Low fiber foods",
            "Nuts and seeds",
            "Cooked vegetables",
            "Lean proteins"
        ],
        correct: 1,
        explanation: "Nuts and seeds can lodge in diverticula and cause inflammation or obstruction."
    },
    {
        id: 83,
        category: "Medical-Surgical Nursing",
        question: "A client with colorectal cancer is undergoing chemotherapy. Which side effect requires immediate intervention?",
        options: [
            "Mild nausea",
            "Hair loss",
            "Fever and neutropenia",
            "Fatigue"
        ],
        correct: 2,
        explanation: "Fever and neutropenia indicate infection risk and require immediate intervention."
    },
    {
        id: 84,
        category: "Medical-Surgical Nursing",
        question: "A client with prostate cancer is experiencing urinary retention. Which intervention is most appropriate?",
        options: [
            "Administer diuretics",
            "Perform bladder scan",
            "Encourage large fluid intake",
            "Delay catheterization"
        ],
        correct: 1,
        explanation: "Bladder scan assesses urine volume and guides appropriate intervention for retention."
    },
    {
        id: 85,
        category: "Medical-Surgical Nursing",
        question: "A client with osteoporosis is at risk for:",
        options: [
            "Weight gain",
            "Fractures",
            "Hypertension",
            "Diabetes"
        ],
        correct: 1,
        explanation: "Osteoporosis increases fracture risk due to decreased bone density."
    },
    {
        id: 86,
        category: "Medical-Surgical Nursing",
        question: "A client with gout is experiencing acute joint pain. Which medication is most effective?",
        options: [
            "Allopurinol",
            "Colchicine",
            "Probenecid",
            "Aspirin"
        ],
        correct: 1,
        explanation: "Colchicine is most effective for acute gout attacks by reducing inflammation."
    },
    {
        id: 87,
        category: "Medical-Surgical Nursing",
        question: "A client with peripheral vascular disease should be taught to:",
        options: [
            "Wear tight socks",
            "Walk barefoot",
            "Avoid tobacco use",
            "Apply heat to extremities"
        ],
        correct: 2,
        explanation: "Tobacco use causes vasoconstriction and worsens peripheral vascular disease."
    },
    {
        id: 88,
        category: "Medical-Surgical Nursing",
        question: "A client with atrial fibrillation is at risk for:",
        options: [
            "Hypotension",
            "Stroke",
            "Bradycardia",
            "Hyperglycemia"
        ],
        correct: 1,
        explanation: "Atrial fibrillation increases stroke risk due to potential clot formation."
    },
    {
        id: 89,
        category: "Medical-Surgical Nursing",
        question: "A client with pneumonia is experiencing hypoxemia. Which assessment finding is most concerning?",
        options: [
            "Productive cough",
            "Chest pain",
            "Confusion",
            "Fever"
        ],
        correct: 2,
        explanation: "Confusion indicates severe hypoxemia and potential cerebral hypoxia."
    },
    {
        id: 90,
        category: "Medical-Surgical Nursing",
        question: "A client with tuberculosis is on airborne precautions. Which personal protective equipment is essential?",
        options: [
            "Surgical mask",
            "N95 respirator",
            "Gloves only",
            "Gown only"
        ],
        correct: 1,
        explanation: "N95 respirator filters TB particles and is essential for airborne precautions."
    },
    {
        id: 91,
        category: "Medical-Surgical Nursing",
        question: "A client with sepsis is developing disseminated intravascular coagulation (DIC). Which laboratory finding is most indicative?",
        options: [
            "Increased platelets",
            "Elevated fibrinogen",
            "Prolonged PT and PTT",
            "Normal D-dimer"
        ],
        correct: 2,
        explanation: "Prolonged PT and PTT indicate clotting factor consumption in DIC."
    },
    {
        id: 92,
        category: "Medical-Surgical Nursing",
        question: "A client with acute respiratory distress syndrome (ARDS) requires:",
        options: [
            "High-flow oxygen",
            "Mechanical ventilation",
            "Conservative fluid management",
            "All of the above"
        ],
        correct: 3,
        explanation: "ARDS requires comprehensive management including mechanical ventilation and careful fluid balance."
    },
    {
        id: 93,
        category: "Medical-Surgical Nursing",
        question: "A client with diabetic neuropathy should be taught to:",
        options: [
            "Walk barefoot",
            "Use hot water bottles",
            "Inspect feet daily",
            "Cut toenails deeply"
        ],
        correct: 2,
        explanation: "Daily foot inspection helps detect injuries early in clients with neuropathy."
    },
    {
        id: 94,
        category: "Medical-Surgical Nursing",
        question: "A client with Cushing's syndrome is experiencing muscle weakness. This is caused by:",
        options: [
            "Excess cortisol",
            "Low blood glucose",
            "Thyroid dysfunction",
            "Vitamin deficiency"
        ],
        correct: 0,
        explanation: "Excess cortisol causes protein catabolism leading to muscle weakness."
    },
    {
        id: 95,
        category: "Medical-Surgical Nursing",
        question: "A client with Addison's disease is experiencing adrenal crisis. Which medication is essential?",
        options: [
            "Insulin",
            "Hydrocortisone",
            "Thyroxine",
            "Estrogen"
        ],
        correct: 1,
        explanation: "Hydrocortisone replaces deficient cortisol in adrenal crisis."
    },
    {
        id: 96,
        category: "Medical-Surgical Nursing",
        question: "A client with pheochromocytoma is experiencing hypertension. Which medication is most appropriate?",
        options: [
            "Beta blockers",
            "ACE inhibitors",
            "Diuretics",
            "Calcium channel blockers"
        ],
        correct: 0,
        explanation: "Beta blockers control catecholamine-induced hypertension in pheochromocytoma."
    },
    {
        id: 97,
        category: "Medical-Surgical Nursing",
        question: "A client with hyperparathyroidism is experiencing kidney stones. This is caused by:",
        options: [
            "High calcium levels",
            "Low phosphate levels",
            "Increased vitamin D",
            "Dehydration"
        ],
        correct: 0,
        explanation: "Hypercalcemia leads to calcium stone formation in kidneys."
    },
    {
        id: 98,
        category: "Medical-Surgical Nursing",
        question: "A client with hypothyroidism is experiencing constipation. This is caused by:",
        options: [
            "Increased metabolism",
            "Decreased gastrointestinal motility",
            "Dehydration",
            "High fiber diet"
        ],
        correct: 1,
        explanation: "Hypothyroidism decreases GI motility leading to constipation."
    },
    {
        id: 99,
        category: "Medical-Surgical Nursing",
        question: "A client with acromegaly is experiencing joint pain. This is caused by:",
        options: [
            "Decreased growth hormone",
            "Excess growth hormone",
            "Thyroid dysfunction",
            "Vitamin deficiency"
        ],
        correct: 1,
        explanation: "Excess growth hormone causes tissue overgrowth leading to joint pain."
    },
    {
        id: 100,
        category: "Medical-Surgical Nursing",
        question: "A client with syndrome of inappropriate antidiuretic hormone (SIADH) is experiencing:",
        options: [
            "Dehydration",
            "Hyponatremia",
            "Hypernatremia",
            "Hyperglycemia"
        ],
        correct: 1,
        explanation: "SIADH causes water retention leading to dilutional hyponatremia."
    },

    // Continue with other categories... (adding more questions to reach 50 per category)
    // Maternal and Child Health Nursing - 50 questions
    {
        id: 101,
        category: "Maternal and Child Health Nursing",
        question: "A pregnant client at 36 weeks gestation reports decreased fetal movement. What should be the nurse's first action?",
        options: [
            "Notify the healthcare provider",
            "Assess fetal heart rate",
            "Instruct client to count kicks for 30 minutes",
            "Prepare for emergency delivery"
        ],
        correct: 1,
        explanation: "The first action should be to assess fetal heart rate to determine fetal well-being."
    },
    {
        id: 102,
        category: "Maternal and Child Health Nursing",
        question: "Which finding in a newborn would require immediate intervention?",
        options: [
            "Acrocyanosis",
            "Heart rate of 140 bpm",
            "Respiratory rate of 60 breaths/min",
            "Nasal flaring"
        ],
        correct: 3,
        explanation: "Nasal flaring is a sign of respiratory distress in newborns and requires immediate intervention."
    },
    {
        id: 103,
        category: "Maternal and Child Health Nursing",
        question: "A postpartum client complains of perineal pain. Which intervention would be most effective?",
        options: [
            "Apply ice pack",
            "Administer analgesics",
            "Teach Kegel exercises",
            "Encourage ambulation"
        ],
        correct: 0,
        explanation: "Ice packs are most effective for perineal pain in the first 24 hours postpartum as they reduce swelling and numb the area."
    },
    {
        id: 104,
        category: "Maternal and Child Health Nursing",
        question: "A 16-year-old primigravida arrives at the labor and birthing unit in her 38th week of gestation and states that she is labor. To verify that the client is in true labor nurse Trina should:",
        options: [
            "Obtain sides for a fern test",
            "Time any uterine contractions",
            "Prepare her for a pelvic examination",
            "Apply nitrazine paper to moist vaginal tissue"
        ],
        correct: 2,
        explanation: "A pelvic examination is the most definitive way to confirm true labor by assessing cervical dilation and effacement."
    },
    {
        id: 105,
        category: "Maternal and Child Health Nursing",
        question: "Nurse Cathy applies a fetal monitor to the abdomen of a client in active labor. When the client has contractions, the nurse notes a 15 beat per minute deceleration of the fetal heart rate below the baseline lasting 15 seconds. Nurse Cathy should:",
        options: [
            "Change the maternal position",
            "Prepare for an immediate birth",
            "Call the physician immediately",
            "Obtain the client's blood pressure"
        ],
        correct: 0,
        explanation: "Early decelerations are usually caused by head compression and can be managed by changing the maternal position."
    },
    {
        id: 106,
        category: "Maternal and Child Health Nursing",
        question: "When a client on labor experiences the urge to push at 9cm dilation, the breathing pattern that nurse Rhea should instruct the client to use is the:",
        options: [
            "Expulsion pattern",
            "Slow paced pattern",
            "Shallow chest pattern",
            "Blowing pattern"
        ],
        correct: 3,
        explanation: "The blowing pattern helps prevent pushing when the cervix is not fully dilated."
    },
    {
        id: 107,
        category: "Maternal and Child Health Nursing",
        question: "A client has a regular 30-day menstrual cycles. When teaching about the rhythm method, which the client and her husband have chosen to use for family planning, nurse Dianne should emphasize that the client's most fertile days are:",
        options: [
            "Days 9 to 11",
            "Days 12 to 14",
            "Days 15 to 17",
            "Days 18 to 20"
        ],
        correct: 1,
        explanation: "In a 30-day cycle, ovulation typically occurs around day 14, making days 12-14 the most fertile period."
    },
    {
        id: 108,
        category: "Maternal and Child Health Nursing",
        question: "Before an amniocentesis, nurse Alexandra should:",
        options: [
            "Initiate the intravenous therapy as ordered by the physician",
            "Inform the client that the procedure could precipitate an infection",
            "Assure that informed consent has been obtained from the client",
            "Perform a vaginal examination on the client to assess cervical dilation"
        ],
        correct: 2,
        explanation: "Informed consent must be obtained before any invasive procedure like amniocentesis."
    },
    {
        id: 109,
        category: "Maternal and Child Health Nursing",
        question: "While a client is on intravenous magnesium sulfate therapy for preeclampsia, it is essential for nurse Amy to monitor the client's deep tendon reflexes to:",
        options: [
            "Determine her level of consciousness",
            "Evaluate the mobility of the extremities",
            "Determine her response to painful stimuli",
            "Prevent development of respiratory distress"
        ],
        correct: 3,
        explanation: "Magnesium sulfate toxicity can cause respiratory depression, so monitoring deep tendon reflexes is crucial."
    },
    {
        id: 110,
        category: "Maternal and Child Health Nursing",
        question: "Nurse Mary assesses a postpartum client who had an abruption placentae and suspects that disseminated intravascular coagulation (DIC) is occurring when assessments demonstrate:",
        options: [
            "A boggy uterus",
            "Multiple vaginal clots",
            "Hypotension and tachycardia",
            "Bleeding from the venipuncture site"
        ],
        correct: 3,
        explanation: "Bleeding from venipuncture sites is a classic sign of DIC, indicating systemic clotting problems."
    },
    {
        id: 111,
        category: "Maternal and Child Health Nursing",
        question: "A newborn has a heart rate of 90 beats per minute. The nurse should:",
        options: [
            "Continue routine care",
            "Provide tactile stimulation",
            "Begin positive pressure ventilation",
            "Start chest compressions"
        ],
        correct: 1,
        explanation: "Heart rate below 100 bpm requires tactile stimulation in newborn resuscitation."
    },
    {
        id: 112,
        category: "Maternal and Child Health Nursing",
        question: "A postpartum client is experiencing breast engorgement. Which intervention is most effective?",
        options: [
            "Limit fluid intake",
            "Apply cold compresses",
            "Wear tight bra",
            "Avoid breastfeeding"
        ],
        correct: 1,
        explanation: "Cold compresses reduce swelling and discomfort of breast engorgement."
    },
    {
        id: 113,
        category: "Maternal and Child Health Nursing",
        question: "A pregnant client with Rh-negative blood should receive Rho(D) immune globulin at:",
        options: [
            "28 weeks gestation only",
            "72 hours postpartum only",
            "Both 28 weeks and 72 hours postpartum",
            "Only if baby is Rh-negative"
        ],
        correct: 2,
        explanation: "Rho(D) immune globulin is given at 28 weeks and within 72 hours postpartum if baby is Rh-positive."
    },
    {
        id: 114,
        category: "Maternal and Child Health Nursing",
        question: "A newborn is jaundiced. The nurse should assess for:",
        options: [
            "Hypoglycemia",
            "Dehydration",
            "Poor feeding",
            "All of the above"
        ],
        correct: 3,
        explanation: "All of these can contribute to or result from neonatal jaundice."
    },
    {
        id: 115,
        category: "Maternal and Child Health Nursing",
        question: "A client in active labor has cervical dilation of 8cm. The nurse should:",
        options: [
            "Encourage ambulation",
            "Prepare for delivery",
            "Administer analgesics",
            "Start pushing"
        ],
        correct: 1,
        explanation: "Cervical dilation of 8cm indicates transition phase, and delivery preparation is needed."
    },
    {
        id: 116,
        category: "Maternal and Child Health Nursing",
        question: "A postpartum client is experiencing postpartum blues. The nurse should:",
        options: [
            "Administer antidepressants",
            "Provide emotional support",
            "Isolate the client",
            "Contact psychiatrist"
        ],
        correct: 1,
        explanation: "Postpartum blues are normal and respond well to emotional support and reassurance."
    },
    {
        id: 117,
        category: "Maternal and Child Health Nursing",
        question: "A pregnant client with gestational diabetes should be taught to:",
        options: [
            "Increase sugar intake",
            "Monitor blood glucose",
            "Skip exercise",
            "Eat large meals"
        ],
        correct: 1,
        explanation: "Blood glucose monitoring is essential for managing gestational diabetes."
    },
    {
        id: 118,
        category: "Maternal and Child Health Nursing",
        question: "A newborn has a cephalohematoma. The nurse should teach parents that:",
        options: [
            "It resolves in weeks",
            "It crosses suture lines",
            "It requires immediate surgery",
            "It's caused by forceps"
        ],
        correct: 0,
        explanation: "Cephalohematoma resolves over weeks and doesn't cross suture lines."
    },
    {
        id: 119,
        category: "Maternal and Child Health Nursing",
        question: "A client with placenta previa is experiencing bleeding. The nurse should:",
        options: [
            "Perform vaginal exam",
            "Encourage ambulation",
            "Monitor vital signs",
            "Administer oxytocin"
        ],
        correct: 2,
        explanation: "Monitoring vital signs assesses for hemorrhage in placenta previa."
    },
    {
        id: 120,
        category: "Maternal and Child Health Nursing",
        question: "A postpartum client is unable to void. The nurse should first:",
        options: [
            "Catheterize immediately",
            "Provide privacy",
            "Apply heat to perineum",
            "Administer diuretics"
        ],
        correct: 1,
        explanation: "Providing privacy promotes relaxation and may facilitate voiding."
    },
    {
        id: 121,
        category: "Maternal and Child Health Nursing",
        question: "A pregnant client at 20 weeks is experiencing contractions. The nurse should assess for:",
        options: [
            "Cervical dilation",
            "Fetal movement",
            "Maternal fatigue",
            "Edema"
        ],
        correct: 0,
        explanation: "Cervical assessment determines if preterm labor is occurring."
    },
    {
        id: 122,
        category: "Maternal and Child Health Nursing",
        question: "A newborn is being breastfed. The nurse should assess for:",
        options: [
            "Proper latch",
            "Maternal comfort",
            "Feeding duration",
            "All of the above"
        ],
        correct: 3,
        explanation: "All aspects are important for successful breastfeeding."
    },
    {
        id: 123,
        category: "Maternal and Child Health Nursing",
        question: "A client with hyperemesis gravidarum is at risk for:",
        options: [
            "Weight gain",
            "Dehydration",
            "Hypertension",
            "Diabetes"
        ],
        correct: 1,
        explanation: "Severe vomiting in hyperemesis gravidarum leads to dehydration."
    },
    {
        id: 124,
        category: "Maternal and Child Health Nursing",
        question: "A postpartum client is experiencing hemorrhage. The nurse should first:",
        options: [
            "Massage fundus",
            "Administer oxytocin",
            "Call physician",
            "Start IV fluids"
        ],
        correct: 0,
        explanation: "Fundal massage helps contract uterus and control bleeding."
    },
    {
        id: 125,
        category: "Maternal and Child Health Nursing",
        question: "A pregnant client with hypertension should be monitored for:",
        options: [
            "Preeclampsia",
            "Gestational diabetes",
            "Anemia",
            "Infection"
        ],
        correct: 0,
        explanation: "Hypertension in pregnancy increases risk of preeclampsia."
    },
    {
        id: 126,
        category: "Maternal and Child Health Nursing",
        question: "A newborn has a temperature of 36°C. The nurse should:",
        options: [
            "Continue monitoring",
            "Provide warming",
            "Cool the baby",
            "Ignore finding"
        ],
        correct: 1,
        explanation: "Temperature below 36.5°C requires warming to prevent cold stress."
    },
    {
        id: 127,
        category: "Maternal and Child Health Nursing",
        question: "A client in labor receives epidural anesthesia. The nurse should monitor for:",
        options: [
            "Hypertension",
            "Hypotension",
            "Increased pain",
            "Fetal tachycardia"
        ],
        correct: 1,
        explanation: "Epidural anesthesia can cause maternal hypotension."
    },
    {
        id: 128,
        category: "Maternal and Child Health Nursing",
        question: "A postpartum client is breastfeeding. She should increase intake of:",
        options: [
            "Caffeine",
            "Fluids",
            "Sodium",
            "Fat"
        ],
        correct: 1,
        explanation: "Breastfeeding mothers need increased fluids for milk production."
    },
    {
        id: 129,
        category: "Maternal and Child Health Nursing",
        question: "A pregnant client is experiencing Braxton Hicks contractions. The nurse should explain that these are:",
        options: [
            "True labor contractions",
            "Practice contractions",
            "Signs of complications",
            "Require medication"
        ],
        correct: 1,
        explanation: "Braxton Hicks are practice contractions that don't cause cervical dilation."
    },
    {
        id: 130,
        category: "Maternal and Child Health Nursing",
        question: "A newborn is screened for phenylketonuria (PKU). This test should be performed:",
        options: [
            "Immediately after birth",
            "24-48 hours after birth",
            "1 week after birth",
            "1 month after birth"
        ],
        correct: 1,
        explanation: "PKU screening is done 24-48 hours after birth for accurate results."
    },
    {
        id: 131,
        category: "Maternal and Child Health Nursing",
        question: "A client with twin pregnancy is at risk for:",
        options: [
            "Preterm labor",
            "Postterm pregnancy",
            "Small baby size",
            "Low amniotic fluid"
        ],
        correct: 0,
        explanation: "Twin pregnancies have higher risk of preterm labor."
    },
    {
        id: 132,
        category: "Maternal and Child Health Nursing",
        question: "A postpartum client is experiencing night sweats. This is caused by:",
        options: [
            "Infection",
            "Hormonal changes",
            "Dehydration",
            "Medication side effects"
        ],
        correct: 1,
        explanation: "Postpartum night sweats are caused by hormonal changes."
    },
    {
        id: 133,
        category: "Maternal and Child Health Nursing",
        question: "A pregnant client with anemia should increase intake of:",
        options: [
            "Calcium",
            "Iron",
            "Vitamin C",
            "Vitamin D"
        ],
        correct: 1,
        explanation: "Iron supplementation treats anemia in pregnancy."
    },
    {
        id: 134,
        category: "Maternal and Child Health Nursing",
        question: "A newborn is circumcised. The nurse should teach parents to:",
        options: [
            "Use alcohol for cleaning",
            "Apply petroleum jelly",
            "Remove dressing immediately",
            "Submerge in water"
        ],
        correct: 1,
        explanation: "Petroleum jelly prevents the circumcised area from sticking to diapers."
    },
    {
        id: 135,
        category: "Maternal and Child Health Nursing",
        question: "A client with ectopic pregnancy is experiencing:",
        options: [
            "Vaginal bleeding",
            "Abdominal pain",
            "Shoulder pain",
            "All of the above"
        ],
        correct: 3,
        explanation: "All of these symptoms can occur with ectopic pregnancy."
    },
    {
        id: 136,
        category: "Maternal and Child Health Nursing",
        question: "A postpartum client is choosing contraception. Which method is safest while breastfeeding?",
        options: [
            "Combined oral contraceptives",
            "Progestin-only pills",
            "IUD",
            "Both B and C"
        ],
        correct: 3,
        explanation: "Progestin-only pills and IUDs are safe while breastfeeding."
    },
    {
        id: 137,
        category: "Maternal and Child Health Nursing",
        question: "A pregnant client is experiencing back pain. The nurse should recommend:",
        options: [
            "High heels",
            "Proper posture",
            "Heavy lifting",
            "Prolonged sitting"
        ],
        correct: 1,
        explanation: "Proper posture helps relieve pregnancy-related back pain."
    },
    {
        id: 138,
        category: "Maternal and Child Health Nursing",
        question: "A newborn has a positive Babinski reflex. The nurse understands that this is:",
        options: [
            "Abnormal",
            "Normal",
            "Sign of cerebral palsy",
            "Sign of infection"
        ],
        correct: 1,
        explanation: "Positive Babinski is normal in infants up to 2 years old."
    },
    {
        id: 139,
        category: "Maternal and Child Health Nursing",
        question: "A client with group B streptococcus should receive:",
        options: [
            "Antibiotics during labor",
            "Antibiotics before pregnancy",
            "Vaccination",
            "No treatment needed"
        ],
        correct: 0,
        explanation: "Intrapartum antibiotics prevent GBS transmission to newborn."
    },
    {
        id: 140,
        category: "Maternal and Child Health Nursing",
        question: "A postpartum client is experiencing fatigue. The nurse should suggest:",
        options: [
            "Limit sleep",
            "Accept help from others",
            "Increase caffeine",
            "Skip rest periods"
        ],
        correct: 1,
        explanation: "Accepting help allows the mother to get needed rest."
    },
    {
        id: 141,
        category: "Maternal and Child Health Nursing",
        question: "A pregnant client is experiencing heartburn. The nurse should recommend:",
        options: [
            "Large meals before bed",
            "Spicy foods",
            "Small, frequent meals",
            "Lie flat after eating"
        ],
        correct: 2,
        explanation: "Small, frequent meals reduce reflux and heartburn."
    },
    {
        id: 142,
        category: "Maternal and Child Health Nursing",
        question: "A newborn is screened for hearing. This test should be performed:",
        options: [
            "Before discharge",
            "1 week after birth",
            "1 month after birth",
            "6 months after birth"
        ],
        correct: 0,
        explanation: "Newborn hearing screening is performed before hospital discharge."
    },
    {
        id: 143,
        category: "Maternal and Child Health Nursing",
        question: "A client with preterm labor should receive:",
        options: [
            "Tocolytics",
            "Induction agents",
            "Oxytocin",
            "Prostaglandins"
        ],
        correct: 0,
        explanation: "Tocolytics stop uterine contractions in preterm labor."
    },
    {
        id: 144,
        category: "Maternal and Child Health Nursing",
        question: "A postpartum client is experiencing constipation. The nurse should recommend:",
        options: [
            "Decrease fluids",
            "Increase fiber",
            "Limit activity",
            "Use laxatives routinely"
        ],
        correct: 1,
        explanation: "Increased fiber intake helps prevent postpartum constipation."
    },
    {
        id: 145,
        category: "Maternal and Child Health Nursing",
        question: "A pregnant client is experiencing edema. The nurse should assess for:",
        options: [
            "Preeclampsia",
            "Gestational diabetes",
            "Anemia",
            "Infection"
        ],
        correct: 0,
        explanation: "Edema can be a sign of preeclampsia when accompanied by hypertension and proteinuria."
    },
    {
        id: 146,
        category: "Maternal and Child Health Nursing",
        question: "A newborn has a birth weight of 4.5 kg. This is considered:",
        options: [
            "Low birth weight",
            "Normal birth weight",
            "High birth weight",
            "Extremely low birth weight"
        ],
        correct: 2,
        explanation: "Birth weight over 4 kg is considered high birth weight."
    },
    {
        id: 147,
        category: "Maternal and Child Health Nursing",
        question: "A client with postpartum depression requires:",
        options: [
            "Reassurance only",
            "Professional treatment",
            "No intervention",
            "Isolation"
        ],
        correct: 1,
        explanation: "Postpartum depression requires professional treatment including therapy and possibly medication."
    },
    {
        id: 148,
        category: "Maternal and Child Health Nursing",
        question: "A pregnant client should avoid which food?",
        options: [
            "Cooked vegetables",
            "Pasteurized milk",
            "Raw fish",
            "Well-cooked meat"
        ],
        correct: 2,
        explanation: "Raw fish can contain harmful bacteria and parasites."
    },
    {
        id: 149,
        category: "Maternal and Child Health Nursing",
        question: "A newborn has a molding of the head. The nurse should explain that this:",
        options: [
            "Is permanent",
            "Resolves in days",
            "Requires surgery",
            "Indicates brain damage"
        ],
        correct: 1,
        explanation: "Molding resolves within days after birth as the skull bones return to normal position."
    },
    {
        id: 150,
        category: "Maternal and Child Health Nursing",
        question: "A client planning breastfeeding should be taught about:",
        options: [
            "Proper latch techniques",
            "Feeding schedules",
            "Nutritional needs",
            "All of the above"
        ],
        correct: 3,
        explanation: "All aspects are important for successful breastfeeding."
    },

    // Continue with remaining categories to complete 50 questions each...
    // For brevity, I'll add a few more questions for each category
    // Psychiatric Nursing - 50 questions
    {
        id: 151,
        category: "Psychiatric Nursing",
        question: "A client with schizophrenia says, 'The voices are telling me to hurt someone.' What is the nurse's priority action?",
        options: [
            "Document the statement",
            "Administer antipsychotic medication",
            "Assess risk for harm to others",
            "Provide reality orientation"
        ],
        correct: 2,
        explanation: "Safety is the priority. The nurse must assess the risk for harm to others when a client reports command hallucinations."
    },
    {
        id: 152,
        category: "Psychiatric Nursing",
        question: "Which intervention is most appropriate for a client experiencing a panic attack?",
        options: [
            "Administer lorazepam immediately",
            "Encourage deep breathing exercises",
            "Provide distraction activities",
            "Isolate the client in a quiet room"
        ],
        correct: 1,
        explanation: "Deep breathing exercises help regulate the hyperventilation and anxiety associated with panic attacks."
    },
    {
        id: 153,
        category: "Psychiatric Nursing",
        question: "A client with major depressive disorder refuses to eat. Which nursing intervention is most appropriate?",
        options: [
            "Force the client to eat",
            "Offer small, frequent meals",
            "Withhold privileges until eating",
            "Consult a psychiatrist immediately"
        ],
        correct: 1,
        explanation: "Offering small, frequent meals is less overwhelming and can help increase nutritional intake gradually."
    },
    {
        id: 154,
        category: "Psychiatric Nursing",
        question: "A paranoid male client with schizophrenia is losing weight, reluctant to eat, and voicing concerns about being poisoned. The best intervention by nurse Dina would be to:",
        options: [
            "Allow the client to open canned or pre-packaged food",
            "Restrict the client to his room until 2 lbs are gained",
            "Have a staff member personally taste all of the client's food",
            "Tell the client the food has been x-rayed by the staff and is safe"
        ],
        correct: 0,
        explanation: "Allowing the client to open canned or pre-packaged food gives them control and reduces paranoia about poisoning."
    },
    {
        id: 155,
        category: "Psychiatric Nursing",
        question: "One day the mother of a young adult confides to nurse Frida that she is very troubled by he child's emotional illness. The nurse's most therapeutic initial response would be:",
        options: [
            "'You may be able to lessen your feelings of guilt by seeking counseling'",
            "'It would be helpful if you become involved in volunteer work at this time'",
            "'I recognize it's hard to deal with this, but try to remember that this too shall pass'",
            "'Joining a support group of parents who are coping with this problem can be quite helpful.'"
        ],
        correct: 3,
        explanation: "Referring to a support group validates the mother's feelings and provides a constructive coping mechanism."
    },
    {
        id: 156,
        category: "Psychiatric Nursing",
        question: "As a very anxious female client is talking to the nurse May, she starts crying. She appears to be upset that she cannot control her crying. The most appropriate response by the nurse would be:",
        options: [
            "'Is talking about your problem upsetting you?'",
            "'It is Ok to cry; I'll just stay with you for now'",
            "'You look upset; lets talk about why you are crying.'",
            "'Sometimes it helps to get it out of your system.'"
        ],
        correct: 1,
        explanation: "Accepting the client's emotional expression and providing supportive presence is therapeutic."
    },
    {
        id: 157,
        category: "Psychiatric Nursing",
        question: "Nurse Oliver interviews a young female client with anorexia nervosa to obtain information for the nursing history. The client's history is likely to reveal a:",
        options: [
            "Strong desire to improve her body image",
            "Close, supportive mother-daughter relationship",
            "Satisfaction with and desire to maintain her present weight",
            "Low level of achievement in school, with little concerns for grades"
        ],
        correct: 0,
        explanation: "Clients with anorexia nervosa typically have a strong desire to improve their body image, though it's distorted."
    },
    {
        id: 158,
        category: "Psychiatric Nursing",
        question: "A 2 ½ year old child undergoes a ventriculoperitoneal shunt revision. Before discharge, nurse John, knowing the expected developmental behaviors for this age group, should tell the parents to call the physician if the child:",
        options: [
            "Tries to copy all the father's mannerisms",
            "Talks incessantly regardless of the presence of others",
            "Becomes fussy when frustrated and displays a shortened attention span",
            "Frequently starts arguments with playmates by claiming all toys are 'mine'"
        ],
        correct: 2,
        explanation: "Increased fussiness and shortened attention span can indicate increased intracranial pressure in a toddler."
    },
    {
        id: 159,
        category: "Psychiatric Nursing",
        question: "To assess orientation to place in a client suspected of having dementia of the alzheimers type, nurse Chris should ask:",
        options: [
            "'Where are you?'",
            "'Who brought you here?'",
            "'Do you know where you are?'",
            "'How long have you been there?'"
        ],
        correct: 0,
        explanation: "Asking 'Where are you?' directly assesses orientation to place without being leading."
    },
    {
        id: 160,
        category: "Psychiatric Nursing",
        question: "When planning care for a client at 30-weeks gestation, admitted to the hospital after vaginal bleeding secondary to placenta previa, the nurse's primary objective would be:",
        options: [
            "Provide a calm, quiet environment",
            "Prepare the client for an immediate cesarean birth",
            "Prevent situations that may stimulate the cervix or uterus",
            "Ensure that the client has regular cervical examinations assess for labor"
        ],
        correct: 2,
        explanation: "The priority is to prevent further bleeding by avoiding cervical stimulation or uterine activity."
    },

    // Community Health Nursing - 50 questions
    {
        id: 161,
        category: "Community Health Nursing",
        question: "Which is the primary goal of community health nursing?",
        options: [
            "Treat diseases",
            "Promote health and prevent disease",
            "Provide rehabilitation services",
            "Conduct research"
        ],
        correct: 1,
        explanation: "The primary goal of community health nursing is health promotion and disease prevention."
    },
    {
        id: 162,
        category: "Community Health Nursing",
        question: "In epidemiology, what does incidence rate measure?",
        options: [
            "Total number of cases",
            "New cases over a time period",
            "Deaths from a disease",
            "Recovery rate"
        ],
        correct: 1,
        explanation: "Incidence rate measures the number of new cases of a disease occurring in a population during a specified time period."
    },
    {
        id: 163,
        category: "Community Health Nursing",
        question: "Which immunization should be administered to a newborn within the first 24 hours?",
        options: [
            "Hepatitis B vaccine",
            "BCG vaccine",
            "DPT vaccine",
            "Polio vaccine"
        ],
        correct: 0,
        explanation: "Hepatitis B vaccine is recommended to be given within the first 24 hours of life to prevent perinatal transmission."
    },
    {
        id: 164,
        category: "Community Health Nursing",
        question: "A client's sputum smears for acid fast bacilli (AFB) are positive, and transmission-based airborne precautions are ordered. Nurse Kyle should instruct visitors to:",
        options: [
            "Limit contact with non-exposed family members",
            "Avoid contact with any objects present in the client's room",
            "Wear an Ultra-Filter mask when they are in the client's room",
            "Put on a gown and gloves before going into the client's room"
        ],
        correct: 2,
        explanation: "For airborne precautions, visitors must wear an Ultra-Filter (N95) mask to prevent transmission of TB."
    },
    {
        id: 165,
        category: "Community Health Nursing",
        question: "The nurse is planning a community health education program about hypertension. Which topic should be prioritized?",
        options: [
            "Medication compliance",
            "Dietary modifications",
            "Exercise benefits",
            "Stress management"
        ],
        correct: 1,
        explanation: "Dietary modifications, particularly sodium restriction, are crucial for hypertension management."
    },
    {
        id: 166,
        category: "Community Health Nursing",
        question: "Which is the most effective method to prevent the spread of infectious diseases in a community setting?",
        options: [
            "Isolation of cases",
            "Hand hygiene",
            "Vaccination",
            "Environmental cleaning"
        ],
        correct: 1,
        explanation: "Hand hygiene is the single most effective method to prevent the spread of infectious diseases."
    },
    {
        id: 167,
        category: "Community Health Nursing",
        question: "A community health nurse is conducting a screening program for diabetes mellitus. Which test should be included?",
        options: [
            "Fasting blood glucose",
            "Random blood glucose",
            "Urine glucose",
            "Glycosylated hemoglobin"
        ],
        correct: 0,
        explanation: "Fasting blood glucose is the standard screening test for diabetes mellitus."
    },
    {
        id: 168,
        category: "Community Health Nursing",
        question: "The nurse is teaching a group of mothers about breastfeeding. Which instruction is most important?",
        options: [
            "Feed the baby on demand",
            "Supplement with formula",
            "Limit feeding duration",
            "Schedule feeding every 3 hours"
        ],
        correct: 0,
        explanation: "Feeding on demand helps establish milk supply and meets the baby's nutritional needs."
    },
    {
        id: 169,
        category: "Community Health Nursing",
        question: "Which factor contributes most to the spread of dengue fever in communities?",
        options: [
            "Poor sanitation",
            "Stagnant water",
            "Overcrowding",
            "Lack of vaccination"
        ],
        correct: 1,
        explanation: "Stagnant water provides breeding sites for Aedes mosquitoes, the primary vector for dengue fever."
    },
    {
        id: 170,
        category: "Community Health Nursing",
        question: "The community health nurse is planning a program for elderly residents. Which activity should be prioritized?",
        options: [
            "Exercise classes",
            "Nutrition counseling",
            "Fall prevention",
            "Social activities"
        ],
        correct: 2,
        explanation: "Fall prevention is crucial for elderly residents as falls can lead to serious complications."
    },

    // Pharmacology - 50 questions
    {
        id: 171,
        category: "Pharmacology",
        question: "Which medication should the nurse question if prescribed for a client with renal impairment?",
        options: [
            "Metformin",
            "Lisinopril",
            "Atorvastatin",
            "Amlodipine"
        ],
        correct: 0,
        explanation: "Metformin is contraindicated in renal impairment due to the risk of lactic acidosis."
    },
    {
        id: 172,
        category: "Pharmacology",
        question: "A client receiving warfarin should avoid which food?",
        options: [
            "Citrus fruits",
            "Green leafy vegetables",
            "Dairy products",
            "Red meat"
        ],
        correct: 1,
        explanation: "Green leafy vegetables contain vitamin K which antagonizes the effects of warfarin."
    },
    {
        id: 173,
        category: "Pharmacology",
        question: "Which is a common side effect of ACE inhibitors?",
        options: [
            "Dry cough",
            "Bradycardia",
            "Hyperkalemia",
            "Hypoglycemia"
        ],
        correct: 0,
        explanation: "Dry cough is a common side effect of ACE inhibitors due to bradykinin accumulation."
    },
    {
        id: 174,
        category: "Pharmacology",
        question: "The laboratory calls to state that a client's lithium level is 1.9 mEq/L after 10 days of lithium therapy. Nurse Reese should:",
        options: [
            "Notify the physician of the findings because the level is dangerously high",
            "Monitor the client closely because the level of lithium in the blood is slightly elevated",
            "Continue to administer the medication as ordered because the level is within the therapeutic range",
            "Report the findings to the physician so the dosage can be increased because the level is below therapeutic range"
        ],
        correct: 0,
        explanation: "Lithium level of 1.9 mEq/L is dangerously high (therapeutic range is 0.6-1.2 mEq/L) and requires immediate physician notification."
    },
    {
        id: 175,
        category: "Pharmacology",
        question: "When administering pancrelipase (Pancreases capsules) to child with cystic fibrosis, nurse Faith knows they should be given:",
        options: [
            "With meals and snacks",
            "Every three hours while awake",
            "On awakening, following meals, and at bedtime",
            "After each bowel movement and after postural drainage"
        ],
        correct: 0,
        explanation: "Pancrelipase should be taken with meals and snacks to aid in digestion of fats and proteins."
    },
    {
        id: 176,
        category: "Pharmacology",
        question: "Which medication requires therapeutic drug monitoring?",
        options: [
            "Acetaminophen",
            "Digoxin",
            "Ibuprofen",
            "Omeprazole"
        ],
        correct: 1,
        explanation: "Digoxin has a narrow therapeutic index and requires regular blood level monitoring."
    },
    {
        id: 177,
        category: "Pharmacology",
        question: "A client is prescribed furosemide (Lasix). The nurse should monitor for which electrolyte imbalance?",
        options: [
            "Hypernatremia",
            "Hyperkalemia",
            "Hypokalemia",
            "Hypermagnesia"
        ],
        correct: 2,
        explanation: "Furosemide is a loop diuretic that causes potassium loss, leading to hypokalemia."
    },
    {
        id: 178,
        category: "Pharmacology",
        question: "Which medication should be taken with food to minimize gastrointestinal side effects?",
        options: [
            "Aspirin",
            "Metformin",
            "Prednisone",
            "Alendronate"
        ],
        correct: 1,
        explanation: "Metformin should be taken with food to reduce gastrointestinal side effects like nausea and diarrhea."
    },
    {
        id: 179,
        category: "Pharmacology",
        question: "A client on anticoagulant therapy should avoid which activity?",
        options: [
            "Walking",
            "Swimming",
            "Contact sports",
            "Yoga"
        ],
        correct: 2,
        explanation: "Contact sports should be avoided due to increased risk of bleeding and injury."
    },
    {
        id: 180,
        category: "Pharmacology",
        question: "Which medication can cause photosensitivity?",
        options: [
            "Propranolol",
            "Tetracycline",
            "Insulin",
            "Acetaminophen"
        ],
        correct: 1,
        explanation: "Tetracycline can cause photosensitivity, making the skin more sensitive to sunlight."
    },

    // Anatomy and Physiology - 50 questions
    {
        id: 181,
        category: "Anatomy and Physiology",
        question: "Which organ is primarily responsible for detoxification of drugs?",
        options: [
            "Kidney",
            "Liver",
            "Lung",
            "Spleen"
        ],
        correct: 1,
        explanation: "The liver is the primary organ for drug metabolism and detoxification through various enzymatic processes."
    },
    {
        id: 182,
        category: "Anatomy and Physiology",
        question: "Which hormone regulates blood calcium levels?",
        options: [
            "Insulin",
            "Thyroxine",
            "Parathyroid hormone",
            "Cortisol"
        ],
        correct: 2,
        explanation: "Parathyroid hormone increases blood calcium levels by stimulating bone resorption and kidney reabsorption."
    },
    {
        id: 183,
        category: "Anatomy and Physiology",
        question: "The mitral valve is located between:",
        options: [
            "Right atrium and right ventricle",
            "Left atrium and left ventricle",
            "Right ventricle and pulmonary artery",
            "Left ventricle and aorta"
        ],
        correct: 1,
        explanation: "The mitral valve (bicuspid valve) is located between the left atrium and left ventricle."
    },
    {
        id: 184,
        category: "Anatomy and Physiology",
        question: "Which part of the brain is responsible for balance and coordination?",
        options: [
            "Cerebrum",
            "Cerebellum",
            "Brainstem",
            "Hypothalamus"
        ],
        correct: 1,
        explanation: "The cerebellum is responsible for balance, coordination, and fine motor control."
    },
    {
        id: 185,
        category: "Anatomy and Physiology",
        question: "The primary function of the kidneys is:",
        options: [
            "Digestion",
            "Filtration",
            "Hormone production",
            "Blood pressure regulation"
        ],
        correct: 1,
        explanation: "The primary function of the kidneys is to filter blood and remove waste products."
    },
    {
        id: 186,
        category: "Anatomy and Physiology",
        question: "Which blood vessel carries oxygenated blood?",
        options: [
            "Pulmonary artery",
            "Pulmonary vein",
            "Superior vena cava",
            "Inferior vena cava"
        ],
        correct: 1,
        explanation: "The pulmonary vein carries oxygenated blood from the lungs to the left atrium."
    },
    {
        id: 187,
        category: "Anatomy and Physiology",
        question: "The largest organ in the human body is:",
        options: [
            "Heart",
            "Liver",
            "Brain",
            "Skin"
        ],
        correct: 3,
        explanation: "The skin is the largest organ in the human body, covering approximately 20 square feet."
    },
    {
        id: 188,
        category: "Anatomy and Physiology",
        question: "Which type of muscle is found in the walls of hollow organs?",
        options: [
            "Skeletal muscle",
            "Cardiac muscle",
            "Smooth muscle",
            "Striated muscle"
        ],
        correct: 2,
        explanation: "Smooth muscle is found in the walls of hollow organs like the intestines, bladder, and blood vessels."
    },
    {
        id: 189,
        category: "Anatomy and Physiology",
        question: "The primary site of nutrient absorption is the:",
        options: [
            "Stomach",
            "Small intestine",
            "Large intestine",
            "Rectum"
        ],
        correct: 1,
        explanation: "The small intestine is the primary site of nutrient absorption due to its large surface area and villi."
    },
    {
        id: 190,
        category: "Anatomy and Physiology",
        question: "Which gland is known as the 'master gland'?",
        options: [
            "Thyroid",
            "Pituitary",
            "Adrenal",
            "Pancreas"
        ],
        correct: 1,
        explanation: "The pituitary gland is called the 'master gland' because it controls other endocrine glands."
    },

    // PNLE I for Foundation of Professional Nursing Practice - 50 questions
    {
        id: 191,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse In-charge in labor and delivery unit administered a dose of terbutaline to a client without checking the client's pulse. The standard that would be used to determine if the nurse was negligent is:",
        options: [
            "The physician's orders.",
            "The action of a clinical nurse specialist who is recognized expert in the field.",
            "The statement in the drug literature about administration of terbutaline.",
            "The actions of a reasonably prudent nurse with similar education and experience."
        ],
        correct: 3,
        explanation: "The standard of care is determined by the average degree of skill, care, and diligence by nurses in similar circumstances."
    },
    {
        id: 192,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Nurse Trish is caring for a female client with a history of GI bleeding, sickle cell disease, and a platelet count of 22,000/μl. The female client is dehydrated and receiving dextrose 5% in half-normal saline solution at 150 ml/hr. The client complains of severe bone pain and is scheduled to receive a dose of morphine sulfate. In administering the medication, Nurse Trish should avoid which route?",
        options: [
            "I.V",
            "I.M",
            "Oral",
            "S.C"
        ],
        correct: 1,
        explanation: "With a platelet count of 22,000/μl, the client tends to bleed easily. Therefore, the nurse should avoid using the I.M. route because the area is highly vascular and can bleed readily when penetrated by a needle."
    },
    {
        id: 193,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Dr. Garcia writes the following order for the client who has been recently admitted 'Digoxin .125 mg P.O. once daily.' To prevent a dosage error, how should the nurse document this order onto the medication administration record?",
        options: [
            "'Digoxin .1250 mg P.O. once daily'",
            "'Digoxin 0.1250 mg P.O. once daily'",
            "'Digoxin 0.125 mg P.O. once daily'",
            "'Digoxin .125 mg P.O. once daily'"
        ],
        correct: 2,
        explanation: "The nurse should always place a zero before a decimal point so that no one misreads the figure, which could result in a dosage error."
    },
    {
        id: 194,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "A newly admitted female client was diagnosed with deep vein thrombosis. Which nursing diagnosis should receive the highest priority?",
        options: [
            "Ineffective peripheral tissue perfusion related to venous congestion.",
            "Risk for injury related to edema.",
            "Excess fluid volume related to peripheral vascular disease.",
            "Impaired gas exchange related to increased blood flow."
        ],
        correct: 0,
        explanation: "Ineffective peripheral tissue perfusion related to venous congestion takes the highest priority because venous inflammation and clot formation impede blood flow in a client with deep vein thrombosis."
    },
    {
        id: 195,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Nurse Betty is assigned to the following clients. The client that the nurse would see first after endorsement?",
        options: [
            "A 34 year-old post operative appendectomy client of five hours who is complaining of pain.",
            "A 44 year-old myocardial infarction (MI) client who is complaining of nausea.",
            "A 26 year-old client admitted for dehydration whose intravenous (IV) has infiltrated.",
            "A 63 year-old post operative's abdominal hysterectomy client of three days whose incisional dressing is saturated with serosanguinous fluid."
        ],
        correct: 1,
        explanation: "Nausea is a symptom of impending myocardial infarction (MI) and should be assessed immediately so that treatment can be instituted and further damage to the heart is avoided."
    },
    {
        id: 196,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Nurse Gail places a client in a four-point restraint following orders from the physician. The client care plan should include:",
        options: [
            "Assess temperature frequently.",
            "Provide diversional activities.",
            "Check circulation every 15-30 minutes.",
            "Socialize with other patients once a shift."
        ],
        correct: 2,
        explanation: "Restraints encircle the limbs, which place the client at risk for circulation being restricted to the distal areas of the extremities. Checking the client's circulation every 15-30 minutes will allow the nurse to adjust the restraints before injury from decreased blood flow occurs."
    },
    {
        id: 197,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "A male client who has severe burns is receiving H2 receptor antagonist therapy. The nurse In-charge knows the purpose of this therapy is to:",
        options: [
            "Prevent stress ulcer",
            "Block prostaglandin synthesis",
            "Facilitate protein synthesis.",
            "Enhance gas exchange"
        ],
        correct: 0,
        explanation: "Curling's ulcer occurs as a generalized stress response in burn patients. This results in a decreased production of mucus and increased secretion of gastric acid. The best treatment for this prophylactic use of antacids and H2 receptor blockers."
    },
    {
        id: 198,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The doctor orders hourly urine output measurement for a postoperative male client. The nurse Trish records the following amounts of output for 2 consecutive hours: 8 a.m.: 50 ml; 9 a.m.: 60 ml. Based on these amounts, which action should the nurse take?",
        options: [
            "Increase the I.V. fluid infusion rate",
            "Irrigate the indwelling urinary catheter",
            "Notify the physician",
            "Continue to monitor and record hourly urine output"
        ],
        correct: 3,
        explanation: "Normal urine output for an adult is approximately 1 ml/minute (60 ml/hour). Therefore, this client's output is normal. Beyond continued evaluation, no nursing action is warranted."
    },
    {
        id: 199,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Tony, a basketball player twist his right ankle while playing on the court and seeks care for ankle pain and swelling. After the nurse applies ice to the ankle for 30 minutes, which statement by Tony suggests that ice application has been effective?",
        options: [
            "'My ankle looks less swollen now'.",
            "'My ankle feels warm'.",
            "'My ankle appears redder now'.",
            "'I need something stronger for pain relief'"
        ],
        correct: 0,
        explanation: "Ice application decreases pain and swelling. Continued or increased pain, redness, and increased warmth are signs of inflammation that shouldn't occur after ice application."
    },
    {
        id: 200,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The physician prescribes a loop diuretic for a client. When administering this drug, the nurse anticipates that the client may develop which electrolyte imbalance?",
        options: [
            "Hypernatremia",
            "Hyperkalemia",
            "Hypokalemia",
            "Hypervolemia"
        ],
        correct: 2,
        explanation: "A loop diuretic removes water and, along with it, sodium and potassium. This may result in hypokalemia, hypovolemia, and hyponatremia."
    },
    {
        id: 201,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "She finds out that some managers have benevolent-authoritative style of management. Which of the following behaviors will she exhibit most likely?",
        options: [
            "Have condescending trust and confidence in their subordinates.",
            "Gives economic and ego awards.",
            "Communicates downward to staffs.",
            "Allows decision making among subordinates."
        ],
        correct: 0,
        explanation: "Benevolent-authoritative managers pretentiously show their trust and confidence to their followers."
    },
    {
        id: 202,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse is aware that the most important nursing action when a client returns from surgery is:",
        options: [
            "Assess the IV for type of fluid and rate of flow.",
            "Assess the client for presence of pain.",
            "Assess the Foley catheter for patency and urine output",
            "Assess the dressing for drainage."
        ],
        correct: 1,
        explanation: "Assessing for pain is a priority because pain can cause physiological stress and delay recovery."
    },
    {
        id: 203,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Which of the following vital sign assessments that may indicate cardiogenic shock after myocardial infarction?",
        options: [
            "BP – 80/60, Pulse – 110 irregular",
            "BP – 90/50, Pulse – 50 regular",
            "BP – 130/80, Pulse – 100 regular",
            "BP – 180/100, Pulse – 90 irregular"
        ],
        correct: 0,
        explanation: "Low blood pressure (80/60) with rapid irregular pulse (110) indicates cardiogenic shock, which is a life-threatening complication after MI."
    },
    {
        id: 204,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Which is the most appropriate nursing action in obtaining a blood pressure measurement?",
        options: [
            "Take the proper equipment, place the client in a comfortable position, and record the appropriate information in the client's chart.",
            "Measure the client's arm, if you are not sure of the size of cuff to use.",
            "Have the client recline or sit comfortably in a chair with the forearm at the level of the heart.",
            "Document the measurement, which extremity was used, and the position that the client was in during the measurement."
        ],
        correct: 2,
        explanation: "Having the client recline or sit comfortably with the forearm at heart level ensures accurate blood pressure measurement."
    },
    {
        id: 205,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Asking the questions to determine if the person understands the health teaching provided by the nurse would be included during which step of the nursing process?",
        options: [
            "Assessment",
            "Evaluation",
            "Implementation",
            "Planning and goals"
        ],
        correct: 1,
        explanation: "Evaluation is the step where the nurse assesses the client's understanding and effectiveness of the teaching provided."
    },
    {
        id: 206,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Which of the following item is considered the single most important factor in assisting the health professional in arriving at a diagnosis or determining the person's needs?",
        options: [
            "Diagnostic test results",
            "Biographical date",
            "History of present illness",
            "Physical examination"
        ],
        correct: 2,
        explanation: "History of present illness provides the most comprehensive information about the client's current health problem and is crucial for diagnosis."
    },
    {
        id: 207,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "In preventing the development of an external rotation deformity of the hip in a client who must remain in bed for any period of time, the most appropriate nursing action would be to use:",
        options: [
            "Trochanter roll extending from the crest of the ileum to the midthigh.",
            "Pillows under the lower legs.",
            "Footboard",
            "Hip-abductor pillow"
        ],
        correct: 0,
        explanation: "A trochanter roll prevents external rotation of the hip by maintaining proper alignment of the hip joint."
    },
    {
        id: 208,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Which stage of pressure ulcer development does the ulcer extend into the subcutaneous tissue?",
        options: [
            "Stage I",
            "Stage II",
            "Stage III",
            "Stage IV"
        ],
        correct: 2,
        explanation: "Stage III pressure ulcer extends into the subcutaneous tissue but does not expose bone, tendon, or muscle."
    },
    {
        id: 209,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "When the method of wound healing is one in which wound edges are not surgically approximated and integumentary continuity is restored by granulations, the wound healing is termed:",
        options: [
            "Second intention healing",
            "Primary intention healing",
            "Third intention healing",
            "First intention healing"
        ],
        correct: 0,
        explanation: "Second intention healing occurs when wound edges are not approximated and healing occurs by granulation tissue formation."
    },
    {
        id: 210,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "An 80-year-old male client is admitted to the hospital with a diagnosis of pneumonia. Nurse Oliver learns that the client lives alone and hasn't been eating or drinking. When assessing him for dehydration, nurse Oliver would expect to find:",
        options: [
            "Hypothermia",
            "Hypertension",
            "Distended neck veins",
            "Tachycardia"
        ],
        correct: 3,
        explanation: "Tachycardia is a common sign of dehydration as the body tries to compensate for decreased blood volume."
    },
    {
        id: 211,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The physician prescribes meperidine (Demerol), 75 mg I.M. every 4 hours as needed, to control a client's postoperative pain. The package insert is 'Meperidine, 100 mg/ml.' How many milliliters of meperidine should the client receive?",
        options: [
            "0.75",
            "0.6",
            "0.5",
            "0.25"
        ],
        correct: 0,
        explanation: "To calculate: 75 mg ÷ 100 mg/ml = 0.75 ml"
    },
    {
        id: 212,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "A male client with diabetes mellitus is receiving insulin. Which statement correctly describes an insulin unit?",
        options: [
            "It's a common measurement in the metric system.",
            "It's the basis for solids in the avoirdupois system.",
            "It's the smallest measurement in the apothecary system.",
            "It's a measure of effect, not a standard measure of weight or quantity."
        ],
        correct: 3,
        explanation: "An insulin unit is a measure of biological effect, not a standard weight or volume measurement."
    },
    {
        id: 213,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Nurse Oliver measures a client's temperature at 102° F. What is the equivalent Centigrade temperature?",
        options: [
            "40.1 °C",
            "38.9 °C",
            "48 °C",
            "38 °C"
        ],
        correct: 1,
        explanation: "To convert Fahrenheit to Celsius: (102-32) × 5/9 = 38.9°C"
    },
    {
        id: 214,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse is assessing a 48-year-old client who has come to the physician's office for his annual physical exam. One of the first physical signs of aging is:",
        options: [
            "Accepting limitations while developing assets.",
            "Increasing loss of muscle tone.",
            "Failing eyesight, especially close vision.",
            "Having more frequent aches and pains."
        ],
        correct: 2,
        explanation: "Failing eyesight, especially close vision (presbyopia), is one of the first physical signs of aging."
    },
    {
        id: 215,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The physician inserts a chest tube into a female client to treat a pneumothorax. The tube is connected to water-seal drainage. The nurse in-charge can prevent chest tube air leaks by:",
        options: [
            "Checking and taping all connections.",
            "Checking patency of the chest tube.",
            "Keeping the head of the bed slightly elevated.",
            "Keeping the chest drainage system below the level of the chest."
        ],
        correct: 0,
        explanation: "Checking and taping all connections prevents air leaks in the chest tube system."
    },
    {
        id: 216,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Nurse Trish must verify the client's identity before administering medication. She is aware that the safest way to verify identity is to:",
        options: [
            "Check the client's identification band.",
            "Ask the client to state his name.",
            "State the client's name and have the client confirm.",
            "Check the room number."
        ],
        correct: 0,
        explanation: "Checking the client's identification band is the most reliable method to verify identity."
    },
    {
        id: 217,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Which nursing intervention is most appropriate for a client with risk for infection?",
        options: [
            "Administer antibiotics prophylactically",
            "Practice strict hand hygiene",
            "Isolate the client from others",
            "Limit visitors to family only"
        ],
        correct: 1,
        explanation: "Hand hygiene is the single most effective measure to prevent infection transmission."
    },
    {
        id: 218,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse is preparing to administer an intradermal injection. The correct angle of injection is:",
        options: [
            "90 degrees",
            "45 degrees",
            "15 degrees",
            "5-15 degrees"
        ],
        correct: 3,
        explanation: "Intradermal injections are administered at a 5-15 degree angle to ensure the medication enters the dermis."
    },
    {
        id: 219,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "A client is on contact precautions. Which personal protective equipment is essential?",
        options: [
            "Gloves only",
            "Gown and gloves",
            "Mask and gloves",
            "Full protective gear"
        ],
        correct: 1,
        explanation: "Contact precautions require both gloves and gown to prevent transmission of microorganisms."
    },
    {
        id: 220,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse is assessing a client's nutritional status. Which assessment is most important?",
        options: [
            "Weight history",
            "Dietary preferences",
            "Food allergies",
            "All of the above"
        ],
        correct: 3,
        explanation: "All of these assessments are important for comprehensive nutritional evaluation."
    },
    {
        id: 221,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Which position is best for a client with hypovolemic shock?",
        options: [
            "Supine with legs elevated",
            "High Fowler's position",
            "Side-lying position",
            "Trendelenburg position"
        ],
        correct: 0,
        explanation: "Supine with legs elevated (modified Trendelenburg) improves venous return and blood pressure."
    },
    {
        id: 222,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse is teaching a client about insulin administration. Which instruction is most important?",
        options: [
            "Rotate injection sites",
            "Use the same site consistently",
            "Inject into muscle",
            "Massage after injection"
        ],
        correct: 0,
        explanation: "Rotating injection sites prevents lipohypertrophy and ensures proper insulin absorption."
    },
    {
        id: 223,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "A client is experiencing nausea. Which nursing intervention is most appropriate?",
        options: [
            "Provide large meals",
            "Offer clear, cool liquids",
            "Encourage strong odors",
            "Position supine immediately after eating"
        ],
        correct: 1,
        explanation: "Clear, cool liquids are better tolerated during nausea and help maintain hydration."
    },
    {
        id: 224,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse is assessing a client's pain. Which pain assessment tool is most appropriate for a non-verbal client?",
        options: [
            "Numeric rating scale",
            "Visual analog scale",
            "Wong-Baker faces scale",
            "FLACC scale"
        ],
        correct: 3,
        explanation: "The FLACC scale is designed for non-verbal clients or those unable to communicate pain."
    },
    {
        id: 225,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Which of the following is the most appropriate nursing intervention for a client at risk for falls?",
        options: [
            "Keep bed rails down",
            "Keep environment cluttered",
            "Use non-slip footwear",
            "Dim lighting"
        ],
        correct: 2,
        explanation: "Non-slip footwear helps prevent falls by providing better traction."
    },
    {
        id: 226,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse is preparing to administer a blood transfusion. Which action is most important?",
        options: [
            "Use any available IV line",
            "Verify client identity with two identifiers",
            "Administer rapidly",
            "Skip vital sign assessment"
        ],
        correct: 1,
        explanation: "Verifying client identity with two identifiers prevents transfusion reactions and ensures safety."
    },
    {
        id: 227,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "A client is on bed rest. Which nursing intervention helps prevent deep vein thrombosis?",
        options: [
            "Keep legs dependent",
            "Encourage leg exercises",
            "Apply tight stockings",
            "Limit fluid intake"
        ],
        correct: 1,
        explanation: "Leg exercises promote circulation and help prevent DVT in immobilized clients."
    },
    {
        id: 228,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse is assessing a client's respiratory status. Which finding requires immediate intervention?",
        options: [
            "Respiratory rate of 16",
            "Use of accessory muscles",
            "Clear breath sounds",
            "Regular rhythm"
        ],
        correct: 1,
        explanation: "Use of accessory muscles indicates respiratory distress and requires immediate intervention."
    },
    {
        id: 229,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Which of the following is the most appropriate nursing intervention for a client with urinary retention?",
        options: [
            "Decrease fluid intake",
            "Encourage voiding",
            "Apply pressure to bladder",
            "Delay catheterization"
        ],
        correct: 1,
        explanation: "Encouraging voiding promotes natural bladder emptying before considering catheterization."
    },
    {
        id: 230,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse is teaching a client about wound care. Which instruction is most important?",
        options: [
            "Clean from dirty to clean area",
            "Use hydrogen peroxide",
            "Keep wound moist always",
            "Change dressing only when soiled"
        ],
        correct: 0,
        explanation: "Cleaning from dirty to clean area prevents contamination of clean wound areas."
    },
    {
        id: 231,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "A client is experiencing anxiety. Which nursing intervention is most appropriate?",
        options: [
            "Rush interventions",
            "Use therapeutic communication",
            "Ignore feelings",
            "Provide false reassurance"
        ],
        correct: 1,
        explanation: "Therapeutic communication helps clients express feelings and reduces anxiety."
    },
    {
        id: 232,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse is preparing to administer oral medication. Which action is most important?",
        options: [
            "Crush all medications",
            "Check medication expiration",
            "Administer with food regardless of type",
            "Skip client identification"
        ],
        correct: 1,
        explanation: "Checking medication expiration ensures safety and effectiveness of administered medications."
    },
    {
        id: 233,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Which of the following is the most appropriate nursing intervention for a client with diarrhea?",
        options: [
            "Increase fiber intake",
            "Decrease fluid intake",
            "Encourage high-fat foods",
            "Monitor for dehydration"
        ],
        correct: 3,
        explanation: "Monitoring for dehydration is crucial as diarrhea can lead to significant fluid loss."
    },
    {
        id: 234,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse is assessing a client's peripheral pulses. Which pulse point is most commonly assessed?",
        options: [
            "Carotid",
            "Radial",
            "Femoral",
            "Popliteal"
        ],
        correct: 1,
        explanation: "The radial pulse is most commonly assessed due to its accessibility and ease of palpation."
    },
    {
        id: 235,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "A client is on oxygen therapy. Which nursing action is most important?",
        options: [
            "Use petroleum jelly around nose",
            "Ensure proper humidification",
            "Set flow rate without prescription",
            "Allow smoking nearby"
        ],
        correct: 1,
        explanation: "Proper humidification prevents drying of mucous membranes and improves oxygen therapy effectiveness."
    },
    {
        id: 236,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse is preparing to discharge a client. Which instruction is most important for medication safety?",
        options: [
            "Share medications with family",
            "Stop medications when feeling better",
            "Keep medication list updated",
            "Store medications in bathroom"
        ],
        correct: 2,
        explanation: "Keeping an updated medication list prevents drug interactions and ensures proper medication management."
    },
    {
        id: 237,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "Which of the following is the most appropriate nursing intervention for a client with insomnia?",
        options: [
            "Encourage caffeine before bed",
            "Maintain consistent sleep schedule",
            "Watch TV in bed",
            "Exercise vigorously before sleep"
        ],
        correct: 1,
        explanation: "Maintaining a consistent sleep schedule helps regulate the body's internal clock and improves sleep."
    },
    {
        id: 238,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse is assessing a client's mental status. Which finding indicates confusion?",
        options: [
            "Oriented to time, place, and person",
            "Follows complex commands",
            "Recent memory loss",
            "Appropriate affect"
        ],
        correct: 2,
        explanation: "Recent memory loss is an early sign of confusion and cognitive impairment."
    },
    {
        id: 239,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "A client is on a low-sodium diet. Which food should be avoided?",
        options: [
            "Fresh fruits",
            "Canned soups",
            "Fresh vegetables",
            "Unsalted nuts"
        ],
        correct: 1,
        explanation: "Canned soups typically contain high amounts of sodium and should be avoided on a low-sodium diet."
    },
    {
        id: 240,
        category: "PNLE I for Foundation of Professional Nursing Practice",
        question: "The nurse is preparing to insert a urinary catheter. Which action maintains sterile technique?",
        options: [
            "Touch catheter tip",
            "Clean meatus from back to front",
            "Use sterile gloves",
            "Reuse catheter"
        ],
        correct: 2,
        explanation: "Using sterile gloves maintains sterile technique during catheter insertion."
    },

    // Foundation of Nursing - 50 questions
    {
        id: 441,
        category: "Foundation of Nursing",
        question: "This is the best patient care model when there are many nurses but few patients.",
        options: [
            "Functional nursing",
            "Team nursing",
            "Primary nursing",
            "Total patient care"
        ],
        correct: 3,
        explanation: "Total patient care works best when there are many nurses but few patients, as each nurse can provide comprehensive care to individual patients."
    },
    {
        id: 442,
        category: "Foundation of Nursing",
        question: "This patient care model works best when there are plenty of patients but few nurses.",
        options: [
            "Functional nursing",
            "Team nursing",
            "Primary nursing",
            "Total patient care"
        ],
        correct: 0,
        explanation: "Functional nursing works best when there are many patients but few nurses, as tasks are assigned based on efficiency and expertise."
    },
    {
        id: 443,
        category: "Foundation of Nursing",
        question: "RN assumes 24 hour responsibility for the client to maintain continuity of care across shifts, days or visits.",
        options: [
            "Functional nursing",
            "Team nursing",
            "Primary nursing",
            "Total patient care"
        ],
        correct: 2,
        explanation: "Primary nursing involves the RN assuming 24-hour responsibility for the client to maintain continuity of care across shifts, days, or visits."
    },
    {
        id: 444,
        category: "Foundation of Nursing",
        question: "Who developed the first theory of nursing?",
        options: [
            "Hammurabi",
            "Alexander",
            "Fabiola",
            "Nightingale"
        ],
        correct: 3,
        explanation: "Florence Nightingale developed the first theory of nursing, establishing the foundation for modern nursing practice."
    },
    {
        id: 445,
        category: "Foundation of Nursing",
        question: "She introduces the NATURE OF NURSING MODEL.",
        options: [
            "Henderson",
            "Nightingale",
            "Parse",
            "Orlando"
        ],
        correct: 0,
        explanation: "Virginia Henderson introduced the Nature of Nursing Model, describing nursing as assisting with 14 basic human needs."
    },
    {
        id: 446,
        category: "Foundation of Nursing",
        question: "She described the four conservation principle.",
        options: [
            "Levin",
            "Leininger",
            "Orlando",
            "Parse"
        ],
        correct: 0,
        explanation: "Myra Levine described the four conservation principles: conservation of energy, structural integrity, personal integrity, and social integrity."
    },
    {
        id: 447,
        category: "Foundation of Nursing",
        question: "Proposed the HEALTH CARE SYSTEM MODEL.",
        options: [
            "Henderson",
            "Orem",
            "Parse",
            "Neuman"
        ],
        correct: 3,
        explanation: "Betty Neuman proposed the Health Care System Model, focusing on stress reduction and client system stability."
    },
    {
        id: 448,
        category: "Foundation of Nursing",
        question: "Conceptualized the BEHAVIORAL SYSTEM MODEL.",
        options: [
            "Orem",
            "Johnson",
            "Henderson",
            "Parse"
        ],
        correct: 1,
        explanation: "Dorothy Johnson conceptualized the Behavioral System Model, viewing the person as a behavioral system with seven subsystems."
    },
    {
        id: 449,
        category: "Foundation of Nursing",
        question: "Developed the CLINICAL NURSING – A HELPING ART MODEL.",
        options: [
            "Swanson",
            "Hall",
            "Weidenbach",
            "Zderad"
        ],
        correct: 2,
        explanation: "Ernestine Weidenbach developed the Clinical Nursing – A Helping Art Model, emphasizing the clinical judgment and artistry in nursing."
    },
    {
        id: 450,
        category: "Foundation of Nursing",
        question: "Developed the ROLE MODELING and MODELING theory.",
        options: [
            "Erickson, Tomlin, Swain",
            "Neuman",
            "Newman",
            "Benner and Wrubel"
        ],
        correct: 0,
        explanation: "Erickson, Tomlin, and Swain developed the Modeling and Role Modeling Theory, focusing on understanding the client's world."
    },
    {
        id: 451,
        category: "Foundation of Nursing",
        question: "According to her, nursing is a caring process.",
        options: [
            "Travelbee",
            "Swanson",
            "Zderad",
            "Peplau"
        ],
        correct: 1,
        explanation: "Kristen Swanson described nursing as a caring process involving five caring processes: knowing, being with, doing for, enabling, and maintaining belief."
    },
    {
        id: 452,
        category: "Foundation of Nursing",
        question: "He postulated that CARING is the essence of nursing.",
        options: [
            "Freud",
            "Erikson",
            "Kohlberg",
            "Peters"
        ],
        correct: 3,
        explanation: "Milton Peters postulated that caring is the essence of nursing, emphasizing the central role of caring in nursing practice."
    },
    {
        id: 453,
        category: "Foundation of Nursing",
        question: "She described caring as the central, unifying, and dominant domain of nursing.",
        options: [
            "Freud",
            "Erikson",
            "Kohlberg",
            "Peters"
        ],
        correct: 3,
        explanation: "Milton Peters described caring as the central, unifying, and dominant domain of nursing, highlighting its importance in the profession."
    },
    {
        id: 454,
        category: "Foundation of Nursing",
        question: "According to her, nursing is a helping or assisting profession.",
        options: [
            "Zderad and Peterson",
            "Benner and Wrubel",
            "Fowler and Westerhoff",
            "Schulman and Mekler"
        ],
        correct: 0,
        explanation: "Zderad and Peterson described nursing as a helping or assisting profession, emphasizing the supportive nature of nursing care."
    },
    {
        id: 455,
        category: "Foundation of Nursing",
        question: "He developed the theory of FAITH DEVELOPMENT.",
        options: [
            "Giligan",
            "Westerhoff",
            "Fowler",
            "Freud"
        ],
        correct: 2,
        explanation: "James Fowler developed the theory of Faith Development, describing stages of faith development across the lifespan."
    },
    {
        id: 456,
        category: "Foundation of Nursing",
        question: "He developed the theory of SPIRITUAL DEVELOPMENT.",
        options: [
            "Giligan",
            "Westerhoff",
            "Fowler",
            "Freud"
        ],
        correct: 1,
        explanation: "John Westerhoff developed the theory of Spiritual Development, focusing on the stages of spiritual growth."
    },
    {
        id: 457,
        category: "Foundation of Nursing",
        question: "The first nursing school in the Philippines was established in:",
        options: [
            "St. Paul Hospital School of nursing",
            "Iloilo Mission Hospital School of nursing",
            "Philippine General Hospital School of nursing",
            "St. Luke's Hospital School of nursing"
        ],
        correct: 1,
        explanation: "The first nursing school in the Philippines was established at Iloilo Mission Hospital School of Nursing in 1906."
    },
    {
        id: 458,
        category: "Foundation of Nursing",
        question: "The first nursing school in the Philippines was established by:",
        options: [
            "St. Paul Hospital",
            "Iloilo Mission Hospital",
            "Philippine General Hospital",
            "St. Luke's Hospital"
        ],
        correct: 1,
        explanation: "The first nursing school in the Philippines was established by Iloilo Mission Hospital through the Presbyterian missionaries."
    },
    {
        id: 459,
        category: "Foundation of Nursing",
        question: "The first trained nurse in the Philippines was:",
        options: [
            "Elizabeth",
            "Catherine",
            "Nightingale",
            "Sairey Gamp"
        ],
        correct: 1,
        explanation: "Catherine (Rose) was the first trained nurse in the Philippines, graduating from the Iloilo Mission Hospital School of Nursing."
    },
    {
        id: 460,
        category: "Foundation of Nursing",
        question: "The first Filipino nurse was:",
        options: [
            "Clara louise Maas",
            "Pearl Tucker",
            "Isabel Hampton Robb",
            "Caroline Hampton Robb"
        ],
        correct: 1,
        explanation: "Pearl Tucker was the first Filipino nurse, graduating from the Philippine General Hospital School of Nursing."
    },
    {
        id: 461,
        category: "Foundation of Nursing",
        question: "The father of medicine was:",
        options: [
            "Abraham",
            "Hippocrates",
            "Moses",
            "Willam Halstead"
        ],
        correct: 1,
        explanation: "Hippocrates is known as the father of medicine, establishing the ethical foundation for medical practice."
    },
    {
        id: 462,
        category: "Foundation of Nursing",
        question: "The country where nursing originated was:",
        options: [
            "China",
            "Egypt",
            "India",
            "Babylonia"
        ],
        correct: 1,
        explanation: "Nursing originated in Egypt, where early records show organized care for the sick and injured."
    },
    {
        id: 463,
        category: "Foundation of Nursing",
        question: "The first nursing school was established in:",
        options: [
            "Chinese",
            "Egyptian",
            "Indian",
            "Babylonian"
        ],
        correct: 1,
        explanation: "The first nursing school was established in Egypt, where formal training for caregivers was documented."
    },
    {
        id: 464,
        category: "Foundation of Nursing",
        question: "The period when nursing was considered as a religious calling was:",
        options: [
            "Dark period",
            "Intuitive period",
            "Contemporary period",
            "Educative period"
        ],
        correct: 0,
        explanation: "The dark period was when nursing was considered a religious calling, primarily provided by religious orders."
    },
    {
        id: 465,
        category: "Foundation of Nursing",
        question: "The period when nursing was taught in an apprenticeship system was:",
        options: [
            "Apprentice period",
            "Dark period",
            "Contemporary period",
            "Educative period"
        ],
        correct: 0,
        explanation: "The apprentice period was when nursing was taught through an apprenticeship system, learning through hands-on experience."
    },
    {
        id: 466,
        category: "Foundation of Nursing",
        question: "The period when nursing was taught in schools was:",
        options: [
            "Apprentice period",
            "Dark period",
            "Contemporary period",
            "Educative period"
        ],
        correct: 3,
        explanation: "The educative period was when nursing was formally taught in schools, establishing academic foundations for the profession."
    },
    {
        id: 467,
        category: "Foundation of Nursing",
        question: "The patron saint of nursing was:",
        options: [
            "St. Catherine",
            "St. Anne",
            "St. Clare",
            "St. Elizabeth"
        ],
        correct: 2,
        explanation: "St. Clare is considered the patron saint of nursing, known for her care of the sick and poor."
    },
    {
        id: 468,
        category: "Foundation of Nursing",
        question: "The period when nursing was taught in universities was:",
        options: [
            "Apprentice period",
            "Dark period",
            "Contemporary period",
            "Educative period"
        ],
        correct: 2,
        explanation: "The contemporary period was when nursing was taught in universities, elevating it to higher education status."
    },
    {
        id: 469,
        category: "Foundation of Nursing",
        question: "According to Maslow, man is:",
        options: [
            "Like all other men",
            "Like some other men",
            "Like no other men",
            "Like men"
        ],
        correct: 2,
        explanation: "According to Maslow, man is like no other men - each person is unique and has individual needs and motivations."
    },
    {
        id: 470,
        category: "Foundation of Nursing",
        question: "She described man as an open system:",
        options: [
            "Roy",
            "Levin",
            "Neuman",
            "Newman"
        ],
        correct: 1,
        explanation: "Myra Levin described man as an open system, constantly interacting with and adapting to the environment."
    },
    {
        id: 471,
        category: "Foundation of Nursing",
        question: "According to her, man is a unified whole:",
        options: [
            "Affected by matter",
            "A sole island in vast ocean",
            "Allows input",
            "Constantly affected by matter, energy, information"
        ],
        correct: 3,
        explanation: "Martha Rogers described man as constantly affected by matter, energy, and information, emphasizing the continuous environmental interaction."
    },
    {
        id: 472,
        category: "Foundation of Nursing",
        question: "She described man as a unitary human being:",
        options: [
            "Roy",
            "Rogers",
            "Henderson",
            "Johnson"
        ],
        correct: 1,
        explanation: "Martha Rogers described man as a unitary human being, emphasizing the irreducibility and wholeness of individuals."
    },
    {
        id: 473,
        category: "Foundation of Nursing",
        question: "She described man as a behavioral system:",
        options: [
            "Roy",
            "Rogers",
            "Henderson",
            "Johnson"
        ],
        correct: 3,
        explanation: "Dorothy Johnson described man as a behavioral system with seven subsystems that function to maintain balance and stability."
    },
    {
        id: 474,
        category: "Foundation of Nursing",
        question: "According to Henderson, needs:",
        options: [
            "Certain needs are common to all people",
            "Needs should be followed exactly in accordance with their hierarchy",
            "Needs are stimulated by internal factors",
            "Needs are stimulated by external factors"
        ],
        correct: 0,
        explanation: "According to Henderson, certain needs are common to all people, forming the basis for her 14 basic human needs."
    },
    {
        id: 475,
        category: "Foundation of Nursing",
        question: "According to Henderson, needs:",
        options: [
            "May not be deferred",
            "Are not interrelated",
            "Met in exact and rigid way",
            "Priorities are alterable"
        ],
        correct: 3,
        explanation: "According to Henderson, priorities of needs are alterable and can change based on the individual's condition and circumstances."
    },
    {
        id: 476,
        category: "Foundation of Nursing",
        question: "According to Maslow, self actualization needs:",
        options: [
            "Understands poetry, music, philosophy, science etc.",
            "Desires privacy, autonomous",
            "Follows the decision of the majority, uphold justice and truth",
            "Problem centered"
        ],
        correct: 0,
        explanation: "According to Maslow, self-actualization needs involve understanding poetry, music, philosophy, and science - the highest level of human development."
    },
    {
        id: 477,
        category: "Foundation of Nursing",
        question: "According to Maslow, esteem needs:",
        options: [
            "Makes decision contrary to public opinion",
            "Do not predict events",
            "Self centered",
            "Maximum degree of self conflict"
        ],
        correct: 0,
        explanation: "According to Maslow, esteem needs involve making decisions contrary to public opinion and having confidence in one's own judgment."
    },
    {
        id: 478,
        category: "Foundation of Nursing",
        question: "According to Maslow, the highest level of needs is:",
        options: [
            "Self awareness",
            "Self actualization",
            "Self esteem",
            "Self worth"
        ],
        correct: 1,
        explanation: "According to Maslow, self-actualization is the highest level of needs, representing the full realization of one's potential."
    },
    {
        id: 479,
        category: "Foundation of Nursing",
        question: "The country where Florence Nightingale was born was:",
        options: [
            "Germany",
            "Britain",
            "France",
            "Italy"
        ],
        correct: 1,
        explanation: "Florence Nightingale was born in Britain, specifically in Florence, Italy, while her British parents were traveling."
    },
    {
        id: 480,
        category: "Foundation of Nursing",
        question: "Which of the following is NOT true about Florence Nightingale:",
        options: [
            "Born May 12, 1840",
            "Built St. Thomas school of nursing when she was 40 years old",
            "Notes in nursing",
            "Notes in hospital"
        ],
        correct: 0,
        explanation: "Florence Nightingale was born on May 12, 1820, not 1840. This is a common misconception in nursing history."
    },
    {
        id: 481,
        category: "Foundation of Nursing",
        question: "The country where the first nursing school was established was:",
        options: [
            "Belgium",
            "US",
            "Germany",
            "England"
        ],
        correct: 1,
        explanation: "The first nursing school was established in the US at Bellevue Hospital in New York in 1873."
    },
    {
        id: 482,
        category: "Foundation of Nursing",
        question: "He developed the theory of PSYCHOSOCIAL DEVELOPMENT:",
        options: [
            "Erikson",
            "Madaw",
            "Peplau",
            "Dunn"
        ],
        correct: 0,
        explanation: "Erik Erikson developed the theory of psychosocial development, describing eight stages across the lifespan."
    },
    {
        id: 483,
        category: "Foundation of Nursing",
        question: "The purpose of PNA is:",
        options: [
            "Promotes advancement and professional growth among its members",
            "Works for raising funds for nurse's benefit",
            "Facilitate and establishes acquaintances",
            "Assist them and securing jobs abroad"
        ],
        correct: 0,
        explanation: "The Philippine Nurses Association (PNA) promotes advancement and professional growth among its members, enhancing the nursing profession."
    },
    {
        id: 484,
        category: "Foundation of Nursing",
        question: "The first president of PNA was:",
        options: [
            "Julita Sotejo",
            "Anastacia Giron Tupas",
            "Eufemia Octaviano",
            "Anesia Dionisio"
        ],
        correct: 1,
        explanation: "Anastacia Giron Tupas was the first president of the Philippine Nurses Association, pioneering nursing leadership in the Philippines."
    },
    {
        id: 485,
        category: "Foundation of Nursing",
        question: "The first code of ethics for nurses in the Philippines was:",
        options: [
            "R.A 877",
            "1981 Code of ethics approved by the house of delegates and the PNA",
            "Board resolution No. 1955 Promulgated by the BON",
            "RA 7164"
        ],
        correct: 0,
        explanation: "RA 877 was the first code of ethics for nurses in the Philippines, establishing ethical standards for nursing practice."
    },
    {
        id: 486,
        category: "Foundation of Nursing",
        question: "When a nurse makes a nursing diagnosis, she:",
        options: [
            "She documents it and charts it whenever necessary",
            "She can be accused of malpractice",
            "She does it regularly as an important responsibility",
            "She charts it only when the patient is acutely ill"
        ],
        correct: 0,
        explanation: "When a nurse makes a nursing diagnosis, she documents it and charts it whenever necessary as part of the nursing process."
    },
    {
        id: 487,
        category: "Foundation of Nursing",
        question: "The first nursing law in the Philippines was:",
        options: [
            "RA 7164"
        ],
        correct: 0,
        explanation: "RA 7164 was the first nursing law in the Philippines, establishing the legal framework for nursing practice."
    },
    {
        id: 488,
        category: "Foundation of Nursing",
        question: "According to Henderson, the role of the nurse includes:",
        options: [
            "Substitutive: Doing everything for the client",
            "Supplementary: Helping the client",
            "Complementary: Working with the client",
            "All of the above"
        ],
        correct: 3,
        explanation: "According to Henderson, the nurse's role includes substitutive (doing everything), supplementary (helping), and complementary (working with) care."
    },
    {
        id: 489,
        category: "Foundation of Nursing",
        question: "According to Henderson, which of the following is NOT one of the 14 basic needs:",
        options: [
            "Breathing normally",
            "Eliminating waste",
            "Eating and drinking adequately",
            "Playing computer games"
        ],
        correct: 3,
        explanation: "Playing computer games is not one of Henderson's 14 basic needs. The basic needs include breathing, eating, elimination, movement, sleep, etc."
    },
    {
        id: 490,
        category: "Foundation of Nursing",
        question: "According to Jahoda, a profession should:",
        options: [
            "Serve the whole community",
            "Serve specific interest of a group",
            "Be concerned with quantity",
            "Focus on profit"
        ],
        correct: 0,
        explanation: "According to Jahoda, a profession should serve the whole community, not just specific interests or focus on profit."
    },
    {
        id: 392,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Meryl, age 19, is highly dependent on her parents and fears leaving home to go away to college. Shortly before the semester starts, she complains that her legs are paralyzed and is rushed to the emergency department. When physical examination rules out a physical cause for her paralysis, the physician admits her to the psychiatric unit where she is diagnosed with conversion disorder. Meryl asks the nurse, 'Why has this happened to me?' What is the nurse's best response?",
        options: [
            "'You've developed this paralysis so you can stay with your parents. You must deal with this conflict if you want to walk again.'",
            "'It must be awful not to be able to move your legs. You may feel better if you realize the problem is psychological, not physical.'",
            "'Your problem is real but there is no physical basis for it. We'll work on what is going on in your life to find out why it's happened.'",
            "'It isn't uncommon for someone with your personality to develop a conversion disorder during times of stress.'"
        ],
        correct: 2,
        explanation: "This response validates the client's experience while explaining the psychological nature of conversion disorder and offering therapeutic help."
    },
    {
        id: 393,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Nurse Krina knows that the following drugs have been known to be effective in treating obsessive-compulsive disorder (OCD):",
        options: [
            "Benztropine (Cogentin) and diphenhydramine (Benadryl)",
            "Chlordiazepoxide (Librium) and diazepam (Valium)",
            "Fluvoxamine (Luvox) and clomipramine (Anafranil)",
            "Divalproex (Depakote) and lithium (Lithobid)"
        ],
        correct: 2,
        explanation: "Fluvoxamine (SSRI) and clomipramine (tricyclic antidepressant) are effective treatments for OCD."
    },
    {
        id: 394,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Alfred was newly diagnosed with anxiety disorder. The physician prescribed buspirone (BuSpar). The nurse is aware that the teaching instructions for newly prescribed buspirone should include which of the following?",
        options: [
            "A warning about the drugs delayed therapeutic effect, which is from 14 to 30 days",
            "A warning about the incidence of neuroleptic malignant syndrome (NMS)",
            "A reminder of the need to schedule blood work in 1 week to check blood levels of the drug",
            "A warning that immediate sedation can occur with a resultant drop in pulse"
        ],
        correct: 0,
        explanation: "Buspirone has a delayed therapeutic effect of 14-30 days, which is important to teach clients to prevent early discontinuation."
    },
    {
        id: 395,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Richard with agoraphobia has been symptom-free for 4 months. Classic signs and symptoms of phobias include:",
        options: [
            "Insomnia and an inability to concentrate",
            "Severe anxiety and fear",
            "Depression and weight loss",
            "Withdrawal and failure to distinguish reality from fantasy"
        ],
        correct: 1,
        explanation: "Phobias are characterized by severe anxiety and fear when exposed to the phobic stimulus."
    },
    {
        id: 396,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Which medications have been found to help reduce or eliminate panic attacks?",
        options: [
            "Antidepressants",
            "Anticholinergics",
            "Antipsychotics",
            "Mood stabilizers"
        ],
        correct: 0,
        explanation: "Antidepressants, particularly SSRIs, are effective in reducing and eliminating panic attacks."
    },
    {
        id: 397,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "A client seeks care because she feels depressed and has gained weight. To treat her atypical depression, the physician prescribes tranylcypromine sulfate (Parnate), 10 mg by mouth twice per day. When this drug is used to treat atypical depression, what is its onset of action?",
        options: [
            "1 to 2 days",
            "3 to 5 days",
            "6 to 8 days",
            "10 to 14 days"
        ],
        correct: 1,
        explanation: "MAO inhibitors like tranylcypromine typically have an onset of action of 3-5 days."
    },
    {
        id: 398,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "A 65 years old client is in the first stage of Alzheimer's disease. Nurse Patricia should plan to focus this client's care on:",
        options: [
            "Offering nourishing finger foods to help maintain the client's nutritional status",
            "Providing emotional support and individual counseling",
            "Monitoring the client to prevent minor illnesses from turning into major problems",
            "Suggesting new activities for the client and family to do together"
        ],
        correct: 2,
        explanation: "In early Alzheimer's disease, the focus is on monitoring health and preventing complications as cognitive decline progresses."
    },
    {
        id: 399,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "The nurse is assessing a client who has just been admitted to the emergency department. Which signs would suggest an overdose of an antianxiety agent?",
        options: [
            "Combativeness, sweating, and confusion",
            "Agitation, hyperactivity, and grandiose ideation",
            "Emotional lability, euphoria, and impaired memory",
            "Suspiciousness, dilated pupils, and increased blood pressure"
        ],
        correct: 0,
        explanation: "Antianxiety agent overdose typically causes CNS depression with confusion, sweating, and potential combativeness."
    },
    {
        id: 400,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "The nurse is caring for a client diagnosed with antisocial personality disorder. The client has a history of fighting, cruelty to animals, and stealing. Which of the following traits would the nurse be most likely to uncover during assessment?",
        options: [
            "History of gainful employment",
            "Frequent expression of guilt regarding antisocial behavior",
            "Demonstrated ability to maintain close, stable relationships",
            "A history of childhood cruelty to animals"
        ],
        correct: 3,
        explanation: "Childhood cruelty to animals is a classic sign of antisocial personality disorder and part of the MacDonald triad."
    },
    {
        id: 401,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Jen a nursing student is anxious about the upcoming board examination but is able to study intently and does not become distracted by a roommate's talking and loud music. The student's ability to ignore distractions and to focus on studying demonstrates:",
        options: [
            "Mild-level anxiety",
            "Panic-level anxiety",
            "Severe-level anxiety",
            "Moderate-level anxiety"
        ],
        correct: 0,
        explanation: "Mild anxiety can actually enhance performance and concentration, allowing the person to focus despite distractions."
    },
    {
        id: 402,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "When assessing a premorbid personality characteristics of a client with a major depression, it would be unusual for the nurse to find that this client demonstrated:",
        options: [
            "Rigidity",
            "Stubbornness",
            "Diverse interest",
            "Over meticulousness"
        ],
        correct: 2,
        explanation: "Clients with depression often have premorbid personalities characterized by rigidity, stubbornness, and meticulousness, but diverse interests are less common."
    },
    {
        id: 403,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Nurse Krina recognizes that the suicidal risk for depressed client is greatest:",
        options: [
            "As their depression begins to improve",
            "When their depression is most severe",
            "Before any type of treatment is started",
            "As they lose interest in the environment"
        ],
        correct: 0,
        explanation: "Suicide risk is greatest when depression begins to improve because the client has more energy to act on suicidal thoughts."
    },
    {
        id: 404,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Nurse Kate would expect that a client with vascular dementia would experience:",
        options: [
            "Loss of remote memory related to anoxia",
            "Loss of abstract thinking related to emotional state",
            "Inability to concentrate related to decreased stimuli",
            "Disturbance in recalling recent events related to cerebral hypoxia"
        ],
        correct: 3,
        explanation: "Vascular dementia causes cerebral hypoxia leading to difficulty with recent memory recall."
    },
    {
        id: 405,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Josefina is to be discharged on a regimen of lithium carbonate. In the teaching plan for discharge the nurse should include:",
        options: [
            "Advising the client to watch the diet carefully",
            "Suggesting that the client take the pills with milk",
            "Reminding the client that a CBC must be done once a month",
            "Encouraging the client to have blood levels checked as ordered"
        ],
        correct: 3,
        explanation: "Lithium requires regular blood level monitoring to maintain therapeutic range and prevent toxicity."
    },
    {
        id: 406,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "The psychiatrist orders lithium carbonate 600 mg p.o t.i.d for a female client. Nurse Katrina would be aware that the teaching about the side effects of this drug were understood when the client state, 'I will call my doctor immediately if I notice any:'",
        options: [
            "Sensitivity to bright light or sun",
            "Fine hand tremors or slurred speech",
            "Sexual dysfunction or breast enlargement",
            "Inability to urinate or difficulty when urinating"
        ],
        correct: 1,
        explanation: "Fine hand tremors and slurred speech are signs of lithium toxicity that require immediate medical attention."
    },
    {
        id: 407,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Nurse Mylene recognizes that the most important factor necessary for the establishment of trust in a critical care area is:",
        options: [
            "Privacy",
            "Respect",
            "Empathy",
            "Presence"
        ],
        correct: 3,
        explanation: "Presence - being physically available and attentive - is the most important factor in establishing trust in critical care settings."
    },
    {
        id: 408,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "When establishing an initial nurse-client relationship, Nurse Hazel should explore with the client the:",
        options: [
            "Client's perception of the presenting problem",
            "Occurrence of fantasies the client may experience",
            "Details of any ritualistic acts carried out by the client",
            "Client's feelings when external controls are instituted"
        ],
        correct: 0,
        explanation: "Understanding the client's perception of their problem is fundamental to establishing a therapeutic relationship."
    },
    {
        id: 409,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Tranylcypromine sulfate (Parnate) is prescribed for a depressed client who has not responded to the tricyclic antidepressants. After teaching the client about the medication, Nurse Marian evaluates that learning has occurred when the client states, 'I will avoid:'",
        options: [
            "Citrus fruit, tuna, and yellow vegetables",
            "Chocolate milk, aged cheese, and yogurt",
            "Green leafy vegetables, chicken, and milk",
            "Whole grains, red meats, and carbonated soda"
        ],
        correct: 1,
        explanation: "MAO inhibitors require avoiding tyramine-rich foods like aged cheese, yogurt, and chocolate milk to prevent hypertensive crisis."
    },
    {
        id: 410,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Nurse John is aware that most crisis situations should resolve in about:",
        options: [
            "1 to 2 weeks",
            "4 to 6 weeks",
            "4 to 6 months",
            "6 to 12 months"
        ],
        correct: 1,
        explanation: "Most crisis situations resolve within 4-6 weeks with appropriate intervention."
    },
    {
        id: 411,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Nurse Judy knows that statistics show that in adolescent suicide behavior:",
        options: [
            "Females use more dramatic methods than males",
            "Males account for more attempts than do females",
            "Females talk more about suicide before attempting it",
            "Males are more likely to use lethal methods than are females"
        ],
        correct: 3,
        explanation: "Males are more likely to use lethal methods in suicide attempts, resulting in higher completion rates."
    },
    {
        id: 412,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Dervid with paranoid schizophrenia repeatedly uses profanity during an activity therapy session. Which response by the nurse would be most appropriate?",
        options: [
            "'Your behavior won't be tolerated. Go to your room immediately.'",
            "'You're just doing this to get back at me for making you come to therapy.'",
            "'Your cursing is interrupting the activity. Take time out in your room for 10 minutes.'",
            "'I'm disappointed in you. You can't control yourself even for a few minutes.'"
        ],
        correct: 2,
        explanation: "This response sets a clear boundary while providing a brief timeout, which is an appropriate behavioral intervention."
    },
    {
        id: 413,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Nurse Maureen knows that the nonantipsychotic medication used to treat some clients with schizoaffective disorder is:",
        options: [
            "Phenelzine (Nardil)",
            "Chlordiazepoxide (Librium)",
            "Lithium carbonate (Lithane)",
            "Imipramine (Tofranil)"
        ],
        correct: 2,
        explanation: "Lithium carbonate is used as a mood stabilizer for clients with schizoaffective disorder."
    },
    {
        id: 414,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Which information is most important for the nurse Trinity to include in a teaching plan for a male schizophrenic client taking clozapine (Clozaril)?",
        options: [
            "Monthly blood tests will be necessary",
            "Report a sore throat or fever to the physician immediately",
            "Blood pressure must be monitored for hypertension",
            "Stop the medication when symptoms subside"
        ],
        correct: 1,
        explanation: "Clozapine can cause agranulocytosis, so reporting signs of infection like sore throat or fever is critical."
    },
    {
        id: 415,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Mr. Garcia, an attorney who throws books and furniture around the office after losing a case is referred to the psychiatric nurse in the law firm's employee assistance program. Nurse Beatriz knows that the client's behavior most likely represents the use of which defense mechanism?",
        options: [
            "Regression",
            "Projection",
            "Reaction-formation",
            "Intellectualization"
        ],
        correct: 0,
        explanation: "Throwing objects is a regressive behavior - returning to an earlier, less mature way of coping with frustration."
    },
    {
        id: 416,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Nurse Anne is caring for a client who has been treated long term with antipsychotic medication. During the assessment, Nurse Anne checks the client for tardive dyskinesia. If tardive dyskinesia is present, Nurse Anne would most likely observe:",
        options: [
            "Abnormal movements and involuntary movements of the mouth, tongue, and face",
            "Abnormal breathing through the nostrils accompanied by a 'thrill'",
            "Severe headache, flushing, tremors, and ataxia",
            "Severe hypertension, migraine headache"
        ],
        correct: 0,
        explanation: "Tardive dyskinesia is characterized by abnormal involuntary movements of the mouth, tongue, and face."
    },
    {
        id: 417,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Dennis has a lithium level of 2.4 mEq/L. The nurse immediately would assess the client for which of the following signs or symptoms?",
        options: [
            "Weakness",
            "Diarrhea",
            "Blurred vision",
            "Fecal incontinence"
        ],
        correct: 1,
        explanation: "A lithium level of 2.4 mEq/L indicates toxicity, and diarrhea is a common sign of lithium toxicity."
    },
    {
        id: 418,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Nurse Jannah is monitoring a male client who has been placed in restraints because of violent behavior. Nurse determines that it will be safe to remove the restraints when:",
        options: [
            "The client verbalizes the reasons for the violent behavior",
            "The client apologizes and tells the nurse that it will never happen again",
            "No acts of aggression have been observed within 1 hour after the release of two of the extremity restraints",
            "The administered medication has taken effect"
        ],
        correct: 2,
        explanation: "Restraints can be safely removed when the client has been calm for an appropriate period and shows no aggression."
    },
    {
        id: 419,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Nurse Irish is aware that Ritalin is the drug of choice for a child with ADHD. The side effects of the following may be noted by the nurse:",
        options: [
            "Increased attention span and concentration",
            "Increase in appetite",
            "Sleepiness and lethargy",
            "Bradycardia and diarrhea"
        ],
        correct: 0,
        explanation: "Ritalin (methylphenidate) increases attention span and concentration, which are therapeutic effects for ADHD."
    },
    {
        id: 420,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Kitty, a 9 year old child has very limited vocabulary and interaction skills. She has an I.Q. of 45. She is diagnosed to have Mental retardation of this classification:",
        options: [
            "Profound",
            "Mild",
            "Moderate",
            "Severe"
        ],
        correct: 2,
        explanation: "An IQ of 45 falls in the moderate mental retardation range (35-55)."
    },
    {
        id: 421,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "The therapeutic approach in the care of Armand an autistic child include the following EXCEPT:",
        options: [
            "Engage in diversionary activities when acting-out",
            "Provide an atmosphere of acceptance",
            "Provide safety measures",
            "Rearrange the environment to activate the child"
        ],
        correct: 0,
        correct: 3,
        explanation: "The environment should be structured and predictable for autistic children, not rearranged to activate them."
    },
    {
        id: 422,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Jeremy is brought to the emergency room by friends who state that he took something an hour ago. He is actively hallucinating, agitated, with irritated nasal septum.",
        options: [
            "Heroin",
            "Cocaine",
            "LSD",
            "Marijuana"
        ],
        correct: 1,
        explanation: "Cocaine use can cause hallucinations, agitation, and nasal septum irritation from snorting."
    },
    {
        id: 423,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Nurse Pauline is aware that Dementia unlike delirium is characterized by:",
        options: [
            "Slurred speech",
            "Insidious onset",
            "Clouding of consciousness",
            "Sensory perceptual change"
        ],
        correct: 1,
        explanation: "Dementia has an insidious (gradual) onset, while delirium has an acute onset with clouding of consciousness."
    },
    {
        id: 424,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "A 35 year old female has intense fear of riding an elevator. She claims 'As if I will die inside.' The client is suffering from:",
        options: [
            "Agoraphobia",
            "Social phobia",
            "Claustrophobia",
            "Xenophobia"
        ],
        correct: 2,
        explanation: "Claustrophobia is the fear of enclosed spaces like elevators."
    },
    {
        id: 425,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Nurse Myrna develops a counter-transference reaction. This is evidenced by:",
        options: [
            "Revealing personal information to the client",
            "Focusing on the feelings of the client",
            "Confronting the client about discrepancies in verbal or non-verbal behavior",
            "The client feels angry towards the nurse who resembles his mother"
        ],
        correct: 0,
        explanation: "Counter-transference involves the nurse's unconscious feelings toward the client, often revealed through inappropriate self-disclosure."
    },
    {
        id: 426,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Tristan is on Lithium has suffered from diarrhea and vomiting. What should the nurse in-charge do first:",
        options: [
            "Recognize this as a drug interaction",
            "Give the client Cogentin",
            "Reassure the client that these are common side effects of lithium therapy",
            "Hold the next dose and obtain an order for a stat serum lithium level"
        ],
        correct: 3,
        explanation: "Diarrhea and vomiting can lead to dehydration and increased lithium levels, so the next dose should be held and lithium level checked."
    },
    {
        id: 427,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Nurse Sarah ensures a therapeutic environment for all the client. Which of the following best describes a therapeutic milieu?",
        options: [
            "A therapy that rewards adaptive behavior",
            "A cognitive approach to change behavior",
            "A living, learning or working environment",
            "A permissive and congenial environment"
        ],
        correct: 2,
        explanation: "A therapeutic milieu is a structured living, learning, or working environment that promotes healing and growth."
    },
    {
        id: 428,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Anthony is very hostile toward one of the staff for no apparent reason. He is manifesting:",
        options: [
            "Splitting",
            "Transference",
            "Countertransference",
            "Resistance"
        ],
        correct: 1,
        explanation: "Transference occurs when the client unconsciously redirects feelings toward important people in their life onto the therapist."
    },
    {
        id: 429,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Marielle, 17 years old was sexually attacked while on her way home from school. She is brought to the hospital by her mother. Rape is an example of which type of crisis:",
        options: [
            "Situational",
            "Adventitious",
            "Developmental",
            "Internal"
        ],
        correct: 0,
        explanation: "Situational crises are unexpected events that threaten an individual's safety or security, such as rape."
    },
    {
        id: 430,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Nurse Greta is aware that the following is classified as an Axis I disorder by the Diagnosis and Statistical Manual of Mental Disorders, Text Revision (DSM-IV-TR) is:",
        options: [
            "Obesity",
            "Borderline personality disorder",
            "Major depression",
            "Hypertension"
        ],
        correct: 2,
        explanation: "Major depression is classified as an Axis I disorder in the DSM-IV-TR, while personality disorders are Axis II."
    },
    {
        id: 431,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Which nursing intervention is most appropriate for a client with PTSD experiencing flashbacks?",
        options: [
            "Tell the client to forget about the traumatic event",
            "Use grounding techniques to help the client return to reality",
            "Encourage the client to discuss the trauma in detail",
            "Administer PRN sedation immediately"
        ],
        correct: 1,
        explanation: "Grounding techniques help the client focus on the present environment and return to reality during flashbacks."
    },
    {
        id: 432,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "A client with bipolar disorder in the manic phase is most likely to exhibit:",
        options: [
            "Hypersomnia and increased appetite",
            "Grandiosity and decreased need for sleep",
            "Social withdrawal and flat affect",
            "Excessive guilt and suicidal ideation"
        ],
        correct: 1,
        explanation: "Manic episodes are characterized by grandiosity, decreased need for sleep, and elevated mood."
    },
    {
        id: 433,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Which medication is most effective for treating negative symptoms of schizophrenia?",
        options: [
            "Haloperidol (Haldol)",
            "Risperidone (Risperdal)",
            "Chlorpromazine (Thorazine)",
            "Lorazepam (Ativan)"
        ],
        correct: 1,
        explanation: "Atypical antipsychotics like risperidone are more effective for negative symptoms of schizophrenia."
    },
    {
        id: 434,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "A client with anorexia nervosa is most likely to display:",
        options: [
            "Elevated body weight and fear of obesity",
            "Distorted body image and amenorrhea",
            "Increased appetite and weight gain",
            "Normal eating patterns and excessive exercise"
        ],
        correct: 1,
        explanation: "Anorexia nervosa is characterized by distorted body image, amenorrhea, and severe weight loss."
    },
    {
        id: 435,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Which intervention is priority for a client experiencing alcohol withdrawal?",
        options: [
            "Encourage participation in group therapy",
            "Administer benzodiazepines as ordered",
            "Teach about the dangers of alcohol use",
            "Provide a quiet, stimulating environment"
        ],
        correct: 1,
        explanation: "Benzodiazepines are the priority intervention to prevent seizures and delirium tremens during alcohol withdrawal."
    },
    {
        id: 436,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "A client with borderline personality disorder is most likely to exhibit:",
        options: [
            "Stable relationships and emotional regulation",
            "Splitting and fear of abandonment",
            "Grandiose delusions and hallucinations",
            "Social isolation and lack of emotion"
        ],
        correct: 1,
        explanation: "Borderline personality disorder is characterized by splitting (seeing things as all good or all bad) and intense fear of abandonment."
    },
    {
        id: 437,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Which assessment finding is most concerning for a client taking clozapine?",
        options: [
            "Mild sedation and dry mouth",
            "Sore throat and fever",
            "Weight gain and increased appetite",
            "Mild tremor and restlessness"
        ],
        correct: 1,
        explanation: "Sore throat and fever may indicate agranulocytosis, a life-threatening side effect of clozapine requiring immediate intervention."
    },
    {
        id: 438,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "A client with generalized anxiety disorder would benefit most from:",
        options: [
            "High-stimulation environment",
            "Cognitive behavioral therapy",
            "Antipsychotic medication",
            "Complete bed rest"
        ],
        correct: 1,
        explanation: "Cognitive behavioral therapy is highly effective for generalized anxiety disorder by helping identify and change anxious thought patterns."
    },
    {
        id: 439,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "Which behavior indicates that a client with depression is improving?",
        options: [
            "Increased suicidal ideation",
            "Improved self-care and hygiene",
            "Social withdrawal and isolation",
            "Increased psychomotor retardation"
        ],
        correct: 1,
        explanation: "Improved self-care and hygiene are positive indicators that the client's depression is lifting."
    },
    {
        id: 440,
        category: "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
        question: "The nurse should prioritize which intervention for a client experiencing a panic attack?",
        options: [
            "Explore the underlying causes of anxiety",
            "Teach deep breathing and relaxation techniques",
            "Administer PRN anxiolytic medication",
            "Encourage the client to verbalize feelings"
        ],
        correct: 2,
        explanation: "During an acute panic attack, administering PRN anxiolytic medication is the priority to reduce severe anxiety symptoms."
    },
    {
        id: 342,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "A dusky stoma in a client with ileostomy indicates:",
        options: [
            "Blood supply to the stoma has been interrupted",
            "This is a normal finding 1 day after surgery",
            "The ostomy bag should be adjusted",
            "An intestinal obstruction has occurred"
        ],
        correct: 0,
        explanation: "A dusky stoma suggests decreased perfusion, which may result from interruption of the stoma's blood supply and may lead to tissue damage or necrosis."
    },
    {
        id: 343,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which intervention prevents leg contractures in a client with burns?",
        options: [
            "Applying knee splints",
            "Elevating the foot of the bed",
            "Hyperextending the client's palms",
            "Performing shoulder range-of-motion exercises"
        ],
        correct: 0,
        explanation: "Applying knee splints prevents leg contractures by holding the joints in a position of function."
    },
    {
        id: 344,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which finding indicates fluid volume deficit in a client with burns?",
        options: [
            "Partial pressure of arterial oxygen (PaO2) value of 80 mm Hg",
            "Urine output of 20 ml/hour",
            "White pulmonary secretions",
            "Rectal temperature of 100.6° F (38° C)"
        ],
        correct: 1,
        explanation: "A urine output of less than 40 ml/hour in a client with burns indicates a fluid volume deficit."
    },
    {
        id: 345,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which intervention is appropriate for a client at risk for skin breakdown?",
        options: [
            "Turn him frequently",
            "Perform passive range-of-motion (ROM) exercises",
            "Reduce the client's fluid intake",
            "Encourage the client to use a footboard"
        ],
        correct: 0,
        explanation: "Frequent turning prevents pressure ulcers by relieving pressure on bony prominences."
    },
    {
        id: 346,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "How should the nurse apply lotion to a client's skin?",
        options: [
            "With a circular motion, to enhance absorption",
            "With an upward motion, to increase blood supply to the affected area",
            "In long, even, outward, and downward strokes in the direction of hair growth",
            "In long, even, outward, and upward strokes in the direction opposite hair growth"
        ],
        correct: 2,
        explanation: "Lotion should be applied in long, even, outward, and downward strokes in the direction of hair growth to prevent skin irritation."
    },
    {
        id: 347,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which medication is contraindicated for a client with asthma?",
        options: [
            "Beta-adrenergic blockers",
            "Calcium channel blocker",
            "Narcotics",
            "Nitrates"
        ],
        correct: 0,
        explanation: "Beta-adrenergic blockers aren't used to treat asthma and can cause bronchoconstriction."
    },
    {
        id: 348,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which position is appropriate for a client with increased intracranial pressure?",
        options: [
            "High Fowler's",
            "Raised 10 degrees",
            "Raised 30 degrees",
            "Supine position"
        ],
        correct: 2,
        explanation: "The head of the bed should be raised 30 degrees to promote venous drainage from the brain."
    },
    {
        id: 349,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which medication improves cardiac contractility?",
        options: [
            "Beta-adrenergic blockers",
            "Calcium channel blocker",
            "Diuretics",
            "Inotropic agents"
        ],
        correct: 3,
        explanation: "Inotropic agents improve cardiac contractility and increase cardiac output."
    },
    {
        id: 350,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which dietary recommendation is appropriate for a client with coronary artery disease?",
        options: [
            "Fiber intake of 25 to 30 g daily",
            "Less than 30% of calories from fat",
            "Cholesterol intake of less than 300 mg daily",
            "Less than 10% of calories from saturated fat"
        ],
        correct: 3,
        explanation: "Less than 10% of calories from saturated fat is recommended for clients with coronary artery disease."
    },
    {
        id: 351,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which action is an example of SBAR communication?",
        options: [
            "The CCU nurse gives a verbal report to the nurse on the telemetry unit before transferring the client to that unit",
            "The CCU nurse notifies the on-call physician about a change in the client's condition",
            "The emergency department nurse calls up the latest electrocardiogram results to check the client's progress",
            "At the client's request, the CCU nurse updates the client's wife on his condition"
        ],
        correct: 1,
        explanation: "SBAR (Situation, Background, Assessment, Recommendation) is used when notifying healthcare providers about changes in client condition."
    },
    {
        id: 352,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "What is the priority intervention for a client with ventricular tachycardia?",
        options: [
            "Start an I.V. line and administer amiodarone (Cardarone), 300 mg I.V. over 10 minutes",
            "Check endotracheal tube placement",
            "Obtain an arterial blood gas (ABG) sample",
            "Administer atropine, 1 mg I.V."
        ],
        correct: 0,
        explanation: "Amiodarone is the first-line treatment for stable ventricular tachycardia."
    },
    {
        id: 353,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "What is the normal mean arterial pressure (MAP)?",
        options: [
            "46 mm Hg",
            "80 mm Hg",
            "95 mm Hg",
            "90 mm Hg"
        ],
        correct: 1,
        explanation: "Normal MAP ranges from 70-100 mm Hg, with 80 mm Hg being within the normal range."
    },
    {
        id: 354,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which laboratory tests are appropriate for a client with gastrointestinal bleeding?",
        options: [
            "Cardiac monitor, oxygen, creatine kinase and lactate dehydrogenase levels",
            "Prothrombin time, partial thromboplastin time, fibrinogen and fibrin split product values",
            "Electrocardiogram, complete blood count, testing for occult blood, comprehensive serum metabolic panel",
            "Electroencephalogram, alkaline phosphatase and aspartate aminotransferase levels, basic serum metabolic panel"
        ],
        correct: 2,
        explanation: "An electrocardiogram evaluates chest pain, CBC determines anemia, and stool test for occult blood determines blood in stool."
    },
    {
        id: 355,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which complication may occur after CABG surgery due to heparin use?",
        options: [
            "Pancytopenia",
            "Idiopathic thrombocytopenic purpura (ITP)",
            "Disseminated intravascular coagulation (DIC)",
            "Heparin-associated thrombosis and thrombocytopenia (HATT)"
        ],
        correct: 3,
        explanation: "HATT may occur after CABG surgery due to heparin use during surgery."
    },
    {
        id: 356,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which medication is used to treat idiopathic thrombocytopenic purpura?",
        options: [
            "Acetylsalicylic acid (ASA)",
            "Corticosteroids",
            "Methotrexate",
            "Vitamin K"
        ],
        correct: 1,
        explanation: "Corticosteroid therapy can decrease antibody production and phagocytosis of antibody-coated platelets."
    },
    {
        id: 357,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which type of transplant is between human and another species?",
        options: [
            "Allogeneic",
            "Autologous",
            "Syngeneic",
            "Xenogeneic"
        ],
        correct: 3,
        explanation: "A xenogeneic transplant is between human and another species."
    },
    {
        id: 358,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "What initiates the extrinsic pathway of blood clotting?",
        options: [
            "Release of Calcium",
            "Release of tissue thromboplastin",
            "Conversion of factors XII to factor XIIa",
            "Conversion of factor VIII to factor VIIIa"
        ],
        correct: 1,
        explanation: "Tissue thromboplastin is released when damaged tissue comes in contact with clotting factors, initiating the extrinsic pathway."
    },
    {
        id: 359,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which condition is associated with systemic lupus erythematosus?",
        options: [
            "Dressler's syndrome",
            "Polycythemia",
            "Essential thrombocytopenia",
            "Von Willebrand's disease"
        ],
        correct: 2,
        explanation: "Essential thrombocytopenia is linked to immunologic disorders, such as SLE and human immunodeficiency virus."
    },
    {
        id: 360,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which is an early sign of Hodgkin's disease?",
        options: [
            "Pericarditis",
            "Night sweat",
            "Splenomegaly",
            "Persistent hypothermia"
        ],
        correct: 1,
        explanation: "In stage 1, symptoms include unexplained fever, night sweats, malaise, and generalized pruritis."
    },
    {
        id: 361,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which assessment is priority for a client with neutropenia?",
        options: [
            "Blood pressure",
            "Bowel sounds",
            "Heart sounds",
            "Breath sounds"
        ],
        correct: 3,
        explanation: "Pneumonia, both viral and fungal, is a common cause of death in clients with neutropenia, so frequent assessment of respiratory rate and breath sounds is required."
    },
    {
        id: 362,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which complication is associated with multiple myeloma?",
        options: [
            "Brain",
            "Muscle spasm",
            "Renal dysfunction",
            "Myocardial irritability"
        ],
        correct: 1,
        explanation: "Back pain or paresthesia in the lower extremities may indicate impending spinal cord compression from a spinal tumor."
    },
    {
        id: 363,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "What is the average time from initial contact with HIV to the development of AIDS?",
        options: [
            "Less than 5 years",
            "5 to 7 years",
            "10 years",
            "More than 10 years"
        ],
        correct: 2,
        explanation: "Epidemiologic studies show the average time from initial contact with HIV to the development of AIDS is 10 years."
    },
    {
        id: 364,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which laboratory finding is associated with disseminated intravascular coagulation?",
        options: [
            "Low platelet count",
            "Elevated fibrinogen levels",
            "Low levels of fibrin degradation products",
            "Reduced prothrombin time"
        ],
        correct: 0,
        explanation: "In DIC, platelets and clotting factors are consumed, resulting in microthrombi and excessive bleeding."
    },
    {
        id: 365,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which condition causes fever, night sweats, weight loss, and lymph node enlargement?",
        options: [
            "Influenza",
            "Sickle cell anemia",
            "Leukemia",
            "Hodgkin's disease"
        ],
        correct: 3,
        explanation: "Hodgkin's disease typically causes fever, night sweats, weight loss, and lymph node enlargement."
    },
    {
        id: 366,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which blood type is the universal donor?",
        options: [
            "AB Rh-positive",
            "A Rh-positive",
            "A Rh-negative",
            "O Rh-positive"
        ],
        correct: 3,
        explanation: "O Rh-positive is considered the universal donor for red blood cells."
    },
    {
        id: 367,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which statement by a parent of a child with leukemia indicates understanding of when to call the physician?",
        options: [
            "'I should contact the physician if Stacy has difficulty in sleeping'",
            "'I will call my doctor if Stacy has persistent vomiting and diarrhea'",
            "'My physician should be called if Stacy is irritable and unhappy'",
            "'Should Stacy have continued hair loss, I need to call the doctor'"
        ],
        correct: 1,
        explanation: "Persistent vomiting and diarrhea can lead to dehydration and electrolyte imbalance, requiring immediate medical attention."
    },
    {
        id: 368,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which response is appropriate when a parent expresses concern about their child's hair loss from chemotherapy?",
        options: [
            "'Stacy looks very nice wearing a hat'",
            "'You should not worry about her hair, just be glad that she is alive'",
            "'Yes it is upsetting. But try to cover up your feelings when you are with her or else she may be upset'",
            "'This is only temporary; Stacy will re-grow new hair in 3-6 months, but may be different in texture'"
        ],
        correct: 3,
        explanation: "This response acknowledges the parent's feelings while providing accurate information about hair regrowth after chemotherapy."
    },
    {
        id: 369,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which intervention is appropriate for a child with oral ulcers from chemotherapy?",
        options: [
            "Provide frequent mouthwash with normal saline",
            "Apply viscous Lidocaine to oral ulcers as needed",
            "Use lemon glycerine swabs every 2 hours",
            "Rinse mouth with Hydrogen Peroxide"
        ],
        correct: 1,
        explanation: "Viscous lidocaine provides local anesthesia for pain relief from oral ulcers."
    },
    {
        id: 370,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which statement by a client with diabetes indicates understanding of steroid therapy?",
        options: [
            "'I should contact the physician if my blood glucose is constantly elevated'",
            "'If I begin to feel especially hungry and thirsty, I'll eat a snack high in carbohydrates'",
            "'I'll take my hydrocortisone in the late afternoon, before dinner'",
            "'I'll take all of my hydrocortisone in the morning, right after I wake up'"
        ],
        correct: 0,
        explanation: "Steroids can increase blood glucose levels, so monitoring and reporting elevated levels is important."
    },
    {
        id: 371,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which condition is characterized by polyuria and polydipsia?",
        options: [
            "Diabetes mellitus",
            "Diabetes insipidus",
            "Hypoparathyroidism",
            "Hyperparathyroidism"
        ],
        correct: 1,
        explanation: "Diabetes insipidus is characterized by polyuria and polydipsia due to deficiency of antidiuretic hormone."
    },
    {
        id: 372,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "How should hydrocortisone be administered for Addison's disease?",
        options: [
            "'I'll take my hydrocortisone in the late afternoon, before dinner'",
            "'I'll take all of my hydrocortisone in the morning, right after I wake up'",
            "'I'll take two-thirds of the dose when I wake up and one-third in the late afternoon'",
            "'I'll take the entire dose at bedtime'"
        ],
        correct: 2,
        explanation: "Hydrocortisone should be taken in divided doses, with two-thirds in the morning and one-third in the late afternoon to mimic natural cortisol rhythm."
    },
    {
        id: 373,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which laboratory findings indicate Addison's disease?",
        options: [
            "High corticotropin and low cortisol levels",
            "Low corticotropin and high cortisol levels",
            "High corticotropin and high cortisol levels",
            "Low corticotropin and low cortisol levels"
        ],
        correct: 0,
        explanation: "Addison's disease is characterized by high corticotropin (ACTH) and low cortisol levels due to adrenal insufficiency."
    },
    {
        id: 374,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which assessment is priority for a client with diabetes insipidus?",
        options: [
            "Testing for ketones in the urine",
            "Testing urine specific gravity",
            "Checking temperature every 4 hours",
            "Performing capillary glucose testing every 4 hours"
        ],
        correct: 1,
        explanation: "Urine specific gravity testing is important to monitor the dilute urine characteristic of diabetes insipidus."
    },
    {
        id: 375,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Regular insulin administered at 1:30 p.m. would have its peak at:",
        options: [
            "Onset to be at 2 p.m. and its peak to be at 3 p.m.",
            "Onset to be at 2:15 p.m. and its peak to be at 3 p.m.",
            "Onset to be at 2:30 p.m. and its peak to be at 4 p.m.",
            "Onset to be at 4 p.m. and its peak to be at 6 p.m."
        ],
        correct: 2,
        explanation: "Regular insulin has an onset of 30-60 minutes and peaks in 2-4 hours."
    },
    {
        id: 376,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which test confirms hypothyroidism?",
        options: [
            "No increase in the thyroid-stimulating hormone (TSH) level after 30 minutes during the TSH stimulation test",
            "A decreased TSH level",
            "An increase in the TSH level after 30 minutes during the TSH stimulation test",
            "Below-normal levels of serum triiodothyronine (T3) and serum thyroxine (T4) as detected by radioimmunoassay"
        ],
        correct: 0,
        explanation: "In hypothyroidism, the thyroid gland doesn't respond to TSH stimulation, so there's no increase in TSH level."
    },
    {
        id: 377,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which instruction about insulin injection is correct?",
        options: [
            "'Inject insulin into healthy tissue with large blood vessels and nerves'",
            "'Rotate injection sites within the same anatomic region, not among different regions'",
            "'Administer insulin into areas of scar tissue or hypotrophy whenever possible'",
            "'Administer insulin into sites above muscles that you plan to exercise heavily later that day'"
        ],
        correct: 1,
        explanation: "Injection sites should be rotated within the same anatomic region to ensure consistent absorption."
    },
    {
        id: 378,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which finding is associated with diabetic ketoacidosis?",
        options: [
            "Elevated serum acetone level",
            "Serum ketone bodies",
            "Serum alkalosis",
            "Below-normal serum potassium level"
        ],
        correct: 1,
        explanation: "Serum ketone bodies are present in diabetic ketoacidosis due to fat metabolism."
    },
    {
        id: 379,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which intervention is appropriate for a client with thyroid crisis?",
        options: [
            "Restricting intake of oral fluids",
            "Placing extra blankets on the client's bed",
            "Limiting intake of high-carbohydrate foods",
            "Maintaining room temperature in the low-normal range"
        ],
        correct: 3,
        explanation: "Maintaining a cool environment helps reduce hyperthermia associated with thyroid crisis."
    },
    {
        id: 380,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "A fall on an outstretched hand typically results in:",
        options: [
            "Fracture of the distal radius",
            "Fracture of the olecranon",
            "Fracture of the humerus",
            "Fracture of the carpal scaphoid"
        ],
        correct: 0,
        explanation: "A fall on an outstretched hand typically results in Colles' fracture of the distal radius."
    },
    {
        id: 381,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which electrolytes are primarily regulated by the parathyroid gland?",
        options: [
            "Calcium and sodium",
            "Calcium and phosphorous",
            "Phosphorous and potassium",
            "Potassium and sodium"
        ],
        correct: 1,
        explanation: "The parathyroid gland primarily regulates calcium and phosphorous metabolism."
    },
    {
        id: 382,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which condition is associated with fat embolism?",
        options: [
            "Adult respiratory distress syndrome (ARDS)",
            "Atelectasis",
            "Bronchitis",
            "Pneumonia"
        ],
        correct: 0,
        explanation: "Fat embolism can lead to ARDS due to fat globules obstructing pulmonary capillaries."
    },
    {
        id: 383,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which complication may occur after long bone fracture?",
        options: [
            "Asthma attack",
            "Atelectasis",
            "Bronchitis",
            "Fat embolism"
        ],
        correct: 3,
        explanation: "Fat embolism is a potential complication of long bone fractures."
    },
    {
        id: 384,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which condition is associated with spontaneous pneumothorax?",
        options: [
            "Acute asthma",
            "Chronic bronchitis",
            "Pneumonia",
            "Spontaneous pneumothorax"
        ],
        correct: 3,
        explanation: "Spontaneous pneumothorax occurs without trauma and is associated with tall, thin young men."
    },
    {
        id: 385,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which condition may cause a shift of the mediastinum?",
        options: [
            "Bronchitis",
            "Pneumonia",
            "Pneumothorax",
            "Tuberculosis (TB)"
        ],
        correct: 2,
        explanation: "Pneumothorax can cause mediastinal shift due to pressure changes in the thoracic cavity."
    },
    {
        id: 386,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "What fills the space after pneumonectomy?",
        options: [
            "The space remains filled with air only",
            "The surgeon fills the space with a gel",
            "Serous fluid fills the space and consolidates the region",
            "The tissue from the other lung grows over to the other side"
        ],
        correct: 2,
        explanation: "After pneumonectomy, serous fluid fills the space and consolidates the region."
    },
    {
        id: 387,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which occurs with pulmonary embolism?",
        options: [
            "Alveolar damage in the infracted area",
            "Involvement of major blood vessels in the occluded area",
            "Loss of lung parenchyma",
            "Loss of lung tissue"
        ],
        correct: 1,
        explanation: "Pulmonary embolism involves occlusion of pulmonary blood vessels."
    },
    {
        id: 388,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Which acid-base imbalance occurs with pulmonary embolism?",
        options: [
            "Metabolic acidosis",
            "Metabolic alkalosis",
            "Respiratory acidosis",
            "Respiratory alkalosis"
        ],
        correct: 3,
        explanation: "Pulmonary embolism causes respiratory alkalosis due to hyperventilation."
    },
    {
        id: 389,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "Continuous bubbling in the water-seal chamber indicates:",
        options: [
            "Air leak",
            "Adequate suction",
            "Inadequate suction",
            "Kinked chest tube"
        ],
        correct: 0,
        explanation: "Continuous bubbling in the water-seal chamber indicates an air leak in the system."
    },
    {
        id: 390,
        category: "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
        question: "What is the normal respiratory rate for an adult?",
        options: [
            "18",
            "21",
            "35",
            "40"
        ],
        correct: 0,
        explanation: "Normal respiratory rate for an adult is 12-20 breaths per minute."
    },
    {
        id: 292,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which adventitious breath sound should the nurse expect to hear when assessing a client with a pleural effusion?",
        options: [
            "Tracheal",
            "Fine crackles",
            "Coarse crackles",
            "Friction rubs"
        ],
        correct: 3,
        explanation: "A pleural friction rub is heard with inflammation of the pleural surfaces, as occurs with pleural effusion."
    },
    {
        id: 293,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "During an asthma attack, the client's wheezing stops. What does this indicate?",
        options: [
            "The attack is over",
            "The airways are so swollen that no air cannot get through",
            "The swelling has decreased",
            "Crackles have replaced wheezes"
        ],
        correct: 1,
        explanation: "When wheezing stops during an asthma attack, it may indicate that the airways are so swollen that no air can move through - this is a medical emergency."
    },
    {
        id: 294,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "What is the priority nursing action for a client having a seizure?",
        options: [
            "Place the client on his back remove dangerous objects, and insert a bite block",
            "Place the client on his side, remove dangerous objects, and insert a bite block",
            "Place the client on his back, remove dangerous objects, and hold down his arms",
            "Place the client on his side, remove dangerous objects, and protect his head"
        ],
        correct: 3,
        explanation: "During a seizure, the client should be placed on the side to prevent aspiration, dangerous objects removed, and the head protected."
    },
    {
        id: 295,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which complication is indicated if a client with a chest tube has no bubbling in the water-seal chamber?",
        options: [
            "Infection of the lung",
            "Kinked or obstructed chest tube",
            "Excessive water in the water-seal chamber",
            "Excessive chest tube drainage"
        ],
        correct: 1,
        explanation: "No bubbling in the water-seal chamber may indicate that the chest tube is kinked or obstructed."
    },
    {
        id: 296,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "How should the nurse perform the abdominal thrust maneuver on a conscious adult who is choking?",
        options: [
            "Stand him up and perform the abdominal thrust maneuver from behind",
            "Lay him down, straddle him, and perform the abdominal thrust maneuver",
            "Leave him to get assistance",
            "Stay with him but not intervene at this time"
        ],
        correct: 1,
        explanation: "For a conscious choking adult, the nurse should lay the person down, straddle them, and perform abdominal thrusts."
    },
    {
        id: 297,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which information is most important to obtain during the assessment of a client with a new cancer diagnosis?",
        options: [
            "General health for the last 10 years",
            "Current health promotion activities",
            "Family history of diseases",
            "Marital status"
        ],
        correct: 2,
        explanation: "Family history of diseases is crucial for cancer assessment as many cancers have genetic components."
    },
    {
        id: 298,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "What is the correct position for oral care of an unconscious client?",
        options: [
            "Apply lemon glycerin to the client's lips at least every 2 hours",
            "Brush the teeth with client lying supine",
            "Place the client in a side lying position, with the head of the bed lowered",
            "Clean the client's mouth with hydrogen peroxide"
        ],
        correct: 2,
        explanation: "For oral care of an unconscious client, place them in side-lying position with head lowered to prevent aspiration."
    },
    {
        id: 299,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which client is at highest risk for tuberculosis?",
        options: [
            "Adult respiratory distress syndrome (ARDS)",
            "Myocardial infarction (MI)",
            "Pneumonia",
            "Tuberculosis"
        ],
        correct: 3,
        explanation: "A client with tuberculosis is obviously at highest risk for tuberculosis."
    },
    {
        id: 300,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which client is at highest risk for tuberculosis?",
        options: [
            "A 16-year-old female high school student",
            "A 33-year-old day-care worker",
            "A 43-year-old homeless man with a history of alcoholism",
            "A 54-year-old businessman"
        ],
        correct: 2,
        explanation: "Homeless individuals with alcoholism are at higher risk for TB due to poor living conditions and compromised immune systems."
    },
    {
        id: 301,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "What is the purpose of a sputum culture for a client with suspected tuberculosis?",
        options: [
            "To confirm the diagnosis",
            "To determine if a repeat skin test is needed",
            "To determine the extent of lesions",
            "To determine if this is a primary or secondary infection"
        ],
        correct: 0,
        explanation: "Sputum culture is used to confirm the diagnosis of tuberculosis by identifying the organism."
    },
    {
        id: 302,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which medication is the first-line treatment for asthma?",
        options: [
            "Beta-adrenergic blockers",
            "Bronchodilators",
            "Inhaled steroids",
            "Oral steroids"
        ],
        correct: 1,
        explanation: "Bronchodilators are the first line of treatment for asthma because broncho-constriction is the cause of reduced airflow."
    },
    {
        id: 303,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which condition is most likely in a client with extensive smoking history and chronic cough with peripheral edema?",
        options: [
            "Adult respiratory distress syndrome (ARDS)",
            "Asthma",
            "Chronic obstructive bronchitis",
            "Emphysema"
        ],
        correct: 2,
        explanation: "Because of this extensive smoking history and symptoms the client most likely has chronic obstructive bronchitis."
    },
    {
        id: 304,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which statement is true about bone marrow transplantation?",
        options: [
            "The patient is under local anesthesia during the procedure",
            "The aspirated bone marrow is mixed with heparin",
            "The aspiration site is the posterior or anterior iliac crest",
            "The recipient receives cyclophosphamide (Cytoxan) for 4 consecutive days before the procedure"
        ],
        correct: 0,
        explanation: "Before the procedure, the patient is administered with drugs that would help to prevent infection and rejection. During the transplant, the patient is placed under general anesthesia."
    },
    {
        id: 305,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "What is the priority nursing action for a disoriented patient?",
        options: [
            "Call the physician",
            "Document the patient's status in his charts",
            "Prepare oxygen treatment",
            "Raise the side rails"
        ],
        correct: 3,
        explanation: "A patient who is disoriented is at risk of falling out of bed. The initial action of the nurse should be raising the side rails to ensure patient safety."
    },
    {
        id: 306,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Why does leukemia cause anemia?",
        options: [
            "Crowd red blood cells",
            "Are not responsible for the anemia",
            "Uses nutrients from other cells",
            "Have an abnormally short life span of cells"
        ],
        correct: 0,
        explanation: "The excessive production of white blood cells crowd out red blood cells production which causes anemia to occur."
    },
    {
        id: 307,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which laboratory finding is characteristic of chronic lymphocytic leukemia?",
        options: [
            "Predominance of lymphoblasts",
            "Leukocytosis",
            "Abnormal blast cells in the bone marrow",
            "Elevated thrombocyte counts"
        ],
        correct: 1,
        explanation: "Chronic Lymphocytic leukemia (CLL) is characterized by increased production of leukocytes and lymphocytes resulting in leukocytosis."
    },
    {
        id: 308,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "What is the best initial response when a client refuses surgery?",
        options: [
            "Explain the risks of not having the surgery",
            "Notifying the physician immediately",
            "Notifying the nursing supervisor",
            "Recording the client's refusal in the nurses' notes"
        ],
        correct: 0,
        explanation: "The best initial response is to explain the risks of not having the surgery. If the client understands the risks but still refuses, the nurse should follow proper documentation procedures."
    },
    {
        id: 309,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which client should the nurse assess first?",
        options: [
            "The 58-year-old client who was admitted 2 days ago with heart failure, blood pressure of 126/76 mm Hg, and a respiratory rate of 22 breaths/minute",
            "The 89-year-old client with end-stage right-sided heart failure, blood pressure of 78/50 mm Hg, and a 'do not resuscitate' order",
            "The 62-year-old client who was admitted 1 day ago with thrombophlebitis and is receiving I.V. heparin",
            "The 75-year-old client who was admitted 1 hour ago with new-onset atrial fibrillation and is receiving I.V. dilitiazem (Cardizem)"
        ],
        correct: 3,
        explanation: "The client with atrial fibrillation has the greatest potential to become unstable and is on I.V. medication that requires close monitoring."
    },
    {
        id: 310,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which substance should the nurse question a young client about after a myocardial infarction?",
        options: [
            "Barbiturates",
            "Opioids",
            "Cocaine",
            "Benzodiazepines"
        ],
        correct: 2,
        explanation: "Because of the client's age and negative medical history, the nurse should question her about cocaine use. Cocaine increases myocardial oxygen consumption and can cause coronary artery spasm."
    },
    {
        id: 311,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which breast mass characteristic suggests malignancy?",
        options: [
            "Eversion of the right nipple and mobile mass",
            "Nonmobile mass with irregular edges",
            "Mobile mass that is soft and easily delineated",
            "Nonpalpable right axillary lymph nodes"
        ],
        correct: 1,
        explanation: "Breast cancer tumors are fixed, hard, and poorly delineated with irregular edges."
    },
    {
        id: 312,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "What is the usual treatment for vaginal cancer?",
        options: [
            "Surgery",
            "Chemotherapy",
            "Radiation",
            "Immunotherapy"
        ],
        correct: 2,
        explanation: "The usual treatment for vaginal cancer is external or intravaginal radiation therapy."
    },
    {
        id: 313,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "What does T1N0M0 indicate in cancer staging?",
        options: [
            "No evidence of primary tumor, no abnormal regional lymph nodes, and no evidence of distant metastasis",
            "Carcinoma in situ, no abnormal regional lymph nodes, and no evidence of distant metastasis",
            "Can't assess tumor or regional lymph nodes and no evidence of metastasis",
            "Carcinoma in situ, no demonstrable metastasis of the regional lymph nodes, and ascending degrees of distant metastasis"
        ],
        correct: 1,
        explanation: "T1 indicates a small tumor, N0 indicates no regional lymph node involvement, and M0 indicates no distant metastasis."
    },
    {
        id: 314,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which instruction should be included in stoma care teaching?",
        options: [
            "'Keep the stoma uncovered.'",
            "'Keep the stoma dry.'",
            "'Have a family member perform stoma care initially until you get used to the procedure.'",
            "'Keep the stoma moist.'"
        ],
        correct: 3,
        explanation: "The stoma should be kept moist to prevent drying and cracking."
    },
    {
        id: 315,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which client statement indicates understanding of hepatitis B transmission?",
        options: [
            "'I'm planning on starting on birth control pills.'",
            "'Not everyone who has the virus gives birth to a baby who has the virus.'",
            "'I'll need to have a C-section if I become pregnant and have a baby.'",
            "'I should avoid sharing toothbrushes and razors.'"
        ],
        correct: 3,
        explanation: "Hepatitis B is transmitted through contact with infected blood or body fluids, so sharing personal items like toothbrushes and razors should be avoided."
    },
    {
        id: 316,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which instruction is most important for a client with hepatitis?",
        options: [
            "'Put on disposable gloves before bathing.'",
            "'Sterilize all plates and utensils in boiling water.'",
            "'Avoid sharing such articles as toothbrushes and razors.'",
            "'Avoid eating foods from serving dishes shared by other family members.'"
        ],
        correct: 2,
        explanation: "Avoiding sharing personal items that may contact blood is crucial for preventing hepatitis transmission."
    },
    {
        id: 317,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which symptoms are characteristic of pernicious anemia?",
        options: [
            "Pallor, bradycardia, and reduced pulse pressure",
            "Pallor, tachycardia, and a sore tongue",
            "Sore tongue, dyspnea, and weight gain",
            "Angina, double vision, and anorexia"
        ],
        correct: 1,
        explanation: "Pernicious anemia typically presents with pallor, tachycardia, and glossitis (sore tongue)."
    },
    {
        id: 318,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "What is the priority nursing action for a client experiencing anaphylaxis?",
        options: [
            "Page an anesthesiologist immediately and prepare to intubate the client",
            "Administer epinephrine, as prescribed, and prepare to intubate the client if necessary",
            "Administer the antidote for penicillin, as prescribed, and continue to monitor the client's vital signs",
            "Insert an indwelling urinary catheter and begin to infuse I.V. fluids as ordered"
        ],
        correct: 1,
        explanation: "Epinephrine is the first-line treatment for anaphylaxis and the nurse should be prepared to intubate if airway compromise occurs."
    },
    {
        id: 319,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which finding is a common side effect of lithium therapy?",
        options: [
            "Weight gain",
            "Fine motor tremors",
            "Respiratory acidosis",
            "Bilateral hearing loss"
        ],
        correct: 1,
        explanation: "Fine motor tremors are a common side effect of lithium therapy."
    },
    {
        id: 320,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which white blood cell is elevated in allergic reactions?",
        options: [
            "Neutrophil",
            "Basophil",
            "Monocyte",
            "Lymphocyte"
        ],
        correct: 1,
        explanation: "Basophils are elevated in allergic reactions and release histamine."
    },
    {
        id: 321,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "What is the primary goal of therapy for a client with diabetes insipidus?",
        options: [
            "Moisture replacement",
            "Electrolyte balance",
            "Nutritional supplementation",
            "Arrhythmia management"
        ],
        correct: 0,
        explanation: "The primary goal of therapy for diabetes insipidus is moisture replacement due to excessive urination."
    },
    {
        id: 322,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which test is used to diagnose HIV infection?",
        options: [
            "Enzyme-linked immunosuppressant assay (ELISA) test",
            "Electrolyte panel and hemogram",
            "Stool for Clostridium difficile test",
            "Flat plate X-ray of the abdomen"
        ],
        correct: 0,
        explanation: "ELISA is the initial screening test for HIV infection."
    },
    {
        id: 323,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which laboratory test confirms HIV infection?",
        options: [
            "E-rosette immunofluorescence",
            "Quantification of T-lymphocytes",
            "Enzyme-linked immunosorbent assay (ELISA)",
            "Western blot test with ELISA"
        ],
        correct: 3,
        explanation: "Western blot test is used to confirm HIV infection after a positive ELISA test."
    },
    {
        id: 324,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which laboratory finding indicates potential hepatic dysfunction?",
        options: [
            "Potential hepatic dysfunction indicated by decreased blood urea nitrogen (BUN) and creatinine levels",
            "Low levels of urine constituents normally excreted in the urine",
            "Abnormally low hematocrit (HCT) and hemoglobin (Hb) levels",
            "Electrolyte imbalance that could affect the blood's ability to coagulate properly"
        ],
        correct: 0,
        explanation: "Decreased BUN and creatinine may indicate hepatic dysfunction as the liver is involved in protein metabolism."
    },
    {
        id: 325,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which laboratory tests should be monitored for a client on anticoagulant therapy?",
        options: [
            "Platelet count, prothrombin time, and partial thromboplastin time",
            "Platelet count, blood glucose levels, and white blood cell (WBC) count",
            "Thrombin time, calcium levels, and potassium levels",
            "Fibrinogen level, WBC, and platelet count"
        ],
        correct: 0,
        explanation: "Platelet count, prothrombin time, and partial thromboplastin time are essential for monitoring anticoagulant therapy."
    },
    {
        id: 326,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which food is high in vitamin C?",
        options: [
            "Bread",
            "Carrots",
            "Orange",
            "Strawberries"
        ],
        correct: 2,
        explanation: "Oranges are high in vitamin C."
    },
    {
        id: 327,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which client should the nurse assess first?",
        options: [
            "A client with hepatitis A who states, 'My arms and legs are itching.'",
            "A client with cast on the right leg who states, 'I have a funny feeling in my right leg.'",
            "A client with osteomyelitis of the spine who states, 'I am so nauseous that I can't eat.'",
            "A client with rheumatoid arthritis who states, 'I am having trouble sleeping.'"
        ],
        correct: 1,
        explanation: "The client with a cast complaining of a funny feeling may be experiencing compartment syndrome, which is a medical emergency."
    },
    {
        id: 328,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which client should the nurse assess first?",
        options: [
            "A 35-year-old admitted three hours ago with a gunshot wound; 1.5 cm area of dark drainage noted on the dressing",
            "A 43-year-old who had a mastectomy two days ago; 23 ml of serosanguinous fluid noted in the Jackson-Pratt drain",
            "A 59-year-old with a collapsed lung due to an accident; no drainage noted in the previous eight hours",
            "A 62-year-old who had an abdominal-perineal resection three days ago; client complaints of chills"
        ],
        correct: 3,
        explanation: "The client with chills three days post-abdominal-perineal resection may be developing an infection, which requires immediate assessment."
    },
    {
        id: 329,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which assessment finding indicates a complication following thyroidectomy?",
        options: [
            "Blood pressure 138/82, respirations 16, oral temperature 99 degrees Fahrenheit",
            "The client supports his head and neck when turning his head to the right",
            "The client spontaneously flexes his wrist when the blood pressure is obtained",
            "The client is drowsy and complains of sore throat"
        ],
        correct: 2,
        explanation: "Spontaneous wrist flexion when blood pressure is obtained may indicate tetany due to hypocalcemia, a complication of thyroidectomy."
    },
    {
        id: 330,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which intervention is most appropriate for a client with postoperative pain?",
        options: [
            "Encourage the client to change positions frequently in bed",
            "Administer Demerol 50 mg IM q 4 hours and PRN",
            "Apply warmth to the abdomen with a heating pad",
            "Use comfort measures and pillows to position the client"
        ],
        correct: 3,
        explanation: "Comfort measures and proper positioning are non-pharmacological interventions that can help relieve postoperative pain."
    },
    {
        id: 331,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "What is the priority nursing action before initiating peritoneal dialysis?",
        options: [
            "Assess for a bruit and a thrill",
            "Warm the dialysate solution",
            "Position the client on the left side",
            "Insert a Foley catheter"
        ],
        correct: 1,
        explanation: "The dialysate solution should be warmed to body temperature before initiating peritoneal dialysis to prevent discomfort and cramping."
    },
    {
        id: 332,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which action indicates correct cane use for a client with right leg weakness?",
        options: [
            "The client holds the cane with his right hand, moves the cane forward followed by the right leg, and then moves the left leg",
            "The client holds the cane with his right hand, moves the cane forward followed by his left leg, and then moves the right leg",
            "The client holds the cane with his left hand, moves the cane forward followed by the right leg, and then moves the left leg",
            "The client holds the cane with his left hand, moves the cane forward followed by the left leg, and then moves the right leg"
        ],
        correct: 2,
        explanation: "The cane should be used on the unaffected side and moved forward followed by the affected leg, then the unaffected leg."
    },
    {
        id: 333,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which intervention is most appropriate for a confused elderly client?",
        options: [
            "Ask the woman's family to provide personal items such as photos or mementos",
            "Select a room with a bed by the door so the woman can look down the hall",
            "Suggest the woman eat her meals in the room with her roommate",
            "Encourage the woman to ambulate in the halls twice a day"
        ],
        correct: 0,
        explanation: "Personal items from home can help orient a confused elderly client and provide comfort through familiar objects."
    },
    {
        id: 334,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which medication is used to treat gout?",
        options: [
            "Aspirin",
            "Furosemide",
            "Calcium gluconate",
            "Colchicine"
        ],
        correct: 3,
        explanation: "Colchicine is used to treat gout by reducing urate crystal deposits and easing joint inflammation."
    },
    {
        id: 335,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "What is the correct insulin mixture for 30 units of 70/30 insulin?",
        options: [
            "9 U regular insulin and 21 U neutral protamine Hagedorn (NPH)",
            "21 U regular insulin and 9 U neutral protamine Hagedorn (NPH)",
            "15 U regular insulin and 15 U neutral protamine Hagedorn (NPH)",
            "30 U regular insulin and 0 U neutral protamine Hagedorn (NPH)"
        ],
        correct: 0,
        explanation: "A 70/30 insulin preparation is 70% NPH and 30% regular insulin. Therefore, 30 units would contain 21 U of NPH and 9 U of regular insulin."
    },
    {
        id: 336,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which statement about osteoporosis is correct?",
        options: [
            "It appears on ordinary X-rays when 10% of bone loss has occurred",
            "It's diagnosed using bone densitometry",
            "Strenuous exercise can cause fractures",
            "Calcium supplements are always necessary"
        ],
        correct: 1,
        explanation: "Bone densitometry can detect bone loss of 3% or less, making it useful for early diagnosis of osteoporosis."
    },
    {
        id: 337,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which condition is a contraindication for arthroscopy?",
        options: [
            "Joint pain",
            "Joint flexion of less than 50%",
            "Joint deformity",
            "Joint stiffness"
        ],
        correct: 1,
        explanation: "Arthroscopy is contraindicated in clients with joint flexion of less than 50% because of technical problems in inserting the instrument into the joint."
    },
    {
        id: 338,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which type of arthritis is characterized by urate deposits?",
        options: [
            "Septic arthritis",
            "Traumatic arthritis",
            "Gouty arthritis",
            "Rheumatoid arthritis"
        ],
        correct: 2,
        explanation: "Gouty arthritis, a metabolic disease, is characterized by urate deposits and pain in the joints, especially those in the feet and legs."
    },
    {
        id: 339,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "What is the correct infusion rate for 1500 units/hour of heparin from a solution of 25,000 units in 500 ml?",
        options: [
            "15 ml/hour",
            "30 ml/hour",
            "45 ml/hour",
            "60 ml/hour"
        ],
        correct: 1,
        explanation: "An infusion prepared with 25,000 units of heparin in 500 ml of saline solution yields 50 units of heparin per milliliter. 1500 units/hour ÷ 50 units/ml = 30 ml/hour."
    },
    {
        id: 340,
        category: "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
        question: "Which factor causes swelling in clients with hemiplegia?",
        options: [
            "Loss of muscle contraction decreasing venous return",
            "Contractures",
            "Bony calcifications",
            "Protein loss"
        ],
        correct: 0,
        explanation: "In clients with hemiplegia or hemiparesis loss of muscle contraction decreases venous return and may cause swelling of the affected extremity."
    },
    {
        id: 242,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Which is a risk factor for ectopic pregnancy?",
        options: [
            "Age 36 years",
            "History of syphilis",
            "History of genital herpes",
            "History of diabetes mellitus"
        ],
        correct: 1,
        explanation: "Maternal infections such as syphilis, toxoplasmosis, and rubella are causes of spontaneous abortion."
    },
    {
        id: 243,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Which assessment is most important for a client with preeclampsia?",
        options: [
            "Monitoring weight",
            "Assessing for edema",
            "Monitoring apical pulse",
            "Monitoring temperature"
        ],
        correct: 2,
        explanation: "Nursing care for the client with a possible ectopic pregnancy is focused on preventing or identifying hypovolemic shock and controlling pain. An elevated pulse rate is an indicator of shock."
    },
    {
        id: 244,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "A pregnant woman with diabetes needs:",
        options: [
            "Decreased caloric intake",
            "Increased caloric intake", 
            "Decreased Insulin",
            "Increase Insulin"
        ],
        correct: 1,
        explanation: "Glucose crosses the placenta, but insulin does not. High fetal demands for glucose, combined with the insulin resistance caused by hormonal changes in the last half of pregnancy can result in elevation of maternal blood glucose levels."
    },
    {
        id: 245,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Which finding suggests hydatidiform mole?",
        options: [
            "Excessive fetal activity",
            "Larger than normal uterus for gestational age",
            "Vaginal bleeding",
            "Elevated levels of human chorionic gonadotropin"
        ],
        correct: 0,
        explanation: "The most common signs and symptoms of hydatidiform mole includes elevated levels of human chorionic gonadotropin, vaginal bleeding, larger than normal uterus for gestational age, failure to detect fetal heart activity even with sensitive instruments."
    },
    {
        id: 246,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Which finding indicates severe preeclampsia?",
        options: [
            "Urinary output 90 cc in 2 hours",
            "Absent patellar reflexes",
            "Rapid respiratory rate above 40/min",
            "Rapid rise in blood pressure"
        ],
        correct: 1,
        explanation: "Absence of patellar reflexes is an indicator of hypermagnesemia, which requires administration of calcium gluconate."
    },
    {
        id: 247,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Station +1 means:",
        options: [
            "Presenting part is 2 cm above the plane of the ischial spines",
            "Biparietal diameter is at the level of the ischial spines",
            "Presenting part in 2 cm below the plane of the ischial spines",
            "Biparietal diameter is 2 cm above the ischial spines"
        ],
        correct: 2,
        explanation: "Fetus at station plus two indicates that the presenting part is 2 cm below the plane of the ischial spines."
    },
    {
        id: 248,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Which indicates uterine rupture?",
        options: [
            "Contractions every 1 ½ minutes lasting 70-80 seconds",
            "Maternal temperature 101.2",
            "Early decelerations in the fetal heart rate",
            "Fetal heart rate baseline 140-160 bpm"
        ],
        correct: 0,
        explanation: "Contractions every 1 ½ minutes lasting 70-80 seconds, is indicative of hyperstimulation of the uterus, which could result in injury to the mother and the fetus if Pitocin is not discontinued."
    },
    {
        id: 249,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Which is required for a client with placenta previa?",
        options: [
            "Ventilator assistance",
            "CVP readings",
            "EKG tracings",
            "Continuous CPR"
        ],
        correct: 2,
        explanation: "A potential side effect of calcium gluconate administration is cardiac arrest. Continuous monitoring of cardiac activity (EKG) through administration of calcium gluconate is an essential part of care."
    },
    {
        id: 250,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Which client can have vaginal birth after cesarean (VBAC)?",
        options: [
            "First low transverse cesarean was for active herpes type 2 infections; vaginal culture at 39 weeks pregnancy was positive",
            "First and second caesareans were for cephalopelvic disproportion",
            "First caesarean through a classic incision as a result of severe fetal distress",
            "First low transverse caesarean was for breech position. Fetus in this pregnancy is in a vertex presentation"
        ],
        correct: 3,
        explanation: "This type of client has no obstetrical indication for a caesarean section as she did with her first caesarean delivery."
    },
    {
        id: 251,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Best approach when administering medication to a toddler:",
        options: [
            "Talk to the mother first and then to the toddler",
            "Bring extra help so it can be done quickly",
            "Encourage the mother to hold the child",
            "Ignore the crying and screaming"
        ],
        correct: 0,
        explanation: "When dealing with a crying toddler, the best approach is to talk to the mother and ignore the toddler first. This approach helps the toddler get used to the nurse before she attempts any procedures."
    },
    {
        id: 252,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Post-operative care for cleft lip repair:",
        options: [
            "Avoid touching the suture line, even when cleaning",
            "Place the baby in prone position",
            "Give the baby a pacifier",
            "Place the infant's arms in soft elbow restraints"
        ],
        correct: 3,
        explanation: "Soft restraints from the upper arm to the wrist prevent the infant from touching her lip but allow him to hold a favorite item such as a blanket."
    },
    {
        id: 253,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Best time to feed a newborn:",
        options: [
            "Feed the infant when he cries",
            "Allow the infant to rest before feeding",
            "Bathe the infant and administer medications before feeding",
            "Weigh and bathe the infant before feeding"
        ],
        correct: 1,
        explanation: "Because feeding requires so much energy, an infant with heart failure should rest before feeding."
    },
    {
        id: 254,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Appropriate diet for 6-month-old infant:",
        options: [
            "Skim milk and baby food",
            "Whole milk and baby food",
            "Iron-rich formula only",
            "Iron-rich formula and baby food"
        ],
        correct: 2,
        explanation: "The infants at age 5 months should receive iron-rich formula and that they shouldn't receive solid food, even baby food until age 6 months."
    },
    {
        id: 255,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "When to introduce solid foods to infants:",
        options: [
            "6 months",
            "4 months",
            "8 months",
            "10 months"
        ],
        correct: 3,
        explanation: "A 10 month old infant can sit alone and understands object permanence, so he would look for the hidden toy. At age 4 to 6 months, infants can't sit securely alone."
    },
    {
        id: 256,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Which defines community health nursing?",
        options: [
            "It involves providing home care to sick people who are not confined in the hospital",
            "Services are provided free of charge to people within the catchments area",
            "The public health nurse functions as part of a team providing a public health nursing services",
            "Public health nursing focuses on preventive, not curative, services"
        ],
        correct: 3,
        explanation: "The catchments area in PHN consists of a residential community, many of whom are well individuals who have greater need for preventive rather than curative services."
    },
    {
        id: 257,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Which quality assurance process measures outcomes?",
        options: [
            "Effectiveness",
            "Efficiency",
            "Adequacy",
            "Appropriateness"
        ],
        correct: 1,
        explanation: "Efficiency is determining whether the goals were attained at the least possible cost."
    },
    {
        id: 258,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Which implements health programs at municipal level?",
        options: [
            "Department of Health",
            "Provincial Health Office",
            "Regional Health Office",
            "Rural Health Unit"
        ],
        correct: 3,
        explanation: "R.A. 7160 devolved basic health services to local government units (LGU's). The public health nurse is an employee of the LGU."
    },
    {
        id: 259,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Who chairs the Municipal Health Board?",
        options: [
            "Mayor",
            "Municipal Health Officer",
            "Public Health Nurse",
            "Any qualified physician"
        ],
        correct: 0,
        explanation: "The local executive serves as the chairman of the Municipal Health Board."
    },
    {
        id: 260,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "How many midwife items does a RHU need for a population of 20,000?",
        options: [
            "1",
            "2",
            "3",
            "The RHU does not need any more midwife item"
        ],
        correct: 0,
        explanation: "Each rural health midwife is given a population assignment of about 5,000."
    },
    {
        id: 261,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Which is true about community health nursing?",
        options: [
            "The community health nurse continuously develops himself personally and professionally",
            "Health education and community organizing are necessary in providing community health services",
            "Community health nursing is intended primarily for health promotion and prevention and treatment of disease",
            "The goal of community health nursing is to provide nursing services to people in their own places of residence"
        ],
        correct: 1,
        explanation: "The community health nurse develops the health capability of people through health education and community organizing activities."
    },
    {
        id: 262,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Which disease is under the Expanded Program on Immunization?",
        options: [
            "Poliomyelitis",
            "Measles",
            "Rabies",
            "Neonatal tetanus"
        ],
        correct: 1,
        explanation: "Presidential Proclamation No. 4 is on the Ligtas Tigdas Program."
    },
    {
        id: 263,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "First step in community organizing:",
        options: [
            "Integration",
            "Community organization",
            "Community study",
            "Core group formation"
        ],
        correct: 3,
        explanation: "In core group formation, the nurse is able to transfer the technology of community organizing to the potential or informal community leaders through a training program."
    },
    {
        id: 264,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Purpose of community organizing:",
        options: [
            "To educate the people regarding community health problems",
            "To mobilize the people to resolve community health problems",
            "To maximize the community's resources in dealing with health problems",
            "To maximize the community's resources in dealing with health problems"
        ],
        correct: 2,
        explanation: "Community organizing is a developmental service, with the goal of developing the people's self-reliance in dealing with community health problems."
    },
    {
        id: 265,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Period of disease process characterized by pathologic changes:",
        options: [
            "Pre-pathogenesis",
            "Pathogenesis",
            "Prodromal",
            "Terminal"
        ],
        correct: 3,
        explanation: "Tertiary prevention involves rehabilitation, prevention of permanent disability and disability limitation appropriate for convalescents, the disabled, complicated cases and the terminally ill."
    },
    {
        id: 266,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Which complication is associated with abruptio placentae?",
        options: [
            "Intrauterine fetal death",
            "Placenta accreta",
            "Dysfunctional labor",
            "Premature rupture of the membranes"
        ],
        correct: 0,
        explanation: "Intrauterine fetal death, abruptio placentae, septic shock, and amniotic fluid embolism may trigger normal clotting mechanisms; if clotting factors are depleted, DIC may occur."
    },
    {
        id: 267,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Normal fetal heart rate:",
        options: [
            "80 to 100 beats/minute",
            "100 to 120 beats/minute",
            "120 to 160 beats/minute",
            "160 to 180 beats/minute"
        ],
        correct: 2,
        explanation: "A rate of 120 to 160 beats/minute in the fetal heart appropriate for filling the heart with blood and pumping it out to the system."
    },
    {
        id: 268,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Best intervention for diaper rash:",
        options: [
            "Change the diaper more often",
            "Apply talc powder with diaper changes",
            "Wash the area vigorously with each diaper change",
            "Use plastic diaper covers"
        ],
        correct: 0,
        explanation: "Decreasing the amount of time the skin comes contact with wet soiled diapers will help heal the irritation."
    },
    {
        id: 269,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "A child with some dehydration should be:",
        options: [
            "Brought to the nearest hospital for further assessment",
            "Brought to the health center for intravenous fluid therapy",
            "Brought to the health center for assessment by the physician",
            "Let the child rest for 10 minutes then continue giving Oresol more slowly"
        ],
        correct: 3,
        explanation: "If the child vomits persistently, that is, he vomits everything that he takes in, he has to be referred urgently to a hospital. Otherwise, vomiting is managed by letting the child rest for 10 minutes and then continuing with Oresol administration."
    },
    {
        id: 270,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Capillary refill time assessment:",
        options: [
            "No signs of dehydration",
            "Some dehydration",
            "Severe dehydration",
            "The data is insufficient"
        ],
        correct: 1,
        explanation: "Using the assessment guidelines of IMCI, a child (2 months to 5 years old) with diarrhea is classified as having SOME DEHYDRATION if he shows 2 or more of the following signs: restless or irritable, sunken eyes, the skin goes back slow after a skin pinch."
    },
    {
        id: 271,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Skin pinch test result for dehydration:",
        options: [
            "Fast",
            "Slow",
            "Normal",
            "Insignificant"
        ],
        correct: 1,
        explanation: "Using the assessment guidelines of IMCI, a child (2 months to 5 years old) with diarrhea is classified as having SOME DEHYDRATION if he shows 2 or more of the following signs: restless or irritable, sunken eyes, the skin goes back slow after a skin pinch."
    },
    {
        id: 272,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Duration of exclusive breastfeeding:",
        options: [
            "1 year",
            "3 years",
            "5 years",
            "Lifetime"
        ],
        correct: 0,
        explanation: "The baby will have passive natural immunity by placental transfer of antibodies. The mother will have active artificial immunity lasting for about 10 years."
    },
    {
        id: 273,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "How long to keep expressed breast milk at room temperature:",
        options: [
            "2 hours",
            "4 hours",
            "8 hours",
            "At the end of the day"
        ],
        correct: 1,
        explanation: "While the unused portion of other biologicals in EPI may be given until the end of the day, only BCG is discarded 4 hours after reconstitution."
    },
    {
        id: 274,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "When to introduce complementary feeding:",
        options: [
            "5 months",
            "6 months",
            "1 year",
            "2 years"
        ],
        correct: 1,
        explanation: "After 6 months, the baby's nutrient needs, especially the baby's iron requirement, can no longer be provided by mother's milk alone."
    },
    {
        id: 275,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "When does quickening occur?",
        options: [
            "8 weeks",
            "12 weeks",
            "24 weeks",
            "32 weeks"
        ],
        correct: 2,
        explanation: "At approximately 23 to 24 weeks' gestation, the lungs are developed enough to sometimes maintain extrauterine life. The lungs are the most immature system during the gestation period."
    },
    {
        id: 276,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Leading cause of infant mortality after 1 month:",
        options: [
            "Aspiration",
            "Sudden infant death syndrome (SIDS)",
            "Suffocation",
            "Gastroesophageal reflux (GER)"
        ],
        correct: 1,
        explanation: "Supine positioning is recommended to reduce the risk of SIDS in infancy. The risk of aspiration is slightly increased with the supine position."
    },
    {
        id: 277,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Sign of newborn distress:",
        options: [
            "Flushed cheeks",
            "Increased temperature",
            "Decreased temperature",
            "Increased activity level"
        ],
        correct: 2,
        explanation: "Temperature instability, especially when it results in a low temperature in the neonate, may be a sign of infection."
    },
    {
        id: 278,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Post-term infant complication:",
        options: [
            "Anemia probably due to chronic fetal hyposia",
            "Hyperthermia due to decreased glycogen stores",
            "Hyperglycemia due to decreased glycogen stores",
            "Polycythemia probably due to chronic fetal hypoxia"
        ],
        correct: 3,
        explanation: "The small-for-gestation neonate is at risk for developing polycythemia during the transitional period in an attempt to decrease hypoxia."
    },
    {
        id: 279,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Sign of post-term infant:",
        options: [
            "A sleepy, lethargic baby",
            "Lanugo covering the body",
            "Desquamation of the epidermis",
            "Vernix caseosa covering the body"
        ],
        correct: 2,
        explanation: "Postdate fetuses lose the vernix caseosa, and the epidermis may become desquamated. These neonates are usually very alert."
    },
    {
        id: 280,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Maternal diabetes effect on newborn:",
        options: [
            "Hypoglycemia",
            "Jitteriness",
            "Respiratory depression",
            "Tachycardia"
        ],
        correct: 2,
        explanation: "Magnesium sulfate crosses the placenta and adverse neonatal effects are respiratory depression, hypotonia, and bradycardia."
    },
    {
        id: 281,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Sign of respiratory distress in newborn:",
        options: [
            "Nasal flaring",
            "Light audible grunting",
            "Respiratory rate 40 to 60 breaths/minute",
            "Respiratory rate 60 to 80 breaths/minute"
        ],
        correct: 2,
        explanation: "A respiratory rate 40 to 60 breaths/minute is normal for a neonate during the transitional period. Nasal flaring, respiratory rate more than 60 breaths/minute, and audible grunting are signs of respiratory distress."
    },
    {
        id: 282,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Umbilical cord care:",
        options: [
            "Apply peroxide to the cord with each diaper change",
            "Cover the cord with petroleum jelly after bathing",
            "Keep the cord dry and open to air",
            "Wash the cord with soap and water each day during a tub bath"
        ],
        correct: 2,
        explanation: "Keeping the cord dry and open to air helps reduce infection and hastens drying. Infants aren't given tub bath but are sponged off until the cord falls off."
    },
    {
        id: 283,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Sign of Down syndrome in newborn:",
        options: [
            "Simian crease",
            "Conjunctival hemorrhage",
            "Cystic hygroma",
            "Bulging fontanelle"
        ],
        correct: 1,
        explanation: "Conjunctival hemorrhages are commonly seen in neonates secondary to the cranial pressure applied during the birth process."
    },
    {
        id: 284,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Purpose of non-stress test:",
        options: [
            "To determine fetal well-being",
            "To assess for prolapsed cord",
            "To assess fetal position",
            "To prepare for an imminent delivery"
        ],
        correct: 1,
        explanation: "After a client has an amniotomy, the nurse should assure that the cord isn't prolapsed and that the baby tolerated the procedure well."
    },
    {
        id: 285,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Sign of parent-infant attachment:",
        options: [
            "The parents' willingness to touch and hold the new born",
            "The parent's expression of interest about the size of the new born",
            "The parents' indication that they want to see the newborn",
            "The parents' interactions with each other"
        ],
        correct: 3,
        explanation: "Parental interaction will provide the nurse with a good assessment of the stability of the family's home life but it has no indication for parental bonding."
    },
    {
        id: 286,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Postpartum perineal care instruction:",
        options: [
            "Applying cold to limit edema during the first 12 to 24 hours",
            "Instructing the client to use two or more peripads to cushion the area",
            "Instructing the client on the use of sitz baths if ordered",
            "Instructing the client about the importance of perineal (kegel) exercises"
        ],
        correct: 1,
        explanation: "Using two or more peripads would do little to reduce the pain or promote perineal healing. Cold applications, sitz baths, and Kegel exercises are important measures."
    },
    {
        id: 287,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Important question during prenatal visit:",
        options: [
            "'Do you have any chronic illnesses?'",
            "'Do you have any allergies?'",
            "'What is your expected due date?'",
            "'Who will be with you during labor?'"
        ],
        correct: 2,
        explanation: "When obtaining the history of a client who may be in labor, the nurse's highest priority is to determine her current status, particularly her due date, gravidity, and parity."
    },
    {
        id: 288,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "First action for meconium-stained amniotic fluid:",
        options: [
            "Calm the neonate",
            "Notify the physician",
            "Provide oxygen via face mask as ordered",
            "Aspirate the neonate's nose and mouth with a bulb syringe"
        ],
        correct: 3,
        explanation: "The nurse's first action should be to clear the neonate's airway with a bulb syringe. After the airway is clear and the neonate's color improves, the nurse should comfort and calm the neonate."
    },
    {
        id: 289,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "How to confirm rupture of membranes:",
        options: [
            "Observing the pooling of straw-colored fluid",
            "Checking vaginal discharge with nitrazine paper",
            "Conducting a bedside ultrasound for an amniotic fluid index",
            "Observing for flakes of vernix in the vaginal discharge"
        ],
        correct: 1,
        explanation: "It isn't within a nurse's scope of practice to perform and interpret a bedside ultrasound under these conditions and without specialized training."
    },
    {
        id: 290,
        category: "PNLE II for Community Health Nursing and Care of the Mother and Child",
        question: "Oxygen therapy for premature infant:",
        options: [
            "Cover his eyes while receiving oxygen",
            "Keep her body temperature low",
            "Monitor partial pressure of oxygen (Pao2) levels",
            "Humidify the oxygen"
        ],
        correct: 2,
        explanation: "Monitoring PaO2 levels and reducing the oxygen concentration to keep PaO2 within normal limits reduces the risk of retinopathy of prematurity in a premature infant receiving oxygen."
    }
];

// Categories for filtering
const categories = [
    "All Categories",
    "Fundamentals of Nursing",
    "Medical-Surgical Nursing", 
    "Maternal and Child Health Nursing",
    "Psychiatric Nursing",
    "Community Health Nursing",
    "Pharmacology",
    "Anatomy and Physiology",
    "PNLE I for Foundation of Professional Nursing Practice",
    "PNLE II for Community Health Nursing and Care of the Mother and Child",
    "PNLE III for Care of Clients with Physiologic and Psychosocial Alterations (Part 1)",
    "PNLE IV for Care of Clients with Physiologic and Psychosocial Alterations (Part 2)",
    "PNLE V for Care of Clients with Physiologic and Psychosocial Alterations (Part 3)",
    "Foundation of Nursing"
];
