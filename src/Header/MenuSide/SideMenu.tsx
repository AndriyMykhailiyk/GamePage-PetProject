import "./SideMenu.scss";
import { useRef, useEffect } from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { FaHome, FaUser, FaCog, FaPhone } from "react-icons/fa"; // імпортуємо іконки

const SideMenu1 = ({ toggleMenu }: { toggleMenu: () => void }) => {
  const ref = useRef(null);

  const useClickAway = (ref: any, onClickAway: () => void) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickAway();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickAway]);
  };

  useClickAway(ref, toggleMenu);

  return (
    <>
      <div className="fixed inset-0 z-40 bg-[rgba(0, 0, 0, 0.5)] backdrop-blur-sm"></div>
      <div
        className="fixed top-0 bottom-0 left-0 z-50 w-64 h-screen bg-zinc-900 shadow-lg overflow-y-auto"
        ref={ref}
        aria-label="Sidebar"
      >
        <div className="flex items-center justify-between p-5 border-b-2 border-zinc-800">
          <span>Menu</span>
          <button onClick={toggleMenu} className="p-3 border-2 border-zinc-800 rounded-xl" aria-label="close sidebar">
            <AiOutlineRollback />
          </button>
        </div>
        <ul className="menu-list">
          <li>
            <a href="/home" className="menu-item">
              <FaHome className="menu-icon" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/about" className="menu-item">
              <FaUser className="menu-icon" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="/contact" className="menu-item">
              <FaPhone className="menu-icon" />
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="/settings" className="menu-item">
              <FaCog className="menu-icon" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu1;
