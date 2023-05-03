import classNames from "classnames"

const Avatar = ({ className, profile, onPhotoSelected }) => {
  return (
    <label className={classNames("avatar-wrapper", className)}>
      <img className="profile-picture" src={profile.photos.large || 'https://loremflickr.com/320/320'} width="80" height="80" alt="My profile" />
      <input className="settings__file" type="file" id="avatar" accept="image/png, image/jpeg" onChange={onPhotoSelected} />
    </label>
  )
}

export default Avatar