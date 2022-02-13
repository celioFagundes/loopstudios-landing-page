import { useState } from 'react'
import './App.css'
import logo from './images/logo.svg'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose, AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import {BsPinterest} from 'react-icons/bs'
import vrImg from './images/desktop/image-interactive.jpg'
import useWindowDimensions from './useWindowsDimensions'
const creations = [
  {
    title: 'Deep Earth',
    desktopImg: require('./images/desktop/image-deep-earth.jpg'),
    mobileImg: require('./images/mobile/image-deep-earth.jpg'),
  },
  {
    title: 'Night Arcade',
    desktopImg: require('./images/desktop/image-night-arcade.jpg'),
    mobileImg: require('./images/mobile/image-night-arcade.jpg'),
  },
  {
    title: 'Soccer Team Vr',
    desktopImg: require('./images/desktop/image-soccer-team.jpg'),
    mobileImg: require('./images/mobile/image-soccer-team.jpg'),
  },
  {
    title: 'The Grid',
    desktopImg: require('./images/desktop/image-grid.jpg'),
    mobileImg: require('./images/mobile/image-grid.jpg'),
  },
  {
    title: 'From up above Vr',
    desktopImg: require('./images/desktop/image-from-above.jpg'),
    mobileImg: require('./images/mobile/image-from-above.jpg'),
  },
  {
    title: 'Pocked Borealis',
    desktopImg: require('./images/desktop/image-pocket-borealis.jpg'),
    mobileImg: require('./images/mobile/image-pocket-borealis.jpg'),
  },
  {
    title: 'The curiosity',
    desktopImg: require('./images/desktop/image-curiosity.jpg'),
    mobileImg: require('./images/mobile/image-curiosity.jpg'),
  },
  {
    title: 'Make it Fisheye',
    desktopImg: require('./images/desktop/image-fisheye.jpg'),
    mobileImg: require('./images/mobile/image-fisheye.jpg'),
  },
]
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const {width} = useWindowDimensions()
  return (
    <div className='app'>
      <header className='header'>
        <div className='box-header container'>
          <figure className='logo'>
            <img src={logo} alt='loopstudios' />
          </figure>
          <nav>
            <ul className={`links_list ${menuOpen && 'responsive'}`}>
              <li className='link'>
                <a>About</a>
              </li>
              <li className='link'>
                <a>Careers</a>
              </li>
              <li className='link'>
                <a>Events</a>
              </li>
              <li className='link'>
                <a>Products</a>
              </li>
              <li className='link'>
                <a>Support</a>
              </li>
            </ul>
          </nav>
          <div className='menu_icon'>
            {menuOpen ? (
              <AiOutlineClose color='#fff' size={22} onClick={() => setMenuOpen(false)} />
            ) : (
              <FiMenu color='#fff' size={22} onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
      </header>
      <main>
        <section className='introduction'>
          <div className='box-intro container'>
            <div className='box-title'>
              <h1>Immersive Experiences that deliver</h1>
            </div>
          </div>
        </section>
        <section className='vr-section'>
          <div className=' box-vr container'>
            <figure>
              <img src={vrImg} alt='man using a vr headset' />
            </figure>
            <div className='vr-info'>
              <h2>The leader in interactive VR</h2>
              <p>
                Founded in 2011, Loopstudios has been producing world-class virtual reality projects
                for some of the best companies around the globe. Our award-winning creations have
                transformed businesses through digital experiences that bind to their brand.
              </p>
            </div>
          </div>
        </section>
        <section className='creations'>
          <div className='box-creations container'>
            <div className='creations-header'>
              <h2>Our Creations</h2>
              <button>See All</button>
            </div>
            <div className='creations-list'>
              {creations.map((creation, index) => (
                <div key={index} className='creation-item'>
                  <figure>
                    <img src={width > 620 ?creation.desktopImg : creation.mobileImg} alt={creation.title} />
                  </figure>
                  <p>{creation.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className='box-footer container'>
          <div className='left_container'>
            <figure>
              <img src={logo} alt='loopstudios' />
            </figure>
            <nav>
              <ul className='footer_list'>
                <li >
                  <a>About</a>
                </li>
                <li >
                  <a>Careers</a>
                </li>
                <li >
                  <a>Events</a>
                </li>
                <li >
                  <a>Products</a>
                </li>
                <li >
                  <a>Support</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='right_container'>
            <div className='media-icons'>
              <a href="">
                <AiFillFacebook color = '#fff' size = {22}/>
              </a>
              <a href="">
                <AiOutlineTwitter color = '#fff' size = {22}/>
              </a>
              <a href="">
                <BsPinterest color = '#fff' size = {22}/>
              </a>
              <a href="">
                <AiOutlineInstagram color = '#fff' size = {22}/>
              </a>
              
            </div>
            <p className='copyright'> © 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
