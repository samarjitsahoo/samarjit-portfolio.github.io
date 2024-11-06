import React from "react";

const projectInfoData = [
  {
    name: "Real Estate Application",
    category: "Website Project",
    url: "https://samartube.vercel.app",
  },
  {
    name: "Blog Website",
    category: "Website Project",
    url: "https://samartube.vercel.app",
  },
  {
    name: "Auction Platform",
    category: "Website Project",
    url: "https://samartube.vercel.app",
  },
  {
    name: "House Price Prediction",
    category: "AI/ML Project",
    url: "https://samartube.vercel.app",
  },
  {
    name: "Demo Project",
    category: "AI/ML Project",
    url: "https://samartube.vercel.app",
  },
  {
    name: "Demo Project",
    category: "AI/ML Project",
    url: "https://samartube.vercel.app",
  },
  {
    name: "Youtube Clone",
    category: "API Project",
    url: "https://samartube.vercel.app",
  },
  {
    name: "ChatGPT Clone",
    category: "API Project",
    url: "https://samartube.vercel.app",
  },
  {
    name: "Google Maps Clone",
    category: "API Project",
    url: "https://samartube.vercel.app",
  },
  {
    name: "Employee Managaement System",
    category: "Other Project",
    url: "https://samartube.vercel.app",
  },
  {
    name: "Demo Project",
    category: "Other Project",
    url: "https://samartube.vercel.app",
  },
  {
    name: "Demo Project",
    category: "Other Project",
    url: "https://samartube.vercel.app",
  },
];

const projectDescriptions = [
  {
    title: "Real Estate Application",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "Blog Website",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "Auction Platform",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "House Price Prediction",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "Demo Project",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "Demo Project",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "Youtube Clone",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "ChatGPT Clone",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "Google Maps Clone",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "Employee Managaement System",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "Demo Project",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "Demo Project",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
];

const renderProjectInfo = (index) => {
  const project = projectInfoData[index];
  return (
    <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
      <h3>Project information</h3>
      <ul>
        <li>
          <strong>Project Name</strong>: {project.name}
        </li>
        <li>
          <strong>Project Category</strong>: {project.category}
        </li>
        <li>
          <strong>Project URL</strong>:{" "}
          <a href={project.url} target="_blank">
            SamarTube
          </a>
        </li>
      </ul>
    </div>
  );
};

const renderProjectDescription = (index) => {
  const projectDesc = projectDescriptions[index];
  return (
    <div
      className="portfolio-description"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h2>{projectDesc.title}</h2>
      <p className="justify">{projectDesc.description}</p>
    </div>
  );
};

export const webProjectInfo = projectInfoData.slice(0, 3);
export const webProjectDescriptions = projectDescriptions.slice(0, 3);

export const aimlProjectInfo = projectInfoData.slice(3, 6);
export const aimlProjectDescriptions = projectDescriptions.slice(3, 6);

export const apiProjectInfo = projectInfoData.slice(6, 9);
export const apiProjectDescriptions = projectDescriptions.slice(6, 9);

export const otherProjectInfo = projectInfoData.slice(9, 12);
export const otherProjectDescriptions = projectDescriptions.slice(9, 12);
