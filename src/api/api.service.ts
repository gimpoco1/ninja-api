// api.service.ts
import { Injectable } from '@nestjs/common';
import axios, { AxiosError } from 'axios';

@Injectable()
export class ApiService {
  async fetchCountryData(countryName: string): Promise<any> {
    try {
      const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error('Axios Error:', axiosError.message, axiosError.response?.data);
        throw new Error(`Error fetching country data: ${axiosError.message}`);
      } else {
        console.error('Non-Axios Error:', error.message);
        throw new Error(`Error fetching country data: ${error.message}`);
      }
    }
  }
}
