var zodiac = [
	{
		sign: "aquarius",
		image: "img/aquarius.jpg"
	},
	{
		sign: "aries",
		image: "img/aries.jpg"
	},
	{
		sign: "cancer",
		image: "img/cancer.jpg"
	},
	{
		sign: "capricorn",
		image: "img/capricorn.jpg"
	},
	{
		sign: "gemini",
		image: "img/gemini.jpg"
	},
	{
		sign: "leo",
		image: "img/leo.jpg"
	},
	{
		sign: "libra",
		image: "img/libra.jpg"
	},
	{
		sign: "pisces",
		image: "img/pisces.jpg"
	},
	{
		sign: "sagittarius",
		image: "img/sagittarius.jpg"
	},
	{
		sign: "scorpio",
		image: "img/scorpio.jpg"
	},
	{
		sign: "taurus",
		image: "img/taurus.jpg"
	},
	{
		sign: "virgo",
		image: "img/virgo.jpg"
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
