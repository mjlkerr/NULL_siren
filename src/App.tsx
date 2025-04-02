import myLogo from './assets/my_logo.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a>
          <img src={myLogo} className="my logo" alt="My Logo" />
        </a>
      </div>
    </>
  )
}

export default App
