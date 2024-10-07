import { Button, TextInput } from "@mantine/core";
import SelectInputProfile from "./SelectInputProfile";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";
import fields from "../../Data/ProfileData";

const CertiInput = (props: any) => {
    const select = fields;
    const [issueDate, setissuetDate] = useState<Date | null>(new Date());
 
  return (
    <div className="flex flex-col gap-3">
      <div  className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-10 mb-5 [&>*]:w-1/2">
      <TextInput
      label="Title"
      withAsterisk
      placeholder="Enter Title"
    />
      <SelectInputProfile {...select[1]} />
      </div>
      <div className="flex gap-10 mb-5 [&>*]:w-1/2">
      <MonthPickerInput
          withAsterisk
          maxDate={new Date()}
          label="Issue Date"
          placeholder="Pick date"
          value={issueDate}
          onChange={setissuetDate}
        />
         <TextInput
      label="Certificate ID"
      withAsterisk
      placeholder="Enter Certificate ID"
    />
      </div>
      <div className="flex gap-5">
        <Button onClick={()=>props.setEdit(false)} color="brightSun.4" variant="outline">Save</Button>
        <Button onClick={()=>props.setEdit(false)} color="red.8" variant="light">Discard</Button>
        </div>
    </div>
  );
};

export default CertiInput;
