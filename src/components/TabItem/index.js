import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  const onClickChangeTab = () => {
    updateActiveTabId(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
