import React, { Component } from 'react'
import Faq from 'react-faq-component'
import './question.scss'

const data = {
  title: 'FAQ ',
  rows: [
    {
      title: 'Які гарантії надаєте щодо якості продукту чи послуги?',
      content:
        'Ми гарантуємо високу якість наших послуг та надаємо повну підтримку після замовлення протягом 2 років від роботи',
    },
    {
      title: 'Які можливості є для нашоєї співпраці в майбутньому',
      content:
        'Ми готові до довгострокової співпраці та надання подальших послуг, таких як підтримка, розширення функціональності і оновлення.',
    },
    {
      title: 'Який строк виконання проекту (створення сайту, боту в телеграм)?',
      content:
        'Термін виконання проекту варіюється залежно від складності і обсягу робіт. Ми завжди намагаємося виконати роботу якнайшвидше, не втрачаючи при цьому якість.',
    },
    {
      title: 'Яким чином ви гарантуєте конфіденційність наших даних?',
      content:
        ' Ми дотримуємося всіх необхідних заходів для забезпечення конфіденційності ваших даних і використовуємо сучасні методи шифрування та захисту інформації.',
    },
  ],
}

const styles = {
  rowTitleColor: 'blue',
  rowContentColor: 'grey',
  titleTextColor: 'white',
  titleTextSize: '48px',
  arrowColor: 'red',
  bgColor: 'very dark shade of red',
  rowTitleColor: 'blue',
  rowTitleTextSize: '20px',
  rowContentColor: 'grey',
  rowContentTextSize: '16px',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '20px',
  arrowColor: 'white',
  transitionDuration: '1s',
  timingFunc: 'ease',
}

const config = {
  animate: true,
  tabFocus: true,
}

export default class Question extends Component {
  render() {
    return (
      <div className="question">
        <div className="faq">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    )
  }
}
