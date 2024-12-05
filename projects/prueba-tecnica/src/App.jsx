import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
    return (
    <section className ="App">
    <TwitterFollowCard userName ="soyjorgito" name="Jorgito"/>
    <TwitterFollowCard userName ="midudev" name="Pablo Hernandez"/>
    <TwitterFollowCard userName ="elonmusk" name="Elon Musk"/>
    </section>
    )
}