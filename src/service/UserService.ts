import BaseService from "@/http/base-service";

export class UserService extends BaseService {
    module = 'user'

    findUserInfo(): Promise<any> {
        return super.get('/user/info')
    }

    login(username: any, password: any): Promise<any> {
        return super.post('/user/login', {username, password})
    }
}

export default new UserService();