import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import Destination from "./Component/Destination/Destination";
import Crew from "./Component/Crew/Crew";
import Technology from "./Component/Technology/Technology";
import NavBar from "./Component/NavBar";
import Planete from "./Component/Destination/Planete";
import Personnage from "./Component/Crew/Personnage";
import Vehicule from "./Component/Technology/Vehicule";
import data from "./data.json";

function App() {
  return (
    <>
      <Router>
        <div className="header">
          <Link to={"/"} className="logo-link">
            <img src="/images/logo.svg" alt="logo" className="img-fluid logo" />
          </Link>

          <div className="line"></div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/destination" element={<Destination />}>
            <Route
              index
              element={
                <Planete
                  name={data.destinations[1].name}
                  image={data.destinations[1].images.png}
                  description={data.destinations[1].description}
                  distance={data.destinations[1].distance}
                  travel={data.destinations[1].travel}
                />
              }
            />
            <Route
              path="moon"
              element={
                <Planete
                  name={data.destinations[0].name}
                  image={data.destinations[0].images.png}
                  description={data.destinations[0].description}
                  distance={data.destinations[0].distance}
                  travel={data.destinations[0].travel}
                />
              }
            />
            <Route
              path="mars"
              element={
                <Planete
                  name={data.destinations[1].name}
                  image={data.destinations[1].images.png}
                  description={data.destinations[1].description}
                  distance={data.destinations[1].distance}
                  travel={data.destinations[1].travel}
                />
              }
            />
            <Route
              path="europa"
              element={
                <Planete
                  name={data.destinations[2].name}
                  image={data.destinations[2].images.png}
                  description={data.destinations[2].description}
                  distance={data.destinations[2].distance}
                  travel={data.destinations[2].travel}
                />
              }
            />
            <Route
              path="titan"
              element={
                <Planete
                  name={data.destinations[3].name}
                  image={data.destinations[3].images.png}
                  description={data.destinations[3].description}
                  distance={data.destinations[3].distance}
                  travel={data.destinations[3].travel}
                />
              }
            />
          </Route>

          <Route path="/crew" element={<Crew />}>
            <Route
              index
              element={
                <Personnage
                  name={data.crew[3].name}
                  image={data.crew[3].images.png}
                  role={data.crew[3].role}
                  bio={data.crew[3].bio}
                />
              }
            />
            <Route
              path="DouglasHurley"
              element={
                <Personnage
                  name={data.crew[0].name}
                  image={data.crew[0].images.png}
                  role={data.crew[0].role}
                  bio={data.crew[0].bio}
                />
              }
            />
            <Route
              path="MarkShuttleworth"
              element={
                <Personnage
                  name={data.crew[1].name}
                  image={data.crew[1].images.png}
                  role={data.crew[1].role}
                  bio={data.crew[1].bio}
                />
              }
            />
            <Route
              path="VictorGlover"
              element={
                <Personnage
                  name={data.crew[2].name}
                  image={data.crew[2].images.png}
                  role={data.crew[2].role}
                  bio={data.crew[2].bio}
                />
              }
            />
            <Route
              path="AnoushehAnsari"
              element={
                <Personnage
                  name={data.crew[3].name}
                  image={data.crew[3].images.png}
                  role={data.crew[3].role}
                  bio={data.crew[3].bio}
                />
              }
            />
          </Route>

          <Route path="/technology" element={<Technology />}>
            <Route
              index
              element={
                <Vehicule
                  name={data.technology[0].name}
                  image={data.technology[0].images.portrait}
                  landscape={data.technology[0].images.landscape}
                  description={data.technology[0].description}
                />
              }
            />
            <Route
              path="LaunchVehicle"
              element={
                <Vehicule
                  name={data.technology[0].name}
                  image={data.technology[0].images.portrait}
                  landscape={data.technology[0].images.landscape}
                  description={data.technology[0].description}
                />
              }
            />
            <Route
              path="Spaceport"
              element={
                <Vehicule
                  name={data.technology[1].name}
                  image={data.technology[1].images.portrait}
                  landscape={data.technology[1].images.landscape}
                  description={data.technology[1].description}
                />
              }
            />
            <Route
              path="SpaceCapsule"
              element={
                <Vehicule
                  name={data.technology[2].name}
                  image={data.technology[2].images.portrait}
                  landscape={data.technology[2].images.landscape}
                  description={data.technology[2].description}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
