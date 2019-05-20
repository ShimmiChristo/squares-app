export class Gameresults {
    _id: string;
    game: number;
    teamOne: number;
    teamTwo: number;
}

export class Ncaaresults {
    round: string;
    date: string;
    winner: string;
    winningScore: string;
    loser: string;
    losingScore: string;
}

export class Squareresults {
    _id: string;
    game: number;
    user: string;
    teamY: number;
    teamX: number;
    round: string;
}

export class Winningnumbers {
    _id: string;
    round: string;
    money: number;
    user: string;
    squareWinner: number;
    squareLoser: number;
    winningScore: number;
    losingScore: number;
    game: number;
    teamY: number;
    teamX: number;
}