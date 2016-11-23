/**
 * @author Flower
 * @description api url setting
 */
const HostName = 'https://apitest.quantumhealth.cn/customer';

const ApiUrl = {
    getProducts: { url: HostName + '/repos/subject/items', method: 'GET', noAuth: true },
    /**Flower**/
    getProductList: { url: HostName + '/repos/bodyindex_panel_group/items', method: 'GET', noAuth: true },
    getProductDetail: { url: HostName + '/repos/bodyindex_panel_group/items/:id', method: 'GET', noAuth: true},
    getGoodsItems: { url: HostName + '/repos/good/items', method: 'GET', noAuth: true},
    getGoodsCategory: { url: HostName + '/repos/good-category/items', method: 'GET' },
    getGoodsDetail: { url: HostName + '/repos/good/items/:id', method: 'GET' , noAuth: true},
    getSubjectItems: { url: HostName + '/repos/subject/items', method: 'GET', noAuth: true},
    getSubjectItem: { url: HostName + '/repos/subject/items/:id', method: 'GET', noAuth: true },
    /**Flower End**/
}

export default ApiUrl;
