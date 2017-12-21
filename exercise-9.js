// Tugas 1
var nama = 'Andri';
var angkaPembilang = 10;
var angkaPenyebut = 5;
var hasilBagi = angkaPembilang / angkaPenyebut;
console.log('Halo ' + nama + ', ' + angkaPembilang + ' dibagi ' + angkaPenyebut + ' adalah sama dengan ' + hasilBagi);


// Tugas 2
var alas = 3;
var tinggi = 6;
var luasSegitiga = (alas * tinggi) / 2;
console.log('Luas Segitiga : ' + luasSegitiga);


// Tugas 3
var tahun = 2012;
if (tahun % 4 === 0) {
  if (tahun % 100 !== 0) {
    console.log(tahun + ' adalah tahun kabisat');
  } else {
    if (tahun % 400 === 0) {
      console.log(tahun + ' adalah tahun kabisat');
    } else {
      console.log(tahun + ' adalah bukan tahun kabisat');
    }
  }
} else {
  console.log(tahun + ' adalah bukan tahun kabisat');
}

// OPSI LAIN

// Tugas 1
// var a,b,c,d;
// a = ('nama');
// b = ('angka pembilang');
// c = ('angka penyebut');
// d = Number(b)/Number(c)
// console.log('Halo '+a+', '+b+' dibagi '+c+' adalah sama dengan '+d);

// Tugas 2
// var e,f,g;
// e = ('alas');
// f = ('tinggi');
// g = Number(a)*Number(b)/2
// console.log('Luas Segitiga: ' + g);
