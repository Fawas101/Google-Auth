
import '../css/Login.css'; // Import CSS file for styling
import '../JS/Login';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
    
  return (
<div class="form-structor">
	<div class="signup">
		<h2 class="form-title" id="signup">Log In</h2>
		<div class="form-holder">
			<input type="text" class="input" placeholder="Name" />
			<input type="email" class="input" placeholder="Email" />
			<input type="password" class="input" placeholder="Password" />
		</div>
        <div class ='gbtn' >
        <GoogleOAuthProvider data clientId="877537806669-8cleeuora6ire2prqkq08kc0kh4i5esq.apps.googleusercontent.com">
            <GoogleLogin
            />
        </GoogleOAuthProvider>
        </div>

		<button class="submit-btn">Log In</button>
        <h2 class="form-title" id="signup">Register Account </h2>

	</div>
	
</div>

  );
  
};



export default Login;
