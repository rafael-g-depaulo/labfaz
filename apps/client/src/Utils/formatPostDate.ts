import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR"

// return time difference in days
export const timeDifference = (date: any, actualDate: any) => {
  const dateUtc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const actualDateUtc = Date.UTC(
    actualDate.getFullYear(),
    actualDate.getMonth(),
    actualDate.getDate()
  );
  const dayDuration = 1000 * 60 * 60 * 24;
  return (actualDateUtc - dateUtc) / dayDuration;
};

export type DateString =
  | "Domingo"
  | "Segunda"
  | "Terça"
  | "Quarta"
  | "Quinta"
  | "Sexta"
  | "Sábado";

export const formatWeekDay = (day: string): DateString => {
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
      return "Domingo";
  }
};

export const formatPostDateStr = (value: string) => formatPostDate(new Date(value))
export const formatPostDate = (value: Date) => {
  const date = value
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
  } else if (dayDifference === 1) {
    return {
      day: "Ontem",
      hour: dateHour,
    };
  } else if (dayDifference > 1 && dayDifference < 7) {
    return {
      day: formatWeekDay(dateInfo[0]),
      hour: dateHour,
    };
  } else {
    // if it's been more than 1 week, return the complete date
    // without the hour of creation
    return {
      day: format(value, "dd-MM-yyyy").replace("-", "/").split("-")[0],
      hour: format(value, "dd-MM-yyyy").replace("-", "/").split("-")[1],
    };
  }
};

export const formatDayMonth = (date: Date) => format(date, "dd-MM-yyyy", { locale: ptBr })
  .replace(/-/g, "/")

export default formatPostDate;
