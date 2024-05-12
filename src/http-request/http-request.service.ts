import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { httpRequest } from './interfaces/http-request.interface';
import { CreateHttpRequestDto } from './dto/create_http-request.dto';


@Injectable()
export class HttpRequestService {
    constructor(@Inject('HTTPREQUEST_MODEL') private readonly httpRequestModel : Model<httpRequest>) {}

    async create(CreateHttpRequestDto:CreateHttpRequestDto) : Promise<httpRequest> {
        const createdHttpRequest = this.httpRequestModel.create(CreateHttpRequestDto);
        return createdHttpRequest;
    }
}
