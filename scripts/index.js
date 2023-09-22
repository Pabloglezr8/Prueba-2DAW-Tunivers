const generateRandomColor = () => {
    const color = '#'+ Math.floor(Math.random() * 16777215).toString(16);
    console.log("color hexadecimal genereado: " + color);
    return color;
}

const changeBackgroundColor= () => {
    const newColor = generateRandomColor();
    document.body.style.backgroundColor= newColor;
}

// Agregas un evento al boton changeColorBtn
const changeColorBtn = document.getElementById("changeColorBtn");
