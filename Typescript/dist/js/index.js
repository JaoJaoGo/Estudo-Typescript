"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 20;
console.log(x);
const y = 12;
const z = "Olá";
console.log("\n<--- Tipos básicos --->");
let firstName = "João";
let age = 21;
const isAdmin = true;
console.log("<-- String != string -->");
console.log("firstName:", firstName);
console.log("Tipo de firstName:", typeof firstName);
console.log("\n<--- Arrays --->");
let arrNumbers = [1, 2, 3];
arrNumbers = [4, 5, 6];
console.log("arrNumbers:", arrNumbers);
console.log("Tamanho de arrNumbers:", arrNumbers.length);
arrNumbers.push(5);
console.log("Novo push em arrNumbers:", arrNumbers);
console.log("\n<--- Tuplas --->");
let tuple = ["João", 28, ["a", "b", "c", "d"]];
tuple[0] = "Maria";
tuple[1] = 30;
console.log("Tupla:", tuple);
console.log("Tamanho da tupla:", tuple.length);
console.log("Index 2 da tupla:", tuple[2]);
console.log("Tamanho do index 2 da tupla:", tuple[2].length);
console.log("\n<--- Objetos --->");
const user = {
    name: "João",
    age: 21
};
console.log("user:", user);
console.log("Nome do user:", user.name, "\nIdade do user:", user.age);
user.name = "Ana";
user.age = 22;
console.log("user modificado:", user);
console.log("Idade do user modificado:", user.age, "\nNome do user modificado:", user.name);
console.log("\n<--- Any --->");
let notSure = 4;
console.log("Valor de notSure:", notSure);
console.log("Tipo de notSure:", typeof notSure);
notSure = "Talvez uma string...";
console.log("Novo valor de notSure:", notSure);
console.log("Novo tipo de notSure:", typeof notSure);
notSure = [];
console.log("Novo valor de notSure:", notSure);
console.log("Novo tipo de notSure:", typeof notSure);
notSure = {};
console.log("Novo valor de notSure:", notSure);
console.log("Novo tipo de notSure:", typeof notSure);
console.log("\n<-- Union Type -->");
let unionType = 'Olá';
console.log("Valor de unionType:", unionType);
console.log("UnionType é um número? ", typeof unionType === "number");
console.log("UnionType é uma string? ", typeof unionType === "string");
unionType = 10;
console.log("Novo valor de unionType:", unionType);
console.log("Agora o valor da unionType é um número e eu posso acessar esse atributo com segurança!");
console.log("\n<--- Type Alias --->");
let minValue = 10;
console.log("Valor de minValue:", minValue);
minValue = "Dez";
console.log("Novo valor de minValue:", minValue);
minValue = true;
console.log("Novo valor de minValue:", minValue);
console.log("minValue é um número? ", typeof minValue === "number");
console.log("minValue é uma string? ", typeof minValue === "string");
console.log("minValue é um Booleano? ", typeof minValue === "boolean");
console.log('\n<--- Enumeração --->');
var Color;
(function (Color) {
    Color["Red"] = "Vermelho";
    Color["Green"] = "Verde";
    Color["Blue"] = "Azul";
})(Color || (Color = {}));
let myColor = Color.Green;
console.log('Cor escolhida:', myColor);
myColor = Color.Blue;
console.log('Nova cor escolhida:', myColor);
const camisa = {
    name: "Camisa Polo",
    size: "GG",
    cor: Color.Blue
};
console.log("Camisa com sua cor:", camisa);
console.log('\n<--- Literal types --->');
let teste;
teste = "autenticado";
console.log("Valor de teste:", teste);
teste = null;
console.log("Novo valor de teste:", teste);
console.log("\n<--- Funções --->");
function sum(a, b) {
    return a + b;
}
const resultSum = sum(5, 10);
console.log("5 + 10 =", resultSum);
console.log("Tipo de 15:", typeof resultSum);
console.log("\n<--- Função sem retorno --->\n");
function printName(name) {
    console.log(`Olá ${name}, eu sou um desenvolvedor!`);
}
printName("José");
console.log('\n<--- Argumentos opcionais --->');
function greet(name, message) {
    console.log(`Olá, ${name}! ${message || "Como você está?"}`);
}
greet("Pedro");
greet("Alex", "Como vai?");
function total(...args) {
    let sum = 0;
    for (let num of args) {
        sum += num;
    }
    return sum;
}
console.log(`Soma dos números ${[1, 2, 3]}:`, total(1, 2, 3));
console.log('\n<--- Interfaces --->');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log("10 + 15 =", sumNumbers({ n1: 10, n2: 15 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 10,
    n2: 6
};
console.log("10 * 6 =", multiplyNumbers(someNumbers));
console.log('\n<--- Narrowing (checagem de tipos) --->');
function doSomething(info) {
    if (typeof info == "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número!");
}
doSomething(123);
doSomething(true);
console.log('\n<--- Generics --->');
function showArraysItens(arr) {
    arr.forEach(item => console.log("Item:", item));
}
const arrayNumbers = [1, 20, 35, 4];
const arrayBoolean = [false, true, true, false, false];
const arrayStrings = ["João", "Víctor", "Guedes", "Carrijo"];
showArraysItens(arrayNumbers);
showArraysItens(arrayBoolean);
showArraysItens(arrayStrings);
console.log('\n<--- Classes --->');
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    getUser() {
        console.log("Nome:", this.name);
        console.log("Função:", this.role);
        console.log("Aprovado?", this.isApproved ? 'Sim' : 'Não');
    }
    setUser(name, role, isApproved) {
        if (name)
            this.name = name;
        if (role)
            this.role = role;
        if (typeof isApproved !== 'undefined')
            this.isApproved = isApproved;
    }
}
const Joao = new User("João Vitor", "Desenvolvedor", true);
Joao.getUser();
console.log('Alterando o nome...');
Joao.setUser("João Víctor");
Joao.getUser();
console.log('\n<--- Interfaces em classes --->');
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`O carro é da marca: ${this.brand}`);
    }
}
const fusca = new Car("Volkswagen", 4);
fusca.showBrand();
console.log('\n\n<--- Herança --->\n');
class superCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new superCar("Audi", 4, 2.0);
a4.showBrand();
console.log('\n<--- Decorators --->');
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
const sam = new Person("Sam");
console.log("Sam:", sam);
console.log('\n<--- Classe abstrata --->');
class Animal {
    name;
    constructor(name) { this.name = name; }
}
class Cachorro extends Animal {
    fazerSom() {
        console.log("Woof!");
    }
}
const meuCachorro = new Cachorro("Agostinho");
console.log("meuCachorro:", meuCachorro);
meuCachorro.fazerSom();
