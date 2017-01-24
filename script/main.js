flipCard();

function flipCard(){
	var cards = document.querySelectorAll('.card.effect__click');
	for ( i = 0; cards.length; i++ ){
		var card = cards[i];
		clickListener(card);
	}
}

function clickListener(card){
	card.addEventListener('click', function(){
		var c = this.classList;
		c.contains('flipped') === true ? c.remove('flipped') : c.add('flipped');
	});
}