import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../Services/UserService";
const form = {
    email:"",
    password:""
}
const Login = () => {

    
    const [data, setData] = useState(form);
    
    const handleChange = (event:any) =>{
       setData({...data, [event.target.name]:event.target.value});
    }

    const handleSubmit = () =>{
        loginUser(data).then((res)=>
        console.log(res)).catch((err)=>console.log(err.response.data));
    }

    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Login to Your Account</div>
        <TextInput value={data.email} onChange={handleChange} name="email" withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Your email"/>
        <PasswordInput  value={data.password} onChange={handleChange} name="password" withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Create Your Password" />
        <Button onClick={handleSubmit} autoContrast variant="filled">Log In</Button>

        <div className="mx-auto">Don't have an account?<Link to="/signup" className="text-bright-sun-400 hover:underline"> Signup </Link> </div>
        <div className="mx-auto">Forget Password?<Link to="" className="text-bright-sun-400 hover:underline"> Reset </Link> </div>
    </div>
    );
};

export default Login;