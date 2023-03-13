import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import {
  IoCalendarOutline,
  IoPeopleOutline,
  IoTimeOutline,
} from 'react-icons/io5';
import { FormValues } from './Components';
import * as S from './stylesForm';
import Button from '../common/Button/Button';

const BookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };
  return (
    <S.Container>
      <S.FormBook onSubmit={handleSubmit(onSubmit)}>
        <S.WrapperBookForm>
          <div>
            <S.WrapperLabel>
              <S.Label>
                <IoCalendarOutline size={60} />
              </S.Label>
              <S.Input
                {...register('date', {
                  required: 'This is required',
                })}
                type="date"
              />
            </S.WrapperLabel>
            <ErrorMessage
              errors={errors}
              name={'date'}
              render={({ message }) => (
                <S.ErrorMessage>{message}</S.ErrorMessage>
              )}
            />
          </div>
          <div>
            <S.WrapperLabel>
              <S.Label>
                <IoTimeOutline size={60} />
              </S.Label>
              <S.Input
                {...register('guests', {
                  required: 'This is required',
                })}
                type="number"
                defaultValue="1"
                min="1"
                max="5"
              />
            </S.WrapperLabel>
            <ErrorMessage
              errors={errors}
              name={'guests'}
              render={({ message }) => (
                <S.ErrorMessage>{message}</S.ErrorMessage>
              )}
            />
          </div>
          <div>
            <S.Label>
              <IoPeopleOutline size={60} />
            </S.Label>
            <select {...register('time')}>
              {['8ham-11ham', '11ham-1hpm', '1hpm-3hpm', '3hpm-8hpm'].map(
                (value: string) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                )
              )}
            </select>
          </div>
        </S.WrapperBookForm>
        <S.WrapperButton>
          <Button title="Find a table" type="submit" />
        </S.WrapperButton>
      </S.FormBook>
    </S.Container>
  );
};

export default BookForm;
