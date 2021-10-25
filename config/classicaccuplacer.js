// back-end

//These functions  are going to help to determine their placement based on Classic accuplacer.

//Math Classic Accuplacer
function accuplacermath(arit, quant) {
    if(arit<25){
        return 'Nashua Adult Learning Center ABE';
                }
      else {
        if (arit<60) {
            return 'MATH090 College Transition Program';
        }
          else {
            if (quant<63) {
                return 'Co - requsite Workshop with courses: MATH103N, MATH106N, MATH110N';
            } else {
                if (quant < 80) {
                    return 'MATH103 or Co-Requisite Workshop with courses:MATH106N, MATH110N';
                } else {
                    if (quant > 80) {
                    return 'MATH106N, MATH110N';
                } else {
                    return 'Not defined';
                }
            }
                }
        
    }
    }
    //English Classic Accuplacer
function accuplacereng(writting, essay) {
    if (writting <= 40) {
        return 'Nashua Adult Learning Center ABE';
    }
    else {
        if (writting <= 54 && essay <= 3) {
            return 'ENGL090 College Transition Program';//***Requires permission of the Honors Program Coordinator/Admission

        } else {
            if (writting <= 54 && essay >= 4) {
                return 'Refer to English Program Coordinator';
            } else {
                if (writting <= 69 && essay <= 3) {
                    return 'Refer to English Profram Coordinator';
                } else {
                    if (writting <= 69 && essay == 4) {
                        return 'ENGL101N w/ Co-Req';
                    }
                        else {
                        if (writting <= 69 && essay >= 5) {
                            return 'Refer to English Program Coordinator';
                        } else {
                            if (writting >= 70 && essay >= 5) {
                                return 'ENGL101N';
                            } else {
                                if (writting >= 95 && essay >= 6) {
                                    return 'ENGL101N or ENGL110N';
                                }
                                    else {
                                    if (writting >= 70 && essay >= 5) {
                                        return 'ENGL101N';
                                    } else { 
                                        return 'Not defined';
                                    }
                                    }
                                

                                
                            }
                        }
                        }
                    
                }

            }
                

        }
    }
        
    }
}

