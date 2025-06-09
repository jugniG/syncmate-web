import { Button, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheck, FaCrown, FaRocket, FaStar, FaFire, FaShieldAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export const plans = [
  {
    name: "STARTER",
    price: "$9",
    period: "/month",
    description: "Perfect for individual creators getting started with professional workflow.",
    features: [
      { included: true, text: "1 YouTube channel" },
      { included: true, text: "Up to 3 editors" },
      { included: true, text: "Use your own Google Drive for storage" },
      { included: true, text: "Basic collaboration tools" },
      { included: false, text: "Cloud storage included" },
      { included: false, text: "Priority support" },
      { included: false, text: "Advanced analytics" },
    ],
    cta: "Start Free Trial",
    popular: false,
    monthlySubscriptionId: "sub_QS5jj0OdssPydD",
    yearlySubscriptionId: "sub_QS6nzgmL2lcNeB",
    badge: "Most Popular",
    savings: "Save $18/year"
  },
  {
    name: "CREATOR",
    price: "$19",
    period: "/month",
    description: "Ideal for serious creators managing multiple channels and growing teams.",
    features: [
      { included: true, text: "Up to 5 YouTube channels" },
      { included: true, text: "Up to 10 editors" },
      { included: true, text: "100GB cloud storage included" },
      { included: true, text: "Advanced collaboration tools" },
      { included: true, text: "Basic analytics & insights" },
      { included: true, text: "Email support" },
      { included: false, text: "Priority support" },
    ],
    cta: "Start Free Trial",
    popular: true,
    monthlySubscriptionId: "sub_QS6q88HHiJo1iu",
    yearlySubscriptionId: "sub_QS6vlNQegRBuvh",
    badge: "Best Value",
    savings: "Save $38/year"
  },
  {
    name: "PRO",
    price: "$49",
    period: "/month",
    description: "For professional creators and small production teams scaling their content.",
    features: [
      { included: true, text: "Up to 15 YouTube channels" },
      { included: true, text: "Up to 25 editors" },
      { included: true, text: "500GB cloud storage included" },
      { included: true, text: "Advanced analytics & insights" },
      { included: true, text: "Priority support" },
      { included: true, text: "Custom workflows" },
      { included: true, text: "Team management tools" },
    ],
    cta: "Start Free Trial",
    popular: false,
    monthlySubscriptionId: "sub_QS6sHh3HuUeS0c",
    yearlySubscriptionId: "sub_QS6x26maXPTRwi",
    badge: "Professional",
    savings: "Save $98/year"
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    period: "",
    description: "For large creator networks and agencies needing unlimited flexibility and support.",
    features: [
      { included: true, text: "Unlimited YouTube channels" },
      { included: true, text: "Unlimited editors" },
      { included: true, text: "2TB+ cloud storage (negotiable)" },
      { included: true, text: "Dedicated account manager" },
      { included: true, text: "24/7 priority support" },
      { included: true, text: "Custom integrations" },
      { included: true, text: "White-label options" },
    ],
    cta: "Contact Sales",
    popular: false,
    monthlySubscriptionId: "",
    yearlySubscriptionId: "",
    badge: "Enterprise",
    savings: "Custom pricing"
  },
];

export default function Pricing() {
  const planIcons = {
    "STARTER": <FaRocket className="w-7 h-7" />,
    "CREATOR": <FaStar className="w-7 h-7" />,
    "PRO": <FaFire className="w-7 h-7" />,
    "ENTERPRISE": <FaCrown className="w-7 h-7" />
  };

  const trustIndicators = [
    { icon: "🚀", title: "Start Instantly", description: "No setup fees, no contracts, cancel anytime" },
    { icon: "💰", title: "Save Money", description: "Replace 5+ tools with one platform" },
    { icon: "⚡", title: "Save Time", description: "8+ hours saved per video on average" },
    { icon: "🔒", title: "Secure & Reliable", description: "Enterprise-grade security & 99.9% uptime" },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 relative overflow-hidden"
    >
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
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <FaShieldAlt className="mr-2" />
            14-Day Free Trial • No Credit Card Required
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8">
            Pricing That{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Scales With You
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            From solo creators to content teams - find the perfect plan for your workflow. 
            Start free, upgrade as you grow, and save thousands on multiple tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <Card
                className={`h-full overflow-hidden relative ${
                  plan.popular 
                    ? "border-3 border-blue-500 shadow-2xl scale-105 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20" 
                    : "border-2 border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl border border-white/20">
                      🔥 MOST POPULAR
                    </div>
                  </div>
                )}
                
                <CardBody className="p-8 flex flex-col h-full">
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg ${
                      plan.popular 
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" 
                        : "bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-slate-600 dark:text-slate-400"
                    }`}>
                      {planIcons[plan.name as keyof typeof planIcons]}
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                      plan.popular 
                        ? "bg-blue-100 text-blue-700" 
                        : "bg-slate-100 text-slate-600"
                    }`}>
                      {plan.badge}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className={`text-5xl font-extrabold ${
                        plan.popular 
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" 
                          : "text-slate-900 dark:text-white"
                      }`}>
                        {plan.price}
                      </span>
                      <span className="ml-2 text-xl text-slate-500 dark:text-slate-400">
                        {plan.period}
                      </span>
                    </div>
                    
                    {plan.name !== "ENTERPRISE" && (
                      <div className="mt-4 space-y-2">
                        <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                          plan.popular 
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" 
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        }`}>
                          ✨ 14-day free trial
                        </div>
                        <div className="text-emerald-600 text-sm font-medium">
                          {plan.savings}
                        </div>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-4 flex-grow mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-sm">
                            <FaCheck className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <RxCross2 className="h-6 w-6 text-slate-400 dark:text-slate-600 mr-4 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={
                            feature.included
                              ? "text-slate-700 dark:text-slate-300 font-medium"
                              : "text-slate-400 dark:text-slate-600"
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
                      className={`w-full h-14 text-lg font-bold transition-all duration-300 rounded-xl ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-300 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500"
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

        {/* Enhanced trust indicators */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-2xl border border-slate-200 dark:border-slate-700 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Why 2,500+ Creators Choose ContentFlow
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{indicator.icon}</div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{indicator.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{indicator.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced final CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Workflow?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join thousands of creators who've already saved 20+ hours per week and scaled their content production.
              </p>
              <div className="flex justify-center items-center space-x-8 text-blue-200">
                <div className="flex items-center space-x-2">
                  <FaShieldAlt className="text-emerald-400" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaRocket className="text-blue-400" />
                  <span>No setup required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaStar className="text-yellow-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}