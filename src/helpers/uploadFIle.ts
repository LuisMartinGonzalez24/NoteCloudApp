
export const uploadFile = async (file: File) => {
    const cloudinaryURL = 'https://api.cloudinary.com/v1_1/luis-gonzalez/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'note-cloud');
    formData.append('file', file);

    try {
        
        const response = await fetch(cloudinaryURL, {
            method: 'POST',
            body: formData,
        })

        if (response.ok) {
            const cloudinaryResponse = await response.json();
            return cloudinaryResponse.secure_url;
        } else {
            return null;
        }
    } catch (ex) {
        console.log(ex)
    }
}