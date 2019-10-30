 $(document).ready(function(){
      
     
         $("select[name=projeto]").change(function(){
             // var pedido = $('input[name="id_pedido"]').val();
              var aa = 'ddd';
            $.ajax({
                   
                   type:"POST",
                   url: "ajaxPHP/exibe_projetos.php",
                   data:{
                           projeto:$(this).val(),
                           pedido:$('input[name="pedido"]').val(),
                           aa:aa
                           
                   },
                    "success": function(response) {
                       //em caso de sucesso, a div ID=saida recebe o response do post
                       $("#projetos").html(response);	   

                   }
                });//end ajax

        });
        

      
        
         

});	 
  
  
  
  