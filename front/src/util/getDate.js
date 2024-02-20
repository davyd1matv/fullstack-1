export const getDate = (time) => {
  // Створення об'єкта Date на основі Unix-часу
  const date = new Date(time);

  // Отримання дати та часу в потрібному форматі
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  // Форматування результату в "dd.mm hh:mm" і виведення
  const formattedDate = `${day}.${month} ${hours}:${minutes}`;

  return formattedDate;
};
