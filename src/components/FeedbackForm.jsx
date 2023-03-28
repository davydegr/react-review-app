import Card from "./shared/Card"
import {useState} from 'react'
import Button from './shared/Button'

function FeedbackForm() {

  const [text, setText] = useState('')

  const handleTextChange = (event) => {
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
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  )

}

export default FeedbackForm
