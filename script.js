const btns = document.querySelectorAll("button")
const input= document.querySelector("input")
const l3amaliyat = ["/","*", "-", "+","%","="]
let output = ""



btns.forEach(element => {
    element.addEventListener("click",(e)=>{
        const elem = e.target.value
        if(elem == "AC"){
            input.value = ""
            output = ""
            return
        }
        if(elem == "="){
            output = eval(output.replace("%","/100"))
            output = eval(output)
            input.value = output
            if(input.value == "undefined"){
                output = ""
                input.value = "Error"
                return
            }
        }
        if (elem == "DEL"){
            output = output.slice(0,-1)
            input.value = output
            return
        }
        output += e.target.value
        input.value = output
        if(input.value.includes("=") == true){
            output = output.slice(0,-1)
            input.value = output
        }
    })
})

















































































































