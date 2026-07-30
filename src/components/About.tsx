import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { type AboutData } from "../data/about";

interface AboutProps {
  about: AboutData;
}

const About: React.FC<AboutProps> = ({ about }) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  return (
    <section
      id="about"
      ref={elementRef}
      className="py-32 bg-zinc-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              {about.badge}
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-100 mt-4 mb-6">
              {about.title}
            </h2>

            <div className="w-20 h-1 bg-white mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 delay-200 ${
                isIntersecting
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-zinc-400 leading-relaxed text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${
                isIntersecting
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {about.highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>

                    <h3 className="text-zinc-100 font-semibold text-lg mb-2">
                      {item.title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;