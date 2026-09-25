let userName="AdtyaGupta72"
let repo="VersionControllingTest"
let branchName="feature/AddIncome"
let errordiv=document.getElementById("error-msg")
const Totaldata={}
let callingBranches=async ()=>{
    try{
        let branchesAPI=await fetch(`https://api.github.com/repos/${userName}/${repo}/branches?per_page=100`)
        let developerAPI=await fetch(`https://api.github.com/repos/${userName}/${repo}/contributors`)
        let prAPI=await fetch(`https://api.github.com/search/issues?q=repo:${userName}/${repo}+is:pr`)
        if (!(branchesAPI.ok && developerAPI.ok))
        {
            throw new Error(`API Error: ${branchesAPI.status}`)
        }
        let branchArr=await branchesAPI.json()
        let devArr=await developerAPI.json()
        let prObj=await prAPI.json()

        Totaldata.totalbranches=branchArr.length
        Totaldata.totaldevelopers=devArr.length
        Totaldata.totalPrs=prObj.total_count

        document.getElementById("totalbranch").innerText=Totaldata.totalbranches
        document.getElementById("totaldevlprs").innerText=Totaldata.totaldevelopers
        Totaldata.totalCommits=0
        devArr.forEach((obj)=>{
            Totaldata.totalCommits=Totaldata.totalCommits+obj.contributions
        })
        document.getElementById("total-commits").innerText=Totaldata.totalCommits
        document.getElementById("totalprs").innerText=Totaldata.totalPrs
        const commitTable=document.getElementById("branch-commit-pr")
        commitTable.innerHTML=""
        branchArr.forEach((obj)=>{
            const row=document.createElement("tr")
            row.innerHTML=`
                <td>${obj.name}</td>
                <td>5</td>
                <td>7</td>
            `
            commitTable.appendChild(row)
        })
        console.log(branchArr)
    }
    catch(error)
    {
        console.log(error.message)
        document.getElementById("actual-msg").innerText=error.message
        errordiv.display="block"
        document.getElementById("totalbranch").innerText=0
    }
}
//callingBranches()

let callingCommits=async ()=>{
    let commitsAPI=await fetch(`https://api.github.com/repos/${userName}/${repo}/commits?sha=${branchName}&per_page=100`)
    let commitArr=await commitsAPI.json()
    let totalCommits=commitArr.length
    console.log(totalCommits)
    console.log(commitArr)
}
//callingCommits()