import { ChronoType } from 'src/components/Clock/types';

export const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, '0');
};

export const msToTime = (ms: number): ChronoType => {
  const milliseconds = Math.floor(ms / 10) % 100;
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / 60000) % 60;
  const hours = Math.floor(ms / 3600000);
  return { hours, minutes, seconds, milliseconds };
};
