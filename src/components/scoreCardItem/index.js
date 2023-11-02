import './index.css'

const ScoreCardItem = props => {
  const {score, onClickPlayAgain} = props

  return (
    <div className="Score-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="scoreCard-heading">Your Score</p>
      <p className="scoreCard-score">{score}</p>

      <button
        type="button"
        className="play-again-btn"
        onClick={onClickPlayAgain}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-icon"
        />
        <p className="text-btn">Play Again</p>
      </button>
    </div>
  )
}
export default ScoreCardItem
