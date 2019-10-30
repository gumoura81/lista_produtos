 $(document).ready(function(){
         //$("#endereco_cliente_semcadastro").hide();
      
	  
		 
		 $("input[name=txtCliente]").focusout(function(){
			$("#endereco_cliente").hide();	
             $.ajax({
                    type:"POST",
                    url: "ajaxPHP/exibe_endereco.php",
                    data:{
                            cliente:$(this).val()
                    },
                     "success": function(response) {
                        //em caso de sucesso, a div ID=saida recebe o response do post
                        $("#retorno").html(response);					   
					   
                    }
					
					
                 })//end ajax
             
            
				   
         })
		 // rotina para cadastar não usar um cadastro na tabela de clientes
		  $(".btn").click(function(){
			$("#endereco_clientes").hide();	
            $("#endereco_cliente_semcadastro").show();
            //$("input[name=txtCliente]").val('');
			$("#btn").hide();
			$("#txtCliente").hide();
			
            
             
            
				   
         })
		 
		 /* ao pressionar uma tecla em um campo que seja de class="pula" 
                $('#txtCliente').keypress(function(e){
                    /* 
                     * verifica se o evento é Keycode (para IE e outros browsers)
                     * se não for pega o evento Which (Firefox)
                    */
                 // var keyCode = e.which;
                    
                   /* verifica se a tecla pressionada foi o ENTER */
                  // if(keyCode == 13){
                       /* guarda o seletor do campo que foi pressionado Enter 
                        var campo =  $('#txtCliente').val();
                       
                      $.ajax({
							type:"POST",
							url: "/vidro/ajax/exibe_endereco.php",
							data:{
									cliente:campo
							},
							 "success": function(response) {
									//em caso de sucesso, a div ID=saida recebe o response do post
									$("div#retorno").html(response);					   
							   
							}
							
							
						 })//end ajax
             

                })
				*/
		 
		 
  })
  
  
  