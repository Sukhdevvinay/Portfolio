import React from 'react';
import { motion } from 'framer-motion';
import { User, Activity, MapPin, Calendar,Star, Award, Trophy} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-1 bg-iron-arc shadow-[0_0_10px_#00f3ff]" />
          <h2 className="text-3xl md:text-4xl font-hud font-bold text-white tracking-wider">
            PILOT <span className="text-iron-gold">PROFILE</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Holographic Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-iron-red to-iron-gold opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500 rounded-lg" />
            <div className="relative h-96 w-full bg-iron-panel border border-iron-arc/30 rounded-lg overflow-hidden backdrop-blur-sm flex items-center justify-center">
              {/* Replace with actual image */}
              <User className="w-32 h-32 text-iron-arc/50" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

              {/* HUD Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-iron-arc" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-iron-arc" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-iron-arc" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-iron-arc" />
            </div>
          </motion.div>

          {/* Profile Data */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-iron-panel p-6 border-l-4 border-iron-gold relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 text-xs font-hud text-iron-arc/50">DATA_BLOCK_01</div>
              <p className="text-gray-300 font-body text-lg leading-relaxed">
                Software Development Engineer with a focus on building robust, high-performance web applications.
                Like a well-oiled suit of armor, I craft code that is durable, efficient, and ready for any mission.
                Specializing in the MERN stack and modern frontend architectures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-iron-dark/50 p-4 border border-iron-red/30 rounded">
                <Star className="text-iron-red" />
                <div>
                  <div className="text-xs font-hud text-gray-500">Codechef</div>
                  <div className="text-iron-gold font-bold">3*</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-iron-dark/50 p-4 border border-iron-red/30 rounded">
                <Award  className="text-iron-red" />
                <div>
                  <div className="text-xs font-hud text-gray-500">Leetcode</div>
                  <div className="text-iron-gold font-bold">Knight Badge (1819+) </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-iron-dark/50 p-4 border border-iron-red/30 rounded">
                <Award  className="text-iron-red" />
                <div>
                  <div className="text-xs font-hud text-gray-500">Leetcode</div>
                  <div className="text-iron-gold font-bold">Knight Badge (1819+) </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-iron-dark/50 p-4 border border-iron-red/30 rounded">
                <Trophy className="text-iron-red" />
                <div>
                  <div className="text-xs font-hud text-gray-500">Codeforces</div>
                  <div className="text-iron-gold font-bold">Specialist (1410+) </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-iron-dark/50 p-4 border border-iron-red/30 rounded">
                <Trophy className="text-iron-red" />
                <div>
                  <div className="text-xs font-hud text-gray-500">EXPERIENCE</div>
                  <div className="text-iron-gold font-bold">SDE I LEVEL</div>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


