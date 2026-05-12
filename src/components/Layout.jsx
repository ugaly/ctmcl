import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

export function Layout() {
  const isHome = useLocation().pathname === '/';

  return (
    <div className="min-h-dvh bg-white font-sans text-slate-800 antialiased">
      <Header isHome={isHome} />
      <Outlet />
      <Footer />
    </div>
  );
}
