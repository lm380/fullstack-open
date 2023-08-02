import React from 'react';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';

export const Course = ({ course }) => {
  const { parts } = course;
  let total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );

  return (
    <div>
      <Header headerText={course.name} />
      <Content parts={parts} />
      <Footer total={total} />
    </div>
  );
};
