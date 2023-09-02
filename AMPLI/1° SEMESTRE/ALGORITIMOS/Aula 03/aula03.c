#include <stdio.h>
#include <string.h>
#include <locale.h>


int main () {

    char name[4] = "David";
    int idade = 27;
    char filme[22];



    setlocale(LC_ALL, "Portuguese"); //biblioteca para locação de filmes
    printf("Olá, seja bem vindo ao sistema de locação de filmes %s \n", name);
    scanf("%s",filme);
    printf("O Filme escolhido foi %s", filme);

    if(filme == "Matrix"){
        printf("Parabens Filme disponivel");
    }else{
        printf("Filme nao disponivel para locação");
    }





}
