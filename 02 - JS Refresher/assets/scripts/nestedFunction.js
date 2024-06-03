function init() {
    function nestedGreet() {
        console.log('Hola amigo!');
    }

    nestedGreet();
}

init();

const numberArray = [1, 2, 3, 4, 5];
numberArray.push(6); //Works even though Const as the value in the address is being changed and no new array address is being assigned

console.log(numberArray);