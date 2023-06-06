import './cardlist.css'
import CardComponent from "../cardComponent/cardComponent"

const CardList = ({ monsters }) => {

    return (
        <div className="cardlist" >
            {monsters.map((monster) => {
                return <CardComponent monster={monster} key={monster.id} />
            })}
        </div>

    )

}
export default CardList

// class CardList extends Component {
//     render() {
//         const { monsters } = this.props

//         return (
//             <div className="cardlist" >
//                 {monsters.map((monster) => {
//                    return <CardComponent monster={monster} key={monster.id} />
//                 })}
//             </div>

//         )
//     }
// }
