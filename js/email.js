(function(){
      emailjs.init({
          publicKey: "I0PxpVsiEYxWuyxLa"
      });
  })();

  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Cambiar botón mientras se envía
    const btn = form.querySelector('button');
    btn.innerText = "Enviando...";

    // Usa tus IDs reales del servicio y la plantilla
    emailjs.sendForm('service_00nnwa8', 'template_z39lyue', this)
      .then(() => {
        alert('✅ Tu mensaje fue enviado con éxito.');
        form.reset();
        btn.innerText = "📨 Enviar Mensaje";
      }, (error) => {
        alert('❌ Ocurrió un error al enviar el mensaje.');
        console.error('Error:', error);
        btn.innerText = "📨 Enviar Mensaje";
      });
  });