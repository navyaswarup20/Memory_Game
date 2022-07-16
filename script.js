//card flip process
//list a list of memory card in constant named cards
//document.carry Slector all passing the memory card class
const cards=document.querySelectorAll('.memory-card');
function flipCard(){
    //toogle means if there is a class add it.
 this.classList.toggle('flip');
}
//we will go to every card, whenever a click sound come, card will flip
cards.forEach(card => card.addEventListener('click',flipCard))

