function getCocktails(){

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2789a99de3msh754a95265d5439ap110279jsn27f988c1f2fd',
		'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
	}
};

fetch('https://drinks-digital1.p.rapidapi.com/v1/cocktails?limit=25', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

getCocktails()