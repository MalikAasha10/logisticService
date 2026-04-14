import React from 'react';
import map from '../assets/map.png';

const Contact = () => {
  return (
    <div className="bg-[#020B14] text-white min-h-screen font-sans">
      <section className="pt-20 pb-16 px-6 text-center bg-linear-to-b from-[#031629] to-[#020B14]">
        <p className="text-[#22c55e] text-xs tracking-[0.3em] font-bold mb-4 uppercase">Global Communication Protocol</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          CONTACT <span className="text-[#22c55e]">US</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
          Our neural infrastructure spans continents. Reach out to coordinate high-velocity deployments or integrate with our kinetic logistics network.
        </p>
      </section>

    
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
      
        <div className="space-y-8">
          <div className="bg-[#031629] border border-gray-800 p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-semibold mb-8 text-blue-50">Contact Customer Support</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2">Name</label>
                  <input type="text" placeholder="Full legal entity" className="w-full bg-[#0B2137] border border-gray-700 rounded p-3 focus:outline-none focus:border-[#22c55e] transition" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2">Email</label>
                  <input type="email" placeholder="Secure email address" className="w-full bg-[#0B2137] border border-gray-700 rounded p-3 focus:outline-none focus:border-[#22c55e] transition" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2">Fleet Sector</label>
                <select className="w-full bg-[#0B2137] border border-gray-700 rounded p-3 text-gray-400 focus:outline-none focus:border-[#22c55e]">
                  <option>Intermodal Logistics</option>
                  <option>Neural Network Hubs</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2">Details</label>
                <textarea rows="4" placeholder="Briefing details..." className="w-full bg-[#0B2137] border border-gray-700 rounded p-3 focus:outline-none focus:border-[#22c55e] transition"></textarea>
              </div>
              <button className="w-full bg-[#22c55e] hover:bg-[#1ba84e] text-black font-bold py-4 rounded transition-all duration-300 uppercase tracking-widest text-sm">
                Submit
              </button>
            </form>
          </div>

          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
               <h3 className="text-lg font-medium">Regional Hub Status</h3>
               <span className="flex items-center text-[10px] text-[#22c55e] uppercase font-bold">
                 <span className="w-2 h-2 bg-[#22c55e] rounded-full mr-2 animate-pulse"></span> Systems Operational
               </span>
            </div>
            <div className="bg-[#031629] border border-gray-800 rounded-lg overflow-hidden h-64 flex items-center justify-center">
             
               <img src={map} alt="World Map" className="opacity-20 grayscale invert" />
            </div>
          </div>
        </div>

     
        <div className="space-y-12 py-4">
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Global Headquarters</p>
            <h4 className="text-2xl font-medium text-blue-100">One World Trade Center <br/> New York, NY 10007</h4>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Direct Comms</p>
            <h4 className="text-3xl font-bold text-[#22c55e]">+1-800-TITAN-CORE</h4>
            <p className="text-gray-500 text-sm">Available 24/7/365</p>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Technical Support</p>
            <h4 className="text-2xl font-medium text-blue-200">ops@titan-logistics.ai</h4>
            <p className="text-gray-500 text-sm">Average Response: &lt; 15 mins</p>
          </div>

          <div className="border-l-2 border-[#22c55e] bg-[#031629] p-6">
            <p className="italic text-gray-400 leading-relaxed">
              "Titan Logistics operates on a zero-latency mandate. Your transmission is routed through our global mission control for immediate prioritization."
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-24 px-6 text-center border-t border-gray-900 mt-12 bg-[#010810]">
        <h2 className="text-4xl font-bold mb-4">Ready to Integrate?</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">Experience the future of kinetic logistics. Join 5,000+ enterprise partners leveraging the Titan Monolith.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#22c55e] hover:bg-[#1ba84e] text-black px-10 py-3 rounded font-bold transition uppercase tracking-tighter">Get Started</button>
          <button className="border border-gray-700 hover:bg-gray-800 px-10 py-3 rounded font-bold transition uppercase tracking-tighter">Download Network Specs</button>
        </div>
      </section>

    </div>
  );
};

export default Contact;