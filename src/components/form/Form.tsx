import { useForm, SubmitHandler } from "react-hook-form";
import G_Button from "../../reusable_components/g_buttion/G_Button";
import {
  EmailInput,
  FormContainer,
  FormWrapper,
  MessageDiv,
  MessageInput,
  NameEmailSubjContainer,
  NameInput,
  SubjInput,
  SubmitButtonContainer,
} from "./style";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
import { IoIosSend } from "react-icons/io";

function Form() {
  // Initialize react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  // Define form submission handler
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <NameEmailSubjContainer>
          <NameInput
            type="text"
            placeholder="Name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p>{errors.name.message}</p>}

          <EmailInput
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <SubjInput
            type="text"
            placeholder="Subject"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && <p>{errors.subject.message}</p>}
        </NameEmailSubjContainer>

        <MessageDiv>
          <MessageInput
            placeholder="Message"
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </MessageDiv>

        <SubmitButtonContainer>
          <G_Button
            text="Send Message"
            icon={<IoIosSend />}
            submit
          />
        </SubmitButtonContainer>
      </FormContainer>
    </FormWrapper>
  );
}

export default Form;
