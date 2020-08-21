import BaseService from "@/http/base-service";

class TaskService extends BaseService {
    page(params: any): Promise<any> {
        if (!params) {
            params = {
                current: 1,
                pageSize: 20
            }
        }
        return super.post('/task/page', params);
    }

    save(params: any):Promise<any> {
        return this.post('/task/save',params);
    }

    taskInfo(id: any):Promise<any> {
        return this.get('/task/' + id);
    }
}

export default new TaskService();