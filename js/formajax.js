$(document).ready(function(){
		
	$('#form_produto').submit(function(e) {
	e.preventDefault();
	
	var serializeDados = $('#form_produto').serialize();
	
	$.ajax({
			url: 'crudFormProduto', 
			
			type: 'POST',
			
			data: serializeDados,
			success: function(data) {
				//location.reload();
			
			},
			error: function(xhr,er) {
				$('#insere_aqui').html('<p class="destaque">Lamento! Ocorreu um erro. Por favor tente mais tarde.')
			}		
		});
	});	
})
