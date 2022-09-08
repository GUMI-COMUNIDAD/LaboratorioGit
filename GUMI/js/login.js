
function validarLogin()
{
    var usuario=document.getElementById("Usuario").value;
	var Password=document.getElementById("Password").value;
	
	if(usuario=="Lentejas" && Password=="12345")
	{
		alert("Ingreso exitos");
		window.location="contact.html";
		return false;
	}
	else
	{
		alert("Usuario o clave invalido");
	}
		
}