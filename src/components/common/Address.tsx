import React, { useEffect, useState } from 'react';
import * as SharedStyles from '@/styles/sharedstyles';
import { data } from '@/utils/data';
import Titles from '../common/Titles';

interface AddressObj {
  title: string;
  description: string;
  info: string;
}
type Address = Array<AddressObj>;

const Address = () => {
  const [state, setState] = useState<Address>([]);

  useEffect(() => {
    return setState(data['address']);
  }, []);
  return (
    <div>
      {state &&
        state.map((address, i) => (
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
