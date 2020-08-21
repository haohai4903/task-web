import BaseService from "@/http/base-service";

class ProjectService extends BaseService {

    page(params: any): Promise<any> {
        return super.post('/project/page', params);
    }

    save(params: any): Promise<any> {
        return super.post('/project/save', params);
    }

    detail(id: any): Promise<any> {
        return super.get('/project/' + id);
    }

    deleteById(id: any): Promise<any> {
        return super.delete('/project/', id);
    }

}