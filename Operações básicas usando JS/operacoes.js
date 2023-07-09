let x = 10;
let y = 2;

let soma = x + y;
console.log(`O resultado da soma é ${soma}`);

let sub = x - y;
console.log(`O resultado da subtração é ${sub}`);

let mult = x * y;
console.log(`O resultado da multiplicação é ${mult}`);

let div = x / y;
console.log(`O resultado da divisão é ${div}`);

//Elevar ao quadrado : x ** 2
//Elevar ao cubo: x ** 3
let exp = x ** y;
console.log(`O resultado da exponenciação é ${exp}`);

//Atualizar o valor das variáveis
x = x + 1;
y = y + 2;
x++; //Mesmo que escrever x = x + 1
y += 1; //Mesmo que escrever y = y + 1
console.log(x, y);

x = x - 2;
y = y - 3;
x--; //Mesmo que escrever x = x - 1
y -= 1; //Mesmo que escrever y = y - 1
console.log(x, y);
