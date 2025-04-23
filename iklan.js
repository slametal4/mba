document.addEventListener('DOMContentLoaded', function() {
  // Kode iklan Anda
  var iklanHTML = `
    <div class="ad-container">
      <script type="text/javascript">
        atOptions = {
          'key' : '0cfd3aa635d270e67b5af101e4d64321',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      </script>
      <script type="text/javascript" src="//padsims.com/0cfd3aa635d270e67b5af101e4d64321/invoke.js"></script>
    </div>
  `;

  // Pilih elemen tempat Anda ingin menampilkan iklan
  // Anda bisa menggunakan class, id, atau tag lainnya
  var targetElements = document.querySelectorAll('.tempat-iklan'); // Contoh: mencari elemen dengan class "tempat-iklan"

  // Sisipkan kode iklan ke dalam setiap elemen target
  targetElements.forEach(function(element) {
    element.innerHTML = iklanHTML;
  });
});
