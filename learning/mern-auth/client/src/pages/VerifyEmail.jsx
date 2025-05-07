import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function VerifyEmailPage() {
  // Create an array of 6 empty strings for the verification code
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const navigate = useNavigate();

  const { verifyEmail, isLoading, error } = useAuthStore();

  // Create refs for each input field
  const inputRefs = useRef([]);

  // Set up the refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  // Handle input change
  const handleChange = (index, e) => {
    const value = e.target.value;

    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    // Update the verification code
    setVerificationCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value.slice(-1);

      // If all digits are entered, submit the form
      if (newCode.every((digit) => digit) && index === 5) {
        // Use setTimeout to ensure state is updated before submitting
        setTimeout(() => handleSubmit(newCode.join("")), 0);
      }

      return newCode;
    });

    // If a digit was entered and there's a next input, focus it
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle key down events (for backspace navigation)
  const handleKeyDown = (index, e) => {
    // If backspace is pressed and the field is empty, focus the previous field
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste event
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("");
      setVerificationCode(digits);

      // Focus the last input
      inputRefs.current[5].focus();

      // Submit after a short delay to allow state update
      setTimeout(() => {
        handleSubmit(pastedData);
      }, 100);
    }
  };

  // Handle form submission
  const handleSubmit = async (code) => {
    setIsSubmitting(true);

    // Use the code passed as a parameter instead of joining the state
    console.log("Verification code submitted:", code);

    await verifyEmail(code);

    if (!error && !isLoading) {
      toast.success("Email verified!");
      navigate("/login");
    }

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset success state after showing success animation
    setTimeout(() => setIsSuccess(false), 2000);
  };

  // Handle resend code
  const handleResendCode = () => {
    setResendDisabled(true);
    setCountdown(30);

    // Simulate sending a new code
    console.log("Resending verification code...");

    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const digitVariants = {
    idle: { scale: 1, borderColor: "#D1D5DB" },
    focus: { scale: 1.05, borderColor: "#6366F1" },
    filled: { scale: 1, borderColor: "#6366F1", backgroundColor: "#EEF2FF" },
    success: {
      scale: 1.05,
      borderColor: "#10B981",
      backgroundColor: "#D1FAE5",
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-md w-full space-y-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <motion.h2
            className="mt-6 text-center text-3xl font-extrabold text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Verify your email
          </motion.h2>
          <motion.p
            className="mt-2 text-center text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We've sent a 6-digit verification code to your email.
            <br />
            Enter the code below to confirm your email address.
          </motion.p>
        </div>

        <motion.div
          className="mt-8 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex justify-center space-x-2 sm:space-x-4"
            variants={itemVariants}
          >
            {verificationCode.map((digit, index) => (
              <motion.div
                key={index}
                variants={digitVariants}
                initial="idle"
                animate={
                  isSuccess
                    ? "success"
                    : digit
                      ? "filled"
                      : document.activeElement === inputRefs.current[index]
                        ? "focus"
                        : "idle"
                }
                className="w-12 h-14"
              >
                <input
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : null}
                  className="w-full h-full text-center text-xl font-semibold border-2 rounded-md focus:outline-none focus:ring-0"
                  disabled={isSubmitting || isSuccess}
                  autoFocus={index === 0}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            variants={itemVariants}
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center text-green-500 font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Email verified successfully!
              </motion.div>
            ) : isSubmitting ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center text-indigo-500 font-medium"
              >
                <svg
                  className="animate-spin h-5 w-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Verifying...
              </motion.div>
            ) : (
              <button
                type="button"
                onClick={handleResendCode}
                disabled={resendDisabled}
                className={`text-sm font-medium ${resendDisabled ? "text-gray-400" : "text-indigo-600 hover:text-indigo-500"}`}
              >
                {resendDisabled
                  ? `Resend code in ${countdown}s`
                  : "Didn't receive a code? Resend"}
              </button>
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center text-sm text-gray-500"
          >
            <p>
              Having trouble?{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Contact Support
              </a>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
