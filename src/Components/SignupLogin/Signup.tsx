import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Radio,
  rem,
  TextInput,
} from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";

const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};

const Signup = () => {
  const [data, setData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (event: any) => {
    if (typeof event === "string") {
      setData({ ...data, accountType: event });
      return;
    }
    let name = event.target.name,
      value = event.target.value;
    setData({ ...data, [name]: value });
    setFormError({ ...formError, [name]: signupValidation(name, value) });

    if (name === "password" && data.confirmPassword !== "") {
      if (data.confirmPassword !== value)
        setFormError({
          ...formError,
          confirmPassword: "Passwords do not match",
        });
    }
    if (name === "confirmPassword") {
      if (data.password !== value)
        setFormError({
          ...formError,
          confirmPassword: "Passwords do not match",
        });
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    let valid = true,
      newFormError: { [key: string]: string } = {};

    for (let key in data) {
      if (key === "accountType") continue;
      if (key !== "confirmPassword")
        newFormError[key] = signupValidation(key, data[key]);
      else if (data[key] !== data["password"])
        newFormError[key] = "Passwords do not match.";
      if (newFormError[key]) valid = false;
    }   

    setFormError(newFormError);

    if (valid === true) {
      setData(form);
      registerUser(data)
        .then((res) => {
          console.log(res);
          notifications.show({
            title: "Account Created Sucessfully",
            message: "Redirecting to Login Page...",
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500",
          });
          setTimeout(() => {
            navigate("/login");
          }, 4000);
        })
        .catch((err) => {
          console.log(err);
          notifications.show({
            title: "Account Creation Failed",
            message: err.response.data.errorMessage,
            withCloseButton: true,
            icon: <IconX style={{ width: "90%", height: "90%" }} />,
            color: "red",
            withBorder: true,
            className: "!border-red-500",
          });
        });
    }
  };

  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Your Account</div>
      <TextInput
        value={data.name}
        error={formError.name}
        onChange={handleChange}
        name="name"
        withAsterisk
        label="Full Name"
        placeholder="Your Name"
      />
      <TextInput
        value={data.email}
        error={formError.email}
        onChange={handleChange}
        name="email"
        withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Email"
        placeholder="Your email"
      />
      <PasswordInput
        value={data.password}
        error={formError.password}
        onChange={handleChange}
        name="password"
        withAsterisk
        leftSection={
          <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        }
        label="Password"
        placeholder="Create Your Password"
      />
      <PasswordInput
        value={data.confirmPassword}
        error={formError.confirmPassword}
        onChange={handleChange}
        name="confirmPassword"
        withAsterisk
        leftSection={
          <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        }
        label="Confirm Password"
        placeholder="Re-Enter Your Password"
      />
      <Radio.Group
        value={data.accountType}
        onChange={handleChange}
        label="You are?"
        withAsterisk
      >
        <Group mt="xs">
          <Radio value="APPLICANT" label="Applicant" />
          <Radio value="EMPLOYER" label="Employer" />
        </Group>
      </Radio.Group>
      <Checkbox
        label={
          <>
            I accept <Anchor>Terms & Conditions</Anchor>
          </>
        }
      />
      <Button onClick={handleSubmit} autoContrast variant="filled">
        Create Your Account
      </Button>

      <div className="mx-auto cursor-pointer">
        Already have an account?{" "}
        <span className="underline text-mine-shaft-300 hover:text-bright-sun-500"
          onClick={() => {
            navigate("/login");
            setFormError(form);
            setData(form);
          }}
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default Signup;
