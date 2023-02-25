// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            className="search"
            placeholder="Search"
          />
          <img
            className="search-icon"
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <DestinationItem userDetails={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
