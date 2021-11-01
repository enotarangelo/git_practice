/**const message={
    intro :{
        informale:"Ciao",
        giorno: "Buongiorno",
        sera: "Buonasera"
    },
    testo: {
        informale:"come va?",
        giorno: "com'è andata la giornata",
        sera: "posso fare qualcosa ?"
    },
    saluto: {
        informale:"Saluti.",
        giorno: "A presto.",
        sera: "Arrivederci."
    }
}


const random_message=obj=>{
    let random1= Math.floor(Math.random()*3);
    let random2= Math.floor(Math.random()*3);
    let random3= Math.floor(Math.random()*3);
    let ret='';

    switch(random1){
       case 0:
           ret= ret+ obj.intro.informale;
           break;
        case 1:
            ret= ret+ obj.intro.giorno;
           break;
        case 2:
            ret= ret+ obj.intro.sera;
           break;
        default:
            return 'Errore';
    }
    switch(random2){
        case 0:
            ret= ret+ " "+obj.testo.informale;
            break;
         case 1:
             ret= ret+ " "+obj.testo.giorno;
            break;
         case 2:
             ret= ret+ " "+obj.testo.sera;
            break;
         default:
             return 'Errore';
     }
     switch(random2){
        case 0:
            ret= ret+ " "+obj.saluto.informale;
            break;
         case 1:
             ret= ret+ " "+obj.saluto.giorno;
            break;
         case 2:
             ret= ret+ " "+obj.saluto.sera;
            break;
         default:
             return 'Errore';
     }
    return ret;

}*/

// Refactoring
const message={
    intro :["Ciao", "Buongiorno", "Buonasera", "Salve"],
    testo: ["come va?", "com'è andata la giornata", "posso fare qualcosa ?", "Come stai"],
    saluto: ["Saluti.", "A presto.", "Arrivederci.", "Ciao"]
    }
const random_message=obj=>{
    let random1= Math.floor(Math.random()*obj.intro.length);
    let random2= Math.floor(Math.random()*obj.testo.length);
    let random3= Math.floor(Math.random()*obj.saluto.length);
    return message.intro[random1] +" "+ message.testo[random2]+" "+message.saluto[random3];
}
console.log(random_message(message));
