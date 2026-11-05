import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import {RouterLink} from '@angular/router';

export interface BlueprintItem {
  id: string;
  modRef: string;
  category: 'wearables' | 'edge-ai' | 'spatial-xr' | 'post-quantum' | 'open-source';
  categoryLabel: string;
  title: string;
  description: string;
  versionOrLatency: string;
  subType: 'waveform' | 'metrics' | 'mesh' | 'circuit';
  tags: string[];
  ctaText: string;
  pinned: boolean;
}

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
                <span class="font-label-caps uppercase text-sky-700 font-semibold tracking-widest">REGISTRY // ARTIFACT ARCHIVE v2.5</span>
                <span class="font-code-badge text-slate-500 px-2 py-0.5 rounded bg-slate-100 border border-slate-200 ml-2">ENV: PRODUCTION</span>
              </div>
              <h1 class="font-display-hero text-slate-900 tracking-tight font-bold">Featured Lab Implementations &amp; Blueprints</h1>
              <p class="text-lg text-slate-600 mt-2 max-w-2xl leading-relaxed">
                Audited repositories, active deployments, and architecture reference templates created by <span class="text-sky-700 font-medium">developerY</span> for next-generation computing surfaces.
              </p>
            </div>

            <!-- Telemetry Pill / Lab Stats -->
            <div class="flex flex-row md:flex-col items-center md:items-end gap-3 shrink-0">
              <div class="flex items-center gap-4 bg-white border border-slate-200 px-4 py-3 rounded-xl shadow-sm">
                <div class="flex flex-col text-right">
                  <span class="font-label-caps text-slate-400">ACTIVE BLUEPRINTS</span>
                  <span class="font-headline-sm text-slate-900 font-bold">48 NODES</span>
                </div>
                <div class="w-px h-8 bg-slate-200"></div>
                <div class="flex flex-col text-right">
                  <span class="font-label-caps text-sky-700">SYSTEM INTEGRITY</span>
                  <span class="font-headline-sm text-sky-700 font-bold">99.99%</span>
                </div>
              </div>
              <span class="font-code-badge text-slate-400">ZERO-DAY AUDIT PASSED: 2025-Q1</span>
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
                placeholder="Search blueprints, algorithms, protocols, or frameworks..."
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
                ALL ({{ blueprints.length }})
              </button>

              <button
                type="button"
                (click)="setCategory('wearables')"
                [class]="selectedCategory() === 'wearables'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-sky-600 text-white transition-all whitespace-nowrap shadow-sm shadow-sky-600/20'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-medium tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all whitespace-nowrap'">
                WEARABLES
              </button>

              <button
                type="button"
                (click)="setCategory('edge-ai')"
                [class]="selectedCategory() === 'edge-ai'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-sky-600 text-white transition-all whitespace-nowrap shadow-sm shadow-sky-600/20'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-medium tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all whitespace-nowrap'">
                EDGE AI
              </button>

              <button
                type="button"
                (click)="setCategory('spatial-xr')"
                [class]="selectedCategory() === 'spatial-xr'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-sky-600 text-white transition-all whitespace-nowrap shadow-sm shadow-sky-600/20'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-medium tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all whitespace-nowrap'">
                SPATIAL XR
              </button>

              <button
                type="button"
                (click)="setCategory('post-quantum')"
                [class]="selectedCategory() === 'post-quantum'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-sky-600 text-white transition-all whitespace-nowrap shadow-sm shadow-sky-600/20'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-medium tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all whitespace-nowrap'">
                POST-QUANTUM
              </button>
            </div>
          </div>
        </div>

        <!-- Main Blueprint Catalog Grid (Bento Matrix) -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-6 w-full">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-2.5">
              <span class="font-headline-sm text-slate-900 font-semibold">Audited Systems</span>
              <span class="font-code-badge text-sky-700 font-semibold bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full">
                0{{ filteredBlueprints().length }} RESULTS
              </span>
            </div>
            <div class="hidden sm:flex items-center gap-4 text-slate-500 font-code-badge">
              <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-sky-600"></span> VERIFIED KERNEL</span>
              <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-cyan-600"></span> NIST PQC PENDING</span>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

            @for (bp of filteredBlueprints(); track bp.id) {
              <!-- PROJECT CARD -->
              <article
                [class]="bp.id === 'bp_01' || bp.id === 'bp_04' ? 'lg:col-span-7' : 'lg:col-span-5'"
                class="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 shadow-sm overflow-hidden">
                <div class="absolute -right-16 -top-16 w-56 h-56 bg-sky-100/50 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-200/50 transition-all"></div>

                <div class="relative z-10">
                  <div class="flex items-start justify-between gap-4 mb-4">
                    <div class="flex items-center gap-2.5">
                      <span class="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-sm">
                        <span class="material-symbols-outlined text-[18px]">
                          {{ bp.category === 'wearables' ? 'watch' : bp.category === 'edge-ai' ? 'memory' : bp.category === 'spatial-xr' ? 'view_in_ar' : 'grain' }}
                        </span>
                      </span>
                      <span class="font-code-badge text-sky-700 font-semibold">{{ bp.modRef }}</span>
                      <span class="px-2 py-0.5 rounded-md font-label-caps bg-slate-100 text-slate-700 font-semibold border border-slate-200/60">{{ bp.categoryLabel }}</span>
                    </div>

                    <div class="flex items-center gap-2 font-code-badge text-slate-500">
                      <span>{{ bp.versionOrLatency }}</span>
                      <span class="w-1.5 h-1.5 rounded-full bg-sky-600 animate-ping"></span>
                    </div>
                  </div>

                  <h3 class="font-headline-md text-slate-900 group-hover:text-sky-600 transition-colors tracking-tight mb-2 font-semibold">
                    {{ bp.title }}
                  </h3>

                  <p class="text-slate-600 leading-relaxed mb-6 text-sm">
                    {{ bp.description }}
                  </p>

                  <!-- SUB-TYPE VISUAL DISPLAY -->
                  @if (bp.subType === 'waveform') {
                    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-inner mb-6">
                      <div class="flex items-center justify-between mb-2">
                        <span class="font-code-badge text-slate-500 font-medium">SUBSURFACE PPG &amp; ACCELEROMETER STREAM (60Hz)</span>
                        <span class="font-code-badge text-sky-700 font-semibold">BLE RSSI: -42 dBm [STABLE]</span>
                      </div>
                      <div class="w-full h-14 flex items-end gap-1 overflow-hidden py-1 border-b border-slate-200">
                        <div class="flex-1 bg-slate-200 h-[40%] rounded-t"></div>
                        <div class="flex-1 bg-slate-200 h-[60%] rounded-t"></div>
                        <div class="flex-1 bg-sky-300 h-[80%] rounded-t"></div>
                        <div class="flex-1 bg-sky-600 h-[95%] rounded-t"></div>
                        <div class="flex-1 bg-sky-400 h-[70%] rounded-t"></div>
                        <div class="flex-1 bg-sky-300 h-[45%] rounded-t"></div>
                        <div class="flex-1 bg-slate-200 h-[35%] rounded-t"></div>
                        <div class="flex-1 bg-slate-200 h-[50%] rounded-t"></div>
                        <div class="flex-1 bg-sky-400 h-[85%] rounded-t"></div>
                        <div class="flex-1 bg-sky-600 h-[100%] rounded-t"></div>
                        <div class="flex-1 bg-sky-500 h-[75%] rounded-t"></div>
                        <div class="flex-1 bg-sky-300 h-[40%] rounded-t"></div>
                        <div class="flex-1 bg-slate-200 h-[30%] rounded-t"></div>
                        <div class="flex-1 bg-slate-200 h-[55%] rounded-t"></div>
                        <div class="flex-1 bg-sky-400 h-[90%] rounded-t"></div>
                        <div class="flex-1 bg-sky-600 h-[85%] rounded-t"></div>
                        <div class="flex-1 bg-cyan-600 h-[65%] rounded-t"></div>
                        <div class="flex-1 bg-slate-200 h-[40%] rounded-t"></div>
                      </div>
                      <div class="flex justify-between items-center text-slate-500 font-code-badge text-[11px] mt-2">
                        <span>LATENCY: <strong class="text-slate-800">4.2ms</strong></span>
                        <span>PACKET LOSS: <strong class="text-slate-800">&lt; 0.001%</strong></span>
                        <span>BATTERY IMPACT: <strong class="text-slate-800">0.14%/HR</strong></span>
                      </div>
                    </div>
                  } @else if (bp.subType === 'metrics') {
                    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-inner mb-6">
                      <div class="flex items-center justify-between mb-3">
                        <span class="font-code-badge text-slate-500 font-medium">QUANTIZATION TOPOLOGY</span>
                        <span class="font-code-badge text-sky-700 font-semibold">QUALCOMM HTP / APPLE NE</span>
                      </div>
                      <div class="grid grid-cols-3 gap-2.5 text-center">
                        <div class="p-2.5 rounded-lg bg-white border border-slate-200 flex flex-col shadow-xs">
                          <span class="font-headline-sm text-slate-900 font-bold">940</span>
                          <span class="font-code-badge text-slate-400 text-[10px]">FPS PEAK</span>
                        </div>
                        <div class="p-2.5 rounded-lg bg-white border border-slate-200 flex flex-col shadow-xs">
                          <span class="font-headline-sm text-sky-700 font-bold">14.2 MB</span>
                          <span class="font-code-badge text-slate-400 text-[10px]">WEIGHT FOOTPRINT</span>
                        </div>
                        <div class="p-2.5 rounded-lg bg-white border border-slate-200 flex flex-col shadow-xs">
                          <span class="font-headline-sm text-cyan-700 font-bold">0.68 ms</span>
                          <span class="font-code-badge text-slate-400 text-[10px]">INFERENCE AVG</span>
                        </div>
                      </div>
                      <div class="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between font-code-badge text-[11px] text-slate-500">
                        <span>ZERO MEMCPY POOL</span>
                        <span class="text-sky-700 font-semibold">AVX-512 + NEON VECTORIZED</span>
                      </div>
                    </div>
                  } @else if (bp.subType === 'mesh') {
                    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-inner mb-6 relative overflow-hidden">
                      <div class="flex items-center justify-between mb-2">
                        <span class="font-code-badge text-slate-500 font-medium">STEREO ANCHOR MATRIX // 6DoF</span>
                        <span class="font-code-badge text-sky-700 font-semibold">OCTREE DEPTH: 14</span>
                      </div>
                      <div class="w-full h-24 flex items-center justify-center relative bg-white rounded-lg border border-slate-200">
                        <svg class="w-full h-full text-slate-300" fill="none" viewBox="0 0 300 100">
                          <line stroke="currentColor" stroke-dasharray="3 3" x1="20" x2="280" y1="20" y2="20"></line>
                          <line stroke="currentColor" stroke-dasharray="3 3" x1="20" x2="280" y1="50" y2="50"></line>
                          <line stroke="currentColor" stroke-dasharray="3 3" x1="20" x2="280" y1="80" y2="80"></line>
                          <circle cx="150" cy="50" fill="rgba(2, 132, 199, 0.15)" r="18" stroke="#0284c7" stroke-width="1.5"></circle>
                          <circle cx="150" cy="50" fill="#0284c7" r="4"></circle>
                          <circle cx="100" cy="35" fill="#006194" r="3"></circle>
                          <circle cx="200" cy="65" fill="#006194" r="3"></circle>
                          <circle cx="80" cy="70" fill="#94a3b8" r="2.5"></circle>
                          <circle cx="220" cy="30" fill="#94a3b8" r="2.5"></circle>
                          <path d="M100 35 L150 50 L200 65" stroke="#006194" stroke-width="1.25"></path>
                          <path d="M80 70 L150 50 L220 30" stroke="#94a3b8" stroke-width="1"></path>
                        </svg>
                        <div class="absolute bottom-1 right-2 font-code-badge text-[10px] text-sky-700 font-semibold">
                          COLLISION: DYNAMIC MESH
                        </div>
                      </div>
                      <div class="flex justify-between items-center text-slate-500 font-code-badge text-[11px] mt-2">
                        <span>LATENCY: <strong class="text-slate-800">11.2ms M2P</strong></span>
                        <span>FOV OCCLUSION: <strong class="text-slate-800">REAL-TIME</strong></span>
                      </div>
                    </div>
                  } @else {
                    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-inner mb-6">
                      <div class="flex items-center justify-between mb-3">
                        <span class="font-code-badge text-slate-500 font-medium">34-QUBIT BLOCH PROJECTION &amp; ENTANGLEMENT</span>
                        <span class="font-code-badge text-sky-700 font-semibold">FIDELITY: 99.982%</span>
                      </div>
                      <div class="flex flex-col gap-2 font-code-badge text-xs">
                        <div class="flex items-center gap-3">
                          <span class="text-slate-500 font-medium w-6">|q₀⟩</span>
                          <div class="flex-1 flex items-center bg-white border border-slate-200 px-3 py-1.5 rounded-lg relative">
                            <div class="h-0.5 w-full bg-slate-200 absolute left-0 right-0"></div>
                            <div class="relative z-10 flex items-center gap-3">
                              <span class="px-2 py-0.5 rounded bg-sky-600 text-white font-bold text-[11px] shadow-xs">H</span>
                              <span class="w-2 h-2 rounded-full bg-sky-500"></span>
                              <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-800 text-[11px]">R_z(π/4)</span>
                              <span class="w-3.5 h-3.5 rounded-full bg-sky-700 text-white flex items-center justify-center text-[8px] font-bold">●</span>
                            </div>
                            <span class="relative z-10 ml-auto text-sky-700 font-mono text-[11px] font-semibold">α|0⟩ + β|1⟩</span>
                          </div>
                        </div>

                        <div class="flex items-center gap-3">
                          <span class="text-slate-500 font-medium w-6">|q₁⟩</span>
                          <div class="flex-1 flex items-center bg-white border border-slate-200 px-3 py-1.5 rounded-lg relative">
                            <div class="h-0.5 w-full bg-slate-200 absolute left-0 right-0"></div>
                            <div class="relative z-10 flex items-center gap-3">
                              <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-800 text-[11px]">X</span>
                              <span class="w-3.5 h-3.5 rounded-full bg-sky-700 text-white flex items-center justify-center text-[8px] font-bold">⊕</span>
                              <span class="px-2 py-0.5 rounded bg-sky-100 border border-sky-200 text-sky-900 font-medium text-[11px]">L-512</span>
                            </div>
                            <span class="relative z-10 ml-auto text-slate-400 font-mono text-[11px]">Ψ⁺ = (|00⟩+|11⟩)/√2</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex justify-between items-center text-slate-500 font-code-badge text-[11px] mt-3 pt-2 border-t border-slate-200">
                        <span>WASM SIMD ACCELERATED</span>
                        <span>MEMORY: <strong class="text-slate-800">128 MB</strong></span>
                        <span class="text-sky-700 font-semibold">LATTICE-512 PASS</span>
                      </div>
                    </div>
                  }
                </div>

                <div class="relative z-10 pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                  <div class="flex flex-wrap gap-2">
                    @for (t of bp.tags; track t) {
                      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 font-code-badge text-slate-700">
                        <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                        {{ t }}
                      </span>
                    }
                  </div>

                  <button
                    type="button"
                    (click)="triggerBlueprint(bp)"
                    class="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-sky-50 text-slate-800 hover:text-sky-700 border border-slate-200 hover:border-sky-300 font-medium text-sm transition-all flex items-center gap-1 font-headline">
                    <span>{{ bp.ctaText }}</span>
                    <span class="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </button>
                </div>
              </article>
            }
          </div>
        </section>

        <!-- Interactive Terminal & Developer Console Section -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-8 w-full">
          <div class="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div class="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <span class="font-code-badge text-slate-500 ml-2 font-medium">dev-terminal // developerY&#64;quantum-rig-04:~/lab-registry</span>
              </div>

              <div class="flex flex-wrap items-center gap-2.5 font-code-badge">
                <a href="https://github.com/developerY" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200/70 text-slate-700 transition-all font-medium">
                  <span class="material-symbols-outlined text-[16px] text-amber-500">star</span>
                  <span>4.8k stars</span>
                </a>
                <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                  <span class="material-symbols-outlined text-[16px] text-sky-600">sell</span>
                  <span>release v2.5.2-pqc</span>
                </div>
                <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                  <span class="material-symbols-outlined text-[16px] text-cyan-600">download</span>
                  <span>182.4k installs/mo</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
              <div class="lg:col-span-8 flex flex-col gap-4 font-mono text-sm">
                <div class="flex items-center gap-2 text-slate-600">
                  <span class="text-sky-600 font-bold">❯</span>
                  <span class="text-slate-500"># Quickstart: clone the frontier monorepo with verified submodules</span>
                </div>

                <!-- Command Box with One-Click Copy -->
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

                <!-- Shell Output Stream Simulation -->
                <div class="text-slate-500 text-xs space-y-1.5 pl-2 font-mono">
                  <p class="text-slate-600">&gt; Checking host hardware acceleration... [AVX-512 detected, Apple Metal NE ready]</p>
                  <p>&gt; Validating NIST Round-4 signature on origin tree...</p>
                  <p class="text-sky-600 font-semibold">&gt; Verification successful: SHA256:4f8e21a... OK</p>
                  <p>&gt; Workspace configuration: 4 platforms, 12 SIMD pipelines loaded.</p>
                </div>
              </div>

              <!-- Package Registry Ecosystem Quick Links -->
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

  blueprints: BlueprintItem[] = [
    {
      id: 'bp_01',
      modRef: 'LAB_REF::MOD_092',
      category: 'wearables',
      categoryLabel: 'WEARABLES',
      title: 'Android WearOS & watchOS Companion Sync',
      description: 'Low-energy background sync daemon communicating biosensors between Kotlin Compose Wear OS devices and Apple watchOS Swift targets. Eliminates multi-protocol serialization latency via zero-copy flatbuffers across asymmetric BLE sockets.',
      versionOrLatency: 'v1.8.4',
      subType: 'waveform',
      tags: ['KMP (Kotlin Multiplatform)', 'SwiftUI / Combine', 'Bluetooth LE 5.3'],
      ctaText: 'Inspect Rig',
      pinned: true
    },
    {
      id: 'bp_02',
      modRef: 'LAB_REF::MOD_104',
      category: 'edge-ai',
      categoryLabel: 'EDGE AI',
      title: 'PyTorch & TF Edge Tensor Runtime',
      description: 'Sub-millisecond machine perception using INT8 quantized neural pipelines integrated natively with mobile camera buffers and neural accelerators (NPU).',
      versionOrLatency: '0.8ms INT8',
      subType: 'metrics',
      tags: ['PyTorch Mobile', 'TensorFlow Lite', 'C++ NDK / Metal'],
      ctaText: 'Weights',
      pinned: true
    },
    {
      id: 'bp_03',
      modRef: 'LAB_REF::MOD_211',
      category: 'spatial-xr',
      categoryLabel: 'SPATIAL XR',
      title: 'Android XR & visionOS Spatial Meshing',
      description: 'Stereoscopic interface orchestrating high-fidelity physics objects across Meta Quest and Apple Vision Pro spatial environments. Bridges OpenXR runtime anchors with reality-kit scene graphs in unified real-time spatial coordinate planes.',
      versionOrLatency: '90 FPS SYNC',
      subType: 'mesh',
      tags: ['visionOS RealityKit', 'Meta Quest 3 OpenXR', 'ZoeWare Core'],
      ctaText: 'Spatial SDK',
      pinned: true
    },
    {
      id: 'bp_04',
      modRef: 'LAB_REF::MOD_340',
      category: 'post-quantum',
      categoryLabel: 'POST-QUANTUM',
      title: 'Quantum State Vector Simulator',
      description: 'Open-source browser & native simulator for n-qubit entanglement registers with post-quantum lattice verification. Simulates Grover search and Shor step-transforms up to 34 qubits on SIMD and WebAssembly compute backends.',
      versionOrLatency: 'KYBER / DILITHIUM TESTED',
      subType: 'circuit',
      tags: ['Rust 1.82 Core', 'WebAssembly / WebGPU', 'Lattice-512 Verification'],
      ctaText: 'Run Circuit',
      pinned: true
    }
  ];

  filteredBlueprints = computed(() => {
    const cat = this.selectedCategory();
    const query = (this.searchForm.get('query')?.value || '').toLowerCase().trim();

    return this.blueprints.filter(bp => {
      const matchCat = cat === 'all' || bp.category === cat;
      const matchQuery = !query ||
        bp.title.toLowerCase().includes(query) ||
        bp.description.toLowerCase().includes(query) ||
        bp.tags.some(t => t.toLowerCase().includes(query));
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

  triggerBlueprint(bp: BlueprintItem) {
    alert(`[Y? Lab Z Rig]: Initializing telemetry harness for ${bp.title} (${bp.modRef})`);
  }

  downloadSpecPdf() {
    this.pdfDownloaded.set(true);
    setTimeout(() => this.pdfDownloaded.set(false), 3000);
  }
}
