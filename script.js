const gameBoard = (() => {
    let boardArray = ['X','X','X','0','0','0','0','0','0'];

    render: function render() {
        let boardcontainer = document.querySelector(".boardcontainer");

        boardArray.forEach(cell => {
            let div = boardcontainer.appendChild(document.createElement("div"));
            div.innerText = cell;
        })
        return "a"
    }

    return {
        clicktile: render
    }
})();

const displayController = (() => {

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


