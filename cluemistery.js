
// Characters

var mrGreen ={
first_name:"Jacob",
last_name:"Green",
color:"green",
description:"He has a lot of connections",
age:45,
image:"https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:"Entrepreneur",
}

var drOrchid ={
first_name:"Doctor",
last_name:"Orchid",
color:"white",
description:"PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:26,
image:"http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:"Scientist",
}

var profPlum ={
first_name:"Victor",
last_name:"Plum",
color:"purple",
description:"Billionare video game designer",
age:22,
image:"https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:"Designer",
}

var missScarlet={
first_name:"Kasandra",
last_name:"Scarlet",
color:"red",
description:"She is an A-list movie star with a dark past",
age:31,
image:"https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:"Actor",
}

var mrsPeacock ={
first_name:"Eleanor",
last_name:"Peacock",
color:"blue",
description:"She is from a wealthy family and uses her status and money to earn popularity",
age:36,
image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:"Socialité",
}

var mrMustard ={
first_name:"Jack",
last_name:"Mustard",
color:"yellow",
description:"He is a former football player who tries to get by on his former glory",
age:62,
image:"https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:"Retired Football player",
}

// Weapons//

var rope ={
    name :"Rope",
    weight:10,
}

var knife={
    name :"Knife",
    weight:8,
}

var candlestick={
    name :"Candle Stick",
    weight:2,
}

var dumbbell={
    name :"Dumbble",
    weight:30,
}

var poison={
    name :"Poison",
    weight:2,
}
var axe={
    name :"Axe",
    weight:15,
}
var bat={
    name :"Bat",
    weight:13,
}
var trophy ={
    name :"Trophy",
    weight:25,
}
var pistol={ 
    name :"Pistol",  
    weight:20,
}

// Rooms//

var dinningRoom ="Dinning room";
var conservatory ="Conservatory";
var kitchen ="Kitchen";
var study ="Study";
var library ="Library";
var billiardRoom ="Billiard room";
var lounge ="Lounge";
var ballroom ="Ball room";
var hall ="Hall";
var spa ="Spa";
var livingRoom ="Living room";
var observatory ="Observatory";
var theater ="Theater";
var guestHouse ="Guest house";
var patio ="Patio";


// Characters Collection
var charactersArray = [mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard];

// Rooms' Collection
var weaponsArray = [rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol];

// Weapons Collection
var roomsArray = [dinningRoom,conservatory,kitchen,study,library,billiardRoom,lounge,ballroom,hall,spa, livingRoom,observatory,theater,guestHouse,patio];


//ramdom//

function ramdomSelector(array){
    
 var randomIndexNumber = Math.floor(Math.random() * array.length-1);
 
 return array[randomIndexNumber] 

}
console.log("this is random output",ramdomSelector(weaponsArray));

//mystery//

function pickMistery(){
    var misteryEnvelope = [ramdomSelector(charactersArray),ramdomSelector(weaponsArray),ramdomSelector(roomsArray)];
    return misteryEnvelope
}
var realMystery = pickMistery()

console.log(realMystery)

//reveling the mistery//

function revealMystery(realMystery){
    //console.log("First element of array", realMystery[0])
    
 console.log("The person who did it is:" + realMystery[0].first_name + realMystery[0].last_name + "killed Mr.Boddy using the" + realMystery[1].name + "in the" + realMystery[2]+ "!!")

}
revealMystery(realMystery)
