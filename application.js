const userName=document.getElementById("userNameInput").value


document.getElementById("submit").addEventListener("click",()=>{
    
    console.log(userName)
})
// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit()

// await octokit.request('GET /user', {
//   headers: {
//     'X-GitHub-Api-Version': '2026-03-10'
//   }
// })

const data=fetch("https://cli.github.com/manual/gh_api")
console.log(data)
