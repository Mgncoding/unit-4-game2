
//will show a number 19-120
var random = Math.floor(Math.random() * 101+19)

//reflect to poisioning on screen
$('#third').text(random);
console.log(random)

//set up random numbers for crystals 1-19
var crystal1 = Math.floor(Math.random() * 18 + 1)
var crystal2 = Math.floor(Math.random() * 18 + 1)
var crystal3 = Math.floor(Math.random() * 18 + 1)
var crystal4 = Math.floor(Math.random() * 18 + 1)

//declaring my totals
var userSum = 0
var wins = 0
var losses = 0

$("#wins").text("Wins: " + wins)
$("#losses").text("Losses: " + losses)

//add a reset
function reset() {
    random= Math.floor(Math.random() * 101 + 19)
    console.log(random)
    $("#third").text(random)
    crystal1 = Math.floor(Math.random() * 18 + 1)
    crystal2 = Math.floor(Math.random() * 18 + 1)
    crystal3 = Math.floor(Math.random() * 18 + 1)
    crystal4 = Math.floor(Math.random() * 18 + 1)
    userSum = 0
    $("#sum").text(userSum)
}

    //making a function for 'win' to callback
    function victory() {
        alert("You've won.")
            wins++
            $("#wins").text("Wins: " + wins)
            reset()
    }

    //make a function for 'loss' to callback
    function lost() {
        alert("You've Lost")
        losses++
        $("#losses").text("Losses: " + losses)
        reset()
    }

    //now to set up clicks for crystals
    $("#crystalone").on("click", function(){
        userSum = userSum + crystal1
        console.log(userSum)
        $("#sum").text(userSum)

        //the conditions
        if( userSum === random){
            victory()
        }else if ( userSum > random){
            lost()
        }
    })
    $("#crystaltwo").on("click", function(){
        userSum = userSum + crystal2
        console.log(userSum)
        $("#sum").text(userSum)

        //the conditions
        if( userSum === random){
            victory()
        }else if ( userSum > random){
            lost()
        }
    })
    $("#crystalthree").on("click", function(){
        userSum = userSum + crystal3
        console.log(userSum)
        $("#sum").text(userSum)

        //the conditions
        if( userSum === random){
            victory()
        }else if ( userSum > random){
            lost()
        }
    })
    $("#crystalfour").on("click", function(){
        userSum = userSum + crystal4
        console.log(userSum)
        $("#sum").text(userSum)

        //the conditions
        if( userSum === random){
            victory()
        }else if ( userSum > random){
            lost()
        }
    })






