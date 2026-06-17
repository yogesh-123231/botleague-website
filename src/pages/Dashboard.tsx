import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/common/Button';
import { Shield, Sparkles, LogOut, Award, Calendar } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 font-body">
      <div className="bg-brand-grey/50 border border-white/5 p-8 rounded-2xl space-y-8 max-w-4xl mx-auto relative overflow-hidden">
        
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shadow-[0_0_15px_rgba(255,76,76,0.1)]">
              <Shield size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold uppercase tracking-wider text-white font-display">
                Dashboard
              </h1>
              <p className="text-sm text-gray-400">
                Welcome back, <span className="text-white font-medium">{user?.name || user?.email}</span>
              </p>
            </div>
          </div>
          <Button variant="secondary" size="sm" onClick={handleLogout} className="flex items-center gap-1.5 self-start md:self-auto">
            <LogOut size={14} />
            LOGOUT
          </Button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
            <div className="flex items-center justify-between text-brand-red">
              <Award size={22} />
              <span className="text-[10px] bg-brand-red/10 border border-brand-red/20 px-2.5 py-1 rounded-full font-bold uppercase">Rank #12</span>
            </div>
            <h3 className="text-white font-bold uppercase text-sm tracking-wider font-display">National Placement</h3>
            <p className="text-xs text-gray-400">Standardized evaluation active. Complete next event qualifier to benchmark score.</p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
            <div className="flex items-center justify-between text-brand-red">
              <Calendar size={22} />
              <span className="text-[10px] bg-brand-red/10 border border-brand-red/20 px-2.5 py-1 rounded-full font-bold uppercase">1 Active</span>
            </div>
            <h3 className="text-white font-bold uppercase text-sm tracking-wider font-display">Registered Matches</h3>
            <p className="text-xs text-gray-400">Mumbai BKC Robo Race starting in 24 days. Prepare your wireless controllers.</p>
          </div>
        </div>

        {/* Action Panel */}
        <div className="bg-brand-red/5 border border-brand-red/20 p-6 rounded-xl flex items-start space-x-4">
          <div className="text-brand-red mt-0.5">
            <Sparkles size={20} className="animate-pulse" />
          </div>
          <div className="space-y-1">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-display">Standardized Robotics Identity</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your professional robotics legacy and team profile is active. You can now build, compete, and track your metrics nationwide on BOTLEAGUE.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Dashboard;
