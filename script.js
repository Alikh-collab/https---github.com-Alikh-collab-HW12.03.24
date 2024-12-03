// 1. Қала объектісі
const city = {
    name: "Алматы",
    population: 2000000,
    districts: [
      { name: "Бостандық", population: 300000 },
      { name: "Алмалы", population: 250000 },
    ],
  };
console.log(city);
// 2. Мектептер массиві және оны жаңарту
let schools = [
    { name: "№96 мектеп", district: "Алмалы", students: 500 },
    { name: "№1 мектеп", district: "Бостандық", students: 700 },
  ];
  
  schools.push({ name: "№2 мектеп", district: "Медеу", students: 600 });
  
  schools.forEach((school) => {
    if (school.name === "№3 мектеп") {
      school.students = 550;
    }
  });
  console.log(schools);
// Қаланың жалпы халық санын есептейтін функция
function join(city) {
    let population = city.population;
    city.districts.forEach((district) => {
      population += district.population;
    });
    return population;
  }
  
  console.log(join(city));
// Барлық мектептердің жалпы оқушы санын есептейтін функция
function totalstudent(schools) {
    return schools.reduce((total, school) => total + school.students, 0);
  }
  
  console.log(totalstudent(schools));
  