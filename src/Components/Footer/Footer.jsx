import "./Footer1.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

export default function Footer() {

  const date = new Date();
const year = date.getFullYear();
  return (
    <div className="">
      
      <footer className="footer">
      <div className="wave-container">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h4>Join Us</h4>
          <p>
            Join us on our journey! Partner with us to shape the future.
            Together, we can create innovative solutions and lead digital
            transformation worldwide.
          </p>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>Kothrud, Pune, Maharashtra</p>
          <p>Email: info@emacronsolutions.com</p>
          <p>Phone: 7843030189</p>
        </div>

        {/* Quick Links section moved here */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a
                // onClick={() => scrollToSection("capabilities")}
                // style={{ cursor: "pointer" }}
              >
                Services
              </a>
            </li>

            <li>
              <a
                // onClick={() => scrollToSection("carrier")}
                // style={{ cursor: "pointer" }}
              >
                Careers
              </a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">

          <Link>
            <FacebookIcon/>
           </Link>


           <Link>
<TwitterIcon/>
           </Link>
           <Link>
<InstagramIcon/>
           </Link>

           

<Link>
<LinkedInIcon/>
</Link>

          </div>
        </div>

        {/* <div className="footer-column">
          <h4>Legal Information</h4>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/cookie-policy">Cookie Policy</a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="footer-copyright">
        <p>&copy; {year} EMACRON. All rights reserved.</p>
      </div>
    </footer>

    </div>
  )
}
