

var Questions=[
    {Q:'What is the largest desert in the world?',
    Options:['The Gobi Desert','The Kalahari Desert','The Antarctic Desert'],
    Answer:2},
    
    {Q:'Which country is both in Europe and Asia?',
    Options:['Russia','Turkey','Kazakhstan'],
    Answer:1},
    
    {Q:' Which river is the longest in the world?',
    Options:['Amazon River','Nile River',' Mississippi River'],
    Answer:1},
    
    {Q:'Who was the first President of the United States?',
    Options:[' John Adams','Abraham Lincoln','George Washington'],
    Answer:2},
    
    {Q:'Who was the British Prime Minister during World War II?',
    Options:['Neville Chamberlain','Winston Churchill','Clement Attlee'],
    Answer:1},
    
    {Q:'What is the capital of France?',
    Options:['Berlin','Madrid','Paris'],
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
   // console.log(myanswer);
}

function setupNextButton() {
    $("#next").off("click").on("click", function () {
        
        
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
    
}

function resetGame() {
currentIndexQuestion = 0;
   counter = 0;
   continueGame()
}

$(document).ready(function() {
    init();
   setupNextButton();
})

