import { clientsData } from "@/db/clients";
import { allVideoProjects } from "@/db/projects";
import { Client, VideoProject } from "@/types/videos";

// Helper to check if project is high priority (YouTube/Reels)
const isPriorityProject = (project: VideoProject) => {
  return project.category.some((c) =>
    ["YouTube", "Reels", "Instagram Reels", "YouTube Shorts"].includes(c)
  );
};

// Helper function to get all projects sorted by priority then date (latest first)
export const getAllVideoProjects = (): VideoProject[] => {
  return allVideoProjects.sort((a, b) => {
    const aPriority = isPriorityProject(a);
    const bPriority = isPriorityProject(b);

    if (aPriority && !bPriority) return -1;
    if (!aPriority && bPriority) return 1;

    return (
      new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
    );
  });
};

// Helper function to get projects by category sorted by date (latest first)
export const getVideoProjectsByCategory = (
  category: string
): VideoProject[] => {
  if (category === "All") {
    return getAllVideoProjects();
  }

  const filteredProjects = allVideoProjects.filter((project) =>
    project.category.includes(category)
  );

  return filteredProjects.sort((a, b) => {
    const aPriority = isPriorityProject(a);
    const bPriority = isPriorityProject(b);

    if (aPriority && !bPriority) return -1;
    if (!aPriority && bPriority) return 1;

    return (
      new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
    );
  });

};

// Helper to check if project is vertical (Reels/Shorts)
export const isVerticalProject = (project: VideoProject) => {
  return project.category.some((c) =>
    ["Reels", "Instagram Reels", "Shorts", "YouTube Shorts"].includes(c)
  );
};

// Get only Vertical Projects (Reels, Shorts)
export const getVerticalProjects = (): VideoProject[] => {
  return getAllVideoProjects().filter(isVerticalProject);
};

// Get only Landscape Projects (YouTube, standard video)
export const getLandscapeProjects = (): VideoProject[] => {
  return getAllVideoProjects().filter((p) => !isVerticalProject(p));
};

// Helper function to get project by ID
export const getVideoProjectById = (id: string): VideoProject | undefined => {
  return allVideoProjects.find((project) => project.id === id);
};

// Helper function to get all unique categories
export const getVideoCategories = (): string[] => {
  const categoriesSet = new Set<string>();

  allVideoProjects.forEach((project) => {
    project.category.forEach((cat) => categoriesSet.add(cat));
  });

  return Array.from(categoriesSet);
};

// Returns categories with project count, sorted descending
export const getVideoCategoriesWithCount = (): {
  category: string;
  count: number;
}[] => {
  const categoryCountMap = new Map<string, number>();

  allVideoProjects.forEach((project) => {
    project.category.forEach((cat) => {
      categoryCountMap.set(cat, (categoryCountMap.get(cat) || 0) + 1);
    });
  });

  const sortedCategories = Array.from(categoryCountMap.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);

  return sortedCategories;
};

export const getVideoCategoriesWithCountIncludingAll = (): {
  category: string;
  count: number;
}[] => {
  const categoryCounts = getVideoCategoriesWithCount();
  const total = allVideoProjects.length;

  return [{ category: "All", count: total }, ...categoryCounts];
};

export function getFeaturedProjects(limit = 6): VideoProject[] {
  return getAllVideoProjects().slice(0, limit);
}

export function getClients(): Client[] {
  return clientsData;
}

// Helper function to check if a URL is a Google Drive link
export const isGoogleDriveLink = (url: string): boolean => {
  if (!url) return false;
  return url.includes("drive.google.com");
};

// Helper function to check if a URL is an Instagram link
export const isInstagramLink = (url: string): boolean => {
  if (!url) return false;
  return url.includes("instagram.com/reel/");
};

// Helper function to extract Instagram Reel ID
export const getInstagramReelId = (url: string): string | null => {
  if (!url) return null;
  const match = url.match(/instagram\.com\/reel\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

// Helper function to extract Google Drive file ID
export const getGoogleDriveFileId = (url: string): string | null => {
  if (!url) return null;
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

// Helper function to get the proper embed link (supports YouTube, Google Drive, and Instagram)
export const getVideoEmbedUrl = (url: string): string | null => {
  if (!url) return null;

  // Handle Instagram Reels
  if (isInstagramLink(url)) {
    const reelId = getInstagramReelId(url);
    return reelId ? `https://www.instagram.com/reel/${reelId}/embed/` : null;
  }

  // Handle Google Drive
  if (isGoogleDriveLink(url)) {
    const fileId = getGoogleDriveFileId(url);
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;
  }

  // Handle YouTube Shorts
  if (url.includes("youtube.com/shorts/")) {
    const match = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  }

  // Handle Regular YouTube video
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

// Keep legacy function name for backward compat
export const getYouTubeEmbedUrl = getVideoEmbedUrl;

// Helper function to get thumbnail URL
export const getVideoThumbnailUrl = (
  coverImage: string,
  videoLink: string
): string => {
  // 1. If cover_image is a valid URL or local path (and NOT a placeholder), use it
  if (
    coverImage &&
    (coverImage.startsWith("/") || coverImage.startsWith("http")) &&
    coverImage !== "/placeholder.svg"
  ) {
    return coverImage;
  }

  // 2. If cover_image looks like a YouTube ID, use it
  if (coverImage && coverImage.length > 0 && !coverImage.includes("/")) {
    return `https://img.youtube.com/vi/${coverImage}/maxresdefault.jpg`;
  }

  // 3. Automatic extraction from video_link if cover_image is missing or placeholder
  if (videoLink) {
    // YouTube
    const ytMatch = videoLink.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|.+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    if (ytMatch) {
      return `https://img.youtube.com/vi/${ytMatch[1]}/maxresdefault.jpg`;
    }

    // Instagram (Try legacy media endpoint)
    // Note: This relies on client-side fetching or luck with Instagram's CDN redirect
    if (videoLink.includes("instagram.com")) {
      const reelMatch = videoLink.match(/instagram\.com\/(?:reel|p)\/([a-zA-Z0-9_-]+)/);
      if (reelMatch) {
        return `https://www.instagram.com/p/${reelMatch[1]}/media/?size=l`;
      }
    }
  }

  // Fallback
  return "/placeholder.svg";
};

// Legacy support - keep the old structure for backward compatibility if needed
export const videoProjectsData = {
  "Talking Head": allVideoProjects.filter((p) =>
    p.category.includes("Talking Head")
  ),
  Shorts: allVideoProjects.filter((p) => p.category.includes("Shorts")),
  Promo: allVideoProjects.filter((p) => p.category.includes("Promo")),
  Documentary: allVideoProjects.filter((p) =>
    p.category.includes("Documentary")
  ),
  Explainer: allVideoProjects.filter((p) => p.category.includes("Explainer")),
  "Motion Graphics": allVideoProjects.filter((p) =>
    p.category.includes("Motion Graphics")
  ),
  Animation: allVideoProjects.filter((p) => p.category.includes("Animation")),
};
