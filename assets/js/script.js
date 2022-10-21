//On attend que la page soit chargée avant de faire du JS
window.addEventListener("DOMContentLoaded", (event) => {

	//On récupère la div 'jour'
	var $jours = $('.jour');

	//On récupère la div 'bullets', et le span 'entypo-record'
	var $puces = $('.bullets .entypo-record');

	//Fonction d'initialisation
	function init(){
		//On crée un timer, qui exécutera le code contenu 2 secondes plus tard
		setTimeout(function(){
			$('body').addClass('isok');
			//On cache la div jour
			$jours.hide();
			//Effet animation fondu
			$('.wrapper').fadeIn('slow', function(){
				//Effet animation fondu sur la div jour
				$jours.first().fadeIn('slow');
				//Changement de la puce en surbrillance
				$puces.removeClass('active').first().addClass('active');
			});
		}, 2000);
	}
	
	//Code exécuté quand on cliquera sur une puce
	$puces.click(function(){
		//On récupère la puce cliquée
		var $this = $(this);

		//On récupère l'attribut 'data-cible'
		var cible = $this.attr('data-cible');

		//On cache la div jour
		$jours.hide();

		//Effet animation fondu sur la div jour
		$($jours.get(cible)).fadeIn()
		//On enlève toutes les puces en surbrillance
		$puces.removeClass('active');
		//On met la puce cliquée en surbrillance
		$this.addClass('active');
	});
	//On lance la fonction d'initialisation
	init();
  });