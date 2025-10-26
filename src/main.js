document.addEventListener('DOMContentLoaded', function(){
	const buttons = document.querySelectorAll('[data-tab-button]');
	const questions = document.querySelectorAll('[data-faq-question]');
	const heroSection = document.querySelector('.hero');
	const alturaHero = heroSection.clientHeight;

	window.addEventListener('scroll', function(){
		const posicaoAtual = window.screenY;

		if(posicaoAtual<alturaHero){
			hideHeaderElements();
		} else{
			showHeaderElements();
		}
	})

	for (let i = 0; i<buttons.length; i++){
		buttons[i].addEventListener('click', function(botao){
		const abaAlvo = botao.target.dataset.tabButton;
		const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
		escondeTodasAsAbas();
		aba.classList.add('shows__list--is-active');
		
		removeBotaoAtivo();
		botao.target.classList.add('shows__tabs__buttons--is-active');
		})
	}

	for(let i = 0; i<questions.length; i++){
		questions[i].addEventListener('click', openClose);
	}
})

function hideHeaderElements(){
	const header = document.querySelector('header');
	header.classList.add('header--is-hidden');
}
function showHeaderElements(){
	const header = document.querySelector('header');
	header.classList.remove('header--is-hidden');
}


function openClose(elemento){
	const classe = 'faq__questions__item--is-open';
	const elementoPai = elemento.target.parentNode;

	elementoPai.classList.toggle(classe); 
}

function removeBotaoAtivo(){
		const buttons = document.querySelectorAll('[data-tab-button]');
		for (let i = 0; i<buttons.length; i++){
			buttons[i].classList.remove('shows__tabs__buttons--is-active');
		}
}

function escondeTodasAsAbas(){
	const tabContainer = document.querySelectorAll('[data-tab-id]');
	
	for (let i = 0; i<tabContainer.length; i++){
		tabContainer[i].classList.remove('shows__list--is-active')
	}
}