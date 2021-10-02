const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            { name: "Fundamentals of React", excercises: 10 },
            { name: "using props to pass data", excercises: 7 },
            { name: "state of a component", excercises: 14 },
        ],
    };

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    );
};

const Content = (props) => {
    return (
        <>
            <Part
                part={props.parts[0].name}
                excercises={props.parts[0].excercises}
            />
            <Part
                part={props.parts[1].name}
                excercises={props.parts[1].excercises}
            />
            <Part
                part={props.parts[2].name}
                excercises={props.parts[2].excercises}
            />
        </>
    );
};

const Part = (props) => {
    return (
        <>
            <p>
                {props.part} {props.excercises}
            </p>
        </>
    );
};
const Total = (props) => {
    const numExercises = props.parts
        .map((p) => {
            return p.excercises;
        })
        .reduce((a, v) => {
            return a + v;
        }, 0);
    return (
        <>
            <p>Number of excercises {numExercises}</p>
        </>
    );
};

export default App;
