import "./assets/css/style.css";
import ProfilePhoto from "./components/Profile/ProfilePhoto";
import FullName from "./components/Profile/FullName";
import Adresse from "./components/Profile/Adresse";

function App() {
  return (
    <div className='container'>
      <ProfilePhoto />
      <div>
        <FullName />
        <Adresse />
      </div>
    </div>
  );
}

export default App;
