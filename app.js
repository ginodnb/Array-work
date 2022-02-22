// TASK 1 (and also the extra task at the end)

const music = ["drum and bass", "house", "EDM", "prog rock", "Techno"];
var m = music;
music.push("metal");
for  (i=0; i <music.length; i++) {
    if (i % 2!=0){
        console.log("this has been changed ");

    }
    else {
        console.log(m[i])
    }
}


// TASK 2
var x = prompt("input a number");
var y = prompt("now input another number");

alert((x * y) + "This is your first number multiplied by your second number");

// TASK 3

var i = prompt("Are the cats wet? - yes or no");

if (i == "yes") {
    alert("It is raining outside");
}
else if (i == "no") {
    alert("It is not raining outside");
}
else { alert("huh?")};
