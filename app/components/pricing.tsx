import { Button, Card, CardBody } from "@heroui/react";
import { plans } from "@repo/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 bg-background dark:bg-gray-900 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the plan that works best for your content creation needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
                className={`h-full overflow-hidden ${plan.popular ? "border-2 border-primary shadow-xl relative" : "border border-gray-200 dark:border-gray-700 shadow-md"}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                <CardBody className="p-8 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold text-foreground dark:text-foreground-dark">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-xl text-foreground-secondary dark:text-foreground-secondary-dark">
                      {plan.period}
                    </span>
                  </div>
                  {plan.name !== "ENTERPRISE" && (
                    <span className="w-fit inline-block bg-primary/10 dark:bg-primary text-primary dark:text-white text-xs font-semibold px-3 py-1 rounded-full mt-3">
                      14-day free trial
                    </span>
                  )}

                  <p className="mt-2 text-foreground-secondary dark:text-foreground-secondary-dark">
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-4 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <FaCheck className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <RxCross2 className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-3 flex-shrink-0" />
                        )}
                        <span
                          className={
                            feature.included
                              ? "text-foreground-secondary dark:text-foreground-secondary-dark"
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
                  >
                    <Button
                      className={`mt-8 w-full ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90 text-white dark:bg-primary/90 dark:hover:bg-primary/80"
                          : "bg-gray-100 hover:bg-gray-200 text-foreground-secondary dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-foreground"
                      }`}
                      variant={plan.popular ? "solid" : "bordered"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-background-secondary rounded-lg p-6 text-center dark:bg-background-secondary-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-foreground-secondary dark:text-foreground-secondary-dark">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
