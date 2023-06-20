export const convertToLocalDate = (timestamp: number, timezone: number) => {
  const localDate = new Date(timestamp * 1000);
  const utcUnixTime =
    localDate.getTime() + localDate.getTimezoneOffset() * 60000;
  const unixLocalTime = utcUnixTime + timezone * 1000;

  return new Date(unixLocalTime);
};

const getLocalDate = (timestamp: number, timezone: number) => {
  const date = convertToLocalDate(timestamp, timezone);

  const localTime = date.toLocaleTimeString("en-UK", {
    timeStyle: "short",
  });

  const dayOfWeek = date.toLocaleDateString("en-UK", {
    weekday: "short",
  });

  const localDate = date.toLocaleDateString("en-UK", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return { localDate, localTime, dayOfWeek };
};

export default getLocalDate;
