import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, rem, Textarea, TextInput } from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {

    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [second, setSecond] = useState(5);
    const navigate = useNavigate();

    const handlePreview = ()=>{
        setPreview(!preview)
        window.scrollTo({top:0, behavior:'smooth'})
    }

    const handleSubmit = () =>{
        setSubmit(true);
        let x=5 ;
        setInterval(()=>{
            x--;
            setSecond(x);
            if(x==0)navigate('/find-jobs')
        }, 1000)

    }
  return (
    <> <div className="w-2/3 mx-auto">
         <LoadingOverlay className="!fixed"
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'brightSun.4', type: 'bars' }}
        />
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img className="h-14" src={`/Icons/Google.png`} alt="Google" />
          </div>
          <div>
            <div className="font-semibold text-2xl">Software Engineer</div>
            <div className="text-lg text-mine-shaft-300">
              Google &#x2022; 3 Days Ago &#x2022; 48 Applicants
            </div>
          </div>
        </div>
      </div>

      <Divider my="xl" />

      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold mb-4">Submit Your Application</div>
        <div className="flex gap-10 [&>*]:w-1/2 mb-4">
          <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk label="Full Name" placeholder="Enter Full Name" />
          <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk label="Email" placeholder="Enter Email" />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <NumberInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} hideControls withAsterisk label="Phone Number" placeholder="Enter Phone Number" min={0} max={999999999} clampBehavior="strict" />
          <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk label="Personal Website" placeholder="Enter URL" />
        </div>
        <FileInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
        leftSection={<IconPaperclip stroke={1.5}/>}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
       <Textarea withAsterisk readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
        placeholder="HighLight Your Skills"
        label="Cover Letter"
        autosize
        minRows={4}
      />
      {!preview && <Button onClick={handlePreview} color="brightSun.4" variant="light">Preview</Button>}
      {
        preview && <div className="flex gap-10 [&>*]:w-1/2">
                <Button fullWidth onClick={handlePreview} color="brightSun.4" variant="outline">Edit</Button>
                <Button fullWidth onClick={handleSubmit} color="brightSun.4" variant="light">Submit</Button>
        </div>
      }
      </div>
    </div>
    <Notification className={`!border-bright-sun-400 !fixed top-0 left-[35%] z-[10001] transition duration-300 ease-in-out -translate-y-20 ${submit?"translate-y-0":"-translate-y-20"}`} icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />} withBorder color="teal" title="Applicaation Submitted!" mt="md" withCloseButton={false}>
        Redirecting to Find Jobs in {second} Seconds...
      </Notification>
    </>
  );
};

export default ApplyJobComp;
