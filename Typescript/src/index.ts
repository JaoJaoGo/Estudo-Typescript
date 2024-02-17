// string, boolean, number, ...
let x: number = 10;

// x = "teste"
x = 20;

console.log(x);

// inferencia x annotation
const y = 12; // inferencia
const z: string = "Olá"; // annotation

// Tipos básicos
console.log("\n<--- Tipos básicos --->")

let firstName: string = "João";
let age: number = 21;
const isAdmin: boolean = true;

// String != string
console.log("<-- String != string -->")
console.log("firstName:",firstName);
console.log("Tipo de firstName:", typeof firstName);

// Arrays
console.log("\n<--- Arrays --->")

let arrNumbers: number[] = [1, 2, 3];
arrNumbers = [4, 5, 6];

console.log("arrNumbers:", arrNumbers);
console.log("Tamanho de arrNumbers:", arrNumbers.length);
// console.log(arrNumbers.toUpperCase());
// console.log(firstName.toUpperCase());

arrNumbers.push(5);
console.log("Novo push em arrNumbers:", arrNumbers);

// Tuplas
console.log("\n<--- Tuplas --->")

let tuple: [string, number, string[]] = ["João", 28, ["a", "b", "c", "d"]];
tuple[0] = "Maria";
tuple[1] = 30;

console.log("Tupla:", tuple);
console.log("Tamanho da tupla:", tuple.length);
console.log("Index 2 da tupla:", tuple[2]);
console.log("Tamanho do index 2 da tupla:", tuple[2].length);

// Objetos
console.log("\n<--- Objetos --->")

const user: {name: string, age: number} = {
    name: "João",
    age: 21
};

console.log("user:", user);
console.log("Nome do user:", user.name, "\nIdade do user:", user.age);

user.name = "Ana";
user.age = 22;
// user.job = Programador"

console.log("user modificado:", user)
console.log("Idade do user modificado:", user.age, "\nNome do user modificado:", user.name)

// any
console.log("\n<--- Any --->")

let notSure: any = 4;
console.log("Valor de notSure:", notSure);
console.log("Tipo de notSure:", typeof notSure);

notSure = "Talvez uma string...";
console.log("Novo valor de notSure:", notSure);
console.log("Novo tipo de notSure:", typeof notSure);

notSure = [];
console.log("Novo valor de notSure:", notSure);
console.log("Novo tipo de notSure:", typeof notSure);

notSure = {}
console.log("Novo valor de notSure:", notSure);
console.log("Novo tipo de notSure:", typeof notSure);

// Union type
console.log("\n<-- Union Type -->");

let unionType: number | string = 'Olá';

console.log("Valor de unionType:", unionType);
console.log("UnionType é um número? ", typeof unionType === "number");
console.log("UnionType é uma string? ", typeof unionType === "string");

unionType = 10;
// unionType = [];
// unionType = false;
console.log("Novo valor de unionType:", unionType)
console.log("Agora o valor da unionType é um número e eu posso acessar esse atributo com segurança!");

// Type alias
console.log("\n<--- Type Alias --->");

type Alias = number | string | boolean; // Ou seja, pode ser tanto um número quanto uma string ou um booleano

let minValue: Alias = 10;
console.log("Valor de minValue:", minValue);

minValue = "Dez";
console.log("Novo valor de minValue:", minValue);

minValue = true;
console.log("Novo valor de minValue:", minValue);

console.log("minValue é um número? ", typeof minValue === "number");
console.log("minValue é uma string? ", typeof minValue === "string");
console.log("minValue é um Booleano? ", typeof minValue === "boolean");

// Enumeração
console.log('\n<--- Enumeração --->');

enum Color {
    Red = "Vermelho",
    Green = "Verde",
    Blue = "Azul"
}

let myColor: Color = Color.Green;
console.log('Cor escolhida:', myColor);

myColor = Color.Blue;
console.log('Nova cor escolhida:', myColor);

const camisa = {
    name: "Camisa Polo",
    size: "GG",
    cor: Color.Blue
}

console.log("Camisa com sua cor:", camisa);

// Literal types
console.log('\n<--- Literal types --->');

let teste: "autenticado" | null;

// teste = "outroValor";
teste = "autenticado";
console.log("Valor de teste:", teste);

teste = null;
console.log("Novo valor de teste:", teste);

// Funções
console.log("\n<--- Funções --->");

function sum(a: number, b: number): number { // o terceiro number é o tipo que a função irá dar return, porém, neste caso,
                                             // caso retira-lo, o tipo retornado ainda será number...
    return a + b;
}

const resultSum = sum(5, 10);

console.log("5 + 10 =", resultSum);
console.log("Tipo de 15:", typeof resultSum);

// Função sem retorno
console.log( "\n<--- Função sem retorno --->\n");

function printName(name: string): void{
    console.log(`Olá ${name}, eu sou um desenvolvedor!`);
}

printName("José");

// Funções com parâmetros opcionais (?) e restante de argumentos(...)
console.log('\n<--- Argumentos opcionais --->');

function greet(name: string, message?: string) {
    console.log(`Olá, ${name}! ${message || "Como você está?"}`);
}

greet("Pedro");
greet("Alex", "Como vai?");

function total(...args: number[]) {
    let sum = 0;
    for (let num of args) {
        sum += num;
    }
    return sum;
}

console.log(`Soma dos números ${[1, 2, 3]}:`, total(1, 2, 3)); // Outputs 6

// Interfaces
console.log('\n<--- Interfaces --->');

interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams): number {
    return nums.n1 + nums.n2;
}

console.log("10 + 15 =", sumNumbers({ n1: 10, n2: 15 }))

function multiplyNumbers(nums: MathFunctionParams):number {
    return nums.n1 * nums.n2;
}

const someNumbers:MathFunctionParams = {
    n1: 10,
    n2: 6
}

console.log("10 * 6 =", multiplyNumbers(someNumbers))

// narrowing
// checagem de tipos
console.log('\n<--- Narrowing (checagem de tipos) --->')

function doSomething(info: number | boolean) {
    if(typeof info == "number") {
        console.log(`O número é ${info}`)
        return;
    }

    console.log("Não foi passado um número!")
}

doSomething(123);
doSomething(true);

// generics
console.log('\n<--- Generics --->');

function showArraysItens<T>(arr: T[]) {
    arr.forEach(item => console.log("Item:", item));
}

const arrayNumbers = [1, 20, 35, 4];
const arrayBoolean = [false, true, true, false, false];
const arrayStrings = ["João", "Víctor", "Guedes", "Carrijo"];

showArraysItens(arrayNumbers);
showArraysItens(arrayBoolean);
showArraysItens(arrayStrings);

// Classes
console.log('\n<--- Classes --->');

class User {
    protected name
    protected role
    protected isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    getUser(): void {
        console.log("Nome:", this.name);
        console.log("Função:", this.role);
        console.log("Aprovado?", this.isApproved ? 'Sim' : 'Não');
    }

    setUser(name?: string, role?: string, isApproved? :boolean): void {
        if (name) this.name = name;
        if (role) this.role = role;
        if (typeof isApproved !== 'undefined') this.isApproved = isApproved;
    }
}

const Joao = new User("João Vitor", "Desenvolvedor", true);
Joao.getUser();

console.log('Alterando o nome...');
Joao.setUser("João Víctor");
Joao.getUser();

// interfaces em classes
console.log('\n<--- Interfaces em classes --->');

interface IsVehicle {
    brand: string,
    showBrand(): void
}

class Car implements IsVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`O carro é da marca: ${this.brand}`);
    }
}

const fusca = new Car("Volkswagen", 4);
fusca.showBrand();

// Herança
console.log('\n\n<--- Herança --->\n');

class superCar extends Car {
    engine;

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new superCar("Audi", 4, 2.0);
a4.showBrand();

// Decorators
console.log('\n<--- Decorators --->');

function BaseParamters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}

@BaseParamters()
class Person {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("Sam");

console.log("Sam:", sam);

// Classe abstrata
console.log('\n<--- Classe abstrata --->')

abstract class Animal {
    protected name;
    
    constructor(name: string) { this.name = name; }
    
    abstract fazerSom(): void;
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("Woof!");
    }
}

const meuCachorro = new Cachorro("Agostinho");

console.log("meuCachorro:", meuCachorro)
meuCachorro.fazerSom(); // Outputs "Woof!"

