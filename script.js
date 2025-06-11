document.addEventListener('DOMContentLoaded', () => {
    const mapContainers = document.querySelectorAll('.map-container');

    // Función para el efecto de luz al pasar el ratón sobre los contenedores de mapa
    mapContainers.forEach(container => {
        container.addEventListener('mousemove', (e) => {
            // Calcula la posición del ratón relativa al contenedor
            const rect = container.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width * 100; // Posición X en porcentaje
            const y = (e.clientY - rect.top) / rect.height * 100; // Posición Y en porcentaje

            // Actualiza las variables CSS personalizadas --mouse-x y --mouse-y
            // Estas variables son usadas por el CSS para posicionar el degradado radial
            container.style.setProperty('--mouse-x', `${x}%`);
            container.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    // Puedes añadir más funcionalidades JavaScript aquí en el futuro si lo necesitas.
    // Por ejemplo, un carrusel de mapas, filtros, o más animaciones al scroll.
});