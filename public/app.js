document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('joinForm').addEventListener('submit',function(e){
 e.preventDefault();
 const data=Object.fromEntries(new FormData(this).entries());
 const subject=encodeURIComponent('Solicitud de negocio fundador - ENLARA');
 const body=encodeURIComponent(`Negocio: ${data.business}\nContacto: ${data.contact}\nTeléfono: ${data.phone}\nCategoría: ${data.category}\nInterés: ${data.message||'No indicado'}`);
 window.location.href=`mailto:contacto@tudominio.com?subject=${subject}&body=${body}`;
 document.getElementById('formMsg').textContent='Se abrirá tu correo para completar el envío. Cambia contacto@tudominio.com por tu correo real en app.js.';
});