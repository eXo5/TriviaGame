$(document).ready(function() {
// Loads the trivia title page on window load
	function welcomeToTriviaChase() {
		welcomePage = "<h1>Welcome</h1><br><p>Please Press 'Start Game' to begin.</p>" + "<div class='ui-block-b'><button id='startGame'>Start Game</button></div>";
	$("#trivialChase").html(welcomePage);
	};

welcomeToTriviaChase();
// on click event for start button

});//close document on load
	$("#trivialChase").on("click", "#startGame", function(){
		i++;
		showQuestion();
		//time();
	});//close onClick

	$("#trivialChase").on("click", ".answer", function(){
		clearInterval();
		response = $(this).text();
		console.log($(this).text());
		if((i === 6) || (i === 12)) {
			correct();
	
		}
		else if(response == questionList[i].answer){
			//clearInterval(countDown);
			correct();
		}	
			else {
				clearInterval(countDown);
				wrong();
			}	
	});

//var list
var welcomePage;
var qT = 20; //question timer: 15 seconds
var aloePlant;//main var for .html
var response;
var score = 0;
var wrongScore = 0;
var noResponse = 0;
var i = -1;
var countDown = setInterval(decrement,1000);
//func list

//function time(){
	 //countDown = setInterval(decrement,1000)
//timers ARE HARD. Timer currently loads on document.ready and if you run out of time it starts to iterate through the answers in console. 
	 //Timer got defined entirely in one spot inside of the var list.
	 function decrement() {
		if (qT>0) {
			qT--
			$("#countDown").html("<h2><span id='countDown'>" + qT + "</span></h2>")
		}
		if (qT === 0) {
			//timeOut();
			$("#countDown").html("<h2>Times UP!</h2>");
			clearInterval(countDown);
			function timeOut() {
				clearInterval(countDown);
				noResponse++;
				aloePlant = "<h1>Whoops!</h1><p>Looks like you ran out of time.</p><p>The correct answer was " + questionList[i].answer + ".</p>"
				$("#trivialChase").html(aloePlant);
			}	
			i++;
			setTimeout(showQuestion,4000);

			console.log(clearInterval(countDown));
		}
	}
	
//}
function showQuestion() {
		qT = 20;
	aloePlant = "<h1><span id='countDown'><br>" + countDown + "</span></h1>" + "<div class='question'><h2 class='quest'>" + questionList[i].question + "</h2></div>" + "<div id='answers'>" + "<h3 class='first answer'>A) " + answerList[i][0] + "</h3><h3 class='answer'>B) " + answerList[i][1] +  "</h3><h3 class='answer'>C) " + answerList[i][2] + "</h3><h3 class='answer'>D) " + answerList[i][3] + " </h3></div>";
	$("#trivialChase").html(aloePlant);
}

function correct() {
	clearInterval();
	score++;
	aloePlant = "<h1>Congratulations!<br><br>" + questionList[i].answer + " is correct!"
	$("#trivialChase").html(aloePlant);
	if (i<12) {
		
		i++;
		setTimeout(showQuestion,3000);
		}
	else { }
console.log(questionList[i].question);

	}


function wrong(){
 	clearInterval();
 	wrongScore++;
 	aloePlant = "<h1><br>Sorry!</h1><br><h2> The correct answer was " + questionList[i].answer + ".</h2>"
 	$("#trivialChase").html(aloePlant);
 	if (i<12) {
		i++;
		setTimeout(showQuestion,4000);
		}
	else { }
console.log(questionList[i].question);
}

//object containing questions and corresponding answers.
var questionList = [
		{ 	question: "Is Javascript easier than it looks?", //If you've had your coffee.
			answer: "A) Yes"
		},
		{
			question: "Which of the following was a 1939 World's Fair exhibit in New York?",
			answer : "B) Futurama"
		},
		{
			question:"Which of these scientists voiced himself in Futurama?",
			answer : "A) Stephen Hawking"
		},
		{
			question:"Who starred in the hit 1955 'Rebel Without a Case'?",
			answer: "D) James Dean"
		},
		{	question:"Who is Winston's lover in '1984'?",
			answer : "C) Julia"
		},
		{	question:"Who wrote '1984'?",
			answer: "B) George Orwell"
		} ,
		{	question:"What is the greatest television show of the year 3000?",
			answer: "Everybody Loves Hypnotoad"
		},
		{
			question:"What is the capital of Australia", 
			answer: "C) Canberra"
		},
		{
			question:"What was the first planet to be discovered in 1781", 
			answer: "C) Uranus"
		},
		{	question:"Where would you expect to hear 'Roll Tide'?",
			answer: "D) Alabama"
		},
		{	question:"Where were Forrest Gump and Jenny from?",
			answer: "B) Greenbow, Alabama"
		},
		{	question:"All Glory to the Hypnotoad", 
			answer: "All Glory to the Hypnotoad"
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

function kitkat(){//need to iterate into next page i++, need to call the HTML onto the page, need to reset the countdown and call the time function again, else show the results page
	if (i<12) {
		
		i++;
		//setTimeout(showQuestion,4000)
		}
	else { }
console.log(questionList[i].question);

}
