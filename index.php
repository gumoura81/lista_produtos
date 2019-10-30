<?php

	ob_start(); // Ativa o buffer de saida do PHP
    require_once 'controller/template.php';
    require 'DAO/conexao.php';
    
    if (isset($_GET['url'])){
            $url = $_GET['url'];
            $separator = explode('/',$url);
            $controller = $separator[0];							
            
            require_once ('controller/'.$controller.'.php');	
    }else{
            
            require_once ('controller/lst_produto.php');	
    }
    
    


//phpinfo();