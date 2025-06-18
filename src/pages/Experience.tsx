import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Lead Software Engineer",
      company: "Bluevine Technologies Pvt. Ltd.",
      period: "2024 – Present",
      location: "Remote",
      type: "Full-time",
      description:
        "Leading the GST product vertical, handling real-time order processing, downstream integrations, and vendor communication pipelines.",
      achievements: [
        "Designed and optimized REST APIs for critical backend systems",
        "Utilized AWS cloud stack extensively (EC2, RDS, S3, EKS, IAM, Route53, Load Balancers, MSK, Lambda)",
        "Deployed monitoring and alerting via Zenduty for system reliability",
        "Integrated Scouter for performance analysis and optimization",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Bluevine Technologies Pvt. Ltd.",
      period: "2021 – 2024",
      location: "Remote",
      type: "Full-time",
      description:
        "Contributed to the GST product vertical, focusing on real-time order processing and system optimization.",
    },
    {
      title: "Software Engineer",
      company: "Bluevine Technologies Pvt. Ltd.",
      period: "2020 – 2021",
      location: "Remote",
      type: "Full-time",
      description:
        "Assisted in the development and maintenance of backend systems for GST-related services.",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              8+ years of backend development experience across procurement,
              banking, and taxation domains
            </p>
          </div>

          {/* Current Role Highlight */}
          <Card className="p-8 mb-8 border-l-4 border-l-primary-500 bg-gradient-to-r from-primary-50 to-white">
            <CardContent className="p-0">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                    Lead Software Engineer
                  </h2>
                  <p className="text-lg text-primary-600 font-medium">
                    Bluevine Technologies Pvt. Ltd.
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-300">
                  Current Role
                </Badge>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  2024 – Present
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Remote
                </span>
              </div>

              <p className="text-gray-700 mb-6">
                Leading the GST product vertical, handling real-time order
                processing, downstream integrations, and vendor communication
                pipelines. Designed and optimized REST APIs for critical backend
                systems used across internal and external clients.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Key Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Java</Badge>
                    <Badge variant="outline">Spring Boot</Badge>
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">Kubernetes</Badge>
                    <Badge variant="outline">Kafka</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Achievements:
                  </h4>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Award className="w-4 h-4 text-yellow-500" />
                    3x Employee of the Month
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.slice(1).map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary-600 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <Badge variant="outline">{exp.type}</Badge>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-gray-700">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <Card className="p-8 text-center mt-12 border-2 border-dashed border-primary-200">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Complete Experience Details Coming Soon
              </h2>
              <p className="text-gray-600 mb-4">
                I'm preparing detailed information about all my previous roles
                including e-Procurement Technologies, Xomic Infotech,
                internships, and specific project accomplishments.
              </p>
              <Badge variant="secondary" className="px-4 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                Available in Next Update
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
