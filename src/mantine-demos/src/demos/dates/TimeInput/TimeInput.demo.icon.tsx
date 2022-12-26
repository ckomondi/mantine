import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { IconClock } from '@tabler/icons';
import { TimeInput } from '@mantine/dates';

const code = `
import { IconClock } from '@tabler/icons';
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput icon={<IconClock size={16} stroke={1.5} />} maw={400} mx="auto" />;
}
`;

function Demo() {
  return <TimeInput icon={<IconClock size={16} stroke={1.5} />} maw={400} mx="auto" />;
}

export const icon: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
