class Matriz{

    constructor(pLines, pColumns, pIsNew){
        this.data = [];
        this.lines = pLines;
        this.columns = pColumns;

        for(let k = 0; k < this.lines; k ++){
            let arrayLine = new Array();

            for(let j = 0; j < this.columns; j ++){
                if(pIsNew){
                    arrayLine.push(0);
                }else{
                    arrayLine.push(Math.round(Math.random() * 10));
                }
            }

            this.data.push(arrayLine);
        }
    }

    print(){
        console.table(this.data);
    }

    multiplication(pMatrizA, pMatrizB){
        for(let j = 0; j < this.lines; j ++){
            for(let k = 0; k < this.columns; k ++){
                for(let i = 0; i < this.columns; i ++){
                    this.data[k][j] += pMatrizA.data[k][j] * pMatrizB[k][i];
                }
            }
        }

        return this;
    } 

}