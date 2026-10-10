//DEBOUNCING-- performance optimization technique, executes the function only after the period of inactivity

// const inputElement=document.getElementById('fruits')
// async function printInputText(text)
// {
//     console.log(text)
//     let apirule=`https://api.github.com/users/${text}`
//     let response = await fetch(apirule)
//     let data=await response.json()
//     console.log(data)
// }
// function debouncing(fx,delay)
// {
//     let timeoutId=null
//     return function(text){
//         clearTimeout(timeoutId)
//         timeoutId=setTimeout(()=>
//         {
//             fx(text)
//         },delay)
//     }
// }
// const debouncefun=debouncing(printInputText,2000)
// inputElement.addEventListener('input',(event)=>{
//     console.log("fruits")
//     debouncefun(event.target.value) //1  234567
// })

let commitsData={
    "Nirbhaykumarstp":
    [
        '4/12/2026',
        '4/12/2026',
        '4/12/2026',
        '5/12/2026',
        '6/12/2026',
        '6/12/2026',
        '6/12/2026',
        '6/12/2026',
        '7/12/2026',
        '7/12/2026',
        '8/12/2026',
    ]
}
let uniqueDays={}
uniqueDays["Nirbhaykumarstp"]=new Set()
commitsData["Nirbhaykumarstp"].forEach(date => {
    uniqueDays["Nirbhaykumarstp"].add(date)
})

console.log(uniqueDays)

let emptySet = new Set() // -> {}
console.log(emptySet.size) // -> 0
let petsSet = new Set(["cat", "dog", "cat"]) 
petsSet.add("5")
emptySet.add("10")
console.log(emptySet)
console.log(petsSet)
console.log(petsSet.size)