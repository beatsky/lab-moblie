import axios from 'axios';

export const uploadVoice = (file: any) => {
    let formData = new FormData();
    formData.append('file', file)
    axios({
        url: '/file/upload/',
        method: 'POST',
        data: formData,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then((res) => {
        
    }).catch((err) => {

    })
}

