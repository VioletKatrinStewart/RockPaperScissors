export function didUserWin(userThrow, computerThrow) {

    console.log(computerThrow, userThrow);


    if (userThrow === computerThrow) {
        return 0;
    } else if (userThrow === 'rock' && computerThrow === 'scissors') {
        return 1;
    } else if (userThrow === 'paper' && computerThrow === 'rock') {
        return 1;
    } else if (userThrow === 'scissors' && computerThrow === 'paper') {
        return 1;
    } else {
        return 2;
    }
}

export function getRandomThrow() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}