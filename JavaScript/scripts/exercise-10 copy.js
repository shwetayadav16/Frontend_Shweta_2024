function prevoff(){
    const prevoff_element=document.querySelector('.is-toggled');
    if(prevoff_element){
        prevoff_element.classList.remove('is-toggled');
    }
}
function clicked(buttonClass){
   const buttonElement=document.querySelector(buttonClass);
   if(!buttonElement.classList.contains('is-toggled')){
    prevoff();
    buttonElement.classList.add('is-toggled');
   }
   else{
    buttonElement.classList.remove('is-toggled');
   }
}