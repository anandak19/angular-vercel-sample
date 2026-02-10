import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  score = 0;
  timeLeft = 30;
  gameOver = false;

  boxStyle = {
    top: '50%',
    left: '50%',
  };

  ngOnInit() {
    this.startTimer();
    this.moveBox();
  }

  startTimer() {
    const interval = setInterval(() => {
      this.timeLeft--;

      if (this.timeLeft === 0) {
        this.gameOver = true;
        clearInterval(interval);
      }
    }, 1000);
  }

  moveBox() {
    const top = Math.random() * 80;
    const left = Math.random() * 80;

    this.boxStyle = {
      top: `${top}%`,
      left: `${left}%`,
    };
  }

  boxClicked() {
    if (this.gameOver) return;

    this.score++;
    this.moveBox();
  }

  restart() {
    this.score = 0;
    this.timeLeft = 30;
    this.gameOver = false;
    this.startTimer();
    this.moveBox();
  }
}
