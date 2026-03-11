import { VideoProject } from "@/types/videos";
import { clientsData } from "@/db/clients";

const hiddenClientNames = clientsData
  .filter((c) => c.hidden)
  .map((c) => c.name);

const _allVideoProjects: VideoProject[] = [
  // =============================================
  // LANDSCAPE / FEATURED VIDEOS (non-Reels)
  // Order: docial-10k first, importir last
  // =============================================
  {
    id: "docial-10k-passes",
    video_title: "Docial — Free 10,000 Passes Campaign",
    video_description:
      "Viral campaign video for Docial's free 10,000 passes giveaway, designed with urgency-driven editing, countdown elements, and eye-catching motion graphics to maximize engagement.",
    tags: ["Campaign", "Giveaway", "Motion Graphics", "Social Media"],
    cover_image: "g3qrEA7QEes",
    publish_date: "2023-03-10",
    client_name: "NFT.co / Docial",
    client_image: "/companies/nft-docial.png",
    client_feedback: "",
    video_link: "https://youtu.be/g3qrEA7QEes",
    project_images: [],
    category: ["Social Media Ads", "Promo"],
    duration: "0:45",
    software_used: ["After Effects", "Adobe Premiere Pro"],
    role: "Motion Designer",
  },
  {
    id: "nft-co-promo",
    video_title: "NFT.co — Promotional Video",
    video_description:
      "Dynamic promotional video for NFT.co, blending futuristic motion graphics with sleek product demos to showcase the platform's Web3 marketplace.",
    tags: ["Promo", "Web3", "NFT", "Motion Graphics"],
    cover_image: "nHfx3_TpTZE",
    publish_date: "2022-06-20",
    client_name: "NFT.co / Docial",
    client_image: "/companies/nft-docial.png",
    client_feedback: "",
    video_link: "https://youtu.be/nHfx3_TpTZE",
    project_images: [],
    category: ["Promo"],
    duration: "1:00",
    software_used: ["After Effects", "Adobe Premiere Pro"],
    role: "Motion Designer",
    challenge: "NFT.co needed a futuristic promo video that could explain their Web3 marketplace to a mainstream audience while maintaining the edgy, tech-forward aesthetic expected in the crypto/NFT space.",
    approach: "Designed custom motion graphics in After Effects with a neon-accented, dark futuristic style. Created animated UI mockups showcasing the platform's features, synced to an energetic soundtrack with glitch transitions and particle effects.",
    outcome: "The promo video became a key marketing asset for NFT.co's launch campaign, helping communicate the platform's value to both crypto-native and mainstream audiences.",
  },
  {
    id: "docial-promo",
    video_title: "Docial — Platform Promo",
    video_description:
      "Professional promotional video for Docial, a social platform, featuring clean UI animations, brand storytelling, and engaging visual effects to drive user sign-ups.",
    tags: ["Promo", "Tech Platform", "UI Animation", "Brand Video"],
    cover_image: "jlq1AUSh3pE",
    publish_date: "2023-02-14",
    client_name: "NFT.co / Docial",
    client_image: "/companies/nft-docial.png",
    client_feedback: "",
    video_link: "https://youtu.be/jlq1AUSh3pE",
    project_images: [],
    category: ["Promo"],
    duration: "1:00",
    software_used: ["After Effects", "Adobe Premiere Pro"],
    role: "Motion Designer",
  },
  {
    id: "intrapreneur-promo",
    video_title: "Intrapreneur — Promo Video",
    video_description:
      "Compelling promotional video for Intrapreneur, combining corporate storytelling with modern editing techniques to communicate the brand's mission and value proposition.",
    tags: ["Promo", "Corporate", "Brand Story", "Professional"],
    cover_image: "1QAEabKbjrg",
    publish_date: "2023-04-20",
    client_name: "Intrapreneur",
    client_image: "/companies/entrepreneurs-id.png",
    client_feedback: "",
    video_link: "https://youtu.be/1QAEabKbjrg",
    project_images: [],
    category: ["Promo", "YouTube"],
    duration: "1:30",
    software_used: ["Adobe Premiere Pro", "After Effects"],
    role: "Lead Editor & Motion Designer",
  },
  {
    id: "importir-org-clip",
    video_title: "Importir.org — Clip",
    video_description:
      "Engaging clip for Importir.org's YouTube channel, showcasing community highlights and success stories. Part of the content series that helped drive 125K+ views.",
    tags: ["YouTube", "Clip", "Community", "125K+ Views"],
    cover_image: "KcJyWVeZiQs",
    publish_date: "2021-10-15",
    client_name: "Importir.org",
    client_image: "/companies/importir-org.png",
    client_feedback: "",
    video_link: "https://youtu.be/KcJyWVeZiQs",
    project_images: [],
    category: ["YouTube"],
    duration: "3:00",
    software_used: ["Adobe Premiere Pro", "DaVinci Resolve"],
    role: "Editor & Colorist",
    challenge: "Importir.org needed a content series that could build community engagement on YouTube, showcase member success stories, and drive new sign-ups for their import/export education platform.",
    approach: "Developed an engaging editing style with dynamic cuts, lower-thirds for key stats, and professional color grading in DaVinci Resolve. Focused on storytelling that highlighted real community members and their achievements.",
    outcome: "The content series helped drive 125K+ views on Importir.org's YouTube channel, significantly growing their community and establishing the platform's credibility.",
  },

  // =============================================
  // SHORT-FORM / REELS
  // Order: Chef Elin reel, Joseph, VacuVin, Tribebuy, Personal, then rest
  // =============================================
  {
    id: "chef-elin-reel-1",
    video_title: "Chef Elin Sulivan — Instagram Reel 1",
    video_description:
      "Engaging short-form content for Chef Elin, maintaining high visual quality and an upbeat pace.",
    tags: ["Reels", "Food Content", "Instagram"],
    cover_image: "/projects/elin-reel-1.png",
    publish_date: "2024-03-10",
    client_name: "Chef Elin Sulivan",
    client_image: "/companies/placeholder-client.png",
    client_feedback: "",
    video_link: "https://www.instagram.com/reel/DHVcBL3yPF8/",
    project_images: [],
    category: ["Reels"],
    duration: "0:30",
    software_used: ["Adobe Premiere Pro"],
    role: "Editor",
  },
  // --- Joseph ---
  {
    id: "joseph-video-1",
    video_title: "Joseph — Video Project",
    video_description:
      "Professional video project crafted for Joseph, featuring polished editing, clean transitions, and engaging visual storytelling.",
    tags: ["Video Project", "Professional", "Client Work"],
    cover_image: "/projects/placeholder-thumb.jpg",
    publish_date: "2024-04-15",
    client_name: "Joseph",
    client_image: "/companies/placeholder-client.png",
    client_feedback: "",
    video_link:
      "https://drive.google.com/file/d/1R7Z9S0BjD9f_FCqkr1xWKZmZ9YMU7q1A/view?usp=sharing",
    project_images: [],
    category: ["Promo", "Reels"],
    duration: "1:00",
    software_used: ["Adobe Premiere Pro"],
    role: "Lead Editor",
  },
  // --- VacuVin ---
  {
    id: "vacuvin-video-1",
    video_title: "VacuVin — Video #1",
    video_description:
      "Engaging product video for VacuVin, showcasing the brand's innovative products with clean visuals, dynamic editing, and compelling storytelling.",
    tags: ["Product Video", "Brand Content", "Professional"],
    cover_image: "/projects/placeholder-thumb.jpg",
    publish_date: "2024-05-01",
    client_name: "VacuVin",
    client_image: "/companies/placeholder-client.png",
    client_feedback: "",
    video_link:
      "https://drive.google.com/file/d/1MZL412j8Zx8NoYeemPzv7YWbPVkDMtwQ/view?usp=drive_link",
    project_images: [],
    category: ["Promo", "Reels"],
    duration: "1:00",
    software_used: ["Adobe Premiere Pro"],
    role: "Lead Editor",
  },
  // --- Tribebuy ---
  {
    id: "tribebuy-reel-1",
    video_title: "Tribebuy — Promotional Short 1",
    video_description:
      "Short form promotional content for Tribebuy, focusing on clean branding and rapid delivery of key messages.",
    tags: ["Promo", "Short-form", "Social Media"],
    cover_image: "/projects/tribebuy-reel-1.png",
    publish_date: "2024-03-15",
    client_name: "Tribebuy",
    client_image: "/companies/placeholder-client.png",
    client_feedback: "",
    video_link: "https://drive.google.com/file/d/1In1Y3-Z5AKhr_pywW1f_bz0_VASiwXIz/view?usp=sharing",
    project_images: [],
    category: ["Reels"],
    duration: "0:30",
    software_used: ["Adobe Premiere Pro"],
    role: "Editor",
  },
  // --- Personal Project ---
  {
    id: "personal-project-1",
    video_title: "Personal Project — Creative Edit",
    video_description:
      "A personal creative project showcasing experimental editing techniques, artistic expression, and cinematic storytelling as a demonstration of creative range.",
    tags: ["Personal", "Creative", "Experimental", "Cinematic"],
    cover_image: "/projects/placeholder-thumb.jpg",
    publish_date: "2024-06-15",
    client_name: "Personal Project",
    client_image: "/companies/placeholder-client.png",
    client_feedback: "",
    video_link:
      "https://drive.google.com/file/d/11cbWY7LTs4TaJpJ0Fke3nlI9x3SFwEsg/view?usp=sharing",
    project_images: [],
    category: ["Promo", "Reels"],
    duration: "1:00",
    software_used: ["Adobe Premiere Pro", "After Effects"],
    role: "Editor & Motion Designer",
  },
  // --- Rest of short-form ---
  {
    id: "chef-elin-reel-2",
    video_title: "Chef Elin Sulivan — Instagram Reel 2",
    video_description:
      "Dynamic Instagram reel for Chef Elin with sharp edits and compelling storytelling.",
    tags: ["Reels", "Food Content", "Instagram"],
    cover_image: "/projects/elin-reel-2.png",
    publish_date: "2024-03-12",
    client_name: "Chef Elin Sulivan",
    client_image: "/companies/placeholder-client.png",
    client_feedback: "",
    video_link: "https://www.instagram.com/reel/DI_ZDPFSWuj/",
    project_images: [],
    category: ["Reels"],
    duration: "0:30",
    software_used: ["Adobe Premiere Pro"],
    role: "Editor",
  },
  {
    id: "tribebuy-reel-2",
    video_title: "Tribebuy — Promotional Short 2",
    video_description:
      "Engaging social media short for Tribebuy designed to drive conversion and brand awareness.",
    tags: ["Promo", "Short-form", "Social Media"],
    cover_image: "/projects/tribebuy-reel-2.png",
    publish_date: "2024-03-18",
    client_name: "Tribebuy",
    client_image: "/companies/placeholder-client.png",
    client_feedback: "",
    video_link: "https://drive.google.com/file/d/1r5jyFbDy2r_00h1X87YGTetpPxYelZMf/view?usp=sharing",
    project_images: [],
    category: ["Reels"],
    duration: "0:30",
    software_used: ["Adobe Premiere Pro"],
    role: "Editor",
  },
  {
    id: "vacuvin-video-2",
    video_title: "VacuVin — Video #2",
    video_description:
      "Second product video for VacuVin, featuring polished post-production, attention-grabbing visuals, and brand-consistent styling for social media distribution.",
    tags: ["Product Video", "Brand Content", "Social Media"],
    cover_image: "/projects/placeholder-thumb.jpg",
    publish_date: "2024-05-10",
    client_name: "VacuVin",
    client_image: "/companies/placeholder-client.png",
    client_feedback: "",
    video_link:
      "https://drive.google.com/file/d/1vGssprq_duTDTUlFSRuwVjHoQ_1rDmKc/view?usp=drive_link",
    project_images: [],
    category: ["Promo", "Reels"],
    duration: "1:00",
    software_used: ["Adobe Premiere Pro"],
    role: "Lead Editor",
  },
  {
    id: "fam-estate-reels",
    video_title: "FAM Estate — Instagram Reels",
    video_description:
      "Stunning real estate reel for FAM Estate, featuring cinematic property shots, smooth transitions, and premium visual treatments to attract high-end buyers.",
    tags: ["Real Estate", "Instagram Reels", "Cinematic", "Property"],
    cover_image: "/projects/fam-estate-thumb.jpg",
    publish_date: "2024-03-05",
    client_name: "FAM Estate",
    client_image: "/companies/placeholder-client.png",
    client_feedback: "",
    video_link:
      "https://drive.google.com/file/d/1dBMDr8HFu0f5X5-rY_M0GXJVqJL5pPiM/view?usp=sharing",
    project_images: [],
    category: ["Reels", "Promo"],
    duration: "0:45",
    software_used: ["Adobe Premiere Pro", "DaVinci Resolve"],
    role: "Editor & Colorist",
    challenge: "FAM Estate needed high-end property reels that could compete with luxury real estate content on Instagram and attract potential buyers scrolling through their feed.",
    approach: "Used cinematic wide-angle property shots combined with smooth gimbal movement transitions. Applied warm, inviting color grading in DaVinci Resolve and added subtle text overlays highlighting key property features.",
    outcome: "The reels elevated FAM Estate's social media presence, resulting in increased profile visits and direct inquiries from prospective buyers.",
  },
  {
    id: "qisaruma-reels",
    video_title: "Qisaruma — Instagram Reels",
    video_description:
      "Engaging Instagram reel crafted for Qisaruma, featuring vibrant visuals, trend-aligned editing techniques, and strategic pacing to maximize views and engagement.",
    tags: ["Instagram Reels", "Short-form", "Social Media", "Brand Content"],
    cover_image: "/projects/qisaruma-thumb.jpg",
    publish_date: "2024-02-28",
    client_name: "Qisaruma",
    client_image: "/companies/qisaruma.png",
    client_feedback: "",
    video_link:
      "https://drive.google.com/file/d/1aCll2ZSlWdj1c96BefEPD49LG4LSkJJo/view?usp=sharing",
    project_images: [],
    category: ["Reels", "Social Media Ads"],
    duration: "0:30",
    software_used: ["Adobe Premiere Pro"],
    role: "Lead Editor",
  },
  {
    id: "jean-yip-video-1",
    video_title: "Jean Yip — Video Project",
    video_description:
      "Professional video project for Jean Yip, combining sleek visuals, smooth transitions, and brand-aligned editing to elevate their digital presence.",
    tags: ["Brand Video", "Professional", "Client Work"],
    cover_image: "/projects/placeholder-thumb.jpg",
    publish_date: "2024-06-01",
    client_name: "Jean Yip",
    client_image: "/companies/placeholder-client.png",
    client_feedback: "",
    video_link:
      "https://drive.google.com/file/d/1qS99_-xnFR2mNs_SALkm3t8ixojwzowT/view?usp=sharing",
    project_images: [],
    category: ["Promo", "Reels"],
    duration: "1:00",
    software_used: ["Adobe Premiere Pro"],
    role: "Lead Editor",
  },
  {
    id: "good-laundry-video-1",
    video_title: "Good Laundry — Video #1",
    video_description:
      "Engaging promotional video for Good Laundry, featuring clean visuals, professional editing, and compelling brand storytelling to drive customer engagement.",
    tags: ["Promo", "Brand Content", "Professional"],
    cover_image: "/projects/placeholder-thumb.jpg",
    publish_date: "2024-07-01",
    client_name: "Good Laundry",
    client_image: "/companies/placeholder-client.png",
    client_feedback: "",
    video_link:
      "https://drive.google.com/file/d/1jn2cdmCuqih0lN9nd_XdGxbhvXywzL6L/view?usp=sharing",
    project_images: [],
    category: ["Promo", "Reels"],
    duration: "1:00",
    software_used: ["Adobe Premiere Pro"],
    role: "Lead Editor",
  },
  {
    id: "good-laundry-video-2",
    video_title: "Good Laundry — Video #2",
    video_description:
      "Second promotional video for Good Laundry, with polished post-production, dynamic transitions, and optimized content for social media platforms.",
    tags: ["Promo", "Social Media", "Brand Content"],
    cover_image: "/projects/placeholder-thumb.jpg",
    publish_date: "2024-07-10",
    client_name: "Good Laundry",
    client_image: "/companies/placeholder-client.png",
    client_feedback: "",
    video_link:
      "https://drive.google.com/file/d/13Xu7-HDffTgXz5U2JGjTmYSzDcSqz9fq/view?usp=sharing",
    project_images: [],
    category: ["Promo", "Reels"],
    duration: "1:00",
    software_used: ["Adobe Premiere Pro"],
    role: "Lead Editor",
  },
  {
    id: "importir-event-trailer",
    video_title: "Importir — Event Trailer",
    video_description:
      "High-energy event trailer for Importir's community gathering, edited as a YouTube Short with fast-paced cuts, dynamic transitions, and hype-building pacing.",
    tags: ["YouTube Shorts", "Event", "Trailer", "Short-form"],
    cover_image: "MbGQSDA_cy4",
    publish_date: "2022-01-10",
    client_name: "Importir.org",
    client_image: "/companies/importir-org.png",
    client_feedback: "",
    video_link: "https://youtube.com/shorts/MbGQSDA_cy4",
    project_images: [],
    category: ["Reels", "Promo"],
    duration: "0:30",
    software_used: ["Adobe Premiere Pro"],
    role: "Lead Editor",
  },
];

export const allVideoProjects: VideoProject[] = _allVideoProjects.filter(
  (p) => !hiddenClientNames.includes(p.client_name)
);

export const getGroupedProjects = () => {
  return clientsData
    .filter((client) => !client.hidden)
    .map((client) => {
      const projects = allVideoProjects.filter(
        (p) => p.client_name === client.name
      );
      return { client, projects };
    })
    .filter((group) => group.projects.length > 0);
};
