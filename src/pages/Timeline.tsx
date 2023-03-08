import { Header } from "../components/Header"
import { Tweet } from "../components/Tweet"
import { Separator } from "../components/Separator"
import './Timeline.css'
import { FormEvent, KeyboardEvent, useState } from "react"
 
  
  let newTweet = ''

export function TimeLine (){
  const[newTweet, setNewTweet] = useState('')
  const[tweets, setTweets] = useState([
    'test1',
    'vidaaaaaaaa',
    'deu certiiadoaido'
  ])

  function handleHotKeySubmit(event: KeyboardEvent){
    if (event.key == 'Enter'&& (event.ctrlKey || event.metaKey)){
      
    setTweets([newTweet, ...tweets ])
    setNewTweet('')
    }
  }



  function createNewTweet (event: FormEvent){
    event?.preventDefault()

    setTweets([newTweet, ...tweets ])
    setNewTweet('')
  }

    return (
        <main className="timeline">
          <Header title="Home" />
          <form onSubmit={createNewTweet} className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/matheusr1406.png" alt="" />
              <textarea 
              id="tweet" 
              placeholder="O que esta acontecendo?"
              value={newTweet}
              onKeyDown={handleHotKeySubmit}
              onChange={(event) => {
                setNewTweet (event.target.value)
              }}
              />
            </label>
            
          <button type="submit">Tweet</button>
        </form>
          
        <Separator />
           
        {tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet} />
          })}

        </main>
    )
}