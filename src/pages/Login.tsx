import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-wrap w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Carousel Section */}
        <div className="w-full md:w-1/2 h-96 bg-blue-500 text-white flex items-center justify-center">
          {/* Replace with a carousel component */}
          <p className="text-2xl font-bold">Image Carousel Placeholder</p>
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
