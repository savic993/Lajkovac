var greske1 = new Array();
function odjava(){
	document.getElementById('logovanje').style.display = "block";
	document.getElementById('korisnik').style.display = "none";
}
function log(){
	var username = document.formaLogovanje.tbUsername.value;
	var lozinka = document.formaLogovanje.tbLozinka.value;

	var regUser = /^(\w)+(\d)+$/;
	var regLozinka = /^[A-Za-z0-9]{6,9}$/;

	if (!regUser.test(username)) {
		document.formaLogovanje.tbUsername.style.border = '1px solid #ff0000';
		greske1.push("Username nije odgovarajuci!");
	}
	if (!regLozinka.test(lozinka)) {
		document.formaLogovanje.tbLozinka.style.border = '1px solid #ff0000';
		greske1.push("Lozinka nije odgovarajuca!");
	}

	if (greske1.length == 0) {
		var user = document.formaLogovanje.tbUsername.value;
		document.getElementById('logovanje').style.display = "none";
		document.getElementById('korisnik').innerHTML = "<a href='user.html'>"+user+"</a>|"+"<a href='#' id='odjava' onclick='odjava();'>Odjava</a>";
	}
}

var greske = new Array();

function proveraIme(){
	var ime = document.getElementById('ime').value;
	

	var regIme = /^[A-Z][a-z]{2,19}$/;
	


	if (!regIme.test(ime)) {
		document.getElementById('ime').style.border = '1px solid #ff0000';
		alert("Unesite ime u formatu prvo veliko slovo minimalno 3 a maksimalno 20 slova!");
		greske.push("Ime nije u dobrom formatu.");
	}
	else
	{
		document.getElementById('ime').style.border = '1px solid #00ff00';
	}
	
}
function proveraPrezime(){
	var prezime = document.getElementById('prezime').value;
	

	var regPrezime = /^[A-Z][a-z]{2,29}$/;
	

	if (!regPrezime.test(prezime)) {
		document.getElementById('prezime').style.border = '1px solid #ff0000';
		alert("Unesite prezime u formatu prvo veliko slovo, minimalno 3 maksimalno 30 slova!");
		greske.push("Prezime nije u dobrom formatu.");
	}
	else
	{
		document.getElementById('prezime').style.border = '1px solid #00ff00';
	}
	

}
function proveraUser(){
	var user = document.getElementById('tbUsername').value;
	

	var regUser = /^(\w)+(\d)+$/;
	
	if (!regUser.test(user)) {
		document.getElementById('tbUsername').style.border = '1px solid #ff0000';
		alert("Unesite username u formatu samo slova i brojevi!");
		greske.push("Username nije u dobrom formatu.");
	}
	else
	{
		document.getElementById('tbUsername').style.border = '1px solid #00ff00';
	}
	
}
function proveraEmail(){
	var email = document.getElementById('email').value;
	
	var regEmail = /^[a-z\d][a-z\d\.]*\@[a-z\d\.]+$/;
	

	if (!regEmail.test(email)) {
		document.getElementById('email').style.border = '1px solid #ff0000';
		alert("Email nije u dobrom formatu!");
		greske.push("Email nije u dobrom formatu.");
	}
	else
	{
		document.getElementById('email').style.border = '1px solid #00ff00';
	}
	
}
function proveraLozinka(){
	var lozinka1 = document.getElementById('tbLozinka1').value;
	
	var regLozinka1 = /^[A-Za-z0-9]{6,9}$/;
	

	if (!regLozinka1.test(lozinka1)) {
		document.getElementById('tbLozinka1').style.border = '1px solid #ff0000';
		alert("Unesite lozinku koja mora imati minimalno 6 a maksimalno 9 karaktera!");
		greske.push("Lozinka nije u dobrom formatu.");
	}
	else
	{
		document.getElementById('tbLozinka1').style.border = '1px solid #00ff00';
	}
	
}
function proveraLozinkaPonovo(){
	var lozinka1 = document.getElementById('tbLozinka1').value;
	var lozinka2 = document.getElementById('tbLozinka2').value;

	var regLozinka2 = /^[A-Za-z0-9]{6,9}$/;

	if ((!regLozinka2.test(lozinka2)) || (lozinka1!=lozinka2) ) {
		document.getElementById('tbLozinka2').style.border = '1px solid #ff0000';
		alert("Unesite lozinku ponovo!");
		greske.push("Lozinka ponovo se ne poklapa sa lozinkom.");
	}
	else
	{
		document.getElementById('tbLozinka2').style.border = '1px solid #00ff00';
	}
}
function klik(){
	if(greske.length == 0){
		alert("Uspesno ste se registrovali!");
	}
}
function tacanOdgovor(){
	var tacan = document.getElementById('kolubara').checked;

	if(tacan){
		alert("To je tacan odgovor!");
	}
	else
	{
		alert("Niste dali tacan odgovor!");
	}
}
function proveraZa(){
	var email = document.getElementById('za').value;
	
	var regEmail = /^[a-z\d][a-z\d\.]*\@[a-z\d\.]+$/;
	

	if (!regEmail.test(email)) {
		document.getElementById('za').style.border = '1px solid #ff0000';
		alert("Email nije u dobrom formatu!");
		greske.push("Email nije u dobrom formatu.");
	}
	else
	{
		document.getElementById('za').style.border = '1px solid #00ff00';
	}
	
}
function slanje(){
	var za = document.getElementById('za').value;
	var tekst = document.getElementById('tekst').value;

	location = "mailto:" + za + "?subject=Kontakt&body=Poruka:" +tekst;

}
function promena(){
	var promena1 = document.getElementById('promenaLozinke').value;
	
	var regPromena = /^[A-Za-z0-9]{6,9}$/;

	if (!regPromena.test(promena1)) {
		document.getElementById('promenaLozinke').style.border = '1px solid #ff0000';
		alert("Unesite lozinku koja mora imati minimalno 6 a maksimalno 9 karaktera!");
		greske.push("Lozinka nije u dobrom formatu.");
	}
	else
	{
		document.getElementById('promenaLozinke').style.border = '1px solid #00ff00';
		alert("Uspešno ste promenili lozinku! Vaša nova lozinka je " + promena1);
	}
}
function pretraga(){
	var rec = document.getElementById('tbPretraga').value.toUpperCase();
	if (rec == "") {
		alert("Unesite rec za pretragu!");
	}
	else{
		if(window.XMLHttpRequest)
			{
				xmlhttp=new XMLHttpRequest();
			}
		else
			{
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
		xmlhttp.open("GET","naselja.xml",false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML;

		var rezultat = "";
		var svaNaselja = xmlDoc.getElementsByTagName('naselje');

		for(var i = 0 ; i < svaNaselja.length; i++){
			var nazivNaselja = svaNaselja[i].getElementsByTagName('naziv')[0].childNodes[0].nodeValue.toUpperCase();
			if (nazivNaselja.indexOf(rec)>=0) {
				rezultat = "<div class='rezPretrage'>Naziv:" + svaNaselja[i].getElementsByTagName('naziv')[0].childNodes[0].nodeValue + "<br/>Broj stanovnika: "+svaNaselja[i].getElementsByTagName('brStanovnika')[0].childNodes[0].nodeValue+"<br/>Godina popisa: "+svaNaselja[i].getElementsByTagName('godinaPopisa')[0].childNodes[0].nodeValue+"</div";	
				break;
			}
		}
		if (rezultat == "") {
			alert("Ne postoji ni jedan podatak o trazenom naselju.");
		}
		else{
			document.getElementById('levo').innerHTML = rezultat;
		}
	}
}