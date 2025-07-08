import headerImg from '../assets/header_img.png';
import Navbar from './Navbar';

function Header() {
  return (
    <div>
      <Navbar /> {/* Navbar stays at the top */}
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex items-center justify-center w-full overflow-hidden"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        
        {/* details section*/}
        <div className="text-center text-white space-y-6">
          <h2 className="text-[60px] font-bold font-o">Explore a Home That Fits Your Dreams</h2>
          <div className="space-x-6">
            <a href="#Project" className="px-6 py-2 bg-white-300 text-white rounded-md shadow outline">Projects</a>
            <a href="#Contact" className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
