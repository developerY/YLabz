import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <!-- Top Navigation Header -->
    <header class="fixed top-0 left-0 right-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_1px_8px_rgba(15,23,42,0.04)]">
      <div class="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        <!-- Brand Wordmark Zone -->
        <a routerLink="/" class="flex items-center gap-3.5 shrink-0 group">
          <div class="w-9 h-9 rounded-lg bg-sky-50 border border-sky-200/60 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
            <span class="material-symbols-outlined text-sky-600 text-[20px]">science</span>
          </div>
          <div class="flex flex-col">
            <span class="font-headline-sm text-slate-900 tracking-tight font-semibold">Y? Lab Z</span>
            <span class="font-label-caps text-sky-600 tracking-widest uppercase font-semibold text-[10px]">v2.5 // FRONTIER LAB</span>
          </div>
        </a>

        <!-- 4-5 Navigation Links -->
        <nav class="hidden xl:flex items-center gap-1 font-medium text-sm">
          <a
            routerLink="/"
            routerLinkActive="bg-sky-600 text-white shadow-sm"
            [routerLinkActiveOptions]="{exact: true}"
            class="px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
            Overview
          </a>
          <a
            routerLink="/platforms"
            routerLinkActive="bg-sky-600 text-white shadow-sm"
            class="px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
            Platforms
          </a>
          <a
            routerLink="/projects"
            routerLinkActive="bg-sky-600 text-white shadow-sm"
            class="px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
            Projects &amp; Blueprints
          </a>
          <a
            routerLink="/research"
            routerLinkActive="bg-sky-600 text-white shadow-sm"
            class="px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
            Research &amp; Insights
          </a>
          <a
            routerLink="/about"
            routerLinkActive="bg-sky-600 text-white shadow-sm"
            class="px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
            About &amp; Updates
          </a>
        </nav>

        <!-- Action & Identity Zone -->
        <div class="flex items-center gap-3 shrink-0">
          <a
            href="https://github.com/developerY"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/70 text-slate-700 hover:text-slate-900 border border-slate-200 transition-all font-code-badge text-xs">
            <span class="material-symbols-outlined text-[16px] text-sky-600">terminal</span>
            <span>gh/developerY</span>
          </a>

          <a
            routerLink="/research"
            class="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium text-sm tracking-wide transition-all shadow-[0_2px_10px_rgba(2,132,199,0.25)] flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px]">hub</span>
            <span>Collaborate</span>
          </a>

          <div class="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-sm">
            <span class="material-symbols-outlined text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Outlet -->
    <main class="w-full pt-20 bg-slate-50 min-h-screen">
      <router-outlet></router-outlet>
    </main>

    <!-- Light Laboratory Footer -->
    <footer class="w-full bg-white border-t border-slate-200 mt-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          <!-- Laboratory Identity -->
          <div class="lg:col-span-2 flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="w-7 h-7 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center">
                <span class="material-symbols-outlined text-sky-600 text-[16px]">deployed_code</span>
              </div>
              <span class="font-headline-sm text-slate-900 font-semibold">Y? Lab Z</span>
              <span class="font-label-caps text-xs px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-200 font-semibold">CRYO-RIG 04</span>
            </div>

            <p class="text-sm text-slate-600 max-w-sm leading-relaxed">
              High-performance computing laboratory architecting spatial computing substrates, neural runtime fabrics, distributed ledgers, and quantum algorithm simulations.
            </p>

            <div class="flex items-center gap-4 pt-1">
              <div class="flex items-center gap-2 font-code-badge text-slate-500">
                <span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                <span>SYSTEM: OPTIMAL (12.4 mK)</span>
              </div>
              <div class="font-code-badge text-slate-500">Q-FIDELITY: 99.982%</div>
            </div>
          </div>

          <!-- Frontier Platforms Links -->
          <div class="flex flex-col gap-2">
            <span class="font-label-caps text-slate-900 tracking-wider uppercase mb-1 font-semibold text-xs">Frontier Platforms</span>
            <a routerLink="/platforms" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">Spatial XR &amp; visionOS</a>
            <a routerLink="/platforms" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">Machine Learning &amp; PyTorch</a>
            <a routerLink="/platforms" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">Quantum Simulation (Qiskit)</a>
            <a routerLink="/platforms" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">Distributed Consensus</a>
          </div>

          <!-- Laboratory Links -->
          <div class="flex flex-col gap-2">
            <span class="font-label-caps text-slate-900 tracking-wider uppercase mb-1 font-semibold text-xs">Laboratory</span>
            <a routerLink="/projects" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">Active Blueprints</a>
            <a routerLink="/research" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">Lewis Thomas Archive</a>
            <a routerLink="/research" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">Technical Whitepapers</a>
            <a routerLink="/projects" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">Benchmarking Suites</a>
          </div>

          <!-- Governance & Telemetry -->
          <div class="flex flex-col gap-1.5 font-code-badge">
            <span class="font-label-caps text-slate-900 tracking-wider uppercase mb-1 font-semibold text-xs">Governance &amp; Telemetry</span>
            <div class="text-slate-500 text-xs">ISO/IEC 27001 COMPLIANT</div>
            <div class="text-slate-500 text-xs">NIST PQC ROUND 4 READY</div>
            <div class="text-slate-500 text-xs">ZERO-TRUST ENCLAVE</div>
            <div class="text-sky-700 font-semibold mt-1 text-xs">LAB_ID: YZ-QX-8819</div>
          </div>
        </div>

        <div class="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div class="flex items-center gap-2">
            <span>© 2025 Y? Lab Z Research Group. All rights reserved.</span>
          </div>
          <div class="flex items-center gap-6 font-code-badge">
            <span class="hover:text-slate-800 transition-colors cursor-pointer">SECURITY PROTOCOL v4</span>
            <span class="hover:text-slate-800 transition-colors cursor-pointer">ETHICS MANIFESTO</span>
            <span class="hover:text-sky-600 transition-colors cursor-pointer">SYSTEM STATUS: NOMINAL</span>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class App {}

