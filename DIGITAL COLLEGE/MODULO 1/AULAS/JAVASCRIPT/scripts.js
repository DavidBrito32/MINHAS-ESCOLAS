var numero; //forma de declaração do tipo da variavel -> usa os : para declarar tipo da variavel 
var verdadeiro; //declaração explicita do tipo da variavel
function boasVindas(nome) {
    if (nome === void 0) { nome = "Alunos"; }
    document.write("Ola ".concat(nome));
}
function soma(numero, numero2) {
    return numero + numero2;
}
document.write("O resultado da opecação é:" + soma(24, 25));
function horaExata() {
    var hora = new Date();
    return "".concat(hora.getHours(), ": ").concat(hora.getMinutes());
}
document.write("a Hora é: " + horaExata());
