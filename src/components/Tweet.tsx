 import './Tweet.css';
 import {ChatCircle, ArrowsClockwise,Heart} from 'phosphor-react'
 import {Link} from 'react-router-dom'


interface TweetProps {
    content: string
}


 export function Tweet (props: TweetProps) {
    
    return (
        <Link to="/status" className="tweet"> 
         <img src="https://github.com/matheusr1406.png" alt="" />

         <div className='tweet-content'>
            <div className='tweet-content-header'>
                <strong>Matheus Rocha</strong>
                <span>@Matheuus_150</span>
            </div>

            <p>{props.content}</p>

            <div className="tweet-content-footer">
                <button type="button">
                    <ChatCircle/>
                    20
                </button>
                
                <button type="button">
                    <ArrowsClockwise/>
                    8
                </button>
                
                <button type="button">
                    <Heart/>
                    70
                </button>
            </div>
         </div>
        </Link>
    )
}