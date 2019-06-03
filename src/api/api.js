import axios from 'axios'



export default {
    Get: (path , params) => {
        let promise = new Promise(async (resolve , reject ) => {
            try {
                let res = await axios.get(`${path}`)
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
                let res = await axios.post(`${path}` , params , {
                    headers:{'type':'ios'}
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