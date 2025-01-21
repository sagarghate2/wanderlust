
mapboxgl.accessToken = mapToken;
  const map = new mapboxgl.Map({
      container: 'map', // container ID
      center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
      zoom: 9 // starting zoom
  });

    map.on('load', () => {
        map.loadImage(
          "https://res.cloudinary.com/dyp2dhqey/image/upload/v1736584587/cropped_image_i73c5i.png", // URL to the custom icon image
          (error, image) => {
            if (error) {
              console.error("Error loading image:", error);
              return;
            }
      
            // Add the image to the map's style
            map.addImage('custom-icon', image);
      
            // Add a marker using the custom icon
            new mapboxgl.Marker({
              element: createCustomMarkerElement('custom-icon'),
            })
              .setLngLat(listing.geometry.coordinates)
              .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                  `<h1>${listing.title}</h1> <p>Exact location provided after booking</p>`
                )
              )
              .addTo(map);
          }
        );
      });
      
      // Function to create a custom marker element
      function createCustomMarkerElement(iconName) {
        const element = document.createElement('div');
        element.className = 'custom-marker';
        element.style.backgroundImage = `url(https://res.cloudinary.com/dyp2dhqey/image/upload/v1736584587/cropped_image_i73c5i.png)`; // Ensure the icon URL is correct
        element.style.backgroundSize = 'cover';
        element.style.width = '50px'; // Adjust size as needed
        element.style.height = '50px';
        return element;
      }