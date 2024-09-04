document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('imageUpload');
    const gallery = document.getElementById('gallery');

    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            gallery.appendChild(img);
        }
        
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        alert('Vänligen välj en bild att ladda upp.');
    }
});
