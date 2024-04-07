import React from 'react'

function Trivia({data,setStop,setQuestionNumber,questionNumber}) {

    const [question,setQuestion] = React.useState(null);
    const [selectedAnswer,setSelectedAnswer] = React.useState(null);
    const [className,setClassName] = React.useState("answer")

    const delay = (duration ,callback)=>{
        setTimeout(()=>{
            callback();
        },duration)
    }

    const handleClick = (a)=>{
        setSelectedAnswer(a);
        setClassName("answer active")
        delay(3000,()=>{
            setClassName(a.correct?"answer correct":"answer wrong")
        });
        delay(6000,()=>{
            if(a.correct){
                setQuestionNumber((prev)=>(prev+1));
                selectedAnswer(null);
            }else {
                setStop(true);
            }
        })
    }

    React.useEffect(()=>{
        setQuestion(data[questionNumber-1]);
    },[data,questionNumber])

  return (
    <div className='trivia'>
        <div className='question'>{question?.question}</div>
        <div className="answers">
            {
                question?.answers.map(a=>(
                    <div className={selectedAnswer==a?className:"answer"} key={a.text} onClick={()=>handleClick(a)}>{a.text}</div>
                ))
            }  
        </div>
    </div>
  )
}

export default Trivia