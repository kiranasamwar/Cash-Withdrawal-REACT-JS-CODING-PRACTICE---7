import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  updateBalance = value => {
    this.setState(prev => ({count: prev.count - value}))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="profile-container">
            <p className="profile-logo">{initial}</p>
            <h1 className="profile-name">{name}</h1>
          </div>
          <div className="your-balance-container">
            <p className="your-balance"> Your Balance</p>
            <div>
              <p className="amount">{count}</p>
              <p className="rupee">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="rupees-sum">CHOOSE SUM (IN RUPEES)</p>

          <ul className="ul-list">
            {denominationsList.map(eachBalance => (
              <DenominationItem
                key={eachBalance.id}
                denominationDetails={eachBalance}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
