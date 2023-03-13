function passwordValidator(password) {
    const isLength = (pass) => pass.length >= 6 &&
        pass.length <= 10;
    const letterAndDigit = (pass) => /^[A-Za-z0-9]+$/g.test(pass);
    const twiDigit = (pass) => [...pass.matchAll(/\d/g)].length >= 2;

    let passIsValid = true;

    if (!isLength(password)) {
        console.log('Password must be between 6 and 10 characters');
        passIsValid = false;
    }
    if (!letterAndDigit(password)) {
        console.log('Password must consist only of letters and digits');
        passIsValid = false;
    }
    if (!twiDigit(password)) {
        console.log('Password must have at least 2 digits');
        passIsValid = false;
    }

    if (passIsValid) {
        console.log('Password is valid');
    }
}

passwordValidator('logIn');

passwordValidator('MyPass123');

passwordValidator('Pa$s$s');