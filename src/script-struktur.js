$(document).ready(function() {
    const imageFolder = 'src/images/';
    const imageNames = [
      'images1.jpg',
      'images2.jpg',
      'images3.jpg',
      'images4.jpg',
      'images5.jpg',
      'images6.jpg',
      'images7.jpg',
      'images8.jpg',
      'images9.jpg',
      'images10.jpg',
      'images11.jpg',
      'images12.jpg',
      'images13.jpg',
      'images14.jpg',
      'images15.jpg',
      'images16.jpg',
      'images17.jpg',
      'images18.jpg',
    ];
  
    const imageGallery = $('#image-gallery');
  
    // Loop through the image names and create image elements
    imageNames.forEach((imageName) => {
      const imageElement = `
        <div class="col-md-6 col-lg-4 image-container">
          <img src="${imageFolder}${imageName}" alt="${imageName}" class="img-fluid" data-toggle="modal" data-target="#exampleModal" data-image="${imageFolder}${imageName}">
        </div>
      `;
      imageGallery.append(imageElement);
    });
  
    // Handle image click to show in modal
    $('#image-gallery').on('click', 'img', function() {
      const imageSrc = $(this).data('image');
      $('#modal-image').attr('src', imageSrc);
    });
  });
  