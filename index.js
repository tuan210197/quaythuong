// Generate a large list of names (10,000 names for example)
const names = Array.from({ length: 100000 }, (_, i) => `Person ${i + 1}`);
let winners = [];

document.getElementById('pickWinner').addEventListener('click', () => {
    const winnerElement = document.getElementById('winner');
    const winnersList = document.getElementById('winnersList');

    // Simulate rolling effect with faster speed
    const interval = setInterval(() => {
        winnerElement.textContent = names[Math.floor(Math.random() * names.length)];
    }, 20); // Faster speed

    // Stop after 10 seconds and select a random winner
    setTimeout(() => {
        clearInterval(interval);
        const winner = names[Math.floor(Math.random() * names.length)];
        winnerElement.textContent = winner;
        winners.push(winner);

        // Update winners list
        const li = document.createElement('li');
        li.textContent = winner;
        winnersList.appendChild(li);
    }, 10000);
});