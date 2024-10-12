import { useState } from "react";
import fields from "../../Data/ProfileData";
import { ActionIcon } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from "@tabler/icons-react";
import SelectInputProfile from "./SelectInputProfile";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { SucessNotification } from "../../Services/NotificationService";

const Info = () => {
  const select = fields;
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);
  const [edit, setEdit] = useState(false);

  const form = useForm({
    initialValues: { jobTitle: "", company: "", location: "" },
  });

  const handleClick = () => {
    if (!edit) {
      setEdit(true);
      form.setValues({
        jobTitle: profile.jobTitle || "",
        company: profile.company || "",
        location: profile.location || "",
      });
    } else {
      setEdit(false);
      const updatedProfile = { ...profile, ...form.values };
      dispatch(changeProfile(updatedProfile));
      console.log(updatedProfile);
      SucessNotification("Sucess","Profile Updated Sucessfully")
    }
  };
  if (!user) {
    return null; 
  }

  return (
    <>
      <div className="text-3xl font-semibold flex justify-between">
        {user.name || "Guest"} 
        <ActionIcon
          onClick={() => handleClick()}
          size="lg"
          color="brightSun.4"
          variant="subtle"
        >
          {edit ? (
            <IconDeviceFloppy className="h-4/5 w-4/5" />
          ) : (
            <IconPencil className="h-4/5 w-4/5" />
          )}
        </ActionIcon>
      </div>

      {edit ? (
        <>
          <div className="flex gap-10 mb-5 [&>*]:w-1/2">
            <SelectInputProfile form={form} name="jobTitle" {...select[0]} />
            <SelectInputProfile form={form} name="company" {...select[1]} />
          </div>
          <SelectInputProfile form={form} name="location" {...select[2]} />
        </>
      ) : (
        <>
          <div className="text-xl flex gap-1 items-center">
            <IconBriefcase className="h-5 w-5" stroke={1.5} /> {profile.jobTitle} &bull; {profile.company}
          </div>
          <div className="flex gap-1 text-mine-shaft-300 text-lg items-center">
            <IconMapPin className="h-5 w-5" stroke={1.5} /> {profile.location}
          </div>
        </>
      )}
    </>
  );
};

export default Info;
