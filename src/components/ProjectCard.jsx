
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-white text-6xl">📁</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {project.name}
        </h3>
        <p className="text-gray-600 mb-4 h-20 overflow-hidden">
          {project.description || 'No description available'}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              ⭐ {project.stargazers_count}
            </span>
            <span className="flex items-center">
              🔀 {project.forks_count}
            </span>
          </div>
        </div>
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
