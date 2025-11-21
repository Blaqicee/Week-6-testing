import React from 'react';
import BugItem from './BugItem';

export default function BugList({ bugs }) {
  return (
    <div>
      {bugs.map(bug => <BugItem key={bug._id} bug={bug} />)}
    </div>
  );
}
