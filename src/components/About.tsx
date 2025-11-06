import { Target, Users, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about-trident-nss" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About National Service Scheme</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The National Service Scheme (NSS) is a Central Sector Scheme of Government of India,
            launched in 1969, providing hands-on experience to young students in delivering community service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide opportunities to students for their holistic development through community service.
              NSS aims to develop among the youth a sense of social and civic responsibility, utilizing their
              knowledge in finding practical solutions to community problems.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-lg font-semibold text-blue-900 mb-2">"NOT ME, BUT YOU"</p>
              <p className="text-gray-700">
                This motto reflects the essence of democratic living and upholds the need for
                selfless service and appreciation of others' perspectives.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  Understand the community in which students work
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  Identify the needs and problems of the community and involve them in problem-solving
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  Develop among themselves a sense of social and civic responsibility
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  Utilize their knowledge in finding practical solutions to individual and community problems
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={32} />
            </div>
            <h4 className="text-3xl font-bold text-blue-900 mb-2">40L+</h4>
            <p className="text-gray-700 font-medium">Active Volunteers</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={32} />
            </div>
            <h4 className="text-3xl font-bold text-green-900 mb-2">42,000+</h4>
            <p className="text-gray-700 font-medium">Institutions</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={32} />
            </div>
            <h4 className="text-3xl font-bold text-orange-900 mb-2">55+</h4>
            <p className="text-gray-700 font-medium">Years of Service</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white" size={32} />
            </div>
            <h4 className="text-3xl font-bold text-red-900 mb-2">1000+</h4>
            <p className="text-gray-700 font-medium">Communities Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}
