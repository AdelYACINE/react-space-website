import { Outlet } from "react-router-dom";

const Crew = () => {
  return (
    <div className="crew">
      <h2 className="title title-crew">
        <span className=" num-destination">02</span> MEET YOUR CREW
      </h2>
      <Outlet />
    </div>
  );
};

export default Crew;
