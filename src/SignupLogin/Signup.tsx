import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Signup = () => {
    
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Create Your Account</div>
            <TextInput withAsterisk label="Full Name" placeholder="Your Name"/>
            <TextInput withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Your email"/>
            <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Create Your Password" />
            <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Confirm Password" placeholder="Re-Enter Your Password" />
            <Checkbox autoContrast label={<>I accept{' '}<Anchor>Terms & Conditions</Anchor></>}/>
            <Button autoContrast variant="filled">Create Your Account</Button>

            <div className="mx-auto">Already have an account?<Link to="/login" className="text-bright-sun-400 hover:underline"> Login </Link> </div>
        </div>
    );
};

export default Signup;