import React from 'react'

const CardComponent = ({monster}) => {
    const { name, id, email } = monster
    return (
        <div key={id} className="card-container">
            <img alt={name}
                src={`https://robohash.org/${id - 100}?set=set4&size=120x120`} />
            <h2>{name}</h2>
            <h3>{email}</h3>
        </div>
    )
}

export default CardComponent

// class CardComponent extends Component {
//     render() {

//         const { name,id, email} = this.props.monster

//         return (
//             <div key={id} className="card-container">
//                 <img alt={name}
//                      src={`https://robohash.org/${id - 100}?set=set4&size=120x120`} />
//                 <h2>{name}</h2>
//                 <h3>{email}</h3>
//             </div>

//         )
//     }
// }

// export default CardComponent