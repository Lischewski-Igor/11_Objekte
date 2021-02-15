
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

// let person = {
//                 firstName:"Drazen", 
//                 familyName:"Savi",
//                 salary: [120000,125000],
//                 hasAccess: true,
//                 sayHello: 
//                 function() {
//                                 return "Ich bin " + this.firstName;
//                             }
//             };



// // ausgabe(person);
// // ausgabe(person.firstName);
// // ausgabe(person.familyName);
// // ausgabe(person.salary[0]);
// // ausgabe(person.hasAccess);

// // let txt = "Ich bin " + person.firstName + " " +
// //             person.familyName + "und verdiene " +
// //             person.salary[1] + " p.a."

// // ausgabe(txt);

// // if (person.hasAccess) {
// //     ausgabe("Sie sind ein VIP!");
// // }

// ausgabe(person.sayHello());


/***** Objekte 2 - Hierarchie *******/

// Tiefer, tiefer - Irgendwo ist der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ....
// deep - deeper - deepest
// Nested Objekt

let baikal = {
                deep:   {
                            deeper: {
                                      deepest: "Das Licht - auf 1642m."
                                    }
                        }
              }

ausgabe(baikal);
// {{{{{ ... }}}}}  Nested Objects
ausgabe(baikal.deep.deeper.deepest);
