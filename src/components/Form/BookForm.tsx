import { useForm } from 'react-hook-form';
import * as S from './stylesForm';
import Button from '../common/Button/Button';

type BookFormValues = {
  preventDefault(): unknown;
  fullname?: string;
  phone?: string;
  date?: string;
  time?: string;
  people: number;
};

const BookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormValues>();

  const onSubmit = async (data: BookFormValues) => {
    console.log(data);
  };

  const handleKeyPress = (event: any) => {
    const keyValue = event.key;
    // Allow only numeric input
    if (/[^0-9/-]/.test(keyValue)) {
      event.preventDefault();
    }
  };
  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <S.Wrapper>
          <div>
            <S.Label>
              <label htmlFor="date">Pick a date:</label>
            </S.Label>
            <S.DateInput placeholder="" {...register('date')} />
          </div>
          <div>
            <S.Label>
              <label htmlFor="time">Select time:</label>
            </S.Label>
            <S.TimeInput {...register('time')} />
          </div>
          <div>
            <S.Label>
              <label htmlFor="time">For how many people:</label>
            </S.Label>
            <S.Input
              type="number"
              min="1"
              max="5"
              {...register('people')}
              defaultValue={1}
            />
          </div>
        </S.Wrapper>
        <S.Label>
          <label htmlFor="text">FirstName:</label>
        </S.Label>
        <S.Input
          type="text"
          placeholder="Enter your fullname"
          {...register('fullname')}
        />

        <S.Label>
          <label htmlFor="tel">Phone Number:</label>
        </S.Label>
        <S.Input
          placeholder="123-452-6783"
          type="tel"
          maxLength={12}
          onKeyPress={handleKeyPress}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          {...register('phone')}
        />
      </div>
      <div>
        <Button title="Find a table" type="submit" />
      </div>
    </S.Form>
  );
};

export default BookForm;
