import { FormEvent, ChangeEvent, useState } from 'react';
import { CiMail, CiLock } from "react-icons/ci";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { updateLoaderState } from '../../store/features/loaderSlice';
import { registerUser } from '../../API/auth';
import { AxiosError } from 'axios';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({ username: '', email: '', password: '', APIError: '' });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors = { username: '', email: '', password: '', APIError: ''};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    // Username validation
    if (!formData.username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      ;(async() => {
        try {
          dispatch(updateLoaderState(true))
          await registerUser(formData)
          navigate('/')
        } catch (error) {
          const err = error as AxiosError<{message: string}>
          setErrors((prev) => ({ ...prev, ['APIError']: err.response?.data?.message || 'Something went wrong' }));
        }finally{
          dispatch(updateLoaderState(false))
        }
      })()
    }
    setFormData({ username: "", email: "", password: "" });
  };

  const handleGoogleAuth = () => {
    console.log('Authenticating with Google...');
    alert('Google Authentication initiated! This would redirect to Google in a real app.');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="border-2 border-white/50 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Username field */}  
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <FaRegUser className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder='Username'
                  autoComplete="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`pl-10 block w-full sm:text-sm border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500  text-white px-3 py-2 border ${
                    errors.username ? 'border-red-500' : ''
                  }`}
                />
              </div>
              {errors.username && (
                <p className="mt-2 text-sm text-red-400">{errors.username}</p>
              )}
            </div>

            {/* Email field */}  
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <CiMail className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='Email'
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`pl-10 block w-full sm:text-sm border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500  text-white px-3 py-2 border ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Password field */}  
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <CiLock className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'} 
                  placeholder='Password'
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`pl-10 pr-10 block w-full sm:text-sm border-gray-500 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white px-3 py-2 border ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-500 hover:text-gray-400 focus:outline-none">
                    {showPassword ? (
                      <IoEyeOffOutline className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <IoEyeOutline className="h-5 w-5" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            {/* Submit button */}  
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FiLogIn className="mr-2 h-5 w-5" aria-hidden="true" />
                Sign up
              </button>
              {errors.APIError && (
                <p className="mt-2 text-sm text-center text-red-400">{errors.APIError}</p>
              )}
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-gray-200">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleGoogleAuth}
                className="w-full flex justify-center py-2 px-4 border border-gray-500 rounded-md shadow-sm text-sm font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.61z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link to={'/login'} className="text-sm text-blue-400 hover:text-blue-300">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
