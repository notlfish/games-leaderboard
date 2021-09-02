import './style.css';
import gameName, { getScores, submitScore } from './scores-handler';
import displayScores from './display-scores';

const scoresUL = document.getElementById('scoreboard');

const loadScores = () => getScores().then((scores) => {
  const html = displayScores(scores);
  if (html) {
    scoresUL.innerHTML = html;
    scoresUL.classList.add('borders');
  } else {
    scoresUL.classList.remove('borders');
  }
});

const refreshButton = document.getElementById('refresh-scoreboard');
refreshButton.addEventListener('click', loadScores);
window.onload = () => {
  const title = document.getElementById('page-title');
  title.innerHTML += ` - ${gameName}`;
  loadScores();
};

const newScore = document.getElementById('new-score');
const newScorePlayer = document.getElementById('player-name');
const newScoreScore = document.getElementById('player-score');

newScore.addEventListener('submit', (event) => {
  event.preventDefault();
  const player = newScorePlayer.value;
  const scoreStr = newScoreScore.value;
  const score = parseInt(scoreStr, 10);
  const scoreError = document.querySelector('.form-error');
  if (player && !Number.isNaN(score) && score.toString() === scoreStr) {
    scoreError.classList.add('hidden');
    submitScore(player, score).then(() => {
      newScoreScore.value = '';
      newScorePlayer.value = '';
    });
  } else {
    newScoreScore.value = '';
    newScorePlayer.value = '';
    scoreError.classList.remove('hidden');
  }
});
