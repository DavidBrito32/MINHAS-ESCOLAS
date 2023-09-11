#include <stdio.h>

void main(){

  float c, f;

  printf("Escreva a temperatura em Graus Celsius");
  scanf("%f", &c);
  f = ((9 * c) / 5) + 32;

  printf(" %2.f", f);

}
