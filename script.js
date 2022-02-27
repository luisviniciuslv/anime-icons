var url = "https://api-site-conhecimento.herokuapp.com/icons";
var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, false);
xhttp.send();
var icons = JSON.parse(xhttp.responseText)
icons = icons.reverse()
function icons1() {
    let aux = ""
    icons.forEach(value => {
      aux += `
      <a href="${value.link}" target="_blank"
      <li class="imgitem">
        <img class="imglink" src="${value.link}">
      </li>
      </a>`
      document.getElementsByClassName("images")[0].innerHTML = aux;
      document.getElementById("tagSearch").placeholder=''
    })}

function tag(tag) {
  let aux = ""
    icons.forEach(value => {
      if (value.tag.includes(tag.toLowerCase())){
        aux += `
        <a href="${value.link}" target="_blank"
        <li class="imgitem">
          <img class="imglink" src="${value.link}">
        </li>
        </a>`
        document.getElementById("tagSearch").placeholder=''
}
  document.getElementsByClassName("images")[0].innerHTML = aux;
})}

function soon()
{
alert("cooming soon");
}
icons1()

function searchTag() {
  var tag = "";
  tag = document.getElementById('tagSearch').value;

  if (tag === ""){
    document.getElementById("tagSearch").placeholder = "Text null"
    icons1()
  }
  else{
    let aux = ""
    icons.forEach(value => {
      if (value.tag.includes(tag)){

        aux += `
        <a href="${value.link}" target="_blank"
        <li class="imgitem">
          <img class="imglink" src="${value.link}">
        </li>
        </a>`
        document.getElementById("tagSearch").placeholder=''
      }
      else{
        document.getElementById("tagSearch").placeholder=''
        const aux = 0
      }
  if (aux == 0){
    document.getElementById("tagSearch").value=''
    document.getElementById("tagSearch").placeholder = "Tag not found"
  }
  else{
    document.getElementById("tagSearch").placeholder=''
    document.getElementsByClassName("images")[0].innerHTML = aux;
  }
})}}
