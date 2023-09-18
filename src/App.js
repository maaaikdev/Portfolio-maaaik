import './App.css';
import NavBar from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Tabs from './modules/Tabs/Tabs';
import Contact from './components/Contact/Contact';
import AboutMeComponent from './components/AboutMe/AboutMe';

function App() {	
  	return (
		<div className="App">
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
