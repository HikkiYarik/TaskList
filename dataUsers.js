const map = ["_id", "name", "isActive", "balance", "email", "number"];

const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 143,
    name: "Govard Lovecraft",
    gender: "male",
    company: "EMPIRICA",
    email: "ktulhu@gmail.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 },
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 99,
    name: "Yukio Mishima",
    gender: "female",
    company: "KATAKANA",
    email: "goldenTemple@gmail.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 },
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 3723.39,
    age: 210,
    name: "Taras Shevchenko",
    gender: "male",
    company: "EBIDCO",
    email: "kobzar@gmail.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 },
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 5000.21,
    age: 759,
    name: "Dante Alighieri",
    gender: "male",
    company: "EBIDCO",
    email: "laDivinaCommedia@gmail.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 },
  },
];

function getUsers() {
  const newUsers = [];

  users.forEach((obj, index) => {
    const newObj = {
      // ключи в новый наш объект берём из массива map, значения через косые ковычки из объекта
      // примечательно, что я забыл, что в foreach есть второй аргумент index и долго костылями пытался присобачить ключи объектов в значения через функцию
      [map[0]]: `${obj._id}`,
      [map[1]]: `${obj.name}`,
      [map[2]]: `${obj.isActive}`,
      [map[3]]: `${obj.balance}`,
      [map[4]]: `${obj.email}`,
      [map[5]]: `${index + 1}`,
    };
    newUsers.push(newObj);
  });

  return newUsers;
}
