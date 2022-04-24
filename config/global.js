

const PREFIX = 'NCC_MM_';

const storageConfig = {
   name: {
        stName: PREFIX + 'stName',
        stID: PREFIX + 'stID',

       // highschool section inputs
       hsName: PREFIX + 'hsName', 
       hsYear: PREFIX + 'hsYear', 
       gpaText: PREFIX + 'gpaText', 
       gpaButton: PREFIX + 'gpaButton',
       hsEnglish: PREFIX + 'hsEnglish', 
       hsMath: PREFIX + 'hsMath', 
       sGpa: PREFIX + 'sGpa',  // scaled hs gpa
       wGpa: PREFIX + 'wGpa', // weighed hs gpa
       sRecommendMath: PREFIX + ' sRecommendMath', // recommended math class based off hs scaled gpa 
       sRecommendEnglish: PREFIX + ' sRecommendEnglish', // recommended english class based off hs scaled gpa 
       wRecommendMath: PREFIX + ' wRecommendMath', // recommended math class based off hs weighed gpa 
       wRecommendEnglish: PREFIX + ' wRecommendEnglish', // recommended english class based off hs weighed gpa 
       

       //accuplacer section inputs
       accuDate: PREFIX + 'accuDate', 
       wrtg: PREFIX + 'wrtg', 
       essy: PREFIX + 'essy', 
       arng: PREFIX + 'arng', 
       //aaf: PREFIX + 'aaf', 
       //qas: PREFIX + 'qas', 
       //thresholdWrtg: PREFIX + 'thresholdWrtg', 
       //thresholdQas : PREFIX + 'thresholdQas ', 
       //thresholdAaf: PREFIX + 'thresholdAaf', 
       wrtgPlacement: PREFIX + 'wrtgPlacement', 
       qasPlacement: PREFIX + 'qasPlacement', 
       arngPlacement: PREFIX + 'arngPlacement',
       aafPlacement: PREFIX + 'aafPlacement', 
       arngRange: PREFIX + 'arngRange', 
       qasRange: PREFIX + 'qasRange', 
       aafRange: PREFIX + 'aafRange', 

       // SAT section inputs
       satDate:PREFIX + 'satDate', 
       satMath: PREFIX + 'satMath',  
       satReading: PREFIX + 'satReading', 
       //thresholdMath: PREFIX + 'thresholdMath', 
       //thresholdReading: PREFIX + 'thresholdReading', 
       mathPlacement: PREFIX + 'mathPlacement', 
       readingPlacement: PREFIX + 'readingPlacement',


      
    
      
       

    }
}

export { storageConfig };