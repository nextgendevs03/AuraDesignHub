import React from 'react';
import { Star } from 'lucide-react';
import Login from './Login';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white/90 text-lg font-medium">Trusted by 40+ clients</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-6xl font-bold text-white mb-4 leading-tight">
              Transform Your 
              <span className="block text-amber-400">Space</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-1xl text-white/90 mb-5 max-w-1xl leading-relaxed">
              Premium interior design services that bring your vision to life. 
              From concept to completion, we create spaces that inspire.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 max-w-lg">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-white/80 text-sm lg:text-base">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">40+</div>
                <div className="text-white/80 text-sm lg:text-base">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-white/80 text-sm lg:text-base">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Login Form - Right Side */}
          {/* <Login className="w-full max-w-md flex justify-center lg:justify-end" /> */}
           <div className="flex justify-center lg:justify-end">
            <Login className="w-full max-w-xs" />
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

