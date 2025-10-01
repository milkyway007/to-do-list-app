import './App.css'
import VerticalMenu from './components/verticalMenu/VerticalMenu'

function App() {

  return (
    <>
      <div id="app-layout" className="columns">
        <div className="column is-one-fifth has-background-white-ter">
          <VerticalMenu />
        </div>
        <div className="column"></div>
      </div>
    </>
  )
}

export default App
