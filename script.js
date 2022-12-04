const gameBoard = (() => {
    let boardArray = ['','','',
                      '','','',
                      '','',''];

    return {
        boardArray: boardArray
    }
})();

const displayController = ((container) => {
    const buttonplayer1 = document.querySelector(".PlayerX");
    const buttonplayer2 = document.querySelector(".PlayerO");
    let firstplay = "yes";

    render: function render(container) {
        const boardcontainer = document.querySelector(".boardcontainer");

        container.forEach(function (cell, value) {
            
            let div = boardcontainer.appendChild(document.createElement("div"));
            div.classList.add("boardcell");
            let cellIndex = `${value}`;
            div.addEventListener("click", function() {populateArrayAndDisplay(cellIndex)});
        });

        function playerdata(name, marker, buttonnumber) {
            Players.setplayerdata(name, marker);
            disableOtherButton(buttonnumber);
        }

        function disableOtherButton(buttonnumber) {
            if (buttonnumber == buttonplayer1) {
                let nextbutton = buttonnumber.nextElementSibling;
                nextbutton.disabled = true;
            } else {
                let previousbutton = buttonnumber.previousElementSibling;
                previousbutton.disabled = true;
            }
        }

        function populateArrayAndDisplay(cellIndex) {
            let properdiv = boardcontainer.children[cellIndex];
            let grabplayerdata = Players.currentPlayerData;

            if (container[cellIndex] != "") {
                return;
            } 
            
            if (Players.currentPlayerData == undefined) {
                buttonplayer1.disabled = true;
                buttonplayer2.disabled = true;
                container[cellIndex] = "X";
                Players.currentPlayerData = ["Player1", "X"];
            } else {
                container[cellIndex] = `${grabplayerdata[1]}`;
            }
            properdiv.innerText = `${container[cellIndex]}`;
            properdiv.style.cursor = "not-allowed";
            game.checkForWin();
            switchPlayer();
        }

        function switchPlayer() {
            if (Players.currentPlayerData[0] == "Player1") {
                Players.currentPlayerData = ["Player2", "O"];
            } else {
                Players.currentPlayerData = ["Player1", "X"];
            }
        }
        
        buttonplayer1.addEventListener("click", function() {playerdata("Player1", "X", this)}, {once: true});
        buttonplayer2.addEventListener("click", function() {playerdata("Player2", "O", this)}, {once: true});

    }

    return {
        render: render
    }
})();

const Players = (function(name, marker) {
    const currentplayersign = document.querySelector(".currentplayer");

    let currentPlayerData = undefined;

    function setplayerdata(name, marker) {
        currentplayersign.innerText = `Current turn: ${name}`;
        currentPlayerData = [name, marker];
    }

    return {
        setplayerdata: setplayerdata,
        get currentPlayerData() {
            return currentPlayerData;
        },
        set currentPlayerData(newData) {
            currentPlayerData = newData;
            currentplayersign.innerText = `Current turn: ${newData[0]}`;
        }
    }
})();

const game = (function(){

    function checkForWin() {
        if (currentboard[0] == "X" && currentboard[1]  == "X" && currentboard[2] == "X") {
            console.log("works");
        } else if (currentboard[0] == "O" && currentboard[1]  == "O" && currentboard[2] == "O") {
            console.log("alsoworks");
        } else if (currentboard[3] == "X" && currentboard[4]  == "X" && currentboard[5] == "X") {
            console.log("3alsoworks");
        } else if (currentboard[3] == "O" && currentboard[4]  == "O" && currentboard[5] == "O") {
            console.log("4alsoworks");
        } else if (currentboard[6] == "X" && currentboard[7]  == "X" && currentboard[8] == "X") {
            console.log("5alsoworks");
        } else if (currentboard[6] == "O" && currentboard[7]  == "O" && currentboard[8] == "O") {
            console.log("6alsoworks");
        } else if (currentboard[0] == "X" && currentboard[3]  == "X" && currentboard[6] == "X") {
            console.log("7alsoworks");
        } else if (currentboard[0] == "O" && currentboard[3]  == "O" && currentboard[6] == "O") {
            console.log("8alsoworks");
        } else if (currentboard[1] == "X" && currentboard[4]  == "X" && currentboard[7] == "X") {
            console.log("9alsoworks");
        } else if (currentboard[1] == "O" && currentboard[4]  == "O" && currentboard[7] == "O") {
            console.log("10alsoworks");
        } else if (currentboard[2] == "X" && currentboard[5]  == "X" && currentboard[8] == "X") {
            console.log("11alsoworks");
        } else if (currentboard[2] == "O" && currentboard[5]  == "O" && currentboard[8] == "O") {
            console.log("12alsoworks");
        } else if (currentboard[0] == "X" && currentboard[4]  == "X" && currentboard[8] == "X") {
            console.log("13alsoworks");
        } else if (currentboard[0] == "O" && currentboard[4]  == "O" && currentboard[8] == "O") {
            console.log("14alsoworks");
        } else if (currentboard[2] == "X" && currentboard[4]  == "X" && currentboard[6] == "X") {
            console.log("15alsoworks");
        } else if (currentboard[2] == "O" && currentboard[4]  == "O" && currentboard[6] == "O") {
            console.log("16alsoworks");
        } 
       
    }
    

    return {
        checkForWin: checkForWin
    }

})(Players, displayController, gameBoard);

let currentboard = gameBoard.boardArray
displayController.render(currentboard);

