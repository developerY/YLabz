import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <!-- High-Tech Laboratory Light Top Navigation Header -->
    <header class="fixed top-0 left-0 right-0 w-full z-50 bg-white/90 backdrop-blur-2xl border-b border-slate-200/90 shadow-sm">
      <div class="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        <!-- Brand Wordmark Zone -->
        <a routerLink="/" class="flex items-center gap-3.5 shrink-0 group">
          <div class="h-12 px-2.5 py-1 rounded-xl overflow-hidden border border-slate-200 bg-white flex items-center justify-center group-hover:border-sky-500 shadow-xs transition-all">
            <img src="/assets/aistudio/unnamed_44bf9102.jpg" alt="Y? Labz official logo" referrerpolicy="no-referrer" class="h-full w-auto object-contain" />
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-2">
              <span class="font-headline-sm text-slate-900 tracking-tight font-bold group-hover:text-sky-600 transition-colors">Y? Lab Z</span>
              <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-sky-50 text-sky-700 border border-sky-200">v2.5</span>
            </div>
            <span class="font-label-caps text-slate-500 tracking-widest uppercase font-semibold text-[10px] flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              FRONTIER R&amp;D · PALO ALTO, CA
            </span>
          </div>
        </a>

        <!-- High-Tech Navigation Links -->
        <nav class="hidden xl:flex items-center gap-1.5 font-medium text-sm p-1 rounded-2xl bg-slate-100/90 border border-slate-200/80">
          <a
            routerLink="/"
            routerLinkActive="bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-sm font-semibold"
            [routerLinkActiveOptions]="{exact: true}"
            class="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-all">
            Overview
          </a>
          <a
            routerLink="/platforms"
            routerLinkActive="bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-sm font-semibold"
            class="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-all">
            Platforms
          </a>
          <a
            routerLink="/projects"
            routerLinkActive="bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-sm font-semibold"
            class="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-all flex items-center gap-1.5">
            <span>Projects &amp; Blueprints</span>
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          </a>
          <a
            routerLink="/research"
            routerLinkActive="bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-sm font-semibold"
            class="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-all">
            Research &amp; Insights
          </a>
          <a
            routerLink="/about"
            routerLinkActive="bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-sm font-semibold"
            class="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-all">
            About &amp; Updates
          </a>
        </nav>

        <!-- Action & Identity Zone -->
        <div class="flex items-center gap-3 shrink-0">
          <a
            href="https://github.com/developerY"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 hover:text-white border border-slate-700 shadow-sm hover:shadow-[0_0_15px_rgba(14,165,233,0.25)] transition-all font-code-badge text-xs">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="material-symbols-outlined text-[16px] text-sky-400">terminal</span>
            <span class="font-semibold">gh/developerY</span>
          </a>

          <a
            routerLink="/projects"
            class="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 hover:brightness-105 text-white font-medium text-sm tracking-wide transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 active:scale-95">
            <span class="material-symbols-outlined text-[18px]">rocket_launch</span>
            <span class="font-semibold">Repositories</span>
          </a>
        </div>
      </div>

      <!-- Mobile Sub-Navigation Bar -->
      <div class="xl:hidden flex items-center justify-around border-t border-slate-200 bg-white/95 px-4 py-2 text-xs font-mono overflow-x-auto">
        <a routerLink="/" routerLinkActive="text-sky-600 font-bold" [routerLinkActiveOptions]="{exact: true}" class="px-2 py-1 text-slate-600 hover:text-slate-900">Overview</a>
        <a routerLink="/platforms" routerLinkActive="text-sky-600 font-bold" class="px-2 py-1 text-slate-600 hover:text-slate-900">Platforms</a>
        <a routerLink="/projects" routerLinkActive="text-sky-600 font-bold" class="px-2 py-1 text-slate-600 hover:text-slate-900">Projects (17)</a>
        <a routerLink="/research" routerLinkActive="text-sky-600 font-bold" class="px-2 py-1 text-slate-600 hover:text-slate-900">Research (13)</a>
        <a routerLink="/about" routerLinkActive="text-sky-600 font-bold" class="px-2 py-1 text-slate-600 hover:text-slate-900">About (PA CA)</a>
      </div>
    </header>

    <!-- Main Content Outlet on Crisp High-Tech Canvas -->
    <main class="w-full pt-20 xl:pt-20 bg-[#f8fafc] min-h-screen text-slate-900 tech-grid-bg">
      <router-outlet></router-outlet>
    </main>

    <!-- High-Tech Precision Light Footer -->
    <footer class="w-full bg-white border-t border-slate-200 mt-20 relative overflow-hidden">
      <!-- Subtle ambient footer glow in light mode -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-48 bg-gradient-to-t from-sky-100/60 via-violet-50/40 to-transparent blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          <!-- Laboratory Identity -->
          <div class="lg:col-span-2 flex flex-col gap-3.5">
            <div class="flex items-center gap-3">
              <div class="h-10 px-2.5 py-1 rounded-xl overflow-hidden border border-slate-200 bg-white flex items-center justify-center shadow-xs">
                <img src="/assets/aistudio/unnamed_44bf9102.jpg" alt="Y? Labz official logo" referrerpolicy="no-referrer" class="h-full w-auto object-contain" />
              </div>
              <span class="font-headline-sm text-slate-900 font-bold">Y? Lab Z</span>
              <span class="font-label-caps text-xs px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 font-semibold">
                VIRTUAL HQ · PALO ALTO, CA
              </span>
            </div>

            <p class="text-sm text-slate-600 max-w-sm leading-relaxed">
              Virtual-first high performance laboratory headquartered in Palo Alto, California. Asking questions “?” until reaching fundamental truth at “Z” across spatial computing, physical AI, bio-wearables, and modular hardware-agnostic tensor compilation.
            </p>

            <div class="flex flex-wrap items-center gap-3 pt-2">
              <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-code-badge text-xs">
                <span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                <span class="text-sky-700 font-semibold">ONLINE: 12.4 mK CRYO</span>
              </div>
              <div class="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-sky-700 font-code-badge text-xs font-semibold">
                FIDELITY: 99.982%
              </div>
            </div>
          </div>

          <!-- Frontier Platforms Links -->
          <div class="flex flex-col gap-2.5">
            <span class="font-label-caps text-slate-900 tracking-wider uppercase mb-1 font-semibold text-xs flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              Frontier Platforms
            </span>
            <a routerLink="/platforms" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">Android (Kotlin MVI)</a>
            <a routerLink="/platforms" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">iOS &amp; visionOS (Swift 6)</a>
            <a routerLink="/platforms" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">Modular MAX (CUDA Alternative)</a>
            <a routerLink="/platforms" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">Mojo SIMD (Python Replacement)</a>
            <a routerLink="/platforms" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">Rust Systems &amp; Quantum</a>
          </div>

          <!-- Laboratory Links -->
          <div class="flex flex-col gap-2.5">
            <span class="font-label-caps text-slate-900 tracking-wider uppercase mb-1 font-semibold text-xs flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
              Active Blueprints
            </span>
            <a routerLink="/projects" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">AshBike E-Mobility</a>
            <a routerLink="/projects" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">ZoeWear Bio-Apparel</a>
            <a routerLink="/projects" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">PhotoDo AI Multimodal</a>
            <a routerLink="/projects" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">ZoeRobo Physical AI</a>
            <a routerLink="/projects" class="text-sm text-slate-600 hover:text-sky-600 transition-colors">All 17 Projects</a>
          </div>

          <!-- Source Available Repositories & Governance -->
          <div class="flex flex-col gap-2 font-code-badge">
            <span class="font-label-caps text-slate-900 tracking-wider uppercase mb-1 font-semibold text-xs flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
              Source Available Hub
            </span>
            <a href="https://github.com/developerY" target="_blank" rel="noopener noreferrer" class="text-slate-600 hover:text-sky-600 transition-colors flex items-center gap-1.5 text-xs">
              <span class="material-symbols-outlined text-[14px]">code</span>
              <span>github.com/developerY</span>
            </a>
            <a href="https://medium.com/@zoewave" target="_blank" rel="noopener noreferrer" class="text-slate-600 hover:text-sky-600 transition-colors flex items-center gap-1.5 text-xs">
              <span class="material-symbols-outlined text-[14px]">article</span>
              <span>medium.com/&#64;zoewave</span>
            </a>
            <div class="text-slate-500 text-xs mt-1">PO Box 51402, Palo Alto, CA 94303</div>
            <div class="text-sky-700 font-semibold text-xs">LAB_ID: YZ-PA-94303</div>
          </div>
        </div>

        <div class="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div class="flex items-center gap-2">
            <span>© 2025 Y? Lab Z · Virtual Company · Palo Alto, CA. All rights reserved.</span>
          </div>
          <div class="flex items-center gap-6 font-code-badge">
            <a href="https://github.com/developerY" target="_blank" rel="noopener noreferrer" class="hover:text-slate-800 transition-colors">DEVELOPER_Y REPOSITORIES</a>
            <span class="hover:text-slate-800 transition-colors">ZOEWAVE R&amp;D</span>
            <span class="text-sky-700 font-semibold">LAB HIGH-TECH STATUS: ONLINE</span>
          </div>
        </div>

        <!-- AI Co-Build Notice -->
        <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center text-center">
          <p class="text-xs text-slate-500 max-w-3xl leading-relaxed">
            AI-assisted development in progress. Content may contain inaccuracies (including AI hallucinations) as we co-build, review, and continuously improve our websites.
          </p>
        </div>
      </div>
    </footer>
  `
})
export class App {}
