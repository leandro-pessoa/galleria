// retorna o elemento html especificado no parâmetro
const classe = (param) => {
    return document.querySelector(param)
}

// elementos html
const btn = classe('button.header-button')
const openBtn = classe('button.open')
const closeBtn = classe('button.close')
const divNav = classe('div.div')
const nav = classe('nav.nav') 

// troca entre menu horizontal e vertical
const resize = () => {
    if(window.innerWidth < 888){
        btn.style.display = 'block'
        divNav.className = 'header-vertical-menu'
        nav.className = 'header-vertical-navbar'
        divNav.style.display = 'none'
    }
    else {
        btn.style.display = 'none'
        divNav.style.display = 'flex'
        nav.style.display = 'flex'
        divNav.className = 'header-horizontal-menu'
        nav.className = 'header-horizontal-navbar'
    }
}

// alterna o display do nav conforme o clique do botão
    const toggleNav = (param) => {
        if(!param){
            divNav.style.display = 'none'
        }
        else{
            divNav.style.display = 'block'
        }
    }

    // ativa a função 'toggleNav' ao se clicar no botão
    openBtn.addEventListener('click', ()=>toggleNav(true))
    closeBtn.addEventListener('click', ()=>toggleNav(false))

// atribuição do ano atual no footer
const anoAtual = new Date().getFullYear()
const span = document.querySelector('span#ano-atual')
span.innerHTML = anoAtual