let saldo = 0;
let codigoSeguridad;

function operacion(simbolo) {
    let valor = parseFloat(document.getElementById("idOperacion").value);
    if (isNaN(valor) || valor <= 0) {
        alert("Ingrese un valor válido mayor que cero.");
        return;
    }

    if (simbolo === '-' && (codigoSeguridad === undefined || !validarCodigo())) {
        alert("Ingrese el código de seguridad válido para realizar el retiro.");
        return;
    }

    if (simbolo === '+') {
        saldo += valor;
        alert("Depósito Exitoso");
    } else if (simbolo === '-') {
        if (valor > saldo) {
            alert("Saldo insuficiente");
        } else {
            saldo -= valor;
            alert("Retiro Exitoso");
        }
    }
}

function validarCodigo() {
    let codigoIngresado = document.getElementById("idCodigo").value;
    return codigoSeguridad.toString() === codigoIngresado;
}

function mostrarOperacion(tipo, simbolo) {
    let inputElement = document.createElement("input");
    inputElement.type = "number";
    inputElement.placeholder = `Ingrese el valor a ${tipo.toLowerCase()}`;
    inputElement.id = "idOperacion";

    let buttonElement = document.createElement("button");
    buttonElement.textContent = tipo;
    buttonElement.onclick = function () {
        operacion(simbolo);
        mostrarSaldo();
    };

    let inputContainer = document.getElementById("mostrarServicio");
    inputContainer.innerHTML = ""; // Limpiar contenido previo antes de agregar nuevos elementos
    inputContainer.appendChild(inputElement);

    if (simbolo === '-') {
        let codigoElement = document.createElement("input");
        codigoElement.type = "number";
        codigoElement.placeholder = `Ingrese el código de seguridad`;
        codigoElement.id = "idCodigo";
        inputContainer.appendChild(codigoElement);
    }

    inputContainer.appendChild(buttonElement);
}

function mostrarRetiro() {
    mostrarOperacion("Retirar", '-');
    codigoSeguridad = generarCodigo();
}

function mostrarDeposito() {
    mostrarOperacion("Depositar", '+');
    codigoSeguridad = undefined;
}

function mostrarSaldo() {
    let mostrarServicio = document.getElementById("mostrarServicio");
    mostrarServicio.innerHTML = `<h1>Su saldo es: $${saldo}</h1>`;
}

function generarCodigo() {
    let codigo = Math.floor(1000 + Math.random() * 9000);
    alert("Su código es: " + codigo);
    //window.location.href = `https://wa.me/573202594521?text=Codigo de verificación:%20${codigo}.`;
    return codigo;
}

function salir(){
    alert("Gracias por utilizar nuestros servicios.");
}
