const allKombs = [];
const komb1 = [
    p1 = {
        pitanje: "The longest wedding veil was the same length as:",
        a: "183.32 Olympic pools",
        b: "102.3 School buses",
        c: "63.5 Football fields",
        correct: c
    },
    p2 = {
        pitanje: "Which animal has fingerprints similar to humans:",
        a: "Koalas",
        b: "Cats",
        c: "Racoons",
        correct: a
    },
    p3 = {
        pitanje: "Which insect stings the others of its own kind:",
        a: "Mosquitos",
        b: "Bees",
        c: "Wasps",
        correct: b
    },
    p4 = {
        pitanje: "Unicorn is the national symbol of which country:",
        a: "Belgium",
        b: "Scotland",
        c: "Australia",
        correct: b
    },
    p5 = {
        pitanje: "Children's medicine once contained:",
        a: "Morphine",
        b: "THC",
        c: "Paper glue",
        correct: a
    },
    p6 = {
        pitanje: "A pharaoh of ancient Egypt did what to his slaves once:",
        a: "Made them sing for 24 hours on his birthday",
        b: "Invited them to a dinner",
        c: "Covered them with honey to keep bugs away from himself",
        correct: c
    }
]

const komb2 = [
    p1 = {
        pitanje: "The most common letter that appears in 11% of English words:",
        a: "A",
        b: "E",
        c: "O",
        correct: b
    },
    p2 = {
        pitanje: "Sea lions can:",
        a: "Wink back",
        b: "Play a volleyball",
        c: "Dance to a beat",
        correct: c
    },
    p3 = {
        pitanje: "Napoleon was once attacked by thousands of:",
        a: "Women",
        b: "Rabbits",
        c: "Crows",
        correct: b
    },
    p4 = {
        pitanje: "The America's first bank robber:",
        a: "Buried the money in the ground",
        b: "Deposited the money into the same bank",
        c: "Gave it all to charity",
        correct: b
    },
    p5 = {
        pitanje: "A tick bite can make you allergic to:",
        a: "Red meat",
        b: "Red wine",
        c: "Red pepper",
        correct: a
    },
    p6 = {
        pitanje: "The Twitter bird's name is:",
        a: "Sam",
        b: "Twitty",
        c: "Larry",
        correct: c
    }
]

const komb3 = [
    p1 = {
        pitanje: "The longest book title contains:",
        a: "1809 words",
        b: "562 words",
        c: "1362 words",
        correct: a
    },
    p2 = {
        pitanje: "The U.S. almost went to war with Canada over a:",
        a: "Woman",
        b: "Pig",
        c: "Ship",
        correct: b
    },
    p3 = {
        pitanje: "A Scotish term 'tartle' refers to:",
        a: "Hesitating for forgetting someone's name",
        b: "Having needs to vomit (metaphorically)",
        c: "Going at someone's home for the first time",
        correct: a
    },
    p4 = {
        pitanje: "Which animal delivered mail in Belgium:",
        a: "Goats",
        b: "Dogs",
        c: "Cats",
        correct: c
    },
    p5 = {
        pitanje: "Mermaid 'documentary' fooled so many people, that U.S. government had to:",
        a: "Ban the movie",
        b: "Issue a statement",
        c: "Declare it the most foolish movie ever",
        correct: b
    },
    p6 = {
        pitanje: "Chinese police use:",
        a: "Cats",
        b: "Pigeons",
        c: "Geese",
        correct: c
    }
]

const komb4 = [
    p1 = {
        pitanje: "Dolphins have been trained:",
        a: "To clean the ships",
        b: "To be used in wars",
        c: "For babysitting",
        correct: b
    },
    p2 = {
        pitanje: "Riding a roller coaster could help you pass:",
        a: "Kidney stone",
        b: "Seasickness",
        c: "Allergy to dust",
        correct: a
    },
    p3 = {
        pitanje: "Sharks can live for:",
        a: "500 years",
        b: "300 years",
        c: "400 years",
        correct: a
    },
    p4 = {
        pitanje: "The fire hydrant patent was:",
        a: "Destroyed by the inventor",
        b: "Exhibited in museum",
        c: "Burned in the fire",
        correct: c
    },
    p5 = {
        pitanje: "A restaurant in New York as chefs employs only:",
        a: "Blondies",
        b: "Grandmas",
        c: "Dog owners",
        correct: b
    },
    p6 = {
        pitanje: "One type of jellyfish is famous by:",
        a: "Eating small fishes",
        b: "Being immortal",
        c: "Having a brain",
        correct: b
    }
]

allKombs.push(komb1, komb2, komb3, komb4);

pogodak = 0;
promasaj = 0;
// if(localStorage.getItem("name")) {
//     localStorage.removeItem("name");
//     document.getElementById("divZaInput").setAttribute("class", "shown");
// } else {
//     document.getElementById("divZaInput").setAttribute("class", "shown");
// }



function start() {
    if(localStorage.getItem("koef")) {
        localStorage.removeItem("koef");
    } else {
        console.log("Ma helou!");
    }
    let k = Math.floor(Math.random() * 4);
    localStorage.setItem("koef", k);

    let klik = 0;
    localStorage.setItem("klik", klik);

    var note = document.getElementById("note");
    var name = document.getElementById("name").value;

    if(name.length==0) {
        note.setAttribute("class", "shown");
    } else {
        if(note.getAttribute("class") == "shown") {
            note.setAttribute("class", "hidden");
        }
        document.getElementById("name").setAttribute("class", "hidden");
        document.getElementById("labForName").setAttribute("class", "hidden");
        localStorage.setItem("name", name);
    
        let pitanje = document.getElementById("pitanje");
        let podA = document.getElementById("podA");
        let podB = document.getElementById("podB");
        let podC = document.getElementById("podC");
        // let a = document.getElementById("a");
        // let b = document.getElementById("b");
        // let c = document.getElementById("c");

        const start = document.getElementById("start");
        const next = document.getElementById("next");
        const submit = document.getElementById("submit");
        let allElements = [];
    
        start.setAttribute("class", "hidden");
        next.setAttribute("class", "next");
        submit.setAttribute("class", "next");

        allElements.push(pitanje);

        for(let i=0; i<allElements.length; i++) {
            allElements[i].setAttribute("class", "shown");
        }
        document.getElementById("forma").setAttribute("class", "formulja formaShow");

        pitanje.innerHTML = allKombs[k][klik].pitanje;
        podA.innerHTML = allKombs[k][klik].a;
        podB.innerHTML = allKombs[k][klik].b;
        podC.innerHTML = allKombs[k][klik].c;
    }
}

function submit() {
    let k = parseInt(localStorage.getItem("koef"));
    document.getElementById("noAnswers").innerHTML = "";
    klik = parseInt(localStorage.getItem("klik"));

    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");

    let podA = document.getElementById("podA");
    let podB = document.getElementById("podB");
    let podC = document.getElementById("podC");

    let correct = allKombs[k][klik].correct;

    if((a.checked == true) || (b.checked == true) || (c.checked == true)) {
        localStorage.setItem("submit", klik);

        switch(true) {
            case a.checked: 
                podA.setAttribute("class", "redLetters");
                a.disabled = true;
                b.disabled = true;
                c.disabled = true;
                break;
            case b.checked: 
                podB.setAttribute("class", "redLetters");
                a.disabled = true;
                b.disabled = true;
                c.disabled = true;
                break;
            case c.checked: 
                podC.setAttribute("class", "redLetters");
                a.disabled = true;
                b.disabled = true;
                c.disabled = true;
                break;
        }

        switch(correct) {
            case a: 
                podA.setAttribute("class", "greenLetters");
                if(a.checked == true) {
                    pogodak++;
                }
                break;
            case b: 
                podB.setAttribute("class", "greenLetters");
                if(b.checked == true) {
                    pogodak++;
                }
                break;
            case c: 
                podC.setAttribute("class", "greenLetters");
                if(c.checked == true) {
                    pogodak++;
                }
                break;
        }
    } else {
        document.getElementById("noAnswers").innerHTML = "Please, select one of the answers!";
    }
}

function next() {
    let k = parseInt(localStorage.getItem("koef"));
    document.getElementById("noAnswers").innerHTML = "";
    if(localStorage.getItem("submit") == localStorage.getItem("klik")) {
        let allRadios = [
            document.getElementById("a"),
            document.getElementById("b"),
            document.getElementById("c")
        ];
        let allLabels = [
            document.getElementById("podA"),
            document.getElementById("podB"),
            document.getElementById("podC")
        ];
    
        for(let z=0; z<3; z++) {
            allRadios[z].checked = false;
            allRadios[z].disabled = false;
            allLabels[z].removeAttribute("class");
        }

    
        klik = parseInt(localStorage.getItem("klik"));
        
        if(klik == 5) {
            let ime = localStorage.getItem("name");
            document.getElementById("pitanje").innerHTML = "Dear " + ime + ","
            document.getElementById("rezultat").innerHTML = "your result is " + pogodak + "/6";
            document.getElementById("obavestenje").setAttribute("class", "shown");
            document.getElementById("FF").setAttribute("class", "shown");
            document.getElementById("forma").setAttribute("class", "hidden");
            document.getElementById("submit").setAttribute("class", "hidden");
            document.getElementById("next").setAttribute("class", "hidden");
            document.getElementById("finish").setAttribute("class", "shown");
            switch(pogodak) {
                case 0: 
                    document.getElementById("porukica").innerHTML = "Every day man learns something new! :)";
                    break;
                case 1:
                    document.getElementById("porukica").innerHTML = "Every day man learns something new! :)";
                    break;
                case 2: 
                    document.getElementById("porukica").innerHTML = "Every day man learns something new! :)";
                    break;
                case 3: 
                    document.getElementById("porukica").innerHTML = "Good job!  :)";
                    break;
                case 4: 
                    document.getElementById("porukica").innerHTML = "Good job!  :)";
                    break;
                case 5:
                    document.getElementById("porukica").innerHTML = "Excellent! You are a natural talent! :)";
                    break;
                case 6:
                    document.getElementById("porukica").innerHTML = "Excellent! You are a natural talent! :)";
                    break;
            }
            
        } else {
            brojac = klik + 1;
            localStorage.removeItem("klik");
            localStorage.setItem("klik", brojac);
        
            pitanje.innerHTML = allKombs[k][brojac].pitanje;
            podA.innerHTML = allKombs[k][brojac].a;
            podB.innerHTML = allKombs[k][brojac].b;
            podC.innerHTML = allKombs[k][brojac].c;
        }
    } else {
        document.getElementById("noAnswers").innerHTML = "Please, select one of the answers and click the Check button to see the correct one";
    }
}

