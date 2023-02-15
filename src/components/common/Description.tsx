import * as SharedStyles from '@/styles/sharedstyles';
interface IDescriptionProps {
  description: string;
}
const Description: React.FC<IDescriptionProps> = (props) => {
  return <SharedStyles.Text>{props.description}</SharedStyles.Text>;
};
export default Description;
