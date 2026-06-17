import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

export const Register: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { register: registerUser, loading, error } = useAuth();
  const navigate = useNavigate();

  const password = watch('password');

  const onSubmit = async (data: any) => {
    const success = await registerUser(data.name, data.email);
    if (success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 font-body">
      <div className="w-full max-w-md p-8 bg-brand-grey border border-white/5 rounded-2xl shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold uppercase tracking-wide font-display">
            Join the <span className="gradient-text">League</span>
          </h2>
          <p className="text-sm text-gray-400">Create your athlete profile and join the ecosystem</p>
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-lg font-medium text-center font-display">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            id="name"
            label="Full Name"
            type="text"
            placeholder="Alex Innovator"
            error={errors.name?.message as string}
            {...register('name', { required: 'Name is required' })}
          />

          <Input
            id="email"
            label="Email Address"
            type="email"
            placeholder="alex@example.com"
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
            {...register('password', { 
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
          />

          <Input
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            error={errors.confirmPassword?.message as string}
            {...register('confirmPassword', { 
              required: 'Confirm your password',
              validate: (value) => value === password || 'Passwords do not match'
            })}
          />

          <div className="pt-2">
            <Button variant="primary" type="submit" loading={loading} className="w-full">
              CREATE ACCOUNT
            </Button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-brand-red hover:underline">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
