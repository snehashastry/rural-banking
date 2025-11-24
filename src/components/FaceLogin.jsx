import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FaceLogin() {
  const videoRef = useRef(null);
  const [error, setError] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);   // ✅ Add here

  const navigate = useNavigate();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (err) {
      setError("Camera Access Denied: " + err.message);
    }
  };

  const startScan = () => {
  setIsScanning(true);
  setProgress(0);

  const interval = setInterval(() => {
    setProgress((p) => {
      if (p >= 100) {
        clearInterval(interval);
        stopCamera();

        setSuccess(true);   // ✅ Show success message

        setTimeout(() => {
          navigate("/main");   // ✅ Redirect after scan
        }, 1000);

        return 100;
      }
      return p + 10;
    });
  }, 400);
};


  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    }
  };

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Face Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && (
  <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }}>
    ✅ Face Scan Successful! Redirecting…
  </p>
)}


      <div style={{ position: "relative", display: "inline-block" }}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{
            width: "300px",
            height: "240px",
            borderRadius: "10px",
            border: "3px solid #38b000",
            objectFit: "cover",
          }}
        />

        {isScanning && (
          <>
            <div
              style={{
                position: "absolute",
                top: `${progress}%`,
                left: 0,
                width: "100%",
                height: "2px",
                background: "lime",
                boxShadow: "0 0 10px lime",
                transition: "top 0.3s linear",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                width: "100%",
                textAlign: "center",
                color: "green",
                fontWeight: "bold",
              }}
            >
              {progress}% Scanning
            </div>
          </>
        )}
      </div>

      {!isScanning && (
        <button
          onClick={startScan}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#38b000",
            border: "none",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Start Face Scan
        </button>
      )}
    </div>
  );
}
