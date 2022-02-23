# TODO

#### print **[not started]**
* Read-Only - PDF (Mailto:)
* ‘Share/ View Printable’?
* * validate email for sharing / printing

#### user friendly **[almost done]**
* finalize responsiveness **[working on: Nichole / Arianna]**
* transfer / non-native speaker - add if they have taken any college credits in the past **[done]**
* disclaimer that this is not an official document **[done]**
* validation for inputs - red asterisk and label explaining what's wrong
* "dont know your gpa?" checkbox -> send you to SAT
* SAT "taken" radio - button click event handler takes user to Accuplacer **[working on: Nichole]**

#### logic
* year  graduated high school - switch years for math and english
	* if between 3-5 years ago, only english can be evaluated
	* Keep Year - 3 year Math / 5 year English limit *(ADD TO MULTIPLE MEASURES DROPDOWN AND SAT TEXT INPUT)* **[not started]**
	* if >5 5 years ago, add something to skip to SAT
* gpa- if left blank what happens? is it optional **[done]**
	* is the high school course info important to know if student doesn't have gpa or can it be skipped
* accuplacer score - if any one score is left blank, will that be a problem?
	* ask when they took it, >5 years then they have to retake it (like SAT)
* connect ui to modules
* high school drop down - list for each course offered at selected high school
	* morris has a list of different courses from the schools, she's emailing them to prof gamrat
	* or have them input the title of the course they took if not listed (like high school dropdown - ANOTHER POPUP ARE WE EXCITE
	* high schools change the titles of their courses- this would make it so we don't have to update the courses for each high school
* figure out why (mathOptionGPA.js ln 19) doesn't work