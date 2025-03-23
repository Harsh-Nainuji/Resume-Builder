// admin/admin.js
document.getElementById('templateForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      htmlContent: formData.get('htmlContent'),
      cssContent: formData.get('cssContent'),
      previewImage: formData.get('previewImage'),
    };
  
    try {
      const res = await fetch('/api/templates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if(result.success){
        alert('Template uploaded successfully!');
        e.target.reset();
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      console.error(error);
      alert('Error uploading template.');
    }
  });
  