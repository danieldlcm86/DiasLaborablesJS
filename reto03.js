const today = new Date();
let day = today.getDate();
let hour = today.getHours();

//dias laborales 1-5
//horas laborales 9-18 horas

///////Días laborables///////
day = 4; //miércoles//
function businessDay(day) {
    let diaHabil = "";
    diaHabil = (day == 6 || day == 0) ? false : true;
    return "Día hábil: " + diaHabil;
}

function businessHour(hour) {
    
    let horaHabil = "";
    horaHabil = (hour >= 9 && hour <18) ? true : false;
    return "Hora hábil: " + horaHabil;
}

console.log(businessDay(day));
console.log(businessHour(hour));