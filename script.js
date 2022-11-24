const gameBoard = (() => {
    let boardArray = ['','','','','','','','',''];

    // currentMarker 

    return {
        boardArray: boardArray
    }
})();

const displayController = ((container) => {
    const buttonplayer1 = document.querySelector(".PlayerX");
    const buttonplayer2 = document.querySelector(".PlayerO");

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
            game.getmarker;
            disableotherbutton(buttonnumber);
        }

        function disableotherbutton(buttonnumber) {
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
            let grabplayerdata = Players.currentPlayerData
           container[cellIndex] = `${grabplayerdata[1]}`;
           properdiv.innerText = `${container[cellIndex]}`;
        }
        
        buttonplayer1.addEventListener("click", function() {playerdata("Player 1", "X", this)}, {once: true});
        buttonplayer2.addEventListener("click", function() {playerdata("Player 2", "O", this)}, {once: true});

    }

    return {
        render: render
    }
})();

const Players = (function(name, marker) {
    const currentplayersign = document.querySelector(".currentplayer");

    let currentPlayerData = undefined;

    function setplayerdata(name, marker) {
        currentplayersign.innerText += " " + `${name}`;
        currentPlayerData = [name, marker];
    }

    return {
        setplayerdata: setplayerdata,
        get currentPlayerData() {
            return currentPlayerData;
        },
        set currentPlayerData(newData) {
            currentPlayerData = newData;
        }
    }
})();

const game = (function(){
    

    // const chosenmarker = Players.setplayerdata;

    return {
        // getmarker: chosenmarker,
        // checkForWin: winsearch
    }

})(Players, displayController, gameBoard);

let currentboard = gameBoard.boardArray
displayController.render(currentboard);

