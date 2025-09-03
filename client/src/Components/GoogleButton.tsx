import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../context/contextAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
  const { axiosInstance } = useAuth();
  const navigate = useNavigate();

  // Function to handle login and send data to backend
  const handleLogin = async (credential: string | undefined | null) => {
    if (!credential) return;

    const decoded: unknown = jwtDecode(credential);

    try {
      const { data } = await axiosInstance.post("/GoogleAuth", { googleData: decoded });
      if (data.success) {
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong during login");
    }
  };

  return (
    <div className="bg-blue-500 p-2 rounded-[10px]">
      <GoogleLogin
        onSuccess={(response) => handleLogin(response.credential)}
        onError={() => console.log("Google login error")}
      />
    </div>
  );
};

export default GoogleButton;
