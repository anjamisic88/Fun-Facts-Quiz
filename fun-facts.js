const allFFs = [];

const ff1 = [
    f1 = {
        title: "The longest wedding veil was the same length as 63.5 football fields",
        src: "./assets/veil.jpg",
        text: "When Maria Paraskeva, a woman from Cyprus, got married in August 2018, her goal wasn't just to say 'I do.' She was also determined to set a record. 'My dream as a child has always been to break the Guinness World Record title for the longest wedding veil,' she explained. She fulfilled her dream by wearing a lace veil that stretched 22,843 feet and 2.11 inches, or as long as 63.5 football fields."
    },
    f2 = {
        title: "Koalas have fingerprints very similar to human",
        src: "assets/koala.jpg",
        text: "Chimpanzees and gorillas have human-like fingerprints and so do koalas. In fact, koala prints are very similar to human fingerprints, even to expert crime scene investigators. As of yet, no koalas have framed humans for their crimes, but now we know it's not impossible…"
    },
    f3 = {
        title: "Bees sometimes sting other bees",
        src: "assets/bee.jpg",
        text: "Bees are notorious for their stings, but humans aren't the only ones who experience this pain in the neck (or the arm, or the leg…). In protecting their hives from outsiders, some 'guard bees' will stay by the entrance and sniff the bees that come in, says Marianne Peso from the biology department of Macquarie University. If there's a rogue bee from another hive trying to steal some nectar, the guard bee will bite and even sting the intruder."
    },
    f4 = {
        title: "The unicorn is the national animal of Scotland",
        src: "assets/unicorn.jpg",
        text: "While Scotland proudly boasts the Loch Ness Monster, one of the world's most famous fabled creatures, the country opted to make another mythical beast its national animal: the unicorn. Although this might seem like an odd choice, Visit Scotland explains that unicorns played an integral role in the country's history. Back in the 12th century, William I used the 'proud beast' in the Scottish royal coat of arms."
    },
    f5 = {
        title: "Children's medicine once contained morphine",
        src: "assets/medicine.jpg",
        text: "If you were a baby in the middle of the 1800s and you cried while teething, your parents might have given you Mrs. Winslow's Soothing Syrup. This 'medicine' claimed that 'it soothes the child, it softens the gums, [and] allays all pain.' It may have done plenty of soothing, but it was also extremely dangerous—this concoction, like many patent medicines of the time, contained morphine."
    },
    f6 = {
        title: "A pharaoh once lathered his slaves in honey to keep bugs away from him",
        src: "assets/pharaoh.jpg",
        text: "The pharaohs of ancient Egypt were believed to be literally divine. The word pharaoh itself means 'great house,' as in the house of God. In fact, King Pepi II, who supposedly ruled for 90 years, thought so highly of himself that when he was bothered by insects, he would command that one of his slaves be covered in honey to lure the flies away from himself."
    }
]

const ff2 = [
    f1 = {
        title: "'E' is the most common letter and appears in 11% of all english words",
        src: "assets/letter.jpg",
        text: "The commonly used vowel 'E' appears in around 11 percent of all words in the English language, according to Oxford Dictionaries. The next most popular letter was 'a,' which appears in around 8.5 percent of all words. The least common letter is 'q,'' which appears in just 0.2 percent of words."
    },
    f2 = {
        title: "Sea lions can dance to a beat",
        src: "assets/sealion.jpg",
        text: "There are only two mammals on Earth with the proven ability to move their bodies in time with an external beat: humans (though not all humans, to be fair) and sea lions. When researchers at the University of Santa Cruz rescued a stranded sea lion in 2013, they found that she was very smart, and she was even able to learn how to dance. Though parrots can also keep a rhythm, it was previously thought that only animals capable of complex vocal learning could do this."
    },
    f3 = {
        title: "Napoleon was once attacked by thousands of rabbits",
        src: "assets/napoleon.jpg",
        text: "Napoleon Bonaparte was once one of the most powerful men in Europe, but he suffered an ignominious defeat at the hands (or paws) of rabbits. After a military victory, Napoleon's chief of staff organized a rabbit hunt to celebrate. Thousands of rabbits were brought in to be set loose, but instead of hopping away when the cages were opened, they turned to attack, swarming the partygoers. After trying and failing to shoo them away, the great Emperor Napoleon ran for the safety of his carriage."
    },
    f4 = {
        title: "America's first bank robber deposited the money back into the same bank",
        src: "assets/bank.jpg",
        text: "At the Bank of Philadelphia on August 1, 1798, a sum of $162,821 was stolen from the vault. There was no sign of forced entry so it was thought to be an inside job. Patrick Lyon was imprisoned as the prime suspect, as he had been the carpenter that worked on the vault doors.But then, they realized a man named Isaac Davis had been depositing large sums of money into the Bank of Philadelphia. It turned out, he was one of the robbers involved. In 1799, Lyon was freed, and Davis only ended up repaying the money without serving a day in jail."
    },
    f5 = {
        title: "A tick bite can make you allergic to red meat.",
        src: "assets/tick.jpg",
        text: "Plenty of people have food allergies, but few are the result of an insect bite. In a strange and growing trend, some people who get bitten by the Lone Star tick can develop a sudden allergy to red meat. Beef, lamb, and pork (which are technically classified as red meat) can make people with this allergy experience headaches, sneezing, a runny nose, and nausea. In severe cases, it can cause the person to be unable to breathe. For some sufferers, the allergy fades over time, but for others, it's permanent."
    },
    f6 = {
        title: "The Twitter bird's official name Is Larry",
        src: "assets/twitter.jpg",
        text: "If you truly want to be among the savviest social media users out there, you should know that the Twitter bird has an official name: Larry the Bird (yes, like Larry Bird, the former pro basketball player who played for Twitter co-founder Biz Stone's home team, the Boston Celtics)."
    }
]

const ff3 = [
    f1 = {
        title: "The longest book title contains 1,809 words",
        src: "./assets/book.jpg",
        text: "The title of Srijan Timilsina's 2014 Guinness World Record-setting book is practically a full text in itself. Including 1,809 words (or 11,284 characters) it begins, 'The historical development of the Brain i.e. from its formation from Annelida: Earthworm, Lugworm, Rag worm, Amphitrite, Freshwater worm, Marine worm, Tubifex, Leech. etc, Arthropoda: Housefly, Butterfly, Honey bee, Fairy shrimp, Horseshoe crab, Tick, Bluebottle, Froghopper, Yellow crazy ant…,' and continues to list pretty much every insect, fish, and mammal you can think of, including humans."
    },
    f2 = {
        title: "The U.S. almost went to war with Canada over a pig",
        src: "assets/pig.jpg",
        text: "In 1859, on San Juan Island citizens from both countries were located. Historic UK explains that 'a pig belonging to the British accidentally wandered onto the land of Lyman Cutlar, an American farmer. When Cutlar noticed the pig eating some of his potatoes he killed the pig.' Things spread into the rest of the community and got to the point where the governor of British Columbia sent three warships to the area. British Navy Admiral Robert L. Baynes arrived and ended things by stating that he would not 'involve two great nations in a war over a squabble about a pig.'"
    },
    f3 = {
        title: "There's a Scottish term for hesitating when introducing someone because you've forgotten their name",
        src: "assets/tartle.jpg",
        text: "We've all likely been there: You run into someone and you go to introduce them to whoever you're with and you can't remember their name for the life of you! There happens to be a Scottish term for this awkward hesitation. So if you (unfortunately) ever find yourself in that situation you can say, 'Pardon my tartle!'"
    },
    f4 = {
        title: "Cats once delivered mail in Belgium",
        src: "assets/catmail.jpg",
        text: "In the 1870s, the city of Liège, Belgium, attempted to employ 37 felines as mail carriers, according to the BBC. Messages were tucked into waterproof bags that the kitties would carry around their necks. However, while one cat apparently made it to its destination in under five hours, the other felines took up to a day to complete their journeys. Due to the fact that the cats weren't particularly reliable and definitely weren't speedy, the service didn't last very long."
    },
    f5 = {
        title: "A mermaid 'documentary' once fooled so many people that the U.S. government had to issue a statement",
        src: "assets/mermaid.jpg",
        text: "In 2013, Animal Planet aired Mermaids: The New Evidence, that 'proved' the half-human-half-fish beings exist. Plenty of the 3.6 million viewers that watched believed that the fictional claims were real. In fact, so many people were fooled that the U.S. government's National Oceanic and Atmospheric Administration released a statement on its website addressing the confusion, saying: 'Mermaids: The New Evidence is just entertainment. No evidence of aquatic humanoids has ever been found.'"
    },
    f6 = {
        title: "Chinese police use geese squads",
        src: "assets/geese.jpg",
        text: "You've heard of police dogs, but police geese? As of 2013, 12 police stations in a rural area of China have begun to use geese as sentries. They are alert animals and, as you probably know, can create a lot of noise and commotion, which creative Chinese law enforcement officers are taking advantage of. While this trend has yet to spread throughout China, Dongwan police claim that the geese have already stopped at least one theft."
    }
]

const ff4 = [
    f1 = {
        title: "Dolphins have been trained to be used in wars",
        src: "./assets/dolphins.jpg",
        text: "It's fairly well known that dolphins are incredibly clever animals—and that's thanks in part to what's inside their noggins. Amazon River dolphins—the wonderfully pink creatures that are also known as Boto or Boutu—have a brain capacity that is 40 percent larger than that of humans. Bottlenose dolphins also have larger brain capacities than humans do—1,600 grams versus 1,300 grams, according to the American Association of Advancement of Science."
    },
    f2 = {
        title: "Riding a roller coaster could help you pass a kidney stone",
        src: "assets/rollercoaster.jpg",
        text: "After multiple people reported they had passed a kidney stone while riding Walt Disney World's Big Thunder Mountain Railroad ride, a research team from Michigan State University decided to investigate the phenomena in 2016. They conducted tests with a model kidney and found that there was a 64 percent kidney stone pass rate for those seated in the rear of the Thunder Mountain ride. That number was just 16 percent for those seated in the front."
    },
    f3 = {
        title: "Sharks can live for five centuries",
        src: "assets/shark.jpg",
        text: "Greenland Sharks are known to be some of the oldest living animals in our world. Researchers did carbon dating on a Greenland Shark that was caught in 2014 and found it to be around 392 years old. Further testing revealed that our fishy friends could be up to 500 years old. Yes, that would mean that our geriatric friends would have been alive when Leonardo Da Vinci painted the 'Mona Lisa.'"
    },
    f4 = {
        title: "The fire hydrant patent was lost in a fire",
        src: "assets/firehydrant.jpg",
        text: "The fire hydrant patent is credited to Frederick Graff Sr., who was the chief engineer for Philadelphia Water Works during the early 1800s. Unfortunately for Graff Sr., the patent was destroyed when the patent office in Washington, D.C., burned down in 1836. After 100 years, retired firefighter George Sigelakis reinvented the hydrant after they had been failing to work in too many critical emergencies."
    },
    f5 = {
        title: "A restaurant in New York employs grandmas as chefs",
        src: "assets/grandma.jpg",
        text: "It is true that everybody thinks their Italian grandma—or nonna—is best cook around. So it was a genius idea when Joe Scaravella decided to gather up as many nonnas as he could to work in his restaurant in Staten Island. Enoteca Maria combines the skill of these delightful, talented grandmothers and has them create and cook recipes from their own family cookbooks."
    },
    f6 = {
        title: "There is an immortal jellyfish",
        src: "assets/jellyfish.jpg",
        text: "When it's an adult, the 'Immortal Jellyfish,' scientifically named Turritopsis dohrnii, can transform its cells back to its childhood state. This usually happens when it is physically harmed, sick, or even when it is starving. The jellyfish evolved this skill in order to survive throughout history, specifically when latching onto ships. Since it can hitchhike, its DNA has spread and the not-so-rare species is emerging all over the world."
    }
]

allFFs.push(ff1, ff2, ff3, ff4);

localStorage.removeItem("home");
   
let k;
if(localStorage.getItem("koef")) {
    k = parseInt(localStorage.getItem("koef"));
    localStorage.setItem("k",k);
    console.log("ima ga i to je "+k)
    console.log("vvv "+ allFFs[k])
} else {
    k = 0;
    localStorage.setItem("k",k);
}
let count = 0;
localStorage.setItem("count", count);
    
let naslov = document.getElementById("naslov");
let slika = document.getElementById("slika");
let text = document.getElementById("text");
    
naslov.innerHTML = allFFs[k][count].title;
slika.src = allFFs[k][count].src;
text.innerHTML = allFFs[k][count].text;
  
function nextFF() {
    let count = parseInt(localStorage.getItem("count"));
    let broj = count + 1;
    localStorage.removeItem("count");
    localStorage.setItem("count", broj);

    let k = parseInt(localStorage.getItem("k"));

    let naslov = document.getElementById("naslov");
    let slika = document.getElementById("slika");
    let text = document.getElementById("text");

    naslov.innerHTML = allFFs[k][broj].title;
    slika.src = allFFs[k][broj].src;
    text.innerHTML = allFFs[k][broj].text;

    if(broj == 5) {
        document.getElementById("finishFF").setAttribute("class", "shown");
        document.getElementById("nextFF").setAttribute("class", "hidden");
    }
}
  



