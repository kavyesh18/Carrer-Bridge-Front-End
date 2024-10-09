import { Button, Modal, PasswordInput, PinInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { changePass, sendOtp, verifyOtp } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { ErrorNotification, SucessNotification } from "../../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passerror, setPasserr] = useState("");
  const [otpsent, setOtpsent] = useState(false);
  const [otpsending, setOtpSending] = useState(false);
  const [verified, setVerified] = useState(false);
  const [resendLoader, setResendLoader] = useState(false);
  const [seconds, setSeconds] = useState(0);
  
  
  const interval = useInterval(() => {
    setSeconds((prev) => {
      if (prev === 1) {
        setResendLoader(false); 
        interval.stop(); 
        return 60; 
      }
      return prev - 1;
    });
  }, 1000);

  const handleSendOtp = () => {
    setOtpSending(true);
    sendOtp(email)
      .then((res) => {
        console.log(res);
        SucessNotification("OTP Sent Successfully", "Enter OTP to reset password.");
        setOtpsent(true);
        setOtpSending(false);
        setResendLoader(true); 
        setSeconds(60); 
        interval.start(); 
      })
      .catch((err) => {
        console.log(err);
        setOtpSending(false);
        ErrorNotification("OTP Failed to Send", err.response?.data?.errorMessage || "Error");
      });
  };

  const handleVerifyOtp = (otp: string) => {
    verifyOtp(email, otp)
      .then((res) => {
        console.log(res);
        SucessNotification("OTP Verified Successfully", "Enter new password.");
        setVerified(true);
      })
      .catch((err) => {
        console.log(err);
        ErrorNotification("OTP Verification Failed", err.response?.data?.errorMessage || "Error");
      });
  };

  const resendOtp = () => {
    if (!resendLoader) {
      handleSendOtp(); 
    }
  };

  const changeEmail = () => {
    setOtpsent(false);
    setVerified(false);
    interval.stop(); 
    setSeconds(60);
  };

  const handleResetPassword = () => {
    changePass(email, password)
      .then((res) => {
        console.log(res);
        SucessNotification("Password Changed Successfully", "Login With New Password");
        props.close();
      })
      .catch((err) => {
        console.log(err);
        ErrorNotification("Password Reset Failed", err.response?.data?.errorMessage || "Error");
      });
  };

  return (
    <Modal
      opened={props.opened}
      onClose={props.close}
      title="Reset Password"
      centered
    >
      <div className="flex flex-col gap-6">
        <TextInput
          value={email}
          size="md"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          withAsterisk
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          label="Email"
          placeholder="Your email"
          rightSection={
            otpsent ? (
              <div className="text-xs text-[#f5b916]">{seconds}s</div> // BrightSun.4 color for the timer
            ) : (
              <Button
                className="ml-1 text-xs px-3 py-1 bg-[#5C2FC2] text-white rounded hover:bg-[#4a23a1] transition-colors"
                size="xs"
                autoContrast
                loading={otpsending}
                onClick={handleSendOtp}
                disabled={email === "" || otpsent}
              >
                Send OTP
              </Button>
            )
          }
          rightSectionWidth={100}
        />
        {otpsent && (
          <PinInput
            onComplete={handleVerifyOtp}
            length={6}
            mx="auto"
            size="md"
            gap="lg"
            type="number"
          />
        )}
        {otpsent && !verified && (
          <div className="flex gap-2">
            <Button
  size="xs"
  fullWidth
  loading={otpsending}
  onClick={resendOtp}
  variant="light" 
  color="brightSun.4" 
  disabled={resendLoader} 
  autoContrast
  styles={(theme) => ({
    root: {
      backgroundColor: resendLoader ? theme.colors.brightSun[4] : undefined, 
      color: '#000',
      '&:hover': {
        backgroundColor: resendLoader ? theme.colors.brightSun[5] : undefined, 
      },
    },
  })}
>
  {resendLoader ? `${seconds}s` : "Resend"} {/* Countdown text */}
</Button>
            <Button
              size="xs"
              fullWidth
              loading={otpsending && !otpsent}
              onClick={changeEmail}
              autoContrast
              variant="filled"
            >
              Change Email
            </Button>
          </div>
        )}
        {verified && (
          <PasswordInput
            value={password}
            error={passerror}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasserr(signupValidation("password", e.target.value));
            }}
            name="password"
            withAsterisk
            leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
            label="Password"
            placeholder="Create New Password"
          />
        )}
        {verified && (
          <Button onClick={handleResetPassword} autoContrast variant="filled">
            Change Password
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ResetPassword;
