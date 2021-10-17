var $ = function(el){
    return document.querySelector(el);
}

var elPoks = $('.pokemons');
var elPokTemp = $('.pok-temp').content;
var elModal = $('.modal');
var elForm = $('.form');
var elInput = $('.input');
var elBtn = $('.btn');

var poksFragment = document.createDocumentFragment();

pokemons.forEach(function(pok){
    var tempClone = elPokTemp.cloneNode(true);
    tempClone.querySelector('.pok-img').src = pok.img;
    tempClone.querySelector('.pok-img').alt = pok.name;
    tempClone.querySelector('.pok-name').textContent = pok.name;
    tempClone.querySelector('.pok-id').textContent = pok.id;
    poksFragment.appendChild(tempClone);
});

elPoks.appendChild(poksFragment);

elForm.addEventListener('submit', function(e){
    e.preventDefault();
    var index = parseInt(elInput.value, 10);
    elInput.value = '';
    console.log(pokemons[index - 1]);
    elModal.querySelector('.modal-img').src = pokemons[index - 1].img;
    elModal.querySelector('.modal-img').alt = pokemons[index - 1].name;
    elModal.querySelector('.modal-title').textContent = pokemons[index - 1].name;
    elModal.querySelector('.modal-height').textContent = pokemons[index - 1].height;
    elModal.querySelector('.modal-weight').textContent = pokemons[index - 1].weight;
    elModal.querySelector('.modal-candy').textContent = pokemons[index - 1].candy;
    elModal.querySelector('.modal-egg').textContent = pokemons[index - 1].egg;
    elModal.querySelector('.modal-count').textContent = pokemons[index - 1].candy_count;
    elModal.querySelector('.modal-spawn').textContent = pokemons[index - 1].spawn_time;
    elModal.querySelector('.modal-weaknesses').textContent = pokemons[index - 1].weaknesses;
    elModal.classList.add('modal--open');
});

document.addEventListener('keyup', function(e){
    if(e.keyCode !== 27 || !elModal.classList.contains('modal--open')){
        return;
    }
    elModal.classList.remove('modal--open');
})

// ! pokemonlar ro'yxatini tepasida bitta input va bitta button bo'ladi
// ! inputga son kiritiladi, kiritilgan son necha bo'lsa shunchanchi tartib raqamda turgan pokemonning rasmi va nomi modal ga chiqariladi