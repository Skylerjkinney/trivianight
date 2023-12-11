import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"


class QuestionsService {


    async grabQuestions() {
        let response = await fetch("https://opentdb.com/api.php?amount=15&category=15&type=multiple")
        console.log('incoming', response)
        let body = await response.json()
        console.log('Translating', body)
        let newQuestions = body.results.map(questionData => new Question(questionData))
        console.log('new Q', newQuestions)
        AppState.questions = newQuestions
    }
    playQuestion(questionId) {
        let theQuestion = AppState.questions.find(question => question.id == questionId)
        console.log('Found this in service', theQuestion)
        // document.getElementById("real-question").innerHTML = theQuestion.realQuestion()
    }




}

export const questionsService = new QuestionsService