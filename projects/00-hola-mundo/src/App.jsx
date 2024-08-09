import './App.css' 
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    const formatUserName =(userName) => `@${userName}`
    return(
        <div className='App'>
            <TwitterFollowCard
            formatUserName = {formatUserName}
            userName="devsergioraar"
            name ="Sergio Ramírez A"
            isFollowing={true}
            />
            <TwitterFollowCard
            formatUserName = {formatUserName}
            userName="devsergioraar"
            name ="Sergio Ramírez A"
            isFollowing={true}
            />
            <TwitterFollowCard
            formatUserName = {formatUserName}
            userName="devsergioraar"
            name ="Sergio Ramírez A"
            isFollowing={true}
            />
            <TwitterFollowCard
            formatUserName = {formatUserName}
            userName="devsergioraar"
            name ="Sergio Ramírez A"
            isFollowing={true}
            />
        </div>
    )
}