const config = {
    emailJsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id",
    emailJsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id",
    emailJsPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key",
  };
  
  export default config;
  