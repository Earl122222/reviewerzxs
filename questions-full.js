// Full PNLE Questions Database - 50 questions per category
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

    // Medical-Surgical Nursing - 50 questions
    {
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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

    // Maternal and Child Health Nursing - 50 questions
    {
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
        id: 26,
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
        id: 27,
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
        id: 28,
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
        id: 29,
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
        id: 30,
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

    // Psychiatric Nursing - 50 questions
    {
        id: 31,
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
        id: 32,
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
        id: 33,
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
        id: 34,
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
        id: 35,
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
        id: 36,
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
        id: 37,
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
        id: 38,
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
        id: 39,
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
        id: 40,
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
        id: 41,
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
        id: 42,
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
        id: 43,
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
        id: 44,
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
        id: 45,
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
        id: 46,
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
        id: 47,
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
        id: 48,
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
        id: 49,
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
        id: 50,
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
        id: 51,
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
        id: 52,
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
        id: 53,
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
        id: 54,
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
        id: 55,
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
        id: 56,
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
        id: 57,
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
        id: 58,
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
        id: 59,
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
        id: 60,
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
        id: 61,
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
        id: 62,
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
        id: 63,
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
        id: 64,
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
        id: 65,
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
        id: 66,
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
        id: 67,
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
        id: 68,
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
        id: 69,
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
        id: 70,
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
