import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

export const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    const success = await login(data.email, data.password);
    if (success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12 font-body">
      <div className="w-full max-w-md p-8 bg-brand-grey border border-white/5 rounded-2xl shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold uppercase tracking-wide font-display">
            Access <span className="gradient-text">Arena</span>
          </h2>
          <p className="text-sm text-gray-400">Login to manage your team and rankings</p>
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-lg font-medium text-center font-display">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            id="email"
            label="Email Address"
            type="email"
            placeholder="test@botleague.com"
            error={errors.email?.message as string}
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />

          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            error={errors.password?.message as string}
            {...register('password', { required: 'Password is required' })}
          />

          <div className="pt-2">
            <Button variant="primary" type="submit" loading={loading} className="w-full">
              LOGIN
            </Button>
          </div>
        </form>

        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center text-xs space-y-1 text-gray-400">
          <p className="font-semibold text-white uppercase tracking-wider text-[10px] font-display">Mock Credentials</p>
          <p>Email: <span className="text-brand-red">test@botleague.com</span></p>
          <p>Password: <span className="text-brand-red">password123</span></p>
        </div>

        <p className="text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" className="text-brand-red hover:underline">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
