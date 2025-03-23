// public/js/script.js

// Example: Fetch templates from the backend (you can later enhance this with proper API calls)
async function fetchTemplates() {
    try {
      const response = await fetch('/api/templates');
      const data = await response.json();
      displayTemplates(data.data);
    } catch (error) {
      console.error('Error fetching templates:', error);
    }
  }
  
  function displayTemplates(templates) {
    const container = document.getElementById('templates-list');
    container.innerHTML = '';
    templates.forEach(template => {
      const card = document.createElement('div');
      card.className = 'template-card';
      card.innerHTML = `<h3>${template.name}</h3>
                        <img src="${template.previewImage}" alt="${template.name} preview" style="max-width: 100%;">
                        <button onclick="selectTemplate('${template._id}')">Select</button>`;
      container.appendChild(card);
    });
  }
  
  let selectedTemplateId = null;
  function selectTemplate(id) {
    selectedTemplateId = id;
    alert('Template selected!');
  }
  
  // Handle form submission to generate resume preview and trigger download
  document.getElementById('resumeForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Collect form data
    const formData = new FormData(e.target);
    const resumeData = Object.fromEntries(formData.entries());
    resumeData.templateId = selectedTemplateId;
    
    // Send resume data to backend for generation
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resumeData)
      });
      const result = await response.json();
      if(result.success){
        // Assume result.fileUrl holds the path to the generated file
        const link = document.createElement('a');
        link.href = result.fileUrl;
        link.download = 'resume.pdf';  // Or .docx based on your endpoint
        link.click();
      }
    } catch (error) {
      console.error('Error generating resume:', error);
    }
  });
  
  // Call fetchTemplates on page load if on builder page
  if(document.getElementById('templates-list')){
    fetchTemplates();
  }
  