import { Project, Service, ProcessStep, Testimonial } from './types';

export const BENN_PORTRAIT = 'https://lh3.googleusercontent.com/aida-public/AB6AXu27ARyFeKr0t4Mej7CTJjaAs70xwioVPvFEowDW8XO4IEx38OsR5QI-GqlP_ntCqoxw-M1_HDQAIKnkMDVlqFFByI0QV_oFU5Mrs_ab3FLSRVcmVGP7VJ-mIWO9CU21rnJKSaTWg4IYD7ZA6Odf-GiqZ-duzuHaAZ3losJ-aujbzkDGgyMs80ZglAo9JoP1O8yya2JMY3oCR2vkU-mThx9mUQsG9z7mDKb0854pAQH9LbU0Cha8A6D5Lt3MK4mXcnxnodgDTpIU8E';

export const PROJECTS: Project[] = [
  {
    id: 'essence-of-time',
    title: 'The Essence of Time',
    category: 'brand_film',
    categoryLabel: 'Brand Film',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuR_LXD_qNzdlsnxTIHDWZxACNfeT6n6OJCvVQJzFnznJCpxLk5H1F2sypMUSzOReIjDCARarPve9wNrVe5mqBKAl29UMrr9ZWskqOSTzwDWnSRob3coSOOxvc5bnDY8eFSOEcBtuwe-Ji9D4ElA-qgSTsTCPXBYzWlx_Np9YWbozQqdIwKsnVzxQjdnuQLOd6zwNjae3RqA8aLpvdg2rXwX1OjEhX4DeYUtrK24U7IBSZCKyfw8XusmEThHZsGJja1v9ksqlr-iY',
    description: 'High-end close-ups of a luxury watch with cinematic water droplet refractions and moody shadows.',
    longDescription: 'A premium brand film capturing the exquisite mechanical precision of OMEGA. Shot with high-speed macro lenses, we choreographed real-time water droplet collisions, highlighting the waterproof caliber and the metallic luster under studio-lit shadows.',
    client: 'OMEGA Swiss',
    year: '2025',
    director: 'Benn Tony',
    runtime: '1:45 mins',
    aspectRatio: '2.39:1 (Anamorphic)',
    equipment: ['Arri Alexa 35', 'Cooke Anamorphic/i Macro', 'Bolt High-Speed Motion Control Rig'],
    metrics: [
      { label: 'View Retention', value: '78%' },
      { label: 'Earned Reach', value: '4.2M+' },
      { label: 'Brand Sentiment', value: '+45%' }
    ],
    credits: [
      { role: 'Creative Director', name: 'Benn Tony' },
      { role: 'Director of Photography', name: 'Marcus Sterling' },
      { role: 'Lead Colorist', name: 'Sarah Vance' },
      { role: 'Sound Designer', name: 'Clara Dupont' }
    ]
  },
  {
    id: 'minimal-workspace',
    title: 'Minimal Workspace',
    category: 'product',
    categoryLabel: 'Product ad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU_YalBO-iZOk0gZRQpCbfMwwSO_6cXKD-VPbOKaVq0w2KXzVMpTkHXXLcUahcX7ThTyhANr-XIiz405fJSc56wGcZW8lNjuaMf8YUVYC8FViOQPZWF8AoOuq-U2-0Li6dF0wx2s1dGIS5TD2EPFV97IvdBY3NJ0T7zi82JAQHDG9PPMjM9rmYMCVqbHRHmqt4-zAZBAAQQcN707UP-MOEstCbCgLhenwAEWIpfj5A_kw8vVy9dYM-aBq8aqwbdwo3ZKgdjuRdV4Q',
    description: 'A stylish workspace bathed in cool blue ambient light with high-end tech accessories.',
    longDescription: 'This commercial showcase details the ultimate productivity environment, blending sleek workspace components, smart accent lighting, and tactile control interfaces. We focused on precise product lighting to appeal to high-end designers and tech enthusiasts.',
    client: 'Aether Desk Labs',
    year: '2026',
    director: 'Benn Tony',
    runtime: '0:30 mins',
    aspectRatio: '16:9',
    equipment: ['RED V-Raptor XL', 'Laowa Probe Lens', 'Aputure Infinite Light Bars'],
    metrics: [
      { label: 'Click-Through Rate', value: '4.8%' },
      { label: 'Sales Lift', value: '+28%' },
      { label: 'Inbound Inquiries', value: '15K+' }
    ],
    credits: [
      { role: 'Creative Director', name: 'Benn Tony' },
      { role: 'Producer', name: 'Devon Patel' },
      { role: 'VFX Lead', name: 'Gavin Ross' }
    ]
  },
  {
    id: 'urban-motion',
    title: 'Urban Motion',
    category: 'digital_content',
    categoryLabel: 'Digital Content',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHkxz-LxI2ZBw9ymPO0CRJ0XNATJXH5HwmbKjhifxJlAY1jjwxNXklCKi9JX65ZNfwjd1sgYWwXRaqvHleElrzxszewEG9m0S3cjMrDfQuG4Fc6XM_Kc45YcBNNnzc4H7x2TtuBEuLRVpuV8AXNUc3jU5FeREQvV-rP-_FufoO9RNWunVELz50QJh2bWH4AIWZ1nQcLwAaaD1zU96A8U7iHhVzNpljET38AUPNAvOuCz6vhutdeb6PY0IFduFcDe0xe0CPHO6G6po',
    description: 'A runner mid-stride in a rainy city environment at night, illuminated by glowing orange neon.',
    longDescription: 'Capturing raw human endurance in adverse conditions. We rigged a custom camera car to track a marathon athlete sprinting through Chennai at midnight under artificial rain generators and local ambient neon lighting.',
    client: 'Velox Athletics',
    year: '2025',
    director: 'Benn Tony',
    runtime: '1:00 min',
    aspectRatio: '9:16 (Vertical First)',
    equipment: ['Sony FX6', 'DJI Ronin 2 Gimbal', 'Astera Pixel Tubes'],
    metrics: [
      { label: 'Social Shares', value: '85K+' },
      { label: 'Follower Growth', value: '+32K' },
      { label: 'Replays Ratio', value: '142%' }
    ],
    credits: [
      { role: 'Creative Director', name: 'Benn Tony' },
      { role: 'Gaffer', name: 'Karthik Raja' },
      { role: 'Editor', name: 'Anjali Sen' }
    ]
  },
  {
    id: 'architectural-legacy',
    title: 'Architectural Legacy',
    category: 'commercial',
    categoryLabel: 'Commercial',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCfdt7iQ6eW1svCqESUT5h_fdZjZynCivYvuxczUHSbrbMo3OJiNk4BUg19V5kjDSNKguiuTJpXuPKHZlhK-8AaMXaGfC36IaCjKdf5f4bK1LbJSSCGMI0B2rQBxKOBb1_o5ZyfAIOIibNyUyDOMP9b2Mf7JvwGFsyOuBACSCVItQfaBS6ZLM3PshcdaIiXsoRu65IlLmdvTOhLD1-DEhEbAusp3u-mvgq_gbhiiLBXkwNKSTLpBfKoBJzbmWx7_icOxYZ1_Ry438',
    description: 'A wide sweeping low-angle shot of a glass structural masterpiece at golden sunset.',
    longDescription: 'Commissioned by Aster Living, this cinematic architectural piece captures the harmony of high-end engineering and natural daylight. We utilized 4K HDR drones and precise time-lapse camera sweeps during a rare monsoon golden hour.',
    client: 'Aster Living Group',
    year: '2024',
    director: 'Benn Tony',
    runtime: '2:30 mins',
    aspectRatio: '2.40:1',
    equipment: ['DJI Inspire 3 (X9-8K Air)', 'Arri Alexa Mini LF', 'Zeiss Supreme Primes'],
    metrics: [
      { label: 'Pre-sales Volume', value: '$45M+' },
      { label: 'Inquiries Lift', value: '+180%' },
      { label: 'Award', value: 'Gold Craft VMA' }
    ],
    credits: [
      { role: 'Creative Director', name: 'Benn Tony' },
      { role: 'Drone Operator', name: 'Vikram Seth' },
      { role: 'Sound Orchestrator', name: 'Leon Shore' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'reelio-pulse',
    icon: 'pulse',
    title: 'Reelio Pulse',
    description: 'High-energy launch content designed to spark attention instantly and give your brand a memorable first impression.',
    extendedDescription: 'Reelio Pulse focuses on rapid-turn campaign moments, sharp hooks, and polished motion assets that make launches feel cinematic from the very first frame.',
    deliverables: ['Launch-ready concept deck', 'Hook-first cutdowns', 'Short-form social variants', 'Visual system for rollout']
  },
  {
    id: 'reelio-feature',
    icon: 'feature',
    title: 'Reelio Feature',
    description: 'Premium spotlight content that presents products, founders, and ideas with confidence and cinematic clarity.',
    extendedDescription: 'Reelio Feature packages big ideas into refined, story-led pieces that feel elevated, premium, and built for modern audiences across digital and broadcast.',
    deliverables: ['Feature-length narrative cut', 'Brand-led storyboards', 'Premium edit and grade', 'Distribution-ready master files']
  },
  {
    id: 'reelio-voice',
    icon: 'voice',
    title: 'Reelio Voice',
    description: 'Voice-led storytelling that gives your message weight, personality, and a clear emotional point of view.',
    extendedDescription: 'Reelio Voice brings human presence to your content through direction, scripting rhythm, and tonal clarity that makes each message feel intentional and memorable.',
    deliverables: ['Narrative voice direction', 'Script and tone development', 'On-screen performance guidance', 'Audio-first edit package']
  },
  {
    id: 'reelio-insights',
    icon: 'insights',
    title: 'Reelio Insights',
    description: 'Performance-led planning that aligns content with audience behaviour, growth goals, and real-world outcomes.',
    extendedDescription: 'Reelio Insights turns your campaign goals into a structured content strategy with clear priorities, measurable moments, and smarter distribution decisions.',
    deliverables: ['Growth strategy map', 'Audience behaviour insights', 'Content performance plan', 'Campaign refinement framework']
  },
  {
    id: 'reelio-catalyst',
    icon: 'catalyst',
    title: 'Reelio Catalyst',
    description: 'Creative direction that sharpens your visual language and transforms scattered ideas into a consistent brand presence.',
    extendedDescription: 'Reelio Catalyst builds the creative engine behind your identity with clear direction, mood, and visual cues so every asset feels like it belongs to one world.',
    deliverables: ['Visual moodboards', 'Brand look development', 'Creative direction framework', 'Consistency review sessions']
  },
  {
    id: 'reelio-persona',
    icon: 'persona',
    title: 'Reelio Persona',
    description: 'Identity and positioning support for brands that want a stronger voice, clearer story, and a more magnetic presence.',
    extendedDescription: 'Reelio Persona shapes the way your brand is seen, heard, and remembered through refined messaging, expressive direction, and tailored presentation.',
    deliverables: ['Positioning framework', 'Brand persona blueprint', 'Messaging direction', 'Identity-ready content pillars']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    icon: 'search',
    title: 'Discovery',
    description: 'Deep dive into goals',
    details: 'We audit your current brand presence, identify your core target audience, and run competitive analysis to map out unique visual opportunities.'
  },
  {
    id: 2,
    icon: 'architecture',
    title: 'Planning',
    description: 'Strategic mapping',
    details: 'This is where mood boards, custom scriptwriting, and detailed visual storyboards are locked in. Every single camera angle is predetermined.'
  },
  {
    id: 3,
    icon: 'videocam',
    title: 'Production',
    description: 'Cinematic execution',
    details: 'Our crew takes the field with state-of-the-art cinema packages. Under Benn Tony\'s hands-on direction, every shot is lit and executed perfectly.'
  },
  {
    id: 4,
    icon: 'movie_edit',
    title: 'Editing',
    description: 'Polishing the story',
    details: 'Post-production is where the magic becomes seamless. Rough cuts, professional color grading, custom sound design, and micro-VFX are applied.'
  },
  {
    id: 5,
    icon: 'check_circle',
    title: 'Delivery',
    description: 'Final asset release',
    details: 'We export master assets in premium formats (ProRes, 4K HDR) with all necessary aspect ratios formatted precisely for Web, Mobile, and TV screens.'
  },
  {
    id: 6,
    icon: 'trending_up',
    title: 'Marketing',
    description: 'Scaling the impact',
    details: 'We assist with the rollout, setting up optimization tracking, monitoring audience retention, and optimizing hooks to trigger strong organic reach.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Reelio rebuilt our short-form engine from scratch. In 90 days, we went from inconsistent uploads to a predictable inbound pipeline that fuels our enterprise leads.',
    author: 'Ilakiya',
    role: 'Marketing Lead',
    company: 'NOVA PAY',
    avatarInitial: 'I'
  },
  {
    id: 'test-2',
    quote: 'Benn and his team blend rare creative instinct with hard analytics. Every single campaign delivered had a measurable target and a quick iterative feedback loop.',
    author: 'Barani',
    role: 'Founder',
    company: 'PULSE ENERGY',
    avatarInitial: 'B'
  },
  {
    id: 'test-3',
    quote: 'What stood out was their sheer execution speed. Strategy, premium set production, edits, and distribution layout were all synchronized and completely frictionless.',
    author: 'Balaji',
    role: 'Brand Director',
    company: 'ASTER LIVING',
    avatarInitial: 'B'
  }
];
