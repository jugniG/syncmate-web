import { Button, Card, CardBody } from "@heroui/react";
import { plans } from "@repo/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheck, FaCrown, FaRocket, FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Pricing() {
  const planIcons = {
    "STARTER": <FaRocket className="w-6 h-6" />,
    "CREATOR": <FaStar className="w-6 h-6" />,
    "ENTERPRISE": <FaCrown className="w-6 h-6" />
  };

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            14-Day Free Trial • No Credit Card Required
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pricing That{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Scales With You
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From solo creators to content teams - find the perfect plan for your workflow. 
            Start free and upgrade as you grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <Card
                className={`h-full overflow-hidden relative ${
                  plan.popular 
                    ? "border-3 border-blue-500 shadow-2xl scale-105 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20" 
                    : "border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      🔥 MOST POPULAR
                    </div>
                  </div>
                )}
                
                <CardBody className="p-8 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      plan.popular 
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" 
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }`}>
                      {planIcons[plan.name as keyof typeof planIcons]}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className={`text-5xl font-extrabold ${
                        plan.popular 
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" 
                          : "text-gray-900 dark:text-white"
                      }`}>
                        {plan.price}
                      </span>
                      <span className="ml-2 text-xl text-gray-500 dark:text-gray-400">
                        {plan.period}
                      </span>
                    </div>
                    
                    {plan.name !== "ENTERPRISE" && (
                      <div className="mt-3">
                        <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                          plan.popular 
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" 
                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        }`}>
                          ✨ 14-day free trial
                        </span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-4 flex-grow mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                            <FaCheck className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <RxCross2 className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={
                            feature.included
                              ? "text-gray-700 dark:text-gray-300 font-medium"
                              : "text-gray-400 dark:text-gray-600"
                          }
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`${process.env.NEXT_PUBLIC_CREATOR_BASE_URL}/checkout?planType=${plan.name}`}
                    className="w-full"
                  >
                    <Button
                      className={`w-full h-12 text-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Why Creators Choose ContentFlow
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Start Instantly</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">No setup fees, no contracts, cancel anytime</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Save Money</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Replace multiple tools with one platform</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Save Time</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">5+ hours saved per video on average</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            <strong>500+ creators</strong> are already saving hours weekly. Join them today! 🎬
          </p>
        </motion.div>
      </div>
    </section>
  );
}