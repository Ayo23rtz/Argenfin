var flujoDeCaja = [{
        periodo: "Enero",
        ingresos: 1500,
        egresos: 1500
    },
    {
        periodo: "Febrero",
        ingresos: 2500,
        egresos: 2500
    },
    {
        periodo: "Marzo",
        ingresos: 84683,
        egresos: 1155
    },
    {
        periodo: "Abril",
        ingresos: 135353,
        egresos: 1533
    },
    {
        periodo: "Mayo",
        ingresos: 1535,
        egresos: 5434
    },
    {
        periodo: "Junio",
        ingresos: 4343354,
        egresos: 5434534
    },
    {
        periodo: "Julio",
        ingresos: 435453,
        egresos: 4543
    },
    {
        periodo: "Agosto",
        ingresos: 78351,
        egresos: 7816
    },
    {
        periodo: "Septiembre",
        ingresos: 1878,
        egresos: 95634
    },
    {
        periodo: "Octubre",
        ingresos: 48483,
        egresos: 9433
    },
    {
        periodo: "Noviembre",
        ingresos: 35483,
        egresos: 53133
    },
    {
        periodo: "Diciembre",
        ingresos: 3843,
        egresos: 348133
    }
];

//suma de los ingresos--------------------------------
let acumuladorIngresos = 0
for (let i = 0; i < flujoDeCaja.length; i++) {
    acumuladorIngresos += flujoDeCaja[i].ingresos;
    console.log(acumuladorIngresos);
}

//suma de los egresos----------------------------------
let acumuladorEgresos = 0
for (let i = 0; i < flujoDeCaja.length; i++) {
    acumuladorEgresos += flujoDeCaja[i].egresos;
    console.log(acumuladorEgresos);
}

//diferencia-------------------------------------------
let mensaje = document.querySelector("p")

if (acumuladorEgresos > acumuladorIngresos) {
    mensaje.innerHTML = 'El flujo anual genera perdidas'
} else if (acumuladorEgresos == acumuladorIngresos) {
    mensaje.innerHTML = 'Saliste derecho!'
} else {
    mensaje.innerHTML = 'Sigamos creciendo!'
}


let cajaFinal = acumuladorIngresos - acumuladorEgresos
console.log(cajaFinal)

let cabecera = `<th>PERIODO</th><th>INGRESOS</th><th>EGRESOS</th> <tfoot><td>DIF. ANUAL = </td><td></td><td>${cajaFinal}</td></tfoot>`
for (let i = 0; i < flujoDeCaja.length; i++) {
    cabecera += `<tr> <td><b>${flujoDeCaja[i].periodo}</td> <td>${flujoDeCaja[i].ingresos}</td> <td>${flujoDeCaja[i].egresos}</td></tr>`
}
let tabla = document.querySelector('.caja')
tabla.innerHTML = cabecera

//CREDITOS----------------------------------------------

let ofertas = [{
        nombre: "Plan001",
        capital: 150000,
        plazo: 30,
        tasa: 0.15
    },
    {
        nombre: "Plan002",
        capital: 300000,
        plazo: 180,
        tasa: 0.1
    },
    {
        nombre: "Plan003",
        capital: 485000,
        plazo: 60,
        tasa: 0.23
    }
];

let ofertasConInteres = [];

for (var i = 0; i < ofertas.length; i++) {
    let interes = (ofertas[i].capital * ofertas[i].plazo * ofertas[i].tasa) / 100;
    ofertasConInteres.push({
        nombre: ofertas[i].nombre,
        capital: ofertas[i].capital,
        plazo: ofertas[i].plazo,
        tasa: ofertas[i].tasa,
        interes: interes
    });
}

console.log(ofertasConInteres)







