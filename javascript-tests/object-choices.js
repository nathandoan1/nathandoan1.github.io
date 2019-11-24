windows.onload = () => {

    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const simpleObjectAction = document.getElementById('simpleObjectAction')
    

const simpleObject = {
    firstName: 'James',
    lastName: 'Watson',
    sayName: function() {
        const fullName = this.firstName + "" + this.lastName;
        console.log(fullName);
        simpleObjectDisplay.textContent = fullName;
    }
};
simpleObjectAction.onclick = function() {
    simpleObject.sayName();
}

simpleObject.dynamicMethod = () => {
    console.log('Dynamic Method');
}

function FunctionObject() {
    FunctionObject.prototype.sayName = function() {
        console.log('Function Object');
    }
}

class CustomClass {
    sayName() {
        console.log("CustomClass");
    }
    
}
simpleObject.sayName();
simpleObject.dynamicMethod();

const functionObject = new FunctionObject();
functionObject.sayName();

const customClass = new CustomClass();
customClass.sayName();

function Foo() {
    this.bar = function() {
        return 'bar';
    }

    Foo.prototype.qux = function() {
        return 'qux';
    }
}
const foo = new Foo();
console.log(foo.bar()); // prints bar
console.log(foo.qux()); // prints qux 
}