// return time difference in days
function timeDifference(date: any, actualDate: any) {
  const dateUtc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const actualDateUtc = Date.UTC(
    actualDate.getFullYear(),
    actualDate.getMonth(),
    actualDate.getDate()
  );
  const dayDuration = 1000 * 60 * 60 * 24;
  return (actualDateUtc - dateUtc) / dayDuration;
}

function formatWeekDay(day: string) {
  switch (day) {
    case "Sun":
      return "Domingo";
    case "Mon":
      return "Segunda";
    case "Tue":
      return "Terça";
    case "Wed":
      return "Quarta";
    case "Thu":
      return "Quinta";
    case "Fri":
      return "Sexta";
    case "Sat":
      return "Sábado";
    default:
      return "Antigo";
  }
}

export const formatPostDate = (value: string) => {
  const date = new Date(value);
  const today = new Date();

  const dayDifference = timeDifference(date, today);
  const dateInfo = `${date}`.split(" ");

  let index = dateInfo[4].lastIndexOf(":");
  const dateHour = dateInfo[4].substring(0, index);

  if (dayDifference === 0) {
    return {
      day: "Hoje",
      hour: dateHour,
    };
  } else if (dayDifference > 0 && dayDifference < 7) {
    return {
      day: formatWeekDay(dateInfo[0]),
      hour: dateHour,
    };
  } else {
    return {
      day: "Antigo",
      hour: dateHour,
    };
  }
};

export default formatPostDate;
