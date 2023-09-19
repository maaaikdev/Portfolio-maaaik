import React, { useContext } from 'react'
import './App.css';
import NavBar from './modules/Nav/Nav';
import Hero from './modules/Hero/Hero';
import Tabs from './components/Tabs/Tabs';
import Contact from './modules/Contact/Contact';
import AboutMeComponent from './modules/AboutMe/AboutMe';
import  { langContext } from './context/langContext';
import { FormattedMessage } from 'react-intl';

function App() {

	const language = useContext(langContext);

  	return (		
		<div className="App">
			<div className='flags-lang'>
				<p>
					<FormattedMessage 
						id="app.lang"
						defaultMessage="Seleccionar lenguaje"
					/>
				</p>
				<img src='images/flag/colombia.png' onClick={() => language.setLanguage('es-CO')} alt='lang-es'/>
				<img src='images/flag/usa.png' onClick={() => language.setLanguage('en-US')} alt='lang-es'/>
			</div>
			<nav>
				<NavBar />
			</nav>
			<header id="home">
				<Hero />
			</header>
			<section id="aboutMe" className='about-me'>
				<AboutMeComponent />
			</section>
			<section className='projects' id="projectsSection">
				<Tabs />
			</section>
			<section className='contact' id="contact">
				<Contact />
			</section>
		</div>
  );
}

export default App;
