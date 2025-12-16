import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import LiveEvents from '@/components/LiveEvents';
import SportsEvents from '@/components/SportsEvents';
import BetSlip from '@/components/BetSlip';
import Balance from '@/components/Balance';
import History from '@/components/History';
import Profile from '@/components/Profile';
import Help from '@/components/Help';
import Auth from '@/components/Auth';

export default function Index() {
  const [activeSection, setActiveSection] = useState('sport');
  const [betSlip, setBetSlip] = useState<any[]>([]);
  const [showAuth, setShowAuth] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addToBetSlip = (bet: any) => {
    setBetSlip([...betSlip, bet]);
  };

  const removeBet = (index: number) => {
    setBetSlip(betSlip.filter((_, i) => i !== index));
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowAuth(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'sport':
        return <SportsEvents onAddBet={addToBetSlip} />;
      case 'events':
        return <SportsEvents onAddBet={addToBetSlip} />;
      case 'live':
        return <LiveEvents onAddBet={addToBetSlip} />;
      case 'balance':
        return <Balance />;
      case 'history':
        return <History />;
      case 'profile':
        return <Profile />;
      case 'help':
        return <Help />;
      default:
        return <SportsEvents onAddBet={addToBetSlip} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onNavigate={setActiveSection} 
        activeSection={activeSection}
        onAuthClick={() => setShowAuth(true)}
        isAuthenticated={isAuthenticated}
      />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {renderContent()}
          </div>
          
          <div className="lg:col-span-1">
            <BetSlip bets={betSlip} onRemoveBet={removeBet} />
          </div>
        </div>
      </div>

      {showAuth && (
        <Auth 
          onClose={() => setShowAuth(false)}
          onSuccess={handleAuthSuccess}
        />
      )}
    </div>
  );
}
