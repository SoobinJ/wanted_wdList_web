import React from 'react'
import { useLocation } from 'react-router-dom';

export default function NoMatchPage() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No Match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
