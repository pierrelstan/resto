import { Text } from '@/styles/sharedstyles';
interface IDescriptionProps {
  description: string;
}
const Description: React.FC<IDescriptionProps> = (props) => {
  return <Text>{props.description}</Text>;
};
export default Description;
