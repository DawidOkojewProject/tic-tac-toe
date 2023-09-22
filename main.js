const restart = document.querySelector(".reset");
const wrapper = document.querySelector(".wrapper");
const winner = document.querySelector(".winner");
const boxes = [...document.querySelectorAll(".box")];

const player1 = "O";
let p1 = [];
const player2 = "X";
let p2 = [];
let round = 1;

const winningNumbers = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
];

function checkWin(playerMoves) {
	for (const winningNumber of winningNumbers) {
		const isWinningCombination = winningNumber.every((num) =>
			playerMoves.includes(num)
		);
		if (isWinningCombination) {
			return true;
		}
	}
	return false;
}

function pick(event) {
	const turn = round % 2 === 0 ? player2 : player1;
	const number = event.target.id;

	if (turn === player1) {
		p1.push(Number(number));
	} else {
		p2.push(Number(number));
	}

	event.target.classList.add("test");
	event.target.textContent = turn;
	round++;

	if (checkWin(p1)) {
		console.log("Gracz nr1 wygrał");
		winner.textContent = "Wygrał gracz nr 1";
		boxes.forEach((box) => box.classList.add("test"));
	} else if (checkWin(p2)) {
		console.log("Gracz nr2 wygrał");
		winner.textContent = "Wygrał gracz nr 2";
		boxes.forEach((box) => box.classList.add("test"));
	} else if (round > 9) {
		winner.textContent = "Remis";
		console.log("Remis");
	}
}

const reset = () => {
	p1 = [];
	p2 = [];
	round = 1;
	winner.textContent = "";
	boxes.forEach((box) => {
		box.classList.remove("test");
		box.textContent = "";
	});
};

restart.addEventListener("click", reset);
boxes.forEach((box) => box.addEventListener("click", pick));
