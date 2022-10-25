
// Use insert() function to insert the number in results.
function insert(num){
document.result.outputvalue.value = result.outputvalue.value + num;
}


// Use equal() function to return the result based on passed values.
function equal(){
var expression = document.result.outputvalue.value;
if(expression){
    document.result.outputvalue.value = eval(expression)
}}

/* Here, we create a backspace() function to remove the number at the end of the numeric series in results. */
function backspace(){
var exp =   document.result.outputvalue.value;
document.result.outputvalue.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
}