var Immutable = require('seamless-immutable');
var assert = require('chai').assert;

var data = require('./data.js');


describe('a change to prop of deeply nested obj', function () {

    var currentState;

    beforeEach(function(){
        currentState = Immutable(data);
    });

    it('we change a deeply nested property', function () {
        var nextState = currentState.setIn(['games', 0, 'tiles', 1, 'isRevealed'], true);
        assert(currentState !== nextState, 'data structure is not equal');
        assert(nextState.games[0].tiles !== currentState.games[0].tiles,'array containing changed item is NOT equal');
        assert(nextState.games[0].tiles[0] === currentState.games[0].tiles[0], 'unchanged array members are equal');
    });

    // perhaps a nice to have
    it('we update deeply nested propery with same value and nextState evaluates EQUAL', function () {
        var nextState = currentState.setIn(['games', 0, 'tiles', 1, 'isRevealed'], false);
        assert(currentState === nextState);
    });

    it('we update deeply nested propery with same value and nextState evaluates EQUAL', function () {
        var nextState = currentState.setIn(['games', 0, 'tiles', 1, 'isRevealed'], false);
        assert(currentState === nextState);
    });

    it('sorts a deeply nested array', function(){

        var func = function(arg){
            return arg.concat(['q']);
        };
        var nextState = currentState.updateIn(['games',0,'tiles', 0, 'tries'],func);
        assert(nextState !== currentState);
        assert(nextState.games[0].tiles[0].tries[3] === 'q', 'update worked');
        assert(nextState.games[0].tiles[0].tries !== currentState.games[0].tiles[0].tries, 'array is not equal');
        assert(nextState.games[0].tiles[0].tries[0] === currentState.games[0].tiles[0].tries[0], 'members are equal');

    });


});
