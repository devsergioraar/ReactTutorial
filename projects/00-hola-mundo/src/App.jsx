import './App.css' 
import { TwitterFollowCard } from './TwitterFollowCard'
import { useState } from 'react'
export function App(){
    
    const formatUserName =(userName) => `@${userName}`

    const [name, setName] = useState('devsergioraar')
    const [isFollowing , setIsFollowing] = useState(false)
    const funcionCambiaNombre = () => {
        setName('midudev')
    } 

    const users = [
        {
            userName: "devsergioraar",
            name: "Sergio Ramírez",
            isFollowing: false
        },
        {
            userName: "mouredev",
            name: "Brais Moure",
            isFollowing: true
        },
        {
            userName: "midudev",
            name: "Miguel Ángel Durán",
            isFollowing: false
        },
        {
            userName: "wiz0u",
            name: "Frances Telegram",
            isFollowing: true
        }

    ];
     

    return(
        <div className='App'>
            {/*
            <TwitterFollowCard
            formatUserName = {formatUserName}
            userName={name}
            name ="Sergio Ramírez A"
            InitialIsFollowing={true}
            />
            <button onClick={() => setIsFollowing(!isFollowing)}>
                Cambiar Estado X
            </button>

            <button onClick={funcionCambiaNombre}>
                Cambiar Usuario X
            </button>
            */}
            <section className='App'>
                {
                    users.map(
                        ({userName,name, isFollowing})=> (
                            <TwitterFollowCard
                            key={userName}
                            formatUserName = {formatUserName}
                            userName={userName}
                            name ={name}
                            InitialIsFollowing={isFollowing}
                            />
                        )
                    )
                }
            </section>
        </div>
    )
}