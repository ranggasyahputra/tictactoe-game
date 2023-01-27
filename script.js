const gridOne = document.getElementById("grid-1")
const gridTwo = document.getElementById("grid-2")
const gridThree = document.getElementById("grid-3")
const gridFour = document.getElementById("grid-4")
const gridFive = document.getElementById("grid-5")
const gridSix = document.getElementById("grid-6")
const gridSeven = document.getElementById("grid-7")
const gridEight = document.getElementById("grid-8")
const gridNine = document.getElementById("grid-9")
const boxStatus = document.querySelector(".box-status")
const gameStatus = document.querySelector(".game-status")
const restartButton = document.querySelector("#restart")

var currentPlayer = "X"
var turns = 0
const isWinningCombinationX = false
const isWinningCombinationO = false
boxStatus.style.display = "none"
const winningCombination = [
    [gridOne, gridTwo, gridThree],
    [gridOne, gridFive, gridNine],
    [gridOne, gridFour, gridSeven],
    [gridTwo, gridFive, gridEight],
    [gridThree, gridSix, gridNine],
    [gridThree, gridFive, gridSeven],
    [gridFour, gridFive, gridSix],
    [gridSeven, gridEight, gridNine]
    ]
function winConditionX() {

    for (const combinations of winningCombination) {
        if (combinations[0].innerHTML === "X" && combinations[1].innerHTML === "X" && combinations[2].innerHTML === "X") {
            boxStatus.style.display = "block"
            boxStatus.style.backgroundColor = "#EB455F"
            gameStatus.innerHTML = "X MENANG"
            isWinningCombinationX = true
        }
    }
}
function winConditionO() {
    for (const combinations of winningCombination){
        if (combinations[0].innerHTML === "O" && combinations[1].innerHTML === "O" && combinations[2].innerHTML === "O"){
            boxStatus.style.display = "block"
            boxStatus.style.backgroundColor = "#2B3467"
            gameStatus.innerHTML = "O MENANG"
            isWinningCombinationO = true
        }
    }
}



const gridElements = [gridOne, gridTwo, gridThree, gridFour, gridFive, gridSix, gridSeven, gridEight, gridNine]
gridElements.forEach(grid => {
    restartButton.addEventListener("click", () => {
        boxStatus.style.display = "none"
        grid.innerHTML = ""
        turns = 0
        gameStatus.innerHTML = ""
        grid.style.pointerEvents = "all"
        currentPlayer = "X"
    })

    function playing() {
        if (gameStatus.innerHTML == "") {

            if (grid.innerHTML == "") {
                grid.classList.add("fade-in")
                grid.innerHTML = currentPlayer === "X" ? (currentPlayer = "O", "X") : (currentPlayer = "X", "O")
                grid.style.color = currentPlayer === "X" ? ("#2B3467") : ("#EB455F")
                grid.addEventListener("animationend", function () {
                    grid.classList.remove("fade-in")
                })
                turns++;
                console.log(turns)
                winConditionX()
                winConditionO()


                if (turns === gridElements.length) {
                    if (!isWinningCombinationX && !isWinningCombinationO) {
                        gameStatus.innerHTML = "GAME TIED"
                    }
                }
            } else {
                null
            }
        } else {
            grid.style.pointerEvents = "none"
        }

        // winConditionX()
        // winConditionO()

    }
    grid.addEventListener("click", playing)

})

// if(gameStatus.innerHTML == "O MENANG" || gameStatus.innerHTML == "X MENANG" ) {
//    grid.style.pointerEvents = "none"
// }
