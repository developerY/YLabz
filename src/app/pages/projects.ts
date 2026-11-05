import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import {YLABZ_PROJECTS, YLabZProject} from '../data/ylabz-data';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <div class="flex flex-col w-full">
      <!-- Atmospheric Ambient Backdrop Element -->
      <div class="relative w-full overflow-hidden">
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-sky-200/40 via-cyan-100/20 to-transparent blur-3xl pointer-events-none rounded-full"></div>

        <!-- Section Header Block -->
        <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-6">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80">
            <div class="flex flex-col max-w-3xl">
              <div class="flex items-center gap-2 mb-2">
                <span class="inline-block w-2 h-2 rounded-full bg-sky-600 animate-pulse"></span>
                <span class="font-label-caps uppercase text-sky-700 font-semibold tracking-widest">Y? LAB Z // PROJECTS &amp; BLUEPRINTS</span>
                <span class="font-code-badge text-slate-500 px-2 py-0.5 rounded bg-slate-100 border border-slate-200 ml-2">ZOEWAVE R&amp;D ECOSYSTEM</span>
              </div>
              <h1 class="font-display-hero text-slate-900 tracking-tight font-bold">Featured Projects &amp; Implementations</h1>
              <p class="text-lg text-slate-600 mt-2 max-w-2xl leading-relaxed">
                Production-grade technologies incubated at Y? Lab Z: from <strong class="text-slate-900 font-semibold">AshBike</strong> electric mobility to <strong class="text-slate-900 font-semibold">ZoeWear</strong> intelligent clothing, <strong class="text-slate-900 font-semibold">Modular MAX</strong> CUDA-replacement engines, and <strong class="text-slate-900 font-semibold">PhotoDo AI</strong>.
              </p>
            </div>

            <!-- Telemetry Pill / Lab Stats -->
            <div class="flex flex-row md:flex-col items-center md:items-end gap-3 shrink-0">
              <div class="flex items-center gap-4 bg-white border border-slate-200 px-4 py-3 rounded-2xl shadow-sm">
                <div class="flex flex-col text-right">
                  <span class="font-label-caps text-slate-400">INCUBATED INITIATIVES</span>
                  <span class="font-headline-sm text-slate-900 font-bold">{{ projects.length }} ACTIVE</span>
                </div>
                <div class="w-px h-8 bg-slate-200"></div>
                <div class="flex flex-col text-right">
                  <span class="font-label-caps text-sky-700">R&amp;D HQ</span>
                  <span class="font-headline-sm text-sky-700 font-bold">PALO ALTO</span>
                </div>
              </div>
              <span class="font-code-badge text-slate-400">DESIGN: G.N.SEVEN • R&amp;D: YLABZ</span>
            </div>
          </div>

          <!-- Search & Category Filter Section -->
          <div class="mt-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-2.5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <!-- Interactive Search Bar -->
            <div class="relative flex-1" [formGroup]="searchForm">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <span class="material-symbols-outlined text-slate-400 text-[18px]">search</span>
              </div>
              <input
                type="text"
                formControlName="query"
                placeholder="Search projects (AshBike, ZoeWear, PhotoDo, Modular MAX, Mojo, ZoeRobo)..."
                class="w-full pl-10 pr-20 py-2.5 bg-slate-50 text-slate-900 text-sm placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/40 border border-slate-200 transition-all font-mono" />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center gap-1 pointer-events-none">
                <kbd class="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-400 font-mono text-[10px]">CTRL</kbd>
                <kbd class="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-400 font-mono text-[10px]">K</kbd>
              </div>
            </div>

            <!-- Filter Chips Matrix -->
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <button
                type="button"
                (click)="setCategory('all')"
                [class]="selectedCategory() === 'all'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-sky-600 text-white transition-all whitespace-nowrap shadow-sm shadow-sky-600/20'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-medium tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all whitespace-nowrap'">
                ALL ({{ projects.length }})
              </button>

              <button
                type="button"
                (click)="setCategory('mobility')"
                [class]="selectedCategory() === 'mobility'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-sky-600 text-white transition-all whitespace-nowrap shadow-sm shadow-sky-600/20'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-medium tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all whitespace-nowrap'">
                MOBILITY (ASHBIKE)
              </button>

              <button
                type="button"
                (click)="setCategory('apparel')"
                [class]="selectedCategory() === 'apparel'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-sky-600 text-white transition-all whitespace-nowrap shadow-sm shadow-sky-600/20'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-medium tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all whitespace-nowrap'">
                BIO-WEARABLES (ZOEWEAR)
              </button>

              <button
                type="button"
                (click)="setCategory('ai-apps')"
                [class]="selectedCategory() === 'ai-apps'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-sky-600 text-white transition-all whitespace-nowrap shadow-sm shadow-sky-600/20'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-medium tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all whitespace-nowrap'">
                AI &amp; MODULAR (MAX, PHOTODO)
              </button>

              <button
                type="button"
                (click)="setCategory('robotics')"
                [class]="selectedCategory() === 'robotics'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-sky-600 text-white transition-all whitespace-nowrap shadow-sm shadow-sky-600/20'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-medium tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all whitespace-nowrap'">
                ROBOTICS (ZOEROBO)
              </button>

              <button
                type="button"
                (click)="setCategory('health')"
                [class]="selectedCategory() === 'health'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-sky-600 text-white transition-all whitespace-nowrap shadow-sm shadow-sky-600/20'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-medium tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all whitespace-nowrap'">
                HEALTHCARE AI
              </button>
            </div>
          </div>
        </div>

        <!-- Main Project Catalog Grid with 16:9 Visual Cards -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-6 w-full">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-2.5">
              <span class="font-headline-sm text-slate-900 font-semibold">Active Implementations</span>
              <span class="font-code-badge text-sky-700 font-semibold bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full">
                {{ filteredProjects().length }} MATCHED INITIATIVES
              </span>
            </div>
            <div class="hidden sm:flex items-center gap-4 text-slate-500 font-code-badge">
              <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> IN PRODUCTION</span>
              <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span> ACTIVE R&amp;D</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            @for (p of filteredProjects(); track p.id) {
              <article
                class="group relative flex flex-col justify-between rounded-3xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 shadow-sm overflow-hidden">
                
                <!-- 16:9 Cinematic Photographic Header (Soft Coral Pastel Substrate) -->
                <div class="relative w-full aspect-[16/9] overflow-hidden bg-[#fff0eb]">
                  <img
                    [src]="p.imageUrl"
                    [alt]="p.name"
                    referrerpolicy="no-referrer"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#ffdcd2]/90 via-[#ffebe6]/30 to-transparent"></div>

                  <!-- Badges overlay -->
                  <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span class="px-2.5 py-1 rounded-lg bg-[#fff2ee]/90 backdrop-blur-md border border-[#fed7cc] text-[#9a3412] font-mono text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                      <span class="material-symbols-outlined text-[16px] text-[#ea580c]">
                        {{ p.category === 'mobility' ? 'two_wheeler' : p.category === 'apparel' ? 'checkroom' : p.category === 'ai-apps' ? 'memory' : p.category === 'robotics' ? 'smart_toy' : p.category === 'agency' ? 'campaign' : 'medication' }}
                      </span>
                      {{ p.categoryLabel }}
                    </span>

                    <span [class]="p.status === 'In Production' 
                      ? 'px-2.5 py-1 rounded-lg font-mono bg-emerald-100/90 text-emerald-800 border border-emerald-300 backdrop-blur-md font-semibold text-xs shadow-sm'
                      : 'px-2.5 py-1 rounded-lg font-mono bg-[#ffedea]/90 text-[#c2410c] border border-[#fecdd3] backdrop-blur-md font-semibold text-xs shadow-sm'">
                      {{ p.status }}
                    </span>
                  </div>

                  <!-- Bottom Title Banner on Image with Soft Coral Contrast -->
                  <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between text-slate-900">
                    <div>
                      <span class="block text-xs font-mono text-[#c2410c] font-semibold">{{ p.partnerOrEcosystem }}</span>
                      <h3 class="text-2xl font-bold tracking-tight text-slate-900 font-display drop-shadow-sm">
                        {{ p.name }}
                      </h3>
                    </div>
                    @if (p.badge) {
                      <span class="px-2.5 py-0.5 rounded bg-[#fff4f1]/90 backdrop-blur-md text-[#9a3412] font-mono text-[11px] font-semibold border border-[#fed7cc] shadow-sm">
                        {{ p.badge }}
                      </span>
                    }
                  </div>
                </div>

                <!-- Card Body -->
                <div class="p-6 flex flex-col justify-between flex-1 gap-5">
                  <div>
                    <p class="text-sky-700 font-medium text-sm mb-2">
                      {{ p.tagline }}
                    </p>
                    <p class="text-slate-600 text-sm leading-relaxed">
                      {{ p.description }}
                    </p>

                    <!-- Key Engineering Highlights -->
                    <div class="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <span class="font-code-badge text-slate-500 font-semibold block mb-2 uppercase text-[10px]">CORE ARCHITECTURAL HIGHLIGHTS</span>
                      <ul class="space-y-1.5 text-xs text-slate-700">
                        @for (hl of p.highlights.slice(0, 3); track hl) {
                          <li class="flex items-start gap-2">
                            <span class="material-symbols-outlined text-sky-600 text-[16px] mt-0.5 shrink-0">check_circle</span>
                            <span>{{ hl }}</span>
                          </li>
                        }
                      </ul>
                    </div>
                  </div>

                  <!-- Tech Stack & Action Strip -->
                  <div class="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div class="flex flex-wrap gap-1.5">
                      @for (t of p.techStack; track t) {
                        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 font-mono text-xs text-slate-700">
                          <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                          {{ t }}
                        </span>
                      }
                    </div>

                    <button
                      type="button"
                      (click)="openProject(p); $event.stopPropagation()"
                      class="px-4 py-2 rounded-xl bg-slate-100 group-hover:bg-sky-600 group-hover:text-white text-slate-800 border border-slate-200 group-hover:border-sky-600 font-medium text-xs transition-all flex items-center gap-1.5">
                      <span>Inspect Blueprint</span>
                      <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </article>
            }
          </div>
        </section>

        <!-- Developer Monorepo Quickstart & Package Ecosystem -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-8 w-full">
          <div class="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div class="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <span class="font-code-badge text-slate-500 ml-2 font-medium">dev-terminal // developerY&#64;palo-alto:~/ylabz-monorepo</span>
              </div>

              <div class="flex flex-wrap items-center gap-2.5 font-code-badge">
                <a href="https://github.com/developerY" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200/70 text-slate-700 transition-all font-medium">
                  <span class="material-symbols-outlined text-[16px] text-amber-500">star</span>
                  <span>github.com/developerY</span>
                </a>
                <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                  <span class="material-symbols-outlined text-[16px] text-sky-600">location_on</span>
                  <span>Palo Alto, CA</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
              <div class="lg:col-span-8 flex flex-col gap-4 font-mono text-sm">
                <div class="flex items-center gap-2 text-slate-600">
                  <span class="text-sky-600 font-bold">❯</span>
                  <span class="text-slate-500"># Clone Y? Lab Z cross-platform template with submodules</span>
                </div>

                <div class="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#fff5f2] via-[#ffebe6] to-[#fedcd3] text-slate-900 border border-[#fed7cc] shadow-sm">
                  <div class="flex items-center gap-3 overflow-x-auto">
                    <span class="text-[#ea580c] font-bold select-none">$</span>
                    <code class="text-slate-900 font-mono text-xs sm:text-sm whitespace-nowrap font-medium">{{ cloneCommand }}</code>
                  </div>
                  <button
                    type="button"
                    (click)="copyCloneCommand()"
                    class="ml-3 px-3 py-1.5 rounded-lg bg-white hover:bg-[#fff0eb] text-[#9a3412] transition-all flex items-center gap-1.5 shrink-0 border border-[#fed7cc] shadow-sm">
                    <span class="material-symbols-outlined text-[16px]">{{ commandCopied() ? 'done' : 'content_copy' }}</span>
                    <span class="text-xs font-mono font-semibold">{{ commandCopied() ? 'COPIED!' : 'COPY' }}</span>
                  </button>
                </div>

                <div class="text-slate-500 text-xs space-y-1.5 pl-2 font-mono">
                  <p class="text-slate-600">&gt; Target platforms initialized: Android, iOS, watchOS, WearOS, visionOS</p>
                  <p>&gt; Languages linked: Kotlin 2.1, Swift 6, Rust 1.82, Mojo, MAX Engine</p>
                  <p class="text-sky-600 font-semibold">&gt; Verified frameworks: Jetpack Compose (Material 3), SwiftUI, PyTorch 2.4</p>
                </div>
              </div>

              <!-- Package Registries -->
              <div class="lg:col-span-4 flex flex-col gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="font-label-caps text-slate-500 font-semibold tracking-wider">PACKAGE REGISTRIES &amp; CDN</span>
                <button
                  type="button"
                  (click)="copyPackage('brew')"
                  class="w-full text-left flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-sm transition-all cursor-pointer">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-sky-600 text-[20px]">terminal</span>
                    <div class="flex flex-col">
                      <span class="font-mono text-xs text-slate-900 font-semibold">brew install developerY/tap/core</span>
                      <span class="text-[10px] text-slate-400">Homebrew Formula</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                </button>

                <button
                  type="button"
                  (click)="copyPackage('cargo')"
                  class="w-full text-left flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-sm transition-all cursor-pointer">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-cyan-600 text-[20px]">inventory_2</span>
                    <div class="flex flex-col">
                      <span class="font-mono text-xs text-slate-900 font-semibold">cargo install quantum-sim-core</span>
                      <span class="text-[10px] text-slate-400">Crates.io</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                </button>

                <button
                  type="button"
                  (click)="copyPackage('pip')"
                  class="w-full text-left flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-sm transition-all cursor-pointer">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-teal-600 text-[20px]">deployed_code</span>
                    <div class="flex flex-col">
                      <span class="font-mono text-xs text-slate-900 font-semibold">pip install y-edge-tensor</span>
                      <span class="text-[10px] text-slate-400">PyPI</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- INTERACTIVE PROJECT INSPECTION MODAL / DRAWER (SOFT CORAL PASTEL PALETTE) -->
      @if (activeProject()) {
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-rose-950/25 backdrop-blur-md">
          <div class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-[#fed7cc] shadow-2xl flex flex-col">
            
            <!-- Modal Header Image -->
            <div class="relative w-full aspect-[21/9] sm:aspect-[16/7] overflow-hidden bg-[#fff0eb]">
              <img
                [src]="activeProject()!.imageUrl"
                [alt]="activeProject()!.name"
                referrerpolicy="no-referrer"
                class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#ffdcd2]/95 via-[#ffebe6]/40 to-transparent"></div>

              <!-- Close button -->
              <button
                type="button"
                (click)="closeProject()"
                class="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#fff0eb]/90 hover:bg-white text-slate-800 flex items-center justify-center backdrop-blur-md border border-[#fed7cc] transition-all cursor-pointer shadow-md">
                <span class="material-symbols-outlined text-[20px]">close</span>
              </button>

              <div class="absolute bottom-4 left-6 right-6 flex items-end justify-between text-slate-900">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="px-2.5 py-0.5 rounded bg-[#ea580c] text-white font-mono text-xs font-semibold">
                      {{ activeProject()!.categoryLabel }}
                    </span>
                    <span class="font-mono text-xs text-[#c2410c] font-semibold">
                      {{ activeProject()!.partnerOrEcosystem }}
                    </span>
                  </div>
                  <h2 class="text-3xl sm:text-4xl font-bold font-display text-slate-900 drop-shadow-sm">
                    {{ activeProject()!.name }}
                  </h2>
                </div>

                <span class="px-3 py-1 rounded-xl bg-white/90 backdrop-blur-md font-mono text-xs border border-[#fed7cc] text-[#9a3412] font-bold shadow-sm">
                  {{ activeProject()!.status }}
                </span>
              </div>
            </div>

            <!-- Modal Content -->
            <div class="p-6 sm:p-8 flex flex-col gap-6">
              <div>
                <h4 class="text-lg font-semibold text-[#c2410c] mb-2">{{ activeProject()!.tagline }}</h4>
                <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {{ activeProject()!.description }}
                </p>
              </div>

              <!-- Key Engineering Highlights -->
              <div class="p-5 rounded-2xl bg-[#fff7f5] border border-[#fed7cc]">
                <span class="font-label-caps text-[#c2410c] font-bold uppercase tracking-wider block mb-3">KEY ARCHITECTURAL HIGHLIGHTS</span>
                <ul class="space-y-2 text-sm text-slate-700">
                  @for (hl of activeProject()!.highlights; track hl) {
                    <li class="flex items-start gap-2.5">
                      <span class="material-symbols-outlined text-[#ea580c] text-[18px] mt-0.5 shrink-0">verified</span>
                      <span>{{ hl }}</span>
                    </li>
                  }
                </ul>
              </div>

              <!-- Live Interactive Telemetry Simulator for Project (Soft Coral Pastel Palette) -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-[#fff4f1] via-[#ffebe5] to-[#feddd4] text-slate-900 border border-[#fed7cc] flex flex-col gap-3 shadow-sm">
                <div class="flex items-center justify-between text-xs font-mono text-[#9a3412] border-b border-[#fed7cc] pb-2 font-semibold">
                  <span class="flex items-center gap-2 text-[#c2410c]">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    SIMULATED LIVE TELEMETRY STREAM
                  </span>
                  <span>NODE: PALO ALTO CLUSTER</span>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center pt-1">
                  <div class="p-3 rounded-xl bg-white border border-[#fed7cc] shadow-xs">
                    <span class="text-[10px] text-slate-500 block uppercase">PING LATENCY</span>
                    <span class="text-lg font-bold text-[#ea580c]">1.8 ms</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white border border-[#fed7cc] shadow-xs">
                    <span class="text-[10px] text-slate-500 block uppercase">KERNEL INTEGRITY</span>
                    <span class="text-lg font-bold text-emerald-600">100% OK</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white border border-[#fed7cc] shadow-xs">
                    <span class="text-[10px] text-slate-500 block uppercase">BUFFER DRAIN</span>
                    <span class="text-lg font-bold text-amber-600">0.02%</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white border border-[#fed7cc] shadow-xs">
                    <span class="text-[10px] text-slate-500 block uppercase">PARALLEL THREADS</span>
                    <span class="text-lg font-bold text-indigo-600">32 CORES</span>
                  </div>
                </div>
              </div>

              <!-- Tech Stack Badges -->
              <div>
                <span class="font-label-caps text-slate-400 block mb-2 uppercase text-xs font-semibold">DEPLOYED TECH STACK</span>
                <div class="flex flex-wrap gap-2">
                  @for (tech of activeProject()!.techStack; track tech) {
                    <span class="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-medium">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>

              <!-- Action Footer -->
              <div class="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="https://github.com/developerY"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-semibold flex items-center gap-2 transition-colors">
                  <span class="material-symbols-outlined text-[16px]">code</span>
                  <span>Inspect Repo on GitHub</span>
                </a>

                <button
                  type="button"
                  (click)="closeProject()"
                  class="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-medium text-sm transition-all shadow-md">
                  Close Blueprint
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `
})
export class ProjectsComponent {
  searchForm = new FormGroup({
    query: new FormControl('')
  });

  selectedCategory = signal<string>('all');
  commandCopied = signal<boolean>(false);
  activeProject = signal<YLabZProject | null>(null);
  cloneCommand = 'git clone --recurse-submodules https://github.com/developerY/core.git';

  projects: YLabZProject[] = YLABZ_PROJECTS;

  filteredProjects = computed(() => {
    const cat = this.selectedCategory();
    const query = (this.searchForm.get('query')?.value || '').toLowerCase().trim();

    return this.projects.filter(p => {
      const matchCat = cat === 'all' || p.category === cat;
      const matchQuery = !query ||
        p.name.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.techStack.some(t => t.toLowerCase().includes(query));
      return matchCat && matchQuery;
    });
  });

  setCategory(cat: string) {
    this.selectedCategory.set(cat);
  }

  copyCloneCommand() {
    navigator.clipboard?.writeText(this.cloneCommand).then(() => {
      this.commandCopied.set(true);
      setTimeout(() => this.commandCopied.set(false), 2200);
    });
  }

  copyPackage(pkg: string) {
    const text = pkg === 'brew' 
      ? 'brew install developerY/tap/core' 
      : pkg === 'cargo' 
        ? 'cargo install quantum-sim-core' 
        : 'pip install y-edge-tensor';
    navigator.clipboard?.writeText(text);
  }

  openProject(p: YLabZProject) {
    this.activeProject.set(p);
  }

  closeProject() {
    this.activeProject.set(null);
  }
}
