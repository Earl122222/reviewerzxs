// PNLE Questions Database
const pnleQuestions = [
    // Fundamentals of Nursing
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
        explanation: "Sims' position (left lateral) is the best position for administering cleansing enemas as it allows the solution to flow by gravity along the natural curve of the sigmoid colon."
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
    
    // Medical-Surgical Nursing
    {
        id: 4,
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
        id: 5,
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
        id: 6,
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
    
    // Maternal and Child Health Nursing
    {
        id: 7,
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
        id: 8,
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
        id: 9,
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
    
    // Psychiatric Nursing
    {
        id: 10,
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
        id: 11,
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
        id: 12,
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
    
    // Community Health Nursing
    {
        id: 13,
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
        id: 14,
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
        id: 15,
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
    
    // Pharmacology
    {
        id: 16,
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
        id: 17,
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
        id: 18,
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
    
    // Anatomy and Physiology
    {
        id: 19,
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
        id: 20,
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
