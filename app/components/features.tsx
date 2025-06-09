import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { FaBell, FaCloudUploadAlt, FaUsers, FaYoutube, FaShieldAlt, FaClock, FaChartLine, FaRocket } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaCloudUploadAlt className="h-7 w-7 text-white" />,
      title: "Smart Video Workspace",
      description:
        "Upload raw footage once and organize everything in project folders. No more hunting through Google Drive or losing files.",
      bullets: [
        "Unlimited video storage",
        "Auto-organize by project",
        "Version history tracking",
        "Smart file compression"
      ],
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      badge: "Core Feature"
    },
    {
      icon: <FaUsers className="h-7 w-7 text-white" />,
      title: "Team Collaboration Hub",
      description:
        "Invite editors, set permissions, and track progress in real-time. Everyone knows exactly what to do and when.",
      bullets: [
        "One-click editor invites",
        "Custom permission levels",
        "Real-time progress tracking",
        "Comment & feedback system"
      ],
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      badge: "Team Essential"
    },
    {
      icon: <FaYoutube className="h-7 w-7 text-white" />,
      title: "Direct YouTube Publishing",
      description:
        "Skip the download-upload cycle forever. Publish approved videos directly to your channels with metadata and thumbnails.",
      bullets: [
        "Connect multiple channels",
        "Schedule publications",
        "Auto-fill metadata",
        "Thumbnail management"
      ],
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
      badge: "Game Changer"
    },
    {
      icon: <FaBell className="h-7 w-7 text-white" />,
      title: "Smart Notifications",
      description:
        "Stay in the loop without being overwhelmed. Get notified when it matters most, how you want it.",
      bullets: [
        "Editor upload alerts",
        "Review reminders",
        "Publishing confirmations",
        "Custom notification rules"
      ],
      gradient: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      badge: "Productivity"
    },
    {
      icon: <FaShieldAlt className="h-7 w-7 text-white" />,
      title: "Creator-Grade Security",
      description:
        "Your content is precious. We protect it with enterprise-level security that top creators and brands trust.",
      bullets: [
        "End-to-end encryption",
        "Secure file sharing",
        "Access control logs",
        "GDPR compliant"
      ],
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      badge: "Enterprise"
    },
    {
      icon: <FaClock className="h-7 w-7 text-white" />,
      title: "Time-Saving Automation",
      description:
        "Automate the boring stuff so you can focus on creating amazing content that your audience loves and engages with.",
      bullets: [
        "Auto-backup uploads",
        "Smart file organization",
        "Workflow templates",
        "Batch operations"
      ],
      gradient: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      badge: "Efficiency"
    },
  ];

  const creatorBenefits = [
    { icon: "🎬", title: "Content Creators", description: "Focus on creating, not managing files" },
    { icon: "✂️", title: "Video Editors", description: "Streamlined workflow with clear instructions" },
    { icon: "📈", title: "Growing Channels", description: "Scale your content production efficiently" },
    { icon: "🏢", title: "Creator Teams", description: "Collaborate seamlessly across time zones" },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <FaRocket className="mr-2" />
            Built for Content Creators
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Scale Your Content
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Stop juggling multiple tools and chaotic workflows. ContentFlow brings your entire video 
            production pipeline into one powerful, creator-focused platform that grows with you.
          </p>
        </motion.div>

        {/* Creator benefits showcase */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {creatorBenefits.map((benefit, index) => (
            <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className={`h-full ${feature.bgColor} border-2 ${feature.borderColor} hover:shadow-2xl transition-all duration-500 group-hover:scale-105 relative overflow-hidden`}>
                {/* Feature badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`bg-gradient-to-r ${feature.gradient} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                    {feature.badge}
                  </span>
                </div>

                <CardBody className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-4">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <div className={`w-6 h-6 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-sm`}>
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-semibold">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced creator testimonial section */}
        <motion.div
          className="mt-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative text-center">
            <div className="text-6xl mb-8">🎬</div>
            <h3 className="text-4xl font-bold mb-6">
              "Finally, a platform that gets creators"
            </h3>
            <p className="text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              "I went from spending 8 hours per video on file management to just 15 minutes. 
              ContentFlow gave me my life back so I can focus on what I love - creating content that my audience actually wants to see."
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-xl">Mike Chen</div>
                <div className="text-blue-200">Tech Reviewer • 1.2M subscribers</div>
                <div className="flex text-yellow-400 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">2,500+</div>
                <div className="text-blue-200">Active Creators</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50,000+</div>
                <div className="text-blue-200">Videos Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">99.9%</div>
                <div className="text-blue-200">Uptime</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}