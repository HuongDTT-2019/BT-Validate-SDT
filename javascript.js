function validatePhoneNumber(str) {
    regexp=/^[(][0-9]{2}[)][-][(][0][0-9]{9}[)]$/;
    if (regexp.test(str)){
        return true;
    }
    return false;
}
function checkPhoneNumber() {
    let txt_phone_number=document.getElementById('inp_phone_number').value;
    console.log(validatePhoneNumber(txt_phone_number));
}