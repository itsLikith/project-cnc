import './authpage.css';
import LoginForm from '@/components/auth/LoginForm.tsx';
import SignupForm from '@/components/auth/SignupForm.tsx';

interface AuthPageProps {
  mode: string;
}

const AuthPage = (props: AuthPageProps) => {
  return (
    <div className="auth-page min-h-screen flex items-center justify-center bg-[#f8f8f8]">
      <div className="auth-container bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-3xl overflow-hidden">
        {/* Left: Image/Illustration */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-[#fff7f2] p-6">
          {/* Replace with your image */}
          <img src="" alt="Craft supplies" className="rounded-xl object-cover w-full h-80" />
        </div>
        {/* Right: Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          {/* Logo */}
          <div className="flex items-center justify-center mb-2">
            <span className="font-bold text-lg tracking-wide">LOGO</span>
          </div>
          {props.mode === 'login' ? <LoginForm /> : props.mode === 'signup' ? <SignupForm /> : null}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
