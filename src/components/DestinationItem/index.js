// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails

  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} className="img" />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
