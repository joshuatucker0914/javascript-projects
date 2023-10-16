//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class crewCandidate{
    constructor(name,mass,scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;

    }
    addScore(newScore){
        this.scores.push(newScore);
    }
    average() {
        if (this.scores.length === 0) {
            return 0;
        }
        let sum = this.scores.reduce((acc, score) => acc + score, 0);
        let avg = sum / this.scores.length;
        return Math.round(avg * 10) / 10;
    }
    status() {
        let averageScore = this.average();

        if (averageScore >= 90) {
            return "Accepted";
        } else if (averageScore >= 80) {
            return "Reserve";
        } else if (averageScore >= 70) {
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
}

let bubba = new crewCandidate("Bubba Bear",135,[88,85,90]);
let merry = new crewCandidate("Merry Maltese", 1.5, [93,88,97]);
let glad = new crewCandidate("Glad Gator",225, [75,78,62]);

bubba.addScore(83);
console.log(bubba.scores);
console.log(`${bubba.name} earned an average test score of ${bubba.average()}% and has a status of ${bubba.status()}.`);
console.log(`${merry.name} earned an average test score of ${merry.average()}% and has a status of ${merry.status()}.`);
console.log(`${glad.name} earned an average test score of ${glad.average()}% and has a status of ${glad.status()}.`);

/* a. Bubba Bear has a mass of 135 kg and test scores of 88, 85, and 90.
 b. Merry Maltese has a mass of 1.5 kg and test scores of 93, 88, and 97.
  c. Glad Gator has a mass of 225 kg and test scores of 75, 78, and 62.*/

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

//Reserve While Loop
let scoreAddCounter = 0;
while (glad.status() !== "Reserve") {
    // Generate a random score between 80 and 100 and add it to the scores
    const newScore = Math.floor(Math.random() * 21) + 80;
    glad.addScore(newScore);
    scoreAddCounter++;
}

console.log(`${glad.name} earned an average test score of ${glad.average()}% and has a status of ${glad.status()}.`);
console.log(`It took ${scoreAddCounter} scores to become a Reserve candidate.`);
//Accepted While Loop
let scoreAddCounter2 = 0;
while (glad.status() !== "Accepted") {
    // Generate a random score between 80 and 100 and add it to the scores
    const newScore = Math.floor(Math.random() * 11) + 90;
    glad.addScore(newScore);
    scoreAddCounter2++;
}
console.log(`${glad.name} earned an average test score of ${glad.average()}% and has a status of ${glad.status()}.`);
console.log(`It took ${scoreAddCounter2} scores to become a Reserve candidate.`);