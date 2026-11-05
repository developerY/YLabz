import {ChangeDetectionStrategy, Component, signal, OnDestroy} from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-research',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <div class="flex flex-col w-full">
      <!-- Atmospheric Top Glow Canvas -->
      <div class="relative w-full overflow-hidden border-b border-slate-200">
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-sky-200/50 via-sky-100/30 to-transparent blur-3xl pointer-events-none rounded-full"></div>
        <div class="absolute top-20 right-10 w-96 h-96 bg-cyan-200/40 blur-3xl pointer-events-none rounded-full"></div>

        <!-- Header Section -->
        <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-12 relative z-10">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-50 text-sky-700 border border-sky-200 font-label-caps text-[11px] tracking-widest uppercase font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping"></span>
                DISPATCH ARCHIVE • VOL 09
              </span>
              <span class="font-code-badge text-slate-500">DOC_REF::LT-2025-AX</span>
            </div>

            <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div class="max-w-3xl">
                <h1 class="font-display-hero text-slate-900 font-bold tracking-tight">
                  Research, Philosophy &amp; Lab Updates
                </h1>
                <p class="text-lg text-slate-600 mt-2 leading-relaxed">
                  Deconstructing computing primitives through systematic fragmentation, open algorithmic proofs, and empirical prototypes across spatial canvas, low-latency neural fabrics, and distributed zero-knowledge runtimes.
                </p>
              </div>

              <div class="flex items-center gap-3 shrink-0">
                <div class="flex flex-col items-end">
                  <span class="font-code-badge text-sky-700 font-semibold">NODE: CRYPTO-US-EAST</span>
                  <span class="font-code-badge text-slate-500 uppercase">SYS EPOCH: 8,421,093</span>
                </div>
                <div class="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-sky-600">
                  <span class="material-symbols-outlined text-[24px]">terminal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION 1: THE LEWIS THOMAS THESIS -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Primary Thesis Narrative Block -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            <div class="bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
              <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>

              <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-sky-600 text-[20px]">auto_stories</span>
                  <span class="font-label-caps text-sky-700 font-semibold tracking-widest uppercase">EPISTEMOLOGICAL FOUNDATION</span>
                </div>
                <span class="font-code-badge text-slate-400">ESSAY_ID::0xTHOMAS</span>
              </div>

              <!-- The Lewis Thomas Quote Callout -->
              <blockquote class="bg-gradient-to-br from-sky-50/70 to-slate-50 border border-sky-100 rounded-xl p-6 lg:p-8 mb-6 relative">
                <div class="text-sky-300 opacity-60 absolute top-2 left-3 font-display-hero text-6xl leading-none select-none">“</div>
                <p class="font-headline-sm text-slate-900 italic leading-relaxed pl-6 relative z-10 font-normal">
                  The invention of a mechanism for the systematic publication of fragments of scientific work may well have been the key event in the history of modern science.
                </p>
                <div class="mt-4 pl-6 flex items-center justify-between flex-wrap gap-2">
                  <cite class="not-italic font-label-caps text-sky-700 font-semibold tracking-wider">— Dr. Lewis Thomas (1913–1993)</cite>
                  <span class="text-xs text-slate-500 uppercase font-mono">The Lives of a Cell (1974)</span>
                </div>
              </blockquote>

              <!-- Analytical Essay -->
              <div class="flex flex-col gap-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  In seventeenth-century natural philosophy, scientific discovery was often jealously guarded in alchemical ciphers or posthumously revealed in monolithic treatises. The revolutionary catalyst that accelerated European science was not a sudden spike in human cognition, but an institutional substrate: the philosophical journal and the rapid distribution of verified, reproducible <em class="text-slate-900 font-medium not-italic bg-sky-100/70 px-1 rounded">fragments</em>.
                </p>
                <p>
                  At <strong class="text-slate-900 font-semibold">Y? Lab Z</strong>, we assert that the modern lineage of Thomas's fragment mechanism is found neither in paywalled academic journals nor proprietary corporate slide decks. It thrives in the open git commit, the verified reproducible repository, the self-contained container image, and the public cryptographic artifact.
                </p>
                <p>
                  When a spatial matrix transformation or an INT8 quantized weight loader is pushed as an open repository, it is immediately absorbed by thousands of concurrent compilers worldwide. It is tested against strange edge architectures, pruned of parasitic cycles, and recombined into novel primitives within hours. The git diff is our peer review; deterministic compilation is our empirical verification.
                </p>
              </div>

              <div class="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col items-center justify-center">
                  <span class="font-headline-md text-sky-600 font-bold tracking-tight">100%</span>
                  <span class="font-label-caps text-slate-500 uppercase mt-1">Open Artifacts</span>
                </div>
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col items-center justify-center">
                  <span class="font-headline-md text-sky-600 font-bold tracking-tight">&lt; 14ms</span>
                  <span class="font-label-caps text-slate-500 uppercase mt-1">Spatial Sync TTF</span>
                </div>
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col items-center justify-center">
                  <span class="font-headline-md text-sky-700 font-bold tracking-tight">Zero-Paywall</span>
                  <span class="font-label-caps text-slate-500 uppercase mt-1">Public Domain MIT</span>
                </div>
              </div>
            </div>

            <!-- Philosophical Fragment Diagram -->
            <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[18px]">schema</span>
                  <span class="font-label-caps text-slate-900 uppercase tracking-wider font-semibold">FRAGMENTATION RUNTIME PIPELINE</span>
                </div>
                <span class="font-code-badge text-slate-500">STATE: CONTINUOUS</span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col gap-2">
                  <div class="flex items-center justify-between">
                    <span class="font-label-caps text-sky-600 font-semibold">STAGE 01</span>
                    <span class="material-symbols-outlined text-slate-400 text-[16px]">psychology_alt</span>
                  </div>
                  <span class="font-headline-sm text-slate-900 text-sm font-semibold">Inquiry ‘?’</span>
                  <p class="text-xs text-slate-600 leading-snug">Empirical question framed around limits of current hardware/substrate.</p>
                </div>

                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col gap-2">
                  <div class="flex items-center justify-between">
                    <span class="font-label-caps text-sky-600 font-semibold">STAGE 02</span>
                    <span class="material-symbols-outlined text-slate-400 text-[16px]">code</span>
                  </div>
                  <span class="font-headline-sm text-slate-900 text-sm font-semibold">Fragment Code</span>
                  <p class="text-xs text-slate-600 leading-snug">Deconstructed single-purpose kernel published directly to Git upstream.</p>
                </div>

                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col gap-2">
                  <div class="flex items-center justify-between">
                    <span class="font-label-caps text-sky-600 font-semibold">STAGE 03</span>
                    <span class="material-symbols-outlined text-slate-400 text-[16px]">analytics</span>
                  </div>
                  <span class="font-headline-sm text-slate-900 text-sm font-semibold">Peer Telemetry</span>
                  <p class="text-xs text-slate-600 leading-snug">Global benchmark cluster records latency, power draw, and precision.</p>
                </div>

                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col gap-2">
                  <div class="flex items-center justify-between">
                    <span class="font-label-caps text-sky-600 font-semibold">STAGE 04</span>
                    <span class="material-symbols-outlined text-slate-400 text-[16px]">check_circle</span>
                  </div>
                  <span class="font-headline-sm text-slate-900 text-sm font-semibold">Exhaustion ‘Z’</span>
                  <p class="text-xs text-slate-600 leading-snug">Formal proof settled; archived in persistent distributed ledger.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Oscilloscope / Telemetry Monitor Widget -->
          <div class="lg:col-span-5 flex flex-col gap-6">
            <div class="bg-white border border-slate-200 rounded-2xl p-6 lg:p-7 shadow-sm relative overflow-hidden">
              <div class="flex items-center justify-between pb-4 border-b border-slate-100">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping"></span>
                  <span class="font-label-caps text-slate-900 uppercase tracking-wider font-semibold">LIVE TELEMETRY MONITOR</span>
                </div>

                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 font-code-badge text-sky-700 font-medium">FREQ: {{ isHighFreq() ? '285.6 MHz' : '142.8 MHz' }}</span>
                  <button
                    type="button"
                    (click)="toggleFrequency()"
                    class="p-1.5 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-sky-600 transition-colors"
                    title="Toggle Sampling Frequency">
                    <span class="material-symbols-outlined text-[16px]">sync</span>
                  </button>
                </div>
              </div>

              <!-- Oscilloscope Visual Display Container -->
              <div class="relative w-full h-56 bg-slate-900 rounded-xl p-4 overflow-hidden flex flex-col justify-between mt-4 shadow-inner">
                <!-- Matrix Grid -->
                <div class="absolute inset-0 bg-[radial-gradient(circle,rgba(56,189,248,0.15)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div class="w-full h-[1px] bg-sky-400"></div>
                </div>
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div class="h-full w-[1px] bg-sky-400"></div>
                </div>

                <!-- Header HUD -->
                <div class="relative z-10 flex items-center justify-between text-slate-400 font-mono text-[11px]">
                  <span class="text-sky-300">CHAN A: FRAGMENT_FLUX</span>
                  <span class="text-slate-200 font-mono">AMP: {{ amplitudeValue() }} Vpp</span>
                </div>

                <!-- Waveform SVG -->
                <div class="relative z-10 w-full h-32 flex items-center">
                  <svg class="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 100">
                    <defs>
                      <linearGradient id="researchWaveGrad" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.4"></stop>
                        <stop offset="50%" stop-color="#38bdf8" stop-opacity="1"></stop>
                        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.8"></stop>
                      </linearGradient>
                    </defs>
                    <!-- Background ghost trail -->
                    <path
                      [attr.d]="waveTrailPath()"
                      fill="none"
                      opacity="0.3"
                      stroke="#38bdf8"
                      stroke-width="1"></path>
                    <!-- Main Signal Line -->
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
                  <span class="text-sky-400 flex items-center gap-1 font-mono">
                    <span class="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                    TRIG: POSITIVE_EDGE
                  </span>
                </div>
              </div>

              <!-- Parameter Modifiers -->
              <div class="mt-5 grid grid-cols-2 gap-3">
                <div class="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex flex-col gap-1">
                  <span class="font-label-caps text-slate-400">DISCOVERY FLUX INDEX</span>
                  <div class="flex items-baseline justify-between">
                    <span class="font-headline-sm text-slate-900 font-bold">{{ fluxIndexVal() }}%</span>
                    <span class="font-code-badge text-sky-700 font-semibold">+3.2Δ</span>
                  </div>
                  <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1">
                    <div class="bg-sky-500 h-full w-[87%] rounded-full"></div>
                  </div>
                </div>

                <div class="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex flex-col gap-1">
                  <span class="font-label-caps text-slate-400">REPRODUCTIVE FIDELITY</span>
                  <div class="flex items-baseline justify-between">
                    <span class="font-headline-sm text-slate-900 font-bold">99.8%</span>
                    <span class="font-code-badge text-emerald-600 font-semibold">NOMINAL</span>
                  </div>
                  <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1">
                    <div class="bg-sky-600 h-full w-[99%] rounded-full"></div>
                  </div>
                </div>
              </div>

              <!-- Oscilloscope interactive control -->
              <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-slate-500">
                <div class="flex items-center gap-2">
                  <span class="font-label-caps uppercase text-[10px]">MODE:</span>
                  <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-sky-700 font-code-badge">CONTINUOUS_SAMPLING</span>
                </div>
                <button
                  type="button"
                  (click)="injectPerturbation()"
                  class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs flex items-center gap-1.5 transition-colors border border-slate-200">
                  <span class="material-symbols-outlined text-[15px] text-sky-600">tune</span>
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
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-[11px]">
                  <span class="bg-slate-900/80 px-2.5 py-0.5 rounded-md backdrop-blur-sm border border-slate-700">CRYO-BAY 02 // RIG α</span>
                  <span class="text-sky-300 font-semibold">STABLE 11.2 mK</span>
                </div>
              </div>
              <span class="text-xs text-slate-500 px-1 leading-relaxed">
                Physical substrate bench where zero-knowledge fragments and quantum circuit simulators undergo continuous validation loops.
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: CHRONOLOGICAL CHANGELOG & LAB DISPATCHES -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="material-symbols-outlined text-sky-600 text-[20px]">history_edu</span>
              <span class="font-label-caps text-sky-700 font-semibold tracking-widest uppercase">DISPATCH RECORD</span>
            </div>
            <h2 class="font-headline-lg text-slate-900 font-bold tracking-tight">
              Lab Timeline &amp; Recent Dispatches
            </h2>
          </div>
          <p class="text-sm text-slate-600 max-w-md">
            Granular record of architecture releases, peer-reviewed technical whitepapers, and verifiable benchmarking suites.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Dispatch 1 -->
          <div class="bg-white border border-slate-200 rounded-2xl p-6 lg:p-7 shadow-sm flex flex-col justify-between group hover:border-sky-300 hover:shadow-md transition-all">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-2.5 py-1 rounded bg-sky-50 border border-sky-200 font-label-caps text-sky-700 font-semibold uppercase">Q1 2025 • RELEASE</span>
                <span class="font-code-badge text-slate-400">REV::v2.4.0</span>
              </div>
              <h3 class="font-headline-sm text-slate-900 group-hover:text-sky-600 font-bold transition-colors mb-3">
                Spatial XR &amp; visionOS 2.0 Polyhedron Engine
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Released a zero-latency volumetric mesh transformation bridge supporting bi-directional gaze synchronization between visionOS RealityKit and Android OpenXR runtime layers.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-code-badge text-slate-700">Swift 6.0</span>
                <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-code-badge text-slate-700">Metal 3</span>
                <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-code-badge text-slate-700">RealityKit</span>
                <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 font-code-badge text-sky-700 font-medium">OpenXR</span>
              </div>
            </div>
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div class="flex items-center gap-2 text-slate-500 font-code-badge text-xs">
                <span class="material-symbols-outlined text-[16px] text-sky-600">folder_zip</span>
                <span>tar.gz (42.8 MB)</span>
              </div>
              <button (click)="openDispatch(1)" class="inline-flex items-center gap-1 text-sm text-sky-600 hover:text-sky-800 font-semibold transition-colors">
                <span>Inspect Blueprint</span>
                <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          <!-- Dispatch 2 -->
          <div class="bg-white border border-slate-200 rounded-2xl p-6 lg:p-7 shadow-sm flex flex-col justify-between group hover:border-sky-300 hover:shadow-md transition-all">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-2.5 py-1 rounded bg-sky-50 border border-sky-200 font-label-caps text-sky-700 font-semibold uppercase">Q4 2024 • WHITEPAPER</span>
                <span class="font-code-badge text-slate-400">PUB::YZ-WP-99</span>
              </div>
              <h3 class="font-headline-sm text-slate-900 group-hover:text-sky-600 font-bold transition-colors mb-3">
                WearOS Compose Sub-Millisecond Heartbeat Fabric
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Published empirical thesis on deterministic state replication across wearable low-power microcontrollers and edge compute nodes utilizing custom protobuf over BLE 5.4.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-code-badge text-slate-700">Jetpack Compose</span>
                <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-code-badge text-slate-700">BLE 5.4</span>
                <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 font-code-badge text-sky-700 font-medium">Protobuf v4</span>
              </div>
            </div>
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div class="flex items-center gap-2 text-slate-500 font-code-badge text-xs">
                <span class="material-symbols-outlined text-[16px] text-sky-600">picture_as_pdf</span>
                <span>PDF (18 Pages)</span>
              </div>
              <button (click)="openDispatch(2)" class="inline-flex items-center gap-1 text-sm text-sky-600 hover:text-sky-800 font-semibold transition-colors">
                <span>Read Manuscript</span>
                <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          <!-- Dispatch 3 -->
          <div class="bg-white border border-slate-200 rounded-2xl p-6 lg:p-7 shadow-sm flex flex-col justify-between group hover:border-sky-300 hover:shadow-md transition-all">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-2.5 py-1 rounded bg-sky-50 border border-sky-200 font-label-caps text-sky-700 font-semibold uppercase">Q3 2024 • BENCHMARK</span>
                <span class="font-code-badge text-slate-400">SUITE::INT8-EDGE</span>
              </div>
              <h3 class="font-headline-sm text-slate-900 group-hover:text-sky-600 font-bold transition-colors mb-3">
                Sub-Watt INT8 Neural Matrix Benchmarks
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Comparative performance telemetry across Apple Neural Engine, Snapdragon NPU, and Coral Tensor chips executing 7B parameter reasoning graphs at 2.4 watts dissipation.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-code-badge text-slate-700">PyTorch 2.4</span>
                <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-code-badge text-slate-700">ONNX Runtime</span>
                <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 font-code-badge text-sky-700 font-medium">CoreML</span>
              </div>
            </div>
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div class="flex items-center gap-2 text-slate-500 font-code-badge text-xs">
                <span class="material-symbols-outlined text-[16px] text-sky-600">query_stats</span>
                <span>CSV Raw Datasets</span>
              </div>
              <button (click)="openDispatch(3)" class="inline-flex items-center gap-1 text-sm text-sky-600 hover:text-sky-800 font-semibold transition-colors">
                <span>Query Datasets</span>
                <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Extra Changelog Stream -->
        <div class="mt-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <span class="font-label-caps text-slate-500 uppercase tracking-wider font-semibold">PREVIOUS CONTINUOUS DEPLOYS</span>
            <span class="font-code-badge text-slate-400">HASH: b9e1a8..4f2</span>
          </div>
          <div class="divide-y divide-slate-100 flex flex-col gap-2">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg hover:bg-slate-50 transition-colors">
              <div class="flex items-center gap-3">
                <span class="font-code-badge text-slate-400">2024-08-14</span>
                <span class="text-sm text-slate-800 font-medium">Qiskit Hamiltonian simulation module merged to main branch</span>
              </div>
              <span class="font-code-badge text-sky-700 font-semibold">v1.9.4 • COMMITTED</span>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg hover:bg-slate-50 transition-colors">
              <div class="flex items-center gap-3">
                <span class="font-code-badge text-slate-400">2024-06-02</span>
                <span class="text-sm text-slate-800 font-medium">Post-Quantum Lattice Kyber key exchange integration validated</span>
              </div>
              <span class="font-label-caps text-sky-700 font-semibold bg-sky-50 px-2 py-0.5 rounded border border-sky-200 text-[10px]">NIST ROUND 4</span>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg hover:bg-slate-50 transition-colors">
              <div class="flex items-center gap-3">
                <span class="font-code-badge text-slate-400">2024-03-29</span>
                <span class="text-sm text-slate-800 font-medium">Initial Genesis Commit for Y? Lab Z cross-platform spatial substrate</span>
              </div>
              <span class="font-code-badge text-slate-500 font-semibold">GENESIS-01</span>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: ABOUT THE LABORATORY & FACULTY -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full">
        <div class="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
          <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-sky-100/60 blur-3xl pointer-events-none rounded-full"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <!-- Left Narrative -->
            <div class="lg:col-span-7 flex flex-col gap-6">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-sky-600"></span>
                <span class="font-label-caps text-sky-700 tracking-widest uppercase font-semibold">LABORATORY MANIFESTO</span>
              </div>

              <h2 class="font-display-hero text-slate-900 tracking-tight leading-tight font-bold">
                Asking questions <span class="text-sky-600">‘?’</span><br/>
                till the end <span class="text-sky-700">‘Z’!</span>
              </h2>

              <p class="text-slate-600 leading-relaxed text-base">
                The lab name embodies our unyielding investigative doctrine. The question mark (<strong class="text-slate-900 font-semibold">‘?’</strong>) is our perpetual state of skepticism toward dogmatic consensus in hardware architecture and software runtimes. The letter (<strong class="text-slate-900 font-semibold">‘Z’</strong>) represents the terminal frontier—the final layer of the stack where quantum uncertainty and physical hardware limits collide.
              </p>

              <!-- Ethos Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div class="bg-slate-50 border border-slate-200 p-5 rounded-xl flex flex-col gap-2">
                  <div class="flex items-center gap-2 text-sky-600">
                    <span class="material-symbols-outlined text-[20px]">psychology</span>
                    <span class="font-headline-sm text-[16px] text-slate-900 font-bold">Radical Inquiry</span>
                  </div>
                  <p class="text-xs text-slate-600 leading-normal">
                    Never accept an abstraction layer as immutable. We profile downwards through compilers to the silicon level.
                  </p>
                </div>

                <div class="bg-slate-50 border border-slate-200 p-5 rounded-xl flex flex-col gap-2">
                  <div class="flex items-center gap-2 text-sky-600">
                    <span class="material-symbols-outlined text-[20px]">share</span>
                    <span class="font-headline-sm text-[16px] text-slate-900 font-bold">Sovereign Reproducibility</span>
                  </div>
                  <p class="text-xs text-slate-600 leading-normal">
                    Every benchmark published must run deterministically on another machine without hidden telemetry secrets.
                  </p>
                </div>
              </div>

              <!-- Principal Investigator Signature Capsule -->
              <div class="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
                    <span class="material-symbols-outlined text-[26px]">terminal</span>
                  </div>
                  <div class="flex flex-col">
                    <span class="font-headline-sm text-slate-900 font-bold">developerY</span>
                    <span class="text-xs text-slate-500">Lead Architect &amp; Research Faculty • Y? Lab Z</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="font-code-badge text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-md font-semibold">KEY: 0x9B28...12F</span>
                </div>
              </div>
            </div>

            <!-- Right Visual & Faculty -->
            <div class="lg:col-span-5 flex flex-col gap-4">
              <div class="relative w-full h-80 rounded-2xl overflow-hidden group shadow-md border border-slate-200">
                <img
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Futuristic software research scientist in high-tech laboratory surrounded by holographic spatial computing interfaces"
                  referrerpolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCwSwsKHHNdZBPaXz0yorygwsyGLz6DjP9eYEbrcJMY1bDu2-P3ovu-49q3gPiN-T21tHCcChtVV-fKasvro_z0WG15qLjwCVhh2yUFSZezbFpvcBEk4IA_BsNlAc4XSOe4II3K4phFJ45TAhVCgnSx1lcaZoJQEkbiLbfdsPsf8Ld91pj8eFY2reC041MvVIv7imVyNRsauhBpm_Y6rbd5GJc_OZHVr0q6jRk7FkH" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div class="absolute top-4 left-4">
                  <span class="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md font-label-caps text-sky-700 uppercase font-bold border border-slate-200">
                    FACULTY HEAD // developerY
                  </span>
                </div>
                <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl flex items-center justify-between border border-slate-200 shadow-sm">
                  <div class="flex flex-col">
                    <span class="font-label-caps text-slate-900 font-bold">COLLABORATIVE MODEL</span>
                    <span class="text-xs text-slate-500">Async RFCs • GitHub Monorepo • Public Benchmarks</span>
                  </div>
                  <span class="material-symbols-outlined text-sky-600 text-[20px]">handshake</span>
                </div>
              </div>

              <!-- Metric Strip -->
              <div class="grid grid-cols-2 gap-3">
                <div class="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-center">
                  <span class="font-headline-md text-slate-900 font-bold">48+</span>
                  <span class="block font-label-caps text-slate-500 uppercase mt-0.5">Verified Blueprints</span>
                </div>
                <div class="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-center">
                  <span class="font-headline-md text-sky-600 font-bold">3.8M</span>
                  <span class="block font-label-caps text-slate-500 uppercase mt-0.5">Runtime Invocations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: COLLABORATIVE INQUIRY & SIGNED KEYS -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full mb-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Collaboration Form -->
          <div class="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <div>
                  <span class="font-label-caps text-sky-700 tracking-widest uppercase font-semibold">DISCOVERY PROTOCOL</span>
                  <h3 class="font-headline-lg text-slate-900 font-bold tracking-tight mt-1">
                    Collaborative Research Inquiry
                  </h3>
                </div>
                <div class="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                  <span class="material-symbols-outlined text-[20px]">send</span>
                </div>
              </div>

              <form [formGroup]="collabForm" (ngSubmit)="submitInquiry()" class="flex flex-col gap-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div class="flex flex-col gap-2">
                    <label class="font-label-caps text-slate-600 font-medium" for="name">
                      RESEARCHER / ORG IDENTITY *
                    </label>
                    <input
                      id="name"
                      type="text"
                      formControlName="name"
                      placeholder="e.g. Dr. A. Vance // Max Planck"
                      class="bg-slate-50 text-slate-900 text-sm px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-sky-500 focus:bg-white transition-all font-mono" />
                  </div>

                  <div class="flex flex-col gap-2">
                    <label class="font-label-caps text-slate-600 font-medium" for="email">
                      SECURE CONTACT ENDPOINT *
                    </label>
                    <input
                      id="email"
                      type="email"
                      formControlName="email"
                      placeholder="vance@frontier-inst.org"
                      class="bg-slate-50 text-slate-900 text-sm px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-sky-500 focus:bg-white transition-all font-mono" />
                  </div>
                </div>

                <div class="flex flex-col gap-2">
                  <label class="font-label-caps text-slate-600 font-medium" for="domain">
                    TARGET RESEARCH DOMAIN
                  </label>
                  <select
                    id="domain"
                    formControlName="domain"
                    class="bg-slate-50 text-slate-900 text-sm px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-sky-500 focus:bg-white transition-all">
                    <option value="spatial">Spatial Computing (visionOS / Android XR Substrates)</option>
                    <option value="wearables">Wearables &amp; Micro-Telemetry Synchrony (WearOS / BLE)</option>
                    <option value="neural">Sub-Watt Edge Neural Quantization (PyTorch / Metal)</option>
                    <option value="quantum">Quantum Algorithm Simulation &amp; Hamiltonians (Qiskit)</option>
                    <option value="crypto">Cryptographic Verification &amp; ZK Fabrics</option>
                  </select>
                </div>

                <div class="flex flex-col gap-2">
                  <label class="font-label-caps text-slate-600 font-medium" for="proposal">
                    FRAGMENT HYPOTHESIS ‘?’ OR PROPOSAL BRIEF *
                  </label>
                  <textarea
                    id="proposal"
                    rows="4"
                    formControlName="proposal"
                    placeholder="Outline the specific experimental bottleneck or compute fragment you want to co-investigate with Y? Lab Z..."
                    class="bg-slate-50 text-slate-900 text-sm px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-sky-500 focus:bg-white transition-all resize-none"></textarea>
                </div>

                <div class="flex items-center gap-3 pt-1">
                  <input
                    id="pgpCheck"
                    type="checkbox"
                    formControlName="pgpReceipt"
                    class="w-4 h-4 rounded border-slate-300 text-sky-600 accent-sky-600" />
                  <label for="pgpCheck" class="text-xs text-slate-600">
                    Request dual-signed PGP cryptographic receipt for shared disclosures
                  </label>
                </div>

                <div class="pt-2">
                  <button
                    type="submit"
                    [disabled]="collabForm.invalid"
                    class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2">
                    <span>Transmit Inquiry to developerY</span>
                    <span class="material-symbols-outlined text-[18px]">lock</span>
                  </button>
                </div>
              </form>

              @if (formSubmitted()) {
                <div class="mt-4 p-4 rounded-xl bg-sky-50 border border-sky-200 font-mono text-xs text-sky-800 leading-relaxed">
                  &gt; PACKET ENCRYPTED &amp; DISPATCHED. HASH: 0x81FA...289C. AWAITING PEER REVIEW BY developerY.
                </div>
              }
            </div>
          </div>

          <!-- Right Column: Signed Keys & Whitepaper Downloads -->
          <div class="lg:col-span-5 flex flex-col gap-6">
            <!-- Cryptographic Signed Key Card -->
            <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div class="flex items-center justify-between pb-4 border-b border-slate-100">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[20px]">key</span>
                  <span class="font-label-caps text-slate-900 uppercase tracking-wider font-semibold">CRYPTOGRAPHIC ATTESTATION</span>
                </div>
                <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-200 font-code-badge text-sky-700 font-medium">ED25519</span>
              </div>

              <div class="flex flex-col gap-2 font-mono text-[11px] leading-relaxed bg-slate-50 border border-slate-200 p-4 rounded-xl overflow-x-auto text-slate-700 mt-4">
                <span class="text-slate-400 font-semibold">-----BEGIN PGP PUBLIC KEY BLOCK-----</span>
                <span class="text-slate-900">mQGNBF+b8WkBDADsR8/12...YZ-LAB-Z-MASTER-ED25519</span>
                <span>FINGERPRINT: 4A91 8E3B F721 00C8 92DE CC81 B901 developerY</span>
                <span class="text-sky-700 font-medium">TELEMETRY-AUTH: VALID THROUGH 2029-12-31</span>
                <span class="text-slate-400 font-semibold">-----END PGP PUBLIC KEY BLOCK-----</span>
              </div>

              <div class="mt-4 flex items-center justify-between">
                <button
                  type="button"
                  (click)="copyMasterKey()"
                  class="px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-code-badge text-xs transition-colors flex items-center gap-1.5 font-medium">
                  <span class="material-symbols-outlined text-[14px] text-sky-600">content_copy</span>
                  <span>{{ keyCopied() ? 'Copied to Clipboard!' : 'Copy Master Key' }}</span>
                </button>
                <span class="font-code-badge text-emerald-600 font-semibold flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  SIG: NOMINAL
                </span>
              </div>
            </div>

            <!-- Curated Whitepaper Downloads -->
            <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <div class="flex items-center justify-between pb-2 border-b border-slate-100">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[20px]">download</span>
                  <span class="font-label-caps text-slate-900 uppercase tracking-wider font-semibold">CORE MANUSCRIPTS</span>
                </div>
                <span class="font-code-badge text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 font-semibold">OPEN ACCESS</span>
              </div>

              <div class="flex flex-col gap-2.5">
                <button
                  type="button"
                  (click)="downloadPaper('manifesto')"
                  class="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/40 transition-all flex items-center justify-between text-left group">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <span class="material-symbols-outlined text-[16px]">article</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="font-medium text-slate-900 text-sm group-hover:text-sky-600 transition-colors">
                        The Systematic Fragment Manifesto
                      </span>
                      <span class="font-mono text-[11px] text-slate-500">YZ-WP-01 • 2.4 MB PDF • Lewis Thomas Thesis</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-slate-400 group-hover:text-sky-600 text-[18px] transition-colors">file_download</span>
                </button>

                <button
                  type="button"
                  (click)="downloadPaper('spatial')"
                  class="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/40 transition-all flex items-center justify-between text-left group">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <span class="material-symbols-outlined text-[16px]">memory</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="font-medium text-slate-900 text-sm group-hover:text-sky-600 transition-colors">
                        Spatial Volumetric Matrix Sync in visionOS 2
                      </span>
                      <span class="font-mono text-[11px] text-slate-500">YZ-WP-04 • 5.1 MB PDF • RealityKit &amp; OpenXR</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-slate-400 group-hover:text-sky-600 text-[18px] transition-colors">file_download</span>
                </button>

                <button
                  type="button"
                  (click)="downloadPaper('quantization')"
                  class="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/40 transition-all flex items-center justify-between text-left group">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <span class="material-symbols-outlined text-[16px]">device_thermostat</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="font-medium text-slate-900 text-sm group-hover:text-sky-600 transition-colors">
                        Sub-Watt Neural Quantization at Silicon Limit
                      </span>
                      <span class="font-mono text-[11px] text-slate-500">YZ-WP-08 • 3.8 MB PDF • Edge Benchmarks</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-slate-400 group-hover:text-sky-600 text-[18px] transition-colors">file_download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ResearchComponent implements OnDestroy {
  collabForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    domain: new FormControl('spatial'),
    proposal: new FormControl('', [Validators.required]),
    pgpReceipt: new FormControl(false)
  });

  isHighFreq = signal<boolean>(false);
  amplitudeValue = signal<string>('0.942');
  fluxIndexVal = signal<string>('87.4');
  keyCopied = signal<boolean>(false);
  formSubmitted = signal<boolean>(false);

  // SVG Waveform generation signals
  wavePrimaryPath = signal<string>('M 0 50 Q 62.5 15 125 50 T 250 50 T 375 50 T 500 50');
  waveTrailPath = signal<string>('M 0 50 Q 60 20 125 50 T 250 50 T 375 50 T 500 50');

  private animFrameId: number | null = null;
  private phase = 0;
  private perturbEnergy = 0;

  constructor() {
    this.startOscilloscope();
  }

  ngOnDestroy() {
    if (this.animFrameId) {
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

  copyMasterKey() {
    const key = '4A91 8E3B F721 00C8 92DE CC81 B901 developerY // ED25519';
    navigator.clipboard?.writeText(key).then(() => {
      this.keyCopied.set(true);
      setTimeout(() => this.keyCopied.set(false), 2500);
    });
  }

  submitInquiry() {
    if (this.collabForm.valid) {
      this.formSubmitted.set(true);
      setTimeout(() => {
        this.collabForm.reset({
          domain: 'spatial',
          pgpReceipt: false
        });
      }, 500);
    }
  }

  downloadPaper(id: string) {
    alert(`[Y? Lab Z Vault]: Generating cryptographic signature for ${id} manuscript... download initiated.`);
  }

  openDispatch(num: number) {
    alert(`[Dispatch Archive]: Loading verified release bundle #${num}`);
  }
}
