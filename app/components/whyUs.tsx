import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaClock, FaExclamationTriangle, FaUsers, FaYoutube, FaShieldAlt } from "react-icons/fa";

const painPoints = [
  { text: "Record and download the video", icon: "📹", time: "5 min", stress: "Low" },
  { text: "Upload to Google Drive or Dropbox", icon: "☁️", time: "15 min", stress: "Medium" },
  { text: "Send link to editor via WhatsApp/Email", icon: "📱", time: "2 min", stress: "Low" },
  { text: "Editor downloads and edits", icon: "✂️", time: "3 hours", stress: "High" },
  { text: "Editor sends back via new link", icon: "🔗", time: "10 min", stress: "Medium" },
  { text: "Download again and upload to YouTube", icon: "📤", time: "20 min", stress: "High" },
];

const ourSolution = [
  { text: "Upload video to your workspace", icon: "🚀", time: "2 min", benefit: "Instant" },
  { text: "Assign editor(s) with one click", icon: "👥", time: "10 sec", benefit: "Seamless" },
  { text: "Editor downloads and re-uploads edited version", icon: "⚡", time: "5 min", benefit: "Organized" },
  { text: "You review and approve", icon: "👀", time: "5 min", benefit: "Controlled" },
  { text: "Directly publish to YouTube", icon: "🎯", time: "30 sec", benefit: "Automated" },
];

const creatorStats = [
  { value: "8+ hours", label: "Saved per video", color: "from-emerald-400 to-teal-600", icon: "⏰" },
  { value: "90%", label: "Faster publishing", color: "from-blue-400 to-indigo-600", icon: "🚀" },
  { value: "Zero", label: "File management stress", color: "from-purple-400 to-pink-600", icon: "😌" },
  { value: "100%", label: "Team synchronization", color: "from-orange-400 to-red-600", icon: "🎯" },
];

export default function WhyUs() {
  const oldWorkflowTime = painPoints.reduce((total, point) => {
    const minutes = parseInt(point.time.split(' ')[0]) * (point.time.includes('hour') ? 60 : 1);
    return total + minutes;
  }, 0);

  const newWorkflowTime = ourSolution.reduce((total, point) => {
    const timeStr = point.time.split(' ')[0];
    const minutes = timeStr === '10' && point.time.includes('sec') ? 0.17 : 
                   timeStr === '30' && point.time.includes('sec') ? 0.5 : 
                   parseInt(timeStr);
    return total + minutes;
  }, 0);

  return (
    <section id="whyUs" className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 py-24 px-4 md:px-20 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <FaExclamationTriangle className="mr-2" />
            The Creator's Daily Reality Check
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-slate-900 dark:text-white">From</span>{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Chaos
            </span>{" "}
            <span className="text-slate-900 dark:text-white">to</span>{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Control
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            See exactly how ContentFlow transforms the chaotic creator workflow into a 
            streamlined, professional collaboration experience that top creators trust.
          </p>
        </motion.div>

        {/* Enhanced time comparison banner */}
        <motion.div
          className="bg-gradient-to-r from-red-500 via-orange-500 to-emerald-500 p-1 rounded-3xl mb-16 max-w-5xl mx-auto shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-red-500 text-5xl font-bold flex items-center justify-center">
                  <FaClock className="mr-3" />
                  {Math.floor(oldWorkflowTime / 60)}h {oldWorkflowTime % 60}m
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-semibold text-lg">Old Workflow Time</p>
                <div className="text-red-500 text-sm font-medium">+ Endless stress & confusion</div>
              </div>
              <div className="space-y-4">
                <div className="text-emerald-500 text-5xl font-bold flex items-center justify-center">
                  <FaCheckCircle className="mr-3" />
                  {Math.floor(newWorkflowTime / 60)}h {Math.ceil(newWorkflowTime % 60)}m
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-semibold text-lg">ContentFlow Time</p>
                <div className="text-emerald-500 text-sm font-medium">+ Complete peace of mind</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                <span className="text-2xl mr-2">🎉</span>
                Save {Math.floor((oldWorkflowTime - newWorkflowTime) / 60)}h {Math.ceil((oldWorkflowTime - newWorkflowTime) % 60)}m per video!
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Old Workflow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-3xl p-8 border-2 border-red-200 dark:border-red-800 shadow-xl">
              <div className="text-center mb-10">
                <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 shadow-lg">
                  <FaExclamationTriangle className="mr-2" />
                  The Old Way (Painful!)
                </div>
                <p className="text-red-700 dark:text-red-300 font-semibold text-lg">
                  What 90% of creators still deal with daily...
                </p>
              </div>
              
              <div className="space-y-6">
                {painPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-red-200 dark:border-red-800 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <div className="text-3xl">{point.icon}</div>
                    <div className="flex-1">
                      <p className="text-slate-700 dark:text-slate-300 font-semibold text-lg">{point.text}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-red-500 text-sm font-bold bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-full">
                          ⏱️ {point.time}
                        </span>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          point.stress === 'High' ? 'bg-red-100 text-red-700' :
                          point.stress === 'Medium' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {point.stress} stress
                        </span>
                      </div>
                    </div>
                    <FaArrowRight className="text-red-400 mt-3 flex-shrink-0" />
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/40 dark:to-orange-900/40 rounded-xl border border-red-300 dark:border-red-700">
                <p className="text-red-800 dark:text-red-200 font-bold text-center text-lg">
                  😩 Result: Burned out creators, confused editors, missed deadlines, lost revenue
                </p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced New Workflow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-3xl p-8 border-2 border-emerald-200 dark:border-emerald-800 shadow-xl">
              <div className="text-center mb-10">
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 shadow-lg">
                  <FaCheckCircle className="mr-2" />
                  The ContentFlow Way ✨
                </div>
                <p className="text-emerald-700 dark:text-emerald-300 font-semibold text-lg">
                  How successful creators work now...
                </p>
              </div>
              
              <div className="space-y-6">
                {ourSolution.map((point, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-800 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <div className="text-3xl">{point.icon}</div>
                    <div className="flex-1">
                      <p className="text-slate-700 dark:text-slate-300 font-semibold text-lg">{point.text}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-emerald-500 text-sm font-bold bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                          ⚡ {point.time}
                        </span>
                        <span className="text-emerald-600 text-xs font-medium bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full">
                          {point.benefit}
                        </span>
                      </div>
                    </div>
                    <FaCheckCircle className="text-emerald-400 mt-3 flex-shrink-0" />
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/40 dark:to-blue-900/40 rounded-xl border border-emerald-300 dark:border-emerald-700">
                <p className="text-emerald-800 dark:text-emerald-200 font-bold text-center text-lg">
                  🚀 Result: Happy creators, efficient editors, consistent uploads, growing revenue
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 mt-20 text-white relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-6">The ContentFlow Impact</h3>
              <p className="text-blue-100 text-xl max-w-3xl mx-auto">
                Real results from 2,500+ creators who made the switch to professional workflow management
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {creatorStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className={`text-4xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-blue-100 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-blue-100 text-xl mb-6">
                <strong>Join 2,500+ creators</strong> who've already transformed their workflow
              </p>
              <div className="flex justify-center items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <FaUsers className="text-blue-300" />
                  <span className="text-blue-200">Active creators</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaYoutube className="text-red-400" />
                  <span className="text-blue-200">YouTube integrated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaShieldAlt className="text-emerald-400" />
                  <span className="text-blue-200">Enterprise secure</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}