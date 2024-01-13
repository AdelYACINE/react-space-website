import NavTech from "./NavTech";

const Vehicule = ({ name, description, image, landscape }) => {
  return (
    <div className="container-vehicule">
      <h2 className="title  title-technology">
        <span className=" num-destination ">03</span> SPACE LAUNCH 101
      </h2>
      <div className="mars mars-technology">
        <div className="navtech-container">
          <NavTech />
        </div>

        <div className="container-text-crew  container-text-technology">
          <div>
            <h3 className="role tech-role">THE TERMINOLOGY...</h3>
            <h1 className="name">{name}</h1>
            <p className="text description-text text-technology">
              {description}
            </p>
          </div>
        </div>

        <div className="container-pic container-pic-tech">
          <img
            src={image}
            alt="personne-pic"
            className="img-fluid portrait"
            loading="lazy"
          />
          <img
            src={landscape}
            alt="personne-pic"
            className="img-fluid landscape"
          />
        </div>
      </div>
    </div>
  );
};

export default Vehicule;
