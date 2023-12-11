import { AppState } from "../AppState.js"
import { questionsService } from "../services/QuestionsService.js"


function _drawQuestionsCards() {
    const questions = AppState.questions
    let content = ''
    questions.forEach(question => content += question.questionPrompt)
    document.getElementById('game-area').innerHTML = content
}

export class QuestionsController {
    constructor() {
        console.log('Q Controller loaded')
        AppState.on('questions', _drawQuestionsCards)
        this.grabQuestions()
        _drawQuestionsCards()

    }
    async grabQuestions() {
        console.log('getting Questions in controller')
        await questionsService.grabQuestionsGames()
    }
    playQuestion(questionId) {
        console.log('playing this Q')
        questionsService.playQuestion(questionId)
    }
}