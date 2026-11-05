export interface YLabZProject {
  id: string;
  name: string;
  tagline: string;
  category: 'mobility' | 'health' | 'apparel' | 'robotics' | 'agency' | 'ai-apps';
  categoryLabel: string;
  description: string;
  highlights: string[];
  techStack: string[];
  partnerOrEcosystem: string;
  status: 'In Production' | 'Active R&D' | 'Alpha Prototype' | 'Pilot Live';
}

export interface YLabZArticle {
  id: string;
  title: string;
  publication: string;
  category: 'Android' | 'iOS' | 'Cross-Platform' | 'AI/ML' | 'visionOS';
  summary: string;
  readTime: string;
  date: string;
  url: string;
  tags: string[];
  keyTakeaway: string;
}

export interface TechStackPillar {
  language: string;
  role: string;
  replaces: string;
  ecosystem: string[];
  quote: string;
  color: string;
}

export const YLABZ_COMPANY_INFO = {
  name: "Y? LabZ",
  tagline: "New Ideas for a New World",
  motto: "Asking questions '?' till the end 'Z'",
  headquarters: "Palo Alto, California",
  address: "PO Box 51402, Palo Alto, CA 94303 US",
  email: "developer@ylabz.com",
  parentOrg: "ZoeWave R&D Engine",
  designPartner: "G.N.Seven Design",
  leadArchitect: "Siamak (Ash) Ashrafi",
  leadTitle: "CTO @ ZoeWave & Lead Architect @ Y? LabZ",
  leadAccreditations: "JavaOne Rock Star • Amazon Code Ninja • Patent Holder • International Speaker",
  mediumUrl: "https://medium.com/@zoewave",
  githubUrl: "https://github.com/developerY"
};

export const YLABZ_LANGUAGE_STACK: TechStackPillar[] = [
  {
    language: "Kotlin",
    role: "Native Android & WearOS Ecosystem",
    replaces: "Java (Modern Standard)",
    ecosystem: ["Jetpack Compose (Material 3)", "Hilt Dependency Injection", "Room DB Persistence", "Kotlin Coroutines & Flow", "WearOS Health Tiles"],
    quote: "Java is obsolete; Kotlin is the definitive standard for resilient, expressive Android architecture.",
    color: "#0284c7"
  },
  {
    language: "Swift",
    role: "iOS, watchOS & Apple Vision Pro (visionOS)",
    replaces: "Objective-C (The Future)",
    ecosystem: ["SwiftUI & Apple HIG", "SwiftData & Model Context", "Swift 6 Strict Concurrency", "watchOS Extended Background", "RealityKit 4 & Polyspatial"],
    quote: "Objective-C is legacy; Swift and SwiftUI deliver memory-safe, declarative spatial and mobile experiences.",
    color: "#0284c7"
  },
  {
    language: "Rust",
    role: "Web Backend, Systems, Robotics & Quantum",
    replaces: "C / C++ (Memory-Safe Modern Replacement)",
    ecosystem: ["Axum High-Throughput Web", "Robotics RS Kinematics", "Substrate Blockchain Runtime", "PyO3 Quantum Simulation Bridge", "WASM Micro-kernels"],
    quote: "C and C++ lack safety guarantees. Rust powers our deterministic zero-cost abstractions across hardware boundaries.",
    color: "#d97706"
  },
  {
    language: "Python",
    role: "Dedicated AI/ML Engine & Data Science",
    replaces: "Designated Scripting Engine for Machine Learning",
    ecosystem: ["PyTorch 2.4 & TorchCompile", "TensorFlow & TFLite", "Scikit-Learn & Tree-Lite", "MediaPipe & CoreML Export", "SHAP / LIME Interpretability"],
    quote: "Python remains our dedicated computational medium for neural exploration, data pipelining, and edge quantization.",
    color: "#059669"
  }
];

export const YLABZ_PROJECTS: YLabZProject[] = [
  {
    id: "ashbike",
    name: "AshBike",
    tagline: "Motorcycle-Inspired AI-Optimized E-Bike",
    category: "mobility",
    categoryLabel: "Smart Mobility",
    description: "Revolutionizing the electric mobility market by marrying aggressive motorcycle-inspired ergonomics with real-time AI motor torque curves, battery thermal optimization, and integrated telemetry.",
    highlights: [
      "Dynamic motor torque modulation using on-bike sensor arrays",
      "Cell-level predictive thermal runaway & range forecasting",
      "Low-latency companion telemetry on Android & iOS",
      "Custom carbon chassis designed with G.N.Seven"
    ],
    techStack: ["Kotlin NDK", "Swift CoreBluetooth", "Rust Embedded", "Python PyTorch"],
    partnerOrEcosystem: "ZoeWave Mobility & G.N.Seven",
    status: "Active R&D"
  },
  {
    id: "zoewear",
    name: "ZoeWear",
    tagline: "Physiological Intelligent Clothing (PIC)",
    category: "apparel",
    categoryLabel: "Bio-Wearables",
    description: "Pioneering the intersection of haute couture and medical-grade diagnostics. Knitted conductive fabric pathways feed continuous PPG, ECG, and surface electromyography into ultra-low-power microcontrollers.",
    highlights: [
      "Continuous micro-current biosensing woven into everyday textiles",
      "Zero-chafing conductive thread arrays with washability up to 100 cycles",
      "Edge-quantized biosensor anomaly inference (INT8)",
      "Zero-serialization flatbuffer sync across WearOS & watchOS"
    ],
    techStack: ["WearOS Health Tiles", "watchOS CoreMotion", "TensorFlow Lite", "BLE DMA"],
    partnerOrEcosystem: "ZoeWave Health & G.N.Seven",
    status: "Pilot Live"
  },
  {
    id: "photodo",
    name: "PhotoDo AI",
    tagline: "Visual & Voice Powered Intelligent Task Engine",
    category: "ai-apps",
    categoryLabel: "AI Productivity",
    description: "An intuitive mobile assistant that translates physical snapshots, voice memos, and napkin sketches into structured actionable workflows, automated budget estimates, and localized partner matches.",
    highlights: [
      "Instant optical task extraction via on-device Vision Transformers",
      "Whisper voice memo summarization with contextual deadline extraction",
      "Offline-first sync using Room DB and SwiftData equivalents",
      "Zero cloud leakage: sensitive personal items inferenced locally"
    ],
    techStack: ["Jetpack Compose", "SwiftUI", "MediaPipe", "Core ML", "TFLite"],
    partnerOrEcosystem: "Y? LabZ Mobile & ZoeWave",
    status: "In Production"
  },
  {
    id: "zoerobo",
    name: "ZoeRobo",
    tagline: "Adaptive AI Robotics for Real-World Environments",
    category: "robotics",
    categoryLabel: "Physical AI",
    description: "Autonomous robotic platforms engineered for healthcare facilities, residential perimeter security, and assisted living care. Designed to navigate complex dynamic human spaces with sub-centimeter accuracy.",
    highlights: [
      "Real-time LiDAR and stereo SLAM running on edge Rust kernels",
      "Dynamic human pose prediction and gentle obstacle avoidance",
      "Secure encrypted telemetry uplink with zero latency degradation",
      "Fail-safe mechanical interlocks and physical sensor redundancies"
    ],
    techStack: ["Rust Robotics RS", "Python ROS2", "PyTorch Vision", "C++ Direct"],
    partnerOrEcosystem: "ZoeWave Robotics R&D",
    status: "Alpha Prototype"
  },
  {
    id: "hummingbird",
    name: "Hummingbird Fuel Rx",
    tagline: "AI-Powered Personalized Micro-Dosing",
    category: "health",
    categoryLabel: "Digital Therapeutics",
    description: "Targeted digital therapeutics and metabolic optimization. Leverages multivariate biosensor streams to formulate tailored micro-nutritional and compound dosage intervals in real time.",
    highlights: [
      "Circadian-phase aligned biological intake recommendations",
      "Continuous glucose & metabolic response forecasting curves",
      "HIPAA-compliant encrypted enclave local storage",
      "Clinical-grade biometric correlation engines"
    ],
    techStack: ["Kotlin Flow", "Swift Concurrency", "Scikit-Learn", "SHAP"],
    partnerOrEcosystem: "ZoeWave Bio-Lab",
    status: "Active R&D"
  },
  {
    id: "rxdigita",
    name: "RxDigita",
    tagline: "Intelligent Patient Medication Management",
    category: "health",
    categoryLabel: "Healthcare AI",
    description: "Streamlining medication adherence, interaction conflict alerts, and patient engagement through intuitive on-device visual pill verification and timely conversational guidance.",
    highlights: [
      "Visual pill verification via mobile macro camera and Core ML",
      "Real-time pharmacology conflict matrix cross-referencing",
      "Family and caregiver permissioned sync channels",
      "Seamless integration with electronic health record standards (FHIR)"
    ],
    techStack: ["Android Jetpack Compose", "iOS SwiftData", "Core ML", "FHIR API"],
    partnerOrEcosystem: "ZoeWave Health Systems",
    status: "In Production"
  },
  {
    id: "swift-ai",
    name: "Swift AI Ad Agency",
    tagline: "Data-Driven Hyper-Personalized Marketing Engine",
    category: "agency",
    categoryLabel: "Generative AI",
    description: "Harnessing multimodal generative models and audience telemetry from YLabZ, Google Labs, and Meta to construct hyper-personalized marketing and campaign deployment strategies.",
    highlights: [
      "Algorithmic audience segmentation with zero-cookie compliance",
      "Real-time creative asset variation generation and A/B benchmarking",
      "Predictive conversion curve modeling based on live market signals",
      "Integrated analytics console tracking campaign ROAS"
    ],
    techStack: ["Python Gemini API", "Axum Rust Backend", "TypeScript", "Next/Angular"],
    partnerOrEcosystem: "Swift AI & YLabZ",
    status: "In Production"
  },
  {
    id: "micro-drone",
    name: "Autonomous Security Micro-Drone",
    tagline: "Autonomous Indoor Home Survey & Anomaly Sentry",
    category: "robotics",
    categoryLabel: "Autonomous Systems",
    description: "Ultralight residential sentry drone engineered to launch autonomously when premises are unoccupied, scanning room-by-room, mapping spatial environments, and dispatching encrypted alerts.",
    highlights: [
      "Optical flow and acoustic obstacle avoidance in tight indoor corridors",
      "Thermal sensor verification of anomalous heat or water leaks",
      "Whisper-quiet ducted propellers with auto-docking inductive charging",
      "Zero telemetry leakage: footage stays securely encrypted"
    ],
    techStack: ["Rust RS", "C++ NDK", "PyTorch Micro", "BLE Mesh"],
    partnerOrEcosystem: "Y? LabZ Drone Works",
    status: "Active R&D"
  }
];

export const YLABZ_ARTICLES: YLabZArticle[] = [
  {
    id: "art-01",
    title: "Android & iOS Dev in One Thought: Architectural Parallels",
    publication: "YLabZ on Medium",
    category: "Cross-Platform",
    summary: "Why thinking about Android and iOS simultaneously produces cleaner abstractions. A direct comparison of Kotlin vs Swift, RoomDB vs SwiftData, and Jetpack Compose vs SwiftUI.",
    readTime: "8 min read",
    date: "2025 // Q1",
    url: "https://medium.com/@zoewave",
    tags: ["Kotlin", "Swift", "Architecture", "Compose", "SwiftUI"],
    keyTakeaway: "Decouple business models into pure language abstractions; map declarative UI paradigms 1:1 between Jetpack Compose and SwiftUI."
  },
  {
    id: "art-02",
    title: "Foresight into the Future of Mobile Development",
    publication: "YLabZ Technical Briefing",
    category: "Cross-Platform",
    summary: "An expansive analysis of mobile ecosystem trajectories, evaluating why monolithic cross-platform frameworks are yielding to native declarative runtimes with shared business libraries.",
    readTime: "12 min read",
    date: "2024 // Q4",
    url: "https://medium.com/@zoewave",
    tags: ["Mobile Future", "KMP", "Swift Concurrency", "Zero-Serialization"],
    keyTakeaway: "The winning paradigm avoids sluggish JavaScript bridges in favor of direct C++ JSI host objects or Kotlin Multiplatform native artifacts."
  },
  {
    id: "art-03",
    title: "Modern Android Development (MAD) Reference Manual",
    publication: "YLabZ Engineering Core",
    category: "Android",
    summary: "Transforming messy Android legacy codebases into clean, modularized masterpieces using Jetpack Compose, Material Design 3, Hilt for dependency injection, and Room DB.",
    readTime: "15 min read",
    date: "2024 // Q3",
    url: "https://ylabz.com",
    tags: ["MAD", "Jetpack Compose", "Hilt", "RoomDB", "Architecture"],
    keyTakeaway: "Modularize by feature; keep ViewModels lean and UI state immutable via Kotlin StateFlow."
  },
  {
    id: "art-04",
    title: "Edge AI & Machine Learning on Mobile: From Python to On-Device",
    publication: "YLabZ AI Research",
    category: "AI/ML",
    summary: "How we train vision and sensor models in PyTorch and Scikit-Learn, then lower weights to INT8 and deploy seamlessly using TensorFlow Lite, Core ML, and ExecuTorch.",
    readTime: "10 min read",
    date: "2024 // Q3",
    url: "https://medium.com/@zoewave",
    tags: ["PyTorch", "CoreML", "TFLite", "INT8 Quantization", "NPU"],
    keyTakeaway: "Do not ship FP32 weights to mobile phones. Quantize to INT8 with post-training calibration to drop latency by 80% with negligible loss in accuracy."
  },
  {
    id: "art-05",
    title: "Apple Vision Pro & visionOS: RealityKit 4 & Polyspatial",
    publication: "YLabZ Spatial Lab",
    category: "visionOS",
    summary: "Hands-on guide to volumetric scene graphs, eye gaze intent mapping, and sub-20ms motion-to-photon latency on visionOS and Apple Silicon.",
    readTime: "9 min read",
    date: "2024 // Q2",
    url: "https://medium.com/@zoewave",
    tags: ["visionOS", "RealityKit", "Spatial Computing", "SwiftUI", "Polyspatial"],
    keyTakeaway: "Spatial interfaces must respect human eye biomechanics; never lock windows rigidly to head orientation."
  },
  {
    id: "art-06",
    title: "WearOS & watchOS Micro-Heartbeat Synchrony",
    publication: "ZoeWave Bio-Engineering",
    category: "Android",
    summary: "Capturing real-time PPG and biometric telemetry on smartwatches without draining the battery. Deep dive into Bluetooth LE DMA and Micro-RTOS daemons.",
    readTime: "11 min read",
    date: "2024 // Q1",
    url: "https://medium.com/@zoewave",
    tags: ["WearOS", "watchOS", "BLE", "Biosensors", "Battery Optimization"],
    keyTakeaway: "Use asynchronous hardware interrupts rather than continuous polling loops to achieve sub-0.2% battery drain per hour."
  }
];
