const App = () => {
    return (
        <div className="App">
            <h1>Greetings</h1>
            <Hello name={"Pelhos"} />
            <Hello name={"Pirriota"} />
            <Hello name={"Baka"} />
            <Hello name={"Patiti"} />
        </div>
    );
};

const Hello = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    );
};

export default App;
export { Hello };
