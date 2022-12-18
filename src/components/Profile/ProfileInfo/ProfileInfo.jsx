const ProfileInfo = () => {
  return (
    <section className="profile">
    <img src="https://loremflickr.com/320/320" alt="Avatar" width="60" height="60" className="profile__img" />
    <div className="profile__info">
      <h2 className="profile__name">Jedi Knight</h2>
      <div className="profile__text-wrapper">
        <p className="profile__text">
          Date of Birth: <span id="date-of-birth"></span>
        </p>
        <p className="profile__text">
          City: <span id="city"></span>
        </p>
        <p className="profile__text">
          Education: <span id="education"></span>
        </p>
        <p className="profile__text">
          Web Site: <span id="website"></span>
        </p>
      </div>
    </div>
  </section>
  )
}

export default ProfileInfo
