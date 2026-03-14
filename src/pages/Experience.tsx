const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen w-full flex flex-col items-center px-6 py-20"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>

      <div className="max-w-4xl w-full relative">
        {/* Timeline Line */}
        <div className="absolute left-2 top-0 h-full w-0.5 bg-neutral-300 dark:bg-neutral-700" />

        {/* Experience Card */}
        <div className="relative pl-10 pb-12">
          {/* Timeline Dot */}
          <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-black dark:bg-white"></div>

          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-md p-8">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">Software Developer</h3>

              <p className="text-neutral-600 dark:text-neutral-400">
                Comwizard Systems • Sion, Mumbai
              </p>

              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                July 2024 – Present
              </p>
            </div>

            {/* Daily Collection App */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">
                Daily Collection App
              </h4>

              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>
                  Developed a mobile application for field agents to record and
                  manage daily financial collections.
                </li>

                <li>
                  Implemented APIs for transaction tracking and syncing with
                  central banking systems.
                </li>

                <li>
                  Reduced manual record keeping and improved financial reporting
                  accuracy.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-3">
                <Tech>Flutter</Tech>
                <Tech>GetX</Tech>
                <Tech>Node.js</Tech>
                <Tech>Express</Tech>
                <Tech>MySQL</Tech>
              </div>
            </div>

            {/* Customer Banking App */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">
                Customer Banking App
              </h4>

              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>
                  Built a cross-platform mobile banking application using
                  Flutter.
                </li>

                <li>
                  Implemented fund transfers, EMI calculations, OTP
                  authentication, and push notifications.
                </li>

                <li>
                  Integrated Razorpay payment gateway and Firebase
                  notifications.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-3">
                <Tech>Flutter</Tech>
                <Tech>GetX</Tech>
                <Tech>Firebase</Tech>
                <Tech>Razorpay</Tech>
              </div>
            </div>

            {/* Third Party APIs */}
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Third-Party API Integrations
              </h4>

              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>
                  Developed secure REST APIs using Node.js, Express.js, and JWT
                  authentication.
                </li>

                <li>
                  Collaborated with external clients to integrate banking APIs.
                </li>

                <li>
                  Assisted teams during integration testing and troubleshooting.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-3">
                <Tech>Node.js</Tech>
                <Tech>Express</Tech>
                <Tech>JWT</Tech>
                <Tech>REST APIs</Tech>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tech = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-xs px-3 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
      {children}
    </span>
  );
};

export default Experience;
