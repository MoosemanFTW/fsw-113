let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-04'),
      "capacity": 5
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-04-03'),
        "capacity": 5
      },
      {
        "color": "blue",
        "type": "beetle",
        "registration": new Date('2018-03-13'),
        "capacity": 4
      },
      {
        "color": "brown",
        "type": "mustang",
        "registration": new Date('2018-12-03'),
        "capacity": 2
      },
      {
        "color": "brown",
        "type": "station wagon",
        "registration": new Date('2018-07-03'),
        "capacity": 5
      },
      {
        "color": "red",
        "type": "camero",
        "registration": new Date('2018-03-23'),
        "capacity": 4
      },
      {
        "color": "purple",
        "type": "jeep",
        "registration": new Date('2018-06-03'),
        "capacity": 5
      },
      {
        "color": "red",
        "type": "jeep",
        "registration": new Date('2018-04-03'),
        "capacity": 5
      },
      {
        "color": "green",
        "type": "beetle",
        "registration": new Date('2018-03-04'),
        "capacity": 4
      }
  ]

  var colors = cars.filter(car => car.color=== 'red' || car.color=== 'green');
  console.log(colors);
  console.log('---------------')

