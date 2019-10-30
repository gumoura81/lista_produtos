<?php
//include("conexao.php");
session_start(); 
$id = $_SESSION['usuario']['id_funcionario'];
$pdo = conectar();

$template = new template();
	
$template->carrega_template('inicio'); // nome do arquivo html que vai ser concatenado no template.php
$template->carrega_sub_template('pagina','lst_produto');// inicio.html 


if(isset($_POST['pesquisa'])){
	if(!empty($_POST['produto'])){
		$produto = $_POST['produto'];
		$template->seta_variavel('produto',$produto);
		$select = "SELECT p.*, g.grupo_produto, m.medida FROM produto p, grupo_produto g, medida m WHERE
		p.id_grupo_produto = g.id_grupo_produto and p.medida = m.id_medida  and (p.produto like '%$produto%'  OR p.id_produto = '$produto') ORDER BY p.produto";
		$sql = $pdo->prepare( "$select");		
		$sql->execute();
		//echo $sql->debugDumpParams();
		$template->seta_variavel('grupo_produto','');
		$template->seta_variavel('pesquisa_produto',$produto);
		//$template->seta_variavel('grupo_produto','');
	}
	if(!empty($_POST['grupo_produto']) && empty($_POST['produto'])){
			$grupo = $_POST['grupo_produto'];
			$produto = $_POST['produto'];
			$select = "SELECT p.*, g.grupo_produto, m.medida FROM
			produto p, grupo_produto g, medida m WHERE
			p.id_grupo_produto = g.id_grupo_produto and
			p.medida = m.id_medida  and
			p.id_grupo_produto = $grupo ORDER BY p.produto";
			$sql = $pdo->prepare( "$select");		
			$sql->execute();
			$template->seta_variavel('pesquisa_produto','');
			$template->seta_variavel('grupo_produto',$grupo);
			//echo $sql->debugDumpParams();
	}
		
}else{
	$select = "SELECT p.*, g.grupo_produto, m.medida FROM 
	produto p, grupo_produto g, medida m WHERE p.id_grupo_produto = g.id_grupo_produto and p.medida = m.id_medida ORDER BY p.produto";
   $sql = $pdo->prepare( "$select");
   
    $sql->execute();
	
		
	//$template->seta_variavel('pesquisa_produto','');	

}

$sqlgrupo = $pdo->prepare( "SELECT * FROM grupo_produto " );
  $sqlgrupo->execute();
  $lst_grupo = '';
    while($lngrupo = $sqlgrupo->fetch(PDO::FETCH_OBJ)){
        $lst_grupo .= '<option value="'.$lngrupo->id_grupo_produto.'">'.$lngrupo->grupo_produto.'</option>';                                    
    }// end while
$lst_grupo .= '';
$template->seta_variavel('lst_grupo', $lst_grupo);
 //verifica a página atual caso seja informada na URL, senão atribui como 1ª página
  $pagina = (isset($_POST['pagina']))? $_POST['pagina'] : 1;
 

$registro_pagina = 50;
$numPaginas = ceil($sql->rowCount()/$registro_pagina);

$inicio = ($registro_pagina*$pagina)-$registro_pagina;
$sql = $pdo->prepare( "$select LIMIT $inicio,$registro_pagina");
$sql->execute();


//echo $sql->debugDumpParams();

$registro = '<tbody>';
while ( $ln = $sql->fetch(PDO::FETCH_OBJ)){

    $id       = $ln->id_produto;
  
    $grupo    = $ln->grupo_produto; 
    	
    $um       = $ln->medida;	
    if ($ln->data_balanco == '0000-00-00' || empty($ln->data_balanco)){
		$data_balanco = '----';
	}else{
	  $data_balanco = date('d/m/Y H:i:s', strtotime($ln->data_balanco));	
	}
	
	
    $registro .= '<tr>
                    <td>'.$id.'</td>
					
                    <td title="produto" class="editavel">'.$ln->produto.'</td>
					<td title="m2" class="editavel">'.$ln->m2.'</td>
					<td title="estoque" class="editavel">'.$ln->estoque_balanco.'</td>
					<td>'.$data_balanco.'</td>					
					<td>'.$ln->estoque.'</td>
                    <td title="id_grupo_produto" class="select">'.$grupo.'</td>
                    <td >'.$um.'</td>
					<td title="custo_unit" class="valor" >'.number_format($ln->custo_unit, 2, ',', '.').'</td>
                    <td title="vl_unit" class="valor" >'.number_format($ln->vl_unit, 2, ',', '.').'</td>
					<td title="estoque_minimo" class="editavel">'.$ln->estoque_minimo.'</td>
					
					                 
                    <td style="color:white;">produto</td>    
</tr>';
 }
 $registro .='</tbody>';
 $paginacao = '';
    for($i = 1; $i < $numPaginas + 1; $i++) {
		if(isset($_POST['pesquisa'])){
			$paginacao .= '
					 
				 <li class="active">
					<form action="#" method="post">						 
						 <input type="hidden" name="produto" value="'.$produto.'">						
						 <input type="hidden" name="pesquisa" value="">		 
						
						  <button type="submit" id="singlebutton" name="singlebutton" class="btn btn-primary">'.$i.'</button>
					  </form>		  
			     </li>
					
					  
		';
		}else{
			$paginacao .= '
					 
					
			 
					 <li class="active">
						<form action="#" method="post">
							 <input type="hidden" name="pagina" value="'.$i.'">                                         									 
							  <button type="submit" id="singlebutton" name="singlebutton" class="btn btn-primary">'.$i.'</button>
						  </form>		  
			  </li>				
					  
		';	
					  
		
		}
		
    }
 	

if(isset($_SESSION['usuario'])){
            
            $template->seta_variavel('registro',$registro);
			
			$template->seta_variavel('paginacao',$paginacao);  		
            $template->exibe_template();
        }else{
            echo "<script type = 'text/javascript'> location.href = 'login'</script>";
        }
            
    
   
   
  




