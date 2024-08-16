function generatePassword(length){
    if (length < 8){
        console.log("Error, la contraseña debe ser de como minimo 8 caracteres");
        return;
    }
    
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789¡!@#$%^&*()-_+=<>¿?/{}|";
    let password = '';

    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    console.log(password);
}

generatePassword(6);
generatePassword(8);