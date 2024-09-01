import React, { useState } from 'react';

function ValidationForm() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';
    if (name === 'name' && !value) {
      errorMessage = 'Name is required';
    }
    if (name === 'email') {
      if (!value) {
        errorMessage = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errorMessage = 'Email is invalid';
      }
    }
    setErrors({ ...errors, [name]: errorMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.name && !errors.email) {
      console.log('Form submitted:', formValues);
    } else {
      console.log('Form has errors.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidationForm;
//https://preview.keenthemes.com/metronic8/demo1/pages/user-profile/campaigns.html#