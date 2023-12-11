import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { QuestionsController } from "./controllers/QuestionsController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController, ExamplesController, QuestionsController],
    view: /*html*/`
    <div class="bg-white p-3">
      <div class="card-body">
        <p>Home Page</p>
        <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])