export const uploadImage = async (file) =>{

    const cloudUrl = 'https://api.cloudinary.com/v1_1/andrestaborda/upload';
    const formData = new FormData();
    formData.append('upload_preset','uploadImage');
    formData.append('file',file);
    
    
    const resp = await fetch(cloudUrl, {
        method: 'POST',
        body: formData
    })
       const cloudResp = await resp.json();
       return cloudResp.secure_url;
       //.secure_url

}