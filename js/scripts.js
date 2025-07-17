$(document).ready(function() {
  $('.btn-comprar').on('click', function() {
    alert('¡Producto agregado al carrito!');
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    alert('Gracias por contactarnos, te responderemos pronto.');
  });
});
