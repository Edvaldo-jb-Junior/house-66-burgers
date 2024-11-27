const list = document.querySelector("ul")
const buttonAllMenu = document.querySelector(".full-menu")
const buttonDesconts = document.querySelector(".desconts")
const buttonTotal = document.querySelector(".ValueTotal")
const buttonVegan = document.querySelector(".veganMenu")

function allMenu(productsArray) {
  let myMenuAll = ""

  productsArray.forEach(products => {

    myMenuAll += `<li>
                        <img src=${products.src}>
                        <p>${products.name}</p>
                        <p class="value">R$ ${products.price}</p>
                     </li >`

  })
  list.innerHTML = myMenuAll
}

function valueWithDesconts() {
  const Descont = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }))

  allMenu(Descont)
}

function somaTotal() {
  const total = menuOptions.reduce((acc, product) => acc + product.price, 0)

list.innerHTML = ` <li>
                      <p>Valor total dos Produtos R$ ${total}</p>
                    </li >`
}

function veganMenu() {
  const veganCard = menuOptions.filter((product) => product.vegan === true)

  list.innerHTML = veganCard

  allMenu(veganCard)
}

buttonAllMenu.addEventListener("click", () => allMenu(menuOptions))
buttonDesconts.addEventListener("click", valueWithDesconts)
buttonTotal.addEventListener("click", somaTotal)
buttonVegan.addEventListener("click", veganMenu)








/**/
