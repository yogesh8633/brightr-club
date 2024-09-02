
import logo_white from "../../assets/logo_white.png"
import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";


const Footer = () => {
  return (
    <footer className="bg-[#3B72FF] text-white pt-8">
      <div className=" mx-auto px-4 w-1/2">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start ]">
       
          {/* Get Connected */}
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <h3 className="font-semibold mb-4">Get Connected</h3>
            <ul>
              <li className="mb-2">
                <a href="#about" className="hover:underline text-gray-200">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:underline text-gray-200">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#faqs" className="hover:underline text-gray-200">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Policy */}
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <h3 className="font-semibold mb-4">Policy</h3>
            <ul>
              <li className="mb-2">
                <a href="#disclaimer" className="hover:underline text-gray-200">
                  Disclaimer
                </a>
              </li>
              <li className="mb-2">
                <a href="#privacy" className="hover:underline text-gray-200">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#refund" className="hover:underline text-gray-200">
                  Refund Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#terms" className="hover:underline text-gray-200">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-center lg:text-left">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              <img src={insta} alt="Insta Icon" className='cursor-pointer h-1/2'/>
              <img src={facebook} alt="facebook Icon" className='cursor-pointer h-1/2'/>
              <img src={twitter} alt="twitter Icon" className='cursor-pointer h-1/2'/>

            </div>
          </div>
             {/* Logo */}
             <div className="mb-8 lg:mb-0">
            <img
              src={logo_white}
              alt="BrightR.Club"
              className=""
            />
          </div>

        </div>
      </div>

      <div className="text-center mt-8 py-5 text-sm bg-[#386beb]">
        © 2024 BrightR.Club
      </div>
    </footer>
  );
};

export default Footer;
