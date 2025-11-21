import React from 'react';

export default function BugItem({ bug }) {
  return (
    <div>
      <h3>{bug.title}</h3>
      <p>{bug.description}</p>
      <p>Status: {bug.status}</p>
    </div>
  );
}
