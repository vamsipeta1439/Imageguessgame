import {Component} from 'react'
import './index.css'
import GamePage from '../gamePage'
import ScoreCardItem from '../scoreCardItem'

/*  <GamePage
            tabsList={tabsList}
            imagesList={imagesList}
            onClickThumbnail={this.onClickThumbnail}
          /> */
class MatchGame extends Component {
  state = {score: 0, time: 60, isGameStart: true}

  componentDidMount() {
    this.timerId = setInterval(this.timer, 1000)
  }

  clearTimer = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({isGameStart: !prevState.isGameStart}))
  }

  timer = () => {
    const {time} = this.state
    if (time === 0) {
      this.clearTimer()
    } else {
      this.setState(prevState => ({time: prevState.time - 1}))
    }
  }

  onClickPlayAgain = () => {
    this.setState({isGameStart: true, time: 60, score: 0})
    this.componentDidMount()
  }

  onClickThumbnail = (thumbnailId, imageTobeMatedId) => {
    if (imageTobeMatedId === thumbnailId) {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.clearTimer()
    }
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {score, time, isGameStart} = this.state

    return (
      <div className="main-container">
        <nav className="nav-bar">
          <ul className="nav-items">
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
                alt="website logo"
                className="website-logo"
              />
            </li>
            <li>
              <p className="nav-score">
                score:<span className="span-tag">{score}</span>
              </p>
            </li>
            <li className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-logo"
              />
              <p className="timer-text">{time} sec</p>
            </li>
          </ul>
        </nav>
        <div className="game-scorecard-pages-container">
          {isGameStart ? (
            <GamePage
              tabsList={tabsList}
              imagesList={imagesList}
              onClickThumbnail={this.onClickThumbnail}
            />
          ) : (
            <ScoreCardItem
              onClickPlayAgain={this.onClickPlayAgain}
              score={score}
            />
          )}
        </div>
      </div>
    )
  }
}
export default MatchGame
