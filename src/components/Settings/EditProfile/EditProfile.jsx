import React, { useState, useEffect } from 'react'

const EditProfile = ({ status, updateStatus, dispatch }) => {
  const [bio, setBio] = useState(status)

  useEffect(() => {
    setBio(status)
  }, [status])

  const handleBio = (e) => {
    setBio(e.target.value)
  }

  const handleStopEditing = () => {
    dispatch(updateStatus(bio))
  }

  return (
    <div className="settings-subpage">
      <img className="profile-picture" src="https://loremflickr.com/320/320" width="80" height="80" alt="My profile" />
      <div className="bio-field">
        <input onChange={handleBio} onBlur={handleStopEditing} type="text" className="bio-field__input" value={bio} placeholder="Bio" />
      </div>
    </div>
  )
}

export default EditProfile