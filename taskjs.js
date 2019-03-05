
var modal = document.getElementById('myModal');
var btn = document.getElementById("mybnt");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
	modal.style.display = "block";
  	set();
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function set(){
var obj, dbParam, xmlhttp, myObj, titulo, url, sespaco;
const inputEle = document.getElementById('nome');
titulo = document.getElementById('nome').value;
sespaco = titulo.replace( / /gi,'+');
url = "http://www.omdbapi.com/?apikey=65f8bf37&t="+sespaco;
obj = {table: "customers", limit: 20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", url , true);
xmlhttp.onreadystatechange = function() {
  	if (this.readyState == 4 && this.status == 200) {
	   	myObj = JSON.parse(this.responseText);
	       
	    document.getElementById("title").innerHTML = myObj.Title;
	    document.getElementById("year").innerHTML = myObj.Year;
	    document.getElementById("genre").innerHTML = myObj.Genre;
	    document.getElementById("time").innerHTML = myObj.Runtime
	    document.getElementById("director").innerHTML = myObj.Director;
	    document.getElementById("actors").innerHTML = myObj.Actors;
	    document.getElementById("writer").innerHTML = myObj.Writer;
	    document.getElementById("language").innerHTML = myObj.Language;
	    document.getElementById("awards").innerHTML = myObj.Awards;
	    document.getElementById("poster").src = myObj.Poster;
		document.getElementById("plot").innerHTML= myObj.Plot;
  	}
};
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);
}