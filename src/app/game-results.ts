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
    _id?: string;
    game?: number;
    user?: string;
    teamY?: number;
    teamX?: number;
    round?: any; 
    money?: number = 0; //adding a question mark makes it optional
    squareWinner?: number;
    squareLoser?: number;
    winningScore?: any;
    losingScore?: any;
}

export class Winningusers {
    round: string;
    money: number = 0;
    user: string;
    squareWinner: number;
    squareLoser: number;
    winningScore: any;
    losingScore: any;
}