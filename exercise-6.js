// pertambahan 1, ganjil & genap
for (var i = 1; i <= 100; i++) {
  if (i%2===0) {
    console.log("Genap");
  }
  else {
    console.log("Ganjil");
  }
}

// pertambahan 2
for (var i = 1; i <= 100; i+=2) {
  if (i%3===0) {
    console.log(i+" KELIPATAN 3");
  }
}

// pertambahan 5
for (var i = 1; i <= 100; i+=5) {
  if (i%6===0) {
    console.log(i+" KELIPATAN 6");
  }
}

//  pertambahan 9
for (var i = 0; i <= 100; i+=9) {
  if (i%10===0) {
    console.log(i+" KELIPATAN 10");
  }
}
