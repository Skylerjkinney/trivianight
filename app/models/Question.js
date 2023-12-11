


export class QuestionModel {
    constructor(data) {
        this.difficulty = data.difficulty
        this.category = data.category
        // this.question = data.question
        // this.correct_answer = data.correct_answer
        // this.incorrect_answers = data.incorrect_answers
    }

    get questionPrompt() {
        return `
        <h1> ${this.category} </h1>
        <h3> ${this.difficulty} </h3>
        `
    }
}