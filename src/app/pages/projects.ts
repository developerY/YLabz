import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {YLABZ_PROJECTS, YLabZProject} from '../data/ylabz-data';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink],
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
                Production-grade technologies incubated at Y? Lab Z: from <strong class="text-slate-900 font-semibold">AshBike</strong> electric mobility to <strong class="text-slate-900 font-semibold">ZoeWear</strong> intelligent clothing, <strong class="text-slate-900 font-semibold">PhotoDo AI</strong>, and autonomous robotics.
              </p>
            </div>

            <!-- Telemetry Pill / Lab Stats -->
            <div class="flex flex-row md:flex-col items-center md:items-end gap-3 shrink-0">
              <div class="flex items-center gap-4 bg-white border border-slate-200 px-4 py-3 rounded-xl shadow-sm">
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
                placeholder="Search projects (AshBike, ZoeWear, PhotoDo, ZoeRobo, RxDigita, languages)..."
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
                AI APPS (PHOTODO)
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

        <!-- Main Project Catalog Grid -->
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

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            @for (p of filteredProjects(); track p.id) {
              <article class="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 shadow-sm overflow-hidden">
                <div class="absolute -right-16 -top-16 w-56 h-56 bg-sky-100/40 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-200/40 transition-all"></div>

                <div class="relative z-10">
                  <div class="flex items-start justify-between gap-4 mb-4">
                    <div class="flex items-center gap-2.5">
                      <span class="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-sm">
                        <span class="material-symbols-outlined text-[20px]">
                          {{ p.category === 'mobility' ? 'two_wheeler' : p.category === 'apparel' ? 'checkroom' : p.category === 'ai-apps' ? 'add_a_photo' : p.category === 'robotics' ? 'smart_toy' : p.category === 'agency' ? 'campaign' : 'medication' }}
                        </span>
                      </span>
                      <div>
                        <span class="font-code-badge text-sky-700 font-semibold">{{ p.name }}</span>
                        <span class="block text-[11px] text-slate-400 font-mono">{{ p.partnerOrEcosystem }}</span>
                      </div>
                    </div>

                    <span [class]="p.status === 'In Production' 
                      ? 'px-2.5 py-0.5 rounded-md font-label-caps bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold text-[10px]'
                      : 'px-2.5 py-0.5 rounded-md font-label-caps bg-sky-50 text-sky-700 border border-sky-200 font-semibold text-[10px]'">
                      {{ p.status }}
                    </span>
                  </div>

                  <h3 class="font-headline-md text-slate-900 group-hover:text-sky-600 transition-colors tracking-tight mb-1 font-semibold">
                    {{ p.name }}: {{ p.tagline }}
                  </h3>

                  <p class="text-slate-600 leading-relaxed mb-5 text-sm">
                    {{ p.description }}
                  </p>

                  <!-- Project Key Engineering Highlights -->
                  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-inner mb-6">
                    <span class="font-code-badge text-slate-500 font-medium block mb-2">KEY ARCHITECTURAL HIGHLIGHTS</span>
                    <ul class="space-y-1.5 text-xs text-slate-700">
                      @for (hl of p.highlights; track hl) {
                        <li class="flex items-start gap-2">
                          <span class="material-symbols-outlined text-sky-600 text-[16px] mt-0.5 shrink-0">check_circle</span>
                          <span>{{ hl }}</span>
                        </li>
                      }
                    </ul>
                  </div>
                </div>

                <div class="relative z-10 pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                  <div class="flex flex-wrap gap-1.5">
                    @for (t of p.techStack; track t) {
                      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-700">
                        <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                        {{ t }}
                      </span>
                    }
                  </div>

                  <button
                    type="button"
                    (click)="inspectProject(p)"
                    class="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-sky-50 text-slate-800 hover:text-sky-700 border border-slate-200 hover:border-sky-300 font-medium text-xs transition-all flex items-center gap-1 font-headline">
                    <span>Explore Blueprint</span>
                    <span class="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </button>
                </div>
              </article>
            }
          </div>
        </section>

        <!-- Developer Monorepo Quickstart & Package Ecosystem -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-8 w-full">
          <div class="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden">
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

                <div class="flex items-center justify-between p-4 rounded-xl bg-slate-900 text-slate-100 shadow-md">
                  <div class="flex items-center gap-3 overflow-x-auto">
                    <span class="text-sky-400 font-bold select-none">$</span>
                    <code class="text-slate-100 font-mono text-xs sm:text-sm whitespace-nowrap">{{ cloneCommand }}</code>
                  </div>
                  <button
                    type="button"
                    (click)="copyCloneCommand()"
                    class="ml-3 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-all flex items-center gap-1.5 shrink-0 border border-slate-700">
                    <span class="material-symbols-outlined text-[16px]">{{ commandCopied() ? 'done' : 'content_copy' }}</span>
                    <span class="text-xs font-mono font-semibold">{{ commandCopied() ? 'COPIED!' : 'COPY' }}</span>
                  </button>
                </div>

                <div class="text-slate-500 text-xs space-y-1.5 pl-2 font-mono">
                  <p class="text-slate-600">&gt; Target platforms initialized: Android, iOS, watchOS, WearOS, visionOS</p>
                  <p>&gt; Languages linked: Kotlin 2.1, Swift 6, Rust 1.82, Python 3.12</p>
                  <p class="text-sky-600 font-semibold">&gt; Verified frameworks: Jetpack Compose (Material 3), SwiftUI, PyTorch 2.4</p>
                </div>
              </div>

              <!-- Package Registries -->
              <div class="lg:col-span-4 flex flex-col gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-label-caps text-slate-500 font-semibold tracking-wider">PACKAGE REGISTRIES &amp; CDN</span>
                <button
                  type="button"
                  (click)="copyPackage('brew')"
                  class="w-full text-left flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 hover:border-sky-300 hover:shadow-sm transition-all cursor-pointer">
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
                  class="w-full text-left flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 hover:border-sky-300 hover:shadow-sm transition-all cursor-pointer">
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
                  class="w-full text-left flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 hover:border-sky-300 hover:shadow-sm transition-all cursor-pointer">
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

        <!-- Benchmark Specifications Table -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-6 w-full mb-12">
          <div class="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
              <div>
                <span class="font-label-caps text-sky-700 uppercase font-semibold">STANDARDS &amp; HARDWARE TARGETS</span>
                <h2 class="font-headline-lg text-slate-900 mt-1 font-bold">Cross-Surface Benchmark Specifications</h2>
              </div>
              <div class="flex items-center gap-3">
                <button
                  type="button"
                  (click)="downloadSpecPdf()"
                  class="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-medium text-sm transition-all flex items-center gap-2">
                  <span class="material-symbols-outlined text-[18px] text-slate-600">description</span>
                  <span>{{ pdfDownloaded() ? 'Spec Downloaded' : 'Download Spec (PDF)' }}</span>
                </button>
              </div>
            </div>

            <div class="overflow-x-auto mt-6">
              <table class="w-full text-left text-sm">
                <thead>
                  <tr class="font-label-caps text-slate-400 uppercase bg-slate-50 border-y border-slate-200">
                    <th class="py-3 px-4 font-semibold">TARGET ARCHITECTURE</th>
                    <th class="py-3 px-4 font-semibold">MINIMUM KERNEL / OS</th>
                    <th class="py-3 px-4 font-semibold">SYNC CYCLE</th>
                    <th class="py-3 px-4 font-semibold">ENCRYPTION LEVEL</th>
                    <th class="py-3 px-4 font-semibold">DEPLOYMENT STATUS</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 text-slate-700">
                  <tr class="hover:bg-slate-50/70 transition-colors">
                    <td class="py-4 px-4 flex items-center gap-2.5 font-medium text-slate-900">
                      <span class="material-symbols-outlined text-sky-600 text-[18px]">watch</span>
                      <span>WearOS 4.0+ (ARM Cortex-A55)</span>
                    </td>
                    <td class="py-4 px-4 font-mono text-xs text-slate-600">Android API 33 / Kotlin 2.0</td>
                    <td class="py-4 px-4 font-mono text-xs text-slate-600">4.2 ms BLE DMA</td>
                    <td class="py-4 px-4 font-mono text-xs text-sky-700 font-semibold">ChaCha20-Poly1305</td>
                    <td class="py-4 px-4">
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-700 font-label-caps text-[10px] font-semibold">
                        <span class="w-1.5 h-1.5 rounded-full bg-sky-600"></span> PRODUCTION
                      </span>
                    </td>
                  </tr>

                  <tr class="hover:bg-slate-50/70 transition-colors">
                    <td class="py-4 px-4 flex items-center gap-2.5 font-medium text-slate-900">
                      <span class="material-symbols-outlined text-cyan-600 text-[18px]">memory</span>
                      <span>Qualcomm Hexagon DSP &amp; Apple NE</span>
                    </td>
                    <td class="py-4 px-4 font-mono text-xs text-slate-600">C++20 NDK r26 / Metal 3</td>
                    <td class="py-4 px-4 font-mono text-xs text-slate-600">0.68 ms INT8 Pipeline</td>
                    <td class="py-4 px-4 font-mono text-xs text-sky-700 font-semibold">Hardware TEE Enclave</td>
                    <td class="py-4 px-4">
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-700 font-label-caps text-[10px] font-semibold">
                        <span class="w-1.5 h-1.5 rounded-full bg-sky-600"></span> AUDITED
                      </span>
                    </td>
                  </tr>

                  <tr class="hover:bg-slate-50/70 transition-colors">
                    <td class="py-4 px-4 flex items-center gap-2.5 font-medium text-slate-900">
                      <span class="material-symbols-outlined text-sky-600 text-[18px]">view_in_ar</span>
                      <span>Apple Vision Pro / Meta Quest 3</span>
                    </td>
                    <td class="py-4 px-4 font-mono text-xs text-slate-600">visionOS 2.0 / OpenXR 1.1</td>
                    <td class="py-4 px-4 font-mono text-xs text-slate-600">90 FPS Stereoscopic</td>
                    <td class="py-4 px-4 font-mono text-xs text-sky-700 font-semibold">Zero-Trust Local Bus</td>
                    <td class="py-4 px-4">
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 border border-teal-200 text-teal-700 font-label-caps text-[10px] font-semibold">
                        <span class="w-1.5 h-1.5 rounded-full bg-teal-600"></span> ACTIVE LAB
                      </span>
                    </td>
                  </tr>

                  <tr class="hover:bg-slate-50/70 transition-colors">
                    <td class="py-4 px-4 flex items-center gap-2.5 font-medium text-slate-900">
                      <span class="material-symbols-outlined text-sky-600 text-[18px]">grain</span>
                      <span>Rust SIMD / WASM Multi-thread</span>
                    </td>
                    <td class="py-4 px-4 font-mono text-xs text-slate-600">LLVM 18 / Wasm-bindgen</td>
                    <td class="py-4 px-4 font-mono text-xs text-slate-600">Synchronous Gate Pulse</td>
                    <td class="py-4 px-4 font-mono text-xs text-sky-700 font-semibold">Kyber-1024 / Dilithium-5</td>
                    <td class="py-4 px-4">
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-700 font-label-caps text-[10px] font-semibold">
                        <span class="w-1.5 h-1.5 rounded-full bg-sky-600"></span> NIST VERIFIED
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  `
})
export class ProjectsComponent {
  searchForm = new FormGroup({
    query: new FormControl('')
  });

  selectedCategory = signal<string>('all');
  commandCopied = signal<boolean>(false);
  pdfDownloaded = signal<boolean>(false);
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

  inspectProject(p: YLabZProject) {
    alert(`[Y? Lab Z Project Registry]: Loading technical blueprint for ${p.name} (${p.categoryLabel})\nEcosystem: ${p.partnerOrEcosystem}\nStatus: ${p.status}`);
  }

  downloadSpecPdf() {
    this.pdfDownloaded.set(true);
    setTimeout(() => this.pdfDownloaded.set(false), 3000);
  }
}
