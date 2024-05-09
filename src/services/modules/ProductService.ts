import {axios} from '../axios'
/**
*
* @param {Object} payload
*
* get access token
*/

class ProductService {
    getlist = () => {
        return axios.get('objects')
        .then(({data}) => {
             return Promise.resolve(data)
        })
        .catch((err) => {
            return Promise.reject(err)
        })
     }
}


export default new ProductService()