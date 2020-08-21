import axios from './index'
// import {qs} from 'qs'

export default class BaseService {
    public prefix = '/api'
    private http = axios;

    get(url: string, params?: any): Promise<any> {
        return this.http.get(this.prefix + url, params);
    }

    post(url: string, params: any): Promise<any> {
        return this.http.post(this.prefix + url, params);
    }

    postForm(url: string, params: any): Promise<any> {
        return this.http.post(this.prefix + url, params);
    }

    put(url: string, params: any, id: any): Promise<any> {
        return this.http.put(url + id, params);
    }

    delete(url: string, id: any): Promise<any> {
        return this.http.delete(this.prefix + url + id);
    }
}
