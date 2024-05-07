import SideBar from "./components/SideBar.js";
import Content from "./components/Content.js";

function App() {
  return (
    <div className="flex cursor-auto">
      <SideBar onIconClick={(section) => document.getElementById(section).scrollIntoView({ behavior: 'smooth' })}/>
      <Content />
    </div>
  )
}

export default App;
