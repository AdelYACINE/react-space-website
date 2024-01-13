import NavCrew from "./NavCrew";

const Anoush = ({ name, image, role, bio }) => {
  return (
    <>
      <div className="mars mars-crew">
        <div className="container-text-crew ">
          <div className="container-bio-crew">
            <h3 className="role">{role}</h3>
            <h1 className="name">{name}</h1>
            <p className="bio">{bio}</p>
          </div>

          <div className="navbarCrew">
            <NavCrew />
          </div>
        </div>

        <div className="container-pic  container-pic-crew">
          <img
            src={image}
            alt="personne-pic"
            className="img-fluid image-personnage "
          />
        </div>
      </div>
    </>
  );
};

export default Anoush;
