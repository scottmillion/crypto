import React from 'react';

const Arrow = (props) => {
  const span = <span dangerouslySetInnerHTML={{ __html: props.content }}/>
  return(span);
};

export default Arrow;
