var zodiac = [
	{
		sign: "aquarius",
		image: "https://i.imgur.com/KiTdhOQ.jpg"
	},
	{
		sign: "aries",
		image: "https://i.imgur.com/wCqWZJX.jpg"
	},
	{
		sign: "cancer",
		image: "https://i.imgur.com/ls4p05x.jpg"
	},
	{
		sign: "capricorn",
		image: "https://i.imgur.com/7vqq0nQ.jpg"
	},
	{
		sign: "gemini",
		image: "https://i.imgur.com/CdF9iVZ.jpg"
	},
	{
		sign: "leo",
		image: "https://i.imgur.com/1PPiw1C.jpg"
	},
	{
		sign: "libra",
		image: "https://i.imgur.com/K2X9RuT.jpg"
	},
	{
		sign: "pisces",
		image: "https://i.imgur.com/Por1t3z.jpg"
	},
	{
		sign: "sagittarius",
		image: "https://i.imgur.com/fkh9u71.jpg"
	},
	{
		sign: "scorpio",
		image: "https://i.imgur.com/lFc4BSA.jpg"
	},
	{
		sign: "taurus",
		image: "https://i.imgur.com/Q05f9UB.jpg"
	},
	{
		sign: "virgo",
		image: "https://i.imgur.com/plz0gVp.jpg"
	}
	
];

var btn = document.getElementById('userdata');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		horo();
	};
}, false);

function horo() {

	var userdata = document.getElementById("userdata");
	var disp = document.getElementById("disp");

	console.log("users value is: " + userdata.value);

	for(var i = 0; i < zodiac.length; i++) {

		console.log("lowercase: " + userdata.value.toLowerCase());	
		console.log("sign is: " + zodiac[i].sign);

		if(zodiac[i].sign == userdata.value.toLowerCase()) {
			console.log("found");
			document.getElementById('sign').textContent = userdata.value;
			document.getElementById("image").src = zodiac[i].image;

			return;
		}

		

	}
	alert("no match");



}
