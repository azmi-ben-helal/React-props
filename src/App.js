import logo from './logo.svg'
import './App.css'
import Profile from './Profile/Profile'
import image from './images/test.jpg'
function App() {
  let data = {
    fullName: 'Azmi ben helal',
    bio: 'coucou',
    profession: 'ingenieur',
  }
  return (
    <>
      <Profile
        fullName={data.fullName}
        bio={data.bio}
        profession={data.profession}
      >
        {image}
      </Profile>
    </>
  )
}

export default App
