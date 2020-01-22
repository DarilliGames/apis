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
        for(var i = 0; i< data.items.length; i++){
            console.log(data.items[i]);
            console.log(data.items[i].volumeInfo.authors);
            
            getData(data.items[i].selfLink, function(data2){
                console.log(data2);
            });

            console.log(data.items[i].volumeInfo.publisher);

        }
        
        
    });
}