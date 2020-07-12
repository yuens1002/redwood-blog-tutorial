import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  useMutation,
  FormError,
} from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import BlogLayout from 'src/layouts/BlogLayout'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      alert('thank you for your form submission!')
      formMethods.reset()
    },
  })

  // console.log(error)
  // console.log(loading)

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }
  return (
    <BlogLayout>
      <Form onSubmit={onSubmit} formMethods={formMethods} error={error}>
        <FormError
          error={error}
          wrapperStyle={{
            color: 'red',
            backgroundColor: 'lavenderblush',
            padding: '1rem',
          }}
        />

        <Label name="name" errorClassName="error">
          Your Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">
          Email Address
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Please provide a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <Label name="phone">Your Phone Number</Label>
        <TextField name="phone" />

        <Label name="message" errorClassName="error">
          Your Message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />
        <Submit disabled={loading}>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
