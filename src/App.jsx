import "./app.css"
import React from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer"
function App() {

  const [questionNumber,setQuestionNumber] = React.useState(1);

  const [stop,setStop] = React.useState(false);

  const [earned , setEarned] = React.useState("$ 0")

  // const interval = setInterval(()=>{
  //   setTime(prev=>(prev-1));
  // },1000)


  const data = [
    {
      id : 1,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "tv",
          correct : false,
        },
        {
          text : "fridge",
          correct : false,
        }
      ]
    },
    {
      id : 2,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "phone",
          correct : false,
        },
        {
          text : "phone",
          correct : false,
        }
      ]
    },
    {
      id : 3,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "phone",
          correct : false,
        },
        {
          text : "phone",
          correct : false,
        }
      ]
    },
    {
      id : 4,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "phone",
          correct : false,
        },
        {
          text : "phone",
          correct : false,
        }
      ]
    },
    {
      id : 5,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "phone",
          correct : false,
        },
        {
          text : "phone",
          correct : false,
        }
      ]
    },
    {
      id : 6,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "phone",
          correct : false,
        },
        {
          text : "phone",
          correct : false,
        }
      ]
    },
    {
      id : 7,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "phone",
          correct : false,
        },
        {
          text : "phone",
          correct : false,
        }
      ]
    },
    {
      id : 8,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "phone",
          correct : false,
        },
        {
          text : "phone",
          correct : false,
        }
      ]
    },
    {
      id : 9,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "phone",
          correct : false,
        },
        {
          text : "phone",
          correct : false,
        }
      ]
    },
    {
      id : 10,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "phone",
          correct : false,
        },
        {
          text : "phone",
          correct : false,
        }
      ]
    },
    {
      id : 11,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "phone",
          correct : false,
        },
        {
          text : "phone",
          correct : false,
        }
      ]
    },
    {
      id : 12,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "phone",
          correct : false,
        },
        {
          text : "phone",
          correct : false,
        }
      ]
    },
    {
      id : 13,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "phone",
          correct : false,
        },
        {
          text : "phone",
          correct : false,
        }
      ]
    },
    {
      id : 14,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "phone",
          correct : false,
        },
        {
          text : "phone",
          correct : false,
        }
      ]
    },
    {
      id : 15,
      question : "Rolex is a company that specializers in what type of product?",
      answers: [
        {
          text : "phone",
          correct : false,
        },
        {
          text : "watches",
          correct : true,
        },
        {
          text : "phone",
          correct : false,
        },
        {
          text : "phone",
          correct : false,
        }
      ]
    },
  ]








  const moneyPyramid = React.useMemo(()=>
    [
      {id:1,amount:"$ 100"},
      {id:2,amount:"$ 200"},
      {id:3,amount:"$ 300"},
      {id:4,amount:"$ 500"},
      {id:5,amount:"$ 1000"},
      {id:6,amount:"$ 2000"},
      {id:7,amount:"$ 4000"},
      {id:8,amount:"$ 8000"},
      {id:9,amount:"$ 16000"},
      {id:10,amount:"$ 32000"},
      {id:11,amount:"$ 64000"},
      {id:12,amount:"$ 125000"},
      {id:13,amount:"$ 250000"},
      {id:14,amount:"$ 500000"},
      {id:15,amount:"$ 1000000"},
    ].reverse(),[]) 

  React.useEffect(()=>{
    questionNumber>1  && setEarned(moneyPyramid.find( (m) => m.id==questionNumber-1).amount)
  },[moneyPyramid,questionNumber])

  return (
    <div className="app">
      <div className="main">
        {stop ? <h1 className="endText">you earn : {earned} </h1>:(
          <>
            <div className="top">
              <div className="timer">
              <Timer setStop={setStop} questionNumber={questionNumber}/> 
              </div>
            </div>

            <div className="bottom">
              <Trivia 
                data={data}
                setStop={setStop}
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              />
             </div>
          </>   
        )}
      </div>


      <div className="pyramid">
        <ul className="moneyList">
          {
            moneyPyramid.map((m)=>(
              <li key={m.id} className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
