export const getNameLocalStorage = () => {
    const breedName = localStorage.getItem('name');
    if (!breedName) {
        return '';
    }
    return JSON.parse(breedName);
};
