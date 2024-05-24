

var Questions=[
    {Q:' What is the largest planet in our solar system?',
    Options:['the Moon',' Jupiter','USA'],
    Answer:2},

    {Q:'What is the process called when a caterpillar turns into a butterfly?',
    Options:['metamorphosis','super saiyan','Baryon Mode'],
    Answer:0},
    
    {Q:' What kind of animal is known for sleeping upside down?',
    Options:['Bats','fishes',' pizza'],
    Answer:1},
    
    {Q:'How many continents are there on Earth',
    Options:[' 3','7','6'],
    Answer:0},
    
    {Q:' What is the tallest animal on land?',
    Options:['giraffe','Dog','snake'],
    Answer:1},
    
    {Q:'What do bees collect that they turn into honey?',
    Options:['sugar','nectar','salt'],
    Answer:2},
    ] 
;
console.log(myanswer)
var counter = 0;
var currentIndexQuestion = 0;
var myanswer = 0;

function init() {
    var currentQuestion = Questions[currentIndexQuestion];
    myanswer = 0;
    
    $('#q1').text(currentQuestion.Q);
    //$('#buttons').empty(); // Clear previous buttons
    
    for (var i = 0; i < currentQuestion.Options.length; i++) {
        var btn = document.createElement('button');
        btn.className = 'buttons';
        btn.innerHTML = currentQuestion.Options[i];
        btn.addEventListener('click', selectAnswer);
        $('#buttons').append(btn);
    }
}

function selectAnswer(event) {
    myanswer = event.target.innerText;
    console.log(myanswer);
}

function setupNextButton() {
    $("#next").off("click").on("click", function () {
        // console.log('.off')
        // console.log('.on')
        var currentQuestion = Questions[currentIndexQuestion];
        
        if (currentQuestion.Answer === currentQuestion.Options.indexOf(myanswer)) {
            counter++;
            currentIndexQuestion++;
            
            if (currentIndexQuestion < Questions.length) {
                $(".QUIZ").html(`<h3>Good Job!</h3><br><button class='StartAgain' onClick='continueGame()'>Continue (${counter})</button>`);
            } else {
                $(".QUIZ").html(`<h3>Quiz Completed</h3><br><button class='StartAgain' onClick='resetGame()'>Restart Quiz</button>`);
            }
        } else {
            $(".QUIZ").html("<h3>Poor Job</h3><br><button class='StartAgain' onClick='resetGame()'>Start Again</button>");
        }
    });
}

function continueGame() {
    $(".QUIZ").html(
        ` <h1 id="T1"> QUESTION</h1>
         <h3 id="q1"></h3>
        <div id="buttons"></div>
        <button id="next">Submit</button>
        
    `);
    init();
    setupNextButton();
    console.log('aaa',continueGame)
}

function resetGame() {
    window.location.reload();
}

$(document).ready(function() {
    init();
    setupNextButton();
})