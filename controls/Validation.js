
function vaildate() {
    const required = document.getElementById("required-feild");
    if (required.value == ""){
        alert ("Please select an option.")
        return false;
    }
    return true;
}