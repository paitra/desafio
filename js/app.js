//atributos personalizados (data-display e data-hidden)
$('.menu').on('click', function (e) {
  e.preventDefault();
  $('#' + $(this).data('hidden')).addClass('d-none');
  $('#' + $(this).data('display')).removeClass('d-none');
  formReset();
});