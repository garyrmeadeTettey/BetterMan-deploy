import React from 'react';

type Props = {
    title: string;
    subtitle: string;
}
const Title = ({subtitle, title}: Props) => {
  return (
    <div>
        <div id="heading">
            <h3>{subtitle}</h3>
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default Title;