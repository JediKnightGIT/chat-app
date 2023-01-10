import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Spinner from '../../common/Spinner/Spinner'
import { FormInput } from '../../common/Input/Input'
import { saveProfile } from '../../../redux/slices/settings-slice'

const EditProfile = ({ userId, profile, status, getStatus, updateStatus, setPhoto, dispatch }) => {
  const { register, handleSubmit, formState: { errors }, setError, clearErrors, reset } = useForm()

  const [maxBioLength, setMaxBioLength] = useState(300)

  useEffect(() => {
    setMaxBioLength(300 - status.length)

    if (profile) {
      const [firstName, lastName] = profile.fullName.split(' ')
      let defaultValues = {};
      defaultValues.bio = status;
      defaultValues.firstName = firstName;
      defaultValues.lastName = lastName;
      defaultValues.username = profile.aboutMe;
      reset({ ...defaultValues });
    }
  }, [status, profile, reset])

  const handleBioChange = (e) => {
    // console.log('onChange')
    setMaxBioLength(300 - e.target.value.length)
  }

  const handleStopEditing = (e) => {
    // console.log('onBlur')
    handleSubmit(() => {
      dispatch(updateStatus(e.target.value, setError))
    })()
  }

  const onPhotoSelected = (event) => {
    if (event.target.files.length) {
      dispatch(setPhoto(event.target.files[0]))
    }
  }

  const onSubmit = (data) => {
    const fullName = `${data.firstName} ${data.lastName}`

    dispatch(saveProfile({
      aboutMe: data.username,
      lookingForAJob: true,
      LookingForAJobDescription: 'example',
      fullName
    }, setError))
  }

  // Common error message is cleared when user starts to interact with fields
  const handleErrors = () => {
    clearErrors('profile')
  }

  if (!profile) return <Spinner />

  return (
    <div className="settings-subpage">
      <h3>Info</h3>
      <label>
        <input type="file" accept="image/png, image/jpeg" onChange={onPhotoSelected} />
        <img className="profile-picture" src={profile.photos.large || 'https://loremflickr.com/320/320'} width="80" height="80" alt="My profile" />
      </label>
      <div className="bio-field">
        {/* <input onChange={handleBioChange} onBlur={handleStopEditing} type="text" className="bio-field__input" value={status} placeholder="Bio" /> */}

        <form>
          {maxBioLength}
          <FormInput name="bio" id="bio" type="text" label="Bio" className="input-group"
             placeholder="Bio"
            //  value={bio}
             onFocus={handleErrors}
             {...register('bio', {
              onChange: handleBioChange,
              onBlur: handleStopEditing
            })}
            errors={errors}
          />
          {/* {errors.status && <div style={{ color: 'red' }}>{errors.status.message}</div>} */}
          <input type="submit" hidden />
        </form>
      </div>

      <div className="settings-field">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput name="firstName" id="first-name" type="text" label="First Name" className="input-group"
            // value={firstName}
            onFocus={handleErrors}
            {...register('firstName')}
            errors={errors}
          />
          <FormInput name="lastName" id="last-name" type="text" label="Last Name" className="input-group"
            // value={lastName}
            onFocus={handleErrors}
            {...register('lastName')}
            errors={errors}
          />

          {/* Username as 'aboutMe' */}
          <FormInput name="username" id="username" type="text" label="Username" className="input-group"
            onFocus={handleErrors}
            {...register('username')}
            errors={errors}
          />

          <button type="submit">Save</button>
          {errors.profile && <div style={{ color: 'red' }}>{errors.profile.message}</div>}
        </form>
      </div>
    </div>
  )
}

export default EditProfile