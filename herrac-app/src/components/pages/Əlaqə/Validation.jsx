export default function Validation(values) {
    const errors = {};

    const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;;

    if (values.name === "") {
        errors.name = " Adınızı daxil edin , zəhmət olmasa "
    }
    if(values.surname === ""){
        errors.surname="  Soyadınızı daxil edin , zəhmət olmasa  "
    }
   
    if(values.textarea ===""){
        errors.textarea= "Mətni daxil edin, zwəhmət olmasa "
    }
    // else if(values.textarea.length < 10 && values.textarea.length>100){
    //     errors.textarea = "Mətn daxil etmək aralığınız  [10 - 100] hərf aralığındandır . "
    // }
    if (values.email === "") {
        errors.email = " E-poçtunuzu daxil edin , zəhmət olmasa "
    }
    else if(!email_pattern.test(values.email)){
        errors.email = " E-poçtunuzu düzgün daxil edin , zəhmət olmasa "
    }
    return errors;
}