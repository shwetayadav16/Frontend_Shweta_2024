function addItems(){
    const buttonElement= document.querySelector('.js-cart-button');
    if(buttonElement.innerText==='Add to Cart'){
        buttonElement.innerText='Added';
        buttonElement.classList.add('is-added');
    }
    else{
        buttonElement.innerText='Add to Cart';
        buttonElement.classList.remove('is-added');
    }
}
function clicked(buttonClass){
   const buttonElement=document.querySelector(buttonClass);
   if(!buttonElement.classList.contains('is-toggled')){
    buttonElement.classList.add('is-toggled');
   }
   else{
    buttonElement.classList.remove('is-toggled');
   }
}