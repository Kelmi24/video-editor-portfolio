import {
  Award,
  Camera,
  Film,
  Palette,
  Scissors,
  Sparkles,
  Users,
  Volume2,
  Zap,
  Layout,
  Smartphone,
  Brush,
} from "lucide-react";

export const videoEditingSkills = [
  {
    name: "Adobe Premiere Pro",
    image_link: "/tools/Adobe_Premiere_Pro_CC.png",
    icon: Scissors,
    description:
      "Advanced video editing, multicam sync, and workflow optimization",
    color: "text-amber-400",
  },
  {
    name: "DaVinci Resolve",
    image_link: "/tools/DaVinci_Resolve_Studio.png",
    icon: Film,
    description:
      "Professional color grading, editing, and audio post-production",
    color: "text-orange-400",
  },
  {
    name: "After Effects",
    image_link: "/tools/Adobe_After_Effects_CC.png",
    icon: Sparkles,
    description: "Motion graphics, visual effects, and dynamic animations",
    color: "text-amber-400",
  },
  {
    name: "Adobe Audition",
    image_link: "/tools/Adobe_Audition_CC.png",
    icon: Volume2,
    description: "Audio editing, noise reduction, and sound enhancement",
    color: "text-green-400",
  },
  {
    name: "Adobe Photoshop",
    image_link: "/tools/Adobe_Photoshop_CC.png",
    icon: Palette,
    description: "Thumbnail design, graphics creation, and image manipulation",
    color: "text-cyan-400",
  },
  {
    name: "Figma",
    image_link: "/tools/Figma.svg",
    icon: Layout,
    description: "UI/UX design, wireframing, and collaborative prototyping",
    color: "text-purple-400",
  },
  {
    name: "CapCut",
    image_link: "",
    icon: Smartphone,
    description: "Trend-focused mobile editing and quick social media cuts",
    color: "text-white",
  },
  {
    name: "Canva",
    image_link: "",
    icon: Brush,
    description: "Quick graphic design, social media posts, and visual assets",
    color: "text-cyan-400",
  },
];

export const specializations = [
  {
    title: "Social Media Ads",
    skills: [
      "Facebook Ads",
      "Instagram Ads",
      "TikTok Content",
      "Platform Optimization",
    ],
    icon: "📱",
    description:
      "Creating high-converting video ads for Facebook and Instagram with proven CTR results",
  },
  {
    title: "YouTube Content",
    skills: [
      "Long-form Editing",
      "Retention Editing",
      "Thumbnail Design",
      "SEO Optimization",
    ],
    icon: "🎬",
    description:
      "Specialized in YouTube content that drives views — 3 videos with 125k+ views each",
  },
  {
    title: "Instagram Reels",
    skills: [
      "Short-form Content",
      "Vertical Video",
      "FYP Strategy",
      "Viral Techniques",
    ],
    icon: "✨",
    description:
      "Expert in creating reels that consistently hit the For You Page — 2-3 FYP appearances weekly",
  },
  {
    title: "Videography",
    skills: [
      "Product Shots",
      "Beauty Shots",
      "Live Events",
      "Content Capture",
    ],
    icon: "📷",
    description:
      "Capturing professional footage for ads, reels, and brand content",
  },
  {
    title: "Motion Graphics",
    skills: [
      "2D Animation",
      "Logo Animation",
      "Lower Thirds",
      "Kinetic Typography",
    ],
    icon: "🎨",
    description: "Creating eye-catching animations that enhance brand storytelling",
  },
  {
    title: "Live Production",
    skills: [
      "Live Streaming",
      "Cooking Shows",
      "Webinar Sessions",
      "Multi-camera",
    ],
    icon: "🔴",
    description:
      "Operating live cooking and webinar sessions with professional quality",
  },
];

export const achievements = [
  {
    title: "4+ Years Experience",
    description:
      "Professional video editing and videography experience across multiple industries",
    icon: Camera,
    color: "text-amber-400",
  },
  {
    title: "125K+ Views",
    description:
      "Three YouTube videos garnering over 125k views each with content captured and edited",
    icon: Award,
    color: "text-yellow-400",
  },
  {
    title: "8+ Clients Served",
    description:
      "Built strong relationships with clients including chefs, educators, and businesses",
    icon: Users,
    color: "text-green-400",
  },
  {
    title: "1-2.5% CTR",
    description:
      "Consistently achieving above-average click-through rates on Facebook & Instagram ads",
    icon: Zap,
    color: "text-purple-400",
  },
];

export const workflow = [
  {
    step: "01",
    title: "Project Analysis",
    description:
      "Understanding client requirements, target audience, and project goals",
  },
  {
    step: "02",
    title: "Content Capture",
    description:
      "Filming product shots, beauty shots, live events, or receiving raw footage",
  },
  {
    step: "03",
    title: "Rough Cut",
    description:
      "Creating initial edit with basic cuts, transitions, and structure",
  },
  {
    step: "04",
    title: "Fine Tuning",
    description:
      "Adding graphics, color grading, audio enhancement, and effects",
  },
  {
    step: "05",
    title: "Client Review",
    description: "Presenting the work for feedback and implementing revisions",
  },
  {
    step: "06",
    title: "Final Delivery",
    description:
      "Exporting in required formats and delivering the completed project",
  },
];
