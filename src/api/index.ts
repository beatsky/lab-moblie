import axios from 'axios';

export const uploadVoice = (file: any, fileName: string) => {
    let formData = new FormData();
    formData.append('file', file, fileName)
    axios({
        url: '/file/upload',
        method: 'POST',
        data: formData,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then((res) => {
        
    }).catch((err) => {

    })
}
export const getVoiceRes = (fileName: string = 'New011.txt') => {
    return axios({
        url: `/file/download/${fileName}`,
        method: 'GET',
    })
}

