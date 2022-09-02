console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Alert!  The message was submitted successfully!  Alert!');
}

const picMouseover = () => {
	alert('Good lord, your smile is BLINDING me!  Me, in this specific scenario, being the rubber duck.')
}

let picture = document.querySelector('img');

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover', picMouseover)