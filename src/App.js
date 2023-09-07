import logo from './logo.svg';
import './App.css';
import NavBar from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import JobsComponent from './components/Jobs/Jobs';

function App() {
  return (
    <div className="App">
		<nav>
			<NavBar />
		</nav>
		<header>
			<Hero />
		</header>
		<section>
			<JobsComponent />
		</section>
    </div>
  );
}

export default App;
