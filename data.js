// Global titles
const titles = [
    "Activity 1: The Elements of Fire",
    "Activity 2: Extinguishing Methods",
    "Activity 3: Types of Extinguishers",
    "Activity 4: Using a Fire Extinguisher"
]

// Global instructions before every activity
const instructions = [
  "Select an element to remove it from the fire triangle.",
  "Match the extinguishing method to the element in the graphic to extinguish the fire.",
  "Match the fire extinguisher type to the appropriate class of fire to put out the fire. There may be more than one class of fire per extinguisher.",
  "instruction 4"
];


// Global incorrect feedback
const globalIncorrectFeedback = "Incorrect. Please try again."

const activity_2_QuestionHeads = [
    "Question 1: Smother the fire",
    "Question 2: Starve the fire",
    "Question 3: Cool the fire",
    "Question 4: Interrupt the flame"
]
const activity_2_answers = [
    "Oxygen",
    "Fuel",
    "Heat",
    "Chemical Chain Reaction",
]

const activity_2_correctFeedbacks = [
    "That’s right! Fire can be extinguished by smothering which involves depriving the fire of the oxygen needed to sustain the combustion process.",
    "That’s right! Fire can be extinguished by starvation which involves depriving the fire of fuel.",
    "That’s right! Fire can be extinguished by cooling which involves depriving the fire of heat and reducing its temperature below the ignition temperature of the fuel.",
    "That’s right! Fire can be extinguished by applying extinguishing agents to the fire to interrupt the chemical chain reaction at the molecular level."
]

const activity_3_options = [
    "Select Class A fires.",
    "Select Class B fires.",
    "Select Class C fires.",
    "Select Class D fires.",
    "Select Class K fires."
]

const activity_3_questions = [
    "Question 1: Specialist Dry Powder Extinguisher (Met-L-X)",
    "Question 2: Dry Chemical (Multi-Purpose) Extinguisher",
    "Question 3: Wet Chemical Extinguisher",
    "Question 4: Water Extinguisher",
    "Question 5: Carbon Dioxide Extinguisher"
]

const activity_3_answers= [
    "Class D",
    "Class A, Class B, and Class C",
    "Class K",
    "Class A",
    "Class B and Class C"
]

const activity_3_correctFeedbacks = [
    "That’s right! Specialist dry powder extinguishers interrupt the chemical chain reaction by separating the combustible metal from the oxygen. Specialist dry powder extinguishers can be used on Class D fires.",
    "That’s right! Dry chemical (multi-purpose) extinguishers smother the fire by coating it with a thin layer of fire-retardant powder which removes the oxygen element. Dry chemical (multi-purpose) extinguishers can be used on Class A, B and C fires.",
    "That’s right! Wet chemical extinguishers smother the fire by covering it with foam. Wet chemical extinguishers can be used on Class K fires.",
    "That’s right! Water extinguishers cool the fire and cooling removes the heat element. Water extinguishers can be used on Class A fires only.",
    "That’s right! Carbon dioxide extinguishers remove both the oxygen and heat elements from the fire. Carbon dioxide extinguishers can be used on Class B and C fires."
]


// Correct feedbacks
const feedbacks = [
  "That’s right! Since all four of these elements must be present to create a fire, removing any one of these four elements will put out a fire.",
  activity_2_correctFeedbacks,
  activity_3_correctFeedbacks,
  "feedback 4"
];

// Global lables
const labels = ["Heat", "Oxygen", "Fuel", "Chemical Chain Reaction"];

// Question
const qHead =
  "<h2>TITLE</h2><p>Question content.</p><p><strong>Strong</strong> </p><p class='instructions'>INSTRUCTIONS.</p>";

const choices = [
  {
    choice: "Heat",
    value: 1,
    correct: true,
    order: 1
  },
  {
    choice: "Oxygen",
    value: 2,
    correct: true,
    order: 2
  },
  {
    choice: "Chemical Chain Reaction",
    value: 3,
    correct: true,
    order: 3
  },
  {
    choice: "Fuel",
    value: 4,
    correct: true,
    order: 4
  }
];


/* 
Welcome
Welcome to the Portable Fire Extinguisher Training (PFET) Quiz.
This quiz consists of 10 questions that are based on the information covered in the Portable Fire Extinguisher Training. 
You must obtain a score of 80% in order to pass the quiz. 
You have three attempts to complete the quiz.
There is no time limit to complete the quiz.
Note: If you exit before submitting your answers, your progress will not be saved and you will need to start from the beginning. You will also lose one attempt.
Good luck!


  
Question 1
Which of the following is NOT a method of extinguishing fire? Select one.
A. Using chemicals (flame interruption)
B. Using water (cooling)
C. Adding oxygen (oxygenating)
D. Removing fuel (starving)
Answer 1
C. Adding oxygen (oxygenating)
 
Question 2
What is the correct order of actions to use a fire extinguisher? Select one.
A. Aim, Squeeze, Spray
B. Pull Safety, Spray Away
C. Pull, Aim, Squeeze, Sweep
D. Aim, Pull, Squeeze, Sweep
Answer 2
C. Pull, Aim, Squeeze, Sweep



Question 3
What should be your first action when you discover a fire? Select one.
A. Remain low and report to the muster area
B. Do nothing, the Fire Department is on the way
C. Shout “FIRE-FIRE-FIRE! SOMEONE CALL 9-1-1!”
D. Use an extinguisher to fight the fire
Answer 3 
C. Shout “FIRE-FIRE-FIRE! SOMEONE CALL 9-1-1!”


Question 4
What should you do when using a fire extinguisher?
Select all that apply.
Aim the nozzle at the top of the fire 
Aim the nozzle at the base of the fire
C. Sweep the nozzle from side to side
D. Sweep the nozzle up and down

Answer 4
B. Aim the nozzle at the base of the fire
C. Sweep the nozzle from side to side

Question 5
When is it generally considered safe to use a fire extinguisher to put out the fire?
Select all that apply.
A. When you know what is burning
B. When you have the appropriate fire extinguisher for the fuel that is burning
C. When the fire is spreading rapidly
D. When the fire is below waist height and less than 2 meters wide
Answer 5
A. When you know what is burning
B. When you have the appropriate fire extinguisher for the fuel that is burning
D. When the fire is below waist height and less than 2 meters wide

Question 6

Ordinary combustible fires (Class A fires) are the only fires that can be extinguished using water. What are examples of ordinary combustibles? Select one.

Cooking oil, animal fat, vegetable oil

B. Grease, oil, paint

C. Wood, paper, cloth

D. Electrical panel, motor, wiring

Answer 6
C. Wood, paper, cloth


Question 7
What three elements need to be present for a chemical chain reaction to occur? Select one.
A. Fire, wind, gas 
B. Gas, oxygen, light 
C. Fuel, oxygen, heat
D. Heat, gas, oxygen 
Answer 7
C. Fuel, oxygen, heat

Question 8

What should you do when you hear an alarm? Select all that apply.

A. Proceed calmly to the escape routes

B. Use the elevator

C. Go to the designated muster area

D. Collect your personal items

Answer 8
A. Proceed calmly to the escape routes
C. Go to the designated muster area




Question 9
Until the power is disconnected, Class C (live electrical equipment) fires can re-ignite.
True
False

Answer 8
A. True 

Question 10
If you aren’t sure what class or classes of fire a fire extinguisher is rated for, use it anyway – it’s better than nothing! 
True
False
Answer 10 
False
 

Conclusion
This concludes the Portable Fire Extinguisher Training Quiz.
<if passed> Congratulations, you scored 80% or higher. 
You may proceed to the practical component of this training. For instructions on how to enroll for the practical component of the training at your location, open the Portable Fire Extinguisher Training – Practical Component document located on the DLN in the Activities section of this training.
<if failed> You did not score 80% or higher. Please try again.

*/