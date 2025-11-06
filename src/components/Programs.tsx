import { Leaf, Heart, BookOpen, Droplet, Home, Lightbulb } from 'lucide-react';

const programs = [
  {
    icon: Leaf,
    title: 'Environmental Conservation',
    description: 'Tree plantation drives, cleanliness campaigns, waste management, and promoting sustainable practices in communities.',
    color: 'green'
  },
  {
    icon: Heart,
    title: 'Health & Hygiene',
    description: 'Health awareness camps, blood donation drives, sanitation programs, and promoting healthy living practices.',
    color: 'red'
  },
  {
    icon: BookOpen,
    title: 'Education & Literacy',
    description: 'Adult education programs, digital literacy initiatives, teaching underprivileged children, and promoting reading culture.',
    color: 'blue'
  },
  {
    icon: Droplet,
    title: 'Water Conservation',
    description: 'Rainwater harvesting, cleaning water bodies, awareness about water conservation, and promoting sustainable water use.',
    color: 'cyan'
  },
  {
    icon: Home,
    title: 'Rural Development',
    description: 'Community development projects, infrastructure improvement, skill development programs, and livelihood initiatives.',
    color: 'orange'
  },
  {
    icon: Lightbulb,
    title: 'Social Awareness',
    description: 'Campaigns on social issues, women empowerment, child rights, disability awareness, and promoting social harmony.',
    color: 'purple'
  }
];

const colorMap: { [key: string]: { bg: string; icon: string; border: string; hover: string } } = {
  green: { bg: 'bg-green-50', icon: 'bg-green-600', border: 'border-green-200', hover: 'hover:border-green-400' },
  red: { bg: 'bg-red-50', icon: 'bg-red-600', border: 'border-red-200', hover: 'hover:border-red-400' },
  blue: { bg: 'bg-blue-50', icon: 'bg-blue-600', border: 'border-blue-200', hover: 'hover:border-blue-400' },
  cyan: { bg: 'bg-cyan-50', icon: 'bg-cyan-600', border: 'border-cyan-200', hover: 'hover:border-cyan-400' },
  orange: { bg: 'bg-orange-50', icon: 'bg-orange-600', border: 'border-orange-200', hover: 'hover:border-orange-400' },
  purple: { bg: 'bg-violet-50', icon: 'bg-violet-600', border: 'border-violet-200', hover: 'hover:border-violet-400' }
};

export default function Programs() {
  return (
    <section id="programmes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programmes</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TRIDENT NSS volunteers participate in various community service programs aimed at
            holistic development of society and nation building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const colors = colorMap[program.color];
            const Icon = program.icon;

            return (
              <div
                key={index}
                className={`${colors.bg} border-2 ${colors.border} ${colors.hover} rounded-xl p-6 transition-all hover:shadow-xl hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 ${colors.icon} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
              </div>
            );
          })}
        </div>

        {/* Camping programmes section removed per request */}
      </div>
    </section>
  );
}
