"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();

  // --- State for Email Login ---
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // --- State for OTP ---
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef([]);

  // Email validation
  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email format";
    return newErrors;
  };

  // Email form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    // Simulate sending OTP email
    setTimeout(() => {
      toast.success(`OTP sent to ${email}`);
      setIsLoading(false);
      setShowOtp(true);
    }, 1000);
  };

  // Google sign-in handler
  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      await new Promise((res) => setTimeout(res, 1000));
      toast.success("Logged in with Google!");
      router.replace("/dashboard");
    } catch (err) {
      toast.error("Google sign-in failed");
    } finally {
      setGoogleLoading(false);
    }
  };

  // OTP input handlers
  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // OTP verification submit
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < 6) {
      toast.error("Please enter the full 6-digit OTP");
      return;
    }

    setIsVerifying(true);
    // Simulate OTP verification
    setTimeout(() => {
      toast.success("OTP verified!");
      router.replace("/dashboard");
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen px-4 bg-[#E6F0FA]"
    >
      <div className="max-w-4xl w-full grid lg:grid-cols-2 gap-8">
        {/* Left Panel */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#111827] text-white rounded-xl p-8 flex flex-col justify-center space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold">Welcome Back!</h1>
          <p className="text-lg italic text-gray-300">
          "Trusted care, just a few clicks away."
          </p>
        </motion.div>

        {/* Right Panel */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="w-full">
            <CardContent className="p-8">
              {!showOtp ? (
                <>
                  <h2 className="text-2xl font-semibold mb-6">
                    Log in to your account
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrors({});
                        }}
                        disabled={isLoading}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <Button type="submit" disabled={isLoading} className="w-full">
                      {isLoading ? "Sending OTP..." : "Send OTP"}
                    </Button>

                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">or</span>
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleGoogleSignIn}
                      disabled={googleLoading}
                      className="w-full gap-2"
                    >
                      <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-4 h-4"
                      />
                      {googleLoading ? "Loading..." : "Continue with Google"}
                    </Button>

                    <p className="text-sm text-center mt-4">
                      Don't have an account?{" "}
                      <span
                        className="text-blue-600 font-medium cursor-pointer"
                        onClick={() => router.push("/signup")}
                      >
                        Sign up
                      </span>
                    </p>
                  </form>
                </>
              ) : (
                <>
                  <h2 className="text-lg font-semibold mb-6 text-center">
                    Enter the 6-digit OTP sent to {email}
                  </h2>
                  <form onSubmit={handleOtpSubmit} className="space-y-6">
                    <div className="flex justify-between gap-2">
                      {otp.map((digit, index) => (
                        <Input
                          key={index}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          ref={(el) => (inputRefs.current[index] = el)}
                          className="text-center text-lg font-semibold w-12 h-12"
                        />
                      ))}
                    </div>

                    <Button type="submit" disabled={isVerifying} className="w-full">
                      {isVerifying ? "Verifying..." : "Verify OTP"}
                    </Button>

                    <p className="text-sm text-center text-gray-500">
                      Didn’t get the code?{" "}
                      <span
                        className="text-blue-600 font-medium cursor-pointer"
                        onClick={() => {
                          toast.success(`Resent OTP to ${email}`);
                          setOtp(["", "", "", "", "", ""]);
                          inputRefs.current[0]?.focus();
                        }}
                      >
                        Resend
                      </span>
                    </p>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginForm;

