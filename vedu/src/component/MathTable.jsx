import React from 'react';

const mathTopics = [
  { topic: 'Arithmetic', subtopics: [
      'Square & Square Roots', 'Cube & Cube Roots', 'Allegation & Mixture', 'Average', 
      'Time & Work', 'Time & Distance', 'Races', 'Games & Skills', 'Traveling Around a Circle'
    ] },
  { topic: 'Mensuration', subtopics: [
      'Three Dimensional: Cubes, Cuboids, Sphere, Cone, Cylinder, Pyramids'
    ] },
  { topic: 'Algebra', subtopics: [
      'Algebraic Equations of Degree1 & Degree 2', 'Algebraic Identities', 
      'Factorisation of Algebraic Expressions', 'Laws of Indices', 'Basic of Surds'
    ] },
  { topic: 'Number Theory', subtopics: [
      'Prime & Composite Numbers', 'Divisibility'
    ] },
  { topic: 'Geometry', subtopics: [
      'Triangle, Triangle Inequalities', 'Parallelogram', 'Trapezoids', 'Pythagoras Theorem'
    ] },
];

function MathTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Topic</th>
          <th>Sub-Topics</th>
        </tr>
      </thead>
      <tbody>
        {mathTopics.map((mathTopic) => (
          <tr key={mathTopic.topic}>
            <td>{mathTopic.topic}</td>
            <td>{mathTopic.subtopics.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MathTable;
