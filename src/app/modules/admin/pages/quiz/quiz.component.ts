import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminForm } from '../../admin.form';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
})
export class QuizComponent {
  @ViewChild('audio') audio!: any;
  answers = [
    {
      name: 'Chleb',
      value: 0,
    },
    {
      name: 'Woda',
      value: 1,
    },
    {
      name: 'Ziemniak',
      value: 2,
    },
    {
      name: 'Jabłko',
      value: 3,
    },
  ];
  counter = 1;
  questions = [
    {
      audioName: 'water',
      correctAnswer: 1,
      audioSrc: 'assets/audio/water.mp3',
      answers: [
        {
          name: 'Chleb',
          value: 0,
        },
        {
          name: 'Woda',
          value: 1,
        },
        {
          name: 'Ziemniak',
          value: 2,
        },
        {
          name: 'Jabłko',
          value: 3,
        },
      ],
    },
    {
      audioName: 'dog',
      audioSrc: 'assets/audio/dog.mp3',
      correctAnswer: 0,
      answers: [
        {
          name: 'Pies',
          value: 0,
        },
        {
          name: 'Kot',
          value: 1,
        },
        {
          name: 'Tygrys',
          value: 2,
        },
        {
          name: 'Krowa',
          value: 3,
        },
      ],
    },
    {
      audioName: 'table',
      audioSrc: 'assets/audio/table.mp3',
      correctAnswer: 0,
      answers: [
        {
          name: 'Stół',
          value: 0,
        },
        {
          name: 'Krzesło',
          value: 1,
        },
        {
          name: 'Ściana',
          value: 2,
        },
        {
          name: 'Szafa',
          value: 3,
        },
      ],
    },
    {
      audioName: 'apple',
      audioSrc: 'assets/audio/apple.mp3',
      correctAnswer: 1,
      answers: [
        {
          name: 'Gruszka',
          value: 0,
        },
        {
          name: 'Jabłko',
          value: 1,
        },
        {
          name: 'Kiwi',
          value: 2,
        },
        {
          name: 'Ananas',
          value: 3,
        },
      ],
    },
    {
      audioName: 'keyboard',
      audioSrc: 'assets/audio/keyboard.mp3',
      correctAnswer: 2,
      answers: [
        {
          name: 'Słuchawki',
          value: 0,
        },
        {
          name: 'Głośnik',
          value: 1,
        },
        {
          name: 'Klawiatura',
          value: 2,
        },
        {
          name: 'Mikrofon',
          value: 3,
        },
      ],
    },
    {
      audioName: 'animal',
      audioSrc: 'assets/audio/animal.mp3',
      correctAnswer: 0,
      answers: [
        {
          name: 'Zwierzę',
          value: 0,
        },
        {
          name: 'Roślina',
          value: 1,
        },
        {
          name: 'Kobieta',
          value: 2,
        },
        {
          name: 'Mężczyzna',
          value: 3,
        },
      ],
    },
    {
      audioName: 'car',
      audioSrc: 'assets/audio/car.mp3',
      correctAnswer: 3,
      answers: [
        {
          name: 'Rower',
          value: 0,
        },
        {
          name: 'Rolki',
          value: 1,
        },
        {
          name: 'Łyżwy',
          value: 2,
        },
        {
          name: 'Samochód',
          value: 3,
        },
      ],
    },
    {
      audioName: 'plane',
      audioSrc: 'assets/audio/plane.mp3',
      correctAnswer: 3,
      answers: [
        {
          name: 'Helikopter',
          value: 0,
        },
        {
          name: 'Pociąg',
          value: 1,
        },
        {
          name: 'Tramwaj',
          value: 2,
        },
        {
          name: 'Samolot',
          value: 3,
        },
      ],
    },
    {
      audioName: 'money',
      audioSrc: 'assets/audio/money.mp3',
      correctAnswer: 2,
      answers: [
        {
          name: 'Owoce',
          value: 0,
        },
        {
          name: 'Warzywa',
          value: 1,
        },
        {
          name: 'Pieniądze',
          value: 2,
        },
        {
          name: 'Rośliny',
          value: 3,
        },
      ],
    },
    {
      audioName: 'country',
      audioSrc: 'assets/audio/country.mp3',
      correctAnswer: 1,
      answers: [
        {
          name: 'Kontynent',
          value: 0,
        },
        {
          name: 'Kraj',
          value: 1,
        },
        {
          name: 'Miasto',
          value: 2,
        },
        {
          name: 'Województwo',
          value: 3,
        },
      ],
    },
  ];

  currentQuestion!: any;
  selectedAnswer!: any;
  correctAnwersNumber = 0;

  constructor(private router: Router, private adminForm: AdminForm) {}

  ngOnInit() {
    this.currentQuestion = this.questions[0];
  }

  ngAfterViewInit() {
    console.log(this.audio);
  }

  getQuestionLetter(index: number) {
    if (index === 0) {
      return 'A';
    } else if (index === 1) {
      return 'B';
    } else if (index === 2) {
      return 'C';
    } else if (index === 3) {
      return 'D';
    }
    return '';
  }

  chooseAnswer(answer: any) {
    this.selectedAnswer = answer;
  }

  confirmQuestion() {
    if (this.selectedAnswer.value === this.currentQuestion.correctAnswer) {
      this.adminForm.points += 1;
    }
    this.selectedAnswer = null;
    this.counter++;
    this.currentQuestion = this.questions[this.counter - 1];

    if (this.counter - 1 === this.questions?.length) {
      this.router.navigate(['/admin/success']);
    } else {
      this.audio.nativeElement.src = this.currentQuestion.audioSrc;
    }
  }
}
