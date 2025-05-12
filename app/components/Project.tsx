import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import GitHubProjects from './OtherProject';

interface Project {
  title: string;
  description: string;
  deployedUrl: string;
  githubUrl: string;
}

const initialProjects: Project[] = [
  {
    title: "ShadowSpeak",
    description: "This is an anonymous feedback platform built with Next.js, Node.js, MongoDB, and additional services such as Vercel AI SDK, Resend for email handling, and NextAuth for authentication. It allows users to send and receive anonymous messages, including suggested messages powered by AI, and offers a secure authentication process ",
    deployedUrl: "",
    githubUrl: "https://github.com/Nexus-Agni/ShadowSpeak",
  },
  {
    title: "QueryGithub",
    description: "A memory aware fact extraction agent specialized in answering queries related to GitHub repositories. It uses Langchain, Neo4j, Qdrant and Mem0",
    deployedUrl: "",
    githubUrl: "https://github.com/Nexus-Agni/QueryGithub",
  },
  
  {
    title: "InkLess",
    description: "A serverless blog application which facilitates modern writing using Hono js",
    deployedUrl: "https://ink-less.vercel.app/",
    githubUrl: "https://github.com/Nexus-Agni/InkLess",
  },
  {
    title: "OS-AlgoAnalyser",
    description: "A comparative analyser of all the CPU scheduling algorithms in Operating System using interactive dashboard",
    deployedUrl: "",
    githubUrl: "https://github.com/Nexus-Agni/OS-AlgoAnalyser",
  },
  {
    title: "SteamSync: The Social Media Cinema",
    description: "This is a youtube backend application for video streaming which uses MongoDB Aggregation Pipeline to fetch data from MongoDB and then display it in a website. It has features like playlist creation, video search, and video sharing.",
    deployedUrl: "",
    githubUrl: "https://github.com/Nexus-Agni/StreamSync-Your-Social-Media-Cinema/tree/main/Main%20Project",
  },
  
];

const Projects: React.FC = () => {
  const [additionalProjects, setAdditionalProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdditionalProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Simulate fetching additional projects
        const fetchedProjects: Project[] = [
          {
            title: "Additional Project 1",
            description: "A description for additional project 1.",
            deployedUrl: "https://additionalproject1.example.com",
            githubUrl: "https://github.com/username/additionalproject1",
          },
        ];
        setTimeout(() => setAdditionalProjects(fetchedProjects), 1000); // Simulated delay
      } catch (err) {
        setError('Failed to fetch additional projects');
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdditionalProjects();
  }, []);

  const renderProjects = (projects: Project[]) =>
    projects.map((project, index) => (
      <div
        key={index}
        className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 
          transition-all duration-300 hover:shadow-lg
          bg-white/80 dark:bg-gray-700/80"
      >
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex gap-3">
          {/* <a
            href={project.deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            <span>View Live</span>
          </a> */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-1.5 text-sm rounded-md bg-gray-700 text-white hover:bg-gray-800 transition-colors"
          >
            <Github className="w-4 h-4 mr-1" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    ));

  return (
    <div className="mx-auto sm:px-12 sm:p-8 p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        My Projects
      </h1>

      <div className="grid gap-4">{renderProjects(initialProjects)}</div>

      <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-white">
        More Projects
      </h2>

      {isLoading && <p className="text-gray-600 dark:text-gray-300">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-4">
        {!isLoading && !error && renderProjects(additionalProjects)}
      </div>

      <GitHubProjects username="Nexus-Agni" />
    </div>
  );
};

export default Projects;
