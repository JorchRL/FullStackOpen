import Course from "./components/Course";

const App = () => {
    const courseList = [
        {
            name: "Half Stack application development",
            id: 1,
            parts: [
                { name: "Fundamentals of React", excercises: 10, id: 1 },
                { name: "using props to pass data", excercises: 7, id: 2 },
                { name: "state of a component", excercises: 14, id: 3 },
            ],
        },
        {
            name: "Node.js",
            id: 2,
            parts: [
                { name: "Routing", excercises: 3, id: 1 },
                { name: "Middlewares", excercises: 7, id: 7 },
            ],
        },
    ];

    const courses = courseList.map((course) => <Course key={course.id} course={course} />);

    // console.log(courses);
    return <>{courses}</>;
    // { courses };
};

export default App;
