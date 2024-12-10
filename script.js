// Skrip JavaScript untuk validasi formulir
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === "" || email === "" || message === "") {
    alert("Semua kolom harus diisi!");
  } else {
    alert("Pesan Anda telah dikirim. Terima kasih!");
    document.getElementById('contact-form').reset(); // Reset formulir setelah pengiriman
  }
});
