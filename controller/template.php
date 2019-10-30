<?php
class template {
	
	public $template;
	public $mensagem;
	
	function __construct(){
	}
	
	function carrega_template($arquivo){
						//file_get_contents('arquivos_html/'=pasta onde esta o arquivo  .$arquivo.'.html'); 	
		$this->template = file_get_contents('./view/'.$arquivo.'.html'); 	
	}
	
	function carrega_sub_template($v_sub_template, $arquivo){
		$sub_template = file_get_contents('./view/'.$arquivo.'.html');
		$aux = str_replace('{'.$v_sub_template.'}', $sub_template, $this->template);
		$this->template = $aux;
	}
	
	function seta_variavel($variavel, $c_variavel){
		$aux = str_replace('{'.$variavel.'}', $c_variavel, $this->template);
		$this->template = $aux;
	}
	
	function mensagem($mensagem){
		$_SESSION['mensagem_template'] = $mensagem;
	}

	function exibe_template(){
		echo $this->template;
		if (isset($_SESSION['mensagem_template'])){
						
			echo '<script type="text/javascript">
					alert("'.$_SESSION['mensagem_template'].'");
				  </script>';
			unset ($_SESSION['mensagem_template']);
		}
	}

}

?>