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
        min-w-max transform -translate-y-1 
        rounded-xl bg-gray-900/50 backdrop-blur-lg border-t-2 ${borderColor} 
        p-2 sm:p-3 shadow-2xl ${shadowColor}
      `}
    >
      <div className="flex justify-between items-baseline mb-1 sm:mb-2 gap-2 sm:gap-4">
        <p className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">{title}</p>
        <p className={`text-lg sm:text-2xl font-bold bg-clip-text text-transparent ${gradient}`}>
          {value}
        </p>
      </div>
      <div className="w-full bg-black/30 rounded-full h-1 sm:h-1.5 overflow-hidden">
        <div 
          className={`h-1 sm:h-1.5 rounded-full ${gradient}`}
          style={{ width: `${barPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export const Header: React.FC<HeaderProps> = ({ overallConversionRatio, remainingTarget }) => {
  const { date, time } = useDateTime();

  return (
    <header className="flex items-center w-full gap-2 sm:gap-4 mb-4 flex-nowrap">
      {/* Left: Title */}
      <div className="flex-shrink-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Incoming-NBD&nbsp;
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-green-600">
                INDIA
            </span>
        </h1>
      </div>

      {/* Center: Stat Cards */}
      <div className="flex-grow flex items-center justify-center gap-2 sm:gap-4">
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

      {/* Right: Date & Time */}
      <div className="flex-shrink-0">
         <div className="text-right p-2 sm:p-3 rounded-xl bg-gray-800/60 backdrop-blur-lg border border-white/10 shadow-lg">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-wider whitespace-nowrap">{time}</p>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 whitespace-nowrap">{date}</p>
        </div>
      </div>
    </header>
  );
};
