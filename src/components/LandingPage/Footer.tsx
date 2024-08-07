import Link from 'next/link';
import { SocialIcon } from "react-social-icons"
import { socials } from "@/constants/socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white w-full bg-primary">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are committed to providing the best service to our customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link href="#features" className="text-sm hover:underline">Services</Link></li>
              <li><Link href="#pricing" className="text-sm hover:underline">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">123 Main St, City, Country</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@example.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <SocialIcon 
                  url={social.link}  
                  style={{ height: 40, width: 40 }}
                  bgColor="#212121"
                  className="mb-5"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm">&copy; {currentYear} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;