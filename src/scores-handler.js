export default 'Revelacion';
const gameID = 'T4KGYhdcz0Eopls7HahX';
const rootURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const requestURL = `${rootURL}/games/${gameID}/scores`;

const requestHeader = {
  'Content-type': 'application/json; charset=UTF-8',
};

export const getScores = () => fetch(requestURL, {
  method: 'GET',
})
  .then((response) => response.json())
  .then((data) => data.result.sort(
    (score1, score2) => score2.score - score1.score,
  ));

export const submitScore = async (user, score) => fetch(requestURL, {
  method: 'POST',
  body: JSON.stringify({ user, score }),
  headers: requestHeader,
}).then((response) => response.json());
