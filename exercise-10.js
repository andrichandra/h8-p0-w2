// Tugas 1

var total = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    total += i;
  } else if ( i % 2 === 0) {
      total -= i;
  }
}
console.log('Total : ' + total);


// Tugas 2

var pagar = '';
      for (var index1 = 1; index1 <= 10; index1++) {
        for (var index2 = 0; index2 <=10 ; index2++) {
          pagar += '#';
        }
        console.log(pagar);
        pagar = '';
      }

// Tugas 3

var bintang = '';
for (var i1 = 1; i1 <= 10; i1++) {
  for (var i2 = 0; i2 <= i1; i2++) {
    bintang += '*';
  }
  console.log(bintang);
  bintang = '';
}
