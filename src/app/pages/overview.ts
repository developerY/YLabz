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
  repoUrl?: string;
  repoName?: string;
}

@Component({
  selector: 'app-overview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="flex flex-col w-full text-slate-900">
      <!-- Atmospheric Tech Grid Overlays in Light Theme -->
      <div class="relative w-full overflow-hidden">
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[480px] bg-gradient-to-b from-sky-200/40 via-violet-100/30 to-transparent blur-[120px] pointer-events-none -z-10"></div>
        <div class="absolute top-[520px] -right-40 w-[500px] h-[500px] bg-blue-100/40 blur-[130px] pointer-events-none -z-10"></div>

        <!-- HERO SECTION: HIGH-TECH PRECISION DISPLAY -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-16 w-full">
          <div class="flex flex-col gap-8">
            <!-- Telemetry Status Ribbon -->
            <div class="inline-flex items-center gap-3 self-start px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm backdrop-blur-md">
              <span class="inline-block w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse shadow-[0_0_8px_#0ea5e9]"></span>
              <span class="font-label-caps text-sky-700 tracking-widest uppercase font-bold text-xs">LAB ACTIVE · HIGH-PERFORMANCE R&amp;D</span>
              <span class="w-1 h-3 bg-slate-300 rounded-full"></span>
              <span class="font-code-badge text-slate-600 text-xs">VIRTUAL HQ · PALO ALTO, CA</span>
              <span class="w-1 h-3 bg-slate-300 rounded-full hidden sm:inline"></span>
              <span class="font-code-badge text-violet-700 text-xs hidden sm:inline font-semibold">39+ REPOSITORIES</span>
            </div>

            <!-- Hero Headline & Core Thesis -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div class="lg:col-span-8 flex flex-col gap-4">
                <div class="flex flex-wrap items-center gap-2 text-sky-700 font-mono text-xs font-semibold tracking-wider">
                  <span class="px-2.5 py-0.5 rounded bg-sky-50 border border-sky-200">PALO ALTO, CA</span>
                  <span>•</span>
                  <span class="text-violet-700">ZOEWAVE R&amp;D ENGINE</span>
                  <span>•</span>
                  <span class="text-amber-700">G.N.SEVEN DESIGN</span>
                </div>
                <h1 class="font-display-hero text-slate-900 tracking-tight leading-none text-4xl sm:text-6xl font-black">
                  Y? Lab Z!
                  <span class="block bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mt-2">
                    New Ideas for a New World.
                  </span>
                </h1>
                <p class="text-base sm:text-lg text-slate-600 max-w-2xl mt-2 leading-relaxed">
                  Developing cutting-edge technology by asking questions <span class="text-sky-600 font-bold font-headline">“?”</span> relentlessly until reaching fundamental truth at <span class="text-violet-700 font-bold font-headline">“Z”</span>. From our virtual headquarters in Palo Alto, California, we engineer physical AI, intelligent apparel, electric mobility, and on-device ML—accelerated by <strong class="text-amber-700 font-semibold">Mojo</strong> (our replacement for Python) and <strong class="text-indigo-700 font-semibold">Modular MAX</strong> (our replacement for CUDA).
                </p>
              </div>

              <!-- Fast Terminal Dispatch Action -->
              <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <a routerLink="/projects" class="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-medium text-base transition-all shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99]">
                  <span class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-[20px]">terminal</span>
                    <span>Explore Projects (17)</span>
                  </span>
                  <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>

                <a href="https://github.com/developerY" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-900 font-medium text-base border border-slate-300 hover:border-violet-500 transition-all shadow-sm">
                  <span class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-[20px] text-violet-600">code</span>
                    <span>github.com/developerY</span>
                  </span>
                  <span class="font-code-badge text-violet-700 font-semibold text-xs">OPEN CODE</span>
                </a>
              </div>
            </div>

            <!-- INSPIRATIONAL INNOVATION SHOWCASE REEL IN HIGH-TECH LIGHT -->
            <div class="mt-4 rounded-3xl bg-white text-slate-900 p-6 sm:p-8 lg:p-10 shadow-md border border-slate-200 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-10 pointer-events-none"></div>
              
              <!-- Background Ambient Hero Photography -->
              <img
                [src]="activeHighlight().imageUrl"
                [alt]="activeHighlight().name"
                referrerpolicy="no-referrer"
                class="absolute inset-0 w-full h-full object-cover opacity-15 filter contrast-125 transition-all duration-700 scale-105" />

              <div class="relative z-20 flex flex-col gap-8">
                <!-- Showcase Selector Tabs -->
                <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div class="flex items-center gap-2 text-sky-700 font-mono text-xs uppercase tracking-widest font-semibold">
                    <span class="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse shadow-[0_0_8px_#0ea5e9]"></span>
                    <span>FLAGSHIP INNOVATION SPOTLIGHT · PALO ALTO LABS</span>
                  </div>

                  <div class="flex flex-wrap items-center gap-2">
                    @for (item of innovations; track item.id) {
                      <button
                        type="button"
                        (click)="selectHighlight(item)"
                        [class]="activeHighlight().id === item.id
                          ? 'px-3.5 py-1.5 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold shadow-sm transition-all'
                          : 'px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-mono text-xs transition-all'">
                        {{ item.name }}
                      </button>
                    }
                  </div>
                </div>

                <!-- Showcase Main Content Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div class="lg:col-span-7 flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                      <span class="px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 font-mono text-xs font-semibold">
                        {{ activeHighlight().category }}
                      </span>
                      <span class="font-mono text-xs text-violet-700 font-medium">{{ activeHighlight().badge }}</span>
                    </div>

                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
                      {{ activeHighlight().name }}
                    </h2>
                    <p class="text-sky-700 text-base sm:text-lg font-semibold font-mono">
                      {{ activeHighlight().tagline }}
                    </p>
                    <p class="text-slate-600 leading-relaxed text-sm sm:text-base max-w-xl">
                      {{ activeHighlight().description }}
                    </p>

                    <div class="flex flex-wrap items-center gap-6 pt-2">
                      <div class="flex flex-col">
                        <span class="font-mono text-xs text-slate-500 uppercase tracking-wider">{{ activeHighlight().statLabel }}</span>
                        <span class="text-2xl sm:text-3xl font-extrabold text-sky-600 font-mono">
                          {{ activeHighlight().statValue }}
                        </span>
                      </div>
                      <div class="h-10 w-px bg-slate-200"></div>
                      <div class="flex flex-col">
                        <span class="font-mono text-xs text-slate-500 uppercase tracking-wider">HARDWARE FABRIC</span>
                        <span class="text-sm font-semibold text-violet-700 font-mono">{{ activeHighlight().techSpec }}</span>
                      </div>
                    </div>

                    <div class="pt-4 flex flex-wrap items-center gap-3">
                      <a [routerLink]="activeHighlight().link" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white hover:brightness-105 font-semibold text-sm transition-all shadow-sm">
                        <span>Inspect Tech Blueprint</span>
                        <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </a>

                      @if (activeHighlight().repoUrl) {
                        <a
                          [href]="activeHighlight().repoUrl"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs transition-all shadow-sm">
                          <span class="material-symbols-outlined text-[16px] text-sky-400">code</span>
                          <span>{{ activeHighlight().repoName }}</span>
                          <span class="material-symbols-outlined text-[14px]">open_in_new</span>
                        </a>
                      }
                    </div>
                  </div>

                  <!-- Visual Card with Preserved Photographic Image -->
                  <div class="lg:col-span-5 flex flex-col gap-3">
                    <div class="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md group bg-slate-100">
                      <img
                        [src]="activeHighlight().imageUrl"
                        [alt]="activeHighlight().name"
                        referrerpolicy="no-referrer"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                      
                      <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-xs">
                        <span class="px-2.5 py-1 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-sky-800 font-semibold flex items-center gap-1.5 shadow-sm">
                          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          {{ activeHighlight().badge }}
                        </span>
                        <span class="text-white font-bold drop-shadow-md">ZOEWAVE R&amp;D</span>
                      </div>
                    </div>

                    <div class="flex items-center justify-between px-2 text-xs font-mono text-slate-500">
                      <span>TELEMETRY: VERIFIED 2025</span>
                      <span>COLLAB: G.N.SEVEN DESIGN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CORE LANGUAGE & ACCELERATOR STACK IN HIGH-TECH LIGHT -->
            <div class="mt-4 pt-4">
              <div class="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span class="font-label-caps text-slate-900 tracking-widest uppercase font-bold text-xs flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-sky-500"></span>
                  Disciplined Stack: Kotlin, Swift, Rust, Mojo &amp; MAX Engine
                </span>
                <span class="font-code-badge text-amber-800 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full text-xs">
                  ZERO VENDOR LOCK-IN
                </span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                @for (item of languageStack; track item.language) {
                  <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all">
                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="font-headline-sm text-slate-900 font-bold text-base">{{ item.language }}</span>
                        <span class="font-code-badge px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200 text-[10px] truncate max-w-[130px] font-semibold">
                          {{ item.replaces }}
                        </span>
                      </div>
                      <p class="text-xs text-violet-700 font-medium mb-2 leading-snug">{{ item.role }}</p>
                      <ul class="text-[11px] text-slate-600 space-y-1 font-mono">
                        @for (tech of item.ecosystem.slice(0, 3); track tech) {
                          <li class="flex items-center gap-1.5 truncate">
                            <span class="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></span>
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

        <!-- TELEMETRY STATS COUNTER GRID IN HIGH-TECH LIGHT -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full">
          <div class="flex flex-col gap-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-sky-600 text-[26px]">monitor_heart</span>
                <h2 class="font-headline-md text-slate-900 tracking-tight font-bold text-xl">Active Computational Telemetry</h2>
              </div>
              <span class="font-code-badge text-sky-700 font-semibold flex items-center gap-2 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full text-xs">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                SAMPLING: {{ samplingHz() }}ms
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <!-- Stat Card 1 -->
              <div class="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between group">
                <div class="flex items-center justify-between mb-4">
                  <span class="font-label-caps text-slate-500 uppercase font-semibold text-xs">Architecture Core</span>
                  <span class="p-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 material-symbols-outlined text-[20px]">devices_other</span>
                </div>
                <div>
                  <div class="font-headline-lg text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors font-bold text-2xl">
                    Dual Native Stack
                  </div>
                  <p class="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Single synchronized engineering discipline across Android (Kotlin MVI) &amp; iOS/visionOS (Swift 6).
                  </p>
                </div>
                <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between font-code-badge text-slate-500 text-xs">
                  <span>TARGET HARMONY</span>
                  <span class="text-sky-600 font-semibold">100% NATIVE PERFORMANCE</span>
                </div>
              </div>

              <!-- Stat Card 2 -->
              <div class="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group">
                <div class="flex items-center justify-between mb-4">
                  <span class="font-label-caps text-slate-500 uppercase font-semibold text-xs">Mojo &amp; MAX Velocity</span>
                  <span class="p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 material-symbols-outlined text-[20px]">bolt</span>
                </div>
                <div>
                  <div class="font-headline-lg text-amber-600 tracking-tight transition-colors flex items-baseline gap-1 font-extrabold text-3xl">
                    68,420 <span class="font-headline-sm text-amber-700 text-base font-normal">x</span>
                  </div>
                  <p class="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    SIMD vector register acceleration replacing legacy Python GIL bottlenecks and proprietary CUDA silos.
                  </p>
                </div>
                <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between font-code-badge text-slate-500 text-xs">
                  <span>MLIR JIT COMPILER</span>
                  <span class="text-amber-700 font-semibold">ZERO-COST INTEROP</span>
                </div>
              </div>

              <!-- Stat Card 3 -->
              <div class="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:border-violet-400 hover:shadow-md transition-all flex flex-col justify-between group">
                <div class="flex items-center justify-between mb-4">
                  <span class="font-label-caps text-slate-500 uppercase font-semibold text-xs">Spatial Compositor</span>
                  <span class="p-2 rounded-xl bg-violet-50 border border-violet-200 text-violet-700 material-symbols-outlined text-[20px]">view_in_ar</span>
                </div>
                <div>
                  <div class="font-headline-lg text-violet-600 tracking-tight transition-colors flex items-baseline gap-1 font-extrabold text-3xl">
                    90 <span class="font-headline-sm text-violet-700 text-base font-normal">FPS</span>
                  </div>
                  <p class="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Zero-frame-drop spatial rendering loop with RealityKit, predictive head-pose estimation, and sub-mm anchor accuracy.
                  </p>
                </div>
                <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between font-code-badge text-slate-500 text-xs">
                  <span>MOTION-TO-PHOTON</span>
                  <span class="text-violet-700 font-semibold">&lt; 11.2ms FIXED</span>
                </div>
              </div>

              <!-- Stat Card 4 -->
              <div class="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between group">
                <div class="flex items-center justify-between mb-4">
                  <span class="font-label-caps text-slate-500 uppercase font-semibold text-xs">Open Source Portfolio</span>
                  <span class="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 material-symbols-outlined text-[20px]">code</span>
                </div>
                <div>
                  <div class="font-headline-lg text-emerald-600 tracking-tight transition-colors font-extrabold text-3xl">
                    39+ Repos
                  </div>
                  <p class="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Open repositories on GitHub under developerY spanning Swift 6, Compose MVI, visionOS, and Mojo kernels.
                  </p>
                </div>
                <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between font-code-badge text-slate-500 text-xs">
                  <span>GITHUB ECOSYSTEM</span>
                  <span class="text-emerald-700 font-semibold">developerY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- INTERACTIVE LAB DIRECTORY PREVIEW GRID IN HIGH-TECH LIGHT -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div class="flex items-center gap-2 text-sky-700 font-semibold font-label-caps uppercase tracking-widest mb-1 text-xs">
                  <span class="material-symbols-outlined text-[16px] text-sky-600">folder_special</span>
                  <span>Subsystem Exploration</span>
                </div>
                <h2 class="font-headline-lg text-slate-900 tracking-tight font-extrabold text-2xl sm:text-3xl">
                  Interactive Lab Directory
                </h2>
              </div>

              <p class="text-sm text-slate-600 max-w-md">
                Jump into specialized laboratories to review real-time source blueprints, architecture comparisons, and target runtime SDKs.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Directory Card 1: Platforms -->
              <div class="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between group">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between">
                    <span class="font-code-badge text-sky-700 font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-xs">
                      SEC_01 · PLATFORMS
                    </span>
                    <span class="material-symbols-outlined text-slate-400 group-hover:text-sky-600 transition-colors text-[24px]">developer_board</span>
                  </div>

                  <div class="w-full h-44 rounded-xl overflow-hidden relative border border-slate-200 bg-slate-100">
                    <img
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt="Authentic YLabz multiplatform architecture stack diagram"
                      referrerpolicy="no-referrer"
                      src="/assets/ylabz/platforms_overview_stack.png" />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span class="font-mono text-xs font-semibold text-white drop-shadow-md">MODULAR &amp; CHIPS</span>
                      <span class="px-2 py-0.5 rounded bg-amber-500 text-white font-mono text-[10px] font-bold">MOJO &amp; MAX</span>
                    </div>
                  </div>

                  <div>
                    <h3 class="font-headline-md text-slate-900 group-hover:text-sky-600 transition-colors font-bold text-lg">Core Platforms</h3>
                    <p class="text-sm text-slate-600 mt-2 leading-relaxed">
                      Unified execution across Android MVI, iOS/visionOS Swift 6, Modular MAX (CUDA replacement), and Mojo SIMD kernels.
                    </p>
                  </div>

                  <div class="flex flex-wrap gap-1.5 pt-2">
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">Modular MAX</span>
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">Mojo Compiler</span>
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">Clean MVI Stack</span>
                  </div>
                </div>

                <div class="pt-6 mt-4 border-t border-slate-100">
                  <a routerLink="/platforms" class="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-sky-700 font-headline-sm text-sm border border-slate-200 hover:border-sky-300 transition-all font-semibold">
                    <span>Explore Platforms</span>
                    <span class="material-symbols-outlined text-[18px]">chevron_right</span>
                  </a>
                </div>
              </div>

              <!-- Directory Card 2: Projects & Blueprints -->
              <div class="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:border-violet-400 hover:shadow-md transition-all flex flex-col justify-between group">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between">
                    <span class="font-code-badge text-violet-700 font-semibold px-2.5 py-0.5 rounded-full bg-violet-50 border border-violet-200 text-xs">
                      SEC_02 · 17 PROJECTS
                    </span>
                    <span class="material-symbols-outlined text-slate-400 group-hover:text-violet-600 transition-colors text-[24px]">code_blocks</span>
                  </div>

                  <div class="w-full h-44 rounded-xl overflow-hidden relative border border-slate-200 bg-slate-100">
                    <img
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt="Authentic AshBike e-bike prototype from YLabz"
                      referrerpolicy="no-referrer"
                      src="/assets/ylabz/ashbike_portfolio.png" />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span class="font-mono text-xs font-semibold text-white drop-shadow-md">ASHBIKE &amp; BLUEPRINTS</span>
                      <span class="px-2 py-0.5 rounded bg-violet-600 text-white font-mono text-[10px] font-bold">17 PROJECTS</span>
                    </div>
                  </div>

                  <div>
                    <h3 class="font-headline-md text-slate-900 group-hover:text-violet-700 transition-colors font-bold text-lg">Projects &amp; Blueprints</h3>
                    <p class="text-sm text-slate-600 mt-2 leading-relaxed">
                      Battle-tested implementations: AshBike e-bikes, ZoeWear smart knitwear, PhotoDo AI, ZoeRobo physical AI, and DrunkWatch.
                    </p>
                  </div>

                  <div class="flex flex-wrap gap-1.5 pt-2">
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">AshBike Mobility</span>
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">ZoeWear Knit</span>
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">PhotoDo AI</span>
                  </div>
                </div>

                <div class="pt-6 mt-4 border-t border-slate-100">
                  <a routerLink="/projects" class="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-violet-50 text-violet-700 font-headline-sm text-sm border border-slate-200 hover:border-violet-300 transition-all font-semibold">
                    <span>Inspect Projects</span>
                    <span class="material-symbols-outlined text-[18px]">chevron_right</span>
                  </a>
                </div>
              </div>

              <!-- Directory Card 3: Research & Insights -->
              <div class="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:border-rose-400 hover:shadow-md transition-all flex flex-col justify-between group">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between">
                    <span class="font-code-badge text-rose-700 font-semibold px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-xs">
                      SEC_03 · 13 ARTICLES
                    </span>
                    <span class="material-symbols-outlined text-slate-400 group-hover:text-rose-600 transition-colors text-[24px]">menu_book</span>
                  </div>

                  <div class="w-full h-44 rounded-xl overflow-hidden relative border border-slate-200 bg-slate-100">
                    <img
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt="Authentic YLabz multiplatform architecture diagram"
                      referrerpolicy="no-referrer"
                      src="/assets/ylabz/ylabz_multiplatform_diagram.png" />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                    <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span class="font-mono text-xs font-semibold text-white drop-shadow-md">ARTICLES &amp; THESIS</span>
                      <span class="px-2 py-0.5 rounded bg-rose-600 text-white font-mono text-[10px] font-bold">13 ARTICLES</span>
                    </div>
                  </div>

                  <div>
                    <h3 class="font-headline-md text-slate-900 group-hover:text-rose-700 transition-colors font-bold text-lg">Research &amp; Philosophy</h3>
                    <p class="text-sm text-slate-600 mt-2 leading-relaxed">
                      Technical whitepapers, “Android &amp; iOS Dev Together”, Lewis Thomas epistemology archive, and empirical benchmarks.
                    </p>
                  </div>

                  <div class="flex flex-wrap gap-1.5 pt-2">
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">MVI Architecture</span>
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">SwiftData vs MVVM</span>
                    <span class="font-code-badge text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">Lewis Thomas</span>
                  </div>
                </div>

                <div class="pt-6 mt-4 border-t border-slate-100">
                  <a routerLink="/research" class="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-rose-50 text-rose-700 font-headline-sm text-sm border border-slate-200 hover:border-rose-300 transition-all font-semibold">
                    <span>Read Dispatches</span>
                    <span class="material-symbols-outlined text-[18px]">chevron_right</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- DIRECT CTA BANNER: GITHUB REPOSITORIES (HIGH CONTRAST SLATE ACCENT) -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
          <div class="rounded-3xl p-8 lg:p-12 bg-slate-900 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
            <div class="absolute -top-20 -right-20 w-80 h-80 bg-sky-500/10 blur-3xl pointer-events-none"></div>

            <div class="flex flex-col gap-3 max-w-2xl">
              <div class="inline-flex items-center gap-2 self-start px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 font-code-badge text-sky-400 font-semibold text-xs">
                <span class="material-symbols-outlined text-[16px]">terminal</span>
                <span>OPEN SOURCE REPOSITORIES · DEVELOPERY</span>
              </div>

              <h2 class="font-headline-lg text-white font-bold text-2xl sm:text-3xl">
                Build With Us. Inspect The Source Code.
              </h2>

              <p class="text-slate-300 leading-relaxed text-base">
                Every breakthrough developed at Y? Lab Z is backed by transparent benchmarking harnesses, open-source repositories, and verified engineering blueprints hosted on GitHub under developerY.
              </p>

              <div class="flex flex-wrap items-center gap-6 mt-2 pt-2 font-code-badge text-slate-400 text-xs">
                <div class="flex items-center gap-1.5 text-sky-400">
                  <span class="material-symbols-outlined text-[16px]">folder_open</span>
                  <span>39+ PUBLIC REPOSITORIES</span>
                </div>
                <div class="flex items-center gap-1.5 text-violet-300">
                  <span class="material-symbols-outlined text-[16px]">device_hub</span>
                  <span>SWIFT 6 &bull; KOTLIN MVI &bull; MOJO SIMD</span>
                </div>
                <div class="flex items-center gap-1.5 text-emerald-400">
                  <span class="material-symbols-outlined text-[16px]">verified</span>
                  <span>PALO ALTO VIRTUAL LAB</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <a
                href="https://github.com/developerY"
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-base transition-all shadow-md text-center flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-[20px]">code</span>
                <span>Explore GitHub Repos</span>
              </a>

              <a routerLink="/projects" class="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white font-medium text-base border border-slate-700 transition-all text-center flex items-center justify-center gap-2 shadow-sm">
                <span class="material-symbols-outlined text-[20px] text-sky-400">integration_instructions</span>
                <span>Browse All 17 Projects</span>
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
      imageUrl: '/assets/ylabz/ashbike_portfolio.png',
      description: 'Revolutionizing the electric mobility market by marrying motorcycle ergonomics with real-time AI motor torque curves, battery thermal optimization, and integrated telemetry across Android & iOS.',
      statLabel: 'REAL-TIME TORQUE LATENCY',
      statValue: '2.4 ms',
      techSpec: 'Kotlin NDK • Swift CoreBluetooth • Rust Embedded',
      link: '/projects',
      repoUrl: 'https://github.com/developerY/AshBike',
      repoName: 'developerY/AshBike'
    },
    {
      id: 'zoewear',
      name: 'ZoeWear PIC',
      tagline: 'Physiological Intelligent Clothing with conductive smart fabric sensors',
      category: 'Bio-Wearables',
      badge: 'Conductive Smart Knit',
      imageUrl: '/assets/ylabz/wearos_biotelemetry.png',
      description: 'Medical-grade continuous diagnostics woven seamlessly into everyday haute couture textiles. Knitted conductive thread feeds continuous PPG, ECG, and surface EMG into ultra-low-power microcontrollers.',
      statLabel: 'WASH CYCLE RESILIENCE',
      statValue: '100+ CYCLES',
      techSpec: 'WearOS Health Tiles • watchOS • TFLite INT8',
      link: '/projects',
      repoUrl: 'https://github.com/developerY/ZoeWear',
      repoName: 'developerY/ZoeWear'
    },
    {
      id: 'modular-max',
      name: 'Modular MAX & Mojo',
      tagline: 'Replacing Python with Mojo and replacing NVIDIA CUDA with MAX Engine',
      category: 'Accelerated AI',
      badge: 'Silicon Graph Compiler',
      imageUrl: '/assets/images/coral_modular_max_1793915442661.jpg',
      description: 'Definitive escape from the Python GIL and NVIDIA CUDA monopoly. Compiles PyTorch and Mojo graphs to native machine code executing across NVIDIA, AMD ROCm, Apple Silicon Metal, and Intel AMX.',
      statLabel: 'EMPIRICAL SIMD ACCELERATION',
      statValue: '68,420x FASTER',
      techSpec: 'Mojo Compiler • MAX Serving • MLIR / LLVM',
      link: '/platforms',
      repoUrl: 'https://github.com/developerY/MojoMax',
      repoName: 'developerY/MojoMax'
    },
    {
      id: 'zoerobo',
      name: 'ZoeRobo Autonomous AI',
      tagline: 'Adaptive AI robotics with stereo SLAM and human safety navigation',
      category: 'Physical AI',
      badge: 'Autonomous Spatial Agent',
      imageUrl: '/assets/images/coral_zoerobo_1793915442432.jpg',
      description: 'Autonomous robotic platforms engineered for healthcare facilities, residential perimeter security, and assisted living care. Designed to navigate complex dynamic human spaces with sub-centimeter accuracy.',
      statLabel: 'POSITIONING ACCURACY',
      statValue: '< 0.8 cm',
      techSpec: 'Rust Robotics RS • Python ROS2 • PyTorch Vision',
      link: '/projects',
      repoUrl: 'https://github.com/developerY/HoverBike',
      repoName: 'developerY/HoverBike'
    }
  ];

  activeHighlight = signal<InnovationHighlight>(this.innovations[0]);

  selectHighlight(item: InnovationHighlight) {
    this.activeHighlight.set(item);
  }
}
