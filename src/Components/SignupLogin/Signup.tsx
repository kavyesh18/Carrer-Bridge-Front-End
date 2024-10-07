import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../Services/UserService";

const form = {
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    accountType:"APPLICANT"
}

const Signup = (props:any) => {

    const [data, setData] = useState(form);
    
    const handleChange = (event:any) =>{
        if(typeof(event)=="string")setData({...data, accountType:event});
       else setData({...data, [event.target.name]:event.target.value});
    }

    const handleSubmit = () =>{
        registerUser(data).then((res)=>
        console.log(res)).catch((err)=>console.log(err));
    }

    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Create Your Account</div>
            <TextInput value={data.name} onChange={handleChange} name="name" withAsterisk label="Full Name" placeholder="Your Name"/>
            <TextInput value={data.email} onChange={handleChange} name="email" withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Your email"/>
            <PasswordInput value={data.password} onChange={handleChange} name="password" withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Create Your Password" />
            <PasswordInput value={data.confirmPassword} onChange={handleChange} name="confirmPassword" withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Confirm Password" placeholder="Re-Enter Your Password" />
            <Radio.Group
            
      value={data.accountType}
      onChange={handleChange}
      label="You are?"
      withAsterisk
    >
        <Group mt="xs">
      <Radio className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:border-bright-sun-300 has-[:checked]:bg-bright-sun-400/5 border-mine-shaft-800 rounded-lg" autoContrast value="APPLICANT" label="Applicant" />
      <Radio className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:border-bright-sun-300 has-[:checked]:bg-bright-sun-400/5 border-mine-shaft-800 rounded-lg" autoContrast value="EMPLOYER" label="Employer" />
      </Group>
    </Radio.Group>
            <Checkbox autoContrast label={<>I accept{' '}<Anchor>Terms & Conditions</Anchor></>}/>
            <Button onClick={handleSubmit} autoContrast variant="filled">Create Your Account</Button>

            <div className="mx-auto">Already have an account?<Link to="/login" className="text-bright-sun-400 hover:underline"> Login </Link> </div>
        </div>
    );
};

export default Signup;