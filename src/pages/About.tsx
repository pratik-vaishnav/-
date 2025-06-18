import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Pratik Vaishnav
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get to know more about my journey, education, and what drives me
              as a developer
            </p>
          </div>

          {/* Coming Soon Notice */}
          <Card className="p-8 text-center mb-8 border-2 border-dashed border-primary-200">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Detailed About Page Coming Soon
              </h2>
              <p className="text-gray-600 mb-4">
                I'm currently crafting a comprehensive about page that will
                include my full journey, education details, personal interests,
                and what motivates me in software development.
              </p>
              <Badge variant="secondary" className="px-4 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                Available in Next Update
              </Badge>
            </CardContent>
          </Card>

          {/* Quick Preview */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary-600" />
                  Education
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">
                      Bachelor of Engineering in Computer Engineering
                    </p>
                    <p className="text-sm text-gray-600">
                      Government Engineering College, Modasa
                    </p>
                    <p className="text-sm text-gray-500">
                      2013 – 2017 | CGPA: 8.40 / 10.00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary-600" />
                  Interests & Hobbies
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    • Reading inspirational stories and thoughts
                  </p>
                  <p className="text-sm text-gray-600">• Cricket enthusiast</p>
                  <p className="text-sm text-gray-600">
                    • Singing song rhythms
                  </p>
                  <p className="text-sm text-gray-600">
                    • Upholding honesty and responsibility
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
