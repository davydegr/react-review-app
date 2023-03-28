import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import React from 'react'
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  // Here we have our feedback, so we need this function here
  const deleteFeedback = (id) => {
    // setFeedback changes the state
    if(window.confirm('Are you sure you want to delete this review?')) {
      setFeedback(feedback.filter((item) => item.id !== id))

    }
  }

  const addFeedback = (newFeedback) => {
    // Add a unique ID
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
      <Header />


      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />

        <FeedbackStats feedback={feedback}/>

        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
