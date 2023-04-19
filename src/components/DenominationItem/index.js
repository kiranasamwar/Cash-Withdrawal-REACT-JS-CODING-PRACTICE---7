import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onChangeTheValue = () => {
    updateBalance(value)
  }
  return (
    <li className="li-list">
      <button className="button" onClick={onChangeTheValue} type="button">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
