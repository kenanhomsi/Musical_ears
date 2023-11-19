import './App.css'
import smokeImage from '../src/assets/smoke.svg'
import { Missing_part } from './components/Missing_part'
import { Wisdom_today } from './components/Wisdom_today'
import { Celebrity_eyes } from './components/Celebrity_eyes'
import { Guess_word } from './components/Guess_word'
import { Number_and_gift } from './components/Number_and_gift'
import { Musical_hearings } from './components/Musical_hearings'
import { Artist_and_song } from './components/Artist_and_song'
import { Leader } from './components/Leader'
import { MyLanguage } from './components/MyLanguage'
import { Fly_on_picture } from './components/Fly_on_picture'
import { Thief_and_detective } from './components/Thief_and_detective'
import { What_listeners_ask_for } from './components/What_listeners_ask_for'
import { Ice_and_water } from './components/Ice_and_water'
import { Songs_from_memory } from './components/Songs_from_memory'
import { Links } from './components/Links'
import { Home } from './components/Home'
import {Route,Routes,Link} from 'react-router-dom'
function App() {
  return (
    <div className='main'>
      <div className='main_header'>
        <Link to={'/Musical_ears'}>home</Link>
       </div>
       <div className="smoke">
            <input id="checkbox" type="checkbox"/>
          <label className="switch" htmlFor="checkbox">
            <img src={smokeImage} alt="" className='svg'/>
            smoking
          </label>

       </div>
    <Routes>
    <Route path='/Musical_ears' element={<Home />}/>
    <Route path='/links' element={<Links />}/>
      <Route path='/Missing_part' element={<Missing_part />}/>
      <Route path='/Wisdom_today' element={<Wisdom_today />} />
      <Route path='/Celebrity_eyes' element={<Celebrity_eyes />} />
      <Route path='/Guess_word' element={<Guess_word />} />
      <Route path='/Number_and_gift' element={<Number_and_gift />} />
      <Route path='/Musical_hearings' element={<Musical_hearings />} />
      <Route path='/Leader' element={<Leader />} />
      <Route path='/Artist_and_song' element={<Artist_and_song />} />
      <Route path='/MyLanguage' element={<MyLanguage />} />
      <Route path='/Fly_on_picture' element={<Fly_on_picture />} />
      <Route path='/Thief_and_detective' element={<Thief_and_detective />} />
      <Route path='/What_listeners_ask_for' element={<What_listeners_ask_for />} />
      <Route path='/Ice_and_water' element={<Ice_and_water />} />
      <Route path='/Songs_from_memory' element={<Songs_from_memory />} />

    </Routes>
    </div>
  )
}

export default App
