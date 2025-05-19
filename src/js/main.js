// import stampResize from "./wl-modules/stamp";

window.addEventListener("DOMContentLoaded", function () {
	// stampResize();

	// ПАРАЛАКС ФОНА МОДАЛЬНОГО ОКНА
	let allParalax = document.querySelectorAll(".popup-bg");
	window.addEventListener("mousemove", function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;

		allParalax.forEach((bg) => {
			bg.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
		});
	});

	// СКРЫВАТЬ МОДАЛЬНОЕ ОКНО
	const openBtns = document.querySelectorAll("[data-popup-open]");
	const closeBtns = document.querySelectorAll("[data-popup-close]");
	const allPopups = document.querySelectorAll(".popup-modal");

	// ЗАКРЫВАЕМ НУЖНЫЙ ПО НУЖНОЙ КНОПКЕ
	openBtns.forEach((btn) => {
		btn.addEventListener("click", function () {
			const id = btn.getAttribute("data-popup-open");
			const popupWithId = document.querySelector(`[data-popup="${id}"]`);
			popupWithId && popupWithId.classList.add("show");			
		});
	});

	// ЗАКРЫВАЕМ ВСЕ ОТКРЫТЫЕ
	closeBtns.forEach((btn) => {
		btn.addEventListener("click", function () {
			allPopups.forEach((popup) => {
				popup.classList.remove("show");
			});
		});
	});
});
