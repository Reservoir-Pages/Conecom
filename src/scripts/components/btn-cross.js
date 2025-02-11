const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
	const btn = card.querySelector(".card__btn");
	const content = card.querySelector(".card__text-full");

	btn.addEventListener("click", (e) => {
		e.preventDefault();

		cards.forEach((card) => {
			const btn = card.querySelector(".card__btn");
			const content = card.querySelector(".card__text-full");
			if (e.target !== btn) {
				btn.classList.remove("is-open");
				content.classList.remove("is-open");
			}
		});

		content.classList.toggle("is-open");
		btn.classList.toggle("is-open");
	});
});
