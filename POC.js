//DEBOUNCING-- performance optimization technique, executes the function only after the period of inactivity

const inputElement=document.getElementById('fruits')
async function printInputText(text)
{
    console.log(text)
    let apirule=`https://api.github.com/users/${text}`
    let response = await fetch(apirule)
    let data=await response.json()
    console.log(data)
}
function debouncing(fx,delay)
{
    let timeoutId=null
    return function(text){
        clearTimeout(timeoutId)
        timeoutId=setTimeout(()=>
        {
            fx(text)
        },delay)
    }
}
const debouncefun=debouncing(printInputText,2000)
inputElement.addEventListener('input',(event)=>{
    console.log("fruits")
    debouncefun(event.target.value) //1  234567
})
