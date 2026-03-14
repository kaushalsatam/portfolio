import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 flex flex-col items-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-semibold mb-14 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Solespace - Shoe E-Commerce Platform"
            description="
Full-stack e-commerce platform with admin dashboard for product and order management.
Built responsive React UI, implemented Node.js REST APIs, and integrated Razorpay payments.
"
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            tech={["React", "Node.js", "Express", "PostgreSQL", "Razorpay"]}
            live="https://solespace-ecommerce.vercel.app"
            github="https://github.com/kaushalsatam/shoe-store/"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
