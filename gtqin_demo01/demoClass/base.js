/**
 * 公共的基础模块
 */
class base {
    constructor() {
        this.loading: true,
        this.error: null,
        this.data: null
    }

    toString() {
        return '(对象数据:${this.data})';
    }
}