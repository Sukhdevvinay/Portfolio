import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-iron-red/10 blur-[100px]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-iron-arc/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-iron-dark/90 border border-iron-gold/30 rounded-lg p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)]"
        >
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="font-hud text-3xl md:text-4xl text-white mb-2">ESTABLISH <span className="text-iron-arc">CONNECTION</span></h2>
            <p className="text-gray-400 font-body">SECURE CHANNEL OPEN. TRANSMITTING ENCRYPTED DATA.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-iron-panel rounded border border-iron-arc/30 text-iron-arc">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-hud text-gray-300 text-sm">EMAIL FREQUENCY</h3>
                  <p className="text-white text-lg">sukhdevvinay9693@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-iron-panel rounded border border-iron-arc/30 text-iron-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-hud text-gray-300 text-sm">OPERATIONAL BASE</h3>
                  <p className="text-white text-lg">Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="pt-8 flex gap-4">
                <a href="https://github.com/Sukhdevvinay" className="p-3 bg-gray-800 rounded-full hover:bg-iron-blue hover:text-iron-arc transition-all border border-gray-700 hover:border-iron-arc">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/vinay-kumar-46310935b/" className="p-3 bg-gray-800 rounded-full hover:bg-blue-700 hover:text-white transition-all border border-gray-700 hover:border-blue-500">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="IDENTIFIER (NAME)"
                  className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-iron-gold focus:ring-1 focus:ring-iron-gold transition-all font-body tracking-wider placeholder:text-gray-600"
                />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-iron-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  placeholder="COMMUNICATION NODE (EMAIL)"
                  className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-iron-gold focus:ring-1 focus:ring-iron-gold transition-all font-body tracking-wider placeholder:text-gray-600"
                />
              </div>

              <div className="relative group">
                <textarea
                  rows="4"
                  placeholder="TRANSMISSION MESSAGE..."
                  className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-iron-gold focus:ring-1 focus:ring-iron-gold transition-all font-body tracking-wider placeholder:text-gray-600 resize-none"
                />
              </div>

              <button type="submit" className="w-full bg-iron-gold hover:bg-white text-iron-dark font-hud font-bold py-3 px-6 rounded transition-colors flex items-center justify-center gap-2 group">
                <span>TRANSMIT DATA</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

          </div>

          {/* Decorative scanner line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-iron-arc/50 to-transparent animate-[shimmer_3s_infinite]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
