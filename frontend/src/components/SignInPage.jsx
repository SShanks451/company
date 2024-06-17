import BasicTextFields from "../muiComponents/InputBox";
import BasicButtons from "../muiComponents/Button";
import PasswordInputBox from "../muiComponents/PasswordInputBox";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[100%] h-screen justify-center">
      <div className="flex justify-center">
        <div className="flex flex-col h-auto border px-10 py-10 rounded-lg border-slate-800">
          <BasicTextFields label="Email Address" />
          <PasswordInputBox />
          <div className="ml-[10px] text-sm font-medium cursor-pointer w-fit">Forgot Password?</div>
          <div className="flex justify-center mt-7">
            <BasicButtons label="Continue" />
          </div>
          <div className="ml-[10px] mt-3 text-sm">
            Don't have an account?{" "}
            <span className="cursor-pointer font-medium" onClick={() => navigate("/signup")}>
              Sign Up
            </span>
          </div>
          <div className="ml-2.5 my-7">
            <hr />
          </div>
          <div className="ml-2.5 py-2 rounded-md flex justify-center">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              width="300"
              logo_alignment="center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
