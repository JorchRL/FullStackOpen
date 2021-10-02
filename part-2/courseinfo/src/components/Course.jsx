import React from "react";

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

export default Course;
