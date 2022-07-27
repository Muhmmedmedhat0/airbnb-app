import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import { SunIcon } from '../icons/SunIcon';
import { MoonIcon } from '../icons/MoonIcon';
import React from 'react';

function Them() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <>
      <Switch
        checked={isDark}
        shadow
        size="xl"
        iconOn={<MoonIcon filled />}
        iconOff={<SunIcon filled />}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </>
  );
}

export default Them;
