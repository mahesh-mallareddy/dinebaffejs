let getlogin = document.getElementById("getlogin")

getlogin.addEventListener('click', () =>{
    document.getElementById("loginbox").classList.toggle("changes")
    document.getElementById("clickbtn").classList.add("box1")
    
})
let getlogin1 = document.getElementById("getlogin1")

getlogin1.addEventListener('click', () =>{
    document.getElementById("loginbox").classList.toggle("changes")
    document.getElementById("clickbtn").classList.add("box1")
})

let closebtn = document.getElementById("closebtn")

closebtn.addEventListener('click', () =>{
    document.getElementById("loginbox").classList.remove("changes")
    document.getElementById("clickbtn").classList.remove("box1")
})
