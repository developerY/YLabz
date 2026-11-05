import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {YLABZ_LANGUAGE_STACK, TechStackPillar} from '../data/ylabz-data';

export interface InnovationHighlight {
  id: string;
  name: string;
  tagline: string;
  category: string;
  badge: string;
  imageUrl: string;
  description: string;
  statLabel: string;
  statValue: string;
  techSpec: string;
  link: string;
}

export interface SubstrateTarget {
  id: string;
  name: string;
  badge: string;
  color: string;
  title: string;
  desc: string;
  host: string;
  kernel: string;
  status: string;
  imageUrl: string;
}

@Component({
  selector: 'app-overview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="flex flex-col w-full">
      <!-- Atmospheric Glow Overlays -->
      <div class="relative w-full overflow-hidden">
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[480px] bg-gradient-to-b from-sky-200/40 via-blue-100/30 to-transparent blur-[140px] pointer-events-none -z-10"></div>
        <div class="absolute top-[520px] -right-40 w-[500px] h-[500px] bg-sky-100/50 blur-[130px] pointer-events-none -z-10"></div>

        <!-- HERO SECTION: CINEMATIC INSPIRATIONAL DISPLAY -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-16 w-full">
          <div class="flex flex-col gap-8">
            <!-- Telemetry Status Ribbon -->
            <div class="inline-flex items-center gap-3 self-start px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm backdrop-blur-md">
              <span class="inline-block w-2 h-2 rounded-full bg-sky-500 animate-ping"></span>
              <span class="font-label-caps text-sky-700 tracking-widest uppercase font-semibold">LAB FACILITY ACTIVE // EXP-CLUSTER 09</span>
              <span class="w-1 h-3 bg-slate-300 rounded-full"></span>
              <span class="font-code-badge text-slate-500">PALO ALTO, CA • SYS_EPOCH: 2025.Q2</span>
            </div>

            <!-- Hero Headline & Core Thesis -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div class="lg:col-span-8 flex flex-col gap-4">
                <div class="flex items-center gap-2 text-sky-700 font-mono text-xs font-semibold tracking-wider">
                  <span>PALO ALTO, CA</span>
                  <span>•</span>
                  <span>R&amp;D ENGINE &#64; ZOEWAVE</span>
                  <span>•</span>
                  <span>DESIGN BY G.N.SEVEN</span>
                </div>
                <h1 class="font-display-hero text-slate-900 tracking-tight leading-none">
                  Y? Lab Z!
                  <span class="block bg-gradient-to-r from-sky-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent mt-2 font-bold">
                    New Ideas for a New World.
                  </span>
                </h1>
                <p class="text-lg text-slate-600 max-w-2xl mt-2 leading-relaxed">
                  Developing Cutting Edge Technology. Asking questions <span class="text-sky-600 font-semibold font-headline">“?”</span> relentlessly until reaching fundamental truth at <span class="text-sky-700 font-semibold font-headline">“Z”</span>. From our Palo Alto R&amp;D hub, we engineer physical AI, intelligent apparel, electric mobility, and on-device ML—accelerated by <strong class="text-slate-900 font-semibold">Mojo</strong> (our replacement for Python) and <strong class="text-slate-900 font-semibold">Modular MAX</strong> (our replacement for CUDA).
                </p>
              </div>

              <!-- Fast Terminal Dispatch Action -->
              <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <a routerLink="/projects" class="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-medium text-base transition-all shadow-[0_4px_16px_rgba(2,132,199,0.3)] hover:scale-[1.01] active:scale-[0.99]">
                  <span class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-[20px]">terminal</span>
                    Explore Projects &amp; Blueprints
                  </span>
                  <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>

                <a routerLink="/platforms" class="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-medium text-base border border-slate-200 transition-all shadow-sm">
                  <span class="flex items-center gap-2 text-slate-700">
                    <span class="material-symbols-outlined text-[20px] text-orange-600">bolt</span>
                    Mojo &amp; MAX Platform
                  </span>
                  <span class="font-code-badge text-orange-600 font-semibold">MODULAR</span>
                </a>
              </div>
            </div>

            <!-- INSPIRATIONAL INNOVATION SHOWCASE REEL -->
            <div class="mt-4 rounded-3xl bg-slate-900 text-white p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
              <div class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent z-10 pointer-events-none"></div>
              
              <!-- Background Ambient Hero Photography -->
              <img
                [src]="activeHighlight().imageUrl"
                [alt]="activeHighlight().name"
                referrerpolicy="no-referrer"
                class="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-luminosity filter contrast-125 transition-all duration-700 scale-105" />

              <div class="relative z-20 flex flex-col gap-8">
                <!-- Showcase Selector Tabs -->
                <div class="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div class="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-widest font-semibold">
                    <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                    <span>FLAGSHIP INNOVATION SPOTLIGHT // PALO ALTO LABS</span>
                  </div>

                  <div class="flex flex-wrap items-center gap-2">
                    @for (item of innovations; track item.id) {
                      <button
                        type="button"
                        (click)="selectHighlight(item)"
                        [class]="activeHighlight().id === item.id
                          ? 'px-3.5 py-1.5 rounded-lg bg-sky-500 text-white font-mono text-xs font-semibold shadow-md shadow-sky-500/30 transition-all'
                          : 'px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 font-mono text-xs transition-all'">
                        {{ item.name }}
                      </button>
                    }
                  </div>
                </div>

                <!-- Showcase Main Content Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div class="lg:col-span-7 flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                      <span class="px-3 py-1 rounded-full bg-sky-400/20 text-sky-300 border border-sky-400/30 font-mono text-xs font-semibold">
                        {{ activeHighlight().category }}
                      </span>
                      <span class="font-mono text-xs text-slate-400">{{ activeHighlight().badge }}</span>
                    </div>

                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
                      {{ activeHighlight().name }}
                    </h2>
                    <p class="text-sky-300 text-lg font-medium">
                      {{ activeHighlight().tagline }}
                    </p>
                    <p class="text-slate-300 leading-relaxed text-sm sm:text-base max-w-xl">
                      {{ activeHighlight().description }}
                    </p>

                    <div class="flex flex-wrap items-center gap-6 pt-2">
                      <div class="flex flex-col">
                        <span class="font-mono text-xs text-slate-400 uppercase tracking-wider">{{ activeHighlight().statLabel }}</span>
                        <span class="text-2xl sm:text-3xl font-extrabold text-white font-mono text-sky-400">{{ activeHighlight().statValue }}</span>
                      </div>
                      <div class="h-10 w-px bg-white/10"></div>
                      <div class="flex flex-col">
                        <span class="font-mono text-xs text-slate-400 uppercase tracking-wider">HARDWARE FABRIC</span>
                        <span class="text-sm font-semibold text-slate-200 font-mono">{{ activeHighlight().techSpec }}</span>
                      </div>
                    </div>

                    <div class="pt-4 flex items-center gap-4">
                      <a [routerLink]="activeHighlight().link" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 hover:bg-sky-50 font-semibold text-sm transition-all shadow-lg hover:scale-105">
                        <span>Inspect Tech Blueprint</span>
                        <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </a>
                    </div>
                  </div>

                  <!-- High-Res Interactive Visual Card -->
                  <div class="lg:col-span-5 flex flex-col gap-3">
                    <div class="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                      <img
                        [src]="activeHighlight().imageUrl"
                        [alt]="activeHighlight().name"
                        referrerpolicy="no-referrer"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                      
                      <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-xs">
                        <span class="px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          {{ activeHighlight().badge }}
                        </span>
                        <span class="text-sky-300 font-semibold">ZOEWAVE R&amp;D</span>
                      </div>
                    </div>

                    <div class="flex items-center justify-between px-2 text-xs font-mono text-slate-400">
                      <span>TELEMETRY: VERIFIED 2025</span>
                      <span>COLLAB: G.N.SEVEN DESIGN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CORE LANGUAGE & ACCELERATOR STACK (Kotlin, Swift, Rust, Mojo, MAX Engine) -->
            <div class="mt-4 pt-4">
              <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
                <span class="font-label-caps text-slate-400 tracking-widest uppercase font-semibold">Disciplined Stack: Kotlin, Swift, Rust, Mojo &amp; MAX (Modular)</span>
                <span class="font-code-badge text-orange-600 font-semibold">ZERO VENDOR LOCK-IN</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                @for (item of languageStack; track item.language) {
                  <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors">
                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="font-headline-sm text-slate-900 font-bold text-sm">{{ item.language }}</span>
                        <span class="font-code-badge px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-100 text-[10px] truncate max-w-[140px]">{{ item.replaces }}</span>
                      </div>
                      <p class="text-xs text-sky-700 font-medium mb-2 leading-snug">{{ item.role }}</p>
                      <ul class="text-[11px] text-slate-500 space-y-1 font-mono">
                        @for (tech of item.ecosystem.slice(0, 3); track tech) {
                          <li class="flex items-center gap-1.5 truncate">
                            <span class="w-1 h-1 rounded-full bg-sky-500 shrink-0"></span>
                            <span class="truncate">{{ tech }}</span>
                          </li>
                        }
                      </ul>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </section>

        <!-- TELEMETRY STATS COUNTER GRID -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full">
          <div class="flex flex-col gap-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-sky-600 text-[24px]">monitor_heart</span>
                <h2 class="font-headline-md text-slate-900 tracking-tight font-semibold">Active Computational Telemetry</h2>
              </div>
              <span class="font-code-badge text-sky-700 font-semibold flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                SAMPLING INTERVAL: {{ samplingHz() }}ms
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <!-- Stat Card 1 -->
              <div class="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div class="flex items-center justify-between mb-4">
                  <span class="font-label-caps text-slate-400 uppercase font-semibold">Architecture Core</span>
                  <span class="p-2 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 material-symbols-outlined text-[20px]">devices_other</span>
                </div>
                <div>
                  <div class="font-headline-lg text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors font-semibold">
                    Dual Multiplatform
                  </div>
                  <p class="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Single synchronized code fabric running seamlessly across mobile, spatial headsets, and ultra-low-power wearables.
                  </p>
                </div>
                <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between font-code-badge text-slate-500">
                  <span>TARGET HARMONY</span>
                  <span class="text-sky-700 font-semibold">100% REUSED KERNELS</span>
                </div>
              </div>

              <!-- Stat Card 2 -->
              <div class="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div class="flex items-center justify-between mb-4">
                  <span class="font-label-caps text-slate-400 uppercase font-semibold">Mojo &amp; MAX Velocity</span>
                  <span class="p-2 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 material-symbols-outlined text-[20px]">bolt</span>
                </div>
                <div>
                  <div class="font-headline-lg text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors flex items-baseline gap-1 font-semibold">
                    68,420 <span class="font-headline-sm text-orange-600 font-normal">x</span>
                  </div>
                  <p class="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    SIMD vector register acceleration replacing legacy Python GIL bottlenecks and NVIDIA CUDA silos.
                  </p>
                </div>
                <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between font-code-badge text-slate-500">
                  <span>MLIR JIT COMPILER</span>
                  <span class="text-orange-600 font-semibold">ZERO-COST INTEROP</span>
                </div>
              </div>

              <!-- Stat Card 3 -->
              <div class="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div class="flex items-center justify-between mb-4">
                  <span class="font-label-caps text-slate-400 uppercase font-semibold">Spatial Compositor</span>
                  <span class="p-2 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 material-symbols-outlined text-[20px]">view_in_ar</span>
                </div>
                <div>
                  <div class="font-headline-lg text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors flex items-baseline gap-1 font-semibold">
                    90 <span class="font-headline-sm text-sky-600 font-normal">FPS</span>
                  </div>
                  <p class="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Zero-frame-drop spatial rendering loop with predictive head-pose estimation and sub-millimeter anchor drift.
                  </p>
                </div>
                <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between font-code-badge text-slate-500">
                  <span>MOTION-TO-PHOTON</span>
                  <span class="text-sky-700 font-semibold">&lt; 11.2ms FIXED</span>
                </div>
              </div>

              <!-- Stat Card 4 -->
              <div class="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div class="flex items-center justify-between mb-4">
                  <span class="font-label-caps text-slate-400 uppercase font-semibold">Cryptographic Shield</span>
                  <span class="p-2 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 material-symbols-outlined text-[20px]">lock_reset</span>
                </div>
                <div>
                  <div class="font-headline-lg text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors font-semibold">
                    Lattice-512
                  </div>
                  <p class="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    NIST-standardized Post-Quantum asymmetric encryption shielding all multi-agent distributed communications.
                  </p>
                </div>
                <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between font-code-badge text-slate-500">
                  <span>QUANTUM ATTACK RESIST</span>
                  <span class="text-sky-700 font-semibold">MAX LEVEL 5</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- EXECUTIVE MISSION & SCIENTIFIC RIGOR SECTION -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
          <div class="rounded-3xl p-8 lg:p-12 bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none"></div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <!-- Text Narrative -->
              <div class="lg:col-span-7 flex flex-col gap-6">
                <div class="flex items-center gap-3">
                  <span class="font-label-caps text-sky-700 tracking-widest uppercase font-semibold">EXECUTIVE SUMMARY // LAB MANIFESTO</span>
                  <span class="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
                  <span class="font-code-badge text-slate-400">PROJ_ID: SYNAPSE-FOUNDATION</span>
                </div>

                <h3 class="font-headline-lg text-slate-900 leading-tight font-semibold">
                  Bridging Fundamental Natural Science With High-Precision Production Engineering.
                </h3>

                <p class="text-slate-600 leading-relaxed text-base">
                  At <strong class="text-slate-900 font-semibold">Y? Lab Z</strong>, we believe commercial breakthroughs are born when research laboratories discard conventional product boundaries. We reject theoretical prototypes that wither in PDF archives: every algorithmic insight must execute predictably on metal, silicon, and quantum simulators.
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div class="p-5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col gap-2">
                    <div class="flex items-center gap-2 text-sky-700 font-semibold">
                      <span class="material-symbols-outlined text-[20px] text-sky-600">science</span>
                      <span class="font-headline-sm text-base">Inquisitive Rigor</span>
                    </div>
                    <p class="text-xs text-slate-600 leading-relaxed">
                      Beginning with “Why?”, our investigators stress-test prevailing paradigms across distributed consensus and quantum information theory.
                    </p>
                  </div>

                  <div class="p-5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col gap-2">
                    <div class="flex items-center gap-2 text-sky-700 font-semibold">
                      <span class="material-symbols-outlined text-[20px] text-sky-600">precision_manufacturing</span>
                      <span class="font-headline-sm text-base">End-to-End Delivery</span>
                    </div>
                    <p class="text-xs text-slate-600 leading-relaxed">
                      Carrying projects to “Z”, we package robust compiler toolchains, formal proofs, and deployable zero-knowledge protocols.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Visual Telemetry & Cryo Chamber Display -->
              <div class="lg:col-span-5 flex flex-col gap-4">
                <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col gap-4">
                  <div class="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span class="font-code-badge text-slate-600 font-medium">TRANSLATION_LAYER: SCI_TO_PROD</span>
                    <span class="font-label-caps text-sky-700 font-semibold">FLOW: ONLINE</span>
                  </div>

                  <!-- Hardware Rig Visual with asset fallback -->
                  <div class="relative w-full h-44 rounded-xl overflow-hidden border border-slate-200 group">
                    <img
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt="Dark cleanroom laboratory with high-tech quantum dilution refrigerator cryogenic setup emitting subtle neon cyan reflections"
                      referrerpolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuChYbwLqF5_83tQqQeipBscaz6AwGKfz7qCUZ_G7_EyiuLS2uhO7XBkfpY-Xrpo0i-VCiBYucu5vwgHwVWpi1818qHvWtQQ0dqTFx124b5RPtO3jpsKPnHck-j7c-l4P8u9AbxQja4uU-B1_tta7CE0SR9iUz_zc5yD-zPHF9YeGloEFbGwTwIQUtp2IHcSY0I8l82h5rxisx4kimebW7Zn5iMPKvpDfEXvrKFmhH0V" />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                        <span class="font-code-badge text-white text-xs">CRYO-CHAMBER // DILUTION_CORE_A</span>
                      </div>
                      <span class="font-mono text-xs text-sky-300 font-bold">11.2 mK</span>
                    </div>
                  </div>

                  <p class="text-xs text-slate-500 leading-relaxed">
                    Palo Alto hardware cleanroom housing dilution refrigeration and physical hardware harnesses for high-throughput edge evaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- SCIENTIFIC DISCOVERY QUOTE BANNER (Lewis Thomas) -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-4 w-full">
          <div class="rounded-2xl p-8 lg:p-10 bg-white border border-slate-200 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0 text-sky-600 shadow-sm">
                <span class="material-symbols-outlined text-[28px]">format_quote</span>
              </div>
              <div class="flex flex-col gap-2">
                <blockquote class="font-headline-sm text-slate-900 italic leading-snug">
                  “The greatest of all the accomplishments of twentieth-century science has been the discovery of human ignorance.”
                </blockquote>
                <div class="flex items-center gap-3 mt-1">
                  <span class="font-label-caps text-sky-700 font-semibold uppercase tracking-wider">— Dr. Lewis Thomas</span>
                  <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span class="text-xs text-slate-500">The Medusa and the Snail: More Notes of a Biology Watcher</span>
                </div>
              </div>
            </div>
            <div class="shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 font-code-badge text-slate-500">
              <span class="material-symbols-outlined text-[16px] text-sky-600">auto_stories</span>
              <span>ARCHIVE REFERENCE: REF-THOMAS-1979</span>
            </div>
          </div>
        </section>

        <!-- INTERACTIVE LAB DIRECTORY PREVIEW GRID WITH RICH PHOTOGRAPHY -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-14 w-full">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div class="flex items-center gap-2 text-sky-700 font-semibold font-label-caps uppercase tracking-widest mb-1">
                  <span class="material-symbols-outlined text-[16px] text-sky-600">folder_special</span>
                  <span>Subsystem Exploration</span>
                </div>
                <h2 class="font-headline-lg text-slate-900 tracking-tight font-semibold">Interactive Lab Directory</h2>
              </div>
              <p class="text-sm text-slate-600 max-w-md">
                Jump into specialized laboratories to review real-time source blueprints, mathematical whitepapers, and target runtime SDKs.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Directory Card 1: Platforms -->
              <div class="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all flex flex-col justify-between group">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between">
                    <span class="font-code-badge text-sky-700 font-semibold px-2 py-0.5 rounded bg-sky-50 border border-sky-200/60">SEC_01 // ARCH</span>
                    <span class="material-symbols-outlined text-slate-400 group-hover:text-sky-600 transition-colors text-[24px]">developer_board</span>
                  </div>

                  <div class="w-full h-44 rounded-xl overflow-hidden relative border border-slate-200">
                    <img
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt="High precision futuristic circuit substrate with optical routing tracks illuminated in ice cyan and indigo light"
                      referrerpolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo4YGQDwQgCctU4rVz4Mxqdls2j21Zgcqkyb436jyB1r3S59CIrOpgwUa27U1s_sdlfDIvYiOk2fl5JcVdLW3Slu0CIKUzKFz2svrdQJFEeFU5nOHoRtJhSR5JhL6zYqRKt5289LMaIkHBw3dGJa-NuWruX1QNkxoIgjATJL_WL4rnS8IOH26hu7bHzjmf_8KgFtge3w23eKDTLcA34P-S4EZJiJoZw-AM6kWY49j_" />
                    <div class="absolute inset-0 bg-slate-900/40"></div>
                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span class="font-mono text-xs font-semibold text-white drop-shadow-md">MODULAR &amp; CHIPS</span>
                      <span class="px-2 py-0.5 rounded bg-orange-500/80 backdrop-blur-md text-white font-mono text-[10px] font-bold">MOJO &amp; MAX</span>
                    </div>
                  </div>

                  <div>
                    <h3 class="font-headline-md text-slate-900 group-hover:text-sky-600 transition-colors font-semibold">Frontier Platforms</h3>
                    <p class="text-sm text-slate-600 mt-2 leading-relaxed">
                      Unified execution across Mojo/MAX, visionOS, Android XR, embedded micro-wearables, and quantum state simulators.
                    </p>
                  </div>

                  <div class="flex flex-wrap gap-1.5 pt-2">
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">Modular MAX</span>
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">Mojo Compiler</span>
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">Zero-Copy HAL</span>
                  </div>
                </div>

                <div class="pt-6 mt-4 border-t border-slate-100">
                  <a routerLink="/platforms" class="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-sky-700 font-headline-sm text-sm border border-slate-200 transition-all font-semibold">
                    <span>View Platforms</span>
                    <span class="material-symbols-outlined text-[18px]">chevron_right</span>
                  </a>
                </div>
              </div>

              <!-- Directory Card 2: Projects & Blueprints -->
              <div class="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all flex flex-col justify-between group">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between">
                    <span class="font-code-badge text-sky-700 font-semibold px-2 py-0.5 rounded bg-sky-50 border border-sky-200/60">SEC_02 // BUILDS</span>
                    <span class="material-symbols-outlined text-slate-400 group-hover:text-sky-600 transition-colors text-[24px]">code_blocks</span>
                  </div>

                  <div class="w-full h-44 rounded-xl overflow-hidden relative border border-slate-200">
                    <img
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt="AshBike e-bike prototype with cyan telemetry HUD and carbon fiber frame"
                      referrerpolicy="no-referrer"
                      src="/assets/images/ashbike_showcase_1793913626360.jpg" />
                    <div class="absolute inset-0 bg-slate-900/30"></div>
                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span class="font-mono text-xs font-semibold text-white drop-shadow-md">ASHBIKE &amp; ROBOTICS</span>
                      <span class="px-2 py-0.5 rounded bg-sky-500/80 backdrop-blur-md text-white font-mono text-[10px] font-bold">10 INITIATIVES</span>
                    </div>
                  </div>

                  <div>
                    <h3 class="font-headline-md text-slate-900 group-hover:text-sky-600 transition-colors font-semibold">Projects &amp; Blueprints</h3>
                    <p class="text-sm text-slate-600 mt-2 leading-relaxed">
                      Battle-tested repository implementations: AshBike e-bikes, ZoeWear intelligent garments, ZoeRobo autonomous AI, and PhotoDo.
                    </p>
                  </div>

                  <div class="flex flex-wrap gap-1.5 pt-2">
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">AshBike Mobility</span>
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">ZoeWear Knit</span>
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">ZoeRobo AI</span>
                  </div>
                </div>

                <div class="pt-6 mt-4 border-t border-slate-100">
                  <a routerLink="/projects" class="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-sky-700 font-headline-sm text-sm border border-slate-200 transition-all font-semibold">
                    <span>Access Blueprints</span>
                    <span class="material-symbols-outlined text-[18px]">chevron_right</span>
                  </a>
                </div>
              </div>

              <!-- Directory Card 3: Research & Insights -->
              <div class="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all flex flex-col justify-between group">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between">
                    <span class="font-code-badge text-sky-700 font-semibold px-2 py-0.5 rounded bg-sky-50 border border-sky-200/60">SEC_03 // PAPERS</span>
                    <span class="material-symbols-outlined text-slate-400 group-hover:text-sky-600 transition-colors text-[24px]">menu_book</span>
                  </div>

                  <div class="w-full h-44 rounded-xl overflow-hidden relative border border-slate-200">
                    <img
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt="Futuristic software research scientist in high-tech laboratory surrounded by holographic spatial computing interfaces"
                      referrerpolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCwSwsKHHNdZBPaXz0yorygwsyGLz6DjP9eYEbrcJMY1bDu2-P3ovu-49q3gPiN-T21tHCcChtVV-fKasvro_z0WG15qLjwCVhh2yUFSZezbFvcBEk4IA_BsNlAc4XSOe4II3K4phFJ45TAhVCgnSx1lcaZoJQEkbiLbfdsPsf8Ld91pj8eFY2reC041MvVIv7imVyNRsauhBpm_Y6rbd5GJc_OZHVr0q6jRk7FkH" />
                    <div class="absolute inset-0 bg-slate-900/40"></div>
                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span class="font-mono text-xs font-semibold text-white drop-shadow-md">PUBLICATIONS &amp; RFC</span>
                      <span class="px-2 py-0.5 rounded bg-purple-500/80 backdrop-blur-md text-white font-mono text-[10px] font-bold">8 ARTICLES</span>
                    </div>
                  </div>

                  <div>
                    <h3 class="font-headline-md text-slate-900 group-hover:text-sky-600 transition-colors font-semibold">Research &amp; Insights</h3>
                    <p class="text-sm text-slate-600 mt-2 leading-relaxed">
                      Technical whitepapers, Lewis Thomas epistemology archives, empirical latency benchmarks, and formal proofs.
                    </p>
                  </div>

                  <div class="flex flex-wrap gap-1.5 pt-2">
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">Android &amp; iOS</span>
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">Thomas Archive</span>
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">Mojo vs CUDA</span>
                  </div>
                </div>

                <div class="pt-6 mt-4 border-t border-slate-100">
                  <a routerLink="/research" class="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-sky-700 font-headline-sm text-sm border border-slate-200 transition-all font-semibold">
                    <span>Read Research</span>
                    <span class="material-symbols-outlined text-[18px]">chevron_right</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- DIRECT CTA BANNER: GITHUB REPOSITORIES & COLLABORATION -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
          <div class="rounded-3xl p-8 lg:p-12 bg-white border border-slate-200 shadow-sm relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div class="absolute top-0 right-0 w-80 h-full bg-sky-100/40 blur-2xl pointer-events-none"></div>

            <div class="flex flex-col gap-3 max-w-2xl">
              <div class="inline-flex items-center gap-2 self-start px-3 py-1 rounded-md bg-slate-100 border border-slate-200 font-code-badge text-sky-700 font-semibold">
                <span class="material-symbols-outlined text-[16px] text-sky-600">terminal</span>
                <span>OPEN LAB REPOSITORIES ON GITHUB</span>
              </div>

              <h2 class="font-headline-lg text-slate-900 font-semibold">
                Build With Us. Inspect The Source Code.
              </h2>

              <p class="text-slate-600 leading-relaxed text-base">
                Every breakthrough developed at Y? Lab Z is backed by transparent benchmarking harnesses, open-source crates, and reproducible neural models hosted on GitHub under permissive enterprise licenses.
              </p>

              <div class="flex items-center gap-6 mt-2 pt-2 font-code-badge text-slate-500">
                <div class="flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[16px] text-slate-400">star</span>
                  <span>18.4K STARS</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[16px] text-slate-400">fork_right</span>
                  <span>2.1K FORKS</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[16px] text-sky-600">verified</span>
                  <span>SIGNED COMMITS (GPG)</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <a routerLink="/research" class="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-medium text-base transition-all shadow-[0_4px_16px_rgba(2,132,199,0.3)] text-center flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-[20px]">code</span>
                Clone Repositories
              </a>

              <a routerLink="/projects" class="px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium text-base border border-slate-200 transition-all text-center flex items-center justify-center gap-2 shadow-sm">
                <span class="material-symbols-outlined text-[20px] text-sky-600">integration_instructions</span>
                Browse Active Projects
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  `
})
export class OverviewComponent {
  samplingHz = signal<number>(50);
  languageStack: TechStackPillar[] = YLABZ_LANGUAGE_STACK;

  innovations: InnovationHighlight[] = [
    {
      id: 'ashbike',
      name: 'AshBike E-Mobility',
      tagline: 'Aggressive motorcycle ergonomics with on-bike AI motor torque curves',
      category: 'Smart Mobility',
      badge: 'G.N.Seven Carbon Chassis',
      imageUrl: '/assets/images/ashbike_showcase_1793913626360.jpg',
      description: 'Revolutionizing the electric mobility market by marrying motorcycle ergonomics with real-time AI motor torque curves, battery thermal optimization, and integrated telemetry across Android & iOS.',
      statLabel: 'REAL-TIME TORQUE LATENCY',
      statValue: '2.4 ms',
      techSpec: 'Kotlin NDK • Swift CoreBluetooth • Rust Embedded',
      link: '/projects'
    },
    {
      id: 'zoewear',
      name: 'ZoeWear PIC',
      tagline: 'Physiological Intelligent Clothing with conductive smart fabric sensors',
      category: 'Bio-Wearables',
      badge: 'Conductive Smart Knit',
      imageUrl: '/assets/images/zoewear_apparel_1793913626652.jpg',
      description: 'Medical-grade continuous diagnostics woven seamlessly into everyday haute couture textiles. Knitted conductive thread feeds continuous PPG, ECG, and surface EMG into ultra-low-power microcontrollers.',
      statLabel: 'WASH CYCLE RESILIENCE',
      statValue: '100+ CYCLES',
      techSpec: 'WearOS Health Tiles • watchOS • TFLite INT8',
      link: '/projects'
    },
    {
      id: 'modular-max',
      name: 'Modular MAX & Mojo',
      tagline: 'Replacing Python with Mojo and replacing NVIDIA CUDA with MAX Engine',
      category: 'Accelerated AI',
      badge: 'Silicon Graph Compiler',
      imageUrl: '/assets/images/modular_max_chip_1793913627933.jpg',
      description: 'Definitive escape from the Python GIL and NVIDIA CUDA monopoly. Compiles PyTorch and Mojo graphs to native machine code executing across NVIDIA, AMD ROCm, Apple Silicon Metal, and Intel AMX.',
      statLabel: 'EMPIRICAL SIMD ACCELERATION',
      statValue: '68,420x FASTER',
      techSpec: 'Mojo Compiler • MAX Serving • MLIR / LLVM',
      link: '/platforms'
    },
    {
      id: 'zoerobo',
      name: 'ZoeRobo Autonomous AI',
      tagline: 'Adaptive AI robotics with stereo SLAM and human safety navigation',
      category: 'Physical AI',
      badge: 'Autonomous Spatial Agent',
      imageUrl: '/assets/images/zoerobo_robot_1793913627219.jpg',
      description: 'Autonomous robotic platforms engineered for healthcare facilities, residential perimeter security, and assisted living care. Designed to navigate complex dynamic human spaces with sub-centimeter accuracy.',
      statLabel: 'POSITIONING ACCURACY',
      statValue: '< 0.8 cm',
      techSpec: 'Rust Robotics RS • Python ROS2 • PyTorch Vision',
      link: '/projects'
    }
  ];

  activeHighlight = signal<InnovationHighlight>(this.innovations[0]);

  selectHighlight(item: InnovationHighlight) {
    this.activeHighlight.set(item);
  }
}
