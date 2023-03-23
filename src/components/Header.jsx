import PropTypes from 'prop-types'




function Header({ text, bgColor, textColor }) {

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

// Set a default prop
Header.defaultProps = {
  text: "Feedback app",
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95'
}

// Set limitations on what props can be passed
Header.propTypes= {
  text: PropTypes.string
}

export default Header
