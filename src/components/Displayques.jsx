import React from 'react'
import "./../App.css";

function Displayques({question}) {
console.log(question);
  return (
    <div>
        <div className='head-ques'>
            <div>{question.id}. {question.type}</div> 
            <div>{question.question}</div>
            <div>Answer</div>
            <div> <input type='text' placeholder='answer '/></div>
            <div>
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Displayques;