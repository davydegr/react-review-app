import { useState } from 'react'
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

  return (
    <>
      <Header />


      <div className="container">
        <FeedbackForm />

        <FeedbackStats feedback={feedback}/>

        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
