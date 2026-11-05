import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="flex flex-col w-full">
      <div class="relative w-full overflow-hidden border-b border-slate-200">
        <div class="absolute -top-40 left-1/3 w-[720px] h-[360px] bg-sky-200/40 blur-[130px] pointer-events-none rounded-full"></div>

        <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-12 relative z-10">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <span class="font-code-badge text-sky-700 font-semibold">Y? LAB Z</span>
              <span class="text-slate-300 font-code-badge">/</span>
              <span class="font-code-badge text-slate-500 uppercase tracking-wider font-medium">About &amp; Updates</span>
            </div>

            <h1 class="font-display-hero text-slate-900 tracking-tight font-bold">About Y? Lab Z</h1>
            <p class="text-lg text-slate-600 max-w-3xl leading-relaxed mt-1">
              An independent frontier computing laboratory founded to dissolve artificial boundaries between fundamental natural science research and production engineering.
            </p>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col gap-12">
        <!-- Faculty & Mission Statement -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm flex flex-col gap-6">
            <span class="font-label-caps text-sky-700 tracking-wider uppercase font-semibold">FOUNDING THESIS</span>
            <h2 class="font-headline-lg text-slate-900 leading-tight">
              “The question mark ‘?’ is our beginning. The final letter ‘Z’ is our arrival.”
            </h2>
            <div class="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>
                Most technology organizations partition their labor: one group explores speculative academic papers while another optimizes product telemetry. At Y? Lab Z, every investigator is both a mathematical theorist and a systems engineer.
              </p>
              <p>
                From evaluating Qiskit quantum Hamiltonian matrices to fine-tuning C++ NDK SIMD loops for visionOS and WearOS, our focus remains on reproducible, verifiable computing. Inspired by Dr. Lewis Thomas's philosophy of scientific fragmentation, we publish continuous micro-blueprints rather than gatekeeping knowledge behind paywalls.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-label-caps text-slate-400">RESEARCH MODEL</span>
                <p class="font-headline-sm text-slate-900 text-sm mt-1">Open Fragment RFCs</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-label-caps text-slate-400">HARDWARE ACCESS</span>
                <p class="font-headline-sm text-slate-900 text-sm mt-1">Direct NPU &amp; Cryo-Rig</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-label-caps text-slate-400">LICENSE ETHOS</span>
                <p class="font-headline-sm text-slate-900 text-sm mt-1">Permissive MIT / Apache 2</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-4 flex flex-col gap-6">
            <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                  <span class="material-symbols-outlined text-[24px]">person</span>
                </div>
                <div>
                  <h3 class="font-headline-sm text-slate-900">developerY</h3>
                  <span class="text-xs text-slate-500 font-mono">Lead Research Architect</span>
                </div>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                Specializing in zero-serialization cross-platform runtimes, spatial physics compositors, and quantum lattice cryptosystems.
              </p>
              <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="font-code-badge text-slate-400">STATUS</span>
                <span class="font-code-badge text-emerald-600 font-semibold flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ACTIVE SPRINTS
                </span>
              </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <span class="font-label-caps text-slate-400">COMPLIANCE &amp; ACCREDITATIONS</span>
              <ul class="space-y-2.5 text-xs font-mono text-slate-600">
                <li class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[16px]">verified</span>
                  <span>ISO/IEC 27001 Compliant</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[16px]">verified</span>
                  <span>NIST PQC Round 4 Ready</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[16px]">verified</span>
                  <span>Zero-Trust Enclave Architect</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[16px]">verified</span>
                  <span>OpenXR &amp; Metal 3 Contributor</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}
