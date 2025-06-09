"use client";
import { Button, Link } from "@heroui/react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaShieldAlt, FaRocket } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg fixed inset-x-0 z-50 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent text-3xl font-bold">
                  ContentFlow
                </span>
              </div>
              <div className="ml-3 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full shadow-lg">
                BETA
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#whyUs"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-lg font-semibold transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
            >
              Why ContentFlow
            </a>
            <a
              href="#features"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-lg font-semibold transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-lg font-semibold transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
            >
              Pricing
            </a>
            <Button
              as={Link}
              href="/auth"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
            >
              <FaRocket className="mr-2" />
              Start Free Trial
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">14 days</span>
            </Button>
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors duration-300 p-2"
            >
              {mobileMenuOpen ? (
                <RxCross2 className="h-7 w-7" />
              ) : (
                <FiMenu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-4 pt-4 pb-6 space-y-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-lg">
          <a
            href="#whyUs"
            className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 text-lg font-semibold transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
            onClick={closeMobileMenu}
          >
            Why ContentFlow
          </a>
          <a
            href="#features"
            className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 text-lg font-semibold transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
            onClick={closeMobileMenu}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 text-lg font-semibold transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
            onClick={closeMobileMenu}
          >
            Pricing
          </a>
          <div className="pt-4">
            <a
              href="/auth"
              className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-6 py-4 rounded-xl text-lg font-bold text-center transition-all duration-300 shadow-lg"
              onClick={closeMobileMenu}
            >
              <FaRocket className="inline mr-2" />
              Start Free Trial
            </a>
            <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-slate-500">
              <div className="flex items-center space-x-1">
                <FaShieldAlt className="w-4 h-4" />
                <span>14-day trial</span>
              </div>
              <div>•</div>
              <span>No credit card</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}