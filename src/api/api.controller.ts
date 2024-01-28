// api.controller.ts
import { Controller, Get, Param, InternalServerErrorException } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get(':name')
  async fetchCountryData(@Param('name') countryName: string): Promise<any> {
    try {
      return await this.apiService.fetchCountryData(countryName);
    } catch (error) {
      throw new InternalServerErrorException(`Internal Server Error: ${error.message}`);
    }
  }
}
