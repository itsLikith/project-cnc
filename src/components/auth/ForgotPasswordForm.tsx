import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Undo2 } from 'lucide-react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';

import { useNavigate } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-[#d08c5a] text-center mb-1 mt-2">
        Forgot password
      </h2>
      <div className="grid w-full gap-1.5 mt-5">
        <Label htmlFor="fullname" className="text-[1rem] text-[#d08c5a] font-semibold">
          Email
        </Label>
        <Input
          type="email"
          placeholder="Enter your Full Name"
          className="border border-[#d08c5a] rounded-md px-3 py-2 text-base font-medium placeholder:text-gray-400"
        />
        <Label htmlFor="otp" className="text-[1rem] text-[#d08c5a] font-semibold mt-4">
          OTP
        </Label>
        <InputOTP maxLength={6} className="w-full">
          <InputOTPGroup className="w-full flex gap-2">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <InputOTPSlot
                key={idx}
                index={idx}
                className="border border-[#d08c5a] rounded-md px-3 py-2 text-base font-medium text-[#d08c5a] placeholder:text-gray-400 focus:outline-none focus:border-[#b87b4e] transition-colors w-full"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
        <Label htmlFor="password" className="text-[1rem] text-[#d08c5a] font-semibold mt-4">
          New Password
        </Label>
        <Input
          type="password"
          placeholder="Enter your Password"
          className="border border-[#d08c5a] rounded-md px-3 py-2 text-base font-medium placeholder:text-gray-400"
        />
        <Button
          variant="secondary"
          className="w-full mt-5 bg-[#d08c5a] text-white text-lg font-bold rounded-md py-2 hover:bg-[#b87b4e]"
        >
          Verify email
        </Button>
        <Button
          variant="secondary"
          className="w-full mt-5 bg-[#d08c5a] text-white text-lg font-bold rounded-md py-2 hover:bg-[#b87b4e]"
        >
          Verify OTP
        </Button>
        <Button
          variant="secondary"
          className="w-full mt-5 bg-[#d08c5a] text-white text-lg font-bold rounded-md py-2 hover:bg-[#b87b4e]"
        >
          Change Password
        </Button>
        <div className="mt-4 text-center text-[1rem] mb-10">
          <Button
            variant="link"
            className="text-[#d08c5a] font-semibold"
            onClick={() => navigate('/auth/login')}
          >
            Back to Login
            <Undo2 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
