import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Calendar,
  Award,
  Code,
  Server,
  Cloud,
  Database,
  GitBranch,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const skills = [
    { name: "Java", level: "Expert", color: "bg-tech-java", years: "8+" },
    {
      name: "Spring Boot",
      level: "Expert",
      color: "bg-tech-spring",
      years: "7+",
    },
    { name: "React", level: "Advanced", color: "bg-cyan-500", years: "4+" },
    { name: "Angular", level: "Advanced", color: "bg-red-500", years: "3+" },
    { name: "AWS", level: "Advanced", color: "bg-tech-aws", years: "5+" },
    { name: "MySQL", level: "Expert", color: "bg-blue-600", years: "8+" },
  ];

  const achievements = [
    {
      title: "3x Employee of the Month",
      company: "Bluevine Technologies",
      description:
        "Recognized for exceptional ownership and contributions to key product deliveries",
      icon: Award,
    },
    {
      title: "BIAS Award",
      company: "Bluevine Technologies",
      description:
        "Recognized for upholding core values while leading critical backend services",
      icon: Users,
    },
    {
      title: "Lead Software Engineer",
      company: "Current Role",
      description:
        "Leading GST product vertical with real-time order processing and system optimization",
      icon: Code,
    },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "End-to-end application development with Java/Spring Boot backends and React/Angular frontends",
    },
    {
      icon: Server,
      title: "Backend Architecture",
      description:
        "Designed and optimized REST APIs serving 1M+ daily requests with microservices architecture",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Extensive AWS experience with containerized deployments using Docker and Kubernetes",
    },
    {
      icon: Database,
      title: "Modern UI/UX",
      description:
        "Responsive web applications with React hooks, Angular components, and modern JavaScript",
    },
  ];

  return (
    <PageTransition>
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent/5 min-h-[90vh] flex items-center">
          <div
            className={
              'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e5e7eb" fill-opacity="0.1"%3E%3Cpath d="M36 30c0-10.97-8.03-20-18-20s-18 9.03-18 20 8.03 20 18 20c4.46 0 8.55-1.63 11.7-4.3L41.4 57.4c.79.79 2.07.79 2.86 0 .79-.79.79-2.07 0-2.86L32.6 42.9c2.67-3.15 4.3-7.24 4.3-11.7z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-20'
            }
          ></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Section */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6 animate-fade-in">
                  <Badge
                    variant="secondary"
                    className="px-3 py-1 text-sm font-medium"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    Based in India
                  </Badge>
                  <Badge
                    variant="outline"
                    className="px-3 py-1 text-sm font-medium"
                  >
                    <Calendar className="w-3 h-3 mr-1" />
                    8+ Years Experience
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
                  Pratik Vaishnav
                </h1>

                <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-600 font-semibold mb-6 animate-fade-in">
                  Lead Full-Stack Developer & Cloud Architect
                </h2>

                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8 leading-relaxed animate-fade-in">
                  Experienced Lead Full-Stack Developer with 8+ years of
                  expertise in building end-to-end web applications.
                  Specializing in Java/Spring Boot backends, React/Angular
                  frontends, and AWS cloud infrastructure. Currently leading
                  development efforts for enterprise GST solutions at Bluevine
                  Technologies.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
                  <Button size="lg" asChild className="text-lg px-8 py-4">
                    <Link to="/projects" className="flex items-center gap-2">
                      View My Projects
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="text-lg px-8 py-4"
                  >
                    <a
                      href="https://pratik-vaishnav.github.io/Pratik_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download Resume
                    </a>
                  </Button>

                  <Button
                    variant="ghost"
                    size="lg"
                    asChild
                    className="text-lg px-8 py-4"
                  >
                    <Link to="/experience" className="flex items-center gap-2">
                      View Experience
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600">
                      8+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600">
                      3x
                    </div>
                    <div className="text-sm text-gray-600">
                      Employee of Month
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600">
                      50+
                    </div>
                    <div className="text-sm text-gray-600">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600">
                      5+
                    </div>
                    <div className="text-sm text-gray-600">Technologies</div>
                  </div>
                </div>
              </div>

              {/* Photo Section */}
              <div className="flex justify-center lg:justify-end animate-fade-in">
                <div className="relative">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent/20 rounded-3xl transform rotate-6 scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary-100 rounded-3xl transform -rotate-3 scale-105"></div>

                  {/* Profile photo */}
                  <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                    <img
                      src="https://cdn.builder.io/api/v1/assets/d1758924c55c4985a5cd6699a070ab55/img_1469-832a33?format=webp&width=800"
                      alt="Pratik Vaishnav - Lead Java Backend Developer"
                      className="w-80 h-80 object-cover rounded-2xl"
                    />

                    {/* Floating badge */}
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg border-4 border-primary-50">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent rounded-full flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">
                        Lead Engineer
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-8 -right-8 bg-white rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-primary-600" />
                      <span className="text-sm font-medium text-gray-700">
                        Backend Expert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Core Technologies
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized in modern backend technologies and cloud
                infrastructure with proven expertise
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <div
                      className={`w-12 h-12 rounded-full ${skill.color} mx-auto mb-4 flex items-center justify-center`}
                    >
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">{skill.level}</p>
                    <p className="text-xs text-primary-600 font-medium">
                      {skill.years} years
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What I Excel At
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                My expertise spans across backend development, cloud
                architecture, and system integration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <highlight.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Achievements
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Recognition for exceptional performance and leadership in
                software development
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <achievement.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-primary-600 mb-2">
                      {achievement.company}
                    </p>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-accent text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Portfolio
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Showcasing 8+ years of full-stack development expertise with
              modern technologies and best practices. Explore my experience,
              skills, and notable projects in enterprise software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8 py-4"
              >
                <Link to="/experience" className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  View Experience
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
              >
                <a
                  href="https://pratik-vaishnav.github.io/Pratik_Vaishnav_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default Index;
