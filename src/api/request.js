import api from './api';

const interface_home_page_commodity = "resource/commodity/get_home_page_commodity"
const interface_home_page_info = 'resource/ads/get_home_page_info'
const interface_get_open_id = "resource/weixin/open_id_url"

export default {
    getHomePageInfo() {
        return api.Get(interface_home_page_info)
    },
    getHomeCommodity() {
        return api.Get(interface_home_page_commodity)
    },
    getOpenId() {
        return api.Get(interface_get_open_id)
    }
}