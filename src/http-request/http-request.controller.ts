import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { HttpRequestService } from './http-request.service';
import { CreateHttpRequestDto } from './dto/create_http-request.dto';

@Controller('http-request')
export class HttpRequestController {
  constructor(private readonly httpRequestService: HttpRequestService) {}

  @Post()
  async create(@Body() CreateHttpRequestDto:CreateHttpRequestDto,@Req() request,@Res() res) {
    try {
      const _httpRequest = await this.httpRequestService.create(CreateHttpRequestDto);
      
      return res.status(200).json({
        status:'success',
        data:_httpRequest
      })
    } catch (error) {
      return res.status(500).json({
        status:'error',
        error:error.message
      })
    }
  }
}
