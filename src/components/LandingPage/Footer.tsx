import Link from 'next/link';
import { SocialIcon } from "react-social-icons"
import { socials } from "@/constants/socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col justify-center items-center text-white w-full bg-primary">
        <div className='flex flex-col justify-center items-center my-5'>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socials.map((social) => (
              <SocialIcon 
                url={social.link}  
                style={{ height: 40, width: 40 }}
                bgColor="#ffffff"
                fgColor="#050C9C"
                key={social.name}
              />
            ))}
          </div>
        </div>
      <div className="my-5 pt-5 border-t border-white/10 text-center">
          <p className="text-sm">&copy; {currentYear} Foundr. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;