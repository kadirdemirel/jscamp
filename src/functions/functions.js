function addToCart(productName="Elma",quantity) {
    console.log("Sepete Eklendi ! : "+productName +" adet : "+quantity)
}

// addToCart()
addToCart("Yumurta",10)
// addToCart(15)

//undefined: Bellekte yer vermediğimiz, tanımlı olmayan durumlara denir.
//default değer: Eğer parametre gönderilmezse default değer olarak ne verilirse onu yazar.


//arrowFunction

let sayHello=()=>
{
    console.log("Hello World")
}

sayHello()

let sayHello2=function () {
    console.log("Hello World 2")
}

sayHello2()