const gameBoard = (() => {
    let boardArray = ['O','X','X','O','O','O','O','O','O'];

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

        container.forEach(cell => {
            let div = boardcontainer.appendChild(document.createElement("div"));
            div.classList.add("boardcell");
            div.innerText = cell;
            let cellIndex = container.indexOf(cell);
            div.addEventListener("click", function() {populateDisplay(cellIndex)} );
        })

        function playerdata(name, marker) {
            Players.playerset(name, marker);
        }

        function populateDisplay(cellIndex) {
           console.log(cellIndex);
        }
        
        buttonplayer1.addEventListener("click", playerdata("Player1", "X"));
        buttonplayer2.addEventListener("click", playerdata("Player2", "O"));

        return "a"
    }

    return {
        render: render
    }
})();

const Players = (function(name, marker) {
    
    const currentplayer = {
        currentName: name,
        currentMarker: marker,

        get playername() {
            return this.currentName;
        },   

        set playername(newName) {
            this.currentName = newName;
        }
    }

    function setplayerdata(name, marker) {
        return name, marker;
    }
    

    return {
        // playerget: player.playername,
        playerset: setplayerdata
    }
})();

const game = (function(){

})(Players, displayController, gameBoard);

let currentboard = gameBoard.boardArray
displayController.render(currentboard);