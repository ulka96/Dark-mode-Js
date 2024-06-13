const lightBtnEl = document.getElementById("lightBtn");
const body = document.body;


lightBtnEl.addEventListener('click',()=>{
    if(document.body.classList.contains('bg-white')){
        // document.body.classList.remove('dark')
        document.body.classList.add('bg-black')
        document.body.classList.add('text-[white]')
        document.body.classList.remove('bg-white')
        document.body.classList.remove('text-[black]')
        lightBtnEl.textContent = 'Light'
        lightBtnEl.classList.add('bg-white');
        lightBtnEl.classList.add('text-[black]');
        lightBtnEl.classList.remove('bg-black');
        lightBtnEl.classList.remove('text-[white]');


    }else{
        document.body.classList.add('bg-white','text-[black]')
        document.body.classList.remove('bg-black')
        document.body.classList.remove('text-[white]')
        lightBtnEl.textContent = 'Dark'
        lightBtnEl.classList.add('bg-black');
        lightBtnEl.classList.add('text-[white]');
        lightBtnEl.classList.remove('bg-white');
        lightBtnEl.classList.remove('text-[black]');
    }
})





