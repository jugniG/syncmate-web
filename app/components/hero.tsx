"use client";
import heroImage from "@/public/heroImage.png";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPlay, FaYoutube, FaCheckCircle, FaUsers, FaClock, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="pt-20 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-6 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Premium trust indicators */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                Trusted by 2,500+ Creators
              </div>
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200 shadow-sm">
                <FaShieldAlt className="w-3 h-3 mr-2 text-blue-600" />
                Enterprise Security
              </div>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              The{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Creator's
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full"></div>
              </span>
              <br />
              Workflow{" "}
              <span className="relative inline-block">
                Revolution
                <motion.div
                  className="absolute -top-8 -right-8 text-4xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀
                </motion.div>
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              Stop the endless <span className="font-semibold text-red-500 line-through">download-upload-share</span> cycle. 
              <span className="font-semibold text-emerald-600"> Upload once, collaborate seamlessly, publish directly.</span>
              <br />
              <span className="text-lg text-slate-500">The platform that finally gets creators.</span>
            </p>

            {/* Key benefits showcase */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <FaClock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">5+ Hours</div>
                  <div className="text-sm text-slate-600">Saved per video</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <FaUsers className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Zero</div>
                  <div className="text-sm text-slate-600">File confusion</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <FaYoutube className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">1-Click</div>
                  <div className="text-sm text-slate-600">Publishing</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-8">
              <Link href="/#pricing">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-6 h-auto text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl">
                  <FaPlay className="mr-2" />
                  Start Free Trial
                  <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded-full">14 days</span>
                </Button>
              </Link>
              <a href="#whyUs">
                <Button
                  variant="bordered"
                  className="w-full sm:w-auto px-8 py-6 h-auto text-lg border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:text-slate-300 hover:bg-blue-50 transition-all duration-300 rounded-xl font-semibold"
                >
                  Watch Demo
                  <span className="ml-2">→</span>
                </Button>
              </a>
            </div>

            {/* Enhanced social proof */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">M</div>
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">S</div>
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">A</div>
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">+</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">2,500+ creators</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">saving 20+ hours weekly</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-600">4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Platform compatibility */}
            <div className="mt-8 flex items-center space-x-6">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Integrates with:
              </span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center bg-white rounded-lg h-10 w-10 shadow-sm border border-slate-200">
                  <FaYoutube className="h-6 w-6 text-red-600" />
                </div>
                <span className="text-slate-400 text-sm">More platforms coming soon</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Premium floating badges */}
              <motion.div 
                className="absolute -top-6 -left-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl z-10 border border-white/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FaCheckCircle className="inline mr-2" />
                No More Downloads
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl z-10 border border-white/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <FaYoutube className="inline mr-2" />
                Direct Publishing
              </motion.div>

              <motion.div 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl z-10 border border-white/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                <FaClock className="inline mr-2" />
                5+ Hours Saved
              </motion.div>

              <div className="rounded-2xl bg-white dark:bg-slate-800 shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 transform hover:scale-105 transition-transform duration-500">
                <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={heroImage.src}
                    alt="ContentFlow creator dashboard showing seamless video workflow"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 flex items-center justify-center">
                    <div className="text-white text-center max-w-md px-6">
                      <motion.div
                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-white/30 transition-all duration-300 border border-white/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaPlay className="text-white text-2xl ml-1" />
                      </motion.div>
                      <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">
                        See the Magic in Action
                      </h3>
                      <p className="text-white/90 drop-shadow font-medium text-lg">
                        Watch how top creators transformed their workflow and saved 20+ hours per week
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-gradient-to-r from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 relative">
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full p-4 shadow-xl border-4 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-center text-2xl font-bold mt-6 text-slate-900 dark:text-white">
                    Upload → Collaborate → Publish
                  </h3>
                  <p className="text-center text-slate-600 dark:text-slate-300 mt-3 text-lg">
                    The only platform that connects your entire video workflow
                  </p>
                  
                  {/* Enhanced workflow visualization */}
                  <div className="flex justify-center space-x-6 mt-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                        <span className="text-white text-lg font-bold">1</span>
                      </div>
                      <span className="text-sm font-medium text-slate-600">Upload</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                        <span className="text-white text-lg font-bold">2</span>
                      </div>
                      <span className="text-sm font-medium text-slate-600">Edit</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full"></div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                        <span className="text-white text-lg font-bold">3</span>
                      </div>
                      <span className="text-sm font-medium text-slate-600">Publish</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium testimonial card */}
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 max-w-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-3">
                  "ContentFlow saved me 8 hours per video. My team is finally in sync!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 flex items-center justify-center text-white font-bold text-sm">M</div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">Mike Chen</div>
                    <div className="text-xs text-slate-500">Tech Creator • 1.2M subs</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}