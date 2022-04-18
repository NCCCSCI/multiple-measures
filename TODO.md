# TODO

#### print **[almost done]**
* Read-Only - PDF
* Print is actually a summary display of the user's selections
* Must be semantically correct
	* <header>
	* Include link to return to home page
	* <article>
	* <section>
	* <dl> with <dt> and <dd> for each user selection
	* <footer>
* Get data from localStorage
* Don't call print - objective is to provide a print view
 

#### user friendly **[almost done]**
* transfer / non-native speaker - add if they have taken any college credits in the past **[done]**
* disclaimer that this is not an official document **[done]**
* "dont know your gpa?" checkbox -> send you to SAT **[done]**
* Change title and <h1> to Multiple Measures **[done]**
* Branding - use the NCC palette
	* Logo is blue and some sort of sage green and white **[done]**
	* Sharper logo https://drive.google.com/file/d/1d94_gaBqS5s8a3uX_J2prtfitXUuhARH/view?usp=sharing **[done]**
* Run accessibility and Lighthouse (Chrome) **[done]**
* Bootstrap/jQuery/FontAwesome local to avoid CORS notices **[done: probably just a bitbucket problem]**
* Console empty **[working on]**
* finalize responsiveness **[working on]**
	* Must be tested on small devices (especially the evaluate workflow)
* HTML reflects configuration
* Dynamic updates work
* Code cleanup
 

#### logic
* gpa- if left blank skip to SAT **[done]**
* year graduated high school - if between 3-5 years ago, only english can be evaluated; if graduated >5 years ago, skip to SAT **[done]**
* turn SAT Date into dropdown, and add in identical dropdown to Accuplacer (identical to HS year graduated) to determine more than 5 years ago (if you redirect them, add in a note about why you're redirecting them) **[done]**
* high school select input changes dropdown content in hs math course dropdown — foreach (high school course equivalencies) **[done]**
	* this is how mathOptionGPA fits in — courses will equal courses that make sense to NCC
* how do we know whether weighted or unweighted GPA is used? **[working on: ask advising]**
	* we could just make them put it in, or otherwise skip to SAT
* can we get rid of the Other option? Please?
* Clear localStorage on load
* Consider reacting to on change, rather than Evaluate button **[leave alone]**
* Consider real-time display update **[leave alone**]
* how do we know whether weighted or unweighted GPA is used? **[done]**
* get rid of the Other option **[done]**
* Testing
	* Create a spreadsheet for all inputs
	* Handle empty data submissions
	* Check handling of "undefined" answers
* Check for extraneous storage