import { Module } from '../core/module'


export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text)
  }
  render() {
    const divButtons = document.createElement('div')
  
    let button60m = document.createElement('button')
    button60m.innerHTML = '60s'

    let button30m = document.createElement('button')
    button30m.innerHTML = '30s'

    let button15m = document.createElement('button')
    button15m.innerHTML = '15s'

    divButtons.append(button60m)
    divButtons.append(button30m)
    divButtons.append(button15m)

    button60m.addEventListener('click', () => this.trigger('60s'))
    button30m.addEventListener('click', () => this.trigger('30s'))
    button15m.addEventListener('click', () => this.trigger('15s'))

    return divButtons
  }

  soundOfTimerEnd(){
    const audio = new Audio(sound);
    audio.play()
  }

  timerIncrement(seconds, timer){
    let count = seconds
      setInterval(() => {
        count--
        timer.innerText = count + 's'
        if(count < 10){
          timer.style.color = 'Gold'
        }
        if(count < 0){
          timer.innerText = 'End'
          timer.style.color = 'OrangeRed'
          setTimeout(() => {
            timer.remove()
          }, 2000)
        }
      },1000)
  }

  trigger(seconds){
    const body = document.querySelector('body')
    const timer = document.createElement('div')
    timer.className = 'timer'
    body.append(timer)
    if(seconds === '60s'){
      this.timerIncrement(60, timer)
    }else if(seconds === '30s'){
      this.timerIncrement(30, timer)
    }else if(seconds === '15s'){
      this.timerIncrement(15, timer)
    }
  }
}