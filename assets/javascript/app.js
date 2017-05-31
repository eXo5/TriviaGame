

//object containing questions and answers
var questionList = [

		{ 	question: "Is Javascript easier than it looks?",
			answer: true
		},
		{
			question: "Is futurama better than the Big Bang Theory?",
			answer : true
		},
		{
			question:"Which of these scientists was in Futurama?",
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
		{	question:"Everybody Loves Hypnotoad.",
			answer: true
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

//questionList[0].question 
//if radiosubmitted == questionList[0].answer 
///onFormSubmit - jQuery to select element on form, selected element == questionList.[0].answer
//get selectedradio button getvalue

	//Declared Variables
var property;
var questionsTime;
	function checkQnA() {
	for (var i = 0; i < questionList.length; i++) {
		console.log(questionList[i].question);
		console.log(questionList[i].answer);
	$("#chaseQuest").append(questionList[i].question);
	}
}	
var writeQuestion = (Object.getOwnPropertyNames(questionList));
	//This was 'called' as a test
	console.log("var writeQuestion = (Object.getOwnPropertyNames(questionList)); :" + writeQuestion);

function getQ() {//I hope to use getQ to $.html the questions into the html on the fly
	for (var i = 0; i < questionList.length; i++)
		console.log(questionList[i]);

	var nextQuestion = $("<div>").html(questionList[i]);
	//This writes the question the html box
	
};

function displayQ() {
	if (questionList.indexOf("Is Javascript easier than it looks?") === writeQuestion[0])
	console.log("holy shit"); //fun fact - I couldn't get it to holy shit
	
};


//these 
//getQ();
console.log(Object.entries(questionList));
//displayQ();
checkQnA();