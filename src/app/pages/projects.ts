import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import {YLABZ_PROJECTS, YLabZProject, DEVELOPER_Y_REPOSITORIES, DeveloperYRepo} from '../data/ylabz-data';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <div class="flex flex-col w-full text-slate-900">
      <!-- Atmospheric Ambient Backdrop Element -->
      <div class="relative w-full overflow-hidden">
        <!-- High-tech colorful subtle glow spheres over clean light canvas -->
        <div class="absolute -top-36 left-1/4 w-[700px] h-[360px] bg-gradient-to-br from-sky-400/10 via-indigo-400/5 to-transparent blur-[140px] pointer-events-none rounded-full"></div>
        <div class="absolute top-1/3 -right-24 w-[600px] h-[360px] bg-gradient-to-bl from-purple-400/10 via-rose-400/5 to-transparent blur-[140px] pointer-events-none rounded-full"></div>

        <!-- Section Header Block -->
        <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-6 relative z-10">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div class="flex flex-col max-w-3xl">
              <div class="flex flex-wrap items-center gap-2 mb-2.5">
                <span class="inline-block w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
                <span class="font-label-caps uppercase text-sky-700 font-bold tracking-widest text-xs">Y? LAB Z // INITIATIVES &amp; OPEN REPOSITORIES</span>
                <span class="font-code-badge text-purple-700 px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-200 text-[11px] font-semibold">
                  DEVELOPERY GITHUB ECOSYSTEM
                </span>
                <span class="font-code-badge text-emerald-700 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-semibold">
                  PALO ALTO, CA HQ
                </span>
              </div>
              <h1 class="font-display-hero text-slate-900 tracking-tight font-extrabold text-3xl sm:text-5xl">
                Featured Projects &amp;
                <span class="bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Source Repositories
                </span>
              </h1>
              <p class="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl leading-relaxed">
                Hardware-tested, production-grade architectures incubated at Y? Lab Z: from <strong class="text-sky-700 font-semibold">AshBike</strong> electric mobility to <strong class="text-purple-700 font-semibold">ZoeWear</strong> intelligent apparel, <strong class="text-amber-700 font-semibold">Modular MAX</strong> CUDA-replacement engines, and <strong class="text-rose-700 font-semibold">PhotoDo AI</strong>. Complete with direct GitHub repositories by developerY.
              </p>
            </div>

            <!-- Telemetry Pill / Lab Stats -->
            <div class="flex flex-row md:flex-col items-center md:items-end gap-3 shrink-0">
              <div class="flex items-center gap-4 bg-white border border-slate-200 px-4 py-3 rounded-2xl shadow-sm">
                <div class="flex flex-col text-right">
                  <span class="font-label-caps text-slate-500 text-[10px] font-bold">INCUBATED PROJECTS</span>
                  <span class="font-headline-sm text-sky-700 font-bold">{{ projects.length }} ACTIVE</span>
                </div>
                <div class="w-px h-8 bg-slate-200"></div>
                <div class="flex flex-col text-right">
                  <span class="font-label-caps text-slate-500 text-[10px] font-bold">VIRTUAL HQ</span>
                  <span class="font-headline-sm text-purple-700 font-bold">PALO ALTO</span>
                </div>
              </div>
              <a
                href="https://github.com/developerY"
                target="_blank"
                rel="noopener noreferrer"
                class="font-code-badge text-sky-700 hover:text-sky-800 flex items-center gap-1.5 transition-colors text-xs font-semibold">
                <span class="material-symbols-outlined text-[15px]">terminal</span>
                <span>github.com/developerY</span>
              </a>
            </div>
          </div>

          <!-- Search & Category Filter Section -->
          <div class="mt-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-3 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-sm">
            <!-- Interactive Search Bar -->
            <div class="relative flex-1" [formGroup]="searchForm">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <span class="material-symbols-outlined text-sky-600 text-[18px]">search</span>
              </div>
              <input
                type="text"
                formControlName="query"
                placeholder="Search 17 projects (AshBike, ZoeWear, PhotoDo, Modular MAX, Mojo, ZoeRobo)..."
                class="w-full pl-10 pr-20 py-2.5 bg-slate-50 focus:bg-white text-slate-900 text-sm placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/30 border border-slate-200 transition-all font-mono" />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center gap-1 pointer-events-none">
                <kbd class="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-500 font-mono text-[10px]">CTRL</kbd>
                <kbd class="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-500 font-mono text-[10px]">K</kbd>
              </div>
            </div>

            <!-- Filter Chips Matrix -->
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <button
                type="button"
                (click)="setCategory('all')"
                [class]="selectedCategory() === 'all'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-bold tracking-wide bg-gradient-to-r from-sky-600 to-indigo-600 text-white transition-all whitespace-nowrap shadow-sm'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200 transition-all whitespace-nowrap'">
                ALL ({{ projects.length }})
              </button>

              <button
                type="button"
                (click)="setCategory('mobility')"
                [class]="selectedCategory() === 'mobility'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-bold tracking-wide bg-gradient-to-r from-sky-600 to-indigo-600 text-white transition-all whitespace-nowrap shadow-sm'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200 transition-all whitespace-nowrap'">
                MOBILITY (ASHBIKE)
              </button>

              <button
                type="button"
                (click)="setCategory('apparel')"
                [class]="selectedCategory() === 'apparel'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-bold tracking-wide bg-gradient-to-r from-sky-600 to-indigo-600 text-white transition-all whitespace-nowrap shadow-sm'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200 transition-all whitespace-nowrap'">
                BIO-WEARABLES (ZOEWEAR)
              </button>

              <button
                type="button"
                (click)="setCategory('ai-apps')"
                [class]="selectedCategory() === 'ai-apps'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-bold tracking-wide bg-gradient-to-r from-sky-600 to-indigo-600 text-white transition-all whitespace-nowrap shadow-sm'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200 transition-all whitespace-nowrap'">
                AI &amp; MODULAR (MAX, PHOTODO)
              </button>

              <button
                type="button"
                (click)="setCategory('robotics')"
                [class]="selectedCategory() === 'robotics'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-bold tracking-wide bg-gradient-to-r from-sky-600 to-indigo-600 text-white transition-all whitespace-nowrap shadow-sm'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200 transition-all whitespace-nowrap'">
                ROBOTICS (ZOEROBO)
              </button>

              <button
                type="button"
                (click)="setCategory('health')"
                [class]="selectedCategory() === 'health'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-bold tracking-wide bg-gradient-to-r from-sky-600 to-indigo-600 text-white transition-all whitespace-nowrap shadow-sm'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200 transition-all whitespace-nowrap'">
                HEALTHCARE AI
              </button>

              <button
                type="button"
                (click)="setCategory('agency')"
                [class]="selectedCategory() === 'agency'
                  ? 'px-3.5 py-2 rounded-xl font-label-caps font-bold tracking-wide bg-gradient-to-r from-sky-600 to-indigo-600 text-white transition-all whitespace-nowrap shadow-sm'
                  : 'px-3.5 py-2 rounded-xl font-label-caps font-semibold tracking-wide bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200 transition-all whitespace-nowrap'">
                LOCAL &amp; AD TECH
              </button>
            </div>
          </div>
        </div>

        <!-- Main Project Catalog Grid with 16:9 Visual Cards in High-Tech Light Surface -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-6 w-full relative z-10">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-2.5">
              <span class="font-headline-sm text-slate-900 font-bold text-xl">Active Implementations</span>
              <span class="font-code-badge text-sky-700 font-bold bg-sky-50 border border-sky-200 px-3 py-0.5 rounded-full shadow-sm">
                {{ filteredProjects().length }} MATCHED INITIATIVES
              </span>
            </div>
            <div class="hidden sm:flex items-center gap-4 text-slate-500 font-code-badge text-xs font-semibold">
              <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> IN PRODUCTION</span>
              <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-amber-500"></span> ACTIVE R&amp;D</span>
              <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-sky-500"></span> PILOT LIVE</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            @for (p of filteredProjects(); track p.id) {
              <article
                class="group relative flex flex-col justify-between rounded-3xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-xl transition-all duration-300 overflow-hidden shadow-sm">
                
                <!-- 16:9 Photographic Header -->
                <div class="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    [src]="p.imageUrl"
                    [alt]="p.name"
                    referrerpolicy="no-referrer"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>

                  <!-- Badges overlay -->
                  <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span class="px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 font-mono text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                      <span class="material-symbols-outlined text-[16px] text-sky-600">
                        {{ p.category === 'mobility' ? 'two_wheeler' : p.category === 'apparel' ? 'checkroom' : p.category === 'ai-apps' ? 'memory' : p.category === 'robotics' ? 'smart_toy' : p.category === 'agency' ? 'campaign' : 'medication' }}
                      </span>
                      {{ p.categoryLabel }}
                    </span>

                    <span [class]="p.status === 'In Production' 
                      ? 'px-2.5 py-1 rounded-xl font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 backdrop-blur-md font-bold text-xs shadow-sm'
                      : p.status === 'Pilot Live'
                        ? 'px-2.5 py-1 rounded-xl font-mono bg-sky-50 text-sky-700 border border-sky-200 backdrop-blur-md font-bold text-xs shadow-sm'
                        : p.status === 'Alpha Prototype'
                          ? 'px-2.5 py-1 rounded-xl font-mono bg-purple-50 text-purple-700 border border-purple-200 backdrop-blur-md font-bold text-xs shadow-sm'
                          : 'px-2.5 py-1 rounded-xl font-mono bg-amber-50 text-amber-700 border border-amber-200 backdrop-blur-md font-bold text-xs shadow-sm'">
                      {{ p.status }}
                    </span>
                  </div>

                  <!-- Bottom Title Banner on Image -->
                  <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <span class="block text-xs font-mono text-sky-300 font-semibold mb-0.5">{{ p.partnerOrEcosystem }}</span>
                      <h3 class="text-2xl font-bold tracking-tight text-white font-display drop-shadow-md">
                        {{ p.name }}
                      </h3>
                    </div>
                    @if (p.badge) {
                      <span class="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white font-mono text-[11px] font-semibold border border-white/20 shadow-sm">
                        {{ p.badge }}
                      </span>
                    }
                  </div>
                </div>

                <!-- Card Body -->
                <div class="p-6 flex flex-col justify-between flex-1 gap-5">
                  <div>
                    <p class="text-sky-700 font-semibold text-sm mb-2 font-mono">
                      {{ p.tagline }}
                    </p>
                    <p class="text-slate-600 text-sm leading-relaxed">
                      {{ p.description }}
                    </p>

                    <!-- Key Engineering Highlights -->
                    <div class="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span class="font-code-badge text-slate-500 font-bold block mb-2 uppercase text-[10px] tracking-wider">
                        CORE ARCHITECTURAL HIGHLIGHTS
                      </span>
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

                  <!-- Tech Stack & Action Strip with Direct GitHub Button -->
                  <div class="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                    <div class="flex flex-wrap gap-1.5">
                      @for (t of p.techStack; track t) {
                        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 font-mono text-xs text-slate-700 font-medium">
                          <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                          {{ t }}
                        </span>
                      }
                    </div>

                    <div class="flex items-center gap-2">
                      @if (p.githubRepo) {
                        <a
                          [href]="p.githubRepo"
                          target="_blank"
                          rel="noopener noreferrer"
                          (click)="$event.stopPropagation()"
                          class="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-100 font-code-badge text-xs transition-all flex items-center gap-1.5 shadow-sm"
                          title="View direct repository on GitHub">
                          <span class="material-symbols-outlined text-[16px] text-sky-400">code</span>
                          <span>Repo</span>
                        </a>
                      }

                      <button
                        type="button"
                        (click)="openProject(p); $event.stopPropagation()"
                        class="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-medium text-xs transition-all flex items-center gap-1.5 shadow-sm">
                        <span>Inspect Blueprint</span>
                        <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            }
          </div>
        </section>

        <!-- DEDICATED DEVELOPERY OPEN-SOURCE REPOSITORIES HUB -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full relative z-10">
          <div class="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <!-- Subtle glow -->
            <div class="absolute -top-24 right-0 w-80 h-80 bg-purple-500/5 blur-3xl pointer-events-none"></div>

            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span class="font-label-caps text-sky-700 font-bold uppercase tracking-widest text-xs">OPEN-SOURCE ARSENAL</span>
                  <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[10px] font-semibold">
                    39+ REPOSITORIES
                  </span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                  developerY Open Source Repositories
                </h2>
                <p class="text-sm text-slate-600 max-w-2xl leading-relaxed">
                  Real code repositories architected by developerY. Direct links to clone, fork, and inspect production Swift 6, Jetpack Compose MAD, visionOS RealityKit, and Mojo SIMD implementations.
                </p>
              </div>

              <div class="flex items-center gap-3 shrink-0">
                <a
                  href="https://github.com/developerY"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold flex items-center gap-2 shadow-sm transition-all">
                  <span class="material-symbols-outlined text-[18px] text-sky-400">terminal</span>
                  <span>View All on GitHub</span>
                </a>
              </div>
            </div>

            <!-- Repository Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-6">
              @for (repo of openSourceRepos; track repo.name) {
                <div class="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-sky-400 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-sky-600 text-[18px]">folder_open</span>
                        <a
                          [href]="repo.url"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="font-mono text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                          {{ repo.repo }}
                        </a>
                      </div>
                      <span class="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white text-slate-700 border border-slate-200">
                        {{ repo.badge }}
                      </span>
                    </div>

                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                      {{ repo.description }}
                    </p>
                  </div>

                  <div class="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-xs">
                    <div class="flex items-center gap-2">
                      <span class="w-2.5 h-2.5 rounded-full" [style.background-color]="repo.languageColor"></span>
                      <span class="text-slate-700 text-[11px] font-medium">{{ repo.language }}</span>
                    </div>

                    <div class="flex items-center gap-2">
                      <button
                        type="button"
                        (click)="copyRepoClone(repo.url)"
                        class="p-1.5 rounded-lg bg-white hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
                        title="Copy Git Clone Command">
                        <span class="material-symbols-outlined text-[14px]">content_copy</span>
                      </button>

                      <a
                        [href]="repo.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200 text-sky-700 hover:bg-sky-100 transition-all font-semibold text-[11px] flex items-center gap-1">
                        <span>Visit</span>
                        <span class="material-symbols-outlined text-[13px]">open_in_new</span>
                      </a>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <!-- Developer Monorepo Quickstart & Package Ecosystem in High-Tech Light Surface with Dark Terminal -->
        <section class="max-w-7xl mx-auto px-6 lg:px-12 py-6 w-full relative z-10">
          <div class="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <span class="font-code-badge text-slate-600 ml-2 font-medium">terminal // developerY&#64;palo-alto:~/ylabz-monorepo</span>
              </div>

              <div class="flex flex-wrap items-center gap-2.5 font-code-badge">
                <a href="https://github.com/developerY" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 hover:border-sky-400 text-slate-700 hover:text-slate-900 transition-all font-medium text-xs">
                  <span class="material-symbols-outlined text-[16px] text-amber-500">star</span>
                  <span>github.com/developerY</span>
                </a>
                <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-medium text-xs">
                  <span class="material-symbols-outlined text-[16px] text-sky-600">location_on</span>
                  <span>Palo Alto, CA</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
              <div class="lg:col-span-8 flex flex-col gap-4 font-mono text-sm">
                <div class="flex items-center gap-2 text-slate-600">
                  <span class="text-sky-600 font-bold">❯</span>
                  <span># Clone Y? Lab Z cross-platform repository with all submodules</span>
                </div>

                <div class="flex items-center justify-between p-4 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-inner">
                  <div class="flex items-center gap-3 overflow-x-auto">
                    <span class="text-sky-400 font-bold select-none">$</span>
                    <code class="text-sky-300 font-mono text-xs sm:text-sm whitespace-nowrap font-medium">{{ cloneCommand }}</code>
                  </div>
                  <button
                    type="button"
                    (click)="copyCloneCommand()"
                    class="ml-3 px-3.5 py-1.5 rounded-lg bg-sky-950/80 hover:bg-sky-900 border border-sky-500/50 text-sky-300 hover:text-white transition-all flex items-center gap-1.5 shrink-0 shadow-sm">
                    <span class="material-symbols-outlined text-[16px]">{{ commandCopied() ? 'done' : 'content_copy' }}</span>
                    <span class="text-xs font-mono font-bold">{{ commandCopied() ? 'COPIED!' : 'COPY' }}</span>
                  </button>
                </div>

                <div class="text-slate-600 text-xs space-y-1.5 pl-2 font-mono">
                  <p class="text-slate-800 font-medium">&gt; Target platforms initialized: Android (Kotlin), iOS (Swift 6), visionOS, WearOS, watchOS</p>
                  <p>&gt; Languages linked: Kotlin 2.1, Swift 6, Rust 1.82, Mojo SIMD, Modular MAX Engine</p>
                  <p class="text-sky-700 font-semibold">&gt; Verified frameworks: Jetpack Compose (Material 3), SwiftUI, RealityKit, PyTorch 2.4</p>
                </div>
              </div>

              <!-- Package Registries -->
              <div class="lg:col-span-4 flex flex-col gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="font-label-caps text-slate-500 font-bold tracking-wider text-xs">PACKAGE REGISTRIES &amp; CDN</span>
                <button
                  type="button"
                  (click)="copyPackage('brew')"
                  class="w-full text-left flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-sky-400 hover:bg-sky-50/50 transition-all cursor-pointer shadow-sm">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-sky-600 text-[20px]">terminal</span>
                    <div class="flex flex-col">
                      <span class="font-mono text-xs text-slate-900 font-bold">brew install developerY/tap/core</span>
                      <span class="text-[10px] text-slate-500">Homebrew Formula</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                </button>

                <button
                  type="button"
                  (click)="copyPackage('cargo')"
                  class="w-full text-left flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-purple-400 hover:bg-purple-50/50 transition-all cursor-pointer shadow-sm">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-purple-600 text-[20px]">inventory_2</span>
                    <div class="flex flex-col">
                      <span class="font-mono text-xs text-slate-900 font-bold">cargo install quantum-sim-core</span>
                      <span class="text-[10px] text-slate-500">Crates.io</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                </button>

                <button
                  type="button"
                  (click)="copyPackage('pip')"
                  class="w-full text-left flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 transition-all cursor-pointer shadow-sm">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-emerald-600 text-[20px]">deployed_code</span>
                    <div class="flex flex-col">
                      <span class="font-mono text-xs text-slate-900 font-bold">pip install y-edge-tensor</span>
                      <span class="text-[10px] text-slate-500">PyPI</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- INTERACTIVE PROJECT INSPECTION MODAL / HIGH-TECH LIGHT THEME -->
      @if (activeProject()) {
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md">
          <div class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl flex flex-col text-slate-900">
            
            <!-- Modal Header Image -->
            <div class="relative w-full aspect-[21/9] sm:aspect-[16/7] overflow-hidden bg-slate-100">
              <img
                [src]="activeProject()!.imageUrl"
                [alt]="activeProject()!.name"
                referrerpolicy="no-referrer"
                class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent"></div>

              <!-- Close button -->
              <button
                type="button"
                (click)="closeProject()"
                class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center backdrop-blur-md border border-slate-200 transition-all cursor-pointer shadow-md">
                <span class="material-symbols-outlined text-[20px]">close</span>
              </button>

              <div class="absolute bottom-4 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="px-2.5 py-0.5 rounded-lg bg-sky-500 text-white font-mono text-xs font-bold shadow-sm">
                      {{ activeProject()!.categoryLabel }}
                    </span>
                    <span class="font-mono text-xs text-slate-200 font-semibold drop-shadow">
                      {{ activeProject()!.partnerOrEcosystem }}
                    </span>
                  </div>
                  <h2 class="text-3xl sm:text-4xl font-bold font-display text-white drop-shadow-md">
                    {{ activeProject()!.name }}
                  </h2>
                </div>

                <span class="px-3 py-1 rounded-xl bg-white/90 backdrop-blur-md font-mono text-xs text-slate-900 font-bold shadow-sm">
                  {{ activeProject()!.status }}
                </span>
              </div>
            </div>

            <!-- Modal Content -->
            <div class="p-6 sm:p-8 flex flex-col gap-6">
              <div>
                <h4 class="text-lg font-semibold text-sky-700 mb-2 font-mono">{{ activeProject()!.tagline }}</h4>
                <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {{ activeProject()!.description }}
                </p>
              </div>

              <!-- Key Engineering Highlights -->
              <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="font-label-caps text-sky-800 font-bold uppercase tracking-wider block mb-3 text-xs">
                  KEY ARCHITECTURAL HIGHLIGHTS
                </span>
                <ul class="space-y-2 text-sm text-slate-700">
                  @for (hl of activeProject()!.highlights; track hl) {
                    <li class="flex items-start gap-2.5">
                      <span class="material-symbols-outlined text-sky-600 text-[18px] mt-0.5 shrink-0">verified</span>
                      <span>{{ hl }}</span>
                    </li>
                  }
                </ul>
              </div>

              <!-- Live Interactive Telemetry Simulator for Project -->
              <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3 shadow-sm">
                <div class="flex items-center justify-between text-xs font-mono border-b border-slate-200 pb-2">
                  <span class="flex items-center gap-2 text-emerald-700 font-bold">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    SIMULATED LIVE TELEMETRY STREAM
                  </span>
                  <span class="text-slate-500 font-medium">NODE: PALO ALTO CLUSTER</span>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center pt-1">
                  <div class="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span class="text-[10px] text-slate-500 block uppercase font-semibold">PING LATENCY</span>
                    <span class="text-lg font-bold text-sky-700">1.8 ms</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span class="text-[10px] text-slate-500 block uppercase font-semibold">KERNEL INTEGRITY</span>
                    <span class="text-lg font-bold text-emerald-700">100% OK</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span class="text-[10px] text-slate-500 block uppercase font-semibold">BUFFER DRAIN</span>
                    <span class="text-lg font-bold text-amber-700">0.02%</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span class="text-[10px] text-slate-500 block uppercase font-semibold">PARALLEL THREADS</span>
                    <span class="text-lg font-bold text-purple-700">32 CORES</span>
                  </div>
                </div>
              </div>

              <!-- Tech Stack Badges -->
              <div>
                <span class="font-label-caps text-slate-500 block mb-2 uppercase text-xs font-bold">DEPLOYED TECH STACK</span>
                <div class="flex flex-wrap gap-2">
                  @for (tech of activeProject()!.techStack; track tech) {
                    <span class="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-medium">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>

              <!-- Action Footer with Direct GitHub Link -->
              <div class="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <a
                  [href]="activeProject()!.githubRepo || 'https://github.com/developerY'"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-800 font-mono text-xs font-semibold flex items-center gap-2 transition-all shadow-sm">
                  <span class="material-symbols-outlined text-[16px] text-sky-400">code</span>
                  <span>{{ activeProject()!.githubName ? 'Open ' + activeProject()!.githubName : 'Inspect Repo on GitHub' }}</span>
                  <span class="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>

                <button
                  type="button"
                  (click)="closeProject()"
                  class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-medium text-sm transition-all shadow-sm">
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
  openSourceRepos: DeveloperYRepo[] = DEVELOPER_Y_REPOSITORIES;

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

  copyRepoClone(repoUrl: string) {
    navigator.clipboard?.writeText(`git clone ${repoUrl}.git`).then(() => {
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
