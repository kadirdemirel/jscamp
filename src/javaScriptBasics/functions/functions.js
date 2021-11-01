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

function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 ={productName:"Elma",unitPrice:10,quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}

addToCart3(product1)

//object

let product2 ={productName:"Elma",unitPrice:10,quantity:5}
let product3 ={productName:"Elma",unitPrice:10,quantity:5}

product2=product3

product2.productName="KARPUZ"
console.log(product3.productName)

//basit tipler dediğimiz veri tipleri değer tiptir ama objeler, array'ler referans tiptir.


let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100

console.log(sayi1)



