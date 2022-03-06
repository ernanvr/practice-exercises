const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
  { userId: 2, username: "Mike", attributes: ["Lovely"]},
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

const response1 = users.map((user) => user.attributes).flat();
console.log('flatten by map and flat, separated: ',response1);

const response2 = users.flatMap((user) => user.attributes);
console.log('flatten by flatMap: ',response1);

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const startDatesCalendars = Object.values(calendars).flatMap(calendar => {
  return calendar.map(date => date.startDate);
});
console.log('start dates of calendars by flatMap: ', startDatesCalendars);
//RESPONSE:
//start dates of calendars by flatMap:  [
//   2021-02-01T21:00:00.000Z,
//   2021-02-01T23:00:00.000Z,
//   2021-02-01T18:00:00.000Z,
//   2021-02-01T15:00:00.000Z
// ]