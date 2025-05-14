"use strict";
console.log("Hello");
let age = 20;
if (age > 18) {
    console.log("wohooo!");
    age += 10;
    console.log(age);
}
function render(document) {
    console.log(document);
}
let numbers1 = [1, 3, '5'];
let numbers2 = [1, 3, 6];
let numbers4 = [1, 3, 6];
let numbers5 = [];
let numbers6 = [];
numbers6[0] = '6';
numbers6[0] = 6;
numbers6[1] = 6;
console.log(numbers6);
let user = [1, 'Me'];
user[0].toString();
user[1].charAt(0);
user.push('Astring');
console.log(user);
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
var Size1;
(function (Size1) {
    Size1[Size1["Small"] = 1] = "Small";
    Size1[Size1["Medium"] = 2] = "Medium";
    Size1[Size1["Large"] = 3] = "Large";
})(Size1 || (Size1 = {}));
;
var Size2;
(function (Size2) {
    Size2["Small"] = "s";
    Size2["Medium"] = "m";
    Size2["Large"] = "l";
})(Size2 || (Size2 = {}));
;
let mySize = Size.Medium;
console.log(mySize);
let mySize2 = Size2.Medium;
console.log(mySize2);
function calculateDiscount(price, bankBalance) {
    if ((bankBalance || 1000) < 2000) {
        return price * 0.2;
    }
    return price * 0.1;
}
console.log(calculateDiscount(500, 4000));
console.log(calculateDiscount(500));
let employee = { id: 0 };
let employee2 = {
    id: 2,
    name: 'Me',
    retire: (date) => {
        console.log(date);
    }
};
employee2.retire(new Date);
console.log(employee2.retire(new Date));
let employee3 = {
    id: 3,
    name: 'IamEmployee:)',
    retire: (date) => {
        console.log(date);
    }
};
function kgToG(weight) {
    if (typeof weight === 'number')
        return weight * 1000;
    else
        return parseInt(weight) * 1000;
}
console.log(kgToG(9.3));
console.log(kgToG('86KG'));
let developer = {
    learn: () => { },
    teach: () => { }
};
let quantity = 50;
let quantity3 = 50;
let quantity4 = 100;
function hello(name) {
    if (name)
        console.log('Hello :) ' + name + '!!');
    else
        console.log('Hey There!! :)');
}
hello("Mini");
hello(null);
hello(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
let customer2 = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log(customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday);
//# sourceMappingURL=index.js.map