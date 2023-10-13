import { FormData } from '@/components/feedback/feedback';

export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/send-email';
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
      });
  }