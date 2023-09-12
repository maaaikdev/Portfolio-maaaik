import './App.css';
import NavBar from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import JobsComponent from './components/Jobs/Jobs';
import Tabs from './modules/Tabs/Tabs';
 // Import the JSON file

function App() {	
  	return (
		<div className="App">
			<nav>
				<NavBar />
			</nav>
			<header>
				<Hero />
			</header>
			<section className='projects'>
				{/* <JobsComponent /> */}
				<Tabs />
			</section>
		</div>
  );
}

export default App;
