'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wifi,
  Battery,
  Signal,
  QrCode,
  CreditCard,
  Send,
  Building2,
  Phone,
  Plane,
  ShieldCheck,
  MapPin,
  Truck,
  TrendingUp,
  DollarSign,
  PieChart,
  CheckCircle2,
  Receipt,
  Sparkles,
  ArrowDownLeft,
  ArrowUpRight,
  Sprout,
  HardHat,
  Smartphone,
  Layers,
  Zap,
  Activity,
  Sliders,
  ChevronRight
} from 'lucide-react';

export type ScreenType = 'citypay' | 'namaste' | 'agri' | 'cronlink' | 'kharcha';

interface PhoneMockupProps {
  screenType?: ScreenType;
  interactive?: boolean;
  className?: string;
  showPlatformToggle?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  screenType = 'citypay',
  interactive = true,
  className = '',
  showPlatformToggle = false,
}) => {
  const [activeTab, setActiveTab] = useState<ScreenType>(screenType);
  const [platform, setPlatform] = useState<'iOS' | 'Android'>('iOS');
  const [checkedTask, setCheckedTask] = useState<boolean>(true);

  const currentScreen = interactive ? activeTab : screenType;

  return (
    <div className={`relative mx-auto select-none ${className}`}>
      {/* Platform OS Pill Switcher if enabled */}
      {showPlatformToggle && (
        <div className="flex items-center justify-center gap-2 mb-4">
          <button
            type="button"
            onClick={() => setPlatform('iOS')}
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition flex items-center gap-1.5 ${
              platform === 'iOS'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <span> iOS Cupertino</span>
          </button>
          <button
            type="button"
            onClick={() => setPlatform('Android')}
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition flex items-center gap-1.5 ${
              platform === 'Android'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <span>🤖 Android Material 3</span>
          </button>
        </div>
      )}

      {/* Titanium Frame Chassis */}
      <div className="relative w-[300px] sm:w-[325px] md:w-[340px] h-[640px] sm:h-[675px] bg-[#121620] rounded-[52px] p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/20 border border-slate-700/80">
        
        {/* Hardware Volume & Power Rockers */}
        <div className="absolute top-28 -left-[3px] w-[3px] h-10 bg-slate-600 rounded-l-sm" />
        <div className="absolute top-42 -left-[3px] w-[3px] h-10 bg-slate-600 rounded-l-sm" />
        <div className="absolute top-34 -right-[3px] w-[3px] h-14 bg-slate-600 rounded-r-sm" />

        {/* Screen Display Bezel */}
        <div className="relative w-full h-full bg-[#080c14] rounded-[42px] overflow-hidden flex flex-col border border-slate-800 shadow-inner">
          
          {/* Status Bar */}
          <div className="pt-2.5 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-slate-300 z-30 bg-[#080c14]/95 backdrop-blur-md">
            <span className="font-mono">09:41</span>
            
            {/* Dynamic Island Pill with Camera & Sensor */}
            <div className="h-5 w-24 bg-black rounded-full flex items-center justify-center gap-2 px-2 shadow-inner border border-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            </div>

            <div className="flex items-center gap-1.5 text-slate-300">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>

          {/* Screen Content Container */}
          <div className="flex-1 overflow-y-auto px-4 py-2 relative scrollbar-none text-left">
            <AnimatePresence mode="wait">
              {currentScreen === 'citypay' && (
                <motion.div
                  key="citypay"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 pt-1"
                >
                  {/* CityPay Wallet Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-mono font-bold text-cyan-400 tracking-wider">CityPay Wallet</p>
                      <h4 className="text-sm font-black text-white flex items-center gap-1">
                        Verified KYC <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      </h4>
                    </div>
                    <div className="p-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <QrCode className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Wallet Balance Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-950 via-slate-900 to-slate-900 border border-cyan-500/40 relative shadow-lg overflow-hidden">
                    <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>Available Balance</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">Live NPR</span>
                    </div>
                    <div className="text-xl font-black text-white font-mono my-1 tracking-tight">
                      NPR 42,850.00
                    </div>
                    <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/10 text-[10px]">
                      <span className="text-cyan-300 font-mono">ID: 9846458568</span>
                      <span className="text-emerald-400 font-bold">Tier-2 Verified</span>
                    </div>
                  </div>

                  {/* Quick Action Grid */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {[
                      { label: 'Scan QR', icon: QrCode, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' },
                      { label: 'Send Money', icon: Send, color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' },
                      { label: 'Bank Load', icon: Building2, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
                      { label: 'Pay Bills', icon: Receipt, color: 'text-purple-400 bg-purple-500/10 border-purple-500/30' },
                    ].map((btn, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className={`p-2.5 rounded-xl border mx-auto flex items-center justify-center ${btn.color}`}>
                          <btn.icon className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-bold text-slate-300 block">{btn.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recent Transactions */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-[11px] font-bold text-slate-300">
                      <span>Recent Activities</span>
                      <span className="text-cyan-400 text-[10px] font-mono">BLoC State</span>
                    </div>

                    {[
                      { title: 'Merchant QR Checkout', sub: 'Bhatbhateni Superstore', amount: '- NPR 3,450', positive: false },
                      { title: 'Bank Load (Global IME)', sub: 'Direct Bank Link', amount: '+ NPR 20,000', positive: true },
                      { title: 'Nepal Telecom Top-up', sub: 'Mobile Recharge', amount: '- NPR 500', positive: false },
                    ].map((tx, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-slate-900/90 border border-white/5 flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-bold text-white">{tx.title}</p>
                          <p className="text-[8px] text-slate-400 font-mono">{tx.sub}</p>
                        </div>
                        <span className={`text-[10px] font-mono font-black ${tx.positive ? 'text-emerald-400' : 'text-slate-300'}`}>
                          {tx.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentScreen === 'namaste' && (
                <motion.div
                  key="namaste"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 pt-1"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-mono font-bold text-blue-400 tracking-wider">Namaste Pay</p>
                      <h4 className="text-sm font-black text-white">Telecom &amp; Payments</h4>
                    </div>
                    <div className="p-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Phone className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Telecom Quick Recharge Card */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-950/60 via-slate-900 to-slate-900 border border-blue-500/30">
                    <span className="text-[10px] text-slate-400">Instant Mobile Recharge</span>
                    <div className="flex items-center justify-between my-1.5">
                      <span className="text-sm font-bold text-white font-mono">NTC 984-6458568</span>
                      <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-[10px] font-mono">Postpaid</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 mt-2 pt-2 border-t border-white/5 text-[10px] font-mono">
                      <button className="py-1 rounded bg-blue-500/20 text-blue-200 border border-blue-500/30">NPR 100</button>
                      <button className="py-1 rounded bg-blue-500/20 text-blue-200 border border-blue-500/30">NPR 500</button>
                      <button className="py-1 rounded bg-blue-500 text-slate-950 font-bold">NPR 1000</button>
                    </div>
                  </div>

                  {/* Value Added Services */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-slate-300">MobX Services</span>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                          <Plane className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-white">Flight Tickets</p>
                          <p className="text-[8px] text-slate-400">KTM &rarr; PKR</p>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-white">Split Bill</p>
                          <p className="text-[8px] text-slate-400">Shared Contacts</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-950/80 border border-white/5 text-[10px] flex items-center justify-between text-slate-300">
                    <span>USSD Offline Failover Ready</span>
                    <span className="text-emerald-400 font-mono font-bold">*500#</span>
                  </div>
                </motion.div>
              )}

              {currentScreen === 'agri' && (
                <motion.div
                  key="agri"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 pt-1"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-mono font-bold text-emerald-400 tracking-wider">Sajilo Krishi Beema</p>
                      <h4 className="text-sm font-black text-white">Agriculture Policy</h4>
                    </div>
                    <div className="p-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Sprout className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Active Policy Status */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-500/40 space-y-2">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">Policy #SKB-8091</span>
                      <span className="text-emerald-400 font-mono font-bold">Gov Subsidy: 80%</span>
                    </div>
                    <h5 className="text-xs font-bold text-white">Livestock: Dairy Cattle (Holstein)</h5>
                    <div className="flex justify-between text-[10px] text-slate-300 border-t border-white/5 pt-2">
                      <span>Sum: NPR 150,000</span>
                      <span className="font-bold text-emerald-400">Premium: NPR 1,500</span>
                    </div>
                  </div>

                  {/* Field Claim filing with Geotag */}
                  <div className="p-3 rounded-2xl bg-slate-900 border border-white/5 space-y-2">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Geotagged Claim
                      </span>
                      <span className="text-cyan-400 font-mono text-[9px]">Lat: 27.7172</span>
                    </div>
                    <p className="text-[9px] text-slate-400">
                      Offline-first camera validation with automatic metadata geotagging and Hive DB sync.
                    </p>
                    <div
                      onClick={() => setCheckedTask(!checkedTask)}
                      className="p-2 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-between text-[10px] text-emerald-300 cursor-pointer"
                    >
                      <span>Claim Status: {checkedTask ? 'Approved' : 'Pending Verification'}</span>
                      <CheckCircle2 className={`w-3.5 h-3.5 ${checkedTask ? 'text-emerald-400' : 'text-slate-600'}`} />
                    </div>
                  </div>
                </motion.div>
              )}

              {currentScreen === 'cronlink' && (
                <motion.div
                  key="cronlink"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 pt-1"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-mono font-bold text-amber-400 tracking-wider">Cronlink Tracking</p>
                      <h4 className="text-sm font-black text-white">Fleet GPS Telemetry</h4>
                    </div>
                    <div className="p-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      <HardHat className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Mock Map with Transit Route */}
                  <div className="relative h-40 rounded-2xl overflow-hidden border border-amber-500/30 bg-[#0c1626] p-3 flex flex-col justify-between">
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#f59e0b_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b_1px,transparent_1px)] bg-[size:16px_16px]" />
                    
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 280 150">
                      <path
                        d="M 20 120 Q 80 100 130 60 T 240 30"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="3"
                        strokeDasharray="6 4"
                        className="animate-pulse"
                      />
                      <circle cx="240" cy="30" r="5" fill="#fbbf24" />
                      <circle cx="240" cy="30" r="10" fill="#f59e0b" opacity="0.3" className="animate-ping" />
                      <circle cx="20" cy="120" r="4" fill="#10b981" />
                    </svg>

                    <div className="relative z-10 self-start px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-[9px] text-amber-300 font-mono">
                      Transit: Mixer #TR-04 (ETA: 14m)
                    </div>

                    <div className="relative z-10 bg-slate-950/85 backdrop-blur-md rounded-xl p-2 border border-white/10 flex items-center justify-between text-[10px]">
                      <div>
                        <span className="text-slate-400 block text-[8px]">Site</span>
                        <span className="font-bold text-white">Tower 7</span>
                      </div>
                      <div className="h-5 w-[1px] bg-white/10" />
                      <div>
                        <span className="text-slate-400 block text-[8px]">Speed</span>
                        <span className="font-mono text-amber-300">32 km/h</span>
                      </div>
                      <div className="h-5 w-[1px] bg-white/10" />
                      <div>
                        <span className="text-slate-400 block text-[8px]">Load</span>
                        <span className="font-mono text-emerald-400">8.5 m&sup3;</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 space-y-1 text-[10px]">
                    <div className="flex justify-between text-slate-300">
                      <span>Dispatch Request #CR-294</span>
                      <span className="text-amber-400 font-bold">En Route</span>
                    </div>
                    <p className="text-[8px] text-slate-400">Live WebSockets stream with background location optimization</p>
                  </div>
                </motion.div>
              )}

              {currentScreen === 'kharcha' && (
                <motion.div
                  key="kharcha"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 pt-1"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-mono font-bold text-purple-400 tracking-wider">Kharcha App</p>
                      <h4 className="text-sm font-black text-white">Monthly Expense Ledger</h4>
                    </div>
                    <div className="p-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      <PieChart className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Expense Budget Card */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-950/60 via-slate-900 to-slate-900 border border-purple-500/30 space-y-2">
                    <span className="text-[10px] text-slate-400">Monthly Budget (NPR 60,000)</span>
                    <div className="flex justify-between items-baseline">
                      <span className="text-base font-black text-white font-mono">Spent: NPR 24,500</span>
                      <span className="text-xs font-bold text-emerald-400">59% Left</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full w-[41%]" />
                    </div>
                  </div>

                  {/* Category Breakdown */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-300">Category Breakdown</span>
                    {[
                      { cat: 'Groceries & Food', spent: 'NPR 11,200', color: 'bg-purple-500' },
                      { cat: 'Transportation & Fuel', spent: 'NPR 5,800', color: 'bg-cyan-500' },
                      { cat: 'Utilities & Subscriptions', spent: 'NPR 4,500', color: 'bg-emerald-500' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${item.color}`} />
                          <span className="text-white font-medium">{item.cat}</span>
                        </div>
                        <span className="font-mono text-slate-300">{item.spent}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Interactive Screen Selector Pills */}
          {interactive && (
            <div className="px-2.5 py-2 bg-slate-950 border-t border-white/10 flex items-center justify-between text-[9px] z-20">
              <button
                type="button"
                onClick={() => setActiveTab('citypay')}
                className={`px-1.5 py-1 rounded-lg transition font-bold ${
                  activeTab === 'citypay' ? 'bg-cyan-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                CityPay
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('namaste')}
                className={`px-1.5 py-1 rounded-lg transition font-bold ${
                  activeTab === 'namaste' ? 'bg-blue-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                NamastePay
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('agri')}
                className={`px-1.5 py-1 rounded-lg transition font-bold ${
                  activeTab === 'agri' ? 'bg-emerald-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                KrishiBeema
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('cronlink')}
                className={`px-1.5 py-1 rounded-lg transition font-bold ${
                  activeTab === 'cronlink' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Cronlink
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('kharcha')}
                className={`px-1.5 py-1 rounded-lg transition font-bold ${
                  activeTab === 'kharcha' ? 'bg-purple-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Kharcha
              </button>
            </div>
          )}

          {/* Home Bar Indicator */}
          <div className="py-2 flex justify-center bg-slate-950">
            <div className="w-28 h-1 bg-slate-600 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
};
