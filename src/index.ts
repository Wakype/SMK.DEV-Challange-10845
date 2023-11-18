/**
 * Fungsi untuk menemukan angka yang hilang.
 *
 * @param n - Bilangan bulat yang menunjukkan batas dari rangkaian angka.
 * @param arr - Array yang berisi rangkaian angka dari 1 sampai n kecuali satu angka.
 * @returns Angka yang hilang dari rangkaian.
 */

function findMissingNumber(n: number, arr: number[]): number {
  // Jumlah total dari 1 sampai n dapat dihitung menggunakan rumus n*(n+1)/2.
  // Ini adalah rumus matematika yang untuk menghitung jumlah dari baris angka aritmatika.
  // sebenarnya ini adalah rumus untuk menjumlahkan suku-suku dalam barisan aritmetika sederhana yang dimulai dari 1 dengan beda 1.
  // Ini disebut juga sebagai rumus jumlah barisan aritmetika untuk suku yang berturut-turut.
  let total = (n * (n + 1)) / 2;

  // Menghitung jumlah dari semua angka dalam array menggunakan fungsi reduce.
  // Fungsi reduce mengambil fungsi pengurangan dan nilai awal,
  // dan mengembalikan satu nilai yang dihasilkan dari pengurangan semua elemen array.
  // Dalam hal ini, fungsi pengurangan adalah penjumlahan,
  // jadi fungsi reduce mengembalikan jumlah dari semua angka dalam array.
  let sum = arr.reduce((a, b) => a + b, 0);

  // Angka yang hilang adalah perbedaan antara jumlah total dan jumlah array.
  // Jika semua angka ada dalam array, maka perbedaan ini akan menjadi 0.
  // Jika ada angka yang hilang, maka perbedaan ini akan menjadi angka yang hilang.
  return total - sum;
}

// Menjalankan fungsi dan membuat hasilnya.
// Dalam hal ini, n adalah 5 dan array adalah [2, 3, 1, 5], jadi angka yang hilang adalah 4.

// contoh
// let n = 5;
// let arr = [2, 3, 1, 5];
// console.log(findMissingNumber(n, arr));  // Output: 4

// coba disini
let n = 5;
let arr = [5, 4, 1, 2];

console.time('Execution Time');

let missingNumber = findMissingNumber(n, arr);

console.log(missingNumber);

console.timeEnd('Execution Time');
