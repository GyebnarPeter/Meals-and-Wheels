let weeklyMenu = {
    monday: {
        soup1: "Mustáros sertésraguleves",
        soup2: "Gyümölcsleves",
        food1: "Tejszínes gombás csirkemell",
        food2: "Rántott csirkecomfilé",
        food3: "Brassói aprópecsenye",
        food4: "Rántott pontypatkó"
    },
    tuesday: {
        soup1: "Erőleves tésztával",
        soup2: "Pulykaraguleves",
        food1: "Marhapörkölt",
        food2: "Rántott sertésborda",
        food3: "szezámmagos csirkemell",
        food4: "Rántott karfiol"
    },
    wednesday: {
        soup1: "Legényfogóleves",
        soup2: "Sárgaborsókrémleves",
        food1: "Paradicsomos húsgombóc",
        food2: "Zúzapörkölta",
        food3: "Sült csirkeszárny",
        food4: "Zöldvorsófőzelék"
    },
    thursday: {
        soup1: "Tejfölös kolbászeleves",
        soup2: "Gyümölcsleves",
        food1: "Fokhagymás csirkemell",
        food2: "Temesvári sertésragu",
        food3: "Resztelt csibemáj",
        food4: "Káposztás tészta"
    },
    friday: {
        soup1: "Tojásleves",
        soup2: "Paradicsomleves",
        food1: "Körömpörkölt",
        food2: "Tavaszi pulykaragu",
        food3: "Eszterházy tokány",
        food4: "Rántott sajt"
    }
};

let soup1 = document.querySelector("#soup1");
let soup2 = document.querySelector("#soup2");
let food1 = document.querySelector("#food1");
let food2 = document.querySelector("#food2");
let food3 = document.querySelector("#food3");
let food4 = document.querySelector("#food4");

let day = new Date().getDay();
console.log(day)

switch(day) {
    case 1:
        soup1.innerHTML = weeklyMenu.monday.soup1;
        soup2.innerHTML = weeklyMenu.monday.soup2;
        food1.innerHTML = weeklyMenu.monday.food1;
        food2.innerHTML = weeklyMenu.monday.food2;
        food3.innerHTML = weeklyMenu.monday.food3;
        food4.innerHTML = weeklyMenu.monday.food4;
        break;
    case 2:
        soup1.innerHTML = weeklyMenu.tuesday.soup1;
        soup2.innerHTML = weeklyMenu.tuesday.soup2;
        food1.innerHTML = weeklyMenu.tuesday.food1;
        food2.innerHTML = weeklyMenu.tuesday.food2;
        food3.innerHTML = weeklyMenu.tuesday.food3;
        food4.innerHTML = weeklyMenu.tuesday.food4;
        break;
    case 3:
        soup1.innerHTML = weeklyMenu.wednesday.soup1;
        soup2.innerHTML = weeklyMenu.wednesday.soup2;
        food1.innerHTML = weeklyMenu.wednesday.food1;
        food2.innerHTML = weeklyMenu.wednesday.food2;
        food3.innerHTML = weeklyMenu.wednesday.food3;
        food4.innerHTML = weeklyMenu.wednesday.food4;
        break;
    case 4:
        soup1.innerHTML = weeklyMenu.thursday.soup1;
        soup2.innerHTML = weeklyMenu.thursday.soup2;
        food1.innerHTML = weeklyMenu.thursday.food1;
        food2.innerHTML = weeklyMenu.thursday.food2;
        food3.innerHTML = weeklyMenu.thursday.food3;
        food4.innerHTML = weeklyMenu.thursday.food4;
        break;
    case 5:
        soup1.innerHTML = weeklyMenu.friday.soup1;
        soup2.innerHTML = weeklyMenu.friday.soup2;
        food1.innerHTML = weeklyMenu.friday.food1;
        food2.innerHTML = weeklyMenu.friday.food2;
        food3.innerHTML = weeklyMenu.friday.food3;
        food4.innerHTML = weeklyMenu.friday.food4;
        break;
    default:
        soup1.innerHTML = weeklyMenu.monday.soup1;
        soup2.innerHTML = weeklyMenu.monday.soup2;
        food1.innerHTML = weeklyMenu.monday.food1;
        food2.innerHTML = weeklyMenu.monday.food2;
        food3.innerHTML = weeklyMenu.monday.food3;
        food4.innerHTML = weeklyMenu.monday.food4;
        break;
}