import { Button, TagsInput } from "@mantine/core";
import { fields } from "../../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";
import { IconArrowLeft } from "@tabler/icons-react";

const PostJob = () => {
    const select = fields;
    return <div className="w-4/5 mx-auto ">
            <div className="text-2xl font-semibold text-bright-sun-300">Post a Job</div>
            <div className="flex flex-col">
                <div className="flex gap-10 mb-5 [&>*]:w-1/2">
                    <SelectInput {...select[0]}/>
                    <SelectInput {...select[1]}/>
                </div>
                <div className="flex gap-10 mb-5 [&>*]:w-1/2">
                    <SelectInput {...select[2]}/>
                    <SelectInput {...select[3]}/>
                </div>
                <div className="flex gap-10 mb-5 [&>*]:w-1/2">
                    <SelectInput {...select[4]}/>
                    <SelectInput {...select[5]}/>
                </div>
                <TagsInput label="Skills" placeholder="Enter Skill" splitChars={[',', ' ', '|']} clearable acceptValueOnBlur withAsterisk/>
            </div>
            <div className="pt-5 [&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
                <div className="text-sm font-medium">Job Description</div>
                <TextEditor/>
            </div>
            <div className="pt-5 flex gap-4">
            <Button color="brightSun.4" variant="light">Publish Job</Button>
            <Button color="brightSun.4" variant="outline">Save as draft</Button>
            </div>
        </div>
    
};

export default PostJob;