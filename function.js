export function didUserWin(userThrow, computerThrow) {


    if (userThrow === computerThrow) return 'draw';
    else if (userThrow === 'rock' && computerThrow === 'scissors') return 'win';
    else if (userThrow === 'paper' && computerThrow === 'rock') return 'win';
    else if (userThrow === 'scissors' && computerThrow === 'paper') return 'win';
    else return 'lose';

}