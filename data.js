module.exports = {
    games: [{
        "cols": 3,
        "rows": 3,
        "tiles": [{"isRevealed": false, "id": 0, tries: ['a','d','h']}, {"isMine": true, "isRevealed": false, "id": 1, tries: ['r','p','h']}, {
            "isRevealed": false,
            "id": 2
        }, {"isMine": true, "isRevealed": false, "id": 3}, {"isRevealed": false, "id": 4}, {
            "isRevealed": false,
            "id": 5
        }, {"isRevealed": false, "id": 6}, {"isRevealed": false, "id": 7}, {"isRevealed": false, "id": 8, tries: ['x','n','h'] }]
    },
        {
            "cols": 3,
            "rows": 3,
            "tiles": [{"isRevealed": true, "id": 0, "threatCount": 2}, {
                "isMine": true,
                "isRevealed": false,
                "id": 1
            }, {"isRevealed": false, "id": 2, tries: ['t','p','d']}, {"isMine": true, "isRevealed": false, "id": 3}, {
                "isRevealed": false,
                "id": 4
            }, {"isRevealed": false, "id": 5}, {"isRevealed": false, "id": 6, tries: ['n','t','f']}, {
                "isRevealed": false,
                "id": 7
            }, {"isRevealed": false, "id": 8}]
        }],
    playerName:"John Doe"
}