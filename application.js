const url="https://api.github.com/users/Nirbhaykumarstp"

const getapi=async ()=>{
    console.log("fetching data...")
    let response = await fetch(url)
    let data=await response.json()
    let img=data.avatar_url
    let elem=document.querySelector("#user-image")
    elem.src=img
    console.log(data.avatar_url)
}

getapi()