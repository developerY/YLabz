import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {YLABZ_COMPANY_INFO, YLABZ_LANGUAGE_STACK} from '../data/ylabz-data';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="flex flex-col w-full">
      <!-- Atmospheric Header -->
      <div class="relative w-full overflow-hidden border-b border-slate-200">
        <div class="absolute -top-40 left-1/3 w-[720px] h-[360px] bg-sky-200/40 blur-[130px] pointer-events-none rounded-full"></div>

        <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-8 relative z-10">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <span class="font-code-badge text-sky-700 font-semibold">Y? LAB Z</span>
              <span class="text-slate-300 font-code-badge">/</span>
              <span class="font-code-badge text-slate-500 uppercase tracking-wider font-medium">About &amp; Updates</span>
              <span class="px-2 py-0.5 rounded bg-[#fff0eb] border border-[#fed7cc] text-[#9a3412] font-mono text-xs font-semibold">VIRTUAL COMPANY // PALO ALTO, CA</span>
            </div>

            <h1 class="font-display-hero text-slate-900 tracking-tight font-bold">About Y? Lab Z</h1>
            <p class="text-lg text-slate-600 max-w-3xl leading-relaxed mt-1">
              A <strong class="text-slate-900 font-semibold">virtual company based in Palo Alto, California</strong>, operating as the research and development engine under <strong class="text-slate-900 font-semibold">ZoeWave</strong>, dedicated to breakthroughs across mobile ecosystems, artificial intelligence, robotics, and emerging hardware platforms with core design by <strong class="text-slate-900 font-semibold">G.N.Seven</strong>.
            </p>
          </div>

          <!-- Palo Alto Lab Facility Visual Showcase (Soft Coral Pastel Palette - Images Preserved) -->
          <div class="mt-8 relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden border border-[#fed7cc] shadow-xl group bg-[#fff0eb]">
            <img
              src="/assets/images/coral_frontier_lab_1793915443237.jpg"
              alt="Y? Lab Z Frontier Computing Lab in Palo Alto, California"
              referrerpolicy="no-referrer"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#ffdcd2]/90 via-[#ffebe6]/40 to-transparent"></div>
            
            <div class="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-slate-900">
              <div>
                <span class="px-3 py-1 rounded-full bg-[#ea580c] text-white font-mono text-xs font-semibold shadow-xs">
                  VIRTUAL R&amp;D HEADQUARTERS // PALO ALTO, CA
                </span>
                <h3 class="text-2xl sm:text-3xl font-bold font-display mt-2 text-slate-900 drop-shadow-sm">
                  Where Science Questions Meet Silicon Reality
                </h3>
                <p class="text-slate-700 text-xs sm:text-sm max-w-xl mt-1 font-medium">
                  Headquartered in Palo Alto, CA via our central PO Box, connecting virtual distributed researchers with quantum testbeds, battery stress telemetry, and on-device ML evaluation clusters.
                </p>
              </div>

              <div class="flex items-center gap-3 shrink-0 font-mono text-xs">
                <span class="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#fed7cc] text-[#9a3412] font-bold shadow-xs">
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
              <div class="flex items-center justify-between pb-2 border-b border-slate-100">
                <span class="font-label-caps text-sky-700 tracking-wider uppercase font-semibold">FOUNDING PHILOSOPHY &amp; ETHOS</span>
                <span class="px-2.5 py-0.5 rounded bg-[#fff0eb] border border-[#fed7cc] text-[#9a3412] font-mono text-[11px] font-bold">VIRTUAL COMPANY // PALO ALTO, CA</span>
              </div>
              <h2 class="font-headline-lg text-slate-900 leading-tight">
                “Developing cutting edge technology. Asking questions ‘?’ relentlessly until reaching fundamental truth at ‘Z’.”
              </h2>
              <div class="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  As a <strong>virtual company headquartered in Palo Alto, California</strong> (PO Box 51402), <strong>Y? Lab Z</strong> acts as an agile incubation and engineering engine. We operate on a distributed, virtual-first model: uniting world-class mobile architects, robotics engineers, and systems researchers without physical boundaries. We bridge theoretical paradigms and production reality. Rather than building speculative slides or vendor-locked silos, our projects are tested directly on real hardware: from motorcycle-inspired AI e-bikes (<strong>AshBike</strong>) to physiological intelligent clothing (<strong>ZoeWear</strong>) and visual task intelligence (<strong>PhotoDo AI</strong>).
                </p>
                <p>
                  We maintain a disciplined, non-fragmented technology policy: limiting our core production languages to <strong>Kotlin</strong> (Android &amp; WearOS), <strong>Swift</strong> (iOS &amp; visionOS), and <strong>Rust</strong> (Web, Robotics, Systems &amp; Quantum), powered by <strong class="text-slate-900 font-semibold">Mojo</strong> from Modular as our definitive replacement for Python, and <strong class="text-slate-900 font-semibold">Modular MAX Engine</strong> as our hardware-agnostic replacement for NVIDIA CUDA.
                </p>
              </div>

              <!-- Language Strategy Grid -->
              <div class="pt-4 border-t border-slate-100">
                <span class="font-label-caps text-slate-400 block mb-3 uppercase">STRATEGIC TECHNOLOGY ALIGNMENTS</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  @for (lang of languageStack; track lang.language) {
                    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div class="flex items-center justify-between mb-1">
                        <span class="font-headline-sm text-slate-900 text-sm font-bold">{{ lang.language }}</span>
                        <span class="font-mono text-[10px] text-sky-700 bg-white px-2 py-0.5 rounded border border-slate-200">{{ lang.replaces }}</span>
                      </div>
                      <p class="text-xs text-slate-600 mb-2">{{ lang.role }}</p>
                      <p class="text-[11px] text-slate-500 italic">"{{ lang.quote }}"</p>
                    </div>
                  }
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="font-label-caps text-slate-400">R&amp;D PARTNERSHIP</span>
                  <p class="font-headline-sm text-slate-900 text-sm mt-1">ZoeWave &amp; G.N.Seven</p>
                </div>
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="font-label-caps text-slate-400">HARDWARE DOMAINS</span>
                  <p class="font-headline-sm text-slate-900 text-sm mt-1">E-Bikes, Clothing, Robotics</p>
                </div>
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="font-label-caps text-slate-400">PUBLISHING MEDIUM</span>
                  <p class="font-headline-sm text-slate-900 text-sm mt-1">Medium (&#64;zoewave)</p>
                </div>
              </div>
            </div>

            <!-- PROMINENT FEATURE CARD: VIRTUAL COMPANY ARCHITECTURE & OPERATIONS (Soft Coral Pastels) -->
            <div class="bg-gradient-to-br from-[#fff7f5] via-[#ffebe6] to-[#feddd4] border border-[#fed7cc] rounded-3xl p-8 lg:p-9 relative overflow-hidden shadow-sm">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#fed7cc]/80">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span class="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">VIRTUAL-FIRST ENTERPRISE</span>
                </div>
                <span class="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#fed7cc] text-[#9a3412] font-mono text-xs font-bold shadow-xs">
                  HEADQUARTERS: PO BOX 51402, PALO ALTO, CA
                </span>
              </div>

              <div class="mt-5">
                <h3 class="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
                  A Virtual Research Company Headquartered in Palo Alto, CA
                </h3>
                <p class="text-sm sm:text-base text-slate-700 leading-relaxed mt-2">
                  Y? Lab Z operates as an agile, <strong>virtual-first company</strong>. While our corporate nexus, administrative registry, and mailing headquarters are anchored in <strong>Palo Alto, California</strong> via our central PO Box, our research fellows and engineering contributors collaborate across an asynchronous global network.
                </p>
              </div>

              <!-- 3-Pillar Virtual R&D Architecture Grid -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div class="bg-white/95 rounded-2xl p-5 border border-[#fed7cc] flex flex-col justify-between shadow-xs">
                  <div>
                    <div class="w-10 h-10 rounded-xl bg-[#fff0eb] border border-[#fed7cc] flex items-center justify-center text-[#ea580c] mb-3">
                      <span class="material-symbols-outlined text-[20px]">cloud_sync</span>
                    </div>
                    <span class="font-bold text-slate-900 text-sm block mb-1">Distributed R&amp;D Talent</span>
                    <p class="text-xs text-slate-600 leading-relaxed">
                      Decentralized contributors across time zones collaborate in high-velocity sprints using public Git RFCs, reproducible crates, and automated CI pipelines.
                    </p>
                  </div>
                  <span class="text-[11px] font-mono font-semibold text-[#c2410c] mt-4 block">ZERO SILOS // 100% ASYNC</span>
                </div>

                <div class="bg-white/95 rounded-2xl p-5 border border-[#fed7cc] flex flex-col justify-between shadow-xs">
                  <div>
                    <div class="w-10 h-10 rounded-xl bg-[#fff0eb] border border-[#fed7cc] flex items-center justify-center text-[#ea580c] mb-3">
                      <span class="material-symbols-outlined text-[20px]">memory</span>
                    </div>
                    <span class="font-bold text-slate-900 text-sm block mb-1">Virtual Simulation &amp; MAX</span>
                    <p class="text-xs text-slate-600 leading-relaxed">
                      Cloud-hosted Modular MAX compilers and virtual device testbeds simulate Mojo kernels and on-device execution prior to physical silicon deployment.
                    </p>
                  </div>
                  <span class="text-[11px] font-mono font-semibold text-[#c2410c] mt-4 block">MODULAR MAX &amp; MOJO</span>
                </div>

                <div class="bg-white/95 rounded-2xl p-5 border border-[#fed7cc] flex flex-col justify-between shadow-xs">
                  <div>
                    <div class="w-10 h-10 rounded-xl bg-[#fff0eb] border border-[#fed7cc] flex items-center justify-center text-[#ea580c] mb-3">
                      <span class="material-symbols-outlined text-[20px]">hub</span>
                    </div>
                    <span class="font-bold text-slate-900 text-sm block mb-1">Palo Alto Silicon Base</span>
                    <p class="text-xs text-slate-600 leading-relaxed">
                      Physical hardware prototypes (AshBike, ZoeWear) and real-device telemetry benches are coordinated directly through our Palo Alto, California hub.
                    </p>
                  </div>
                  <span class="text-[11px] font-mono font-semibold text-[#c2410c] mt-4 block">PA, CA ANCHOR &amp; PO BOX</span>
                </div>
              </div>

              <div class="mt-6 pt-5 border-t border-[#fed7cc]/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span class="font-medium text-slate-800">Virtual R&amp;D Organization Active Worldwide</span>
                </div>
                <span class="font-mono text-[#9a3412] font-semibold">LEGAL &amp; CORPORATE NEXUS: PALO ALTO, CA 94303</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-4 flex flex-col gap-6">
            <!-- Leadership Card -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                  <span class="material-symbols-outlined text-[24px]">engineering</span>
                </div>
                <div>
                  <h3 class="font-headline-sm text-slate-900 font-bold">{{ companyInfo.leadArchitect }}</h3>
                  <span class="text-xs text-sky-700 font-mono">{{ companyInfo.leadTitle }}</span>
                </div>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                Specializing in Modern Android Development (MAD), Swift 6 concurrency, visionOS spatial computing, and on-device machine learning architectures.
              </p>
              <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600 leading-relaxed">
                {{ companyInfo.leadAccreditations }}
              </div>
              <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="font-code-badge text-slate-400">GITHUB REPOSITORIES</span>
                <a href="https://github.com/developerY" target="_blank" rel="noopener noreferrer" class="font-code-badge text-sky-700 font-semibold hover:underline">
                  gh/developerY
                </a>
              </div>
            </div>

            <!-- Palo Alto Entity Info (Virtual Headquarters) -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              <div class="flex items-center justify-between pb-2 border-b border-slate-100">
                <span class="font-label-caps text-slate-400 font-semibold">CORPORATE &amp; MAILING CONTACT</span>
                <span class="px-2 py-0.5 rounded bg-[#fff0eb] border border-[#fed7cc] text-[#9a3412] font-mono text-[10px] font-bold">VIRTUAL COMPANY</span>
              </div>
              <ul class="space-y-2.5 text-xs font-mono text-slate-600">
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[16px] mt-0.5">apartment</span>
                  <span>{{ companyInfo.name }} (Virtual Entity)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[16px] mt-0.5">location_on</span>
                  <div class="flex flex-col">
                    <span class="text-slate-900 font-semibold">Headquartered in Palo Alto, CA:</span>
                    <span>{{ companyInfo.address }}</span>
                  </div>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[16px] mt-0.5">mail</span>
                  <a href="mailto:developer@ylabz.com" class="text-sky-700 hover:underline">{{ companyInfo.email }}</a>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[16px] mt-0.5">public</span>
                  <a href="https://ylabz.com" target="_blank" rel="noopener noreferrer" class="text-sky-700 hover:underline">www.ylabz.com</a>
                </li>
              </ul>
              <div class="p-3 rounded-xl bg-[#fff7f5] border border-[#fed7cc] text-[11px] text-[#9a3412] leading-relaxed">
                <strong>Operating Model:</strong> Virtual-first company headquartered via Palo Alto, CA PO Box, coordinating distributed researchers and hardware initiatives globally.
              </div>
            </div>
          </div>
        </div>

        <!-- PHYSICAL INVENTIONS GALLERY -->
        <section class="flex flex-col gap-6">
          <div class="flex items-center justify-between">
            <div>
              <span class="font-label-caps text-sky-700 font-bold uppercase tracking-wider">HARDWARE SHOWCASE</span>
              <h2 class="font-headline-lg text-slate-900 font-bold tracking-tight mt-1">Physical AI &amp; Hardware Incubations</h2>
            </div>
            <a routerLink="/projects" class="text-sm font-semibold text-sky-700 hover:underline flex items-center gap-1">
              <span>View All Blueprints</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="rounded-3xl overflow-hidden border border-[#fed7cc] bg-white shadow-sm flex flex-col group">
              <div class="aspect-[16/10] overflow-hidden relative bg-[#fff0eb]">
                <img
                  src="/assets/images/coral_ashbike_1793915441529.jpg"
                  alt="AshBike e-bike prototype"
                  referrerpolicy="no-referrer"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#ffdcd2]/80 via-transparent to-transparent"></div>
                <span class="absolute bottom-3 left-3 px-2.5 py-0.5 rounded bg-[#ea580c] text-white font-mono text-[10px] font-bold shadow-xs">
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

            <div class="rounded-3xl overflow-hidden border border-[#fed7cc] bg-white shadow-sm flex flex-col group">
              <div class="aspect-[16/10] overflow-hidden relative bg-[#fff0eb]">
                <img
                  src="/assets/images/coral_zoewear_1793915441647.jpg"
                  alt="ZoeWear intelligent clothing"
                  referrerpolicy="no-referrer"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#ffdcd2]/80 via-transparent to-transparent"></div>
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

            <div class="rounded-3xl overflow-hidden border border-[#fed7cc] bg-white shadow-sm flex flex-col group">
              <div class="aspect-[16/10] overflow-hidden relative bg-[#fff0eb]">
                <img
                  src="/assets/images/coral_zoerobo_1793915442432.jpg"
                  alt="ZoeRobo autonomous robot"
                  referrerpolicy="no-referrer"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#ffdcd2]/80 via-transparent to-transparent"></div>
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
              <span class="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">STRATEGIC VENTURE PORTFOLIO</span>
              <h2 class="font-headline-lg text-slate-900 font-bold tracking-tight mt-1">
                ZoeWave &amp; YLabZ Companies
              </h2>
              <p class="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                From YLabz.com: "ZoeWave oversees the strategic development of several innovative companies. Core R&amp;D at YLabZ — Core Design at G.N.Seven."
              </p>
            </div>
            <span class="px-3 py-1.5 rounded-xl bg-white border border-[#fed7cc] text-[#9a3412] font-mono text-xs font-bold self-start sm:self-auto shadow-xs">
              9 INCUBATED COMPANIES
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#fed7cc] hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-[#ea580c] transition-colors">AshBike</span>
                  <span class="px-2 py-0.5 rounded bg-[#fff0eb] border border-[#fed7cc] text-[#9a3412] font-mono text-[10px] font-bold">MOBILITY</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Revolutionizing the e-bike market with motorcycle-inspired aesthetics, carbon fiber unibody frames, and real-time AI torque curve optimization.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>R&amp;D: YLabZ</span>
                <span class="text-[#c2410c] font-semibold">G.N.Seven Design</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#fed7cc] hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-[#ea580c] transition-colors">ZoeWear</span>
                  <span class="px-2 py-0.5 rounded bg-[#fff0eb] border border-[#fed7cc] text-[#9a3412] font-mono text-[10px] font-bold">SMART APPAREL</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  At the intersection of fashion and tech: Physiological Intelligent Clothing (PIC) integrating knitted biosensors for medical-grade continuous diagnostics.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>WearOS &amp; watchOS</span>
                <span class="text-[#c2410c] font-semibold">PIC Biosensors</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#fed7cc] hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-[#ea580c] transition-colors">ZoeRobo</span>
                  <span class="px-2 py-0.5 rounded bg-[#fff0eb] border border-[#fed7cc] text-[#9a3412] font-mono text-[10px] font-bold">PHYSICAL AI</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Pioneering AI-powered robotics for healthcare, residential security, and personal assistance, adapting to human environments with sub-cm accuracy.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Rust &amp; ROS2</span>
                <span class="text-[#c2410c] font-semibold">LiDAR &amp; SLAM</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#fed7cc] hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-[#ea580c] transition-colors">Hummingbird Fuel Rx</span>
                  <span class="px-2 py-0.5 rounded bg-[#fff0eb] border border-[#fed7cc] text-[#9a3412] font-mono text-[10px] font-bold">THERAPEUTICS</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Developing AI-powered micro-dosing applications for personalized health interventions, starting with caffeine for targeted circadian energy boosts.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Kotlin &amp; Swift</span>
                <span class="text-[#c2410c] font-semibold">Micro-Dosing AI</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#fed7cc] hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-[#ea580c] transition-colors">RxDigita</span>
                  <span class="px-2 py-0.5 rounded bg-[#fff0eb] border border-[#fed7cc] text-[#9a3412] font-mono text-[10px] font-bold">HEALTH AI</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Streamlining medication management with voice or photo input, label reading, drug interaction alerts, and caregiver sync channels.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>FHIR &amp; Core ML</span>
                <span class="text-[#c2410c] font-semibold">Rx Adherence</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#fed7cc] hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-[#ea580c] transition-colors">ZoeWare</span>
                  <span class="px-2 py-0.5 rounded bg-[#fff0eb] border border-[#fed7cc] text-[#9a3412] font-mono text-[10px] font-bold">SPATIAL AR/VR</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Innovating in AR/VR for healthcare, clinical visualization, and educational immersion across Apple visionOS, Android XR, and Meta Quest.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>RealityKit &amp; Polyspatial</span>
                <span class="text-[#c2410c] font-semibold">Apple HQ Trained</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#fed7cc] hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-[#ea580c] transition-colors">Swift AI Ad Agency</span>
                  <span class="px-2 py-0.5 rounded bg-[#fff0eb] border border-[#fed7cc] text-[#9a3412] font-mono text-[10px] font-bold">AD TECH</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Harnessing generative AI models to deliver data-driven, hyper-personalized advertising and conversion optimization for global clients.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Multimodal GenAI</span>
                <span class="text-[#c2410c] font-semibold">Zero-Cookie ROI</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#fed7cc] hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-[#ea580c] transition-colors">Jag.U.R™ Utility Robot</span>
                  <span class="px-2 py-0.5 rounded bg-[#fff0eb] border border-[#fed7cc] text-[#9a3412] font-mono text-[10px] font-bold">QUADRUPED AI</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Envisioning trusted companion robotics: an intelligent Rust-based assistive robot dog engineered to navigate rugged spaces and assist daily living.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Rust Robotics RS</span>
                <span class="text-[#c2410c] font-semibold">Micro-Kinematics</span>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#fed7cc] hover:shadow-md transition-all group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-slate-900 text-base group-hover:text-[#ea580c] transition-colors">DrunkWatch</span>
                  <span class="px-2 py-0.5 rounded bg-[#fff0eb] border border-[#fed7cc] text-[#9a3412] font-mono text-[10px] font-bold">WEARABLES AI</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Continuous smartwatch bio-telemetry assessing intoxication and transit suitability via gait cadence analysis and autonomic nervous monitoring.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>WearOS &amp; watchOS</span>
                <span class="text-[#c2410c] font-semibold">Sobriety Protection</span>
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
