 $(document).ready(function() {					 
                 $(document).ready(function() {					 
                                // Captura o retorno do retornaCliente.php
                                $.getJSON('DAO/exibe_nome.php', function(data){
                                    var cliente = [];
                                    // Armazena na array capturando somente o nome do cliente
                                    $(data).each(function(key, value) {
                                            cliente.push(value.nome);
                                    });
                                    // Chamo o Auto complete do JQuery ui setando o id do input, array com os dados e o mínimo de caracteres para disparar o AutoComplete
                                    $('#txtCliente').autocomplete({ source: cliente, minLength: 3});
                                });
                               
                                 
                                                              
                                  
                                
                        });
});