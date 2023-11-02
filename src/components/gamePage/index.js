import {Component} from 'react'
import './index.css'

class GamePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageToBeMatched: props.imagesList[0],
      activeTabId: props.tabsList[0].tabId,
    }
  }

  onClickTab = idOfTab => this.setState({activeTabId: idOfTab})

  onMatchThumbnail = () => {
    const {imagesList} = this.props
    const index = Math.floor(Math.random() * 30)
    this.setState({imageToBeMatched: imagesList[index]})
  }

  render() {
    const {imageToBeMatched, activeTabId} = this.state
    const {imageUrl} = imageToBeMatched
    const {tabsList, imagesList, onClickThumbnail} = this.props

    const activeThumbnailsList = imagesList.filter(
      eachItem => eachItem.category === activeTabId,
    )

    return (
      <div className="game-page-container">
        <img src={imageUrl} alt="match" className="image-to-be-matched" />

        <ul className="tabs-container">
          {tabsList.map(tabItem => {
            const tabClsName =
              tabItem.tabId === activeTabId ? 'active-tab-btn' : 'tabs-btn'

            const onClickTabItem = () => this.onClickTab(tabItem.tabId)

            return (
              <li key={tabItem.tabId}>
                <button
                  type="button"
                  className={tabClsName}
                  onClick={onClickTabItem}
                >
                  {tabItem.displayText}
                </button>
              </li>
            )
          })}
        </ul>
        <ul className="thumbnails-container">
          {activeThumbnailsList.map(eachThumbnail => {
            const {thumbnailUrl, id} = eachThumbnail
            const onClickThumbnailBtn = () => {
              onClickThumbnail(id, imageToBeMatched.id)
              if (id === imageToBeMatched.id) {
                this.onMatchThumbnail()
              }
            }

            return (
              <li key={id}>
                <button
                  type="button"
                  className="thumbnail-btn"
                  onClick={onClickThumbnailBtn}
                >
                  <img
                    src={thumbnailUrl}
                    alt="thumbnail"
                    className="thumbnail-img"
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default GamePage
