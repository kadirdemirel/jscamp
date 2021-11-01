console.log("merhaba kodlamaio");
//var global bir değişken gibi çalışır.
//let ise normal bir değişkendir, kendi scop alanını sadece kapsar.
//JS type safe yani tip güvenli değildir.
//const contant'dan gelir sabit bir veri tipidir.
//birden fazla verileri aynı değişkende tutmak için arraylarden yararlanıyoruz.

var dolarDun = 9.2;
{
  var dolarDun = 9.1;
}

var dolarBugun = 9.3;

console.log(dolarDun);

//const
const euroDun = 11.2;
// euroDun=11
console.log(euroDun);

//array
//camelCasing isimlendirme kullanıyoruz.
//Birden fazla olduğu için çoğul isimlendirme kullanıyoruz.

//İstersek array içine her veri tipinden bir veri tanımlayabiliriz.
// let konutKredileri=[12,"Emlak Konut Kredisi",["a","b","c","d"]]
let konutKredileri = [
  "Konut Kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut Kredisi",
];
console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");
console.log(konutKredileri);
