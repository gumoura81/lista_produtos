$(document).ready(function(){
	
    $('#tblEditavel tbody tr td.editavel').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        var novoElemento = $('<input/>',{type:'text', value:conteudoOriginal});
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
            var conteudoNovo = $(this).val();
           // alert(keyCode);
           if (e.which === 13 && conteudoNovo !== ''){
               var objeto = $(this);
               var acao = 'alterar';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().first().text(),
                            //attr recupera o conteudo do atributo title
                            campo:$(this).parent().attr('title'),
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:acao,
                           // tabela:$(this).parent().attr('title')
                           tabela:$(this).parents('tr').children().last().text()
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                       $('body').append(result); 
                      // window.location.href=window.location.href;
					 //  history.go(0);
					 location.reload(true);
					//window.location.reload();
                    }
                 })//end ajax
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
        
        }));// end bind
        $(this).children().select();
    })// end dbl click
	
	$('#tblEdita tbody tr td.editavel').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        var novoElemento = $('<input/>',{type:'text', value:conteudoOriginal});
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
            var conteudoNovo = $(this).val();
           // alert(keyCode);
           if (e.which === 13 && conteudoNovo !== ''){
               var objeto = $(this);
               var acao = 'alterar';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().first().text(),
                            //attr recupera o conteudo do atributo title
                            campo:$(this).parent().attr('title'),
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:acao,
                           // tabela:$(this).parent().attr('title')
                           tabela:$(this).parents('tr').children().last().text()
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                       $('body').append(result); 
                      // window.location.href=window.location.href;
					 //  history.go(0);
					 location.reload(true);
					//window.location.reload();
                    }
                 })//end ajax
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
        
        }));// end bind
        $(this).children().select();
    })// end dbl click
	
	
	
	//.......TABELA ITEM PEDIDO.................................................................
	$('#tblEdi tbody tr td.edita_item').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        var novoElemento = $('<input/>',{type:'text', value:conteudoOriginal});
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
            var conteudoNovo = $(this).val();
           // alert(keyCode);
           if (e.which === 13 && conteudoNovo !== ''){
			   $(this).css( "background-color" );
               var objeto = $(this);
               var acao = 'altera_item';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela_item.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().first().text(),
                            //attr recupera o conteudo do atributo title
                            campo:$(this).parent().attr('title'),
                            //campo:campo,
                            valor:conteudoNovo,
							tabela:'item_projeto_pedido',
                            acao:acao
                           // tabela:$(this).parent().attr('title')
                           
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                       $('body').append(result); 
						 location.reload();
					
                    }
                 })//end ajax
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
        
        }));// end bind
        $(this).children().select();
    })// end dbl click
	/*********************************************************************************************************
	*************************************** campo data *****************************************************************
	***************************************************************************************************************/
	$('#tblEditavel tbody tr td.campodata').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        var novoElemento = $('<input/>',{type:'text', value:conteudoOriginal});
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
            var conteudoNovo = $(this).val();
           // alert(keyCode);
           if (e.which === 13 && conteudoNovo !== ''){
               var objeto = $(this);
               var acao = 'altera_data';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().first().text(),
                            //attr recupera o conteudo do atributo title
                            campo:$(this).parent().attr('title'),
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:acao,
                           // tabela:$(this).parent().attr('title')
                           tabela:$(this).parents('tr').children().last().text()
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                       $('body').append(result); 
                       //location.reload();
                    }
                 })//end ajax
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
        
        }));// end bind
        $(this).children().select();
    })// end dbl click data
	
	
	//......................... end tabela item pedido
	
	/****************************************************************************************************************
	**************************************** SELECT PROCESSO APLICAÇÃO ***************************************************
	*****************************************************************************************************************/
    $('#tblEdita tbody tr td.select_pa').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        //var novoElemento = $('<select/>',{type:'text', value:conteudoOriginal});
		
		$.post("DAO/select_pa.php",
                
					{ id:$(this).parents('tr').children().first().text()},
                  function(valor){
                     $("select[name=cor2]").html(valor);
                  }
                  )
		var novoElemento = $('<select name="cor2"></select>');
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
			if($(this).prop('tagName')== 'SELECT' ){
				var conteudoNovo = $(this).children('option:selected').val();
				console.log(conteudoNovo);
			}else{
				var conteudoNovo = $(this).val();
			}
            
           // alert(keyCode);
           if (keyCode === 13 && conteudoNovo !== '' && conteudoNovo !== conteudoOriginal){
               var objeto = $(this);
               var acao = 'alterar';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela_item.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().first().text(),
                            //attr recupera o conteudo do atributo title
                            campo:'processo_aplicacao',
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:'altera_item',
                           // tabela:$(this).parent().attr('title')
                           tabela:$(this).parents('tr').children().last().text()
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                      $('body').append(result);
				     location.reload();
					window.location.reload();					   
					   
                    }
					
					
                 })//end ajax
				 location.reload();
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
			
        
        }));// end bind
        $(this).children().select();
    })// end dbl click
	
	
	/****************************************************************************************************************
	**************************************** SELECT GRUPO PRODUTO ***************************************************
	*****************************************************************************************************************/
    $('#tblEdita tbody tr td.select_grupo_produto').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        //var novoElemento = $('<select/>',{type:'text', value:conteudoOriginal});
		
		$.post("DAO/select_grupo_produto.php",
                
					{ id:$(this).parents('tr').children().first().text()},
                  function(valor){
                     $("select[name=cor2]").html(valor);
                  }
                  )
		var novoElemento = $('<select name="cor2"></select>');
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
			if($(this).prop('tagName')== 'SELECT' ){
				var conteudoNovo = $(this).children('option:selected').val();
				console.log(conteudoNovo);
			}else{
				var conteudoNovo = $(this).val();
			}
            
           // alert(keyCode);
           if (keyCode === 13 && conteudoNovo !== '' && conteudoNovo !== conteudoOriginal){
               var objeto = $(this);
               var acao = 'alterar';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().first().text(),
                            //attr recupera o conteudo do atributo title
                            campo:'id_grupo_produto',
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:'alterar',
                           // tabela:$(this).parent().attr('title')
                           tabela:$(this).parents('tr').children().last().text()
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                      $('body').append(result);
				    location.reload();
					
                    }
					
					
                 })//end ajax
				 location.reload();
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
			
        
        }));// end bind
        $(this).children().select();
    })// end dbl click
	/****************************************************************************************************************
	**************************************** SELECT GRUPO plano financeiro ***************************************************
	*****************************************************************************************************************/
    $('#tblEdita tbody tr td.select_grupo_pf').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        //var novoElemento = $('<select/>',{type:'text', value:conteudoOriginal});
		
		$.post("DAO/select_grupo_plano_financeiro.php",
                
					{ id:$(this).parents('tr').children().first().text()},
                  function(valor){
                     $("select[name=cor2]").html(valor);
                  }
                  )
		var novoElemento = $('<select name="cor2"></select>');
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
			if($(this).prop('tagName')== 'SELECT' ){
				var conteudoNovo = $(this).children('option:selected').val();
				console.log(conteudoNovo);
			}else{
				var conteudoNovo = $(this).val();
			}
            
           // alert(keyCode);
           if (keyCode === 13 && conteudoNovo !== '' && conteudoNovo !== conteudoOriginal){
               var objeto = $(this);
               var acao = 'alterar';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().first().text(),
                            //attr recupera o conteudo do atributo title
                            campo:'id_grupo_plano_financeiro',
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:'alterar',
                           // tabela:$(this).parent().attr('title')
                           tabela:$(this).parents('tr').children().last().text()
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                      $('body').append(result);
				    //location.reload();
					
                    }
					
					
                 })//end ajax
				 location.reload();
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
			
        
        }));// end bind
        $(this).children().select();
    })// end dbl click
	/****************************************************************************************************************
	**************************************** VALOR*************** ***************************************************
	*****************************************************************************************************************/
	$('#tblEditavel tbody tr td.valor').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        var novoElemento = $('<input/>',{type:'text', value:conteudoOriginal});
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
            var conteudoNovo = $(this).val();
           // alert(keyCode);
           if (e.which === 13 && conteudoNovo !== ''){
               var objeto = $(this);
               var acao = 'altera_valor';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().first().text(),
                            //attr recupera o conteudo do atributo title
                            campo:$(this).parent().attr('title'),
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:acao,
                           // tabela:$(this).parent().attr('title')
                           tabela:$(this).parents('tr').children().last().text()
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                       $('body').append(result); 
                       location.reload();
                    }
                 })//end ajax
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
        
        }));// end bind
        $(this).children().select();
    })// end dbl click valor
	
	
	// ajuste
	
	$('#tblEditavel tbody tr td.ajuste').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        var novoElemento = $('<input/>',{type:'text', value:conteudoOriginal});
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
            var conteudoNovo = $(this).val();
           // alert(keyCode);
           if (e.which === 13 && conteudoNovo !== ''){
               var objeto = $(this);
               var acao = 'ajuste';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().first().text(),
                            //attr recupera o conteudo do atributo title
                            campo:$(this).parent().attr('title'),
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:'ajuste',
                           // tabela:$(this).parent().attr('title')
                           tabela:$(this).parents('tr').children().last().text(),
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                       $('body').append(result); 
                       location.reload();
                    }
                 })//end ajax
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
        
        }));// end bind
        $(this).children().select();
    })// end dbl click ajuste
	
	// ....................
	$('#tblEditavel tbody tr td.campodata').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        var novoElemento = $('<input/>',{type:'text', value:conteudoOriginal});
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
            var conteudoNovo = $(this).val();
           // alert(keyCode);
           if (e.which === 13 && conteudoNovo !== ''){
               var objeto = $(this);
               var acao = 'altera_data';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().first().text(),
                            //attr recupera o conteudo do atributo title
                            campo:$(this).parent().attr('title'),
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:acao,
                           // tabela:$(this).parent().attr('title')
                           tabela:$(this).parents('tr').children().last().text()
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                       $('body').append(result); 
                       //location.reload();
                    }
                 })//end ajax
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
        
        }));// end bind
        $(this).children().select();
    })// end dbl click data
	
	
	// ......................................select  ..........................................................
	
    $('#tblEditavel tbody tr td.select').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        //var novoElemento = $('<select/>',{type:'text', value:conteudoOriginal});
		
		$.post("DAO/select_grupo.php",
                 // {estado:$(this).val()},
				
					// {tabela:$(this).parents('tr').children().last().text()},
					{ tabela:$(this).parent().attr('title')},
                  function(valor){
                     $("select[name=cor2]").html(valor);
                  }
                  )
		var novoElemento = $('<select name="cor2"></select>');
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
			if($(this).prop('tagName')== 'SELECT' ){
				var conteudoNovo = $(this).children('option:selected').val();
				console.log(conteudoNovo);
			}else{
				var conteudoNovo = $(this).val();
			}
            
           // alert(keyCode);
           if (keyCode === 13 && conteudoNovo !== '' && conteudoNovo !== conteudoOriginal){
               var objeto = $(this);
               var acao = 'alterar';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().first().text(),
                            //attr recupera o conteudo do atributo title
                            campo:$(this).parent().attr('title'),
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:acao,
                           // tabela:$(this).parent().attr('title')
                           tabela:$(this).parents('tr').children().last().text()
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                      $('body').append(result);
				      location.reload();
					// window.location.reload();					   
					   
                    }
					
					
                 })//end ajax
				 location.reload();
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
			
        
        }));// end bind
        $(this).children().select();
    })// end dbl click

	// ......................................select fase producao  ..........................................................
	
    $('#tblEditavel tbody tr td.select_fase').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        //var novoElemento = $('<select/>',{type:'text', value:conteudoOriginal});
		
		$.post("DAO/select_fase.php",
                 // {estado:$(this).val()},
				
					// {tabela:$(this).parents('tr').children().last().text()},
					{ tabela:$(this).parent().attr('title')},
                  function(valor){
                     $("select[name=cor2]").html(valor);
                  }
                  )
		var novoElemento = $('<select name="cor2"></select>');
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
			if($(this).prop('tagName')== 'SELECT' ){
				var conteudoNovo = $(this).children('option:selected').val();
				console.log(conteudoNovo);
			}else{
				var conteudoNovo = $(this).val();
			}
            
           // alert(keyCode);
           if (keyCode === 13 && conteudoNovo !== '' && conteudoNovo !== conteudoOriginal){
               var objeto = $(this);
               var acao = 'alterar';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().eq('5').text(),
                            //attr recupera o conteudo do atributo title
                            campo:$(this).parent().attr('title'),
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:acao,
                           // tabela:$(this).parent().attr('title')
                           tabela:$(this).parents('tr').children().last().text()
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                      $('body').append(result);
				      location.reload();
					// window.location.reload();					   
					   
                    }
					
					
                 })//end ajax
				 //location.reload();
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
			
        
        }));// end bind
        $(this).children().select();
    })// end dbl fase
	
	// ......................................select fase moeda  ..........................................................
	
    $('#tblEditavel tbody tr td.select_moeda').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        //var novoElemento = $('<select/>',{type:'text', value:conteudoOriginal});
		
		$.post("DAO/select_moeda.php",
                 // {estado:$(this).val()},
				
					// {tabela:$(this).parents('tr').children().last().text()},
					{ tabela:$(this).parent().attr('title')},
                  function(valor){
                     $("select[name=cor2]").html(valor);
                  }
                  )
		var novoElemento = $('<select name="cor2"></select>');
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
			if($(this).prop('tagName')== 'SELECT' ){
				var conteudoNovo = $(this).children('option:selected').val();
				console.log(conteudoNovo);
			}else{
				var conteudoNovo = $(this).val();
			}
            
           // alert(keyCode);
           if (keyCode === 13 && conteudoNovo !== '' && conteudoNovo !== conteudoOriginal){
               var objeto = $(this);
               var acao = 'alterar';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().eq('0').text(),
                            //attr recupera o conteudo do atributo title
                            campo:$(this).parent().attr('title'),
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:acao,
                           // tabela:$(this).parent().attr('title')
                           tabela:$(this).parents('tr').children().last().text()
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                      $('body').append(result);
				      location.reload();
					// window.location.reload();					   
					   
                    }
					
					
                 })//end ajax
				 //location.reload();
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
			
        
        }));// end bind
        $(this).children().select();
    })// end dbl click
	
	// ......................................select fase banco  ..........................................................
	
    $('#tblEditavel tbody tr td.select_banco').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        //var novoElemento = $('<select/>',{type:'text', value:conteudoOriginal});
		
		$.post("DAO/select_banco.php",
                 // {estado:$(this).val()},
				
					// {tabela:$(this).parents('tr').children().last().text()},
					{ tabela:$(this).parent().attr('title')},
                  function(valor){
                     $("select[name=cor2]").html(valor);
                  }
                  )
		var novoElemento = $('<select name="cor2"></select>');
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
			if($(this).prop('tagName')== 'SELECT' ){
				var conteudoNovo = $(this).children('option:selected').val();
				console.log(conteudoNovo);
			}else{
				var conteudoNovo = $(this).val();
			}
            
           // alert(keyCode);
           if (keyCode === 13 && conteudoNovo !== '' && conteudoNovo !== conteudoOriginal){
               var objeto = $(this);
               var acao = 'alterar';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().eq('0').text(),
                            //attr recupera o conteudo do atributo title
                            campo:$(this).parent().attr('title'),
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:acao,
                           // tabela:$(this).parent().attr('title')
                           tabela:$(this).parents('tr').children().last().text()
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                      $('body').append(result);
				      location.reload();
					// window.location.reload();					   
					   
                    }
					
					
                 })//end ajax
				 //location.reload();
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
			
        
        }));// end bind
        $(this).children().select();
    })// end dbl click
	
	// ......................................select formula aluminio  ..........................................................
	
    $('#tblEditavel tbody tr td.select_formula_aluminio').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        //var novoElemento = $('<select/>',{type:'text', value:conteudoOriginal});
		
		$.post("DAO/select_formula_aluminio.php",
                 // {estado:$(this).val()},
				
					// {tabela:$(this).parents('tr').children().last().text()},
					{ tabela:$(this).parent().attr('title')},
                  function(valor){
                     $("select[name=cor2]").html(valor);
                  }
                  )
		var novoElemento = $('<select name="cor2"></select>');
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
			if($(this).prop('tagName')== 'SELECT' ){
				var conteudoNovo = $(this).children('option:selected').val();
				console.log(conteudoNovo);
			}else{
				var conteudoNovo = $(this).val();
			}
            
           // alert(keyCode);
           if (keyCode === 13 && conteudoNovo !== '' && conteudoNovo !== conteudoOriginal){
               var objeto = $(this);
               var acao = 'alterar';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_tabela.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().eq('0').text(),
                            //attr recupera o conteudo do atributo title
                            campo:$(this).parent().attr('title'),
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:acao,
                           // tabela:$(this).parent().attr('title')
                           tabela:$(this).parents('tr').children().last().text()
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                      $('body').append(result);
				      location.reload();
					// window.location.reload();					   
					   
                    }					
					
                 })//end ajax
				 //location.reload();
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
			
        
        }));// end bind
        $(this).children().select();
    })// end select formula aluminio
	
	// ......................................select  ..........................................................
	
    $('#tblSelect tbody tr td.select_sn').dblclick(function(){
        // verifica se existe um input filho de td
        if ($('td > input').length > 0){
            return;
        }
        var conteudoOriginal  = $(this).text();
        //var novoElemento = $('<select/>',{type:'text', value:conteudoOriginal});
		
		$.post("DAO/select_sn.php",
                 // {estado:$(this).val()},
				
					// {tabela:$(this).parents('tr').children().last().text()},
					{ tabela:$(this).parent().attr('title')},
                  function(valor){
                     $("select[name=cor2]").html(valor);
                  }
                  )
		var novoElemento = $('<select name="cor2"></select>');
        // blur, executa a funcao para o novo elemento executado
        $(this).html(novoElemento.bind('blur keydown' ,function(e){
            var keyCode = e.which;
			if($(this).prop('tagName')== 'SELECT' ){
				var conteudoNovo = $(this).children('option:selected').val();
				console.log(conteudoNovo);
			}else{
				var conteudoNovo = $(this).val();
			}
            
           // alert(keyCode);
           if (keyCode === 13 && conteudoNovo !== '' && conteudoNovo !== conteudoOriginal){
               var objeto = $(this);
               var acao = 'alterar';
               //var tabela = 'cor';
               
                $.ajax({
                    type:"POST",
                    url: "DAO/op_permissao.php",
                    data:{
                            // this representa o camo input como  novo elemento
                            // seleciona a primeira tr 
                            // parents acessa os ascendentes tr > td
                            id:$(this).parents('tr').children().first().text(),
                            //attr recupera o conteudo do atributo title
                            campo:$(this).parent().attr('title'),
                            //campo:campo,
                            valor:conteudoNovo,
                            acao:acao,
                           // tabela:$(this).parent().attr('title')
                           tabela:$('input[name="tabela"]').val()
                    },
                    success:function(result){
                        objeto.parent().html(conteudoNovo);
                      $('body').append(result);
				      //location.reload();
					// window.location.reload();					   
					   
                    }
					
					
                 })//end ajax
				 //location.reload();
           }
            else if(keyCode === 27 || e.type === 'blur')
                $(this).parent().html(conteudoOriginal);
			
        
        }));// end bind
        $(this).children().select();
    })// end dbl click


	
    

	
    
   
});// end document read