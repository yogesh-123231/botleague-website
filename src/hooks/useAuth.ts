import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCredentials, clearCredentials, setError, setLoading } from '../store/authSlice';
import { User } from '../types';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, loading, error } = useSelector((state: RootState) => state.auth);

  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    // Simulate network latency (500ms) for high-fidelity experience
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (email === 'test@botleague.com' && password === 'password123') {
      const mockUser: User = {
        email,
        name: 'Alex Innovator',
      };
      const mockToken = 'mock-jwt-token-botleague-12345';
      dispatch(setCredentials({ user: mockUser, token: mockToken }));
      dispatch(setLoading(false));
      return true;
    } else {
      dispatch(setError('Invalid email or password. Use: test@botleague.com / password123'));
      dispatch(setLoading(false));
      return false;
    }
  };

  const register = async (name: string, email: string): Promise<boolean> => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    await new Promise((resolve) => setTimeout(resolve, 500));

    // For register, we can automatically log them in with their custom name!
    const mockUser: User = {
      email,
      name,
    };
    const mockToken = 'mock-jwt-token-botleague-12345';
    dispatch(setCredentials({ user: mockUser, token: mockToken }));
    dispatch(setLoading(false));
    return true;
  };

  const logout = () => {
    dispatch(clearCredentials());
  };

  return {
    user,
    token,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!token,
  };
};
