let students = [
    {
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHK_xd4GHWvzXkA3DygGiU3---JdQdHXbA_uTguFvckcwsMDakFodlYlaQMv4p6fWM5I&usqp=CAU",
        name : "Vijay",
        mbl : 9259874550,
        batch : "FSD10",
        git : "https://github.com/vijaydev133",
        gitUName: "vijaydev133" ,
        Refby : "M. Chermaraja",
        loc : "Online",
        plcsts : "Not Started"

    },
    {
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSla-p7MqWVSLL2rpSQHlxEO6mKceKYPvZjo4oslefoeXE7-oMcRHP5IfT3qgllHC8kKvQ&usqp=CAU",
        name : "Ajay",
        mbl : 938527410,
        batch : "FSD09",
        git : "https://github.com/vijaydev133",
        gitUName: "vijaydev133" ,
        Refby : "K Rahul",
        loc : "Pavoorchatram",
        plcsts : "Not Started"

    },
    {
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg7YYue_VyRsQLCwmguYP8nSLBwe24G8WgqJr8i_YxHwyHXbn9wqkZXAwdAvSGF9kVMk&usqp=CAU",
        name : "Menan",
        mbl : 936874590,
        batch : "FSD05",
        git : "https://github.com/vijaydev133",
        gitUName: "vijaydev133" ,
        Refby : "S Vinith",
        loc : "Chennai",
        plcsts : "Not Started"

    }
]

let tbody = document.querySelector(".tbody")
let table = document.querySelector(".table")
// let cell;
students.forEach(e=>{
    let row = table.insertRow();
    let img = document.createElement("img")
    img.src = e.img

    let a = document.createElement("a")
    a.href = e.git
    a.textContent = e.gitUName
for(let i = 0; i <= 7; i++){
    let cell = row.insertCell();
     switch(i){
        case 0:
            cell.append(img)
        break;
        case 1:
            cell.textContent = e.name
        break;
        case 2:
            cell.textContent = e.mbl
        break;
        case 3:
            cell.textContent = e.batch
        break;
        case 4:
            cell.append(a) 
        break;
        case 5:
            cell.textContent = e.Refby
        break;
        case 6:
            cell.textContent = e.loc
        break;
        case 7:
            cell.textContent = e.plcsts
        break;
    
    }
}
})

/*********************************************************************** */

//**********************ADD THIS IN OBJECT*******************************/

/**
 * ,
    {
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8P6POnmXE2YJlFMqlJ-b2F_t8bdqTq4CAb-mQWDeI813MCCXefNOg9RjN2AQZwPzy3Y&usqp=CAU",
        name : "Nandhini",
        mbl : 936874590,
        batch : "FSD08",
        git : "https://github.com/vijaydev133",
        Refby : "Mohana",
        loc : "Online",
        plcsts : "Not Started"

    }
 */

/*********************************************************************** */
