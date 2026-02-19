// Enhanced PNLE Questions Database - Extracted from RNpedia
const pnleQuestions = [
    // Original questions + new ones from RNpedia
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
        category: "Pharmacology",
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
        id: 20,
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
    "Anatomy and Physiology"
];
