import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  // Your existing projects array
  {
    id: 1,
    title: "Task Manager App",
    description:
      "Key features included task creation, editing, deletion, stopwatch functionality, and notifications. Demonstrated strong design thinking and the ability to build clean, functional mobile applications.",
    image: "/public/project1.gif",
    tags: ["Kotlin", "Java", "Figma"],
    demoUrl: "#",
    githubUrl: "https://github.com/thanuxj1/TaskmanagerMapp",
  },
  {
    id: 2,
    title: "Scholar Vista",
    description:
      "Developed a fully functional research publication management web application with an integrated AI model for research categorization automatic data extraction, research paper analytics",
    image: "/public/project2.gif",
    tags: ["React", "Python", "MYSQL", "FastAPI", "Pre-trained AI model"],
    demoUrl: "#",
    githubUrl: "https://github.com/NavodyaDhanushka/Scholar_Vista",
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description: "Developed a web based real-time chat app with chat rooms ",
    image: "/public/project3.png",
    tags: ["Springboot", "JS", "Java"],
    demoUrl: "#",
    githubUrl: "https://github.com/thanuxj1/chatApp",
  },
  {
    id: 4,
    title: "Inventory System",
    description:
      "Built an admin-based web application for Dhaniya Flora Kandy to manage daily store operations. Key features include inventory tracking, order handling, and store management.",
    image: "/public/project4.gif",
    tags: ["MERN", "Vite"],
    demoUrl: "#",
    githubUrl: "https://github.com/thanuxj1/inventorySystem",
  },
];

export const ProjectsSection = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    initialSlide: 1, // Start with the middle project focused
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section id="projects" className="py-12 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="px-4">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id}>
                <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full mx-2 transform transition-all duration-300 scale-90 hover:scale-95">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          {/* bg effects<ExternalLink size={20} /> use when deployed*/}
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-center mt-8">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/thanuxj1"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
