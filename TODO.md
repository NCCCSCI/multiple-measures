# TODO

#### print **[not started]**
* Read-Only - PDF (Mailto:)
* ‘Share/ View Printable’?
* * validate email for sharing / printing

#### user friendly **[almost done]**
* finalize responsiveness **[working on: Nichole / Arianna]**
* transfer / non-native speaker - add if they have taken any college credits in the past **[done]**
* disclaimer that this is not an official document **[done]**
* "dont know your gpa?" checkbox -> send you to SAT **[done]**
* SAT "taken" radio - button click event handler takes user to Accuplacer **[working on: Nichole]**
* validation for inputs - red asterisk and label explaining what's wrong

#### logic
* gpa- if left blank what happens? is it optional **[done]**
	* is the high school course info important to know if student doesn't have gpa or can it be skipped
* SAT Composite Score
* year graduated high school - switch years for math and english **[working on]**
	* if between 3-5 years ago, only english can be evaluated
	* if graduated >5 years ago, skip to SAT? talk to advising **[working on: Arianna]**
* high school drop down - list for each course offered at selected high school
	* high schools change the titles of their courses- this would make it so we don't have to update the courses for each high school
	* high school select input changes dropdown content in hs math course dropdown — foreach (high school course equivalencies)
		* this is how mathOptionGPA fits in — courses will equal courses that make sense to NCC
* figure out why (mathOptionGPA.js ln 19) doesn't work
* accuplacer score - if any one score is left blank, will that be a problem?
	* ask when they took it, >5 years then they have to retake it (like SAT)
* connect ui to modules
* 