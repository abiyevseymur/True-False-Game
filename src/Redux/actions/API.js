import axios from 'axios'

export const API = axios.create({
    baseURL: 'http://10.10.10.53:8080/api/',
    headers:{
        '_auth':'zJfFW0OUu0lwbUSr66NnKA4P48qhTuOi1RMNHqwZeFlgp2vkY6xwwpcolqw4K8bBNNdi1x852h9h9spVpKiJZiYayi39g4yRFzZ'
    }
});