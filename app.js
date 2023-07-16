let num = document.getElementById("num")
let hide_num = document.getElementById("hide_num")

const number = 1766118094

const splitNumber = number.toString().split("-", 9)
const splceNumber = number.toString().split("").slice(3, 9)


splitNumber.map((items) => {
    num.innerText = items.substring(0, 3);

    hide_num.addEventListener("click", () => {
        hide_num.innerText = items.substring(3, 15)
    })
})

