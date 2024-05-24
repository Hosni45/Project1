

var Questions=[
    {Q:' What is the Riemann Hypothesis?',
    Options:['the Moon',' Jupiter','Riemann zeta function'],
    Answer:2},
    
    {Q:'What is the Theory of Everything?',
    Options:['hypothetical framework','photoshop','non-trivial zeros'],
    Answer:1},
    
    {Q:' What is the Hard Problem of Consciousness about?',
    Options:['subjective experiences','ragdoll',' gravity of herbs'],
    Answer:1},
    
    {Q:'What is the P vs NP problem?',
    Options:[' verification & solving','Upnp&PNP Cartridge','network specs'],
    Answer:2},
    
    {Q:' How did life originate on Earth?',
    Options:['complex structures','non-trivial zeros','oxygen'],
    Answer:1},
    
    {Q:'What are dark matter and dark energy?',
    Options:['Petrol & soil','unknown form of matter ','Petrolium'],
    Answer:2},
    ] 
;
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