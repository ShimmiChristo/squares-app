export class Gameresults {
    _id: string;
    game: number;
    teamOne: number;
    teamTwo: number;
    round: string;
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
}

export class Winningnumbers {
    _id: string;
    game: number;
    user: string;
    teamY: number;
    teamX: number;
}