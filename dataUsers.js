const map = ["_id", "name", "isActive", "balance", "email", "number"];

const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "SpangeBob Squarepants",
    gender: "male",
    company: "EMPIRICA",
    email: "squarebob@gmail.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 },
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Ukio Mishima",
    gender: "female",
    company: "KATAKANA",
    email: "mishima@gmail.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 },
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Taras Shevchenko",
    gender: "male",
    company: "EBIDCO",
    email: "kobzar@gmail.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 },
  },
];

function getUsers() {
  const newUsers = [];

  users.forEach((obj, index) => {
    const newObj = {
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
