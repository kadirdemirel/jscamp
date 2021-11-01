function addToCart(x) {
    console.log(products)
}

let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
 
]

addToCart(products)

//rest operator

function numberAdd(number1,number2) {
    console.log(number1+number2)
}

function numberAdd(number1,number2,number3) {
    console.log(number1+number2+number3)
}

function numberAdd(number1,number2,number3,number4) {
    console.log(number1+number2+number3+number4)
}

//.... bunun sonu yok

function add(...numbers) {
    let total=0
    for (let i = 0; i < numbers.length; i++) {
    total=total+numbers[i]
        
    }
    console.log(total)

}
add(20,30)
add(20,30,40)
add(20,30,40,50)

