// Faça uma função que receba uma data no formato MM/DD/YYYY, 
// exemplo: 03/01/2002. Você deverá informar a qual dia da semana essa data se refere.

function carregar(date) {
    let data = new Date(date);
    let dw = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    let dayOfWeek = `${dw[data.getDay()]} ${data.toLocaleDateString("pt-BR")}`;

    console.log(dayOfWeek);

    return dayOfWeek;
}

carregar('12/05/2022');