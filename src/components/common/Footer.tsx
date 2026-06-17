import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { QUICK_LINKS, SOCIAL_MEDIA } from '../../utils/mockData';

export const Footer: React.FC = () => {
  // Column 1: Links 1-5 (Indices 0 to 4)
  const col1Links = QUICK_LINKS.slice(0, 5);
  // Column 2: Links 6-10 (Indices 5 onwards)
  const col2Links = QUICK_LINKS.slice(5);

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="border-t border-white/10" />
      </div>
      <footer className="bg-brand-dark py-12 md:py-16 font-body">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: QUICK LINKS */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 font-display">
              QUICK LINKS
            </h4>
            <div className="flex flex-col">
              {col1Links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block mb-2"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: JOIN THE TEAM */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 font-display">
              JOIN THE TEAM
            </h4>
            <div className="flex flex-col">
              {col2Links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block mb-2"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: SOCIAL MEDIA */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 font-display">
              SOCIAL MEDIA
            </h4>
            <div className="flex gap-4 items-center">
              {SOCIAL_MEDIA.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  title={social.name}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom (Copyright) */}
        <div className="border-t border-white/5 mt-8 pt-6 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} BOTLEAGUE. All rights reserved.
        </div>
      </div>
    </footer>
  </>
  );
};

export default Footer;
