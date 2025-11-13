import React from 'react';
import { Header } from './components/Header';
import Dashboard from './components/Dashboard';
import { AnimatedBackground } from './components/AnimatedBackground';
import { useGoogleSheetData } from './hooks/useGoogleSheetData';

const App: React.FC = () => {
  const { data, loading, error, overallConversionRatio, remainingTarget } = useGoogleSheetData();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900 text-white flex flex-col">
      {/* Animated Gradient Background */}
      <div className="animated-gradient fixed inset-0 z-[-2]"></div>
      
      {/* Animated Shapes Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col flex-grow">
        <Header overallConversionRatio={overallConversionRatio} remainingTarget={remainingTarget} />
        <Dashboard data={data} loading={loading && !data} error={error} />
      </main>
    </div>
  );
};

export default App;