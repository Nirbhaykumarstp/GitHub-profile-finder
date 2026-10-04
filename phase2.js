let userName="AdtyaGupta72"
let repo="VersionControllingTest"
// let branchName="feature/AddIncome"
let errordiv=document.getElementById("error-msg")
const Totaldata={}
let callingBranches=async ()=>{
    try{
        let branchesAPI=await fetch(`https://api.github.com/repos/${userName}/${repo}/branches?per_page=100`)
        let developerAPI=await fetch(`https://api.github.com/repos/${userName}/${repo}/contributors`)
        let prAPI=await fetch(`https://api.github.com/search/issues?q=repo:${userName}/${repo}+is:pr`)
        //let commitsAPI=await fetch(`https://api.github.com/repos/${userName}/${repo}/commits?sha=${branchName}&per_page=100`)
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
        const devTable=document.getElementById("developer-commits")
        devTable.innerHTML=""
        devArr.forEach((obj)=>{
            const row=document.createElement("tr")
            row.innerHTML=`
            <td><span><img src="${obj.avatar_url}" height="30" width="30" >${obj.login}</span></td>
            <td>${obj.contributions}</td>
            `
            devTable.appendChild(row)
        })
        // commitTable.innerHTML=""
        // branchArr.forEach((obj)=>{
        //     const row=document.createElement("tr")
        //     row.innerHTML=`
        //         <td>${obj.name}</td>
        //         <td></td>
        //         <td>7</td>
        //     `
        //     commitTable.appendChild(row)
        // })
        // console.log(branchArr)

        async function fetchTotalcommit()
        {
            let dynamicBranch=branchArr.map(async (obj)=>{
                let commitsAPI=await fetch(`https://api.github.com/repos/${userName}/${repo}/commits?sha=${obj.name}&per_page=100`)
                return commitsAPI.json()
            })
            let data = await Promise.all(dynamicBranch);
            commitTable.innerHTML=""

            for(let j=0;j<branchArr.length;j++){
                const row=document.createElement("tr")
                for(let i=j;i<=j;i++){
                    row.innerHTML=`
                    <td>${branchArr[j].name}</td>
                    <td>${data[i].length}</td>
                    `
                    for(let k=0;k<=j;k++)
                    {
                        for(let l=0;l<data[k].length;l++)
                        {
                           
                            console.log(data[k][l]["commit"]["author"]["name"])
                            console.log(new Date(data[k][l]["commit"]["author"]["date"]).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }))
                        }
                    }
                }
                commitTable.appendChild(row)
            }
            
            console.log(branchArr)
            console.log(data)
        }
        fetchTotalcommit()
        console.log(commits)
        console.log(dynamicBranch)
    }
    catch(error)
    {
        console.log(error.message)
        document.getElementById("actual-msg").innerText=error.message
        errordiv.display="block"
        // document.getElementById("totalbranch").innerText=0
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