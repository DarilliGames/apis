const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";

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
        console.log(data);
        
    });
}