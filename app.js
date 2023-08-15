
const horasAlDia = parseFloat(prompt('Cuantas horas trabajas al dia?'));
const diasSemana = parseFloat(prompt('Cuantos dias trabajas a la semana?'));
const sueldoPorHora = parseFloat(prompt('Cuanto ganas por hora?'))
function calculo( horasAlDia , diasSemana, sueldoPorHora){
    const sueldoPorDia = horasAlDia * sueldoPorHora;
    const totalSueldoSemana = sueldoPorDia * diasSemana;
    return totalSueldoSemana;
}
const resultadoSemana = calculo(horasAlDia,diasSemana,sueldoPorHora);
alert(`A la semana estas ganando $${resultadoSemana}`)


let pregunta = prompt('Quieres saber cuanto ganas al mes?');

if(pregunta === "si"|| pregunta === 'SI' || pregunta === 'Si'){
    const sueldoSemana = resultadoSemana;
    const semTrabajadas = parseFloat(prompt('Cuantas semanas trabajaste este mes?'));
    
    function sueldoMes(sueldoSemana, semTrabajadas){
        
        const alMes = sueldoSemana * semTrabajadas;
        return alMes;
    }
    const resultado = sueldoMes(sueldoSemana,semTrabajadas);
    alert(`El total ganado al mes es $${resultado}`);
    

    
}else{
    alert('Gracias eso fue todo.');
}