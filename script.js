const body = document.querySelector('body')
const rifa = document.querySelector('.rifa')
const vencedor = document.querySelector('.vencedor')
const sortear = document.querySelector('.sortear')
const ListaOrganizada = document.createElement('ol')
const secondList = document.createElement('ol')
ListaOrganizada.classList.add('organizada')
const participantes = ['felipe','gabriel','esmael','alex','miguel','junior','pedro','ezequiel','ariel','sara','lucas','rafaela','yuri','kauã','jorge','amanda','wiliam','vitor','papa','joão','uriel',]
  let title = document.createElement('h1')


for(let i = 1; i <= 20; i++){
    let lista = document.createElement('li')
    lista.classList.add('participantes')
    lista.innerHTML = participantes[i]
    ListaOrganizada.appendChild(lista)
    rifa.appendChild(ListaOrganizada)

}

 

sortear.addEventListener('click',()=>{


    let aleatorio = Math.floor(Math.random()   * participantes.length )
    title.innerHTML = `${aleatorio +1}  - ${participantes[aleatorio]}`  
    title.classList.add('participante')
    vencedor.appendChild(title)    
})






 
 