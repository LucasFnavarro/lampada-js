const btnTurnOn = document.getElementById("turnOn")
const ftLamp = document.getElementById("lamp");
const res = document.getElementById("res")
function isLampBroken () { 
    return ftLamp.src.indexOf ("quebrada") > -1
}
btnTurnOn.addEventListener("click", () => {
    if( !isLampBroken () ){
        ftLamp.src = "ligada.jpg";
        res.innerText = "Lâmpada On"
    }
}) 
const btnTurnOf = document.getElementById("turnOff")
btnTurnOf.addEventListener("click", () => {
    ftLamp.src = "desligada.jpg"
    res.innerText = ""
})
ftLamp.addEventListener("dblclick", () => {
    ftLamp.src = "quebrada.jpg"
    res.innerText = "A lâmpada está quebrada, clique em desligar para zerar !"
})