import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { ProjectsPage } from './pages/ProjectsPage.jsx';
import { TestimonialsPage } from './pages/TestimonialsPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
