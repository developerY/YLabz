import {ChangeDetectionStrategy, Component, signal, OnDestroy, PLATFORM_ID, inject} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import {YLABZ_ARTICLES, YLABZ_COMPANY_INFO, YLabZArticle} from '../data/ylabz-data';

@Component({
  selector: 'app-research',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <div class="flex flex-col w-full text-slate-900">
      <!-- Atmospheric Top Glow Canvas -->
      <div class="relative w-full overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white">
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-sky-400/10 via-indigo-400/5 to-transparent blur-3xl pointer-events-none rounded-full"></div>
        <div class="absolute top-20 right-10 w-96 h-96 bg-purple-400/10 blur-3xl pointer-events-none rounded-full"></div>

        <!-- Header Section -->
        <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-12 relative z-10">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-sky-50 text-sky-700 border border-sky-200 font-mono text-xs tracking-widest uppercase font-semibold shadow-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping"></span>
                YLABZ ARTICLES &amp; RESEARCH DISPATCHES
              </span>
              <span class="font-mono text-xs text-slate-500 font-medium">MEDIUM // &#64;ZOEWAVE // YLABZ</span>
            </div>

            <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div class="max-w-3xl">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                  Research, Philosophy &amp;
                  <span class="bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Articles
                  </span>
                </h1>
                <p class="text-lg text-slate-600 mt-2 leading-relaxed">
                  Technical publications, architectural manuals, and empirical benchmarks from Y? Lab Z: covering <strong class="text-sky-700 font-semibold">“Android &amp; iOS Dev Together”</strong>, Modern Android Development (MAD), edge neural quantization, and Lewis Thomas epistemology.
                </p>
              </div>

              <div class="flex items-center gap-3 shrink-0">
                <div class="flex flex-col items-end font-mono">
                  <span class="text-xs text-sky-700 font-bold">PALO ALTO R&amp;D HUB</span>
                  <span class="text-[11px] text-slate-500 uppercase font-semibold">PO BOX 51402, CA</span>
                </div>
                <div class="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 shadow-sm flex items-center justify-center text-sky-700">
                  <span class="material-symbols-outlined text-[24px]">terminal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION 1: THE LEWIS THOMAS THESIS & INTERACTIVE OSCILLOSCOPE -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Primary Thesis Narrative Block -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            <div class="bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
              <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-500 via-indigo-500 to-amber-500"></div>

              <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-sky-600 text-[20px]">auto_stories</span>
                  <span class="font-mono text-xs text-sky-700 font-bold tracking-widest uppercase">EPISTEMOLOGICAL FOUNDATION</span>
                </div>
                <span class="font-mono text-xs text-slate-500 font-semibold">ESSAY_ID::0xTHOMAS</span>
              </div>

              <!-- The Lewis Thomas Quote Callout -->
              <blockquote class="bg-slate-50 border border-sky-200 rounded-xl p-6 lg:p-8 mb-6 relative">
                <div class="text-sky-300 absolute top-2 left-3 font-display-hero text-6xl leading-none select-none opacity-40">“</div>
                <p class="text-slate-900 font-medium italic leading-relaxed pl-6 relative z-10 text-base md:text-lg">
                  The invention of a mechanism for the systematic publication of fragments of scientific work may well have been the key event in the history of modern science.
                </p>
                <div class="mt-4 pl-6 flex items-center justify-between flex-wrap gap-2">
                  <cite class="not-italic font-mono text-xs text-sky-700 font-bold tracking-wider">— Dr. Lewis Thomas (1913–1993)</cite>
                  <span class="text-xs text-slate-500 uppercase font-mono font-semibold">The Lives of a Cell (1974)</span>
                </div>
              </blockquote>

              <!-- Analytical Essay -->
              <div class="flex flex-col gap-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  In seventeenth-century natural philosophy, scientific discovery was often jealously guarded in alchemical ciphers or posthumously revealed in monolithic treatises. The revolutionary catalyst that accelerated European science was an institutional substrate: the philosophical journal and the rapid distribution of verified, reproducible <em class="text-sky-800 font-medium not-italic bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded">fragments</em>.
                </p>
                <p>
                  At <strong class="text-slate-900 font-bold">Y? Lab Z</strong>, we assert that the modern lineage of Thomas's fragment mechanism is found in the open git commit, the verified reproducible repository, the self-contained container image, and the public architectural guide.
                </p>
                <p>
                  When an Android Jetpack Compose or Swift 6 concurrency pattern is published as an open blueprint, it is immediately absorbed by thousands of concurrent developers worldwide. The open repository is our peer review; deterministic compilation is our empirical verification.
                </p>
              </div>

              <div class="mt-8 pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 text-center font-mono">
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col items-center justify-center">
                  <span class="text-2xl font-bold text-sky-700 tracking-tight">100%</span>
                  <span class="text-[11px] text-slate-500 uppercase font-semibold mt-1">Open Artifacts</span>
                </div>
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col items-center justify-center">
                  <span class="text-2xl font-bold text-emerald-700 tracking-tight">31+</span>
                  <span class="text-[11px] text-slate-500 uppercase font-semibold mt-1">Android Stories</span>
                </div>
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col items-center justify-center">
                  <span class="text-2xl font-bold text-purple-700 tracking-tight">22+</span>
                  <span class="text-[11px] text-slate-500 uppercase font-semibold mt-1">iOS Stories</span>
                </div>
              </div>
            </div>

            <!-- Philosophical Fragment Diagram -->
            <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[18px]">schema</span>
                  <span class="font-mono text-xs text-slate-900 uppercase tracking-wider font-bold">FRAGMENTATION RUNTIME PIPELINE</span>
                </div>
                <span class="font-mono text-xs text-slate-500 font-semibold">STATE: CONTINUOUS</span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col gap-2">
                  <div class="flex items-center justify-between">
                    <span class="font-mono text-xs text-sky-700 font-bold">STAGE 01</span>
                    <span class="material-symbols-outlined text-slate-400 text-[16px]">psychology_alt</span>
                  </div>
                  <span class="text-slate-900 text-sm font-bold">Inquiry ‘?’</span>
                  <p class="text-xs text-slate-600 leading-snug">Empirical question framed around limits of current hardware/substrate.</p>
                </div>

                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col gap-2">
                  <div class="flex items-center justify-between">
                    <span class="font-mono text-xs text-purple-700 font-bold">STAGE 02</span>
                    <span class="material-symbols-outlined text-slate-400 text-[16px]">code</span>
                  </div>
                  <span class="text-slate-900 text-sm font-bold">Fragment Code</span>
                  <p class="text-xs text-slate-600 leading-snug">Deconstructed single-purpose kernel published directly to Git upstream.</p>
                </div>

                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col gap-2">
                  <div class="flex items-center justify-between">
                    <span class="font-mono text-xs text-emerald-700 font-bold">STAGE 03</span>
                    <span class="material-symbols-outlined text-slate-400 text-[16px]">analytics</span>
                  </div>
                  <span class="text-slate-900 text-sm font-bold">Peer Telemetry</span>
                  <p class="text-xs text-slate-600 leading-snug">Global benchmark cluster records latency, power draw, and precision.</p>
                </div>

                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col gap-2">
                  <div class="flex items-center justify-between">
                    <span class="font-mono text-xs text-amber-700 font-bold">STAGE 04</span>
                    <span class="material-symbols-outlined text-slate-400 text-[16px]">check_circle</span>
                  </div>
                  <span class="text-slate-900 text-sm font-bold">Exhaustion ‘Z’</span>
                  <p class="text-xs text-slate-600 leading-snug">Formal proof settled; archived in persistent distributed ledger.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Oscilloscope / Precision Telemetry Monitor Widget -->
          <div class="lg:col-span-5 flex flex-col gap-6">
            <div class="bg-white border border-slate-200 rounded-2xl p-6 lg:p-7 shadow-sm relative overflow-hidden">
              <div class="flex items-center justify-between pb-4 border-b border-slate-200">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping"></span>
                  <span class="font-mono text-xs text-slate-900 uppercase tracking-wider font-bold">LIVE TELEMETRY MONITOR</span>
                </div>

                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-xs text-slate-700 font-semibold">FREQ: {{ isHighFreq() ? '285.6 MHz' : '142.8 MHz' }}</span>
                  <button
                    type="button"
                    (click)="toggleFrequency()"
                    class="p-1.5 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-sky-700 transition-colors"
                    title="Toggle Sampling Frequency">
                    <span class="material-symbols-outlined text-[16px]">sync</span>
                  </button>
                </div>
              </div>

              <!-- Oscilloscope Visual Display Container (Precision Laboratory Glass Screen with High-Tech Bezel) -->
              <div class="relative w-full h-56 bg-slate-950 border border-slate-800 rounded-xl p-4 overflow-hidden flex flex-col justify-between mt-4 shadow-inner">
                <div class="absolute inset-0 bg-[radial-gradient(circle,rgba(56,189,248,0.15)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                  <div class="w-full h-[1px] bg-sky-500"></div>
                </div>
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                  <div class="h-full w-[1px] bg-sky-500"></div>
                </div>

                <!-- Header HUD -->
                <div class="relative z-10 flex items-center justify-between text-sky-400 font-mono text-[11px] font-semibold">
                  <span class="text-sky-300">CHAN A: FRAGMENT_FLUX</span>
                  <span class="text-slate-400 font-mono">AMP: {{ amplitudeValue() }} Vpp</span>
                </div>

                <!-- Waveform SVG -->
                <div class="relative z-10 w-full h-32 flex items-center">
                  <svg class="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 100">
                    <defs>
                      <linearGradient id="researchWaveGrad" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9"></stop>
                        <stop offset="50%" stop-color="#a855f7" stop-opacity="1"></stop>
                        <stop offset="100%" stop-color="#f97316" stop-opacity="0.95"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      [attr.d]="waveTrailPath()"
                      fill="none"
                      opacity="0.3"
                      stroke="#38bdf8"
                      stroke-width="1"></path>
                    <path
                      [attr.d]="wavePrimaryPath()"
                      fill="none"
                      stroke="url(#researchWaveGrad)"
                      stroke-width="2.5"></path>
                  </svg>
                </div>

                <!-- Footer HUD -->
                <div class="relative z-10 flex items-center justify-between text-slate-400 font-mono text-[11px]">
                  <span class="font-mono text-slate-300">TIMEBASE: {{ isHighFreq() ? '2.5μs/div' : '5.0μs/div' }}</span>
                  <span class="text-emerald-400 flex items-center gap-1 font-mono font-semibold">
                    <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    TRIG: POSITIVE_EDGE
                  </span>
                </div>
              </div>

              <!-- Parameter Modifiers -->
              <div class="mt-5 grid grid-cols-2 gap-3 font-mono">
                <div class="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex flex-col gap-1">
                  <span class="text-[11px] text-slate-500 font-semibold">DISCOVERY FLUX INDEX</span>
                  <div class="flex items-baseline justify-between">
                    <span class="text-lg font-bold text-slate-900">{{ fluxIndexVal() }}%</span>
                    <span class="text-xs text-sky-700 font-bold">+3.2Δ</span>
                  </div>
                  <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1">
                    <div class="bg-gradient-to-r from-sky-500 to-indigo-600 h-full w-[87%] rounded-full"></div>
                  </div>
                </div>

                <div class="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex flex-col gap-1">
                  <span class="text-[11px] text-slate-500 font-semibold">REPRODUCTIVE FIDELITY</span>
                  <div class="flex items-baseline justify-between">
                    <span class="text-lg font-bold text-slate-900">99.8%</span>
                    <span class="text-xs text-emerald-700 font-bold">NOMINAL</span>
                  </div>
                  <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1">
                    <div class="bg-gradient-to-r from-emerald-500 to-teal-600 h-full w-[99%] rounded-full"></div>
                  </div>
                </div>
              </div>

              <!-- Oscilloscope interactive control -->
              <div class="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-slate-500">
                <div class="flex items-center gap-2">
                  <span class="font-mono uppercase text-[10px] font-bold">MODE:</span>
                  <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs font-semibold">CONTINUOUS_SAMPLING</span>
                </div>
                <button
                  type="button"
                  (click)="injectPerturbation()"
                  class="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-100 font-medium text-xs flex items-center gap-1.5 transition-colors border border-slate-800 shadow-sm">
                  <span class="material-symbols-outlined text-[15px] text-sky-400">tune</span>
                  <span>Inject Perturbation</span>
                </button>
              </div>
            </div>

            <!-- Archival Lab Imagery -->
            <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col gap-3">
              <div class="relative w-full h-44 rounded-xl overflow-hidden group border border-slate-200">
                <img
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="High precision quantum computing cryogenic dilution refrigerator rig suspended in an obsidian dark room"
                  referrerpolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxSBNZkYOC6iwJExEB1sCzXMVbxaJdaJGsFmradi6YrNEbZv8YtdtxbXKMNGIC1KxxBdmCx4xYJmNglPJo5LdxwIxWvbKtaNmiDqpVm7Ebh4RfaHBeIE5xINx3ANV9W7BHoV9xfiZ-jvyTZtMKBZ7zeWUK_8zZ8yGad5DSZFefA6qt5HRLa-co4U6QA49Twu2f0SWn_zaA-VQpN0IcOLjY6SvuRmVV-cl9SDw_4D1n" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-[11px]">
                  <span class="bg-slate-900/90 px-2.5 py-0.5 rounded-md backdrop-blur-sm border border-slate-700 text-sky-300 font-semibold shadow-sm">PALO ALTO BENCH // RIG α</span>
                  <span class="text-sky-300 font-bold">STABLE 11.2 mK</span>
                </div>
              </div>
              <span class="text-xs text-slate-600 px-1 leading-relaxed">
                Physical substrate bench at Y? Lab Z where on-device ML benchmarks and zero-serialization protocols undergo empirical testing.
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: PUBLISHED YLABZ ARTICLES & TECHNICAL GUIDES -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="material-symbols-outlined text-sky-600 text-[20px]">menu_book</span>
              <span class="font-mono text-xs text-sky-700 font-bold tracking-widest uppercase">TECHNICAL PUBLICATIONS</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Y? Lab Z Articles &amp; Architecture Guides
            </h2>
          </div>
          <p class="text-sm text-slate-600 max-w-md">
            Directly from <a href="https://ylabz.com" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:text-sky-800 hover:underline font-bold">ylabz.com</a> and our curated Medium publication collections.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (art of articles; track art.id) {
            <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-sky-400 hover:shadow-lg transition-all">
              @if (art.imageUrl) {
                <div class="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    [src]="art.imageUrl"
                    [alt]="art.title"
                    referrerpolicy="no-referrer"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div class="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white font-mono text-[11px]">
                    <span class="px-2 py-0.5 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700 text-sky-300 font-semibold">{{ art.category }}</span>
                    <span class="text-slate-200 font-semibold">{{ art.date }}</span>
                  </div>
                </div>
              }
              <div class="p-6 lg:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div class="flex items-center justify-between mb-3 font-mono text-xs">
                    <span class="text-sky-700 font-bold">{{ art.publication }}</span>
                    <span class="text-slate-500 font-medium">{{ art.readTime }}</span>
                  </div>

                  <h3 class="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-3">
                    {{ art.title }}
                  </h3>

                  <p class="text-slate-600 text-sm leading-relaxed mb-4">
                    {{ art.summary }}
                  </p>

                  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 mb-5">
                    <span class="font-mono text-[10px] text-sky-800 uppercase font-bold block mb-1">ARCHITECTURAL TAKEAWAY</span>
                    <p class="text-xs text-slate-700 font-medium leading-relaxed">{{ art.keyTakeaway }}</p>
                  </div>

                  <div class="flex flex-wrap gap-1.5 mb-6">
                    @for (t of art.tags; track t) {
                      <span class="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 font-mono text-slate-700 text-[11px] font-medium">{{ t }}</span>
                    }
                  </div>
                </div>

                <div class="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div class="flex items-center gap-1.5 text-slate-500 font-mono text-xs">
                    <span class="material-symbols-outlined text-[16px] text-sky-600">article</span>
                    <span>{{ art.publication }}</span>
                  </div>

                  <a [href]="art.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-sm text-sky-600 hover:text-sky-800 font-bold transition-colors">
                    <span>Read Article</span>
                    <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- SECTION 3: LEAD ARCHITECT & FACULTY (Siamak Ashrafi / developerY) -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full">
        <div class="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
          <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-sky-500/5 blur-3xl pointer-events-none rounded-full"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <!-- Left Narrative -->
            <div class="lg:col-span-7 flex flex-col gap-6">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-sky-500"></span>
                <span class="font-mono text-xs text-sky-700 tracking-widest uppercase font-bold">LABORATORY LEADERSHIP</span>
              </div>

              <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Asking questions <span class="text-sky-600">‘?’</span><br/>
                till the end <span class="text-indigo-600">‘Z’!</span>
              </h2>

              <p class="text-slate-600 leading-relaxed text-base">
                Curated by <strong class="text-slate-900 font-bold">Siamak (Ash) Ashrafi</strong> (known as <em class="text-sky-700 font-mono not-italic font-bold">developerY</em> on GitHub), CTO at ZoeWave and founder of Y? LabZ. JavaOne Rock Star, multiple-time Amazon Code Ninja, patent holder, and international conference speaker.
              </p>

              <!-- Ethos Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div class="bg-slate-50 border border-slate-200 p-5 rounded-xl flex flex-col gap-2">
                  <div class="flex items-center gap-2 text-sky-700">
                    <span class="material-symbols-outlined text-[20px]">psychology</span>
                    <span class="text-[16px] text-slate-900 font-bold">Dual-Platform Thinking</span>
                  </div>
                  <p class="text-xs text-slate-600 leading-normal">
                    Building native Android &amp; iOS simultaneously ("in one thought"): Kotlin + Swift, Compose + SwiftUI, RoomDB + SwiftData.
                  </p>
                </div>

                <div class="bg-slate-50 border border-slate-200 p-5 rounded-xl flex flex-col gap-2">
                  <div class="flex items-center gap-2 text-purple-700">
                    <span class="material-symbols-outlined text-[20px]">share</span>
                    <span class="text-[16px] text-slate-900 font-bold">Scientific Fragmentation</span>
                  </div>
                  <p class="text-xs text-slate-600 leading-normal">
                    Publishing atomic, reproducible blueprints and open-source crates rather than locked proprietary silos.
                  </p>
                </div>
              </div>

              <!-- Principal Investigator Capsule -->
              <div class="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-100 border border-slate-200 p-4 rounded-xl">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-700 shadow-sm">
                    <span class="material-symbols-outlined text-[26px]">terminal</span>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-slate-900 font-bold">{{ companyInfo.leadArchitect }}</span>
                    <span class="text-xs text-slate-500 font-mono font-medium">{{ companyInfo.leadTitle }}</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <a href="https://github.com/developerY" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-white bg-slate-900 hover:bg-slate-800 px-3.5 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1.5 shadow-sm">
                    <span>gh/developerY</span>
                    <span class="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Right Visual & Faculty -->
            <div class="lg:col-span-5 flex flex-col gap-4">
              <div class="relative w-full h-80 rounded-2xl overflow-hidden group shadow-sm border border-slate-200">
                <img
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Futuristic software research scientist in high-tech laboratory surrounded by holographic spatial computing interfaces"
                  referrerpolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCwSwsKHHNdZBPaXz0yorygwsyGLz6DjP9eYEbrcJMY1bDu2-P3ovu-49q3gPiN-T21tHCcChtVV-fKasvro_z0WG15qLjwCVhh2yUFSZezbFpvcBEk4IA_BsNlAc4XSOe4II3K4phFJ45TAhVCgnSx1lcaZoJQEkbiLbfdsPsf8Ld91pj8eFY2reC041MvVIv7imVyNRsauhBpm_Y6rbd5GJc_OZHVr0q6jRk7FkH" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div class="absolute top-4 left-4">
                  <span class="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md font-mono text-xs text-slate-900 uppercase font-bold border border-slate-200 shadow-sm">
                    FACULTY HEAD // developerY
                  </span>
                </div>
                <div class="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl flex items-center justify-between border border-slate-700 shadow-md">
                  <div class="flex flex-col">
                    <span class="font-mono text-xs text-white font-bold">R&amp;D @ ZOEWAVE</span>
                    <span class="text-xs text-slate-300">Palo Alto • G.N.Seven Design • Public RFCs</span>
                  </div>
                  <span class="material-symbols-outlined text-sky-400 text-[20px]">handshake</span>
                </div>
              </div>

              <!-- Metric Strip -->
              <div class="grid grid-cols-2 gap-3 font-mono">
                <div class="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-center">
                  <span class="text-2xl font-bold text-slate-900">53+</span>
                  <span class="block text-[11px] text-slate-500 uppercase font-semibold mt-0.5">Medium Publications</span>
                </div>
                <div class="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-center">
                  <span class="text-2xl font-bold text-sky-700">4 Languages</span>
                  <span class="block text-[11px] text-slate-500 uppercase font-semibold mt-0.5">Kotlin • Swift • Rust • Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: INQUIRY FORM -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full mb-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Collaboration Form -->
          <div class="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-6 mb-6 border-b border-slate-200">
                <div>
                  <span class="font-mono text-xs text-sky-700 tracking-widest uppercase font-bold">DISCOVERY PROTOCOL</span>
                  <h3 class="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                    Collaborate with Y? Lab Z
                  </h3>
                </div>
                <div class="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-sky-700">
                  <span class="material-symbols-outlined text-[20px]">send</span>
                </div>
              </div>

              <form [formGroup]="collabForm" (ngSubmit)="submitInquiry()" class="flex flex-col gap-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div class="flex flex-col gap-2">
                    <label class="font-mono text-xs text-slate-600 font-semibold" for="name">
                      RESEARCHER / ORG IDENTITY *
                    </label>
                    <input
                      id="name"
                      type="text"
                      formControlName="name"
                      placeholder="e.g. Dr. A. Vance // Engineering Partner"
                      class="bg-slate-50 focus:bg-white text-slate-900 text-sm px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all font-mono" />
                  </div>

                  <div class="flex flex-col gap-2">
                    <label class="font-mono text-xs text-slate-600 font-semibold" for="email">
                      CONTACT EMAIL *
                    </label>
                    <input
                      id="email"
                      type="email"
                      formControlName="email"
                      placeholder="vance@partner.org"
                      class="bg-slate-50 focus:bg-white text-slate-900 text-sm px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all font-mono" />
                  </div>
                </div>

                <div class="flex flex-col gap-2">
                  <label class="font-mono text-xs text-slate-600 font-semibold" for="domain">
                    YLABZ INITIATIVE OR AREA OF INTEREST
                  </label>
                  <select
                    id="domain"
                    formControlName="domain"
                    class="bg-slate-50 focus:bg-white text-slate-900 text-sm px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all font-mono">
                    <option value="mobility">AshBike Electric Mobility &amp; AI Torque Curves</option>
                    <option value="apparel">ZoeWear Physiological Intelligent Clothing (PIC)</option>
                    <option value="ai-apps">PhotoDo AI Visual Task Engine</option>
                    <option value="robotics">ZoeRobo &amp; Autonomous Micro-Drones</option>
                    <option value="health">Hummingbird Fuel Rx &amp; RxDigita Therapeutics</option>
                    <option value="mobile-stack">Android &amp; iOS Modern Architecture (MAD / Swift 6)</option>
                  </select>
                </div>

                <div class="flex flex-col gap-2">
                  <label class="font-mono text-xs text-slate-600 font-semibold" for="proposal">
                    PROJECT INQUIRY OR PROPOSAL BRIEF *
                  </label>
                  <textarea
                    id="proposal"
                    rows="4"
                    formControlName="proposal"
                    placeholder="Outline your inquiry, collaboration interest, or technical requirements for Y? Lab Z..."
                    class="bg-slate-50 focus:bg-white text-slate-900 text-sm px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-none"></textarea>
                </div>

                <div class="pt-2">
                  <button
                    type="submit"
                    [disabled]="collabForm.invalid"
                    class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 disabled:opacity-50 text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2">
                    <span>Transmit Inquiry to {{ companyInfo.email }}</span>
                    <span class="material-symbols-outlined text-[18px]">lock</span>
                  </button>
                </div>
              </form>

              @if (formSubmitted()) {
                <div class="mt-4 p-4 rounded-xl bg-sky-50 border border-sky-200 font-mono text-xs text-sky-800 leading-relaxed">
                  &gt; PACKET ENCRYPTED &amp; DISPATCHED. Transmission logged to developer&#64;ylabz.com. Awaiting team review.
                </div>
              }
            </div>
          </div>

          <!-- Right Column: Palo Alto Office & Curated Reading Lists -->
          <div class="lg:col-span-5 flex flex-col gap-6">
            <!-- Palo Alto Contact Card -->
            <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div class="flex items-center justify-between pb-4 border-b border-slate-200">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[20px]">location_on</span>
                  <span class="font-mono text-xs text-slate-900 uppercase tracking-wider font-bold">PALO ALTO HEADQUARTERS</span>
                </div>
                <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 font-mono text-xs text-sky-700 font-bold">CALIFORNIA</span>
              </div>

              <div class="flex flex-col gap-2 font-mono text-xs leading-relaxed bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-600 mt-4">
                <span class="text-slate-900 font-bold">{{ companyInfo.name }} // R&amp;D &#64; ZoeWave</span>
                <span>{{ companyInfo.address }}</span>
                <span class="text-sky-700 font-bold">Contact: {{ companyInfo.email }}</span>
                <span class="text-slate-500">Design: {{ companyInfo.designPartner }}</span>
              </div>
            </div>

            <!-- Curated Medium Lists -->
            <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <div class="flex items-center justify-between pb-2 border-b border-slate-200">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[20px]">library_books</span>
                  <span class="font-mono text-xs text-slate-900 uppercase tracking-wider font-bold">CURATED MEDIUM LISTS</span>
                </div>
                <span class="font-mono text-xs text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 font-bold">&#64;zoewave</span>
              </div>

              <div class="flex flex-col gap-2.5">
                <a href="https://medium.com/@zoewave" target="_blank" rel="noopener noreferrer" class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:bg-white transition-all flex items-center justify-between group shadow-sm">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-sky-600">smartphone</span>
                    <div class="flex flex-col">
                      <span class="font-bold text-slate-900 text-sm group-hover:text-sky-700">Android Dev | Curated by YLabZ</span>
                      <span class="font-mono text-[11px] text-slate-500">~31 stories • Compose, Hilt, Room, MAD</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-slate-400 group-hover:text-sky-600 text-[18px]">open_in_new</span>
                </a>

                <a href="https://medium.com/@zoewave" target="_blank" rel="noopener noreferrer" class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-purple-400 hover:bg-white transition-all flex items-center justify-between group shadow-sm">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-purple-600">apple</span>
                    <div class="flex flex-col">
                      <span class="font-bold text-slate-900 text-sm group-hover:text-purple-700">iOS Dev | Curated by YLabZ</span>
                      <span class="font-mono text-[11px] text-slate-500">~22 stories • Swift, SwiftUI, SwiftData</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-slate-400 group-hover:text-purple-600 text-[18px]">open_in_new</span>
                </a>

                <a href="https://medium.com/@zoewave" target="_blank" rel="noopener noreferrer" class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-white transition-all flex items-center justify-between group shadow-sm">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-emerald-600">psychology</span>
                    <div class="flex flex-col">
                      <span class="font-bold text-slate-900 text-sm group-hover:text-emerald-700">AI / ML Dev on Mobile</span>
                      <span class="font-mono text-[11px] text-slate-500">~11 stories • PyTorch, TFLite, Core ML</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-slate-400 group-hover:text-emerald-600 text-[18px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ResearchComponent implements OnDestroy {
  companyInfo = YLABZ_COMPANY_INFO;
  articles: YLabZArticle[] = YLABZ_ARTICLES;

  collabForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    domain: new FormControl('mobility'),
    proposal: new FormControl('', [Validators.required])
  });

  isHighFreq = signal<boolean>(false);
  amplitudeValue = signal<string>('0.942');
  fluxIndexVal = signal<string>('87.4');
  formSubmitted = signal<boolean>(false);

  wavePrimaryPath = signal<string>('M 0 50 Q 62.5 15 125 50 T 250 50 T 375 50 T 500 50');
  waveTrailPath = signal<string>('M 0 50 Q 60 20 125 50 T 250 50 T 375 50 T 500 50');

  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private animFrameId: number | null = null;
  private phase = 0;
  private perturbEnergy = 0;

  constructor() {
    if (this.isBrowser && typeof requestAnimationFrame !== 'undefined') {
      this.startOscilloscope();
    }
  }

  ngOnDestroy() {
    if (this.animFrameId && typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.animFrameId);
    }
  }

  private startOscilloscope() {
    const loop = () => {
      this.phase += 0.05;
      if (this.perturbEnergy > 0) {
        this.perturbEnergy *= 0.95;
      }

      const freq = this.isHighFreq() ? 0.065 : 0.035;
      const amp = 30 + Math.sin(this.phase * 0.5) * 8 + (this.perturbEnergy * 20);
      const points: string[] = [];
      const trailPoints: string[] = [];

      for (let x = 0; x <= 500; x += 10) {
        const yOffset = Math.sin((x * freq) + this.phase) * amp +
                        Math.cos((x * freq * 2) - this.phase * 0.8) * (amp * 0.3) +
                        (Math.random() - 0.5) * (this.perturbEnergy * 6);
        const y = 50 + yOffset;
        const trailY = 50 + (yOffset * 0.7);

        points.push(`${x === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
        trailPoints.push(`${x === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${trailY.toFixed(1)}`);
      }

      this.wavePrimaryPath.set(points.join(' '));
      this.waveTrailPath.set(trailPoints.join(' '));

      this.animFrameId = requestAnimationFrame(loop);
    };

    this.animFrameId = requestAnimationFrame(loop);
  }

  toggleFrequency() {
    this.isHighFreq.update(v => !v);
  }

  injectPerturbation() {
    this.perturbEnergy = 1.0;
    this.amplitudeValue.set((1.2 + Math.random() * 0.4).toFixed(3));
    this.fluxIndexVal.set((88 + Math.random() * 8).toFixed(1));
  }

  submitInquiry() {
    if (this.collabForm.valid) {
      this.formSubmitted.set(true);
      setTimeout(() => {
        this.collabForm.reset({
          domain: 'mobility'
        });
      }, 500);
    }
  }
}
