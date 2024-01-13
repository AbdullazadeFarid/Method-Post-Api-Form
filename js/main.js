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
    form.reset();
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
