

//object containing questions and answers
var appObject = {
	"Is Javascript easier than it looks?" : true,
	"Is futurama better than the Big Bang Theory?" : true,
	"Which of these scientists was in Futurama?" : "Stephen Hawking",
	"Who starred in the hit 1955 'Rebel Without a Case'?" : "James Dean",
	"Who is Winston's lover in '1984'?" : "Julia",
	"Who wrote '1984'?" : "George Orwell", 
	"Everybody Loves Hypnotoad." : true,
	"What is the capital of Australia" : "Canberra",
	"What was the first planet to be discovered in 1781" : "Uranus",
	"Where would you expect to hear 'Roll Tide'?" : "Alabama",
	"Where were Forrest Gump and Jenny from?" : "Greenbow, Alabama",
	"All Glory to the Hypnotoad" : true,
};

	//Declared Variables
var property;
var questionsTime;
var x;
var writeQuestion = (Object.getOwnPropertyNames(appObject));
	//This was 'called' as a test
	console.log("question Array?? is made from writeQuestion: " + writeQuestion);

function getQ() {//I hope to use getQ to $.html the questions into the html on the fly
	for (var i = 0; i < writeQuestion.length; i++)
		console.log(writeQuestion[i]);
	//This writes the question the html box
	$("#chaseQuest").html(writeQuestion[i]);
};

function displayQ() {
	if (writeQuestion.indexOf("Is Javascript easier than it looks?") === writeQuestion[0])
	console.log("holy shit"); //fun fact - I couldn't get it to holy shit
	
};


//these 
getQ();
console.log(Object.entries(appObject));
displayQ();