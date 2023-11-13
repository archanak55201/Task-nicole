import React from 'react'
// import QuestionList  from './../QuestionList'
import {question } from './../QuestionList'
import Displayques from './Displayques';

const Question=()=> {
    console.log(question[0].type);
  return (
    <div>
     
    <div>Question</div>
    {
        question.map((questionpro)=>(
            <>
            <Displayques question={questionpro}/>
            
            </>
        ))
    }
    <div>Score : 0</div>
  
    </div>
  )
}

export default Question