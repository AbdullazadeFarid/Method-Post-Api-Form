var form = document.querySelector("#form"); // formu cagirirg
const baseUrl = "https://jsonplaceholder.typicode.com/posts";
function submit(e,formData) {
  console.log("l");
  e.preventDefault();
  console.log("hh",formData);
    if(a == true){
    function display() {
        form.reset();
        form.style.display = "none";
        message.style.display = "flex";
    setTimeout(() => {
      form.style.display = "flex";
      message.style.display = "none";
    }, 2000);
    }

        fetch(baseUrl, {
    method: "POST", //post edirik
    body: formData, // gonderilen data bpdy ye gonderilir
        })
        .then((response) => {
      console.log(response);
      display();
      return response.json();
        })
        .catch((error) => {
      //sora deyirikki eger cavab vermese ekranda error ver .catch errorlari tutmag ucundu
      console.log(error);
      form.style.display = "none";
      error_message.style.display = "flex";
      display_error()
        });
    }
    else{
        console.log("bosdu")
        display_error()
    function display_error() {
        // form.reset();
        form.style.display = "none";
        error_message.style.display = "flex";
        console.log("bosdu")

        setTimeout(() => {
            form.style.display = "flex";
            error_message.style.display = "none";
        }, 2000);
      }
    }

}


var message = document.querySelector(".message");

var succes = document.createElement("img");
message.appendChild(succes);
succes.src = "./assets/success-icon-512x512-qdg1isa0.png";

var succes_message = document.createElement("h3");
message.appendChild(succes_message);
succes_message.textContent = "Ugurlu emeliyat!!!!";
succes_message.classList.add("error");

error_message = document.querySelector(".error_message");

var error_icon = document.createElement("img");
error_message.appendChild(error_icon);
error_icon.src = "./assets/781548.png";

var erron_text = document.createElement("h3");
error_message.appendChild(erron_text);
erron_text.textContent = "XeTA";



var firstname = document.querySelector("#firstname")
var firsname_error = document.querySelector(".firsname_error")

var lastname = document.querySelector("#lastname")
lastname_error = document.querySelector(".lastname_error")

var fathername = document.querySelector("#fathername")
var fathername_error = document.querySelector(".fathername_error")

var mail = document.querySelector("#mail")
var mail_error = document.querySelector(".mail_error")

var number = document.querySelector("#number")
var number_error = document.querySelector(".number_error")

var select = document.querySelector("#select")
var select_error_top = document.querySelector(".select_error_top")

var select_bottom = document.querySelector(".select_bottom")
var select_error_bottom= document.querySelector(".select_error_bottom")

var textarea = document.querySelector(".textarea")
var textarea_error = document.querySelector(".textarea_error")

var a = true

form.addEventListener("submit", function(e){
    e.preventDefault()
        if (lastname.value.trim()===""){
            lastname_error.textContent="Bos buraxma"
            a=false;
        }
        else{
            lastname_error.textContent=""
             a = true
        }
        if (firstname.value.trim()===""){
            firsname_error.textContent="Bos buraxma"
            a=false
        }
        else{
            firsname_error.textContent=""
            a = true
        }
        if (fathername.value.trim()===""){
            fathername_error.textContent="Bos buraxma"
            a = false
        }
        else{
            fathername_error.textContent=""
            a = true
        }
        if (!mail.value.includes("@")){
            mail_error.textContent="@ isaresinen istifade edin ,    Meselen:asasas@.ru "
            a=false;
        }
        else{
            mail_error.textContent=""
            a = true
        }
        if (number.value.trim()===""){
            number_error.textContent="Bos buraxma"
            a=false;
        }
        else{
            number_error.textContent=""
            a = true
        }
        if (select.value==="Secin"){
            select_error_top.textContent="Zehmet olmasa asagidaki melumatlardan birini secin"
            a=false;
        }
        else{
            select_error_top.textContent=""
            a = true
        }

        if ( select_bottom.value==="Secin"){
            select_error_bottom.textContent="Zehmet olmasa asagidaki melumatlardan birini secin"
            a=false;
        }
        else{
            select_error_bottom.textContent=""
            a = true
        }
        if (textarea.value===""){
            textarea_error.textContent="Zehmet olmasa sikayetinizi bildirin"
            a=false;
        }
        else{
            textarea_error.textContent=""
            a = true
        }

        let form = this;
        let formData = new FormData(form);
        submit(e,formData)

});