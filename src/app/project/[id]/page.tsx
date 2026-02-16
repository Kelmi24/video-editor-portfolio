import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allVideoProjects } from "@/db/projects";
import ProjectDetails from "@/components/project-details";
import { getVideoThumbnailUrl } from "@/lib/helper";

// Generate unique static params for all projects
export async function generateStaticParams() {
  return allVideoProjects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for each project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = allVideoProjects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const thumbnailUrl = getVideoThumbnailUrl(project.cover_image, project.video_link);

  return {
    title: project.video_title,
    description: project.video_description,
    openGraph: {
      title: project.video_title,
      description: project.video_description,
      images: [
        {
          url: thumbnailUrl,
          width: 1280,
          height: 720,
          alt: project.video_title,
        },
      ],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = allVideoProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Get related projects from the same client
  const relatedProjects = allVideoProjects.filter(
    (p) => p.client_name === project.client_name && p.id !== project.id
  );

  return <ProjectDetails project={project} relatedProjects={relatedProjects} />;
}
