import { Typography } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="relative py-8 bg-gradient-to-t from-gray-100 to-white text-gray-800 border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-6">
        {/* Social Links */}
        <div className="flex justify-center gap-10 mb-6">
          <a
            href="https://github.com/[your-username]"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaGithub className="text-2xl text-gray-600 hover:text-[#0078D4] transition-all duration-300 transform group-hover:scale-110" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0078D4] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              GitHub
            </span>
          </a>
          <a
            href="https://linkedin.com/in/[your-username]"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaLinkedin className="text-2xl text-gray-600 hover:text-[#0078D4] transition-all duration-300 transform group-hover:scale-110" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0078D4] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              LinkedIn
            </span>
          </a>
          <a
            href="https://twitter.com/[your-username]"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaTwitter className="text-2xl text-gray-600 hover:text-[#0078D4] transition-all duration-300 transform group-hover:scale-110" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0078D4] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Twitter
            </span>
          </a>
          <a
            href="mailto:your.email@example.com"
            className="group relative"
          >
            <FaEnvelope className="text-2xl text-gray-600 hover:text-[#0078D4] transition-all duration-300 transform group-hover:scale-110" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0078D4] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Email
            </span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-4">
          <Typography
            variant="body1"
            className="text-gray-700 hover:text-[#0078D4] transition-colors duration-300 font-medium"
          >
            [Your Name] |{' '}
            <a href="mailto:your.email@example.com" className="underline hover:text-[#0078D4]">
              your.email@example.com
            </a>
          </Typography>
        </div>

        {/* Copyright */}
        <Typography
          variant="body2"
          className="text-gray-500 text-center text-sm tracking-wide"
        >
          © {new Date().getFullYear()} [Your Name]. Designed with Innovation & Excellence.
        </Typography>
      </div>

      {/* Subtle Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0078D4] to-transparent opacity-30"></div>
    </footer>
  );
}

export default Footer;