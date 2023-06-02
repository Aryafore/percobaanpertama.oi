function showNotification() {
  Swal.fire({
    title: "Notifikasi Kustom",
    html: '<img src="image.jpg" alt="Deskripsi Gambar">',
    confirmButtonText: "OK",
    customClass: {
      actions: "swal2-actions",
    },
  });
}
