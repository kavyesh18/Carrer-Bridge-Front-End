import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../Data/ProfileData";
import SelectInputProfile from "./SelectInputProfile";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
  const select = fields;
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [checked, setChecked] = useState(false);
  const [description, setDescription] = useState(
    "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
  );
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">{props.add?"Add":"Edit"} Experience</div>
      <div className="flex gap-10 mb-5 [&>*]:w-1/2">
        <SelectInputProfile {...select[0]} />
        <SelectInputProfile {...select[1]} />
      </div>
      <SelectInputProfile {...select[2]} />
      <Textarea
        label="Summary"
        withAsterisk
        value={description}
        autosize
        placeholder="Enter About Your Role"
        minRows={3}
        onChange={(event) => setDescription(event.currentTarget.value)}
      />
      <div className="flex gap-10 mb-5 [&>*]:w-1/2">
        <MonthPickerInput
          withAsterisk
          maxDate={endDate || undefined}
          label="Start Date"
          placeholder="Pick date"
          value={startDate}
          onChange={setStartDate}
        />
        <MonthPickerInput disabled={checked}
          withAsterisk
          minDate={startDate || undefined}
          maxDate={new Date()}
          label="End Date"
          placeholder="Pick date"
          value={endDate}
          onChange={setEndDate}
        />
      </div>
      <Checkbox
        autoContrast
        label="Currently Working Here"
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />

<div className="flex gap-5">
        <Button onClick={()=>props.setEdit(false)} color="brightSun.4" variant="outline">Save</Button>
        <Button onClick={()=>props.setEdit(false)} color="red.8" variant="light">Discard</Button>
        </div>
    </div>
  );
};

export default ExpInput;
