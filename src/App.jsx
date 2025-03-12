import Header from "./components/Header.jsx";
import Joblist from "./components/Joblist.jsx";
import FilterBar from "./components/FilterBar.jsx";

function App() {
  return (
    <div className="app-container flex flex-col gap-16 items-center w-full">
      <Header />
      <FilterBar />
      <Joblist />
    </div>
  );
}

export default App;
