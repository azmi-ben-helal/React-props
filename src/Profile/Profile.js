import React from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Profile = (props) => {
  let roundedImage = {
    overflow: 'hidden',
    webkitBorderRadius: '150px',
    mozBorderRadius: '150px',
    borderRadius: '150px',
    width: '300px',
    height: '300px',
  }

  function handleName(e) {
    e.preventDefault()
    alert(props.fullName)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        onClick={handleName}
        variant="top"
        src={props.children}
        style={roundedImage}
      />
      <Card.Body>
        <Card.Title>{props.fullName}</Card.Title>
        <Card.Text>{props.bio}</Card.Text>
        <Card.Text>{props.profession}</Card.Text>
      </Card.Body>
    </Card>
  )
}

Profile.defaultProps = { fullName: 'test', bio: 'test', profession: 'test' }

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
}
export default Profile
