'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'react-hot-toast';

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      toast.success('Login simulated!');
      setIsLoading(false);
      router.replace('/dashboard');
    }, 1000);
  };

  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      // Simulate delay and success response
      await new Promise((res) => setTimeout(res, 1000));
      toast.success('Logged in with Google!');
      router.replace('/dashboard');
    } catch (err) {
      toast.error('Google sign-in failed');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="max-w-4xl w-full grid lg:grid-cols-2 gap-8">
        {/* Left Panel */}
        <div className="bg-black text-white rounded-xl p-8 flex flex-col justify-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome Back!</h1>
          <p className="text-lg italic text-gray-300">
            "Focus on being productive instead of busy." — Tim Ferriss
          </p>
        </div>

        {/* Right Panel */}
        <Card className="w-full">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Log in to your account</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pr-10"
                />
                <div
                  className="absolute right-3 top-2/4 -translate-y-2/4 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? 'Logging in...' : 'Log in'}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={handleGoogleSignIn}
                disabled={googleLoading}
                className="w-full gap-2"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-4 h-4"
                />
                {googleLoading ? 'Loading...' : 'Continue with Google'}
              </Button>

              <p className="text-sm text-center mt-4">
                Don't have an account?{' '}
                <span
                  className="text-blue-600 font-medium cursor-pointer"
                  onClick={() => router.push('/signup')}
                >
                  Sign up
                </span>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
