<?php
    require_once 'conexao.php'; 
    $pdo = conectar();
    
     $dados = $pdo->prepare("SELECT produto FROM produto");
     $dados->execute();
     echo json_encode($dados->fetchAll(PDO::FETCH_ASSOC));
	 $pdo = null;
 ?>