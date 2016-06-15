// GO!

var button = document.querySelector("#pushButton") 
var hide = document.querySelector(".nav-menu") 
var opa={
	opacity:true
}
button.addEventListener("click", function(){

	if(opa.opacity===false){
		hide.style.opacity=1
		opa.opacity=true
	 }
	else{
		opa.opacity=false
		hide.style.opacity=0
	}

		

})



var inputNode = document.querySelector('input[type="text"]')

var itemsListUl = document.querySelector(".guest-list")



var nameAdd = function(add) {

    if (add.keyCode === 13) {
      
      
      var inputNode = add.target
      
      var usrText = inputNode.value
     
      
      
      var liNode = document.createElement('li')
      
     
      liNode.textContent = usrText
      
      
      itemsListUl.appendChild(liNode)
      
      inputNode.v = ''
    }
}
inputNode.addEventListener('keydown',nameAdd)
