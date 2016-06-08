
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  var dub=document.querySelector("#compoundInvestment")
	dub.textContent=dub.textContent*2

})


document.querySelector("#color-circle button").addEventListener('click',function(){
	var circle=document.querySelector("#circle-bw")
	var computedStyle = window.getComputedStyle(circle)
	if(computedStyle.background='rgb(255,255,255)'){computedStyle.background=(computedStyle.background='black')}
		else{computedStyle.background=computedStyle.background='rgb(255,255,255)'}
  // TASK #3
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var blowUp=document.querySelector("#blow-up")
  var computedStyle = window.getComputedStyle(blowUp)
  if(computedStyle.answerBox.circleRed.width!='230px'){
  	computedStyle.answerBox.circleRed.width=parseInt(computedStyle.answerBox.circleRed.width)*2+'px'
	computedStyle.answerBox.circleRed.height=parseInt(computedStyle.answerBox.circleRed.height)*2+'px'
  }
  else{computedStyle.answerBox.circleRed.width='40px' computedStyle.answerBox.circleRed.height='40px'}
})

document.querySelector("#remove button").addEventListener('click',function(){
	var userList=document.querySelector("#userList")
	var liNodes=document.querySelector("#userList>li")
	document.querySelector("#color-circle button")
	var remove = function() {
  for (var i = 0; i < liNodes.length; i ++) {
    var liNode = liNodes[i]
    if (liNode.classList.contains('inactive')) {
       container.removeChild(liNode)
    } 
  }
}
  // TASK #5
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
	var reverseSquares=document.querySelector("#reverseSquares .answerBox")
	reverseSquares.innerHTML=
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})