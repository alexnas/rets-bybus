import add from 'date-fns/add';
import format from 'date-fns/format';

export const calcDuration = (start: string, end: string): number =>
  Number(getDateFromString(end)) - Number(getDateFromString(start));

export const getDateFromString = (str: string): Date =>
  new Date(0, 0, 0, +str.split(':')[0], +str.split(':')[1]);

export const getStringTimeFromHours = (num: number) => {
  const startZero = num < 10 ? '0' : '';
  return `${startZero}${num}:00`;
};

export const formatShowTime24 = (time: string) => {
  const splitted = time.split(':');
  const res = [splitted[0], splitted[1]].join(':');
  return res;
};

export const formatDurationHM = (duration: number): string => {
  const hours = new Date(duration).getUTCHours();
  const mins = new Date(duration).getUTCMinutes();
  const minsStr = Number(mins) ? `${mins}m` : '';
  const formatted = `${hours}h ${minsStr}`;

  return formatted;
};

export const formattedDurationHM = (start: string, end: string): string =>
  formatDurationHM(calcDuration(start, end));

export const todayFormatted = () => {
  const today = new Date();
  return today.toLocaleDateString('en-US');
};

export const getCurrentTime = (): string => {
  const today = new Date();
  const currentTime = `${today.getHours() < 10 ? '0' : ''}${today.getHours()}:${
    today.getMinutes() < 10 ? '0' : ''
  }${today.getMinutes()}:${
    today.getSeconds() < 10 ? '0' : ''
  }${today.getSeconds()}`;
  return currentTime;
};

interface IDayDate {
  day: string;
  date: string;
}

export const getDayDate = (date: Date): IDayDate => {
  return { day: format(date, 'EEE'), date: format(date, 'MM/dd') };
};

interface IThreeDayDates {
  yesterday: IDayDate;
  today: IDayDate;
  tomorrow: IDayDate;
}

export const getThreeDayDates = (date = new Date()): IThreeDayDates => {
  return {
    yesterday: getDayDate(add(date, { days: -1 })),
    today: getDayDate(date),
    tomorrow: getDayDate(add(date, { days: 1 })),
  };
};
