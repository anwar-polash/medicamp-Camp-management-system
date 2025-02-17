import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Dynamic children component from router */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
