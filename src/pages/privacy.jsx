import React from 'react';

const Privacy = () => {
  const sections = [
    { id: 'data-collection', title: 'Data Collection', num: '01' },
    { id: 'strategic-utilization', title: 'Strategic Utilization', num: '02' },
    { id: 'security-infrastructure', title: 'Security Infrastructure', num: '03' },
    { id: 'user-rights', title: 'User Rights & Access', num: '04' },
    { id: 'global-compliance', title: 'Global Compliance', num: '05' },
  ];

  return (
    <div className="bg-[#020B14] text-white min-h-screen font-sans selection:bg-[#22c55e]/30">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-20 pb-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="max-w-2xl">
          <p className="text-[#22c55e] text-xs tracking-[0.3em] font-bold mb-4 uppercase">Security Excellence</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Privacy Protocol & <br /> Governance.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            At TITAN LOGISTICS, the integrity of your global trade data is our primary directive. Our governance framework ensures total transparency and fortified protection across the kinetic monolith of our supply network.
          </p>
        </div>
        
        {/* Version Control Badge */}
        <div className="mt-8 md:mt-0 bg-[#031629] border border-gray-800 p-4 rounded-md text-right">
          <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Version Control</p>
          <p className="text-[#22c55e] font-mono text-sm">v4.2.0-Elite</p>
          <button className="mt-4 flex items-center text-[10px] text-gray-400 hover:text-white transition uppercase font-bold tracking-widest">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download PDF Protocol
          </button>
        </div>
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left: Sticky Navigation */}
        <aside className="lg:w-1/4">
          <div className="sticky top-28 space-y-8">
            <div>
              <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-4">On This Page</p>
              <nav className="flex flex-col space-y-3">
                {sections.map((section) => (
                  <a 
                    key={section.id} 
                    href={`#${section.id}`} 
                    className="text-sm text-gray-400 hover:text-[#22c55e] transition duration-300"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Legal Support Box */}
            <div className="bg-[#031629] border border-gray-800 p-5 rounded-lg">
              <div className="w-6 h-6 bg-[#22c55e]/20 text-[#22c55e] rounded flex items-center justify-center mb-3 text-xs">🛡️</div>
              <h4 className="text-sm font-bold mb-2">Need Legal Support?</h4>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed text-wrap">Contact our global governance team at compliance@titanlogistics.ai</p>
            </div>
          </div>
        </aside>

        {/* Right: Content Sections */}
        <main className="lg:w-3/4 space-y-24 pb-20">
          
          {/* Section 01: Data Collection */}
          <section id="data-collection" className="scroll-mt-28">
            <div className="flex items-center space-x-4 mb-8">
              <span className="h-px w-12 bg-[#22c55e]"></span>
              <h2 className="text-2xl font-bold">01. Data Collection</h2>
            </div>
            <div className="bg-[#031629] border border-gray-800 p-8 rounded-lg space-y-6">
              <p className="text-gray-400 leading-relaxed">
                TITAN LOGISTICS collects operational telemetry and identifying information necessary to maintain the velocity of our global network. This data is harvested through our proprietary sensor arrays, carrier portals, and strategic partner interfaces.
              </p>
              <div className="grid md:grid-cols-2 gap-8 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="text-[#22c55e]">📡</div>
                  <div>
                    <h4 className="font-bold text-sm uppercase mb-1">Kinetic Telemetry</h4>
                    <p className="text-xs text-gray-500 leading-relaxed text-wrap">Real-time GPS positioning, temperature sensing, and vessel acceleration data.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-[#22c55e]">🆔</div>
                  <div>
                    <h4 className="font-bold text-sm uppercase mb-1">Identity Assertions</h4>
                    <p className="text-xs text-gray-500 leading-relaxed text-wrap">Authorized personnel credentials, biometric verification for high-security cargo access.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 02: Strategic Utilization */}
          <section id="strategic-utilization" className="scroll-mt-28">
            <div className="flex items-center space-x-4 mb-8">
              <span className="h-px w-12 bg-[#22c55e]"></span>
              <h2 className="text-2xl font-bold">02. Strategic Utilization</h2>
            </div>
            <div className="space-y-6 text-gray-400">
              <p>Information processed by our system is utilized solely for the optimization of the global logistics monolith. We do not monetize data; we monetize efficiency.</p>
              <ul className="space-y-4 list-none">
                {['Predictive Routing: Leveraging historical throughput data to bypass geopolitical friction points.', 'Network Balancing: Distribution of cargo load across under-utilized carrier corridors.', 'Risk Mitigation: Early warning detection for supply chain anomalies and maritime hazards.'].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-sm">
                    <span className="text-[#22c55e]">•</span> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 03: Security Infrastructure */}
          <section id="security-infrastructure" className="scroll-mt-28">
            <div className="flex items-center space-x-4 mb-8">
              <span className="h-px w-12 bg-[#22c55e]"></span>
              <h2 className="text-2xl font-bold">03. Security Infrastructure</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#031629] border border-gray-800 p-8 rounded-lg">
                <div className="text-[#22c55e] mb-4 text-2xl">🔒</div>
                <h3 className="text-xl font-bold mb-3 text-wrap">256-bit AES Encryption</h3>
                <p className="text-sm text-gray-500 leading-relaxed text-wrap">All data in transit and at rest is secured using military-grade AES-256 standards. Our encryption keys are rotated bi-weekly using hardware security modules (HSM) located in offshore neutral zones.</p>
              </div>
              <div className="bg-[#031629] border border-gray-800 p-8 rounded-lg">
                <div className="text-[#22c55e] mb-4 text-2xl">🗄️</div>
                <h3 className="text-xl font-bold mb-3 text-wrap">Fortified Data Centers</h3>
                <p className="text-sm text-gray-500 leading-relaxed text-wrap">TITAN nodes are housed in Tier IV subterranean data centers with 24/7 armed presence, biometric perimeter controls, and redundant kinetic energy reserves.</p>
              </div>
            </div>
            
            {/* Uptime Status Bar */}
            <div className="mt-8 bg-[#031629] border border-gray-800 p-6 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase mb-2">Global Network Health</p>
                <div className="flex space-x-1">
                  {[100, 100, 100, 100, 100, 95, 92, 100].map((h, i) => (
                    <div key={i} className={`w-6 bg-[#22c55e] rounded-sm opacity-${h === 100 ? '100' : '40'}`} style={{ height: `${h/4}px` }}></div>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-blue-50">99.999%</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Security Uptime</p>
              </div>
            </div>
          </section>

          {/* Section 04: User Rights */}
          <section id="user-rights" className="scroll-mt-28">
            <div className="flex items-center space-x-4 mb-8">
              <span className="h-px w-12 bg-[#22c55e]"></span>
              <h2 className="text-2xl font-bold text-wrap">04. User Rights & Access</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-800">
                    <th className="pb-4 font-bold">Right</th>
                    <th className="pb-4 font-bold">Protocol Description</th>
                    <th className="pb-4 font-bold text-right">Turnaround</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800/50">
                    <td className="py-6 text-blue-200">Portability</td>
                    <td className="py-6">Request machine-readable export of all kinetic telemetry logs.</td>
                    <td className="py-6 text-right text-[#22c55e]">24 Hours</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-6 text-blue-200">Erasure</td>
                    <td className="py-6 text-wrap">Deletion of non-critical historical shipping documentation.</td>
                    <td className="py-6 text-right text-[#22c55e]">48 Hours</td>
                  </tr>
                  <tr>
                    <td className="py-6 text-blue-200">Correction</td>
                    <td className="py-6">Rectification of metadata regarding carrier certifications.</td>
                    <td className="py-6 text-right text-[#22c55e]">Instant</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 05: Compliance */}
<section id="global-compliance" className="scroll-mt-28">
  <div className="flex items-center space-x-4 mb-8">
    <span className="h-px w-12 bg-[#22c55e]"></span>
    <h2 className="text-2xl font-bold">05. Global Compliance</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {['GDPR (EU Standards)', 'CCPA (California Civil)', 'ISO 27001 (Infosec Mgmt)'].map((item, i) => {
  
      const parts = item.split(' (');
      const title = parts[0];
      const subtitle = parts[1].replace(')', '');

      return (
        <div key={i} className="bg-[#031629] border border-gray-800 p-6 rounded text-center hover:border-[#22c55e] transition cursor-default">
          <h4 className="font-bold text-sm mb-1">{title}</h4>
          <p className="text-[10px] text-gray-500 uppercase">{subtitle}</p>
        </div>
      );
    })}
  </div>
</section>

        </main>
      </div>
    </div>
  );
};

export default Privacy;