const player1 = "O";
let p1 = "";
const player2 = "X";
let p2 = "";
const restart = document.querySelector(".reset");

const wrapper = document.querySelector(".wrapper");
let round = 1;
const winner = document.querySelector(".winner");
console.log(winner.textContent);

const boxes = [...document.querySelectorAll(".box")];
boxes.forEach((box) => box.addEventListener("click", pick));

function pick(event) {
	const turn = round % 2 === 0 ? player2 : player1;
	// console.log(turn);
	// console.log(event.target.id);
	// console.log(p1);
	let number = event.target.id;
	if (turn == "O") {
		p1 = p1 + `${number}`;
	} else {
		p2 = p2 + `${number}`;
	}
	event.target.classList.add("test");
	event.target.textContent = turn;
	round++;
	if (
		p1 === "147" ||
		p1 === "741" ||
		p1 === "471" ||
		p1 === "471" ||
		p1 === "174" ||
		p1 === "714" ||
		p1 === "258" ||
		p1 === "285" ||
		p1 === "528" ||
		p1 === "582" ||
		p1 === "852" ||
		p1 === "825" ||
		p1 === "369" ||
		p1 === "396" ||
		p1 === "639" ||
		p1 === "693" ||
		p1 === "936" ||
		p1 === "963" ||
		p1 === "123" ||
		p1 === "132" ||
		p1 === "213" ||
		p1 === "231" ||
		p1 === "312" ||
		p1 === "321" ||
		p1 === "456" ||
		p1 === "465" ||
		p1 === "546" ||
		p1 === "564" ||
		p1 === "645" ||
		p1 === "654" ||
		p1 === "789" ||
		p1 === "798" ||
		p1 === "879" ||
		p1 === "897" ||
		p1 === "978" ||
		p1 === "987" ||
		p1 === "159" ||
		p1 === "195" ||
		p1 === "519" ||
		p1 === "591" ||
		p1 === "915" ||
		p1 === "951" ||
		p1 === "357" ||
		p1 === "375" ||
		p1 === "537" ||
		p1 === "573" ||
		p1 === "735" ||
		p1 === "753"
	) {
		console.log(`Gracz nr1 wygrał`);
		winner.textContent = "Wygrał gracz nr 1";
		boxes.forEach((box) => box.classList.add("test"));
		// wrapper.classList.add('test')
		return console.log("Koniec gry");
	} else if (
		p2 === "147" ||
		p2 === "741" ||
		p2 === "471" ||
		p2 === "471" ||
		p2 === "174" ||
		p2 === "714" ||
		p2 === "258" ||
		p2 === "285" ||
		p2 === "528" ||
		p2 === "582" ||
		p2 === "852" ||
		p2 === "825" ||
		p2 === "369" ||
		p2 === "396" ||
		p2 === "639" ||
		p2 === "693" ||
		p2 === "936" ||
		p2 === "963" ||
		p2 === "123" ||
		p2 === "132" ||
		p2 === "213" ||
		p2 === "231" ||
		p2 === "312" ||
		p2 === "321" ||
		p2 === "456" ||
		p2 === "465" ||
		p2 === "546" ||
		p2 === "564" ||
		p2 === "645" ||
		p2 === "654" ||
		p2 === "789" ||
		p2 === "798" ||
		p2 === "879" ||
		p2 === "897" ||
		p2 === "978" ||
		p2 === "987" ||
		p2 === "159" ||
		p2 === "195" ||
		p2 === "519" ||
		p2 === "591" ||
		p2 === "915" ||
		p2 === "951" ||
		p2 === "357" ||
		p2 === "375" ||
		p2 === "537" ||
		p2 === "573" ||
		p2 === "735" ||
		p2 === "753"
	) {
		boxes.forEach((box) => box.classList.add("test"));
		console.log(`Gracz nr2 wygrał`);
		winner.textContent = "Wygrał gracz nr 2";
		// wrapper.classList.add('test')
		return console.log("Koniec gry");
	}
}

const reset = () => {
	p1 = "";
	p2 = "";
	winner.textContent = "";
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].classList.remove("test");
		boxes[i].textContent = "";
	}
};
restart.addEventListener("click", reset);
