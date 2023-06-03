import './index.css'

const BrowserHistory = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, title, timeAccessed, logoUrl, domainUrl} = historyDetails
  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <div className="logo-container">
        <img className="logo-img" src={logoUrl} alt="domain logo" />

        <p className="logo-description">{title}</p>
        <p className="logo-description">{domainUrl}</p>
      </div>

      <button data-testid="delete" onClick={onDelete} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
