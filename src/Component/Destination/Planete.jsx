import NavDestination from "./NavDestination";

const Mars = ({ image, name, description, distance, travel }) => {
  return (
    <div className="mars">
      <div className="container-pic ">
        <h2 className="title">
          <span className=" num-destination">01</span> PICK YOUR DESTINATION
        </h2>
        <img
          src={image}
          alt="mars-pic"
          className="img-fluid planet"
          loading="lazy"
        />
      </div>

      <div className="container-text ">
        <NavDestination />
        <h1 className="title-name">{name}</h1>
        <p className="text description-text">{description}</p>

        <div className="container">
          <div className="distance">
            <h3 className="second-title">AVG.DISTANCE</h3>
            <p className="text-second">{distance}</p>
          </div>
          <div className="travel">
            <h3 className="second-title">EST.TRAVEL TIME</h3>
            <p className="text-second">{travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mars;
