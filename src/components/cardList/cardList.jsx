import { Component } from "react"
import './cardlist.css'
import CardComponent from "../cardComponent/cardComponent"

class CardList extends Component {
    render() {
        const { monsters } = this.props

        return (
            <div className="cardlist" >
                {monsters.map((monster) => {


                   return <CardComponent monster={monster} key={monster.id} />
                })}
            </div>

        )
    }
}

export default CardList