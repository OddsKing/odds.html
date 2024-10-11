document.addEventListener('DOMContentLoaded', function() {
    const gamesList = document.getElementById('games-list');
    const winningTicket = document.getElementById('winning-ticket');

    // Sample data
    const games = [
        { teamA: 'Team A', teamB: 'Team B', odds: '1.5 / 2.5' },
        { teamA: 'Team C', teamB: 'Team D', odds: '1.8 / 1.9' }
    ];

    const ticket = {
        teams: 'Team A vs Team B',
        bet: 'Team A',
        payout: '150'
    };

    // Insert games data
    games.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('match');
        gameDiv.innerHTML = `${game.teamA} vs ${game.teamB} <span class="odds">${game.odds}</span>`;
        gamesList.appendChild(gameDiv);
    });

    // Insert winning ticket data
    winningTicket.innerHTML = `<p>Teams: ${ticket.teams}</p><p>Bet: ${ticket.bet}</p><p>Payout: ${ticket.payout}</p>`;
});
