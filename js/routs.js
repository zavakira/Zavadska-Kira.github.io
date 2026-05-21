document.querySelectorAll('.routes-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // прибираємо active з усіх табів і маршрутів
        document.querySelectorAll('.routes-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.route').forEach(r => r.classList.remove('active'));

        // додаємо active на натиснутий таб і відповідний маршрут
        tab.classList.add('active');
        document.querySelector(`#route-${tab.dataset.route}`).classList.add('active');
    });
});



// Маркер що слідує за активним місцем
function updateMarker() {
    const places = document.querySelectorAll('.route.active .route-place');
    const marker = document.querySelector('.route.active .route-marker');

    if (!marker) return;

    const markerRect = marker.getBoundingClientRect();
    const middle = window.innerHeight / 2;

    let closestPlace = null;
    let closestDistance = Infinity;

    places.forEach(place => {
        const rect = place.getBoundingClientRect();
        const placeMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(placeMiddle - middle);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestPlace = place;
        }
    });

    if (closestPlace) {
        const titleRect = closestPlace.querySelector('.route-place-title').getBoundingClientRect();
        const offset = titleRect.top - markerRect.top;
        marker.style.setProperty('--marker-offset', offset + 'px');
    }
}

window.addEventListener('scroll', updateMarker);
