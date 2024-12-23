import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X} from "@phosphor-icons/react";

const SiteHeader = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar open/close
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="bg-gray-100 py-3">
      <div className="mx-auto py-4 gap-8 w-2/3 flex justify-between items-center">
        <div className="text-3xl font-bold leading-none tracking-tight"><Link to="/">Studio 58</Link></div>

        {/* Desktop Navigation */}
        <div className="hidden sm:block">
          <ul className="flex gap-4 uppercase font-semibold">
            <li className={`hover:text-blue-600 ${location.pathname === '/' ? 'text-blue-800' : ''}`}>
              <Link to="/">Start</Link>
            </li>
            <li className="hover:text-blue-600">
              <a href="https://portal.nabo.se/kundportal/login">Nabo Portalen</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="https://boka.studio58.se">Boka lokal</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="https://drive.google.com/drive/folders/1na1ol2Jgd27hg4GF-kHGtYgWbFFV1kCJ?usp=drive_link">Dokumentation</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="https://docs.google.com/document/d/1W_RQPUg3LS8mofVsxWdctcOqN9brnc7by6rGgHn6yYY/edit?usp=sharing">Kontakter</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="https://drive.google.com/file/d/1IwgXZC099kB8YhtSir4bLwZO3DZvnZkx/view?usp=drive_link">Stadgar</a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Button */}
        <div className="sm:hidden text-right">
          <button
            onClick={toggleSidebar}
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2"
          >
            <span className="sr-only">Open sidebar</span>
            <span><List size={32} /></span>
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-full h-screen bg-gray-50 transition-transform duration-300 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:hidden`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="text-right">
            <button
              onClick={toggleSidebar}
              aria-controls="default-sidebar"
              type="button"
              className="inline-flex items-center p-2"
            >
              <span className="sr-only">Close sidebar</span>
              <span><X size={32} /></span>
            </button>
          </div>
          <ul className="space-y-1 font-medium text-center uppercase">
            <li className={`hover:text-blue-600 ${location.pathname === '/' ? 'text-blue-800' : ''}`}>
              <Link to="/" onClick={toggleSidebar}>Start</Link>
            </li>
            <li className="hover:text-blue-600">
              <a href="https://portal.nabo.se/kundportal/login">Nabo Portalen</a>
            </li>
            <li className={`hover:text-blue-600 ${location.pathname === '/dokumentation' ? 'text-blue-800' : ''}`}>
              <Link to="/dokumentation" onClick={toggleSidebar}>Dokumentation</Link>
            </li>
            <li className={`hover:text-blue-600 ${location.pathname === '/kontakter' ? 'text-blue-800' : ''}`}>
              <Link to="/kontakter" onClick={toggleSidebar}>Kontakter</Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SiteHeader;
