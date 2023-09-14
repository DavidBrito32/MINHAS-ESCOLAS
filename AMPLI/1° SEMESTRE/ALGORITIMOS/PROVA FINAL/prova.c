
#include <stdio.h>

int fat (int n){
int res = 1;
while (n > 1) {
res = res * n;
n--;
}
return res;
}

int main ( ){

int n, res;
printf("Entre com o valor de n: ");
scanf("%d", &n);
res = fat(n+1) / (n+1);
printf("Fatorial de %d = %d\n", n, res );
return 0;
}
