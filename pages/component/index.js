Page({
    data: {
        list: [
            {
                id: 'view',
                name: '开锁服务',
                open: false,
                pages: ['开防盗门锁', '开汽车锁', '开保险柜锁']
            }, {
                id: 'content',
                name: '上门安装',
                open: false,
                pages: ['安装门锁', '安装自动感应门', '安装车位锁']
            }, {
                id: 'form',
                name: '销售',
                open: false,
                pages: ['销售VOC指纹锁', '金点原子锁', '车位锁', '各品牌锁芯', '门禁系统', '指纹打卡机', '电动车锁', '智能猫眼' ]
            }, {
                id: 'feedback',
                name: '配置钥匙',
                open: false,
                pages: ['配汽车钥匙', '配小区门禁钥匙', '各种防盗门钥匙', '加密钥匙']
            },  {
                id: 'media',
                name: '门店电话',
                open: false,
                pages: ['分店1：4000000000', '分店1：4000000000', '分店1：4000000000', '分店1：4000000000', '分店1：4000000000']
            }
        ]
    },
    widgetsToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open;
            } else {
                list[i].open = false;
            }
        }
        this.setData({
            list: list
        });
    }
});
