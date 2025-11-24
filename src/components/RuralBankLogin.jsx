import { Camera } from "lucide-react";
import "./ruralbank.css";
import { useNavigate } from "react-router-dom";

export default function RuralBankLogin() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-grid">

          {/* Face Login Card */}
          <div className="login-card">
            <div className="card-content">
              <div className="icon-wrapper icon-green">
                <Camera className="icon-large" />
              </div>

              <h2 className="card-title">Face Login</h2>
              <p className="card-description">
                Secure access to your rural banking account
              </p>

              <button
                onClick={() => navigate("/facelogin")}
                className="btn btn-green"
              >
                Start Face Recognition
              </button>

              <button
                className="btn btn-green"
                onClick={() => navigate("/manualbanklogin")}
              >
                Login Manually
              </button>
            </div>
          </div>

        </div>

        <div className="footer">
          <p className="footer-text">Need help? Contact support@ruralbank.com</p>
        </div>

      </div>
    </div>
  );
}
