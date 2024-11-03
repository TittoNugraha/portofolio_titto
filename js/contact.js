const scriptURL =
  "https://script.google.com/macros/s/AKfycbylsSEOQWtUazz4eWodEwaPma_egSciMC8zSHQ0rwBPoVeKcpNstDmtCxbWQk016sQB/exec";
const form = document.forms["email-form-porfolio"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // reset form
      form.reset();
      alert("Terima kasih, pesan anda telah terkirim.");
      console.log("Success!", response);
    })
    .catch((error) => {
      console.error("Error!", error.message);
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // reset form
      form.reset();
      alert(
        "Mohon maaf, pesan anda tidak dapat terkirim. Pastikan anda memiliki jaringan internet atau coba beberapa saat lagi."
      );
    });
});
