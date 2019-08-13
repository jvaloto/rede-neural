function start(){
    console.log("- START -");

    let matrizA = new Matriz(2, 2);
    let matrizB = new Matriz(2, 2);

    matrizA.print();
    matrizB.print();

    let matrizC = new Matriz(2, 2, true);
    
    matrizC.multiplication(matrizA, matrizB);

    matrizC.print();
}