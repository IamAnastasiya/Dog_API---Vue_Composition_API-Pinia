export const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
  
    return `${hours}:${minutes}`;
}

export const capitalize = (str: string) => str.replace(/(^\w|\s\w)/g, m => m.toUpperCase());


export const getIdFromImageUrl = (currentImageUrl: string) => {
    const parts = currentImageUrl.split('/');
    const idWithExtension = parts[parts.length - 1];
    return idWithExtension.substring(0, 9);
}


export const getBreedId = (allBreeds: {name: string, value: string}[], name: string) => {
    for (const breed of allBreeds) {
        if (name && breed.name.toLowerCase().includes(name.toLowerCase())) {
            return breed;
        } 
    }
    return {name: '', value: ''}
}

export const getCookie = (name:string) => {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : '';
  }