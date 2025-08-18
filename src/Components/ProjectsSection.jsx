"use client"

import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const projects = [
  {
    id: 1,
    title: "Task Manager App",
    description:
      "Key features included task creation, editing, deletion, stopwatch functionality, and notifications. Demonstrated strong design thinking and the ability to build clean, functional mobile applications.",
    image: "/project1.gif",
    tags: ["Kotlin", "Java", "Figma"],
    demoUrl: "#",
    githubUrl: "https://github.com/thanuxj1/TaskmanagerMapp",
  },
  {
    id: 2,
    title: "Scholar Vista",
    description:
      "Developed a fully functional research publication management web application with an integrated AI model for research categorization automatic data extraction, research paper analytics",
    image: "/project2.gif",
    tags: ["React", "Python", "MYSQL", "FastAPI", "Pre-trained AI model"],
    demoUrl: "#",
    githubUrl: "https://github.com/NavodyaDhanushka/Scholar_Vista",
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description: "Developed a web based real-time chat app with chat rooms",
    image: "/project3.png",
    tags: ["Springboot", "JS", "Java"],
    demoUrl: "#",
    githubUrl: "https://github.com/thanuxj1/chatApp",
  },
  {
    id: 4,
    title: "Inventory System",
    description:
      "Built an admin-based web application for Dhaniya Flora Kandy to manage daily store operations. Key features include inventory tracking, order handling, and store management.",
    image: "/project4.gif",
    tags: ["MERN", "Vite"],
    demoUrl: "#",
    githubUrl: "https://github.com/thanuxj1/inventorySystem",
  },
  {
    id: 5,
    title: "Route 17 Web App",
    description:
      "A bus time schedule web app for SLIIT students with live updates and an admin side for managing schedules.",
    image: "/project5.gif",
    tags: ["React", "FastAPI", "MySQL", "Vercel"],
    demoUrl: "https://route17.vercel.app",
    githubUrl: "https://github.com/thanuxj1/route17",
  },
]

export const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef(null)
  const startX = useRef(0)
  const isDragging = useRef(false)

  const handleTouchStart = (e) => {
    console.log("[v0] Touch start detected")
    startX.current = e.touches[0].clientX
    isDragging.current = true
  }

  const handleTouchMove = (e) => {
    if (!isDragging.current) return
    console.log("[v0] Touch move detected")
    // Prevent default to avoid scrolling interference
    e.preventDefault()
  }

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return
    console.log("[v0] Touch end detected")

    const endX = e.changedTouches[0].clientX
    const diffX = startX.current - endX
    const threshold = 50 // Increased threshold for more deliberate swipes

    console.log("[v0] Swipe distance:", diffX, "Threshold:", threshold)

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        console.log("[v0] Swiping to next project")
        setCurrentIndex((prev) => (prev + 1) % projects.length)
      } else {
        console.log("[v0] Swiping to previous project")
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
      }
    }

    isDragging.current = false
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging.current && isAutoPlaying) {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const getItemOpacity = (index) => {
    const distance = Math.abs(index - currentIndex)
    if (distance === 0) return 1 // Center item
    if (distance === 1) return 0.6 // Adjacent items
    return 0.3 // Far items
  }

  const getItemScale = (index) => {
    return index === currentIndex ? 1 : 0.9
  }

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <section id="projects" className="py-12 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance,
          and user experience.
        </p>

        <div className="overflow-hidden pb-4 md:overflow-visible" ref={containerRef}>
          <div className="md:hidden relative">
            {/* Left navigation button */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/50 backdrop-blur-sm border rounded-full p-2 shadow-lg hover:bg-background/80 transition-all duration-300 opacity-60 hover:opacity-100"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right navigation button */}
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/50 backdrop-blur-sm border rounded-full p-2 shadow-lg hover:bg-background/80 transition-all duration-300 opacity-60 hover:opacity-100"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>

            <div className="flex justify-center">
              <div className="w-80 sm:w-96">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`cursor-pointer transition-all duration-500 ${
                      index === currentIndex ? "block" : "hidden"
                    }`}
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div className="group bg-card rounded-lg overflow-hidden shadow-xs h-full transition-all duration-500 hover:shadow-md">
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-3">
                            {project.demoUrl !== "#" && (
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink size={20} />
                              </a>
                            )}
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground/80 hover:text-primary transition-colors duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github size={20} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="hidden md:block relative overflow-hidden">
            {/* Left navigation button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/40 backdrop-blur-sm border rounded-full p-3 shadow-lg hover:bg-background/70 transition-all duration-300 opacity-50 hover:opacity-100"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right navigation button */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/40 backdrop-blur-sm border rounded-full p-3 shadow-lg hover:bg-background/70 transition-all duration-300 opacity-50 hover:opacity-100"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>

            <div
              className={`flex space-x-8 transition-transform duration-500 ${isAutoPlaying ? "animate-flow hover:pause-animation" : ""}`}
              style={{
                transform: `translateX(-${currentIndex * 320}px)`,
              }}
            >
              {/* First set of projects */}
              {projects.map((project, index) => (
                <div
                  key={`first-${project.id}`}
                  className={`flex-shrink-0 w-80 cursor-pointer transition-all duration-500 ${
                    selectedProject === project.id ? "opacity-100 scale-105" : "opacity-60 hover:opacity-100"
                  }`}
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="group bg-card rounded-lg overflow-hidden shadow-lg h-full transition-all duration-500 hover:shadow-xl hover:scale-105">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-3">{project.description}</p>

                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex space-x-4">
                          {project.demoUrl !== "#" && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={16} />
                              Demo
                            </a>
                          )}
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} />
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {projects.map((project, index) => (
                <div
                  key={`second-${project.id}`}
                  className={`flex-shrink-0 w-80 cursor-pointer transition-all duration-500 ${
                    selectedProject === project.id ? "opacity-100 scale-105" : "opacity-60 hover:opacity-100"
                  }`}
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="group bg-card rounded-lg overflow-hidden shadow-lg h-full transition-all duration-500 hover:shadow-xl hover:scale-105">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-3">{project.description}</p>

                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex space-x-4">
                          {project.demoUrl !== "#" && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={16} />
                              Demo
                            </a>
                          )}
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} />
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

      <style jsx>{`
        @keyframes flow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-flow {
          animation: flow 30s linear infinite;
        }
        
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
