import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'


export function Status (){

  const[newAnswer, setNewAnswer] = useState('')
  const[answers, setAnswer] = useState([
    'concordo...',
 'faz sentido',
 'parabens pelo progresso'
  ])

  function createNewAnswer (event: FormEvent){
    event?.preventDefault()

    setAnswer([newAnswer, ...answers ])
    setNewAnswer('')
  }

    function handleHotKeySubmit(event: KeyboardEvent){
      if (event.key == 'Enter'&& (event.ctrlKey || event.metaKey)){
        setAnswer([newAnswer, ...answers ])
        setNewAnswer('')
      }
    }
  
    return (
        <main className="status">
          <Header title="Tweet" />
        
         <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, quia aperiam porro molestiae nobis explicabo nihil in. Dicta molestias vel iste autem ad dolores, est totam obcaecati vitae sint repellat." />
            <Separator / >

          <form onSubmit={createNewAnswer}  className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/matheusr1406.png" alt="" />
              <textarea 
                id="tweet" 
                placeholder="Tweet your answer"
                value={newAnswer}
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {
                  setNewAnswer(event.target.value)
                }}
                />
            </label>
            
            <button type="submit">
              <PaperPlaneRight/>
              <span>Answer</span> 
              </button>
           </form>
          
            

          {answers.map(answer => {
            return <Tweet key={answer} content={answer} />
          })}

        </main>
    )
}