export const color = ( element) => {
    let color = null;
    const setColor = (color) => {
        color = color;
        element.style.backgroundColor = color;
    }
    element.addEventListener('click', () => setColor("green"));
}