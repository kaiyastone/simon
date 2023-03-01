function loadScores() {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
        scores = JSON.parse(scoresText);
    }
    
    const tableBodyE1 = document.querySelector('scores');

    if (scores.length) {
        for (const [i, socre] of scores.entries()) {
            const positionTdE1 = document.createElement('td');
            const nameTdEl = document.createElement('td');
            const scoreTdEl = document.createElement('td');
            const dateTdEl = document.createElement('td');

            positionTdE1.textContent = i + 1;
            nameTdEl.textContent = score.name;
            scoreTdEl.textContent = score.score;
            dateTdEl.textContent = score.date;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(positionTdEl);
            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(scoreTdEl);
            rowEl.appendChild(dateTdEl);

            tableBodyEl.appendChild(rowEl);
        }       
    }
    else {
        tableBodyE1.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
    }
}

loadScores();