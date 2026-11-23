loadDataBtn.addEventListener("click", getData);

searchBtn.addEventListener("click", function () {
  const filtered = data.json.filter(function (e) {
    return e.title.includes(searchInput.value);
  });
  console.log(filtered);
});

var data ={}
var xhr = new XMLHttpRequest();
var requestUrl = "https://fakestoreapi.com/products";
tbody= document.getElementById("tableBodyData");
btnRemove=document.getElementById("btnRemove");
btnRemove.addEventListener("click",function(e){
    tbody.innerHTML = "";
});

//consumir api
function getData(url){
    xhr.open("GET", requestUrl, true); 
    xhr.onload = function(url){
        console.log(xhr.responseText);
        // Handle data
        array = JSON.parse(xhr.responseText);
        data.json=array;
    };
    xhr.send();
}

function genTr(json) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");

  td1.innerText = json.id;
  td2.innerText = json.title;
  td3.innerText = json.price;
  td4.innerText = json.description;
  td5.innerText = json.category;

  tr.append(td1, td2, td3, td4, td5);
  return tr;
}

// Dentro de xhr.onload:
array.forEach((element) => {
  console.log(element);
  tbody.append(genTr(element));
});
getData();