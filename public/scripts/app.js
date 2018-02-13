

document.getElementById("test").onclick = loadXMLDoc;


function loadXMLDoc() {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("new").innerHTML = this.responseText;

      let stuff = JSON.parse(xhttp.responseText);

      //removing old stuff from the spot
      document.getElementById('new').innerHTML = "";

      console.log(stuff.results.length);
      for(let i = 1; i < stuff.results.length; i++){

      	console.log("a");

      	//name of monster
      	let name = document.createElement('a');
      	name.setAttribute('href', "/" + i);
      	name.innerHTML = stuff.results[i].name;

      	//br tag
      	let br = document.createElement('br');

      	//link to monster details
      	let link = document.createElement('a');
      	link.setAttribute('href', stuff.results[i].url);
      	link.innerHTML = stuff.results[i].url;

      	let hr = document.createElement("hr");

      	document.getElementById('new').appendChild(name);
      	document.getElementById('new').appendChild(br);
      	document.getElementById('new').appendChild(link);
      	document.getElementById('new').appendChild(hr);

      }

    }

  };

  xhttp.open("GET", "http://www.dnd5eapi.co/api/monsters/", true);
  xhttp.send();

}


//this is to get the chats
document.getElementById("seeChat").onclick = ShowUserChats;

function ShowUserChats() {
  console.log("did a thing")
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("new").innerHTML = this.responseText;

      //clearing the old chat log
      document.getElementById("newChats").innerHTML = "";

      let stuff = JSON.parse(xhttp.responseText);

      console.log(stuff);
      for(let i =  stuff.length - 1; i > 0; i--){
        
        let name = document.createElement('p');
        name.innerHTML = stuff[i].name;

        let message = document.createElement('p');
        message.innerHTML = stuff[i].message;

        let br = document.createElement("br");
        let hr = document.createElement("hr");

        document.getElementById('newChats').appendChild(name);
        document.getElementById('newChats').appendChild(message);
        document.getElementById('newChats').appendChild(br);
        document.getElementById('newChats').appendChild(hr);

      }

    }

  };

  xhttp.open("GET", "/chat", true);
  xhttp.send();

}

console.log( window.location.href );





