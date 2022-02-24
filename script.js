var url = "https://api-site-conhecimento.herokuapp.com/icons";
var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, false);
xhttp.send();
var icons = JSON.parse(xhttp.responseText)

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
    })}

function tag(tag) {
  let aux = ""
    icons.forEach(value => {
      if (value.tag.includes(tag)){
        aux += `
        <a href="${value.link}" target="_blank"
        <li class="imgitem">
          <img class="imglink" src="${value.link}">
        </li>
        </a>`
}

document.getElementsByClassName("images")[0].innerHTML = aux;
})}

function soon()
{
alert("cooming soon");
}
icons1()