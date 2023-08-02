const Header = (props) => <h1>{props.course}</h1>;
const Content = ({ parts, exercises }) => {
  const [part1, part2, part3] = parts;
  const [exercise1, exercise2, exercise3] = exercises;
  return (
    <>
      <Part part={part1} exercise={exercise1} />
      <Part part={part2} exercise={exercise2} />
      <Part part={part3} exercise={exercise3} />
    </>
  );
};
const Footer = (props) => <p>Number of exercises {props.sumOfExercises}</p>;
const Part = (props) => (
  <p>
    {props.part} {props.exercise}
  </p>
);
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };
  const { name, parts } = course;
  const [part1, part2, part3] = parts;
  return (
    <div>
      <Header course={name} />
      <Content
        parts={[part1.name, part2.name, part3.name]}
        exercises={[part1.exercises, part2.exercises, part3.exercises]}
      />
      <Footer
        sumOfExercises={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
};

export default App;
