import React from 'react';
import { useDateTime } from '../hooks/useDateTime';

interface HeaderProps {
  overallConversionRatio: number;
  remainingTarget: number;
}

const StatCard: React.FC<{
  title: string;
  value: string;
  barPercentage: number;
  gradient: string;
  borderColor: string;
  shadowColor: string;
}> = ({ title, value, barPercentage, gradient, borderColor, shadowColor }) => {
  return (
    <div 
      className={`
        w-64 transform -translate-y-1 
        rounded-xl bg-gray-900/50 backdrop-blur-lg border-t-2 ${borderColor} 
        p-4 shadow-2xl ${shadowColor}
      `}
    >
      <div className="flex justify-between items-baseline mb-2">
        <p className="text-sm text-gray-300 whitespace-nowrap">{title}</p>
        <p className={`text-2xl font-bold bg-clip-text text-transparent ${gradient}`}>
          {value}
        </p>
      </div>
      <div className="w-full bg-black/30 rounded-full h-1.5 overflow-hidden">
        <div 
          className={`h-1.5 rounded-full ${gradient}`}
          style={{ width: `${barPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export const Header: React.FC<HeaderProps> = ({ overallConversionRatio, remainingTarget }) => {
  const { date, time } = useDateTime();

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-4 flex-shrink-0 w-full">
      {/* Left Group */}
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 lg:gap-8 mb-4 sm:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 shrink-0">
            Incoming-NBD Report
        </h1>
        <div className="flex items-center gap-4">
            <StatCard 
              title="Overall Conversion"
              value={`${overallConversionRatio.toFixed(2)}%`}
              barPercentage={overallConversionRatio}
              gradient="bg-gradient-to-r from-green-400 to-teal-500"
              borderColor="border-green-400"
              shadowColor="shadow-[0_0_20px_theme(colors.green.500/0.4)]"
            />
            <StatCard 
              title="Remaining Target"
              value={remainingTarget.toLocaleString()}
              barPercentage={100} // Decorative full bar
              gradient="bg-gradient-to-r from-amber-400 to-orange-500"
              borderColor="border-amber-400"
              shadowColor="shadow-[0_0_20px_theme(colors.amber.500/0.4)]"
            />
        </div>
      </div>

      {/* Right Group */}
      <div className="text-right p-3 rounded-xl bg-gray-800/60 backdrop-blur-lg border border-white/10 shadow-lg shrink-0">
        <p className="text-xl md:text-2xl font-semibold text-white tracking-wider">{time}</p>
        <p className="text-sm md:text-base text-gray-300">{date}</p>
      </div>
    </header>
  );
};