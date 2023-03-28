
import PropTypes from 'prop-types'
function FeedbackStats({feedback}) {

  // Calculate average rating
  let average = feedback.reduce((acc, current) => {
    return acc += current.rating}, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/,"")

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} reviews</h4>
        <h4>{isNaN(average) ? "No reviews yet" : `Average rating: ${average}`}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired
}

export default FeedbackStats
