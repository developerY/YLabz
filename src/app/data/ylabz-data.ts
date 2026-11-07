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
  imageUrl: string;
  badge?: string;
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
  imageUrl?: string;
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
  companyType: "Virtual-First Company",
  operationalModel: "Distributed Virtual R&D Lab",
  headquarters: "Virtual HQ · Palo Alto, California",
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
    language: "Mojo",
    role: "AI Systems, SIMD Kernels & Tensor Computing",
    replaces: "Python (Our Definitive Python Replacement)",
    ecosystem: ["MLIR / LLVM Compiler Stack", "SIMD Vector Register Mapping", "fn Zero-GIL Concurrency", "Zero-Cost Python Interop", "Comptime Autotuning"],
    quote: "CPython is bound by the Global Interpreter Lock (GIL) and slow loops. Mojo gives us Python's syntax with C-grade bare-metal performance, replacing Python across our AI kernels.",
    color: "#f97316"
  },
  {
    language: "MAX Engine",
    role: "Heterogeneous Graph Compiler & Serving Engine",
    replaces: "NVIDIA CUDA (Silicon Lock-in Replacement)",
    ecosystem: ["Heterogeneous Execution (NVIDIA/AMD/Apple/ARM)", "Automatic Operator Fusion", "PyTorch / ONNX Graph Lowering", "Zero-Copy Memory Layouts", "MAX Serving Sub-ms Dispatch"],
    quote: "CUDA trapped deep learning inside proprietary silicon silos. Modular MAX replaces CUDA with portable, compile-once heterogeneous acceleration across any hardware target.",
    color: "#8b5cf6"
  }
];

export interface ModularBenchmark {
  task: string;
  legacy: string;
  modular: string;
  speedup: string;
}

export interface ModularHardwareTarget {
  vendor: string;
  chips: string;
  status: string;
  speedup: string;
}

export const MODULAR_PLATFORM_DATA = {
  mojo: {
    name: "Mojo",
    creator: "Modular (Chris Lattner & Tim Davis)",
    role: "Systems Language for AI & Hardware Accelerators",
    replaces: "Python (CPython Interpreter & GIL)",
    speedup: "Up to 68,000x faster than standard Python",
    description: "Mojo is our definitive replacement for Python. It marries Python's expressive syntax and beloved dynamic ergonomics with systems-level performance, strict memory safety, and native MLIR compiler infrastructure. Mojo eliminates the two-language problem: we no longer prototype in Python and rewrite in C++/CUDA.",
    pillars: [
      {
        title: "fn vs def Dual Semantics",
        detail: "Strict static type checking, memory safety, and immutable by-default arguments without GIL overhead, while retaining def for rapid prototyping."
      },
      {
        title: "Direct MLIR & SIMD Vectorization",
        detail: "Zero-cost hardware vector register access via SIMD[DType.float32, 16], autotuning tiles, and parallel multi-core dispatch without C++."
      },
      {
        title: "Ownership & Borrowing (No GC)",
        detail: "Compile-time lifetime and ownership checking (borrowed, inout, owned) eliminating garbage collection pauses and nondeterministic latency spikes."
      },
      {
        title: "Zero-Cost Python Interop",
        detail: "Call existing Python ecosystem libraries (NumPy, SciPy, HuggingFace) via Python.import_module() with zero serialization overhead."
      }
    ],
    benchmarks: [
      { task: "Matrix Multiplication (1024x1024)", legacy: "1,284.0 ms (CPython)", modular: "0.82 ms (Mojo SIMD)", speedup: "1,565x" },
      { task: "Mandelbrot Fractal Computation", legacy: "34,210 ms (CPython)", modular: "0.50 ms (Mojo Parallel)", speedup: "68,420x" },
      { task: "INT8 Tensor Quantization Kernel", legacy: "412.0 ms (Python)", modular: "0.61 ms (Mojo Kernel)", speedup: "675x" },
      { task: "Multivariate Biosensor Stream Filter", legacy: "89.4 ms (Python)", modular: "0.14 ms (Mojo fn)", speedup: "638x" }
    ] as ModularBenchmark[],
    codeSample: {
      filename: "tensor_kernel.mojo",
      runtime: "MOJO COMPILER v25.1 // MLIR JIT",
      code: `from algorithm import vectorize, parallelize
from sys.info import simdwidthof

alias type = DType.float32
alias nelts = simdwidthof[type]()

fn fast_matmul_kernel[M: Int, N: Int, K: Int](
    C: UnsafePointer[Scalar[type]],
    A: UnsafePointer[Scalar[type]],
    B: UnsafePointer[Scalar[type]]
):
    # Highly vectorized tiled SIMD matrix multiplication in Mojo
    @parameter
    fn calc_row(m: Int):
        for k in range(K):
            @parameter
            fn calc_tile[simd_width: Int](n: Int):
                var a_val = A.load(m * K + k)
                var b_vec = B.load[width=simd_width](k * N + n)
                var c_vec = C.load[width=simd_width](m * N + n)
                C.store(m * N + n, c_vec + a_val * b_vec)
            vectorize[calc_tile, nelts](N)

    parallelize[calc_row](M, M)`
    }
  },
  max: {
    name: "MAX (Modular Accelerating eXecution)",
    creator: "Modular",
    role: "Unified Hardware-Agnostic Graph Compiler & Serving Runtime",
    replaces: "NVIDIA CUDA (Proprietary Silicon Lock-in & Hand-Rolled C++ Kernels)",
    speedup: "2.8x - 4.2x higher throughput than unoptimized CUDA/vLLM",
    description: "MAX Engine is our definitive replacement for NVIDIA CUDA. It breaks proprietary hardware lock-in by compiling deep learning graphs (from PyTorch, ONNX, and Mojo) into high-performance native machine code across NVIDIA GPUs, AMD ROCm, Apple Silicon Metal/ANE, Intel AMX, and ARM architectures.",
    pillars: [
      {
        title: "Vendor Lock-in Elimination",
        detail: "Single unified engine executing seamlessly on NVIDIA Tensor Cores, AMD ROCm/CDNA, Apple Silicon Metal/ANE, Intel AMX, and ARM CPUs/NPUs."
      },
      {
        title: "Automated Operator & Kernel Fusion",
        detail: "Replaces hand-tuned CUDA C++ boilerplate with compiler-driven graph rewriting, memory layout optimization, and zero-copy tensor buffers."
      },
      {
        title: "MAX Graph API & Mojo Extensibility",
        detail: "Write custom hardware-accelerated ops directly in Mojo rather than dealing with NVIDIA nvcc, complex CUDA C++, or brittle Triton DSL."
      },
      {
        title: "Production Serving at Scale",
        detail: "Drop-in execution for PyTorch, ONNX, and HuggingFace models with dynamic batching, paged attention, and sub-millisecond dispatch."
      }
    ],
    hardwareMatrix: [
      { vendor: "NVIDIA", chips: "H100, H200, B200, RTX 4090", status: "Native Tensor Core Execution", speedup: "3.4x vs Torch" },
      { vendor: "Apple Silicon", chips: "M2, M3, M4 Max / Ultra", status: "Unified Memory Metal / ANE", speedup: "2.9x vs CoreML" },
      { vendor: "AMD", chips: "MI300X, MI325, Radeon 7900", status: "Zero-CUDA ROCm Translation", speedup: "3.8x vs ROCm native" },
      { vendor: "Intel & ARM", chips: "Xeon Emerald, Graviton 4, Oryon", status: "SIMD AVX-512 & NEON Fusion", speedup: "4.2x vs OpenVINO" }
    ] as ModularHardwareTarget[],
    codeSample: {
      filename: "max_inference_pipeline.mojo",
      runtime: "MAX GRAPH COMPILER // HETEROGENEOUS BACKEND",
      code: `from max.engine import InferenceSession, Model
from max.graph import Graph, Tensor, Type, ops

fn build_max_graph() -> Graph:
    var graph = Graph("ylabz_vision_transformer")
    var input_tensor = graph.add_input(Type(DType.float32, 1, 3, 224, 224))
    
    # Automatic layer normalization and multi-head attention fusion
    var normalized = ops.layer_norm(input_tensor, epsilon=1e-5)
    var attention_out = ops.scaled_dot_product_attention(
        query=normalized, key=normalized, value=normalized
    )
    var logits = ops.dense(attention_out, out_features=1000)
    graph.output(logits)
    return graph

fn main() raises:
    # Compiles and deploys to local GPU/NPU with zero CUDA code
    var session = InferenceSession()
    var compiled_model = session.load(build_max_graph())
    print("MAX Engine deployed: Heterogeneous target compiled.")`
    }
  }
};

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
    status: "Active R&D",
    imageUrl: "/assets/images/coral_ashbike_1793915441529.jpg",
    badge: "G.N.Seven Carbon Chassis"
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
    status: "Pilot Live",
    imageUrl: "/assets/images/coral_zoewear_1793915441647.jpg",
    badge: "Conductive Smart Knit"
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
    status: "In Production",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-cGUs8k1pMh-_wypCoxaV01wEkoGReFg1dXRJfDY9FW3_gyiLCF4R0E7Yc-TWcIm-tPIlb9rJRQ03KAjCYEGBPZzFxZqXkSwM3Pm6P8_TjhKzqD-5RRcR8tpZvQYd2maVrxgXUkr_95sJyb4RhzvSDoXy1aCbOcXkfwdzMnuy5F1zNLLH89aFpeB_TBNLH0F5740RzvoA-AmaTtDxn4MOixwtj3pA-97hz1sb5j7O",
    badge: "Vision AI + Voice"
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
    status: "Alpha Prototype",
    imageUrl: "/assets/images/coral_zoerobo_1793915442432.jpg",
    badge: "Autonomous Physical AI"
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
    status: "Active R&D",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuChYbwLqF5_83tQqQeipBscaz6AwGKfz7qCUZ_G7_EyiuLS2uhO7XBkfpY-Xrpo0i-VCiBYucu5vwgHwVWpi1818qHvWtQQ0dqTFx124b5RPtO3jpsKPnHck-j7c-l4P8u9AbxQja4uU-B1_tta7CE0SR9iUz_zc5yD-zPHF9YeGloEFbGwTwIQUtp2IHcSY0I8l82h5rxisx4kimebW7Zn5iMPKvpDfEXvrKFmhH0V",
    badge: "Bio-Micro-Dosing Lab"
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
    status: "In Production",
    imageUrl: "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72tgoL7sUQYGh77ehUqsnXBAYoD3gHU6TKuV8IM9JPZqPrEQecTkB4P8nUJKV1TRAInWyU3ro59gGl8l75SEcfV7piO6KYu1ppncA-jyeEacdCpfn8csbg4F5274KJfShib9Ntsw_v3KQyWz0uWTWamrv_qW2atMzwzF7dCY1mGCn-gCLClyGBMDDLgmjboCh8XJz2SmmUofIYV8_5UqebCtiDTJuQ59EZaD58Kk=w1280",
    badge: "Computer Vision Medication"
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
    status: "In Production",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCwSwsKHHNdZBPaXz0yorygwsyGLz6DjP9eYEbrcJMY1bDu2-P3ovu-49q3gPiN-T21tHCcChtVV-fKasvro_z0WG15qLjwCVhh2yUFSZezbFvcBEk4IA_BsNlAc4XSOe4II3K4phFJ45TAhVCgnSx1lcaZoJQEkbiLbfdsPsf8Ld91pj8eFY2reC041MvVIv7imVyNRsauhBpm_Y6rbd5GJc_OZHVr0q6jRk7FkH",
    badge: "Multimodal Ad Engine"
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
    status: "Active R&D",
    imageUrl: "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72vC9ct-qWVWnSNA4gBp_wULOenbLYJukd2JPB8rWssPz_lEe2Y91etushF-byBlAN2AHX4VBIiEmzrdxP80MZnVJnAHCTFSet1OKO9fugLXL-K1w7zJV3NAERMCr-xeaaquSCbjoIrTEJd37V-i-xDde4lnwDcFdFKfa9GWiylz5tKCXYqZHRU45_j5pfAJMlSc9XBmn2RJLywyjeTrq2H6Uh8c1xegiwPCgXHv=w1280",
    badge: "Autonomous Indoor Sentry"
  },
  {
    id: "modular-max",
    name: "Modular MAX Engine Pipeline",
    tagline: "Hardware-Agnostic Graph Compilation Replacing CUDA",
    category: "ai-apps",
    categoryLabel: "Modular AI Systems",
    description: "Our core serving and acceleration infrastructure built on Modular MAX. Replaces proprietary NVIDIA CUDA and brittle C++ extensions with a unified graph compiler executing PyTorch and Mojo graphs seamlessly across NVIDIA, AMD ROCm, Apple Silicon Metal, and Intel AMX.",
    highlights: [
      "Zero CUDA dependency: unified compilation across heterogeneous hardware targets",
      "Automatic multi-head attention and layer norm kernel fusion",
      "Sub-millisecond model invocation latency with zero-copy shared buffers",
      "Native Mojo custom operator extensions with compile-time verification"
    ],
    techStack: ["Modular MAX Engine", "Mojo Compiler", "PyTorch 2.4", "Heterogeneous Metal/ROCm"],
    partnerOrEcosystem: "Modular & Y? LabZ AI Core",
    status: "In Production",
    imageUrl: "/assets/images/coral_modular_max_1793915442661.jpg",
    badge: "Modular MAX Silicon"
  },
  {
    id: "mojo-tensor-kernel",
    name: "Mojo SIMD Biosensor & Vision Kernels",
    tagline: "Replacing Python GIL with 68,000x SIMD Kernel Velocity",
    category: "health",
    categoryLabel: "Modular Systems",
    description: "Replacing legacy Python scripts and sluggish CPython loops with pure Mojo. Executes real-time biosensor Fourier analysis, wavelet transforms, and INT8 vision embeddings with zero garbage collector jitter and direct SIMD vector register saturation.",
    highlights: [
      "Eliminates Python Global Interpreter Lock (GIL) and runtime interpreter overhead",
      "Direct SIMD vector register tiling (16x float32 / 32x int8 vector lanes)",
      "Strict ownership and borrowing semantics preventing memory leaks without GC pauses",
      "Seamless bidirectional interop with legacy NumPy and PyTorch weights"
    ],
    techStack: ["Mojo SIMD", "Modular MAX", "MLIR / LLVM", "ZoeWear PIC Biosensors"],
    partnerOrEcosystem: "ZoeWave Bio-Lab & Modular",
    status: "Pilot Live",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo4YGQDwQgCctU4rVz4Mxqdls2j21Zgcqkyb436jyB1r3S59CIrOpgwUa27U1s_sdlfDIvYiOk2fl5JcVdLW3Slu0CIKUzKFz2svrdQJFEeFU5nOHoRtJhSR5JhL6zYqRKt5289LMaIkHBw3dGJa-NuWruX1QNkxoIgjATJL_WL4rnS8IOH26hu7bHzjmf_8KgFtge3w23eKDTLcA34P-S4EZJiJoZw-AM6kWY49j_",
    badge: "68,420x SIMD Kernel"
  },
  {
    id: "drunkwatch",
    name: "DrunkWatch",
    tagline: "Intoxication & Driving Suitability Bio-Analytics",
    category: "health",
    categoryLabel: "Watch & Wearables AI",
    description: "Directly from YLabz.com: Utilizes continuous smartwatch telemetry to assess intoxication and driving suitability. Analyzes gait velocity variations, writing style degradation, and autonomic biosensor shifts to prevent impaired transit.",
    highlights: [
      "Real-time gait and step-phase cadence anomaly detection via accelerometer/gyro",
      "Biometric correlation of pulse rate variability and peripheral skin temperature",
      "Proactive vehicle lockout alerts and emergency designated driver dispatch",
      "On-device edge inference preserving personal sobriety privacy"
    ],
    techStack: ["WearOS Core", "watchOS CoreMotion", "TensorFlow Lite", "Scikit-learn"],
    partnerOrEcosystem: "YLabZ Bio-Wearables & ZoeWave",
    status: "Active R&D",
    imageUrl: "/assets/images/coral_zoewear_1793915441647.jpg",
    badge: "Smartwatch Bio-Sensor AI"
  },
  {
    id: "lego-car",
    name: "Self-Driving LEGO® Autonomous Vehicle",
    tagline: "Smartphone as Compute Brain for Autonomous Navigation",
    category: "robotics",
    categoryLabel: "Autonomous Systems",
    description: "Featured on YLabz.com design docs: Explores creating a fully autonomous self-driving vehicle using a standard smartphone as the vision compute brain, sensor fusion hub, and motor control driver.",
    highlights: [
      "Monocular camera lane tracking and obstacle segmentation via MediaPipe",
      "Bluetooth LE motor controller bridge executing micro-steering corrections",
      "Real-time telemetry HUD streaming bounding boxes and speed curves",
      "Modular LEGO® chassis adaptable for classroom and lab research"
    ],
    techStack: ["Kotlin CameraX", "MediaPipe Vision", "BLE UART", "LEGO® Technic"],
    partnerOrEcosystem: "YLabZ Robotics & Open Hardware",
    status: "Alpha Prototype",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-cGUs8k1pMh-_wypCoxaV01wEkoGReFg1dXRJfDY9FW3_gyiLCF4R0E7Yc-TWcIm-tPIlb9rJRQ03KAjCYEGBPZzFxZqXkSwM3Pm6P8_TjhKzqD-5RRcR8tpZvQYd2maVrxgXUkr_95sJyb4RhzvSDoXy1aCbOcXkfwdzMnuy5F1zNLLH89aFpeB_TBNLH0F5740RzvoA-AmaTtDxn4MOixwtj3pA-97hz1sb5j7O",
    badge: "Smartphone Vision Brain"
  },
  {
    id: "jagur-robot",
    name: "Jag.U.R™ Utility Robot Dog",
    tagline: "Rust-Based AI/ML Assistive Quadruped Companion",
    category: "robotics",
    categoryLabel: "Physical AI",
    description: "Featured on YLabz.com: Envisions a future with intelligent quadruped companions like Jag.U.R™, a memory-safe Rust-based assistive robot dog engineered to support mobility, carry payload, and provide trusted household companionship.",
    highlights: [
      "Zero-cost abstraction inverse kinematics running on pure Rust micro-kernels",
      "Edge LiDAR and depth vision SLAM for rugged indoor and outdoor terrain navigation",
      "Voice intent recognition and natural companion follow-me tracking",
      "Open-source modular firmware with distributed ROS2 bridge"
    ],
    techStack: ["Rust Robotics RS", "ROS2", "PyTorch Edge", "C++ Kinematics"],
    partnerOrEcosystem: "YLabZ Physical AI & ZoeRobo",
    status: "Active R&D",
    imageUrl: "/assets/images/coral_zoerobo_1793915442432.jpg",
    badge: "Rust AI Assistive Dog"
  },
  {
    id: "fapa",
    name: "Facial Aware Personalized Advertising (FAPA)",
    tagline: "Privacy-Preserving On-Device In-Store Experience",
    category: "agency",
    categoryLabel: "Computer Vision",
    description: "Featured on YLabz.com: Reimagines commercial spaces by dynamically tailoring in-venue displays based on real-time facial feature analysis, emotions, and fashion styles, ensuring strict privacy through instantaneous zero-storage anonymization.",
    highlights: [
      "On-device facial landmark and valence estimation running in under 15ms",
      "Zero PII retention: imagery is processed entirely in volatile GPU cache and discarded",
      "Contextual style and apparel classification driving tailored promotion playlists",
      "Compliance with global biometric privacy frameworks and SOC2 standards"
    ],
    techStack: ["TensorFlow Pipeline", "Core ML", "SHAP / LIME", "OpenCV"],
    partnerOrEcosystem: "Swift AI & YLabZ Ad Tech",
    status: "Pilot Live",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxSBNZkYOC6iwJExEB1sCzXMVbxaJdaJGsFmradi6YrNEbZv8YtdtxbXKMNGIC1KxxBdmCx4xYJmNglPJo5LdxwIxWvbKtaNmiDqpVm7Ebh4RfaHBeIE5xINx3ANV9W7BHoV9xfiZ-jvyTZtMKBZ7zeWUK_8zZ8yGad5DSZFefA6qt5HRLa-co4U6QA49Twu2f0SWn_zaA-VQpN0IcOLjY6SvuRmVV-cl9SDw_4D1n",
    badge: "Privacy-First Vision Ad"
  },
  {
    id: "soda-fountain",
    name: "AI/ML Cinematic Soda Fountain",
    tagline: "Genre-Tuned Flavor Personalization for Theaters",
    category: "ai-apps",
    categoryLabel: "ML Experience",
    description: "Directly from YLabz.com: Reimagines movie theater concessions with an AI-driven dispenser that synthesizes custom flavor profiles based on upcoming film genres, sensory preferences, and real-time beverage telemetry.",
    highlights: [
      "Predictive flavor mix curves mapped to cinematic genres (Sci-Fi, Horror, Thriller)",
      "Smart micro-valve fluid actuators measuring syrup milliliters with high accuracy",
      "Companion mobile pre-order sync directly from movie ticket booking apps",
      "Interactive touch terminal providing real-time nutritional ingredient transparency"
    ],
    techStack: ["Python ML Pipeline", "Scikit-learn RF", "PyTables HDF5", "Android Touch"],
    partnerOrEcosystem: "YLabZ Consumer AI & ZoeWave",
    status: "Alpha Prototype",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuChYbwLqF5_83tQqQeipBscaz6AwGKfz7qCUZ_G7_EyiuLS2uhO7XBkfpY-Xrpo0i-VCiBYucu5vwgHwVWpi1818qHvWtQQ0dqTFx124b5RPtO3jpsKPnHck-j7c-l4P8u9AbxQja4uU-B1_tta7CE0SR9iUz_zc5yD-zPHF9YeGloEFbGwTwIQUtp2IHcSY0I8l82h5rxisx4kimebW7Zn5iMPKvpDfEXvrKFmhH0V",
    badge: "Cinema Taste Engine"
  },
  {
    id: "small-biz-ai",
    name: "Saving Small Businesses with AI/ML",
    tagline: "Foot-Traffic Analytics & Hyper-Localized Customer Insights",
    category: "agency",
    categoryLabel: "Local Business AI",
    description: "Featured on YLabz.com: Bridges enterprise-grade data intelligence to neighborhood brick-and-mortar storefronts. Translates sensor foot traffic and purchase timings into actionable merchandising suggestions and customer loyalty boosts.",
    highlights: [
      "In-store traffic density and dwell heatmaps generated without invasive cameras",
      "Predictive inventory stocking alerts anticipating neighborhood event rushes",
      "Automated personalized outreach for regular patrons with localized incentives",
      "Lightweight dashboard requiring zero data science expertise"
    ],
    techStack: ["Pandas", "Scikit-learn KNN", "Plotly Visuals", "Docker AWS"],
    partnerOrEcosystem: "YLabZ Economic AI & Swift AI",
    status: "Pilot Live",
    imageUrl: "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72tgoL7sUQYGh77ehUqsnXBAYoD3gHU6TKuV8IM9JPZqPrEQecTkB4P8nUJKV1TRAInWyU3ro59gGl8l75SEcfV7piO6KYu1ppncA-jyeEacdCpfn8csbg4F5274KJfShib9Ntsw_v3KQyWz0uWTWamrv_qW2atMzwzF7dCY1mGCn-gCLClyGBMDDLgmjboCh8XJz2SmmUofIYV8_5UqebCtiDTJuQ59EZaD58Kk=w1280",
    badge: "Local Business Engine"
  },
  {
    id: "appliance-nutritionist",
    name: "AI/ML Appliance Nutritionist",
    tagline: "Smart Refrigerator & Oven Connected Nutrition",
    category: "health",
    categoryLabel: "Smart Home AI",
    description: "Directly from YLabz.com: Integrates with smart kitchen appliances (refrigerators, induction tops, ovens) to track ingredient shelf-life, analyze caloric composition, and synthesize real-time recipes aligned with metabolic goals.",
    highlights: [
      "Computer vision shelf-scan recognizing produce ripeness and expiration timestamps",
      "Dynamic recipe generator minimizing food waste by prioritizing near-expiry items",
      "Continuous synchronization with wearable caloric expenditure and glycemic logs",
      "Automated grocery replenishment manifests exported directly to fulfillment services"
    ],
    techStack: ["MediaPipe Vision", "Scikit-Learn", "SHAP Explanations", "Matter Protocol"],
    partnerOrEcosystem: "ZoeWear Health & YLabZ AI",
    status: "Active R&D",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo4YGQDwQgCctU4rVz4Mxqdls2j21Zgcqkyb436jyB1r3S59CIrOpgwUa27U1s_sdlfDIvYiOk2fl5JcVdLW3Slu0CIKUzKFz2svrdQJFEeFU5nOHoRtJhSR5JhL6zYqRKt5289LMaIkHBw3dGJa-NuWruX1QNkxoIgjATJL_WL4rnS8IOH26hu7bHzjmf_8KgFtge3w23eKDTLcA34P-S4EZJiJoZw-AM6kWY49j_",
    badge: "Smart Kitchen Health"
  },
  {
    id: "ai-app-gen",
    name: "AI-Generated Mobile Application",
    tagline: "Autonomous GenAI App Deployed to Google Play Store",
    category: "ai-apps",
    categoryLabel: "Autonomous Code Gen",
    description: "Documented in YLabz article 'AI Fixed Coding': An experimental proof of concept demonstrating an end-to-end native Android application generated with conversational LLMs (ChatGPT) and successfully published to the Google Play Store with minimal human intervention.",
    highlights: [
      "Automated prompt-to-Kotlin code generation using modern Jetpack Compose paradigms",
      "Zero boilerplate authoring: models, view models, and UI generated in unified session",
      "Empirical benchmark on LLM code reliability and compilation friction",
      "Public Play Store release validating autonomous software deployment feasibility"
    ],
    techStack: ["ChatGPT LLM", "Jetpack Compose", "Kotlin", "Google Play Console"],
    partnerOrEcosystem: "YLabZ Labs & Medium @zoewave",
    status: "In Production",
    imageUrl: "/public/assets/aistudio/Image_1_bf091442.png",
    badge: "Published on Play Store"
  }
];

export const YLABZ_MOBILE_FIRSTS = [
  {
    platform: "Android Jetpack Compose",
    milestones: [
      "Wrote one of the first articles explaining Jetpack Compose to the community",
      "Published one of the very first Jetpack Compose applications on the Google Play Store",
      "Won 2 out of 4 challenges in the first-ever official Jetpack Compose developer challenge",
      "Invited nationwide speaker and educator for Jetpack Compose, Kotlin Coroutines, and Kotlin Flow"
    ],
    highlight: "2/4 Challenge Winner • Play Store Pioneer"
  },
  {
    platform: "Apple iOS SwiftUI & visionOS",
    milestones: [
      "Began active production development with Swift while the language was in early beta",
      "Authored pioneering technical articles detailing SwiftUI, SwiftData, and visionOS spatial architecture",
      "Participated in an intensive full day of visionOS training at Apple Main Campus (Cupertino HQ)",
      "Apple reviewed YLabz visionOS spatial projects and educational teaching materials",
      "Conducted developer training on Combine and Swift Structured Concurrency upon public release"
    ],
    highlight: "Apple HQ Trained • Beta Swift Pioneer"
  }
];

export const YLABZ_ARCHITECTURE_COMPARISON = [
  {
    pattern: "Model-View-Controller (MVC)",
    testability: "Low",
    reactivity: "None",
    stateIntegrity: "Mutable",
    verdict: "Traditional division of Model, View, and Controller. The Controller rapidly turns into an unmanageable catch-all for business logic, making isolated unit testing complex and cumbersome."
  },
  {
    pattern: "Model-View-Presenter (MVP)",
    testability: "High",
    reactivity: "Low",
    stateIntegrity: "Mutable",
    verdict: "Separates the Presenter from the View to enable independent unit testing. However, MVP is not inherently reactive and lacks built-in support for asynchronous reactive streams."
  },
  {
    pattern: "Model-View-ViewModel (MVVM)",
    testability: "High",
    reactivity: "Medium",
    stateIntegrity: "Mutable",
    verdict: "Introduces ViewModel with unidirectional data binding. However, mutable state can complicate debugging. Crucially, as noted by YLabz: MVVM clashes with modern SwiftData (which binds directly to Views, making ViewModels redundant or problematic)."
  },
  {
    pattern: "Model-View-Intent (MVI) — YLabz Choice",
    testability: "Maximum",
    reactivity: "Native",
    stateIntegrity: "Immutable",
    verdict: "YLabz's chosen paradigm. Combines unidirectional data flow with an immutable intent channel (sealed UiState & UiEvent). State changes are modeled as deterministic data objects, simplifying temporal tracking and testing."
  }
];

export const YLABZ_CLEAN_ANDROID_STACK = [
  { category: "UI & Presentation", tool: "Jetpack Compose (Material 3)", detail: "Declarative UI with 100% component previews" },
  { category: "Architecture Pattern", tool: "Clean Architecture + MVI", detail: "Sealed UiState and UiEvent intent channels" },
  { category: "Concurrency", tool: "Kotlin Coroutines & Flow", detail: "Structured concurrency and reactive data streams" },
  { category: "Dependency Injection", tool: "Hilt", detail: "Scaffolded for ViewModels, Navigation, Room, and Tests" },
  { category: "Local Persistence", tool: "Room DB", detail: "Type-safe SQLite abstraction with Flow observation" },
  { category: "Networking", tool: "Ktor", detail: "Lightweight multiplatform HTTP client with Kotlinx Serialization" },
  { category: "Image Loading", tool: "Coil", detail: "Fast, memory-efficient image pipeline built on Kotlin coroutines" },
  { category: "Dependency Governance", tool: "Version Catalog (TOML) + BOM", detail: "Strict bill-of-materials dependency alignment" },
  { category: "Automated Testing", tool: "JUnit5 + Turbine + MockK", detail: "Unit, Flow, and Compose UI testing with Hilt test rules" },
  { category: "CI/CD & Maintenance", tool: "GitHub Actions + Renovate", detail: "Automated dependency updates, KtLint, and Detekt" }
];

export const YLABZ_MOBILE_ML_ARSENAL = [
  {
    ecosystem: "Android ML Arsenal",
    tools: [
      { name: "ML Kit", role: "Rapid Integration", detail: "Turnkey APIs for face detection, OCR, and barcode reading; limited customization." },
      { name: "Firebase ML", role: "Cloud & Edge Sync", detail: "Tightly integrated with Firebase for image labeling and language translation." },
      { name: "TensorFlow Lite", role: "High-Performance Control", detail: "Custom model execution with full control over INT8 quantization and GPU delegates." },
      { name: "MediaPipe", role: "Pipeline Orchestration", detail: "Versatile modular framework built on TF Lite for gesture, pose, and spatial meshes." },
      { name: "Gemini Nano & AI Core", role: "Private On-Device LLM", detail: "Hardware-accelerated on-device AI runtime featured on Pixel 8 Pro with local privacy." }
    ]
  },
  {
    ecosystem: "Apple iOS ML Arsenal",
    tools: [
      { name: "Core ML", role: "Unified On-Device Bridge", detail: "Direct Apple Neural Engine (ANE) hardware acceleration with zero cloud latency." },
      { name: "Create ML", role: "Model Synthesis", detail: "Drag-and-drop model training directly within Xcode, exporting native .mlmodel artifacts." }
    ]
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
    keyTakeaway: "Decouple business models into pure language abstractions; map declarative UI paradigms 1:1 between Jetpack Compose and SwiftUI.",
    imageUrl: "/public/assets/aistudio/Image_1_bf091442.png"
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
    keyTakeaway: "The winning paradigm avoids sluggish JavaScript bridges in favor of direct C++ JSI host objects or Kotlin Multiplatform native artifacts.",
    imageUrl: "/public/assets/aistudio/Image_3_51c9b753.png"
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
    keyTakeaway: "Modularize by feature; keep ViewModels lean and UI state immutable via Kotlin StateFlow.",
    imageUrl: "/assets/images/coral_frontier_lab_1793915443237.jpg"
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
    keyTakeaway: "Do not ship FP32 weights to mobile phones. Quantize to INT8 with post-training calibration to drop latency by 80% with negligible loss in accuracy.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo4YGQDwQgCctU4rVz4Mxqdls2j21Zgcqkyb436jyB1r3S59CIrOpgwUa27U1s_sdlfDIvYiOk2fl5JcVdLW3Slu0CIKUzKFz2svrdQJFEeFU5nOHoRtJhSR5JhL6zYqRKt5289LMaIkHBw3dGJa-NuWruX1QNkxoIgjATJL_WL4rnS8IOH26hu7bHzjmf_8KgFtge3w23eKDTLcA34P-S4EZJiJoZw-AM6kWY49j_"
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
    keyTakeaway: "Spatial interfaces must respect human eye biomechanics; never lock windows rigidly to head orientation.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-cGUs8k1pMh-_wypCoxaV01wEkoGReFg1dXRJfDY9FW3_gyiLCF4R0E7Yc-TWcIm-tPIlb9rJRQ03KAjCYEGBPZzFxZqXkSwM3Pm6P8_TjhKzqD-5RRcR8tpZvQYd2maVrxgXUkr_95sJyb4RhzvSDoXy1aCbOcXkfwdzMnuy5F1zNLLH89aFpeB_TBNLH0F5740RzvoA-AmaTtDxn4MOixwtj3pA-97hz1sb5j7O"
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
    keyTakeaway: "Use asynchronous hardware interrupts rather than continuous polling loops to achieve sub-0.2% battery drain per hour.",
    imageUrl: "/assets/images/coral_zoewear_1793915441647.jpg"
  },
  {
    id: "art-07",
    title: "Why Mojo & MAX Replace Python and CUDA in the Y? Lab Z Stack",
    publication: "Modular & YLabZ AI Systems",
    category: "AI/ML",
    summary: "The architectural rationale behind abandoning the legacy two-language problem. How Mojo replaces Python's GIL with MLIR SIMD performance, and how Modular MAX replaces proprietary CUDA vendor lock-in.",
    readTime: "14 min read",
    date: "2025 // Q2",
    url: "https://medium.com/@zoewave",
    tags: ["Mojo", "Modular MAX", "CUDA Alternative", "Python Replacement", "MLIR"],
    keyTakeaway: "Stop prototyping in Python and rewriting in CUDA. Mojo and MAX deliver Python-tier readability with bare-metal C/CUDA execution speed across heterogeneous hardware.",
    imageUrl: "/assets/images/coral_modular_max_1793915442661.jpg"
  },
  {
    id: "art-08",
    title: "Benchmarking Modular MAX: Zero-Lock-In Heterogeneous Inference",
    publication: "YLabZ Computing Core",
    category: "Cross-Platform",
    summary: "Empirical benchmark suite measuring latency and memory efficiency of Modular MAX vs NVIDIA CUDA, Apple Metal, and AMD ROCm on identical transformer graphs.",
    readTime: "12 min read",
    date: "2025 // Q1",
    url: "https://medium.com/@zoewave",
    tags: ["MAX Engine", "CUDA", "Apple Silicon", "AMD ROCm", "Hardware Agnostic"],
    keyTakeaway: "MAX graph compilation delivers 2.8x to 4.2x higher throughput by auto-fusing memory-bound kernels, completely eliminating custom C++ CUDA boilerplate.",
    imageUrl: "/assets/images/coral_modular_max_1793915442661.jpg"
  },
  {
    id: "art-09",
    title: "Modern Android App in Action: Complete MVI Architecture",
    publication: "Medium (@zoewave / YLabZ)",
    category: "Android",
    summary: "Featured on YLabz.com: Transforming a base Android app into a scalable, feature-modularized architecture using Jetpack Compose (100% Previews), Hilt, Room, Coroutines/Flow, and CI/CD with automated testing.",
    readTime: "11 min read",
    date: "2024 // Q3",
    url: "https://zoewave.medium.com/modern-android-app-e104693946e4",
    tags: ["MVI", "Compose Material 3", "Hilt", "Room", "Turbine", "CI/CD"],
    keyTakeaway: "Unidirectional data flow with an immutable intent channel (MVI) simplifies temporal tracking and delivers bulletproof unit testing.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCwSwsKHHNdZBPaXz0yorygwsyGLz6DjP9eYEbrcJMY1bDu2-P3ovu-49q3gPiN-T21tHCcChtVV-fKasvro_z0WG15qLjwCVhh2yUFSZezbFpvcBEk4IA_BsNlAc4XSOe4II3K4phFJ45TAhVCgnSx1lcaZoJQEkbiLbfdsPsf8Ld91pj8eFY2reC041MvVIv7imVyNRsauhBpm_Y6rbd5GJc_OZHVr0q6jRk7FkH"
  },
  {
    id: "art-10",
    title: "The Architecture Dilemma: SwiftData vs MVVM",
    publication: "YLabZ Architectural Briefing",
    category: "iOS",
    summary: "Published on YLabz.com: Why Apple's introduction of SwiftData created architectural friction for traditional MVVM developers, and how understanding data-binding paradigms helps iOS developers future-proof their apps.",
    readTime: "13 min read",
    date: "2024 // Q4",
    url: "https://ylabz.com/platforms/mobile/architecture",
    tags: ["SwiftData", "MVVM", "SwiftUI", "Paul Hegarty", "Mohammad Azam"],
    keyTakeaway: "SwiftData binds natively to SwiftUI views; shoehorning ViewModels creates unnecessary state synchronization layers.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-cGUs8k1pMh-_wypCoxaV01wEkoGReFg1dXRJfDY9FW3_gyiLCF4R0E7Yc-TWcIm-tPIlb9rJRQ03KAjCYEGBPZzFxZqXkSwM3Pm6P8_TjhKzqD-5RRcR8tpZvQYd2maVrxgXUkr_95sJyb4RhzvSDoXy1aCbOcXkfwdzMnuy5F1zNLLH89aFpeB_TBNLH0F5740RzvoA-AmaTtDxn4MOixwtj3pA-97hz1sb5j7O"
  },
  {
    id: "art-11",
    title: "Demystifying Mobile Machine Learning: Multi-Tool Approach",
    publication: "Medium (@zoewave / YLabZ)",
    category: "AI/ML",
    summary: "From YLabz.com: There is no one-size-fits-all ML tool. A pragmatic breakdown comparing ML Kit, Firebase ML, TensorFlow Lite, MediaPipe, Gemini Nano with AI Core, and Apple Core ML/Create ML.",
    readTime: "10 min read",
    date: "2024 // Q2",
    url: "https://zoewave.medium.com/ml-on-android-1ecc451625a6",
    tags: ["MediaPipe", "Gemini Nano", "AI Core", "Core ML", "TFLite", "On-Device"],
    keyTakeaway: "Use ML Kit/Core ML for rapid turnkey vision; pick TF Lite/Mojo when low-level INT8 quantization and custom hardware delegates are vital.",
    imageUrl: "/assets/images/coral_modular_max_1793915442661.jpg"
  },
  {
    id: "art-12",
    title: "AI Fixed Coding: GenAI Mobile App Built by LLM",
    publication: "Medium (@zoewave / YLabZ)",
    category: "AI/ML",
    summary: "Featured on YLabz.com: An empirical case study on building and releasing a production-grade native Android app to the Google Play Store using generative AI (ChatGPT) with very little manual intervention.",
    readTime: "8 min read",
    date: "2024 // Q3",
    url: "https://medium.com/@zoewave/ai-fixed-coding-9076db6a4a19",
    tags: ["GenAI", "ChatGPT", "Jetpack Compose", "Play Store", "AI Coding"],
    keyTakeaway: "Modern AI coding tools eliminate redundant boilerplate, allowing individual architects to develop complete native Android and iOS apps in parallel.",
    imageUrl: "/public/assets/aistudio/Image_1_bf091442.png"
  },
  {
    id: "art-13",
    title: "KMP vs Truly Native: Why GenAI Changes the Equation",
    publication: "YLabZ Mobile Architecture",
    category: "Cross-Platform",
    summary: "From YLabz.com: 'With GenAI we can build both the native iOS and Android app before most can figure out KMP Gradle ... LoL'. Why learning the native ecosystems of both platforms beats wrestling cross-platform abstractions.",
    readTime: "9 min read",
    date: "2025 // Q1",
    url: "https://ylabz.com/platforms/mobile/architecture/kmp-rn",
    tags: ["KMP", "Native Dev", "GenAI", "Gradle", "Swift SPM", "Two Native Apps"],
    keyTakeaway: "Rather than taking on the cognitive load and build tooling overhead of KMP, building truly native on both platforms delivers uncompromised 1st-party performance and UX.",
    imageUrl: "/assets/images/coral_ashbike_1793915441529.jpg"
  }
];
