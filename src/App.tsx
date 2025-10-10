import VerticalMenu from "./components/verticalMenu/VerticalMenu";

import "./App.css";

/**
 * @returns Returns an App icon.
 */
function App() {
  return (
    <>
      <div id={"app-layout"} className={"columns"}>
        <div className={"column is-2 has-background-white-ter"}>
          <VerticalMenu />
        </div>
        <div className={"column"}></div>
      </div>
    </>
  );
}

export default App;
