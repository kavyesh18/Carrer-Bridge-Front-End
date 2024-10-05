import { Menu, rem, Avatar, Switch } from '@mantine/core';
import {
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconUserCircle,
  IconFileTypography,
  IconMoon,
  IconSun,
  IconMoonStars,
  IconLogout,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileMenu =()=>  {
    const [checked, setChecked] = useState(false);
    const [opened, setOpened] = useState(false);
  return (
    <Menu opened={opened} onChange={setOpened} shadow="md" width={200}>
      <Menu.Target>
      <div className="flex items-center gap-2 cursor-pointer">
                <div>Kavyesh</div>
                <Avatar src="/avatar.png" alt="it's me" />
            </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
        <Link to="profile">
        <Menu.Item leftSection={<IconUserCircle style={{ width: rem(14), height: rem(14) }} />}>
          Profile
        </Menu.Item>
        </Link>
        
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileTypography style={{ width: rem(14), height: rem(14) }} />}>
         Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMoon style={{ width: rem(14), height: rem(14) }} />}
          rightSection={
            <Switch checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)} size="md" color="dark.4" onLabel={<IconSun
                style={{ width: rem(16), height: rem(16) }}
                stroke={2.5}
                color="yellow"
              />} offLabel={ <IconMoonStars
                style={{ width: rem(16), height: rem(16) }}
                stroke={2.5}
                color="cyan"
              />} />
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
        >
         Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ProfileMenu;