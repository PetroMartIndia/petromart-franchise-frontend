"use client";
import React, { useState } from 'react';
import { 
  Fuel, Zap, ShoppingBag, TrendingUp, ShieldCheck, 
  DollarSign, MapPin, Users, Award, ChevronRight, 
  CheckCircle, ArrowRight, Calculator, HelpCircle, 
  Menu, X, Building, Phone, Mail, Globe, Sparkles,
  Download, FileText, Check, Star
} from 'lucide-react';

export default function PetromartFranchiseApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // ROI Calculator State
  const [investment, setInvestment] = useState(75000); // in USD
  const [footfall, setFootfall] = useState(1200); // daily customers / orders
  const [deliveryVolume, setDeliveryVolume] = useState(450); // daily e-commerce delivery packages

  // Application Wizard State
  const [wizardStep, setWizardStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    tier: 'Standard Hub',
    capital: '$50k - $100k',
    experience: 'None / Eager to learn',
    timeline: 'Immediate (0-3 months)'
  });
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Calculated ROI Metrics
  const estimatedMonthlyRevenue = Math.round(investment * 0.35 + footfall * 45 + deliveryVolume * 18);
  const estimatedMonthlyProfit = Math.round(estimatedMonthlyRevenue * 0.28);
  const paybackMonths = Math.max(10, Math.round((investment / estimatedMonthlyProfit) * 1.1));

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWizardSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 font-sans selection:bg-[#FACC15] selection:text-[#0A0A0A]">
      
      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#FACC15] flex items-center justify-center shadow-lg shadow-[#FACC15]/20">
              <Fuel className="w-6 h-6 text-[#0A0A0A]" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-wider text-[#FACC15]">
                PETROMART
              </span>
              <span className="block text-[10px] tracking-widest text-zinc-400 uppercase font-semibold">
                Fuel • EV • E-Commerce
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-300">
            <a href="#about" className="hover:text-[#FACC15] transition-colors">About</a>
            <a href="#business-model" className="hover:text-[#FACC15] transition-colors">Business Model</a>
            <a href="#tiers" className="hover:text-[#FACC15] transition-colors">Investment Tiers</a>
            <a href="#calculator" className="hover:text-[#FACC15] transition-colors">ROI Calculator</a>
            <a href="#benefits" className="hover:text-[#FACC15] transition-colors">Why Petromart</a>
            <a href="#faq" className="hover:text-[#FACC15] transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#apply" 
              className="px-5 py-2.5 rounded-xl bg-[#FACC15] hover:bg-[#EAB308] text-[#0A0A0A] font-bold text-sm shadow-lg shadow-[#FACC15]/20 transition-all transform hover:-translate-y-0.5"
            >
              Apply Now
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#121212]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#121212] border-b border-zinc-800 px-4 pt-4 pb-6 space-y-3">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-zinc-300 hover:text-[#FACC15]">About</a>
            <a href="#business-model" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-zinc-300 hover:text-[#FACC15]">Business Model</a>
            <a href="#tiers" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-zinc-300 hover:text-[#FACC15]">Investment Tiers</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-zinc-300 hover:text-[#FACC15]">ROI Calculator</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-zinc-300 hover:text-[#FACC15]">Why Petromart</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-zinc-300 hover:text-[#FACC15]">FAQ</a>
            <div className="pt-2">
              <a 
                href="#apply" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-3 rounded-xl bg-[#FACC15] text-[#0A0A0A] font-bold"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#121212] to-[#0A0A0A]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FACC15]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-zinc-800 text-[#FACC15] text-xs font-semibold mb-6 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>Next-Gen Energy & E-Commerce Franchise Opportunity</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Drive the Future of <span className="text-[#FACC15]">Fuel & E-Commerce</span> with Petromart
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 mb-10 leading-relaxed">
              Combine traditional high-margin petroleum retail, ultra-fast EV supercharging, and localized e-commerce fulfillment hubs under one profitable franchise umbrella.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a 
                href="#tiers"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FACC15] hover:bg-[#EAB308] text-[#0A0A0A] font-bold text-base shadow-xl shadow-[#FACC15]/20 transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Investment Tiers</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#apply"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#121212] border border-zinc-800 hover:bg-zinc-800 text-zinc-200 font-bold text-base transition-all flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5 text-[#FACC15]" />
                <span>Download Franchise Brochure</span>
              </a>
            </div>
          </div>

          {/* Key Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { label: 'Active Outlets', value: '500+', icon: Building, color: 'text-[#FACC15]' },
              { label: 'Partner Revenue', value: '$45M+', icon: DollarSign, color: 'text-amber-400' },
              { label: 'Success Rate', value: '98%', icon: Award, color: 'text-yellow-400' },
              { label: 'Daily Transactions', value: '150k+', icon: TrendingUp, color: 'text-yellow-300' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-[#121212] backdrop-blur border border-zinc-800 p-6 rounded-2xl text-center shadow-lg hover:border-zinc-700 transition-colors">
                  <div className={`inline-flex p-3 rounded-xl bg-[#0A0A0A] mb-3 ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section id="business-model" className="py-24 bg-[#121212]/40 border-t border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#FACC15]/10 text-[#FACC15] text-xs font-bold uppercase tracking-wider mb-4">
                The Petromart Advantage
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-snug">
                Reinventing Fuel Stations into Decentralized E-Commerce Hubs
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Petromart bridges the gap between conventional automotive needs and the future of digital retail. By transforming traditional gas stations and fueling stops into multi-revenue micro-warehouses and EV charging plazas, we provide franchise owners with resilient, diversified income streams.
              </p>
              <div className="space-y-4">
                {[
                  'Integrated Fuel & Lubricants Supply Chain with guaranteed margins',
                  'High-speed DC EV Charging stations powered by green energy grids',
                  'Last-mile e-commerce package pickup & dark store fulfillment lockers',
                  'Proprietary mobile app routing local shoppers directly to your physical outlet'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#FACC15]/20 text-[#FACC15] flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FACC15]/10 to-amber-500/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-[#121212] border border-zinc-800 p-8 rounded-3xl shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#FACC15]/20 text-[#FACC15] flex items-center justify-center">
                      <Fuel className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Tri-Stream Revenue</div>
                      <div className="text-xs text-zinc-400">Fuel + EV + E-Commerce</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#FACC15]/20 text-[#FACC15] text-xs font-semibold">Active Model</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#0A0A0A] p-4 rounded-xl border border-zinc-800">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-300 font-medium">Petroleum & Lubricants</span>
                      <span className="text-[#FACC15] font-bold">45% Share</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#FACC15] h-full rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>

                  <div className="bg-[#0A0A0A] p-4 rounded-xl border border-zinc-800">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-300 font-medium">EV Supercharging Hubs</span>
                      <span className="text-amber-400 font-bold">30% Share</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>

                  <div className="bg-[#0A0A0A] p-4 rounded-xl border border-zinc-800">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-300 font-medium">E-Commerce Dark Store / Pickup</span>
                      <span className="text-yellow-400 font-bold">25% Share</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Investment Tiers */}
      <section id="tiers" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#FACC15]/10 text-[#FACC15] text-xs font-bold uppercase tracking-wider mb-4">
              Investment Options
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Franchise Investment Tiers
            </h2>
            <p className="text-zinc-400">
              Tailored investment models designed to fit your budget, location footprint, and growth ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Express Kiosk',
                tagline: 'Ideal for urban convenience & EV charging pads',
                investment: '$35,000 - $60,000',
                space: '500 - 1,000 sq. ft.',
                roi: '12 - 18 Months',
                features: [
                  'Fast EV DC Charging (2-4 slots)',
                  'Lubricants & Auto-Essentials Kiosk',
                  'E-Commerce Locker Hub',
                  'Low staffing requirement (1-2 staff)'
                ],
                popular: false
              },
              {
                name: 'Standard Hub',
                tagline: 'Comprehensive fuel & digital store model',
                investment: '$75,000 - $150,000',
                space: '2,500 - 5,000 sq. ft.',
                roi: '14 - 20 Months',
                features: [
                  'Full Petroleum & Fuel Dispensing',
                  'EV Supercharging Plaza (6-8 slots)',
                  'Dark Store E-Commerce Fulfillment',
                  'Convenience Retail Store',
                  'Dedicated 24/7 Support'
                ],
                popular: true
              },
              {
                name: 'Mega Station / EV Hub',
                tagline: 'High-volume highway or prime metro station',
                investment: '$200,000 - $350,000+',
                space: '10,000+ sq. ft.',
                roi: '18 - 24 Months',
                features: [
                  'Multi-Island High-Speed Fuel Pumps',
                  'Ultra-Fast EV Megachargers (16+ slots)',
                  'Regional E-Commerce Micro-Warehouse',
                  'Automotive Service & Maintenance Bay',
                  'Priority Corporate Accounts'
                ],
                popular: false
              },
            ].map((tier, idx) => (
              <div 
                key={idx} 
                className={`relative bg-[#121212] rounded-3xl p-8 border flex flex-col justify-between transition-all ${
                  tier.popular ? 'border-[#FACC15] shadow-2xl shadow-[#FACC15]/10 ring-2 ring-[#FACC15]/30' : 'border-zinc-800'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FACC15] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider shadow">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="text-xl font-bold text-white mb-1">{tier.name}</div>
                  <p className="text-xs text-zinc-400 mb-6">{tier.tagline}</p>
                  
                  <div className="mb-6 pb-6 border-b border-zinc-800">
                    <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold mb-1">Estimated Investment</div>
                    <div className="text-2xl font-black text-[#FACC15]">{tier.investment}</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Space Required:</span>
                      <span className="text-zinc-200 font-semibold">{tier.space}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Projected Payback:</span>
                      <span className="text-zinc-200 font-semibold">{tier.roi}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-3 text-sm text-zinc-300">
                        <CheckCircle className="w-4 h-4 text-[#FACC15] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href="#apply"
                  className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all ${
                    tier.popular 
                      ? 'bg-[#FACC15] hover:bg-[#EAB308] text-[#0A0A0A] shadow-lg shadow-[#FACC15]/20' 
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                  }`}
                >
                  Select This Tier
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive ROI & Profitability Calculator */}
      <section id="calculator" className="py-24 bg-[#121212]/40 border-t border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#FACC15]/10 text-[#FACC15] text-xs font-bold uppercase tracking-wider mb-4">
              Financial Projections
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Interactive ROI & Profitability Calculator
            </h2>
            <p className="text-zinc-400">
              Estimate your monthly revenue, net earnings, and payback period based on your projected capital and location traffic.
            </p>
          </div>

          <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 sm:p-10 max-w-5xl mx-auto shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Sliders Control */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-zinc-200">Investment Capital ($ USD)</label>
                  <span className="text-[#FACC15] font-bold text-lg">${investment.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="30000" 
                  max="300000" 
                  step="5000"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#FACC15]"
                />
                <div className="flex justify-between text-xs text-zinc-500 mt-1">
                  <span>$30k</span>
                  <span>$150k</span>
                  <span>$300k+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-zinc-200">Daily Footfall / Customers</label>
                  <span className="text-[#FACC15] font-bold text-lg">{footfall.toLocaleString()} visitors</span>
                </div>
                <input 
                  type="range" 
                  min="300" 
                  max="5000" 
                  step="100"
                  value={footfall}
                  onChange={(e) => setFootfall(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#FACC15]"
                />
                <div className="flex justify-between text-xs text-zinc-500 mt-1">
                  <span>300</span>
                  <span>2,500</span>
                  <span>5,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-zinc-200">Daily E-Commerce Delivery Orders</label>
                  <span className="text-[#FACC15] font-bold text-lg">{deliveryVolume.toLocaleString()} orders</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="2000" 
                  step="50"
                  value={deliveryVolume}
                  onChange={(e) => setDeliveryVolume(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#FACC15]"
                />
                <div className="flex justify-between text-xs text-zinc-500 mt-1">
                  <span>50</span>
                  <span>1,000</span>
                  <span>2,000+</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0A0A0A] border border-zinc-800 text-xs text-zinc-400">
                * Projections are algorithmic estimations based on historical average network performance across 500+ operational franchise hubs.
              </div>
            </div>

            {/* Calculated Output Box */}
            <div className="bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-6 pb-4 border-b border-zinc-800">
                  Estimated Financial Return Summary
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Estimated Monthly Revenue</div>
                    <div className="text-3xl font-extrabold text-white">${estimatedMonthlyRevenue.toLocaleString()}</div>
                  </div>

                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Estimated Monthly Net Profit (28%)</div>
                    <div className="text-3xl font-extrabold text-[#FACC15]">${estimatedMonthlyProfit.toLocaleString()}</div>
                  </div>

                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Estimated Payback Period</div>
                    <div className="text-3xl font-extrabold text-amber-400">{paybackMonths} Months</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <a 
                  href="#apply" 
                  className="block w-full py-4 rounded-xl bg-[#FACC15] hover:bg-[#EAB308] text-[#0A0A0A] font-bold text-center shadow-lg shadow-[#FACC15]/20 transition-all"
                >
                  Apply with These Projections
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Petromart Section */}
      <section id="benefits" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Why Partner with Petromart?
            </h2>
            <p className="text-zinc-400">
              We provide unmatched end-to-end support to ensure your franchise thrives from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Supply Chain Backing',
                desc: 'Direct wholesale agreements with leading petroleum refiners and EV hardware manufacturers.',
                icon: ShieldCheck
              },
              {
                title: 'Digital App Integration',
                desc: 'Pre-loaded customer base through the Petromart mobile app directing local traffic to your station.',
                icon: ShoppingBag
              },
              {
                title: '24/7 Operational Support',
                desc: 'Dedicated franchise success managers, technical troubleshooting, and automated compliance tools.',
                icon: Users
              },
              {
                title: 'Multi-Stream Revenue',
                desc: 'Immune to single-market downturns by balancing fuel sales, EV charging, and e-commerce logistics.',
                icon: TrendingUp
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-[#121212] border border-zinc-800 p-8 rounded-3xl hover:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-[#FACC15]/10 text-[#FACC15] flex items-center justify-center mb-6 border border-[#FACC15]/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Franchise Application Wizard */}
      <section id="apply" className="py-24 bg-[#121212]/40 border-t border-zinc-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#FACC15]/10 text-[#FACC15] text-xs font-bold uppercase tracking-wider mb-4">
              Start Your Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Franchise Application Portal
            </h2>
            <p className="text-zinc-400">
              Complete our secure 3-step application wizard to take the first step towards owning a Petromart franchise.
            </p>
          </div>

          <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-20 h-20 rounded-full bg-[#FACC15]/20 text-[#FACC15] flex items-center justify-center mx-auto border border-[#FACC15]/40">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Application Received Successfully!</h3>
                <p className="text-zinc-300 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <span className="text-[#FACC15] font-semibold">{formData.fullName}</span>. Our franchise expansion director for your region will review your details and contact you within 24 hours.
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setWizardStep(1); }}
                  className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm transition-all"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-zinc-800">
                  {[
                    { step: 1, title: 'Personal Info' },
                    { step: 2, title: 'Location Details' },
                    { step: 3, title: 'Financial Capacity' }
                  ].map((s) => (
                    <div key={s.step} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        wizardStep === s.step 
                          ? 'bg-[#FACC15] text-[#0A0A0A] shadow-lg shadow-[#FACC15]/20' 
                          : wizardStep > s.step 
                            ? 'bg-amber-500 text-[#0A0A0A]' 
                            : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        {wizardStep > s.step ? <Check className="w-4 h-4" /> : s.step}
                      </div>
                      <span className={`hidden sm:inline text-sm font-semibold ${wizardStep === s.step ? 'text-white' : 'text-zinc-400'}`}>
                        {s.title}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleWizardSubmit} className="space-y-6">
                  {wizardStep === 1 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <label className="block text-sm font-semibold text-zinc-200 mb-2">Full Name</label>
                        <input 
                          type="text" 
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleFormChange}
                          placeholder="John Doe"
                          className="w-full bg-[#0A0A0A] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-zinc-200 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="john@example.com"
                          className="w-full bg-[#0A0A0A] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-zinc-200 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-[#0A0A0A] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
                        />
                      </div>
                      <div className="flex justify-end pt-4">
                        <button 
                          type="button" 
                          onClick={() => { if(formData.fullName && formData.email) setWizardStep(2); }}
                          className="px-8 py-3.5 rounded-xl bg-[#FACC15] hover:bg-[#EAB308] text-[#0A0A0A] font-bold text-sm transition-all"
                        >
                          Next: Location Details
                        </button>
                      </div>
                    </div>
                  )}

                  {wizardStep === 2 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <label className="block text-sm font-semibold text-zinc-200 mb-2">Target City</label>
                        <input 
                          type="text" 
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleFormChange}
                          placeholder="e.g., Austin"
                          className="w-full bg-[#0A0A0A] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-zinc-200 mb-2">State / Province</label>
                        <input 
                          type="text" 
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleFormChange}
                          placeholder="e.g., Texas"
                          className="w-full bg-[#0A0A0A] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-zinc-200 mb-2">Preferred Franchise Tier</label>
                        <select 
                          name="tier"
                          value={formData.tier}
                          onChange={handleFormChange}
                          className="w-full bg-[#0A0A0A] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
                        >
                          <option value="Express Kiosk">Express Kiosk ($35k - $60k)</option>
                          <option value="Standard Hub">Standard Hub ($75k - $150k)</option>
                          <option value="Mega Station / EV Hub">Mega Station / EV Hub ($200k+)</option>
                        </select>
                      </div>
                      <div className="flex justify-between pt-4">
                        <button 
                          type="button" 
                          onClick={() => setWizardStep(1)}
                          className="px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm transition-all"
                        >
                          Back
                        </button>
                        <button 
                          type="button" 
                          onClick={() => { if(formData.city && formData.state) setWizardStep(3); }}
                          className="px-8 py-3.5 rounded-xl bg-[#FACC15] hover:bg-[#EAB308] text-[#0A0A0A] font-bold text-sm transition-all"
                        >
                          Next: Financial Capacity
                        </button>
                      </div>
                    </div>
                  )}

                  {wizardStep === 3 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <label className="block text-sm font-semibold text-zinc-200 mb-2">Available Capital Range</label>
                        <select 
                          name="capital"
                          value={formData.capital}
                          onChange={handleFormChange}
                          className="w-full bg-[#0A0A0A] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
                        >
                          <option value="$35k - $50k">$35,000 - $50,000</option>
                          <option value="$50k - $100k">$50,000 - $100,000</option>
                          <option value="$100k - $250k">$100,000 - $250,000</option>
                          <option value="$250k+">$250,000+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-zinc-200 mb-2">Expected Launch Timeline</label>
                        <select 
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleFormChange}
                          className="w-full bg-[#0A0A0A] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
                        >
                          <option value="Immediate (0-3 months)">Immediate (0-3 months)</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="6+ months">6+ months</option>
                        </select>
                      </div>
                      <div className="flex justify-between pt-4">
                        <button 
                          type="button" 
                          onClick={() => setWizardStep(2)}
                          className="px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm transition-all"
                        >
                          Back
                        </button>
                        <button 
                          type="submit" 
                          className="px-8 py-3.5 rounded-xl bg-[#FACC15] hover:bg-[#EAB308] text-[#0A0A0A] font-bold text-sm shadow-lg shadow-[#FACC15]/20 transition-all"
                        >
                          Submit Franchise Application
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials & FAQs */}
      <section id="faq" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Testimonials */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#FACC15]/10 text-[#FACC15] text-xs font-bold uppercase tracking-wider mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Trusted by Franchise Partners Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                quote: "Partnering with Petromart was the best business decision I've made. The combination of fuel sales and e-commerce locker fulfillment keeps our station busy 24/7.",
                name: "Marcus Vance",
                location: "Standard Hub Partner, Texas",
                rating: 5
              },
              {
                quote: "The EV supercharging integration brings in high-end clientele who spend significant time in our convenience store while charging. ROI exceeded our expectations.",
                name: "Sarah Jenkins",
                location: "Mega Station Partner, Florida",
                rating: 5
              },
              {
                quote: "Petromart's supply chain backing and automated inventory replenishment make daily operations seamless, even for first-time franchise owners.",
                name: "David K.",
                location: "Express Kiosk Partner, California",
                rating: 5
              },
            ].map((testi, idx) => (
              <div key={idx} className="bg-[#121212] border border-zinc-800 p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">"{testi.quote}"</p>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{testi.name}</div>
                  <div className="text-xs text-zinc-400">{testi.location}</div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Frequently Asked Questions</h3>
              <p className="text-zinc-400 text-sm">Everything you need to know about starting your Petromart franchise.</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What experience is required to open a Petromart franchise?",
                  a: "No prior fuel or petroleum industry experience is strictly required. We provide comprehensive onboarding, training programs, and dedicated operational management support for all partners."
                },
                {
                  q: "How does the e-commerce fulfillment integration work?",
                  a: "Each Petromart station acts as a localized micro-hub and secure pickup/drop-off locker location. When customers order online through the Petromart app, local fulfillment orders route directly to your station, generating additional commission revenue."
                },
                {
                  q: "What is the typical timeline from application to grand opening?",
                  a: "The average timeline ranges from 3 to 6 months, depending on location scouting, local municipal permitting, and the chosen franchise tier."
                },
                {
                  q: "Does Petromart provide financing assistance?",
                  a: "Yes, we partner with premier financial institutions and equipment leasing providers to help qualified franchise applicants secure favorable capital financing."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-[#121212] border border-zinc-800 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 text-left font-bold text-white flex justify-between items-center hover:bg-zinc-800/50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#FACC15] font-mono text-xl">{openFaq === idx ? '-' : '+'}</span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-zinc-800 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#FACC15] flex items-center justify-center">
                  <Fuel className="w-4 h-4 text-[#0A0A0A]" />
                </div>
                <span className="text-xl font-black tracking-wider text-white">PETROMART</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The premier franchise network combining petroleum retail, green EV infrastructure, and modern e-commerce delivery hubs.
              </p>
            </div>

            <div>
              <div className="font-bold text-white text-sm mb-4">Quick Links</div>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#about" className="hover:text-[#FACC15]">About Petromart</a></li>
                <li><a href="#business-model" className="hover:text-[#FACC15]">Business Model</a></li>
                <li><a href="#tiers" className="hover:text-[#FACC15]">Investment Tiers</a></li>
                <li><a href="#calculator" className="hover:text-[#FACC15]">ROI Calculator</a></li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-white text-sm mb-4">Support & Legal</div>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#faq" className="hover:text-[#FACC15]">FAQ</a></li>
                <li><a href="#apply" className="hover:text-[#FACC15]">Franchise Portal</a></li>
                <li><a href="#" className="hover:text-[#FACC15]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#FACC15]">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-white text-sm mb-4">Newsletter Signup</div>
              <p className="text-zinc-400 text-xs mb-3">Get franchise updates, industry reports, and expansion alerts.</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-[#121212] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white w-full focus:outline-none focus:border-[#FACC15]"
                />
                <button className="px-4 py-2 bg-[#FACC15] hover:bg-[#EAB308] text-[#0A0A0A] font-bold rounded-xl text-xs transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-900 text-center text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Petromart Global Franchise Inc. All rights reserved. Designed for Next.js prototype deployment.
          </div>
        </div>
      </footer>

    </div>
  );
}