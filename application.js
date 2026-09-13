const form=document.getElementById("form")
const submitbtn=document.getElementById("submit")
const userDetails={
  image:document.getElementById("user-image"),
  publicRepo:document.getElementById("publicRepo"),
  following:document.getElementById("following"),
  followers:document.getElementById("followers"),
  Name:document.getElementById("name"),
  portfolio:document.getElementById("portfolio"),
  location:document.getElementById("location"),
  date:document.getElementById("date"),
  ProfileView:document.getElementById("profile")
}

submitbtn.addEventListener("click",async (Event)=>{
  Event.preventDefault()
  let userName=document.getElementById("userNameInput").value.trim()
  let apirule=`https://api.github.com/users/${userName}`
  let response = await fetch(apirule)
  let data=await response.json()
  console.log(data)
  userDetails.image.src=data.avatar_url
  userDetails.publicRepo.innerText=data.public_repos
  userDetails.followers.innerText=data.followers
  userDetails.following.innerText=data.following
  userDetails.Name.innerText=data.name
  userDetails.portfolio.innerText=data.blog
  userDetails.location.innerText=data.location
  userDetails.date.innerText=new Date(data.created_at).toLocaleString()
  userDetails.ProfileView.addEventListener("click",(event)=>{
    window.open(data.html_url)
  })
  console.log(userDetails)
})

// const url="https://api.github.com/users/Nirbhaykumarstp"

// const getapi=async ()=>{
//     console.log("fetching data...")
//     let response = await fetch(url)
//     let data=await response.json()
//     let img=data.avatar_url
//     let elem=document.querySelector("#user-image")
//     elem.src=img
//     console.log(data.avatar_url)
// }

// getapi()