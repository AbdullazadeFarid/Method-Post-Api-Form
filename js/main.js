var form = document.querySelector("#form"); // formu cagirirg
const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function submit(e) {
  console.log("l");
  // submit funksiyasin cagirirgki click eledikde submiti event kimi ora verek
  e.preventDefault(); //refresh olmasin diye

  let form = this; //clickledikde formun icindeki obyektleri ver
  let formData = new FormData(form); // inputun valularin gotutu
  console.log(formData);

  function display() {
    form.reset();
    form.style.display = "none";
    message.style.display = "flex";

    setTimeout(() => {
      form.style.display = "flex";
      message.style.display = "none";
    }, 2000);
  }
  function display_error() {
    // form.reset();
    form.style.display = "none";
    error_message.style.display = "flex";

    setTimeout(() => {
        form.style.display = "flex";
        error_message.style.display = "none";
    }, 2000);
  }

  fetch(baseUrl, {
    method: "POST", //post edirik
    body: formData, // gonderilen data bpdy ye gonderilir
  })
    .then((response) => {
      // burda deyirkki cavab gelecek geken cavabi ekranda  ver sora onu jsona cevir
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

form.addEventListener("submit", submit);

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
form.addEventListener("submit", function(e){
    e.preventDefault()
var a =true
    if(a=true){

        if (lastname.value.trim()===""){
            lastname_error.textContent="Bos buraxma"

        }
        else{
            lastname_error.textContent=""
             a = false
        }


        if (firstname.value.trim()===""){
            firsname_error.textContent="Bos buraxma"
            a=false
        }
        else{
            firsname_error.textContent=""

        }

        if (fathername.value.trim()===""){
            fathername_error.textContent="Bos buraxma"
        }
        else{
            fathername_error.textContent=""
            a=false
        }


        if (!mail.value.includes("@")){
            mail_error.textContent="@ isaresinen istifade edin ,    Meselen:asasas@.ru "
        }
        else{
            mail_error.textContent=""
            a=false

        }


        if (number.value.trim()===""){
            number_error.textContent="Bos buraxma"
        }
        else{
            number_error.textContent=""
            a=false
        }




        if (select.value==="Secin"){
            select_error_top.textContent="Zehmet olmasa asagidaki melumatlardan birini secin"
        }
        else{
            select_error_top.textContent=""
            a=false
        }

        if ( select_bottom.value==="Secin"){
            select_error_bottom.textContent="Zehmet olmasa asagidaki melumatlardan birini secin"
        }
        else{
            select_error_bottom.textContent=""
            a=false
        }


        if (textarea.value===""){
            textarea_error.textContent="Zehmet olmasa sikayetinizi bildirin"
        }
        else{
            textarea_error.textContent=""
            a=false

        }
    }
    //  if (a=false){
    //     form.addEventListener("submit", submit);

    // }







});


