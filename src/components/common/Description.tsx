import React from 'react';
import * as SharedStyles from '@/styles/sharedstyles';
interface IDescriptionProps {
  description: Array<string> | string | undefined;
}
const Description: React.FC<IDescriptionProps> = (props) => {
  return (
    <React.Fragment>
      {Array.isArray(props.description) === false && (
        <SharedStyles.Text>{props.description}</SharedStyles.Text>
      )}

      {Array.isArray(props.description) === true && (
        <>
          {Array.isArray(props.description) &&
            props.description.map((text: string, i: number) => (
              <React.Fragment key={i}>
                <SharedStyles.Text>{text}</SharedStyles.Text>
              </React.Fragment>
            ))}
        </>
      )}
    </React.Fragment>
  );
};
export default Description;
