const App = () => {
    const courseList = {
        id: 1,
        name: "Half Stack application development",
        parts: [
            { name: "Fundamentals of React", excercises: 10, id: 1 },
            { name: "using props to pass data", excercises: 7, id: 2 },
            { name: "state of a component", excercises: 14, id: 3 },
        ],
    };

    return <Course course={courseList} />;
};

const Course = ({ course }) => {
    return (
        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

const Header = ({ courseName }) => {
    return (
        <>
            <h1>{courseName}</h1>
        </>
    );
};

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part) => (
                <Part key={part.id} partName={part.name} excercises={part.excercises} />
            ))}
        </>
    );
};

const Part = ({ partName, excercises }) => {
    return (
        <>
            <p>
                {partName} {excercises}
            </p>
        </>
    );
};
const Total = ({ parts }) => {
    const numExercises = parts
        .map((p) => {
            return p.excercises;
        })
        .reduce((a, v) => {
            return a + v;
        }, 0);
    return (
        <>
            <h3>Total Number of excercises {numExercises}</h3>
        </>
    );
};

export default App;
