import axios from 'axios'



export default {
    Get: (path , params) => {
        let promise = new Promise(async (resolve , reject ) => {
            try {
                let res = await axios.get(`/api/${path}` ,{
                    headers:{'ktype':'ios'}
                })
                resolve(res.data)
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
        return promise
    },
    Post: (path , params) => {
        let promise = new Promise(async (resolve , reject ) => {
            try {
                let res = await axios.post(`/api/${path}` , params , {
                    headers:{'ktype':'ios' , 'byby':'byby'}
                })
                resolve(res.data)
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
        return promise
    }
}