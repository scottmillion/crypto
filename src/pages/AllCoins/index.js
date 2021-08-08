import React from 'react'
import axios from 'axios'

class AllCoins extends React.Component {
  state: {
    data = null;
  }

  componentDidMount = async () => {
    try {
      const { data } = await axios('https://api.coingecko.com/api/v3/global')
      this.setState({ data })
    } catch {

    }
  }

  render() {
    return (
      <>
        <div>
          {if (this.state.data) {
            <h2>Made it</h2>
          }}
          <h1>This is the All Coins Page</h1>
        </div>
      </>
    )
  }
}

export default AllCoins
