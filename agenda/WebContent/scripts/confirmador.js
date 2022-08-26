/**
 * confirmacao de exclusao de um contato
 * 
 * @author Aluna Ana Claudia
 * @param idcon
 */
function confirmar(idcon) {
	let resposta = confirm("Confirma a exclusao deste contato?")
	if(resposta === true ){
		//alert(idcon)
		// encaminhar para outro local
		window.location.href ="delete?idcon="+idcon
	}
}