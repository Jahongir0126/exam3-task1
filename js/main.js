var arr =[]
var sum = 0;

function sumInput(){
   let razmer = prompt("Nechta son kiritasiz ?")
 for( let i=0;i<razmer;i++){
    var elPrompt = prompt('Sonni kiriting');
    if (!isNaN(elPrompt) && elPrompt !="" && elPrompt!=null) {
    arr.push(elPrompt);
    }else{
       alert ('Hato kiritdingiz');break}
} for(var i = 0; i < arr.length; i++){
    sum += arr[i]-0;
}
alert(`Summa = ${sum}`)
}
sumInput();