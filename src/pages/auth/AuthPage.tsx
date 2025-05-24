import './authpage.css';
import LoginForm from '../../components/auth/LoginForm.tsx';
import SignupForm from '../../components/auth/SignupForm.tsx';
import ForgotPasswordForm from '../../components/auth/ForgotPasswordForm.tsx';

interface AuthPageProps {
  mode: string;
}

const AuthPage = (props: AuthPageProps) => {
  return (
    <div className="auth-page min-h-screen flex items-center justify-center bg-[#f8f8f8]">
      <div className="auth-container bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-3xl">
        {/* Left: Image/Illustration */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-[#fff7f2] p-6">
          {/* Replace with your image */}
          <img src="" alt="Craft supplies" className="rounded-xl object-cover w-full h-80" />
        </div>
        {/* Right: Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          {/* Logo */}
          <div className="flex items-center justify-center mb-2">
            <img
              src="/Crafticom-logo.png"
              alt="Logo"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
            />
          </div>
          {props.mode === 'login' ? (
            <LoginForm />
          ) : props.mode === 'signup' ? (
            <SignupForm />
          ) : props.mode === 'forgotpassword' ? (
            <ForgotPasswordForm />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
