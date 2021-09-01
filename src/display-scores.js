export default (scores) => scores.reduce((acc, scoreEntry) => `${acc}
     <li>
       <span class="player-name">${scoreEntry.user}:</span>
       <span class="player-score">${scoreEntry.score}</span>
     </li>`, '');
