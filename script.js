const gameBoard = (() => {
    let boardArray = ['X','X','X','0','0','0','0','0','0'];

    render: function render() {
        const boardcontainer = document.querySelector(".boardcontainer");

        boardArray.forEach(cell => {
            let div = boardcontainer.appendChild(document.createElement("div"));
            div.innerText = cell;
        })


        return "a"
    }

    return {
        render: render
    }
})();

const displayController = (() => {
    const buttonplayer1 = document.querySelector(".PlayerX");
    const buttonplayer2 = document.querySelector(".PlayerO");


    return {
        
    }
})();

const Players = (function(name, marker) {
    let player = ["meme", "x"]
    function whichName() {
        alert(player);
    }
    function changeplayer() {
        player = ["luigi", "x"]
    }

    return {
        alertplayer: whichName,
        fixplayer: changeplayer
    }
})();

const game = (function(){

})();

gameBoard.render();