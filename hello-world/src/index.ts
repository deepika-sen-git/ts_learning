console.log(
    "Hello"
);

//Debugging TS Apps:
let age: number = 20;
if (age > 18) {
    console.log("wohooo!");
    age += 10;
    console.log(age);
}

//Built-in Types:
function render(document: any) {
    console.log(document);
}

//Arrays:
let numbers1 = [1, 3, '5'];

let numbers2: number[] = [1, 3, 6];
// let numbers3: number[] = [1, 3, '6']; // will cause error
let numbers4: number[] = [1, 3, 6];

// numbers4[3] = '4'; //will cause error

let numbers5: number[] = [];
// numbers5[0] = '3'; //will cause error

let numbers6 = [];
numbers6[0] = '6';
numbers6[0] = 6;
numbers6[1] = 6;

console.log(numbers6);

// Tuples:
let user: [number, string] = [1, 'Me'];
// let user2: [string, string] = [1, 'Me'];  //will cause error
user[0].toString(); //on first element in user: number properties are showing
user[1].charAt(0); //on second element in user: string properties are showing

user.push('Astring');
console.log(user);


//Enums:
//PascalCase
enum Size { Small, Medium, Large }; //here by default Small=0, Medium=1, Large=2
// const enum Size { Small, Medium, Large }; //if we define enum as const then compiler will create more optimized JS code
enum Size1 { Small = 1, Medium, Large }; //here if Small=1, then Medium=2, Large=3
enum Size2 { Small = 's', Medium = 'm', Large = 'l' };

let mySize: Size = Size.Medium;
console.log(mySize);
let mySize2: Size2 = Size2.Medium;
console.log(mySize2);


//Functions:
function calculateDiscount(price: number, bankBalance?: number): number {
    // or we can do: function calculateDiscount(price: number, bankBalance=1_000): number {
    // let x; // will cause warning as local is never used
    if ((bankBalance || 1_000) < 2_000) {
        return price * 0.2;
    }
    return price * 0.1;
}
console.log(calculateDiscount(500, 4000));
console.log(calculateDiscount(500));


//Objects:

let employee = { id: 0 };
// employee.name = 'Me'; //will cause error

let employee2: {
    readonly id: number,
    name: string,
    // name?: string //for keeping name optional
    retire: (date: Date) => void
} = {
    id: 2,
    name: 'Me',
    retire: (date: Date) => {
        console.log(date);
    }
};
// employee2.id = 1; //will cause error
employee2.retire(new Date);
console.log(employee2.retire(new Date));

//type alias:

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee3: Employee = {
    id: 3,
    name: 'IamEmployee:)',
    retire: (date: Date) => {
        console.log(date);

    }
}

//Union:
function kgToG(weight: number | string): number {
    //weight: number | string) - UNION type
    //Narrowing
    if (typeof weight === 'number')
        return weight * 1000;
    else
        return parseInt(weight) * 1000;
}

console.log(kgToG(9.3));
console.log(kgToG('86KG'));

//Intersection Types:
type Student = {
    learn: () => void;
}

type Teacher = {
    teach: () => void;
}

type Engineer = Student & Teacher;

let developer: Engineer = {
    learn: () => { },
    teach: () => { }
}

//Literal Types:
let quantity: 50 = 50;
// let quantity2: 50 = 51; //will cause error
type Quantity = 50 | 100;
let quantity3: Quantity = 50;
let quantity4: Quantity = 100;
// let quantity5: Quantity = 200; //will cause error

type Metric = 'cm' | 'mm';

//Nullable Types:
function hello(name: string | null | undefined) {
    if (name)
        console.log('Hello :) ' + name + '!!');
    else
        console.log('Hey There!! :)');
}

hello("Mini");
hello(null);
hello(undefined);

//Optional chaining:
type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0);
let customer2 = getCustomer(1);

console.log(customer?.birthday); // ?. optional property access operator
console.log(customer2?.birthday);

