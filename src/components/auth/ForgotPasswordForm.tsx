import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Undo2 } from 'lucide-react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d08c5a] text-center mb-3 mt-6">
        Forgot password
      </h2>

      <div className="grid gap-4 sm:gap-5 md:gap-6 mt-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-base sm:text-lg text-[#d08c5a] font-semibold">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="border border-[#d08c5a] rounded-md px-3 py-2 text-base placeholder:text-gray-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="otp" className="text-base sm:text-lg text-[#d08c5a] font-semibold">
            OTP
          </Label>
          <InputOTP maxLength={6} className="w-full">
            <InputOTPGroup className="w-full flex gap-2 justify-between sm:gap-3">
              {[0, 1, 2, 3, 4, 5].map((idx) => (
                <InputOTPSlot
                  key={idx}
                  index={idx}
                  className="border border-[#d08c5a] rounded-md px-3 py-2 text-base text-[#d08c5a] placeholder:text-gray-400 focus:outline-none focus:border-[#b87b4e] transition-colors w-full text-center"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password" className="text-base sm:text-lg text-[#d08c5a] font-semibold">
            New Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="border border-[#d08c5a] rounded-md px-3 py-2 text-base placeholder:text-gray-400"
          />
        </div>

        <Button
          variant="secondary"
          className="w-full bg-[#d08c5a] text-white text-base sm:text-lg font-bold rounded-md py-2 hover:bg-[#b87b4e]"
        >
          Verify Email
        </Button>
        <Button
          variant="secondary"
          className="w-full bg-[#d08c5a] text-white text-base sm:text-lg font-bold rounded-md py-2 hover:bg-[#b87b4e]"
        >
          Verify OTP
        </Button>
        <Button
          variant="secondary"
          className="w-full bg-[#d08c5a] text-white text-base sm:text-lg font-bold rounded-md py-2 hover:bg-[#b87b4e]"
        >
          Change Password
        </Button>

        <div className="text-center mt-4 mb-10">
          <Button
            variant="link"
            className="text-[#d08c5a] font-semibold flex items-center justify-center gap-2"
            onClick={() => navigate('/auth/login')}
          >
            Back to Login <Undo2 size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
