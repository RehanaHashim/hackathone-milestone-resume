
let toggleBtton = document.getElementById('toggle-skills') as HTMLButtonElement

let skils =document.getElementById('skills') as HTMLElement

toggleBtton.addEventListener('click', ()=> {
   
    if (skils.style.display === 'none')
    {
        skils.style.display = 'block'
    } 
    else 
    {
        skils.style.display = 'none'
    }

});