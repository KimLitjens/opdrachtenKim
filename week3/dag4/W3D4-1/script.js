const API_KEY = "my Key";

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.975066, lng: 5.65133 },
    zoom: 7.6
  });

  // The locations
  const wincLogo = {
    url: "wincLogo.png",
    scaledSize: new google.maps.Size(30, 30) // size
  };
  const createMarker = function(personCoordinates) {
    const marker = new google.maps.Marker({
      position: personCoordinates,
      map: map,
      icon: wincLogo,
      title: "testing",
      snippet: "somemore Testing"
      //   animation: google.maps.Animation.BOUNCE
    });
    return marker;
  };
  studentPlaces.forEach(student => {
    createMarker(student);
  });
}

studentPlaces = [
  (Kim = { lat: 51.969189, lng: 5.665395 }),
  (Dilara = { lat: 51.985104, lng: 5.89873 }),
  (wincHQ = { lat: 52.378361, lng: 4.85471 }),
  (Judith = { lat: 52.456368, lng: 5.036777 }),
  (Jeroen = { lat: 53.164432, lng: 6.389267 }),
  (Patrick = { lat: 52.660801, lng: 6.291081 }),
  (Yannick = { lat: 50.864916, lng: 6.063074 }),
  (Geeske = { lat: 52.220847, lng: 6.890952 }),
  (Raimon = { lat: 51.888501, lng: 4.387312 }),
  (Tim = { lat: 52.6628, lng: 4.832579 }),
  (Sven = { lat: 51.86066, lng: 5.050552 }),
  (Ruben = { lat: 52.372363, lng: 5.219117 })
];
