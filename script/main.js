function flipCard(){
	var i,
			cards = document.querySelectorAll('.card.effect__click');

	for (i = 0; i < cards.length; i++ ){
		var card = cards[i];
		clickListener(card);
	}
}

function clickListener(card){
	card.addEventListener('click', function(){
		var c = this.classList;
		c.contains('flipped') ? c.remove('flipped') : c.add('flipped');
	});
}

function fetchStaff() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var response = JSON.parse(xhr.responseText);
			renderContacts(response.results);
		}
	}
	xhr.open('GET', 'https://randomuser.me/api/?results=20&inc=name,email,picture&nat=us');
	xhr.send();
}

function renderContacts(data) {
	var parent = document.querySelector('.cards-container');

	data.forEach(function (contact) {
		var html = `
			<div class="card effect__click">
				<div class="card__front">
					<img class="img-circle" src="${contact.picture.medium}" alt="Profile">
					<div class="card__text">
						<h3>Name: ${titleCase(contact.name.first)} ${titleCase(contact.name.last)}</h3>
						<h3>Title:</h3>
						<h3>Email: ${contact.email}</h3>
					</div>
				</div>
				<div class="card__back">
					<div class="card__text">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis magnam quod maiores id ab placeat perspiciatis officiis. Magni similique ullam aliquid labore quos aliquam, et quo nesciunt inventore est soluta!</p>
					</div>
				</div>
			</div>`;
		var div = document.createElement('div');
		div.innerHTML = html;
		parent.appendChild(div);
	})

	flipCard();
}

function titleCase(str) {
	return str.replace(/\w\S*/g, function(txt){
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

function init() {
	fetchStaff();
}

init();