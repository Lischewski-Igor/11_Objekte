
function ausgabe(outputStr) {
    console.log(outputStr);
}

/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Drazen"];
// ausgabe(arr[2]);

// arr = [["Ich", "bin", "Drazen"],["Ich", "bin", "Jenny"]];
// ausgabe(arr[0][2]);
// ausgabe(arr[1][2]);


/***** Objekte 1 Daten/Funktionen *******/

let person = {
                firstName:"Drazen", 
                familyName:"Savi",
                salary: [120000,125000],
                hasAccess: true,
                sayHello: function(){
                                        return "hi";
                                    }
            };



ausgabe(person);
ausgabe(person.firstName);
ausgabe(person.familyName);
ausgabe(person.salary[0]);
ausgabe(person.hasAccess);

let txt = "Ich bin " + person.firstName + " " +
            person.familyName + "und verdiene " +
            person.salary[1] + " p.a."

ausgabe(txt);

if (person.hasAccess) {
    ausgabe("Sie sind ein VIP!");
}

ausgabe(person.sayHello());