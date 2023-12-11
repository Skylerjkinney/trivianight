import { generateId } from "../utils/GenerateId.js"



export class Question {
    constructor(data) {
        this.difficulty = data.difficulty
        this.category = data.category
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answers = data.incorrect_answers
    }

    get questionPrompt() {
        return `<div class = "col-6 border border-light bg-info card rounded d-flex justify-content-center'>
        <h1> ${this.category} </h1>
        <h2> ${this.question} </h2>
        <h3> ${this.difficulty} </h3>
        <button class = 'btn btn-primary' onclick = 'app.QuestionsController.playQuestion()'>PLAY</button>
        <div class ='card' id = "real-question"> </div>
        </div>
        `
    }
    get realQuestion() {
        return `
        <span> ${this.incorrect_answers} ${this.correct_answer} </span>
        `
    }
}