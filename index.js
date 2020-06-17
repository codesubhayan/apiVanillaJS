
var value,input,requestedValue,url;
const triggered=[];

function dataSelect()
{
	var d=document.getElementById('datalist1');
	var displayText=d.options[d.selectedIndex].text;
	document.getElementById("txtvalue").value=displayText;
	
}

function myFunction()
{	

	input=document.querySelector("#txtvalue").value;
	var d=document.getElementById('datalist1');
	value=d.options[d.selectedIndex].value;	
	triggered.push(value);
	requestedValue=triggered.pop();	
	url="http://node.uttarakhandtraveller.com/places/"+requestedValue;
    console.log(url);
	
}



// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		var posts = JSON.parse(xhr.responseText);
		// Runs when the request is successful
		var detail=posts.place.detail;
		var name=posts.place.name;
		$("h1").text(name);
		$("p").text(detail);
		console.log(posts.place.detail);
	} else {
		// Runs when it's not
		console.log(JSON.parse(xhr.responseText));
	}

};


// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
function apiCall(){
xhr.open('GET', url);
xhr.send();
}