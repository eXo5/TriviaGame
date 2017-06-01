$(document).ready(function() {
// Loads the trivia title page on window load
	function welcomeToTriviaChase() {
		welcomePage = "<h1> Time<br><span id='countDown'>" + qT + "</span></h1>" + "<div class='ui-block-b'><button id='startGame'>Start Game</button></div>";
	$("#trivialChase").html(welcomePage);
	}

welcomeToTriviaChase();
// on click event for start button	
	$("#startGame").on("click", function(){
		gameHTML();
		pineapples();
	});//close trivia
});//close window load

//object containing questions and correct answers.
var questionList = [

		{ 	question: "Is Javascript easier than it looks?",
			answer: true
		},
		{
			question: "Which of the following was a 1939 World's Fair exhibit in New York?",
			answer : "Futurama"
		},
		{
			question:"Which of these scientists voiced himself in Futurama?",
			answer : "Stephen Hawking"
		},
		{
			question:"Who starred in the hit 1955 'Rebel Without a Case'?",
			answer: "James Dean"
		},
		{	question:"Who is Winston's lover in '1984'?",
			answer : "Julia"
		},
		{	question:"Who wrote '1984'?",
			answer: "George Orwell"
		} ,
		{	question:"What is the greatest television show of the year 3000?",
			answer: "Everybody Loves Hypnotoad"
		},
		{
			question:"What is the capital of Australia", 
			answer: "Canberra"
		},
		{
			question:"What was the first planet to be discovered in 1781", 
			answer: "Uranus"
		},
		{	question:"Where would you expect to hear 'Roll Tide'?",
			answer: "Alabama"
		},
		{	question:"Where were Forrest Gump and Jenny from?",
			answer: "Greenbow, Alabama"
		},
		{	question:"All Glory to the Hypnotoad", 
			answer: true}
	];

var answerList = [
		["true", "false"],
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
		["All glory to the Hypnotoad", "All glory to the Hypnotoad", "All glory to the Hypnotoad","All glory to the Hypnotoad"]
];

//kitakat = break page between questions
function kitkat(){//need to iterate into next page i++, need to call the HTML onto the page, need to reset the countdown and call the time function again, else show the results page
var i = 0;
//if(i < )
	if (i < 12) {
		i++;
console.log(i + ":" + answerList[i]);
setTimeout(kitkat,3000);
}
};

var welcomePage;
var countDown = setInterval(decrement,1000)
	function decrement(){
		qT--;
	};
var score = 0;
var wrongScore = 0;
var unanswered = 0;
var submitButton = false; //short for button property that will start
var qT=15; //question timer: 15 seconds