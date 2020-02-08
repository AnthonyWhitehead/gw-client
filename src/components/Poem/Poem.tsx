import React from 'react';

interface IPoem {
  poem: {
    title: string;
    category: string;
    body: string;
  };
}

const Poem: React.FunctionComponent<IPoem> = props => {
  return (
    <div>
      <h1>{props.poem.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.poem.body }}></div>
    </div>
  );
};

export default Poem;
