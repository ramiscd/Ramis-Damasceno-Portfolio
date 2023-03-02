import { useEffect } from 'react'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3  data-aos="fade-up">Ramis Damasceno</h3>
        <p  data-aos="fade-up">
        Olá, eu me chamo Ramis damasceno, tenho 24 anos, e sou desenvolvedor Full Stack!
        Venha conhecer um pouco mais sobre mim, e alguns de meus projetos.
        </p>
        <div className="header__cta"  data-aos="fade-up">
          <a href="#contact" className='btn primary'>Entre em contato</a>
          <a href="#portfolio" className='btn light'>Meus projetos</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header