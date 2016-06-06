// PART 0: Write a function called squareDance() that squares each number in an array.
var squareDance=function(array){
	var newArray=[]
	for(var i=0;i<array.length;i++) {
    newArray[i]=array[i]*array[i]
	}
return newArray
}
console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.
var nicer=function(input){
	var array=input.split(" ")
	for(var i=0;i<array.length;i++){
	if(array[i].indexOf("heck")!=-1){array.splice(i,1)}
	if(array[i].indexOf("darn")!=-1){array.splice(i,1)}
	if(array[i].indexOf("dang")!=-1){array.splice(i,1)}
	if(array[i].indexOf("crappy")!=-1){array.splice(i,1)}
    	}
return array.join(" ");

}

console.assert(nicer("mom get the heck in here and bring me a darn sandwich.") === "mom get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence. 
var capitalizeAll=function(input){
var array=input.split(" ")
	for(var i=0;i<array.length;i++){
       
        var word=array[i].split("")
        for(var x=0;x<1;x++){
         	word[0]=word[0].toUpperCase()
            var wat=word.join("")
            array[i]=wat
            
        	}  
	}

return array.join(" ")
}
console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'

console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 
var iPutTheFunIn=function(input){

var letters=input.split("")

var x =letters.length/2
log(letters)
var final=letters.splice(x, 0, "fun")
log(letters)

return letters.join("")


}
console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// the following three tests all correspond to the pipeline() function.

// test 1
var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

// test 2
var squareNum = function(n){
	return n * n
}

var addOne = function(n) {
	return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)

// test 3
var exclaimAll = function(arr) {
	var newArr = []
	for (var i = 0; i < arr.length; i ++) {
		newArr.push(arr[i] + '!')
	}
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")
