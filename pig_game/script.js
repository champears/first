'use strict';

// Задаём каждому элементу свою переменную
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Стартовое состояние
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Бросок Кубика
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Создание случайного числа кубика
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Отоброжение правильной картинки на экране
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Если не выпало 1
    if (dice !== 1) {
      // добавляем к числу в этом раунде
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Меняем игрока(Теперь ход другого игрока)
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {// true по умолчанию
    // 1. добавляем счет раунда к общему значению
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Проверяем, не набрал ли игрок 100 очков
    if (scores[activePlayer] >= 100) {
      // Набрал, значит заканчиваем ЭТУ игру
      playing = false;
      diceEl.classList.add('hidden');
      

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // меняем игрока
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
