# TODO

#### print **[not started]**
* Read-Only - PDF (Mailto:)
* ‘Share/ View Printable’?

#### user friendly **[almost done]**
* transfer / non-native speaker - add if they have taken any college credits in the past **[done]**
* disclaimer that this is not an official document **[done]**
* "dont know your gpa?" checkbox -> send you to SAT **[done]**
* finalize responsiveness **[working on]**
* validation for inputs - red asterisk and label explaining what's wrong

#### logic
* gpa- if left blank skip to SAT **[done]**
* year graduated high school - if between 3-5 years ago, only english can be evaluated; if graduated >5 years ago, skip to SAT **[done]**
* how do we know whether weighted or unweighted GPA is used? **[working on]**
	* we could just make them put it in, or otherwise skip to SAT
* high school select input changes dropdown content in hs math course dropdown — foreach (high school course equivalencies) **[important: not started]**
	* this is how mathOptionGPA fits in — courses will equal courses that make sense to NCC
* figure out why (mathOptionGPA.js ln 19) doesn't work
* turn SAT Date into dropdown, and add in identical dropdown to Accuplacer (identical to HS year graduated) to determine more than 5 years ago (if you redirect them, add in a note about why you're redirecting them) **[working on]**