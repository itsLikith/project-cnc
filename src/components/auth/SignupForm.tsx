import { useNavigate } from 'react-router-dom';

import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

const SignupForm = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-sm mx-auto ">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#d08c5a] text-center mb-1 mt-2">
        Create your Account
      </h2>
      <p className="text-xs text-center text-gray-500 mb-4">
        Unleash your creativity with unique handmade products
        <br />
        from passionate artisans.
      </p>
      {/* Full Name */}
      <div className="grid w-full gap-1.5 mt-2">
        <Label htmlFor="fullname" className="text-[1rem] text-[#d08c5a] font-semibold">
          Full Name
        </Label>
        <Input
          type="text"
          id="fullname"
          placeholder="Enter your Full Name"
          className="border border-[#d08c5a] rounded-md px-3 py-2 text-base font-medium placeholder:text-gray-400"
        />
      </div>
      {/* Phone Number */}
      <div className="grid w-full gap-1.5 mt-4">
        <Label htmlFor="phone" className="text-[1rem] text-[#d08c5a] font-semibold">
          Phone number
        </Label>
        <div className="flex">
          <Select>
            <SelectTrigger className="w-1/3 border border-[#d08c5a] rounded-l-md px-3 py-2 text-base font-medium placeholder:text-gray-400">
              <SelectValue placeholder="+91" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Country Code</SelectLabel>
                <SelectItem value="+91">+91</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* Phone Number Input */}
          <Input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="border border-l-0 border-[#d08c5a] rounded-r-md px-3 py-2 text-base font-medium placeholder:text-gray-400 flex-1"
          />
        </div>
      </div>
      {/* Email */}
      <div className="grid w-full gap-1.5 mt-4">
        <Label htmlFor="email" className="text-[1rem] text-[#d08c5a] font-semibold">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Enter yout email ID"
          className="border border-[#d08c5a] rounded-md px-3 py-2 text-base font-medium placeholder:text-gray-400"
        />
      </div>
      {/* Password */}
      <div className="grid w-full gap-1.5 mt-4">
        <Label htmlFor="password" className="text-[1rem] text-[#d08c5a] font-semibold">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="Create your Password"
          className="border border-[#d08c5a] rounded-md px-3 py-2 text-base font-medium placeholder:text-gray-400"
        />
      </div>
      {/* Sign Up Button */}
      <Button
        variant="secondary"
        className="w-full mt-5 bg-[#d08c5a] text-white text-lg font-bold rounded-md py-2 hover:bg-[#b87b4e]"
      >
        Sign Up
      </Button>
      {/* Divider */}
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300" />
        <span className="mx-2 text-sm text-gray-500">or continue using</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>
      {/* Google Button */}
      <Button
        type="button"
        className="w-full bg-[#d08c5a] text-white text-lg font-bold rounded-md py-2 flex items-center justify-center gap-2 hover:bg-[#b87b4e]"
      >
        Login with Google
        <span>
          <svg width="22" height="22" viewBox="0 0 48 48">
            <g>
              <path
                fill="#4285F4"
                d="M43.6 20.5h-1.9V20H24v8h11.3c-1.6 4.3-5.7 7-11.3 7-6.6 0-12-5.4-12-12s5.4-12 12-12c2.6 0 5 .8 7 2.3l5.7-5.7C33.3 5.1 28.9 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 20-8.9 20-20 0-1.3-.1-2.7-.4-4z"
              />
              <path
                fill="#34A853"
                d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 13 24 13c2.6 0 5 .8 7 2.3l5.7-5.7C33.3 5.1 28.9 3 24 3 15.7 3 8.4 8.6 6.3 14.7z"
              />
              <path
                fill="#FBBC05"
                d="M24 43c5.4 0 10-1.8 13.6-4.9l-6.3-5.2C29.5 34.9 26.9 36 24 36c-5.5 0-10.2-3.7-11.8-8.7l-6.5 5C8.4 39.4 15.7 45 24 45z"
              />
              <path
                fill="#EA4335"
                d="M43.6 20.5h-1.9V20H24v8h11.3c-1.1 3-3.5 5.5-6.3 7.1l6.3 5.2C40.5 41.2 44 37.1 44 32c0-1.3-.1-2.7-.4-4z"
              />
            </g>
          </svg>
        </span>
      </Button>
      {/* Sign in link */}
      <div className="mt-4 text-center text-[1rem] mb-10">
        Already having an account?{' '}
        <Button
          variant="link"
          className="text-[#d08c5a] font-semibold"
          onClick={() => navigate('/auth/login')}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default SignupForm;
