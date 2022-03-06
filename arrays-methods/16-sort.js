const months = ["March", "Jan", "Feb", "Dec"];

const numbers = [1, 30, 4, 21, 100000];

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

const orders = [
    {
      date: '16/03/2022',
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      date: '07/03/2022',
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      date: '11/03/2022',
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      date: '2/03/2022',
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
];

const ordersDateFixed = orders.map( order => {
  const dateSplit = order.date.split("/");
  const dateFixed = [dateSplit[2], dateSplit[1], dateSplit[0]].join("/");
  return {
    ...order,
    date: dateFixed,
  }
})

ordersDateFixed.sort( (a, b) => new Date(a.date) - new Date(b.date));
console.log(ordersDateFixed);