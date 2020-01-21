const baseURL = "https://www.dnd5eapi.co/";

function getData(address, cb) {
    var xhr = new XMLHttpRequest();

    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + address + "/");
    xhr.send();
}

function writeToDocument(address) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(address, function(data) {
        if(data.results.length > 1){
            console.log(data.results)
            for(var i = 0; i<data.results.length; i++){
                el.innerHTML += "<h5>"+data.results[i].name+ "</h5>";
                el.innerHTML += "<h5>"+data.results[i].index+ "</h5>";
                el.innerHTML += "<h5>"+data.results[i].url+ "</h5>";
                el.innerHTML += ("<button onclick='writeToDocument('"+data.results[i].url+"')>Go to</button>")

                el.innerHTML += "<h5>"+Object.keys(data.results[i])+ "</h5>";

            }
        }
            
        else{
            el.innerHTML = data.name;
        }
        
    });
}