'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Cpu,
  Layers,
  Zap,
  Activity,
  Code2,
  Terminal,
  CheckCircle2,
  Sparkles,
  GitBranch,
  ShieldCheck,
  Radio
} from 'lucide-react';

export const MobileArchitecture: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'bloc' | 'offline' | 'arch'>('bloc');

  const codeSnippets = {
    bloc: `// CityPay Event-Driven State Machine (BLoC)
@injectable
class PaymentBloc extends Bloc<PaymentEvent, PaymentState> {
  PaymentBloc(this._walletRepo) : super(const PaymentState.initial()) {
    on<InitiateQrPayment>(_onInitiateQrPayment, transformer: droppable());
    on<ConfirmBankTransfer>(_onConfirmBankTransfer);
  }

  final WalletRepository _walletRepo;

  Future<void> _onInitiateQrPayment(
    InitiateQrPayment event,
    Emitter<PaymentState> emit,
  ) async {
    emit(const PaymentState.processing());
    final result = await _walletRepo.processQr(event.payload);
    result.fold(
      (error) => emit(PaymentState.failure(error.message)),
      (receipt) => emit(PaymentState.success(receipt)),
    );
  }
}`,
    offline: `// Offline-First Geolocation Engine with Hive
class LocationSyncService {
  final Box<LocationEntry> _locationBox;
  final RestClient _apiClient;

  Future<void> logLocationAndSync(Position position) async {
    final entry = LocationEntry.fromPosition(position);
    await _locationBox.add(entry); // Local persistent queue

    if (await NetworkChecker.isConnected) {
      final pending = _locationBox.values.toList();
      final success = await _apiClient.batchUpload(pending);
      if (success) await _locationBox.clear();
    }
  }
}`,
    arch: `// Clean 3-Layer Architecture Boundary
lib/
├── presentation/     # BLoC, Cubit, Pages, Screen Widgets
│   ├── blocs/        # Reactive state transitions (60fps)
│   └── pages/        # AutoRoute declarative navigation
├── domain/           # Pure Business Logic (No Flutter dependency)
│   ├── entities/     # Domain Business Models
│   └── repositories/ # Abstract Repository Contracts
└── data/             # Infrastructure & Hardware Implementation
    ├── datasources/  # Dio HTTP2 Client, Hive Local Storage
    ├── models/       # Freezed + JSON Serialization
    └── repositories/ # Concrete Repository Impl`
  };

  const pillars = [
    {
      icon: Activity,
      title: '60 / 120 FPS Fluid Render Pipeline',
      description: 'Zero frame drop animations, widget rebuild optimization with granular BLoC selectors, and GPU memory management.',
      tag: 'UI Performance'
    },
    {
      icon: Radio,
      title: 'Offline-First & Background GPS',
      description: 'Local caching via Hive & SQLite with background work synchronizers (WorkManager) under 5% battery consumption.',
      tag: 'Resilience'
    },
    {
      icon: Cpu,
      title: 'Native MethodChannels & Hardware',
      description: 'Custom platform channels bridging Dart directly to Kotlin / Java for low-level sensor, camera, and biometric access.',
      tag: 'Native Bridge'
    },
    {
      icon: Layers,
      title: 'Domain-Driven Clean Architecture',
      description: 'Separation of concerns with 3-layer architecture, dependency injection (GetIt), and automated code generation.',
      tag: 'Scalability'
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest border border-cyan-500/20">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Engineering Core</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Engineered for Mobile Performance
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Building at the intersection of reactive state management, low-latency network caching, and native OS integrations.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-900">
                <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  {pillar.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Mobile Code & Architecture Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl"
        >
          {/* Terminal Title Bar */}
          <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>mobile-architecture.dart</span>
              </span>
            </div>

            {/* Code Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveCodeTab('bloc')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition ${
                  activeCodeTab === 'bloc' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                BLoC Pattern
              </button>
              <button
                type="button"
                onClick={() => setActiveCodeTab('offline')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition ${
                  activeCodeTab === 'offline' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Offline Sync
              </button>
              <button
                type="button"
                onClick={() => setActiveCodeTab('arch')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition ${
                  activeCodeTab === 'arch' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                3-Layer Clean Arch
              </button>
            </div>
          </div>

          {/* Code Viewer Body */}
          <div className="p-6 overflow-x-auto text-xs sm:text-sm font-mono text-slate-300 leading-relaxed bg-[#060911]">
            <pre>
              <code>{codeSnippets[activeCodeTab]}</code>
            </pre>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
