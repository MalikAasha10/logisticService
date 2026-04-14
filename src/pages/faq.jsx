import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "HOW DO I AUTHORIZE A COLD-CHAIN FLEET DEPLOYMENT?",
    answer: "Authorization process details yahan ayenge...",
  },
  {
    id: 2,
    question: "ENCRYPTION PROTOCOLS FOR CROSS-BORDER TELEMETRY?",
    answer:
      "Titan Logistics utilizes AES-256 neural-grade encryption for all telemetry data streams. For cross-border transit, we deploy the 'Sentinel' protocol ensuring data sovereignty with real-time latency under 15ms.",
  },
  {
    id: 3,
    question: "AUTOMATED SMART-CONTRACT DISPUTE RESOLUTION?",
    answer: "Smart contract resolution details...",
  },
  {
    id: 4,
    question: "API RATE LIMITS FOR HIGH-FREQUENCY TRADING?",
    answer: "API rate limits details...",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="bg-[#011428] text-white">

   
      <div className="px-6 md:px-20 py-16">
        <p className="text-green-500 text-sm mb-4 tracking-widest">
          SUPPORT INFRASTRUCTURE
        </p>

        <h1 className="text-5xl font-bold mb-6">
          GLOBAL SUPPORT <br /> MATRIX.
        </h1>

        <p className="text-gray-400 max-w-xl mb-8">
          Navigate the kinetic architecture of Titan's global logistics network.
          Resolve protocols, access API endpoints, and optimize your operational flow.
        </p>

       
        <input
          type="text"
          placeholder="QUERY PROTOCOLS (E.G. API ENCRYPTION)"
          className="w-full md:w-150 p-4 bg-[#02203A] border border-gray-700 rounded-md"
        />
      </div>

   
      <div className="grid md:grid-cols-4 gap-6 px-6 md:px-20 pb-16">
        {["Rental Process", "Billing & Protocol", "Security", "API Integration"].map((item, i) => (
          <div
            key={i}
            className="bg-[#02203A] p-6 rounded-lg border border-gray-700 hover:border-green-500 transition"
          >
            <p className="text-green-500 text-xl mb-4">
              0{i + 1}
            </p>
            <h3 className="font-semibold mb-2">{item}</h3>
            <p className="text-gray-400 text-sm">
              Short description yahan ayegi...
            </p>
          </div>
        ))}
      </div>

     
      <div className="grid md:grid-cols-2 gap-10 px-6 md:px-20 py-16 bg-[#02203A]">

   
        <div>
          <h2 className="text-3xl font-bold mb-4">
            ACTIVE QUERY <br /> RESOLUTION
          </h2>
          <p className="text-gray-400 mb-6">
            Our kinetic support system operates on a zero-latency protocol.
          </p>

          <button className="text-green-500 block mb-2">
            ↓ DOWNLOAD DOCUMENTATION
          </button>
          <button className="text-green-500">
            ● LIVE NODE STATUS
          </button>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-700 rounded-md overflow-hidden"
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-[#011428]"
                onClick={() => toggle(item.id)}
              >
                <span className="text-green-500 mr-4">
                  0{item.id}
                </span>
                <span className="flex-1 text-sm">
                  {item.question}
                </span>
                <span className="text-green-500 text-xl">+</span>
              </div>

              {active === item.id && (
                <div className="p-4 bg-[#02203A] text-gray-400 text-sm border-l-4 border-green-500">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>


      <div className="px-6 md:px-20 py-16">
        <div className="bg-[#02203A] text-center py-16 rounded-xl border border-gray-700">
          <h2 className="text-3xl font-bold mb-4">
            STILL NEED ASSISTANCE?
          </h2>
          <p className="text-gray-400 mb-6">
            Our Command Center technicians are available for manual override and direct operational support 24/7/365.
          </p>

          <button className="bg-green-600 px-6 py-3 rounded-md hover:bg-green-700">
            INITIATE COMMS
          </button>
        </div>
      </div>

    </div>
  );
};

export default FAQ;