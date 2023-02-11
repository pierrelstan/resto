import { Text } from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import Titles from '../common/Titles';

const Address = () => {
  return (
    <div>
      {data['address'].map((address, i) => (
        <div key={i}>
          <Titles title={address.title} color={'white'} fontSize={'30'} />
          <Text>{address.description}</Text>
          {address.info && <Text>{address.info}</Text>}
        </div>
      ))}
    </div>
  );
};
export default Address;
