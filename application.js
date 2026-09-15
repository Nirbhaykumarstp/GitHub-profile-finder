const form=document.getElementById("form")
const submitbtn=document.getElementById("submit")
const section=document.getElementById("user")
section.style.display="none"

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
  section.style.display="block"
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

  let repoDetails= async()=>{
    let repos=await fetch(`https://api.github.com/users/${userName}/repos?sort=pushed&direction=desc&per_page=6`)
    return repos.json()
  }
  let repoData= await repoDetails()
  console.log(typeof repoData)
  console.log(repoData)
  console.log(repoData.length)
  const repos=document.getElementById("repo-div")

  for(let i=1;i<repoData.length;i++)
  {
    let newLi=document.createElement("li")
    newLi.id=`List-${i}`
    newLi.innerText=repoData[i-1].name
    newLi.addEventListener("click",()=>{
      window.open(repoData[i-1].html_url)
    })

    let newUl=document.createElement("ul")
    for(let j=1;j<4;j++)
    {
      let anotherLi=document.createElement("li")
      anotherLi.id=`li-${i}-${j}`
      if(anotherLi.id==`li-${i}-1`)
      {
        anotherLi.innerText=`Stars: ${repoData[i-1].stargazers_count}`
      }
      else if(anotherLi.id==`li-${i}-2`)
      {
        anotherLi.innerText=`Forks: ${repoData[i-1].forks}`
      }
      else if(anotherLi.id==`li-${i}-3`)
      {
        anotherLi.innerText=`Language: ${repoData[i-1].language}`
      }
      newUl.appendChild(anotherLi)
    }
    newLi.classList.add("repo-details")
    newUl.classList.add("repo-detail")
    repos.appendChild(newLi)
    newLi.appendChild(newUl)
  }
  console.log(userDetails)
})