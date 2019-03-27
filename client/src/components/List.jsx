import React from 'react';
import PropTypes from 'prop-types';

const List = ({ list }) => (
  <div>
    <div className="single-listItem" key={list.id}>
      <h4>{list.title}</h4>
      <p>{list.excerpt}</p>
    </div>
  </div>
);

List.propTypes = { list: PropTypes.object };
List.defaultProps = { list: {} };

export default List;
