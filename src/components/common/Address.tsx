import * as SharedStyles from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import Titles from '../common/Titles';

const Address = () => {
  return (
    <div>
      {data['address'].map((address, i) => (
        <div key={i}>
          <Titles title={address.title} color={'white'} fontSize={'30'} />
          <SharedStyles.Text>{address.description}</SharedStyles.Text>
          {address.info && (
            <SharedStyles.Text>{address.info}</SharedStyles.Text>
          )}
        </div>
      ))}
    </div>
  );
};
export default Address;
