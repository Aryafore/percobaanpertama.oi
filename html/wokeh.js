// Mengatur tanggal dan waktu tujuan countdown
var countDownDate = new Date("2023-06-03T15:30:00").getTime();

// Memperbarui countdown setiap detik
var x = setInterval(function () {
  // Mengambil tanggal dan waktu saat ini
  var now = new Date().getTime();

  // Menghitung selisih antara waktu tujuan dengan waktu saat ini
  var distance = countDownDate - now;

  // Menghitung hari, jam, menit, dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Menampilkan countdown di elemen dengan id "countdown"
  document.getElementById("countdown").innerHTML =
    days +
    " hari " +
    hours +
    " jam " +
    minutes +
    " menit " +
    seconds +
    " detik ";

  // Menampilkan pesan saat countdown selesai
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "";
    document.getElementById("message").innerHTML = "Waktu Telah Habis!";
    setTimeout(function () {
      window.location.href = "indri.html"; // Ganti dengan URL halaman baru yang Anda inginkan
    }, 3000); // Mengatur jeda selama 3 detik (3000 milidetik)
  }
}, 1000);
window.devicePixelRatio;
// Which will return the figure 4
