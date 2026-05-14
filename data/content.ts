export const personalInfo = {
  name: 'Mert Türedü',
  title: 'Senior iOS Engineer',
  email: 'mertturedu.thedev@gmail.com',
  phone: '+90 (539) 246 95 51',
  birthday: 'November 21, 1999',
  location: 'Istanbul, Turkey',
  appsPublished: 35,
  avatar: '/assets/images/my-avatar.png',
  cvUrl: '/MertTureduCV.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/mertthedev',
    github: 'https://github.com/MertTheTopDev',
    medium: 'https://medium.com/@mertthedev',
  },
};

export const stats = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Apps Shipped', value: '35+' },
  { label: 'Users Reached', value: '8M+' },
  { label: 'Engineers Led', value: '7' },
];

export const aboutText = [
  "I'm a <strong>Senior iOS Engineer with 8+ years of experience</strong> building and scaling <strong>AI-powered mobile applications</strong>, <strong>real-time rendering pipelines</strong>, and <strong>monetization systems</strong>. I've led a cross-functional team of <strong>7 engineers</strong>, delivered apps to <strong>8M+ users</strong>, reduced crash rates by up to <strong>38%</strong>, and shipped <strong>35+ production apps</strong> as primary or solo iOS engineer.",
  "Throughout my career I've worked on <strong>AI-powered solutions</strong>, <strong>real-time video processing</strong>, <strong>scanning and automation tools</strong>, <strong>subscription-based platforms</strong>, and <strong>crypto & social platforms</strong> — gaining deep hands-on experience in turning ambitious ideas into <strong>scalable, high-performance digital products</strong>.",
  "If you're looking to <strong>build, modernize, or scale an iOS product</strong>, or want to add <strong>AI-powered features</strong> to your mobile app, I'd love to connect.",
];

export const services = [
  {
    icon: 'smartphone',
    title: 'iOS Engineering',
    description: 'End-to-end App Store products with Swift, SwiftUI, and UIKit — from architecture design to production release.',
  },
  {
    icon: 'cpu',
    title: 'On-Device AI',
    description: 'Core ML, Vision Framework, Metal compute shaders, and OpenAI API integrations for real-time intelligent features.',
  },
  {
    icon: 'layers',
    title: 'Cross-Platform',
    description: 'Flutter and React Native solutions for teams that need iOS and Android from a single, maintainable codebase.',
  },
  {
    icon: 'trending-up',
    title: 'Monetization & Growth',
    description: 'RevenueCat, StoreKit 2, A/B testing, and unified analytics pipelines that turn installs into sustainable revenue.',
  },
];

export const techStack = [
  {
    category: 'Languages',
    color: 'blue',
    items: ['Swift', 'Objective-C', 'TypeScript', 'JavaScript (ES6+)', 'Python', 'Dart'],
  },
  {
    category: 'iOS Frameworks',
    color: 'purple',
    items: [
      'SwiftUI', 'UIKit', 'AVFoundation', 'Core ML', 'ARKit', 'Metal', 'Vision',
      'Core Data', 'SwiftData', 'StoreKit 2', 'SceneKit', 'WidgetKit',
      'App Intents', 'Live Activities', 'APNs', 'Accessibility',
    ],
  },
  {
    category: 'Concurrency & Reactive',
    color: 'cyan',
    items: ['async/await', 'Actors', 'Combine', 'RxSwift', 'GCD', 'OperationQueue'],
  },
  {
    category: 'Cross-Platform',
    color: 'emerald',
    items: ['Flutter', 'React Native', 'React', 'Redux'],
  },
  {
    category: 'Tools & CI/CD',
    color: 'amber',
    items: ['Xcode', 'Fastlane', 'GitHub Actions', 'Jenkins', 'Instruments', 'SPM', 'CocoaPods', 'SwiftLint', 'TestFlight', 'TDD'],
  },
  {
    category: 'Security',
    color: 'rose',
    items: ['OAuth 2.0 / OIDC', 'JWT', 'TLS', 'Certificate Pinning', 'Keychain', 'App Transport Security'],
  },
  {
    category: 'SDKs & Services',
    color: 'violet',
    items: ['RevenueCat', 'Adapty', 'Firebase', 'AppsFlyer', 'Mixpanel', 'OneSignal', 'Crashlytics', 'Stripe', 'Google Mobile Ads', 'ATT'],
  },
  {
    category: 'Architecture',
    color: 'sky',
    items: ['MVVM', 'VIPER', 'Clean Architecture', 'Protocol-Oriented', 'Dependency Injection', 'SOLID', 'gRPC', 'REST', 'WebSocket'],
  },
];

export const languages = [
  { name: 'Turkish', level: 'Native', width: 100, color: 'blue' },
  { name: 'English', level: 'C1 · Advanced', width: 85, color: 'purple' },
  { name: 'German', level: 'Elementary', width: 30, color: 'emerald' },
  { name: 'Arabic', level: 'Beginner', width: 15, color: 'amber' },
];

export const education = [
  {
    school: 'Near East University',
    degree: 'B.Sc. Computer Engineering',
    period: '2014 — 2018',
    detail: 'Nicosia, Cyprus · GPA: 3.66 / 4.00 · Full English curriculum · C1 Proficiency',
  },
  {
    school: 'Sevkiye Özel Fen Lisesi',
    degree: 'Science High School',
    period: '2014 — 2018',
    detail: 'Science-focused curriculum, strengthening analytical thinking and problem-solving fundamentals.',
  },
];

export const experience = [
  {
    company: 'IzySoft',
    role: 'Senior iOS Developer',
    period: 'Jan 2025 — Present',
    type: 'Full-Time · Remote',
    description:
      'Architected and shipped 6 production iOS apps (XScanner, CVMaker) with SwiftUI, MVVM, ARKit, Vision, and Metal. Cut time-to-market by 30% via Fastlane/GitHub Actions CI/CD pipelines while sustaining 99.5%+ crash-free sessions through Crashlytics-driven QA. Shipped end-to-end monetization stack with RevenueCat, StoreKit 2, Firebase, and AppsFlyer.',
  },
  {
    company: 'Going Merry',
    role: 'Senior iOS Developer',
    period: 'Oct 2024 — Dec 2024',
    type: 'Contract · Remote',
    description:
      'Reduced p95 frame latency from 48ms → 19ms on iPhone 12 by porting CoreImage filter chain to custom Metal compute shaders, eliminating 3 redundant texture copies — enabling 60 FPS sustained throughput on RadCam\'s 4M MAU base while cutting thermal throttling incidents 42%. Cut render-pipeline crash rate 30% by introducing GPU resource lifecycle ownership around AVCaptureVideoDataOutput, resolving 2 race conditions in MTLCommandBuffer reuse.',
  },
  {
    company: 'Boby.ai',
    role: 'Lead Mobile Engineer',
    period: 'Mar 2024 — Oct 2024',
    type: 'Full-Time · Remote',
    description:
      'Led a cross-functional team of 4 engineers across 3 AI-powered mobile apps (iOS + Flutter); established PR gate standards, ran weekly architecture reviews, and onboarded 2 engineers to native iOS workflows, sustaining 98% crash-free sessions. Engineered a Core Data persistence layer validated across 6+ iPhone models and automated Fastlane/Jenkins pipelines, cutting production crash rate by 38%.',
  },
  {
    company: 'Moseiki',
    role: 'Senior iOS Developer',
    period: 'Feb 2023 — Jan 2024',
    type: 'Full-Time · Remote',
    description:
      'Architected the gRPC API layer (chosen over REST for bidirectional streaming) and AVFoundation media pipelines (AVAssetReader/Writer for memory-bounded processing) for an AI-powered social platform with NFT/crypto features — delivering 360+ dynamic screens at sub-200ms latency. Drove automated test coverage to 85% (XCTest, XCUITest, snapshot testing) across a VIPER codebase; mentored 2 mid-level engineers.',
  },
  {
    company: 'Crypto Pro',
    role: 'iOS Developer',
    period: 'Apr 2021 — Aug 2022',
    type: 'Full-Time · Remote',
    description:
      'Delivered real-time trading flows with WebSocket and Combine for 10K+ daily active traders, cutting UI drop-off 25% through stream backpressure handling. Built watchOS background-sync pipelines using GCD and BackgroundTasks, boosting sync reliability 40% with sub-200ms latency.',
  },
  {
    company: 'GreenTomato Media',
    role: 'Mobile Developer',
    period: 'May 2020 — Mar 2021',
    type: 'Full-Time · Remote',
    description:
      'Built and optimized the IAP funnel for Truth or Dare Dirty (React Native, Redux), lifting paywall conversion 22% via A/B-tested onboarding variants and unifying iOS + Android revenue reporting with MongoDB-backed funnel analytics.',
  },
  {
    company: 'Ratel',
    role: 'Mobile Developer',
    period: 'Feb 2018 — Mar 2020',
    type: 'Full-Time · On-Site (Denizli)',
    description:
      'Built MVVM-based UI components in Objective-C and integrated REST APIs with SQL data layers for a corporate fintech client, reducing reported crashes 25% over a 2-year on-site engagement.',
  },
];

export const skills = [
  { name: 'iOS Development (Swift / SwiftUI)', level: 100 },
  { name: 'CI/CD (Fastlane, GitHub Actions)', level: 90 },
  { name: 'On-Device AI / Core ML / Metal', level: 88 },
  { name: 'Flutter / React Native', level: 70 },
  { name: 'Android Development', level: 60 },
];

export const certifications = [
  { name: 'Kodeco — Advanced iOS Development', year: '2022' },
  { name: 'edX Harvard CS50x — Introduction to Computer Science', year: '2020' },
];

export interface ProjectDetail {
  description: string;
  techStack: string[];
  highlights: string[];
  appStoreLink: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  link: string;
  details: ProjectDetail;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'XScanner',
    category: 'iOS App',
    tags: ['ios-apps'],
    image: '/assets/images/projects/project-1.jpg',
    link: 'https://apps.apple.com/tr/app/xscanner-pdf-dosya-taray%C4%B1c%C4%B1/id1553261625',
    details: {
      description:
        'Professional PDF scanner and document management app with real-time OCR, intelligent edge detection, and cloud sync. One of 6 production apps shipped at IzySoft with a focus on performance and stability.',
      techStack: ['Swift', 'SwiftUI', 'Vision Framework', 'Core Data', 'Metal', 'RevenueCat', 'Firebase', 'Fastlane'],
      highlights: ['99.5%+ crash-free sessions', 'Real-time edge detection via Vision Framework', 'Full RevenueCat monetization stack', '30% faster time-to-market via CI/CD'],
      appStoreLink: 'https://apps.apple.com/tr/app/xscanner-pdf-dosya-taray%C4%B1c%C4%B1/id1553261625',
    },
  },
  {
    id: 2,
    title: 'Radcam — Creative Photo Filters',
    category: 'iOS App',
    tags: ['ios-apps'],
    image: '/assets/images/projects/project-2.jpg',
    link: 'https://apps.apple.com/tr/app/radcam-creative-photo-filters/id1079944301',
    details: {
      description:
        'Real-time creative camera app serving 4M MAU. Ported CoreImage filter chain to custom Metal compute shaders, reducing p95 frame latency from 48ms → 19ms and enabling sustained 60 FPS while cutting thermal throttling incidents by 42%.',
      techStack: ['Swift', 'SwiftUI', 'UIKit', 'Metal', 'Core Image', 'AVFoundation', 'SPM', 'Fastlane'],
      highlights: ['4M Monthly Active Users', 'p95 latency: 48ms → 19ms via Metal shaders', '42% reduction in thermal throttling', '30% crash rate reduction over 3-month rollout'],
      appStoreLink: 'https://apps.apple.com/tr/app/radcam-creative-photo-filters/id1079944301',
    },
  },
  {
    id: 3,
    title: 'AI Song Generator — Mozart',
    category: 'iOS & Android',
    tags: ['ios-apps', 'android-apps'],
    image: '/assets/images/projects/project-3.jpg',
    link: 'https://apps.apple.com/tr/app/ai-song-generator-mozart/id6502656704',
    details: {
      description:
        'AI-powered music generation app for creating original songs. Led as Lead Mobile Engineer at Boby.ai, managing a cross-functional team of 4 engineers with PR gate standards and weekly architecture reviews.',
      techStack: ['Swift', 'SwiftUI', 'Flutter', 'OpenAI API', 'Core Data', 'Firebase', 'RevenueCat', 'Jenkins', 'Fastlane'],
      highlights: ['98% crash-free sessions', '38% crash rate cut via automated QA', 'A/B tested onboarding flows', '4 engineers led, 2 onboarded to iOS'],
      appStoreLink: 'https://apps.apple.com/tr/app/ai-song-generator-mozart/id6502656704',
    },
  },
  {
    id: 4,
    title: 'Moseiki: AI Powered Social',
    category: 'iOS & Android',
    tags: ['ios-apps', 'android-apps'],
    image: '/assets/images/projects/project-4.jpg',
    link: 'https://apps.apple.com/tr/app/moseiki-ai-powered-social/id6476424685',
    details: {
      description:
        'AI-powered social platform with NFT/crypto-wallet features. Architected the gRPC API layer (chosen for bidirectional streaming) and AVFoundation pipelines (AVAssetReader/Writer for memory-bounded processing on lower-end devices).',
      techStack: ['Swift', 'SwiftUI', 'gRPC', 'AVFoundation', 'Core Data', 'VIPER', 'XCTest', 'XCUITest', 'Combine'],
      highlights: ['360+ dynamic screens', 'Sub-200ms API latency via gRPC', '85% automated test coverage', '2 mid-level engineers mentored'],
      appStoreLink: 'https://apps.apple.com/tr/app/moseiki-ai-powered-social/id6476424685',
    },
  },
  {
    id: 5,
    title: 'Crypto Pro',
    category: 'iOS App',
    tags: ['ios-apps'],
    image: '/assets/images/projects/project-5.jpg',
    link: 'https://apps.apple.com/tr/app/crypto-pro-portfolio-tracker/id980888073',
    details: {
      description:
        'Professional crypto trading and portfolio tracker for 10K+ daily active traders. Built real-time trading flows with WebSocket and Combine, plus watchOS background-sync pipelines using GCD and BackgroundTasks.',
      techStack: ['Swift', 'UIKit', 'Combine', 'WebSocket', 'GCD', 'BackgroundTasks', 'watchOS', 'Core Data'],
      highlights: ['10K+ daily active traders', '25% UI drop-off reduction', '40% improved watchOS sync reliability', 'Sub-200ms latency'],
      appStoreLink: 'https://apps.apple.com/tr/app/crypto-pro-portfolio-tracker/id980888073',
    },
  },
  {
    id: 6,
    title: 'Truth and Dare Games',
    category: 'iOS App',
    tags: ['ios-apps'],
    image: '/assets/images/projects/project-6.jpg',
    link: 'https://apps.apple.com/tr/app/do%C4%9Fruluk-cesaret-oyunlar%C4%B1/id1066160712',
    details: {
      description:
        'Popular party game app with IAP subscription flows. Lifted paywall conversion 22% via A/B-tested onboarding variants and unified iOS + Android revenue reporting with MongoDB-backed funnel analytics.',
      techStack: ['React Native', 'Redux', 'TypeScript', 'StoreKit', 'MongoDB', 'Firebase'],
      highlights: ['22% paywall conversion lift', 'A/B tested onboarding', 'Unified cross-platform revenue reporting', 'MongoDB-backed analytics'],
      appStoreLink: 'https://apps.apple.com/tr/app/do%C4%9Fruluk-cesaret-oyunlar%C4%B1/id1066160712',
    },
  },
  {
    id: 7,
    title: 'AI Salah',
    category: 'My App',
    tags: ['ios-apps', 'my-apps'],
    image: '/assets/images/projects/project-7.jpg',
    link: 'https://apps.apple.com/tr/app/aisalah/id6742526415',
    details: {
      description:
        'Personal project: AI-powered Islamic prayer companion with intelligent scheduling, personalized reminders, and AI-driven content workflows. Built and published independently from concept to App Store.',
      techStack: ['Swift', 'SwiftUI', 'Core ML', 'Core Location', 'RevenueCat', 'Firebase', 'APNs'],
      highlights: ['100% independently built & published', 'On-device AI for intelligent scheduling', 'Personalized push notification system', 'Live on App Store'],
      appStoreLink: 'https://apps.apple.com/tr/app/aisalah/id6742526415',
    },
  },
  {
    id: 8,
    title: 'Balloon — DNS Advisor',
    category: 'My App',
    tags: ['ios-apps', 'my-apps'],
    image: '/assets/images/projects/project-8.jpg',
    link: 'https://apps.apple.com/tr/app/balloon-dns-advisor/id6744152619',
    details: {
      description:
        'Personal project: Privacy-focused DNS changer enabling secure routing, real-time performance comparison across providers, and user-controlled network configuration. Built and published independently.',
      techStack: ['Swift', 'SwiftUI', 'NetworkExtension', 'Network.framework', 'Core Data', 'StoreKit 2'],
      highlights: ['100% independently built & published', 'Custom DNS routing engine', 'Real-time performance comparison', 'Privacy-first, no analytics'],
      appStoreLink: 'https://apps.apple.com/tr/app/balloon-dns-advisor/id6744152619',
    },
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'The Future of Swift in 2025: Trends, Technologies, and Relevance in the Industry',
    category: 'Swift',
    date: 'Oct 23, 2024',
    excerpt: 'Swift is a powerful, open-source programming language developed by Apple, primarily used for building apps on iOS, macOS, watchOS, and tvOS.',
    image: '/assets/images/blog-2.jpg',
    link: 'https://medium.com/@mertthedev/the-future-of-swift-in-2025-trends-technologies-and-relevance-in-the-industry-9e22b0709c61',
  },
  {
    id: 2,
    title: 'Protocols, Enums, Classes, Actors, Structs, Extensions, and Generics in Swift',
    category: 'Swift',
    date: 'Oct 23, 2024',
    excerpt: 'Swift is a powerful and versatile programming language that offers various features for building robust applications.',
    image: '/assets/images/blog-1.jpg',
    link: 'https://medium.com/@mertthedev/protocols-enums-classes-actors-structs-extensions-and-generics-in-swift-mastering-the-1ae00bbee46c',
  },
  {
    id: 3,
    title: 'Mastering Swift Function Attributes: nonisolated, mutating, and Beyond',
    category: 'Swift',
    date: 'Oct 23, 2024',
    excerpt: 'In Swift, function attributes are key to controlling how functions handle state, concurrency, and errors.',
    image: '/assets/images/blog-3.jpg',
    link: 'https://azmanmerto.medium.com/mastering-swift-function-attributes-nonisolated-mutating-and-beyond-5ac80a061c47',
  },
  {
    id: 4,
    title: 'iOS Developer Teknik Mülakat Soruları (24 adet)',
    category: 'Insights',
    date: 'Dec 25, 2023',
    excerpt: "UIKit'te kullanılan UIView ve UIViewController arasındaki temel farklar ve bu iki sınıf arasındaki ilişki.",
    image: '/assets/images/blog-4.jpg',
    link: 'https://medium.com/@mertthedev/ios-developer-teknik-m%C3%BClakat-sorular%C4%B1-24-adet-820e1ce0fcf5',
  },
  {
    id: 5,
    title: 'Learning Swift in 2024: Should You Do It?',
    category: 'Swift',
    date: 'Oct 17, 2023',
    excerpt: 'Swift is a programming language designed by Apple for developing applications for iOS, macOS, watchOS, and tvOS.',
    image: '/assets/images/blog-5.jpg',
    link: 'https://medium.com/@mertthedev/learning-swift-in-2024-should-you-do-it-e4dd5308d56d',
  },
  {
    id: 6,
    title: 'Bu Misafir Girişi NEDİR?',
    category: 'Questions',
    date: 'Oct 13, 2023',
    excerpt: 'Misafir girişi, kullanıcılara bir uygulamayı veya web sitesini, herhangi bir hesap oluşturma yapmadan geçici olarak erişim sağlama özelliğidir.',
    image: '/assets/images/blog-6.jpg',
    link: 'https://medium.com/@mertthedev',
  },
];
