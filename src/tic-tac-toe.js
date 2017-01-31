class TicTacToe {
    constructor() {
        this.step = 0;
        this.mat = [
			['', '', ''],
			['', '', ''],
			['', '', '']
			]; 
		this.Current = 'x';
    }

    getCurrentPlayerSymbol() {
        if (this.step % 2 == 0) {
            return this.Current = "x";
        }
        else return this.Current = "o";
    }

    nextTurn(rowIndex, columnIndex) {
		if (this.mat[rowIndex][columnIndex] != '') {
			return;
		}
		
		this.getCurrentPlayerSymbol();
		
		
		this.mat[rowIndex][columnIndex] = this.Current;
		this.step++;
		
		if (this.isFinished()) {
			return;
		};
		
    }

    isFinished() {
		if (this.getWinner() != null || this.isDraw()) return true;
		return false;
    }

    getWinner() {
		
		for (var i = 0; i < 3; i++) {
			if (this.mat[i][0] == this.mat[i][1] && this.mat[i][1] == this.mat[i][2] && this.mat[i][2] !== "") return this.mat[i][0];
			if (this.mat[0][i] == this.mat[1][i] && this.mat[1][i] == this.mat[2][i] && this.mat[2][i] !== "") return this.mat[0][i];
		}
		
		if (this.mat[0][0] == this.mat[1][1] && this.mat[1][1] == this.mat[2][2] && this.mat[2][2] !== "") return this.mat[0][0];
		if (this.mat[0][2] == this.mat[1][1] && this.mat[1][1] == this.mat[2][0] && this.mat[2][0] !== "") return this.mat[0][2];
		
		return null;
		
    }

    noMoreTurns() {
		
		var bool = false;
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				if (this.mat[i][j] == '') bool = true;
			}
		} 
		return bool ? false : true;
    }

    isDraw() {
		if (this.noMoreTurns() && this.getWinner() == null) return true;
		return false;
    }

    getFieldValue(rowIndex, columnIndex) {
		if (this.mat[rowIndex][columnIndex] == '') return null;
		return this.Current = this.mat[rowIndex][columnIndex];
    }
}

module.exports = TicTacToe;
