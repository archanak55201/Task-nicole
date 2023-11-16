import React from 'react'
import "./../App.css";

function Display({question}) {

  return (
    <div>
        <div className='head-ques'>
            <div>{question.id}. {question.type}</div> 
            <div>{question.question}</div>
            <div>Answer</div>

            <div> 
              {
                (+(question.id)===3)&&<div>
                  <input type='radio' placeholder='true' value="true"  /><label>TRUE</label>
                  <input type='radio' placeholder='false' value="False" /><label>FALSE</label>
                 
                </div>||
                (+(question.id)===1&&+(question.id)===2)&&<input type='text' placeholder='answer '/>
                ||
                (+(question.id)===4)&&<div>
                  {/* question.choices.map((val)={
                    <div>
                    <input type='checkbox' placeholder='true' value="true"  /><label>TRUE</label>
                  <input type='checkbox' placeholder='false' value="False" /><label>FALSE</label>
                    </div>
                    }) */}
                   <input type='checkbox' placeholder='true' value="true"  /><label>careful</label>
                  <input type='checkbox' placeholder='false' value="False" /><label>careless</label>
                  <input type='checkbox' placeholder='false' value="False" /><label>diligent</label>
                  <input type='checkbox' placeholder='false' value="False" /><label>ultra-careful</label>
                </div>

              }
            
            </div>
            <div>
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Display;
