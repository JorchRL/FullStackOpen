const App = () => {
    const course = "Half Stack application development";
    const part1 = { name: "Fundamentals of React", excercises: 10 };
    const part2 = { name: "using props to pass data", excercises: 7 };
    const part3 = { name: "state of a component", excercises: 14 };

    const parts = [part1, part2, part3];

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total
                numExercises={parts
                    .map((p) => {
                        return p.excercises;
                    })
                    .reduce((a, v) => {
                        return a + v;
                    }, 0)}
            />
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
    return (
        <>
            <p>Number of excercises {props.numExercises}</p>
        </>
    );
};

export default App;
