import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Menu, Linkedin, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Software Engineer with 5+ years of experience building Java full-stack applications using Spring Boot, Angular, AWS, and microservices. Improved system availability by 60% and reduced deployment time from 3 days to 4 hours. Delivered scalable solutions supporting 150K+ users, 50+ microservices, and 3,000+ endpoint checks.";

  const experience = [
    {
      company: "Community Dreams Foundation",
      role: "Full Stack Developer - Full-time",
      location: "IL, USA",
      dates: "Nov. 2025 - Present",
      highlights: [
        "Implemented circuit breaker patterns with Resilience4j in Spring Boot microservices, reducing service downtime by 60% and strengthening fault tolerance across distributed systems.",
        "Spearheaded responsive Angular components using TypeScript and RxJS, integrating REST APIs for real-time data binding and reactive form validation across user workflows."
      ]
    },
    {
      company: "Wolters Kluwer (Client)",
      role: "Software Developer",
      location: "Chicago, IL",
      dates: "Jan. 2025 - Oct. 2025",
      highlights: [
        "Delivered full-stack modernization using Spring Boot microservices and Angular-based frontend architecture, shipping domain-driven services over a 6-month timeline with zero production incidents.",
        "Collaborated with cross-functional teams to architect an Angular security layer with JWT token management, route guards, role-based access control, and context-aware authorization across 12 endpoints serving 150K+ monthly users.",
        "Developed a reusable Angular component library using Tailwind CSS, TypeScript, and NgRx across 50+ components, accelerating feature development by 35% and reducing CSS bundle size by 82%.",
        "Deployed an INT4-AWQ optimized LLM on AWS SageMaker for billing query automation, achieving 93% accuracy, 2.1K tokens per second throughput, and reducing inference costs by $10K annually."
      ]
    },
    {
      company: "Wolters Kluwer (Client)",
      role: "Software Developer",
      location: "Chicago, IL",
      dates: "May. 2023 - Dec. 2023",
      highlights: [
        "Developed scalable RESTful microservices using Spring Boot and Swagger, enabling seamless Angular integration and improving system performance across domain-driven applications.",
        "Enhanced monitoring and logging workflows through Splunk integration, improving issue tracking accuracy and response efficiency by 100% for critical applications.",
        "Implemented end-to-end UI automation using Playwright and integrated test execution with Azure Pipelines, reducing manual regression effort by 85% and improving release reliability by 30%.",
        "Orchestrated advanced Angular workflows for filtering, sorting, and pagination using TanStack Query and data visualization libraries, improving analytics dashboard efficiency by 40%."
      ]
    },
    {
      company: "Wolters Kluwer",
      role: "Associate Network Engineer",
      location: "Pune, India",
      dates: "Jun. 2019 - Jul. 2021",
      highlights: [
        "Collaborated with operations and engineering teams to engineer FastAPI REST services, an Angular dashboard frontend, and multi-threaded Python scripts, processing 3,000+ endpoint health checks in under 5 minutes and reducing manual verification effort by 95%.",
        "Implemented CI/CD pipelines on AWS using Docker and Jenkins, reducing deployment cycles from 3 days to 4 hours and cutting production incidents by 40% through automated rollback workflows.",
        "Streamlined blue-green deployment workflows using Terraform, Python orchestration, and Prometheus monitoring across 50+ microservices, reducing rollback time by 85% and eliminating downtime.",
        "Architected a ServiceNow-to-Power BI analytics pipeline using Python backend services and Angular visualizations, tracking 500+ monthly incidents at 95% SLA compliance and improving response time by 30%."
      ]
    }
  ];

  const projects = [
    {
      title: "AI-Powered Video Analysis & Retrieval System",
      subtitle: "CLIP, AWS Bedrock, Kubernetes, NVIDIA MPS",
      category: "Applied AI System",
      introduction: "Built a production video analysis system using CLIP for incident detection and multimodal LLM analysis via AWS Bedrock, processing 1,800+ videos through Kubernetes orchestration and NVIDIA MPS acceleration.",
      problem: "Large-scale video repositories are difficult to search manually, and incident analysis requires fast, accurate retrieval while preserving security boundaries and controlling inference costs.",
      objective: "Create a scalable multimodal retrieval platform that improves incident detection accuracy, reduces query latency, and enforces secure access controls for enterprise video analytics.",
      methodology: [
        "Integrated CLIP embeddings with AWS Bedrock-powered multimodal analysis workflows.",
        "Orchestrated processing pipelines on Kubernetes with NVIDIA MPS acceleration.",
        "Built an evaluation framework covering retrieval accuracy, p95 query latency, and cost per query.",
        "Applied role-based vector isolation and PII filtering to satisfy security and compliance requirements."
      ],
      results: [
        "Processed 1,800+ videos with 95% incident detection accuracy.",
        "Achieved 87% retrieval accuracy with 3.8-second p95 latency.",
        "Maintained average query cost at const projects = [
    {
      title: "AI Interview Intelligence Platform",
      subtitle: "NYU Capstone Project · Go to Market Strategy for AI Recruitment Tool",
      category: "GenAI Product",
      introduction: "Developed a comprehensive Go-to-Market strategy for an AI-powered recruitment and interview intelligence platform. Conducted extensive market research, competitive analysis, and customer discovery to define market entry strategy, positioning, and launch roadmap for enterprise AI recruitment solutions.",
      problem: "Traditional interview and recruitment processes lack data-driven insights and consistency, leading to suboptimal hiring decisions and candidate experiences. AI recruitment tools face adoption barriers and unclear go-to-market positioning.",
      objective: "Create a defensible Go-to-Market strategy for an AI recruitment platform that enables successful market entry, clear value proposition, and scalable adoption across enterprises.",
      methodology: [
        "Authored product vision and Go-to-Market strategy document.",
        "Benchmarked 40+ competitors to identify market gaps and opportunities.",
        "Defined target segments, positioning, and pricing strategy.",
        "Developed phased launch roadmap and success metrics."
      ],
      results: [
        "Identified key market differentiators and positioning strategy.",
        "Established clear market entry plan and phased roadmap.",
        "Created actionable GTM playbook with technical and commercial specifications."
      ],
      conclusion: "Successfully demonstrated end-to-end product management skills from market research to Go-to-Market strategy for an AI-powered enterprise recruitment solution.",
      link: "https://drive.google.com/file/d/1RVhSoUjai1VkC77Ga04F29NZJ1Q8YZAE/view?usp=sharing"
    },
    {
      title: "Design Strategy",
      subtitle: "Design Strategy Project",
      category: "Design Strategy",
      introduction:
        "Design strategy project addressing the Sandwich Generation problem — adults aged 40–60 doing double duty caring for young and adult children as well as aging parents. The project explores product insights, user research, and strategic decision modeling to create solutions that help multigenerational caregivers survive and thrive.",
      problem:
        "53 million Americans provide unpaid care to family members, often balancing full-time jobs and caregiving responsibilities. This invisible labor leads to emotional burnout, financial stress from out-of-pocket expenses, career disruptions, and family tensions due to unshared caregiving load. Existing wellness apps don't offer tools for shared caregiving, mental health support, or recognition.",
      objective:
        "Build a data-driven, user-centered approach that converts raw caregiving pain points into actionable product concepts, visual analytics, and strategic recommendations — bridging family life and workplace wellness in a $100B+ market.",
      methodology: [
        "Conducted primary user interviews with sandwich-generation caregivers to validate assumptions against real behaviors and preferences.",
        "Applied design strategy frameworks: opportunity hypothesis generation, \"What We Thought vs. What We Learnt\" insight mapping, and cliché auditing.",
        "Built product concepts (CareXP, Time Trader) with user journeys, flywheels, and How-to-Win strategies.",
        "Developed TAM/SAM/SOM market sizing, financial projections, and Business Model Canvas for each opportunity area."
      ],
      results: [
        "Generated actionable product insights from primary research — community-driven emotional support preferred over clinical therapy; financial rewards appealing regardless of income level.",
        "Demonstrated a practical design strategy workflow from problem framing through opportunity hypothesis, user journey mapping, flywheel design, and go-to-market strategy.",
        "Presented two distinct product concepts with market analysis (CareXP: $60B TAM, Time Trader: $1B TAM), subscription pricing models, and 3-year financial projections."
      ],
      conclusion:
        "The project demonstrates the integration of design strategy techniques with product thinking to generate valuable business insights — transforming the caregiving challenge into two viable platform concepts that address emotional burnout, family coordination, and workplace wellness for the sandwich generation.",
      link: "https://drive.google.com/file/d/1ZSCh9qU2NNUbuHnmkvnP5xEeFVjQot09/view?usp=sharing"
    },
    {
      title: "Strategic Risk & Resource Modeling",
      subtitle: "NYU Stern Analytics Project",
      category: "Data Analytics & Strategy",
      introduction: "Applied advanced analytics and simulation techniques to optimize budget allocation decisions for an $80M portfolio.",
      problem: "Complex budget allocation decisions across multiple initiatives require rigorous analytical approach to optimize resource distribution and manage risk.",
      objective: "Optimize $80M budget allocation using statistical modeling and simulation to inform prioritization trade-offs.",
      methodology: [
        "Ran 1,000-trial Monte Carlo simulations for risk assessment.",
        "Used confidence intervals to quantify uncertainty ranges.",
        "Applied RICE-based prioritization framework.",
        "Developed scenario models for different allocation strategies."
      ],
      results: [
        "Provided data-driven recommendations for budget allocation.",
        "Quantified risk exposure across different scenarios.",
        "Enabled informed trade-off decisions using statistical evidence."
      ],
      conclusion: "Showcased ability to apply advanced analytics and statistical methods to strategic business decisions."
    },
    {
      title: "Ashwa Racing - FSAE Program Lead",
      subtitle: "120-member Racing Team",
      category: "Program Management",
      introduction: "Directed roadmap execution and cross-team dependency management for a 120-member Formula SAE racing program, overseeing multiple engineering workstreams.",
      problem: "Large-scale engineering programs require strong governance and coordination across multiple teams to deliver complex systems on time.",
      objective: "Strengthen delivery governance and reduce execution risk across a 120-member program while improving operational stability.",
      methodology: [
        "Established roadmap execution framework across all teams.",
        "Managed cross-team dependencies and critical path items.",
        "Implemented delivery governance processes.",
        "Coordinated resource allocation and timeline management."
      ],
      results: [
        "Reduced execution risk through improved governance.",
        "Enhanced operational stability across all workstreams.",
        "Successfully delivered complex engineering program."
      ],
      conclusion: "Demonstrated program management expertise at scale, coordinating large teams toward complex technical deliverables."

    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Programming Languages',
      skills: ['Java', 'TypeScript', 'Python', 'C++', 'SQL']
    },
    {
      icon: TrendingUp,
      title: 'Backend & Frontend',
      skills: ['Spring Boot', 'Angular', 'React', 'Django', 'NgRx', 'React Query', 'Zod']
    },
    {
      icon: Users,
      title: 'Cloud & DevOps',
      skills: ['AWS (S3, EC2, Lambda, SageMaker)', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD']
    },
    {
      icon: Lightbulb,
      title: 'Data, APIs & Tools',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'GraphQL', 'Playwright', 'Cypress', 'Splunk', 'Grafana', 'PagerDuty', 'Git', 'Jira', 'Confluence', 'Power BI', 'ServiceNow', 'Pandas', 'NumPy']
    }
  ];

  const education = [
    {
      school: "Rochester Institute of Technology",
      degree: "Master of Science, Computer Science",
      location: "Rochester, NY",
      dates: "May 2025",
      details: "Graduate studies in computer science with a strong focus on software systems and applied engineering."
    },
    {
      school: "K.J Somaiya College of Engineering",
      degree: "Bachelor of Technology, Information Technology",
      location: "Maharashtra, India",
      dates: "May 2019",
      details: "Undergraduate foundation in information technology, software engineering, and system design."
    }
  ];
  const papers = [
    // Add your published papers below. Example format:
    // { title: "Paper Title", publication: "Journal/Conference Name", year: "2024", link: "https://..." },
  ];

  const certifications = [];

  return (
    <div className="min-h-screen bg-cream overflow-x-auto">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              HARDIK TANNA
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certificate' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certificate' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Hardik Tanna"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              HARDIK TANNA
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Software Engineer | Java Full Stack | Spring Boot, Angular, AWS
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              Rochester, NY, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'SYSTEM AVAILABILITY IMPROVEMENT', value: '60%', detail: 'Reduced downtime across distributed services' },
              { label: 'DEPLOYMENT TIME REDUCTION', value: '3 DAYS TO 4 HRS', detail: 'Accelerated CI/CD delivery' },
              { label: 'USERS SUPPORTED', value: '150K+', detail: 'Enterprise-scale applications' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Full-stack engineer specializing in Java, Spring Boot, Angular, AWS, and scalable distributed systems across enterprise and nonprofit environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Backend Engineering',
                detail: 'Define product vision, north star metrics, and roadmap prioritization using RICE/ICE frameworks. Delivered $13M in business value through structured use case evaluation and phased roadmap investments.'
              },
              {
                icon: Rocket,
                title: 'Frontend Delivery',
                detail: 'Develops modern Angular experiences with TypeScript, RxJS, NgRx, Tailwind CSS, and reusable component systems that improve developer velocity and user workflows.'
              },
              {
                icon: Lightbulb,
                title: 'Cloud & Automation',
                detail: 'Delivers AWS-based deployments, CI/CD pipelines, monitoring integrations, and AI workloads that reduce deployment time, improve uptime, and support large-scale usage.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Engineering experience across Spring Boot microservices, Angular applications, AWS deployments, monitoring, and automation at enterprise scale.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {role.highlightsLink && (
                  <div className="mt-4 flex items-center text-brown hover:text-black transition-colors hover:underline">
                    <span className="text-sm font-light">View Highlights</span>
                    <a href={role.highlightsLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                    </a>
                  </div>
                )}

                {role.certificateLink && (
                  <div className="mt-2 flex items-center text-brown hover:text-black transition-colors hover:underline">
                    <span className="text-sm font-light">View Certificate</span>
                    <a href={role.certificateLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Applied AI and full-stack engineering work focused on scalability, retrieval performance, and production readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or product documentation?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
              {projects[selectedProject].link && (
                <div>
                  <h3 className="text-lg font-display text-black mb-3 tracking-wide">
                    {projects[selectedProject].subtitle?.includes('Capstone') ? 'PRESENTATION DECK (PDF)' : 'LINK'}
                  </h3>
                  <a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                  >
                    {projects[selectedProject].subtitle?.includes('Capstone') ? 'View Presentation Deck (PDF)' : 'View Project'}
                    <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Languages, frameworks, cloud platforms, data systems, and engineering tools used across full-stack delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Published Section */}
      {papers.length > 0 && (
      <section id="papers" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">PAPERS PUBLISHED</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Research and publications in product management, AI, and technology.
            </p>
          </div>
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                <p className="text-brown font-medium mb-2">{paper.publication} · {paper.year}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                >
                  View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Certifications Section */}
      {certifications.length > 0 && (
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                <p className="text-brown leading-relaxed font-light">{cert.description}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline">
                  View Certificate <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's connect about software engineering, Java full-stack development, cloud architecture, or full-stack opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+15852900963"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (585) 290 0963
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/hardiktanna9719"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:tannahardik725@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                tannahardik725@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2026 Hardik Tanna | Software Engineering & Full-Stack Development.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
