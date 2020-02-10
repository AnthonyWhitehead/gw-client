import React from 'react';

export interface IPoem {
  poem: {
    title: string;
    category: string;
    body: string;
  };
}

const Poem: React.FunctionComponent<IPoem> = props => {
  return (
    <div className="poem-container" id={props.poem.title}>
      <img src="/img/caddis-fly-larvae.png" alt=""/>
      <h1>{props.poem.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.poem.body }}></div>
    </div>
  );
};

export default Poem;
