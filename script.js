const gameBoard = (() => {
    let boardArray = ['0','X','X','0','0','0','0','0','0'];

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
            div.innerText = cell;
        })

        function playerdata(name, marker) {
            Players.playerset(name, marker);
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

})();

let currentboard = gameBoard.boardArray
displayController.render(currentboard);