// Mengambil referensi form dan elemen lainnya
const form = document.getElementById('aritmatikaForm');
const hasilElement = document.getElementById('hasil');

// Menangani event submit pada form
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form dari reload halaman

    // Mengambil nilai dari input form
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;

    let hasil;

    // Melakukan operasi aritmatika menggunakan if-else
    if (operator === '+') {
        hasil = number1 + number2;
    } else if (operator === '-') {
        hasil = number1 - number2;
    } else if (operator === '*') {
        hasil = number1 * number2;
    } else if (operator === '/') {
        if (number2 !== 0) {
            hasil = number1 / number2;
        } else {
            hasil = 'Error: Pembagian dengan nol tidak diizinkan';
        }
    } else {
        hasil = 'Operator tidak valid';
    }

    // Menampilkan hasil
    hasilElement.textContent = hasil;
});
