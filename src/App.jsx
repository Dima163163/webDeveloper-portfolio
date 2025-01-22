import './styles/main.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactsPage from './pages/ContactsPage';
import ProjectPage from './pages/ProjectPage';
import ScrollToTop from './utils/scrollToTop';
import CertificatesPage from './pages/CertificatesPage';
import CertificatePage from './pages/CertificatePage';
import ResumePage from './pages/ResumePage';

function App() {
	return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/project/:id" element={<ProjectPage />} />
					<Route path="/certificates" element={<CertificatesPage />} />
					<Route path="/certificate/:id" element={<CertificatePage />} />
					<Route path="/resume" element={<ResumePage />} />
					<Route path="/contacts" element={<ContactsPage />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
