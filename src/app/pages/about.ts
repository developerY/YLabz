import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {YLABZ_COMPANY_INFO, YLABZ_LANGUAGE_STACK} from '../data/ylabz-data';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="flex flex-col w-full text-slate-900">
      <!-- Atmospheric Header -->
      <div class="relative w-full overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white">
        <div class="absolute -top-40 left-1/3 w-[720px] h-[360px] bg-gradient-to-b from-sky-400/10 via-purple-400/5 to-transparent blur-[130px] pointer-events-none rounded-full"></div>

        <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-8 relative z-10">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3 flex-wrap">
              <span class="font-mono text-xs text-sky-700 font-bold">Y? LAB Z</span>
              <span class="text-slate-400 font-mono">/</span>
              <span class="font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold">About &amp; Updates</span>
              <span class="px-2.5 py-0.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-bold shadow-sm">VIRTUAL COMPANY // PALO ALTO, CA</span>
            </div>

            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              About Y? Lab Z
            </h1>
            <p class="text-lg text-slate-600 max-w-3xl leading-relaxed mt-1">
              A <strong class="text-sky-700 font-bold">virtual company based in Palo Alto, California</strong>, operating as the research and development engine under <strong class="text-slate-900 font-bold">ZoeWave</strong>, dedicated to breakthroughs across mobile ecosystems, artificial intelligence, robotics, and emerging hardware platforms with core design by <strong class="text-slate-900 font-bold">G.N.Seven</strong>.
            </p>
          </div>

          <!-- Palo Alto Lab Facility Visual Showcase (Frontier Lab Office Visual) -->
          <div class="mt-8 relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-md group bg-slate-100">
            <img
              src="/assets/images/coral_frontier_lab_1793915443237.jpg"
              alt="Y? Lab Z Frontier Computing Lab in Palo Alto, California"
              referrerpolicy="no-referrer"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent"></div>
            
            <div class="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span class="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-mono text-xs font-bold shadow-md">
                  VIRTUAL R&amp;D HEADQUARTERS // PALO ALTO, CA
                </span>
                <h3 class="text-2xl sm:text-3xl font-bold mt-2 text-white drop-shadow-sm font-display">
                  Where Science Questions Meet Silicon Reality
                </h3>
                <p class="text-slate-200 text-xs sm:text-sm max-w-xl mt-1 font-medium leading-relaxed">
                  Headquartered in Palo Alto, CA via our central PO Box, connecting virtual distributed researchers with quantum testbeds, battery stress telemetry, and on-device ML evaluation clusters.
                </p>
              </div>

              <div class="flex items-center gap-3 shrink-0 font-mono text-xs">
                <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-sky-300 font-bold shadow-sm">
                  VIRTUAL-FIRST // PA, CA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col gap-12">
        <!-- Faculty & Mission Statement -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-8 flex flex-col gap-8">
            <div class="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col gap-6">
              <div class="flex items-center justify-between pb-3 border-b border-slate-200 flex-wrap gap-2">
                <span class="font-mono text-xs text-sky-700 tracking-wider uppercase font-bold">FOUNDING PHILOSOPHY &amp; ETHOS</span>
                <span class="px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-800 font-mono text-[11px] font-bold">VIRTUAL COMPANY // PALO ALTO, CA</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                “Developing cutting edge technology. Asking questions ‘?’ relentlessly until reaching fundamental truth at ‘Z’.”
              </h2>
              <div class="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  As a <strong class="text-slate-900 font-bold">virtual company headquartered in Palo Alto, California</strong> (PO Box 51402), <strong class="text-sky-700 font-bold">Y? Lab Z</strong> acts as an agile incubation and engineering engine. We operate on a distributed, virtual-first model: uniting world-class mobile architects, robotics engineers, and systems researchers without physical boundaries. We bridge theoretical paradigms and production reality. Rather than building speculative slides or vendor-locked silos, our projects are tested directly on real hardware: from motorcycle-inspired AI e-bikes (<strong>AshBike</strong>) to physiological intelligent clothing (<strong>ZoeWear</strong>) and visual task intelligence (<strong>PhotoDo AI</strong>).
                </p>
                <p>
                  We maintain a disciplined, non-fragmented technology policy: limiting our core production languages to <strong class="text-slate-900 font-bold">Kotlin</strong> (Android &amp; WearOS), <strong class="text-slate-900 font-bold">Swift</strong> (iOS &amp; visionOS), and <strong class="text-slate-900 font-bold">Rust</strong> (Web, Robotics, Systems &amp; Quantum), powered by <strong class="text-slate-900 font-bold">Mojo</strong> from Modular as our definitive replacement for Python, and <strong class="text-sky-700 font-bold">Modular MAX Engine</strong> as our hardware-agnostic replacement for NVIDIA CUDA.
                </p>
              </div>

              <!-- Language Strategy Grid -->
              <div class="pt-4 border-t border-slate-200">
                <span class="font-mono text-xs text-slate-500 block mb-3 uppercase tracking-wider font-bold">STRATEGIC TECHNOLOGY ALIGNMENTS</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  @for (lang of languageStack; track lang.language) {
                    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:bg-white transition-all shadow-sm">
                      <div class="flex items-center justify-between mb-1">
                        <span class="text-slate-900 text-sm font-bold">{{ lang.language }}</span>
                        <span class="font-mono text-[10px] text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 font-semibold">{{ lang.replaces }}</span>
                      </div>
                      <p class="text-xs text-slate-700 mb-2">{{ lang.role }}</p>
                      <p class="text-[11px] text-slate-500 italic">"{{ lang.quote }}"</p>
                    </div>
                  }
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 font-mono text-xs">
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="text-slate-500 font-semibold">R&amp;D PARTNERSHIP</span>
                  <p class="text-slate-900 font-bold text-sm mt-1">ZoeWave &amp; G.N.Seven</p>
                </div>
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="text-slate-500 font-semibold">HARDWARE DOMAINS</span>
                  <p class="text-slate-900 font-bold text-sm mt-1">E-Bikes, Clothing, Robotics</p>
                </div>
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="text-slate-500 font-semibold">PUBLISHING MEDIUM</span>
                  <p class="text-slate-900 font-bold text-sm mt-1">Medium (&#64;zoewave)</p>
                </div>
              </div>
            </div>

            <!-- PROMINENT FEATURE CARD: VIRTUAL COMPANY ARCHITECTURE & OPERATIONS -->
            <div class="bg-gradient-to-br from-slate-50/60 via-white to-sky-50/40 border border-slate-200 rounded-3xl p-8 lg:p-9 relative overflow-hidden shadow-sm">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
                  <span class="font-mono text-xs font-bold uppercase tracking-wider text-slate-800">VIRTUAL-FIRST ENTERPRISE</span>
                </div>
                <span class="px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-mono text-xs font-bold shadow-sm">
                  HEADQUARTERS: PO BOX 51402, PALO ALTO, CA
                </span>
              </div>

              <div class="mt-5">
                <h3 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  A Virtual Research Company Headquartered in Palo Alto, CA
                </h3>
                <p class="text-sm sm:text-base text-slate-600 leading-relaxed mt-2">
                  Y? Lab Z operates as an agile, <strong class="text-slate-900">virtual-first company</strong>. While our corporate nexus, administrative registry, and mailing headquarters are anchored in <strong class="text-slate-900">Palo Alto, California</strong> via our central PO Box, our research fellows and engineering contributors collaborate across an asynchronous global network.
                </p>
              </div>

              <!-- 3-Pillar Virtual R&D Architecture Grid -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div class="bg-white rounded-2xl p-5 border border-slate-200 flex flex-col justify-between shadow-sm hover:border-sky-400 transition-all">
                  <div>
                    <div class="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 mb-3 shadow-xs">
                      <span class="material-symbols-outlined text-[20px]">cloud_sync</span>
                    </div>
                    <span class="font-bold text-slate-900 text-sm block mb-1">Distributed R&amp;D Talent</span>
                    <p class="text-xs text-slate-600 leading-relaxed">
                      Decentralized contributors across time zones collaborate in high-velocity sprints using public Git RFCs, reproducible crates, and automated CI pipelines.
                    </p>
                  </div>
                  <span class="text-[11px] font-mono font-bold text-sky-700 mt-4 block">ZERO SILOS // 100% ASYNC</span>
                </div>

                <div class="bg-white rounded-2xl p-5 border border-slate-200 flex flex-col justify-between shadow-sm hover:border-sky-400 transition-all">
                  <div>
                    <div class="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 mb-3 shadow-xs">
                      <span class="material-symbols-outlined text-[20px]">memory</span>
                    </div>
                    <span class="font-bold text-slate-900 text-sm block mb-1">Virtual Simulation &amp; MAX</span>
                    <p class="text-xs text-slate-600 leading-relaxed">
                      Cloud-hosted Modular MAX compilers and virtual device testbeds simulate Mojo kernels and on-device execution prior to physical silicon deployment.
                    </p>
                  </div>
                  <span class="text-[11px] font-mono font-bold text-sky-700 mt-4 block">MODULAR MAX &amp; MOJO</span>
                </div>

                <div class="bg-white rounded-2xl p-5 border border-slate-200 flex flex-col justify-between shadow-sm hover:border-sky-400 transition-all">
                  <div>
                    <div class="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 mb-3 shadow-xs">
                      <span class="material-symbols-outlined text-[20px]">hub</span>
                    </div>
                    <span class="font-bold text-slate-900 text-sm block mb-1">Palo Alto Silicon Base</span>
                    <p class="text-xs text-slate-600 leading-relaxed">
                      Physical hardware prototypes (AshBike, ZoeWear) and real-device telemetry benches are coordinated directly through our Palo Alto, California hub.
                    </p>
                  </div>
                  <span class="text-[11px] font-mono font-bold text-slate-800 mt-4 block">PA, CA ANCHOR &amp; PO BOX</span>
                </div>
              </div>

              <div class="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-sky-500"></span>
                  <span class="font-semibold text-slate-800">Virtual R&amp;D Organization Active Worldwide</span>
                </div>
                <span class="font-mono text-slate-700 font-bold">LEGAL &amp; CORPORATE NEXUS: PALO ALTO, CA 94303</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-4 flex flex-col gap-6">
            <!-- Official Lab Logo Brand Card -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              <div class="flex items-center justify-between pb-2 border-b border-slate-200">
                <span class="font-mono text-xs text-slate-500 font-bold uppercase tracking-wider">OFFICIAL LAB LOGO</span>
                <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-sky-800 font-mono text-[10px] font-bold">Y? LAB ᶻ</span>
              </div>
              <div class="w-full py-5 px-4 rounded-2xl bg-gradient-to-b from-white via-slate-50 to-white border border-slate-200 flex items-center justify-center">
                <img src="/assets/aistudio/unnamed_44bf9102.jpg" alt="Y? Labz official logo" referrerpolicy="no-referrer" class="h-24 w-auto object-contain drop-shadow-xs" />
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                The official <strong class="text-slate-900">Y? Lab Z</strong> logo: embodying our methodology of asking questions (<span class="text-sky-700 font-bold">“?”</span>) until reaching fundamental truth at <span class="text-slate-900 font-bold">“Z”</span>.
              </p>
            </div>

            <!-- Leadership Card -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 shadow-sm">
                  <span class="material-symbols-outlined text-[24px]">engineering</span>
                </div>
                <div>
                  <h3 class="text-base text-slate-900 font-bold">{{ companyInfo.leadArchitect }}</h3>
                  <span class="text-xs text-sky-700 font-mono font-semibold">{{ companyInfo.leadTitle }}</span>
                </div>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                Specializing in Modern Android Development (MAD), Swift 6 concurrency, visionOS spatial computing, and on-device machine learning architectures.
              </p>
              <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600 leading-relaxed">
                {{ companyInfo.leadAccreditations }}
              </div>
              <div class="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                <span class="font-mono text-slate-500 font-medium">GITHUB REPOSITORIES</span>
                <a href="https://github.com/developerY" target="_blank" rel="noopener noreferrer" class="font-mono text-sky-700 font-bold hover:underline flex items-center gap-1">
                  <span>gh/developerY</span>
                  <span class="material-symbols-outlined text-[13px]">open_in_new</span>
                </a>
              </div>
            </div>

            <!-- Palo Alto Entity Info (Virtual Headquarters) -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              <div class="flex items-center justify-between pb-2 border-b border-slate-200">
                <span class="font-mono text-xs text-slate-500 font-bold">CORPORATE &amp; MAILING CONTACT</span>
                <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-800 font-mono text-[10px] font-bold">VIRTUAL COMPANY</span>
              </div>
              <ul class="space-y-2.5 text-xs font-mono text-slate-600">
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[16px] mt-0.5">apartment</span>
                  <span class="text-slate-800 font-semibold">{{ companyInfo.name }} (Virtual Entity)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[16px] mt-0.5">location_on</span>
                  <div class="flex flex-col">
                    <span class="text-slate-900 font-bold">Headquartered in Palo Alto, CA:</span>
                    <span class="text-slate-600">{{ companyInfo.address }}</span>
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[16px] mt-0.5">mail</span>
                  <a href="mailto:developer@ylabz.com" class="text-sky-700 font-semibold hover:underline">{{ companyInfo.email }}</a>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[16px] mt-0.5">public</span>
                  <a href="https://ylabz.com" target="_blank" rel="noopener noreferrer" class="text-sky-700 font-semibold hover:underline">www.ylabz.com</a>
                </li>
              </ul>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 leading-relaxed font-mono font-medium">
                <strong>Operating Model:</strong> Virtual-first company headquartered via Palo Alto, CA PO Box, coordinating distributed researchers and hardware initiatives globally.
              </div>
            </div>
          </div>
        </div>

        <!-- PHYSICAL INVENTIONS GALLERY -->
        <section class="flex flex-col gap-6">
          <div class="flex items-center justify-between">
            <div>
              <span class="font-mono text-xs text-sky-700 font-bold uppercase tracking-wider">HARDWARE SHOWCASE</span>
              <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">Physical AI &amp; Hardware Incubations</h2>
            </div>
            <a routerLink="/projects" class="text-sm font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1 transition-colors">
              <span>View All Blueprints</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col group hover:border-amber-400 hover:shadow-md transition-all">
              <div class="aspect-[16/10] overflow-hidden relative bg-slate-100">
                <img
                  src="/assets/ylabz/ashbike_portfolio.png"
                  alt="Authentic AshBike e-bike prototype from YLabz"
                  referrerpolicy="no-referrer"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <span class="absolute bottom-3 left-3 px-2.5 py-0.5 rounded bg-orange-600 text-white font-mono text-[10px] font-bold shadow-xs">
                  G.N.SEVEN DESIGN
                </span>
              </div>
              <div class="p-5 flex flex-col gap-1.5 flex-1">
                <h4 class="font-bold text-slate-900 text-base">AshBike E-Mobility</h4>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Aggressive motorcycle geometry with dynamic on-bike motor torque modulation and cell thermal prediction.
                </p>
              </div>
            </div>

            <div class="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col group hover:border-purple-400 hover:shadow-md transition-all">
              <div class="aspect-[16/10] overflow-hidden relative bg-slate-100">
                <img
                  src="/assets/ylabz/wearos_biotelemetry.png"
                  alt="Authentic ZoeWear bio-telemetry dashboard from YLabz"
                  referrerpolicy="no-referrer"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <span class="absolute bottom-3 left-3 px-2.5 py-0.5 rounded bg-purple-600 text-white font-mono text-[10px] font-bold shadow-xs">
                  BIO-WEARABLES
                </span>
              </div>
              <div class="p-5 flex flex-col gap-1.5 flex-1">
                <h4 class="font-bold text-slate-900 text-base">ZoeWear PIC Smart Apparel</h4>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Medical-grade diagnostics woven into textiles. Knitted conductive thread feeds PPG/ECG into low-power chips.
                </p>
              </div>
            </div>

            <div class="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col group hover:border-emerald-400 hover:shadow-md transition-all">
              <div class="aspect-[16/10] overflow-hidden relative bg-slate-100">
                <img
                  src="/assets/ylabz/ylabz_hero_system.png"
                  alt="Authentic YLabz system architecture visual"
                  referrerpolicy="no-referrer"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <span class="absolute bottom-3 left-3 px-2.5 py-0.5 rounded bg-emerald-600 text-white font-mono text-[10px] font-bold shadow-xs">
                  PHYSICAL AI
                </span>
              </div>
              <div class="p-5 flex flex-col gap-1.5 flex-1">
                <h4 class="font-bold text-slate-900 text-base">ZoeRobo Adaptive Robotics</h4>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Autonomous robotic platforms with edge LiDAR and stereo SLAM navigating human environments with sub-cm precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- ZOEWAVE INCUBATED VENTURES & PORTFOLIO (Directly from YLabz.com/about-us) -->
        <section class="flex flex-col gap-6 pt-6 border-t border-slate-200">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span class="font-mono text-xs font-bold text-sky-700 uppercase tracking-wider">STRATEGIC VENTURE PORTFOLIO</span>
              <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                ZoeWave &amp; YLabZ Companies
              </h2>
              <p class="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                From YLabz.com: "ZoeWave oversees the strategic development of several innovative companies. Core R&amp;D at YLabZ — Core Design at G.N.Seven."
              </p>
            </div>
            <span class="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-bold self-start sm:self-auto shadow-sm">
              9 INCUBATED COMPANIES
            </span>
          </div>

          <!-- Authentic G.N.Seven Design Blueprint from YLabz.com/about-us -->
          <div class="relative w-full rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm p-4 sm:p-6 flex flex-col lg:flex-row items-center gap-6">
            <div class="w-full lg:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative group">
              <img
                src="/assets/ylabz/gnseven_design.png"
                alt="Authentic G.N.Seven Design diagram from YLabz"
                referrerpolicy="no-referrer"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-slate-900/90 text-white font-mono text-xs font-bold border border-slate-700 shadow-sm">
                AUTHENTIC YLABZ // G.N.SEVEN DESIGN
              </div>
            </div>

            <div class="w-full lg:w-1/2 flex flex-col gap-3">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded bg-sky-50 border border-sky-200 text-sky-700 font-mono text-xs font-bold">CORE DESIGN PARTNER</span>
                <span class="text-slate-400 font-mono text-xs">•</span>
                <span class="font-mono text-xs text-slate-500">ZOEWAVE ECOSYSTEM</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                G.N.Seven: Industrial &amp; Mechanical Design
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                As showcased on YLabz.com, G.N.Seven serves as the aesthetic and physical engineering counterpart to YLabz software algorithms. From the motorcycle-inspired carbon monocoque of AshBike to physiological intelligent clothing patterns for ZoeWear, G.N.Seven crafts the physical form factor while YLabZ engineers the silicon and firmware.
              </p>
              <div class="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-slate-700">
                <span class="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200">Carbon Fiber Chassis</span>
                <span class="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200">Ergonomic Form Factors</span>
                <span class="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200">Bio-Sensor Weaves</span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">AshBike</span>
                  <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-sky-700 font-mono text-[10px] font-bold">MOBILITY</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Revolutionizing the e-bike market with motorcycle-inspired aesthetics, carbon fiber unibody frames, and real-time AI torque curve optimization.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>R&amp;D: YLabZ</span>
                <span class="text-slate-800 font-semibold">G.N.Seven Design</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">ZoeWear</span>
                  <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-sky-700 font-mono text-[10px] font-bold">SMART APPAREL</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  At the intersection of fashion and tech: Physiological Intelligent Clothing (PIC) integrating knitted biosensors for medical-grade continuous diagnostics.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>WearOS &amp; watchOS</span>
                <span class="text-sky-700 font-semibold">PIC Biosensors</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">ZoeRobo</span>
                  <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-800 font-mono text-[10px] font-bold">PHYSICAL AI</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Pioneering AI-powered robotics for healthcare, residential security, and personal assistance, adapting to human environments with sub-cm accuracy.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Rust &amp; ROS2</span>
                <span class="text-slate-800 font-semibold">LiDAR &amp; SLAM</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">Hummingbird Fuel Rx</span>
                  <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-sky-700 font-mono text-[10px] font-bold">THERAPEUTICS</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Developing AI-powered micro-dosing applications for personalized health interventions, starting with caffeine for targeted circadian energy boosts.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Kotlin &amp; Swift</span>
                <span class="text-sky-700 font-semibold">Micro-Dosing AI</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">RxDigita</span>
                  <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-sky-700 font-mono text-[10px] font-bold">HEALTH AI</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Streamlining medication management with voice or photo input, label reading, drug interaction alerts, and caregiver sync channels.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>FHIR &amp; Core ML</span>
                <span class="text-sky-700 font-semibold">Rx Adherence</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">ZoeWare</span>
                  <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-sky-700 font-mono text-[10px] font-bold">SPATIAL AR/VR</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Innovating in AR/VR for healthcare, clinical visualization, and educational immersion across Apple visionOS, Android XR, and Meta Quest.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>RealityKit &amp; Polyspatial</span>
                <span class="text-sky-700 font-semibold">Apple HQ Trained</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">Swift AI Ad Agency</span>
                  <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-800 font-mono text-[10px] font-bold">AD TECH</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Harnessing generative AI models to deliver data-driven, hyper-personalized advertising and conversion optimization for global clients.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Multimodal GenAI</span>
                <span class="text-slate-800 font-semibold">Zero-Cookie ROI</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">Jag.U.R™ Utility Robot</span>
                  <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-800 font-mono text-[10px] font-bold">QUADRUPED AI</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Envisioning trusted companion robotics: an intelligent Rust-based assistive robot dog engineered to navigate rugged spaces and assist daily living.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Rust Robotics RS</span>
                <span class="text-slate-800 font-semibold">Micro-Kinematics</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-sky-700 transition-colors">DrunkWatch</span>
                  <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-sky-700 font-mono text-[10px] font-bold">WEARABLES AI</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Continuous smartwatch bio-telemetry assessing intoxication and transit suitability via gait cadence analysis and autonomic nervous monitoring.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>WearOS &amp; watchOS</span>
                <span class="text-sky-700 font-semibold">Sobriety Protection</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `
})
export class AboutComponent {
  companyInfo = YLABZ_COMPANY_INFO;
  languageStack = YLABZ_LANGUAGE_STACK;
}
