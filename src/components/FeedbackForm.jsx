import Card from "./shared/Card"
import {useState} from 'react'
import Button from './shared/Button'

function FeedbackForm() {

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (event) => {

    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if(text !== '' && text.trim().length <= 9) {
      setBtnDisabled(true)
      setMessage(`Text must be at least 10 characters (currently ${text.trim().length})`)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(event.target.value)
  }

  return (
    <Card>
      <form action="#">
        <h2>How would you rate your service with us?</h2>

        {/* TODO: Rating selecto component */}

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
