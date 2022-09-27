import { useFormik } from 'formik';
import * as Yup from 'yup';

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      websiteAddress: '',
      comments: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(7, 'Must be 7 characters or more').required(),
      email: Yup.string().email('Email is invalid').required(),
      websiteAddress: Yup.string(),
      comments: Yup.string().required()
    }),
    onSubmit: (values) => {
      // alert(`You can send message! Name: ${values.name}. Email: ${values.email}`)
      console.log('submitted');
    }
  })

  return (
    <div className="mx-auto w-50 min-h-screen overflow-x-hidden">
      <form onSubmit={formik.handleSubmit} className="mx-auto bg-white shadow-lg mt-4 p-2">
        <h1 className='text-3xl mb-3 text-center'>Contact Us</h1>
        <div className='mb-4 mx-5'>
          <label htmlFor='name'>Name</label> <br />
          <input type="text" name="name" id="name"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border border-danger' : 'border border-gray'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} /> <br />
          {formik.touched.name && formik.errors.name && (
            <span className='text-danger'>{formik.errors.name}</span>
          )}
        </div>
        <div className='mb-4 mx-5'>
          <label htmlFor='email'>Email</label> <br />
          <input type="text" name="email" id="email"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.email && formik.errors.email ? 'border border-danger' : 'border border-gray'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} /> <br />
          {formik.touched.email && formik.errors.email && (
            <span className='text-danger'>{formik.errors.email}</span>
          )}
        </div>
        <div className='mb-4 mx-5'>
          <label htmlFor='websiteAddress'>Website Address</label> <br />
          <input type="text" name="websiteAddress" id="websiteAddress"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.websiteAddress && formik.errors.websiteAddress ? 'border border-danger' : 'border border-gray'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.websiteAddress} />  <br />
          {formik.touched.websiteAddress && formik.errors.websiteAddress && (
            <span className='text-danger'>{formik.errors.websiteAddress}</span>
          )}
        </div>
        <div className='mb-4 mx-5'>
          <label htmlFor='comments'>Comments</label> <br />
          <textarea rows={5} cols={25} name="comments" id="comments" className='block w-full rounded border py-1 px-2' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.comments}></textarea>  <br />
          {formik.touched.comments && formik.errors.comments && (
            <span className='text-danger'>{formik.errors.comments}</span>
          )}
        </div>
        <div className='text-center'>
          <button className='bg-primary rounded p-2 px-3 text-white' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact