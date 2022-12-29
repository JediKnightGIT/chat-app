import React, { useState, useEffect } from 'react'
import Spinner from '../../common/Spinner/Spinner'

const EditProfile = ({ profile, status, updateStatus, setPhoto, dispatch }) => {
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

  if (!profile) return <Spinner />

  const onPhotoSelected = (event) => {
    if (event.target.files.length) {
      dispatch(setPhoto(event.target.files[0]))
    }
  }

  const profilePhoto = profile.photos.large || 'https://loremflickr.com/320/320'

  return (
    <div className="settings-subpage">
      <label>
        <input type="file" accept="image/png, image/jpeg" onChange={onPhotoSelected} />
        <img className="profile-picture" src={profilePhoto} width="80" height="80" alt="My profile" />
      </label>
      <div className="bio-field">
        <input onChange={handleBio} onBlur={handleStopEditing} type="text" className="bio-field__input" value={bio} placeholder="Bio" />
      </div>
    </div>
  )
}

export default EditProfile