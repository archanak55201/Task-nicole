import React from 'react'
// import QuestionList  from './../QuestionList'
import {question } from '../List'
import Display from './Display';

const Quest=()=> {
    console.log(question[0].type);
  return (
    <div>
     
    <div>Question</div>
    {
        question.map((questionpro,index)=>(
            <> 
            <Display question={questionpro}/>
            <hr style={{marginTop:"30px"}}></hr>
            </>
        ))
    }
    
  
    </div>
  )
}

export default Quest