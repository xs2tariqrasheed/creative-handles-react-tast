import React from 'react';

const TopSearch = () => (
  <div id="top-search">
    <a href="#" id="top-search-trigger">
      <i className="icon-search3" />
      <i className="icon-line-cross" />
    </a>
    <form action="search.html" method="get">
      <input
        type="text"
        name="q"
        className="form-control"
        placeholder="Type &amp; Hit Enter.."
      />
    </form>
  </div>
);

export default TopSearch;
