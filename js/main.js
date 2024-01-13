var form = document.querySelector("#form") // formu cagirirg
 const baseUrl = 'https://jsonplaceholder.typicode.com/posts'


function submit(e){ // submit funksiyasin cagirirgki click eledikde submiti event kimi ora verek
e.preventDefault() //refresh olmasin diye

let form = this                    //clickledikde formun icindeki obyektleri ver
let formData = new FormData(form) // inputun valularin gotutu
console.log(formData);

fetch(baseUrl  ,{
    method: "POST",              //post edirik
    body:formData
})
.then (response=>{  // burda deyirkki cavab gelecek geken cavabi ekranda  ver sora onu jsona cevir
console.log(response);
return response.json()
})
.catch(error=>{  //sora deyirikki eger cavab vermese ekranda error ver .catch errorlari tutmag ucundu
    console.log(error);
})

}


form.addEventListener('submit',submit)