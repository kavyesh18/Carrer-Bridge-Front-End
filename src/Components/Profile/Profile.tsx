import {
  ActionIcon,
  Divider,
  TagsInput,
  Textarea,
  Avatar,
  FileInput,
  Indicator,
} from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconPlus } from "@tabler/icons-react";
import ExpCard from "../Profile/ExpCard";
import { useEffect, useState } from "react";
import ExpInput from "./ExpInput";
import CertiCard from "./CertiCard";
import CertiInput from "./CertiInput";
import { getProfile } from "../../Services/ProfileService";
import Info from "./Info";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../Slices/ProfileSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);

  const [skills, setSkills] = useState(["React","Spring Boot", "MongoDB", "HTML", "CSS", "JavaScript","Node.js","Express","MySQL","Python",
    "Django", "Figma","Docker","AWS",
  ]);

  useEffect(() => {
    if (user?.id) {
      getProfile(user.id)
        .then((data: any) => {
          dispatch(setProfile(data));
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }, [user?.id, dispatch]);

  const [edit, setEdit] = useState([false, false, false, false, false]);

  const [about, setAbout] = useState(
    "As a Software Engineer at Google, I specialize in building scalable and high-performance applications..."
  );

  const [addExp, setAddExp] = useState(false);
  const [addCerti, setAddCerti] = useState(false);

  const handleEdit = (index: number) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  return (
    <div className="w-4/5 mx-auto">
      <div className="relative">
        <img
          className="rounded-t-2xl"
          src="/Profile/banner.jpg"
          alt="Profile Banner"
        />

        <div className="absolute -bottom-1/3 left-3">
          <Indicator
            inline
            offset={30}
            label={<IconPencil className="w-4/5 h-4/5" />}
            size={45}
            position="bottom-end"
            color="brightSun.4"
            withBorder
          >
            <Avatar
              className="!w-48 !h-48 border-mine-shaft-950 border-8 rounded-full"
              src="/avatar2.png"
              alt="Profile Avatar"
            />
          </Indicator>

          <FileInput
            className="absolute bottom-2 right-2 z-[201] w-12"
            variant="unstyled"
            size="lg"
            radius="xl"
            accept="image/png, image/jpeg"
          />
        </div>
      </div>

      <div className="px-4 mt-16">
        <Info />

        <Divider mx="xs" my="xl" />

        <div className="p-3">
          <div className="text-2xl font-semibold mb-3 flex justify-between">
            About{" "}
            <ActionIcon
              onClick={() => handleEdit(1)}
              size="lg"
              color="brightSun.4"
              variant="subtle"
            >
              {edit[1] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
          {edit[1] ? (
            <Textarea
              value={about}
              autosize
              placeholder="Enter About Yourself."
              minRows={3}
              onChange={(event) => setAbout(event.currentTarget.value)}
            />
          ) : (
            <div className="text-sm text-mine-shaft-300 text-justify">
              {profile.about}
            </div>
          )}
        </div>

        <Divider mx="xs" my="xl" />

        <div className="p-3">
          <div className="text-2xl font-semibold mb-3 flex justify-between">
            Skills{" "}
            <ActionIcon
              onClick={() => handleEdit(2)}
              size="lg"
              color="brightSun.4"
              variant="subtle"
            >
              {edit[2] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
          {edit[2] ? (
            <TagsInput
              value={skills}
              onChange={setSkills}
              placeholder="Add Skill"
              splitChars={[",", " ", "|"]}
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {profile?.skills?.map((skill: any, index: number) => (
                <div
                  key={index}
                  className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1"
                >
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>

        <Divider mx="xs" my="xl" />

        <div className="p-3">
          <div className="text-2xl font-semibold mb-5">
            Experience{" "}
            <div className="flex gap-2">
              <ActionIcon
                onClick={() => setAddExp(true)}
                size="lg"
                color="brightSun.4"
                variant="subtle"
              >
                <IconPlus className="h-4/5 w-4/5" />
              </ActionIcon>
              <ActionIcon
                onClick={() => handleEdit(3)}
                size="lg"
                color="brightSun.4"
                variant="subtle"
              >
                {edit[3] ? (
                  <IconDeviceFloppy className="h-4/5 w-4/5" />
                ) : (
                  <IconPencil className="h-4/5 w-4/5" />
                )}
              </ActionIcon>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {profile?.experiences?.map((exp: any, index: number) => (
              <ExpCard key={index} {...exp} edit={edit[3]} />
            ))}
            {addExp && <ExpInput add setEdit={setAddExp} />}
          </div>
        </div>
        <Divider mx="xs" my="xl" />

        <div className="p-3">
          <div className="text-2xl font-semibold mb-5">
            Certifications{" "}
            <div className="flex gap-2">
              <ActionIcon
                onClick={() => setAddCerti(true)}
                size="lg"
                color="brightSun.4"
                variant="subtle"
              >
                <IconPlus className="h-4/5 w-4/5" />
              </ActionIcon>
              <ActionIcon
                onClick={() => handleEdit(4)}
                size="lg"
                color="brightSun.4"
                variant="subtle"
              >
                {edit[4] ? (
                  <IconDeviceFloppy className="h-4/5 w-4/5" />
                ) : (
                  <IconPencil className="h-4/5 w-4/5" />
                )}
              </ActionIcon>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {profile?.certifications?.map((certi: any, index: number) => (
              <CertiCard key={index} {...certi} edit={edit[4]} />
            ))}
            {addCerti && <CertiInput add setEdit={setAddCerti} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
