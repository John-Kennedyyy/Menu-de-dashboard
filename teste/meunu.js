
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink )
)
//expandindo o menu

var exp = document.querySelector('#icone')
var menuSide = document.querySelector ('.menu')

exp.addEventListener('mouseenter', function() {
    menuSide.classList.add('abrir');

});

exp.addEventListener('mouseleave', function() {
    menuSide.classList.remove('abrir');
});