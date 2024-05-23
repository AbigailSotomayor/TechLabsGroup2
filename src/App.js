import "bulma/css/bulma.min.css";
import NavBar from "./components/NavBar";
import FilterMenu from "./components/FilterMenu";
import CardGrid from "./components/CardGrid";
function App() {
  return (
    <div
      className="is-flex-direction-column is-flex"
      style={{ minHeight: "100vh" }} //can be removed later
    >
      <NavBar />
      <div className="is-flex mx-5 is-flex-grow-1 ">
        <FilterMenu />
        <div className="is-flex-grow-5">
          <CardGrid />
        </div>
      </div>
    </div>
  );
}
export default App;
