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
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import config from "../../config/config"; // Ensure this contains emailJsServiceId, emailJsTemplateId, and emailJsPublicKey.

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Form() {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Define form submission handler
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);
    setFeedback(null); // Reset feedback on new submission

    emailjs
      .send(
        config.emailJsServiceId,
        config.emailJsTemplateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        config.emailJsPublicKey
      )
      .then(
        () => {
          setLoading(false);
          setFeedback({
            type: "success",
            message: "Message sent successfully. Thank you for reaching out!",
          });
          reset(); // Clear the form fields
        },
        (error) => {
          setLoading(false);
          setFeedback({
            type: "error",
            message: `Failed to send message. Error: ${error.text}`,
          });
        }
      );
  };

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <NameEmailSubjContainer>
          <NameInput
            type='text'
            placeholder='Name'
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p>{errors.name.message}</p>}

          <EmailInput
            type='email'
            placeholder='Email'
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <SubjInput
            type='text'
            placeholder='Subject'
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && <p>{errors.subject.message}</p>}
        </NameEmailSubjContainer>

        <MessageDiv>
          <MessageInput
            placeholder='Message'
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </MessageDiv>

        <SubmitButtonContainer>
          <G_Button
            text={loading ? "Sending..." : "Send Message"}
            icon={<IoIosSend />}
            submit
          />
        </SubmitButtonContainer>
      </FormContainer>

      {/* Feedback messages */}
      {feedback && (
        <p
          style={{
            color: feedback.type === "success" ? "green" : "red",
            marginTop: "10px",
          }}
        >
          {feedback.message}
        </p>
      )}
    </FormWrapper>
  );
}

export default Form;
