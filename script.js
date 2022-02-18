icons = [
  {'link':'https://media.discordapp.net/attachments/916375412949528618/944127895557795860/bc227b46acba4458a9eca0ef73d95d50.jpg', 'tag':'GlitchCore'},
  {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944132948976865381/wp10229075.jpg', 'tag':'Gothic'}
  ]

function icons1() {
    let aux = ""
    icons.forEach(value => {
      aux += `
      <li class="imgitem">
        <img class="imglink" src="${value.link}">
      </li>`
      document.getElementsByClassName("images")[0].innerHTML = aux;
    })}
icons1()
function GlitchCore()
