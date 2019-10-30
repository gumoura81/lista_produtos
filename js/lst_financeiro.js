$(document).ready(function(){
			//.................. inicio inserir financeiro
    $("#btnInserirFinanceiro").click(function(){
        var acao = 'inserir-financeiro';
        var tabela = $('input[name="tabela"]').val();
        var nome = $('input[name="nome"]').val();
		var dt_vcto = $('input[name="dt_vcto"]').val();
        var valor_titulo = $('input[name="valor_titulo"]').val();
        $.ajax({
                    type:"POST",
                    url: "/admin_sublimacao/crudTable",
                    data:{
                            acao:acao,
                            tabela:tabela,
                            nome:nome,
                            valor_titulo:valor_titulo,
							dt_vcto:dt_vcto
                            
                    },
                    success:function(result){
                        //objeto.parent().html(conteudoNovo);
                       $('body').append(result); 
                       location.reload();
                    }
                 })//end ajax
       
    })// end inserir finaneiro
	



});// end document read	