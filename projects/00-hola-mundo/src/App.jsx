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
     

    return(
        <div className='App'>
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
            
        </div>
    )
}