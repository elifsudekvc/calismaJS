let degisiklik=() => {

let now = document.getElementById("paragraf")
now.innerHTML="PARAGRAF ÜSTÜNE GELİNDİ.";

}


let degisiklik2=() => {


    let now = document.getElementById("lorem")
    now.style.color="blue";
    
};



let sayfaDegis=() => {

    
        window.confirm("sayfayı değiştirmek istediğinize emin misiniz?")//confirm onaylıyor musun? diyor
            ? window.location="https://www.google.com/"
            : window.location="http://127.0.0.1:5500/index.html";
    
};

//listener
let userListener=() => {
    let listenerParag=document.getElementById("parag_list")
    listenerParag.addEventListener("click",function(e) {
        document.getElementById("log_admin").innerHTML="takip edildi."
        //$("#log_admin").html("takip edildi"); //jquery
    });
};
userListener();

//localStorage

let localStorageData=()=>{
    const adi= localStorage.setItem("adi",prompt("adi:"));//prompt ile kullanıcıdan veri aldık.
    const soyadi= localStorage.setItem("soyadi","kıvcı");
    console.log(localStorage);
    //buraya kadarki kısım datalarımı kaydetmek istediğimde yazıyorum.
    const getAdi=localStorage.getItem("adi"); 
    alert(getAdi);
    //burada localstoragedaki verileri görmemiz için
    //veriyi kaydetmek istiyorsak setItem ile kaydediyoruz. geri çağırmak istiyorsak getItem ile çağırıyoruz
    localStorage.removeItem("adi"); //ilgili itemi kaldır demek
    localStorage.clear();//her şeyi siler
}
localStorageData()


let userKey=() => {

    //Jquery hazırlanması
    $(document).ready(function(){
        $(document).keydown(function(userButton){
        // https://www.toptal.com/developers/keycode
            console.log(userButton);
            console.log(userButton.keyCode);

            userButton.preventDefault();//browser sen bir şey yapma yaparsam ben yaparım.
            
                if(userButton.keyCode==13){
                    alert("enter bastınız.")
                    console.log("Enter bastınız.")
                }
        
        })//end keydown
    }); //end document ready

}
userKey()