<?php
function conectar(){
try{
		$pdo = new PDO('mysql:host=localhost;dbname=produtos', 'root', '');
        $pdo->exec("set names utf8");
	
   }catch (PDOException $e){	
	   echo $e-> getMessagem();
  }
return $pdo;

}