import { useState } from 'react';
import { contactService } from '../../services/contactService.js';

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [responseMessage, setResponseMessage] = useState('');

  const validate = () => {
    const errors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long.';
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setStatus('loading');
    setResponseMessage('');

    try {
      const response = await contactService.sendMessage(formData);
      setStatus('success');
      setResponseMessage(
        response.message || 'Thank you! Your message has been sent successfully to the server.'
      );
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setResponseMessage(
        error.message || 'Unable to deliver message. Please verify network and server connection.'
      );
      if (error.data && error.data.error && error.data.error.details) {
        const serverFieldErrors = {};
        error.data.error.details.forEach((item) => {
          serverFieldErrors[item.field] = item.message;
        });
        setFieldErrors(serverFieldErrors);
      }
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setResponseMessage('');
    setFieldErrors({});
    setFormData({ name: '', email: '', message: '' });
  };

  return {
    formData,
    fieldErrors,
    status,
    responseMessage,
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
    handleChange,
    handleSubmit,
    resetForm
  };
}
