import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { FormInput } from '../../common/Input/Input'
import { saveProfile } from '../../../redux/slices/settings-slice'
import Avatar from '../Avatar'
import Submodal from './Submodal'
import classnames from 'classnames'
import useSettings from '../useSettings'

const EditProfile = ({ profile, status, closeModal, updateStatus, onPhotoSelected, dispatch, goBack }) => {
  const { register, handleSubmit, formState: { errors }, setError, clearErrors, reset } = useForm()
  const position = useSelector((state) => state.settings.position)

  const { isScrollTop, handleScroll } = useSettings()

  const [maxBioLength, setMaxBioLength] = useState(300)
  const [subModal, setSubModal] = useState({
    name: false,
    username: false
  })

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
    setMaxBioLength(300 - e.target.value.length)
  }

  const handleStopEditing = (e) => {
    handleSubmit(() => {
      dispatch(updateStatus(e.target.value, setError))
    })()
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

  const handleSubModal = (e) => {
    const el = e.target
    if ((el.classList.contains('overlay--mini')
      || el.classList.contains('close-modal'))) {
      setSubModal(() => ({
        name: false,
        username: false
      }))
    } else {
      let type = el.dataset.submodal
      setSubModal((subModal) => ({
        [type]: !subModal[type]
      }))
    }
  }

  return (
    <div className={classnames("modal-item")}>
      
      <div className={classnames("modal-header", { "bordered": isScrollTop })}>
        <div className="modal-header__left">
          <button className="menu-arrow" onClick={goBack}></button>
          <h2 className="modal-header__title modal-header__title--inner">Info</h2>
        </div>
        <button className="cross-modal" onClick={closeModal}>✕</button>
      </div>
      <div className="settings-subpage" onScroll={handleScroll}>
        {/* <h3 className="settings-subpage__title">Info</h3> */}
        <div className="info__avatar">
          <Avatar className="" profile={profile} onPhotoSelected={onPhotoSelected} />
          <span className="main-data__name">{profile.fullName}</span>
        </div>
        <div className="bio-field">
          <form>
            <FormInput name="bio" id="bio" type="text" className="bio-input"
              placeholder="Bio"
              onFocus={handleErrors}
              {...register('bio', {
                onChange: handleBioChange,
                onBlur: handleStopEditing
              })}
              errors={errors}
            />
            <span className="bio-length">{maxBioLength}</span>
            {/* {errors.status && <div style={{ color: 'red' }}>{errors.status.message}</div>} */}
            <input type="submit" hidden />
          </form>
        </div>

        <ul className="settings__menu">
          <li className="settings__item settings__item--name" data-submodal="name" onClick={handleSubModal}>Name</li>
          <li className="settings__item settings__item--username" data-submodal="username" onClick={handleSubModal}>Username</li>
        </ul>
        <form id="edit-profile-form" onSubmit={handleSubmit(onSubmit)}>

          <Submodal title="Edit your name" name="name" subModal={subModal.name} handleSubModal={handleSubModal}>
            <FormInput name="firstName" id="first-name" type="text" label="First Name" classNameWrapper="input-field-container" className="input-field"
              autoFocus onFocus={handleErrors}
              {...register('firstName')}
              errors={errors}
            />
            <FormInput name="lastName" id="last-name" type="text" label="Last Name" classNameWrapper="input-field-container" className="input-field"
              onFocus={handleErrors}
              {...register('lastName')}
              errors={errors}
            />
          </Submodal>

          <Submodal title="Username" name="username" subModal={subModal.username} handleSubModal={handleSubModal}>
            {/* Username as 'aboutMe' */}
            <FormInput name="username" id="username" type="text" label="Username" classNameWrapper="input-field-container" className="input-field"
              autoFocus onFocus={handleErrors}
              {...register('username')}
              errors={errors}
            />
          </Submodal>

          {errors.profile && <div style={{ color: 'red' }}>{errors.profile.message}</div>}
        </form>
        {/* </div> */}
      </div>
    {position}
    </div>
  )
}

export default EditProfile
