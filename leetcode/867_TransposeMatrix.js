/**
 * @param {number[][]} M
 * @return {number[][]}
 */
 var transpose = function(M) {
	let rLen = M.length,
    cLen = M[0].length;
	let ret = new Array(cLen).fill(0).map(_ => new Array(rLen).fill(0));
	for (let i = 0; i < rLen; i++) {
		for (let j = 0; j < cLen; j++) {
			ret[j][i] = M[i][j]			
		}
	}
	return ret 
};


console.log(transpose([[1,2,3],[4,5,6]]))