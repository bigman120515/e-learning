// onboarding Email validation
export function isEmail(email){
    let emailPattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(emailPattern.test(email)){
        return true
    }
    else{
        return false
    }
}