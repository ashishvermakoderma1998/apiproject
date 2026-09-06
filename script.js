const students = [
    {
        id: 1,
        name: "Rahul",
        age: 20,
        city: "Patna",
        course: "JavaScript",
        marks: 85
    },
    {
        id: 2,
        name: "Ashish",
        age: 28,
        city: "Koderma",
        course: "React",
        marks: 90
    },
    {
        id: 3,
        name: "Priya",
        age: 19,
        city: "Delhi",
        course: "HTML & CSS",
        marks: 78
    },
    {
        id: 4,
        name: "Neha",
        age: 22,
        city: "Mumbai",
        course: "JavaScript",
        marks: 92
    },
    {
        id: 5,
        name: "Ravi",
        age: 20,
        city: "Kolkata",
        course: "React",
        marks: 88
    },
    {
        id: 6,
        name: "Pooja",
        age: 21,
        city: "Bangalore",
        course: "JavaScript",
        marks: 95
    }
];

let studentList = document.getElementById("studentData");
studentList.innerHTML = students.map((value) => {
    return `
    <h2>${value.name}</h2>
    <p>Age: ${value.age}</p>
    <p>City: ${value.city}</p>
    <p>Course: ${value.course}</p>
    <p>Marks: ${value.marks}</p>

    `
})

// --------------countery----------------

const countries = [
    {
        id: 1,
        name: "India",
        capital: "New Delhi",
        continent: "Asia",
        population: 1400000000,
        language: "Hindi",
        currency: "Indian Rupee",
        code: "IN"
    },
    {
        id: 2,
        name: "United States",
        capital: "Washington, D.C.",
        continent: "North America",
        population: 340000000,
        language: "English",
        currency: "US Dollar",
        code: "US"
    },
    {
        id: 3,
        name: "Japan",
        capital: "Tokyo",
        continent: "Asia",
        population: 124000000,
        language: "Japanese",
        currency: "Japanese Yen",
        code: "JP"
    },
    {
        id: 4,
        name: "Germany",
        capital: "Berlin",
        continent: "Europe",
        population: 84000000,
        language: "German",
        currency: "Euro",
        code: "DE"
    },
    {
        id: 5,
        name: "Australia",
        capital: "Canberra",
        continent: "Oceania",
        population: 27000000,
        language: "English",
        currency: "Australian Dollar",
        code: "AU"
    },
    {
        id: 6,
        name: "Brazil",
        capital: "Brasília",
        continent: "South America",
        population: 216000000,
        language: "Portuguese",
        currency: "Brazilian Real",
        code: "BR"
    },
    {
        id: 7,
        name: "Canada",
        capital: "Ottawa",
        continent: "North America",
        population: 41000000,
        language: "English",
        currency: "Canadian Dollar",
        code: "CA"
    },
    {
        id: 8,
        name: "France",
        capital: "Paris",
        continent: "Europe",
        population: 68000000,
        language: "French",
        currency: "Euro",
        code: "FR"
    }
];

let countryList = document.getElementById("countryData");
countryList.innerHTML = countries.map((value) => {
return `
    <h2>${value.name}</h2>
    <p>Capital: ${value.capital}</p>
    <p>Continent: ${value.continent}</p>
    <p>Population: ${value.population}</p>
    <p>Language: ${value.language}</p>
    <p>Currency: ${value.currency}</p>
    <p>Code: ${value.code}</p>

    `
} )