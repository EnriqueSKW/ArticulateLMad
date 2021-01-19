function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6D5dnhjbudo":
        Script1();
        break;
      case "6huTVFzzy8R":
        Script2();
        break;
      case "5mdFgnMjBxr":
        Script3();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script2()
{
  	var player = GetPlayer();
	
	////PLACE YOUR WEB APP URL
	WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwKD4j8Zj8q8GA2KkW6koRIBFmyYOMQVjnsvTjM0TiIKLfGxWri/exec";
 
	// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
	storyline =
	{
	   "date" : new Date().toJSON().slice(0,10), //STORE DATE
	   "name" : player.GetVar("name"),
	   "email" : player.GetVar("email"),
	   "message" : player.GetVar("message")
	}
}

function Script3()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

