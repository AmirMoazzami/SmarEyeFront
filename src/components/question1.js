import React from 'react'


const Question1 = (props) => {
  return (
    <>
      <div className="question1-container">
        <span className="question1-text heading3">{props.question}</span>
        <span className="bodySmall">{props.answer}</span>
      </div>
    </>
  )
}

Question1.defaultProps = {
  question: 'What types of cars do you sell?',
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
}

export default Question1
