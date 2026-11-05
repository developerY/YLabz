import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {YLABZ_COMPANY_INFO, YLABZ_LANGUAGE_STACK} from '../data/ylabz-data';

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
              <span class="px-2 py-0.5 rounded bg-sky-50 border border-sky-100 text-sky-700 font-mono text-xs">PALO ALTO, CALIFORNIA</span>
            </div>

            <h1 class="font-display-hero text-slate-900 tracking-tight font-bold">About Y? Lab Z</h1>
            <p class="text-lg text-slate-600 max-w-3xl leading-relaxed mt-1">
              The research and development engine operating under <strong class="text-slate-900 font-semibold">ZoeWave</strong>, dedicated to technological breakthroughs across mobile ecosystems, artificial intelligence, robotics, and emerging hardware platforms with core design by <strong class="text-slate-900 font-semibold">G.N.Seven</strong>.
            </p>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col gap-12">
        <!-- Faculty & Mission Statement -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm flex flex-col gap-6">
            <span class="font-label-caps text-sky-700 tracking-wider uppercase font-semibold">FOUNDING PHILOSOPHY &amp; ETHOS</span>
            <h2 class="font-headline-lg text-slate-900 leading-tight">
              “Developing cutting edge technology. Asking questions ‘?’ relentlessly until reaching fundamental truth at ‘Z’.”
            </h2>
            <div class="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>
                Based in Palo Alto, California, <strong>Y? Lab Z</strong> acts as an incubation and engineering engine. We bridge theoretical paradigms and production reality. Rather than building speculative slides or vendor-locked silos, our projects are tested directly on real hardware: from motorcycle-inspired AI e-bikes (<strong>AshBike</strong>) to physiological intelligent clothing (<strong>ZoeWear</strong>) and visual task intelligence (<strong>PhotoDo AI</strong>).
              </p>
              <p>
                We maintain a disciplined, non-fragmented language policy: limiting our core production tools to <strong>Kotlin</strong> (Android), <strong>Swift</strong> (iOS &amp; visionOS), and <strong>Rust</strong> (Web, Robotics, Systems &amp; Quantum), powered by <strong>Python</strong> strictly as our dedicated machine learning and data science engine.
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

          <div class="lg:col-span-4 flex flex-col gap-6">
            <!-- Leadership Card -->
            <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                  <span class="material-symbols-outlined text-[24px]">engineering</span>
                </div>
                <div>
                  <h3 class="font-headline-sm text-slate-900">{{ companyInfo.leadArchitect }}</h3>
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

            <!-- Palo Alto Entity Info -->
            <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <span class="font-label-caps text-slate-400">CORPORATE &amp; MAILING CONTACT</span>
              <ul class="space-y-2.5 text-xs font-mono text-slate-600">
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[16px] mt-0.5">apartment</span>
                  <span>{{ companyInfo.name }}</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-sky-600 text-[16px] mt-0.5">location_on</span>
                  <span>{{ companyInfo.address }}</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {
  companyInfo = YLABZ_COMPANY_INFO;
  languageStack = YLABZ_LANGUAGE_STACK;
}
