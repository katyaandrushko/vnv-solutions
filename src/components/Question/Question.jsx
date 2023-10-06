import React, { Component } from 'react'
import Faq from 'react-faq-component'
import './question.scss'

const data = {
  title: 'FAQ ',
  rows: [
    {
      title: 'Lorem ipsum dolor sit amet,',
      content: 'Lorem ipsum dolor sit amet, consectetur ',
    },
    {
      title: 'Nunc maximus, magna at ultricies elementum',
      content:
        'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.',
    },
    {
      title: 'Curabitur laoreet, mauris vel blandit fringilla',
      content:
        'Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc',
    },
    {
      title: 'Curabitur laoreet, mauris vel blandit fringi',
      content:
        ' Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.',
    },
  ],
}

const styles = {
  rowTitleColor: 'blue',
  rowContentColor: 'grey',
  arrowColor: 'red',
  bgColor: 'very dark shade of red',
  titleTextColor: 'white',
  titleTextSize: '48px',
  rowTitleColor: 'blue',
  rowTitleTextSize: 'medium',
  rowContentColor: 'grey',
  rowContentTextSize: '16px',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '50px',
  rowContentPaddingRight: '150px',
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
        <Faq data={data} styles={styles} config={config} />
      </div>
    )
  }
}
