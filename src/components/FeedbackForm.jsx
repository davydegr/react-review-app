import Card from "./shared/Card"
import {useState} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (event) => {
    // Set an instant text because the state updates a little bit slower
    const instantText = event.target.value

    if(instantText === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if(instantText !== '' && instantText.trim().length < 10) {
      setBtnDisabled(true)
      setMessage(`Text must be at least 10 characters (currently ${instantText.trim().length})`)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(event.target.value)

  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Second validation
    if(text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      }

      handleAdd(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form action="#" onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>

        <RatingSelect select={(rating) => setRating(rating)}/>

        <div className="input-group">
          <input onChange={handleTextChange}
                 type="text"
                 placeholder="Write a review"
                 value={text} />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )

}

export default FeedbackForm
