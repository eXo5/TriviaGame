// $(document).ready(function() {
	//I'm thinking this document ready might be entirely pointless
	//var list
var welcomePage;
var qT; 				//question timer: 15 seconds
var aloePlant;			//main var for .html --don't ask
var response;			//$(document).on("click", this.text)
var score = 0;			//
var wrongScore = 0; 	//
var noResponse = 0; 	//counter for timeout questions
var i = -1; //counter used to iterate through questions and check answers
var countDown; 			//see timer()
var setQuesTimer;		//see

// Loads the trivia title page on window load
	function welcomeToTriviaChase() {
		i = -1;
		score = 0;
		wrongScore = 0;
		noResponse = 0;
		welcomePage = "<div id='welcoming'><h1>Welcome</h1><br><p>Please Press 'Start Game' to begin.</p><div class='button'><button class='btn btn-info btn-warning' id='startGame'>Start Game</button></div></div>";
		$("#trivialChase").html(welcomePage);
	};


// on click for start button
	$("#trivialChase").on("click", "#startGame", function(){
		i++;
		showQuestion();
	});//close start button

	$("#trivialChase").on("click", ".answer", function(){		
		clearInterval(countDown); //onClick for comparing questions and answers
		response = $(this).text();
		console.log(response);
		if((i === 6) || (i === 11)) { //allGloryToTheHypnotoad;
			correct();
	
		}
		else if(response === questionList[i].answer){
			correct();
		}	
			else {
				wrong();
			}	
	});
welcomeToTriviaChase();

//func list

function timer() {
//note to self - don't use timers
//timers === pains in the ass.
countDown = setInterval(decrement, 1000);
qT = 16;
	 function decrement() {
		if (qT>0) {
			qT--;
			$(".timer").html("<h2>Time</h2><h3>" + qT + "</h3>")
		}
		if (qT === 0) {
			clearInterval(countDown);
			$(".timer").html("<h2>Times UP!</h2>");
			outOfTime();

		}
	}
}
function showQuestion() {

		clearTimeout(setQuesTimer);
		timer();
		aloePlant = "<div class='question'><h2 class='quest'>" + questionList[i].question + "</h2></div>" + "<div id='answers'>" + "<h3 class='first answer'> A) " + answerList[i][0] + "</h3><h3 class='answer'> B) " + answerList[i][1] +  "</h3><h3 class='answer'> C) " + answerList[i][2] + "</h3><h3 class='answer'> D) " + answerList[i][3] + "</h3></div>";
		$("#trivialChase").html(aloePlant);
		}

function correct() {
	clearInterval(countDown);
	setQuesTimer = setTimeout(showQuestion, 3000);
	score++;
	aloePlant = "<h1>Congratulations!<br><br>" + questionList[i].answer + " is correct!";
	$("#trivialChase").html(aloePlant);
	if (i<11) {
		
		i++;
		//setTimeout(showQuestion,3000);
	}
	else {
		endGame();
	}
console.log(questionList[i].question);

}


function wrong(){
	clearInterval(countDown);
 	var setQuesTimer = setTimeout(showQuestion, 3000);
 	wrongScore++;
 	aloePlant = "<h1><br>Sorry!</h1><br><h2> The correct answer was " + questionList[i].answer + ".</h2>"
 	$("#trivialChase").html(aloePlant);
 	if (i<11) {
		i++;
		//setTimeout(showQuestion,4000);
	}
	else {
		endGame();
	}
console.log(questionList[i].question);
}

function outOfTime() {
	clearInterval(countDown);
	noResponse++;
	aloePlant = "<h1>Whoops!</h1><p>Looks like you ran out of time.</p>";
	$("#trivialChase").html(aloePlant);
			i++;
	setTimeout(showQuestion, 3000);
}

function endGame() {
	clearInterval(countDown);
	clearTimeout(setQuesTimer);
	aloePlant = "<h1>Congratulations!</h1><h1 class='endGame'>You answered: " + score + " correct!</h1><h1 class='endGame'>You missed: " + wrongScore + "</h1><h1 class='endGame'>Time Expired: " + noResponse + "</h1><br><div class='button'><button class='btn btn-info btn-warning' id='reset'>Reset Game</button></div></div>"
	$(".timer").html(" ");
	$("#trivialChase").html(aloePlant);
 	$("#trivialChase").on("click", "#reset", function(){
 		welcomeToTriviaChase();
 	});
}

//object containing questions and corresponding answers.
var questionList = [
		{ 	question: "Is Javascript easier than it looks?", //If you've had your coffee.
			answer: " A) Yes"
		},
		{
			question: "Which of the following was a 1939 World's Fair exhibit in New York?",
			answer : " B) Futurama"
		},
		{
			question:"Which of these scientists voiced himself in Futurama?",
			answer : " A) Stephen Hawking"
		},
		{
			question:"Who starred in the hit 1955 'Rebel Without a Cause'?",
			answer: " D) James Dean"
		},
		{	question:"Who is Winston's lover in '1984'?",
			answer : " C) Julia"
		},
		{	question:"Who wrote '1984'?",
			answer: " B) George Orwell"
		} ,
		{	question:"What is the greatest television show of the year 3000?",
			answer: " Everybody Loves Hypnotoad"
		},
		{
			question:"What is the capital of Australia", 
			answer: " C) Canberra"
		},
		{
			question:"What was the first planet to be discovered in 1781", 
			answer: " C) Uranus"
		},
		{	question:"Where would you expect to hear 'Roll Tide'?",
			answer: " D) Alabama"
		},
		{	question:"Where were Forrest Gump and Jenny from?",
			answer: " B) Greenbow, Alabama"
		},
		{	question:"All Glory to the Hypnotoad", 
			answer: " All Glory to the Hypnotoad"
		}
	];
//array of answers wherein one of the choices in each array will return 
//a boolean = true when compared to the questionList[i].answer
var answerList = [
		["Yes", "False", "Javascript == Greek", "jQuery helps"],
		["Tomorrowland", "Futurama", "New York World Exposition", "Man, Nature, Technology" ],
		["Stephen Hawking", "Albert Einstein", "Isaac Newton", "Albert Hoffman"],
		["Henry Fonda", "Frank Sinatra", "Marlon Brando", "James Dean"],
		["Betty", "Georgia", "Julia", "Rebecca"],
		["Alduous Huxley", "George Orwell", "George R.R. Martin", "J.R. Tolkien"],
		["Everybody Loves Hypnotoad", "Everybody Loves Hypnotoad","Everybody Loves Hypnotoad", "Everybody Loves Hypnotoad"],
		["Melbourne", "Sydney", "Canberra", "Queensland" ],
		["Mars", "Jupiter", "Uranus", "Earth"],
		["Oregon", "New York", "Texas", "Alabama"],
		["Tuscaloosa, Alabama", "Greenbow, Alabama", "Atlanta, Georgia", "Mobile, Alabama"],
		["All glory to the Hypnotoad", "All glory to the Hypnotoad", "All glory to the Hypnotoad","All glory to the Hypnotoad"],
];