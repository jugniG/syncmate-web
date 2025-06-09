import { Divider } from "@heroui/react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaHeart, FaShieldAlt, FaRocket, FaStar } from "react-icons/fa";

export default function Footer() {
  const creatorResources = [
    { name: "Creator Success Stories", href: "#" },
    { name: "Video Workflow Guide", href: "#" },
    { name: "YouTube Best Practices", href: "#" },
    { name: "Creator Community", href: "#" },
  ];

  const platformLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Security", href: "#" },
    { name: "API Documentation", href: "#" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Video Tutorials", href: "#" },
    { name: "Contact Support", href: "/contact-us" },
    { name: "System Status", href: "#" },
  ];

  const trustBadges = [
    { icon: <FaShieldAlt className="w-5 h-5" />, text: "Enterprise Security" },
    { icon: <FaRocket className="w-5 h-5" />, text: "99.9% Uptime" },
    { icon: <FaStar className="w-5 h-5" />, text: "4.9/5 Rating" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-20 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Enhanced brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">C</span>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                ContentFlow
              </div>
            </div>
            <p className="text-slate-300 mb-8 max-w-md leading-relaxed text-lg">
              The collaboration platform that content creators actually love. 
              Stop the file chaos, start creating more, and scale your content production like never before.
            </p>
            
            {/* Trust badges */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-3 text-slate-300">
                  <div className="text-blue-400">{badge.icon}</div>
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Enhanced social links */}
            <div className="flex space-x-4">
              <a
                href="https://x.com/guptas3067"
                className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <FaTwitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-800 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <FaYoutube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-800 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <FaInstagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-800 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <FaLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Creator Resources */}
          <div>
            <h3 className="font-bold mb-6 text-white text-lg">
              For Creators
            </h3>
            <ul className="space-y-4">
              {creatorResources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-bold mb-6 text-white text-lg">
              Platform
            </h3>
            <ul className="space-y-4">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-bold mb-6 text-white text-lg">
              Support
            </h3>
            <ul className="space-y-4">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Divider className="my-12 bg-slate-700" />
        
        {/* Enhanced bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-slate-400 text-center md:text-left">
            <p className="text-lg">© {new Date().getFullYear()} ContentFlow. All rights reserved.</p>
            <p className="text-sm mt-1">Empowering creators worldwide since 2024</p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end space-x-8 text-sm">
            <a
              href="/privacy-policy"
              className="text-slate-400 hover:text-white transition-colors duration-300 hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="text-slate-400 hover:text-white transition-colors duration-300 hover:underline"
            >
              Terms of Service
            </a>
            <a
              href="/cancellations-and-refund"
              className="text-slate-400 hover:text-white transition-colors duration-300 hover:underline"
            >
              Refund Policy
            </a>
          </div>
        </div>
        
        {/* Creator love section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3">
            <p className="text-slate-300 text-lg flex items-center">
              Made with <FaHeart className="text-red-500 mx-2 animate-pulse" /> for content creators worldwide
            </p>
          </div>
          <p className="text-slate-400 text-sm mt-4">
            Trusted by 2,500+ creators • Processing 50,000+ videos monthly
          </p>
        </div>
      </div>
    </footer>
  );
}