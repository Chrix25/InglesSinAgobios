const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const data = new FormData(form);

      try {
        const response = await fetch('https://formspree.io/f/mppzgyzp', {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          success.style.display = 'block';
          form.reset();
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          alert('No se ha podido enviar. Prueba a escribirme directamente por WhatsApp o email.');
        }
      } catch (err) {
        alert('No se ha podido enviar. Prueba a escribirme directamente por WhatsApp o email.');
      }
    });