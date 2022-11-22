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

        function playerdata(name, marker) {
            Players.playerset(name, marker);
        }

        function populateArrayAndDisplay(cellIndex) {
            let properdiv = boardcontainer.children[cellIndex];
           container[cellIndex] = "yo mama";
           properdiv.innerText = `${container[cellIndex]}`;
        }
        
        buttonplayer1.addEventListener("click", function() {playerdata("Player 1", "X")});
        buttonplayer2.addEventListener("click", function() {playerdata("Player 2", "O")});

        return "a"
    }

    return {
        render: render
    }
})();

const Players = (function(name, marker) {

    function setplayerdata(name, marker) {
        return name, marker;
    }
    
    return {
        playerset: setplayerdata,
        // playerget: currentplayer.wholePlayer(name)
    }
})();

const game = (function(){
    

})(Players, displayController, gameBoard);

let currentboard = gameBoard.boardArray
displayController.render(currentboard);
