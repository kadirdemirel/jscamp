//destructuring operator

let [icAnadolu, marmara, karadeniz,[icAnadoluSehirleri]] = [
  { name: "İç Anadolu", population: 20 },
  { name: "Marmara", population: 20 },
  { name: "Karadeniz", population: 10 },
  [
    ["Ankara", "Konya"],
    ["İstanbul", "Bursa"],
    ["Sinop", "Trabzon"],
  ],
];


// console.log(icAnadolu.name);
// console.log(icAnadolu.population);
console.log(icAnadoluSehirleri)

let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}={productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductName)

let product={productName:"Elma",unitPrice:10,quantity:5}
console.log(product)

