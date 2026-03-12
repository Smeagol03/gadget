import React from 'react';

export const SectionHeader = ({ title, subtitle, centered = false }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6">
      {title}
    </h2>
    <p className="text-lg text-gray-500 max-w-2xl font-medium leading-relaxed mx-auto">
      {subtitle}
    </p>
  </div>
);

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = "px-8 py-4 text-[13px] font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30",
    secondary: "bg-gray-900 text-white hover:bg-black",
    outline: "border-2 border-gray-100 text-gray-900 hover:border-blue-600 hover:text-blue-600"
  };
  
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const TechLabel = ({ children, className = "" }) => (
  <span className={`tech-mono text-[10px] font-bold uppercase tracking-widest text-blue-600 ${className}`}>
    {children}
  </span>
);
