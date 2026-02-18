import axios from 'axios';

export const instance = axios.create({
  method: 'get',
  baseURL: 'https://quizapi.io/api/v1',
  headers: {
    'X-Api-Key': 'jWbpWSe3AJbIkDyneQqBO6xNP5rOlqd2hO8hhwug',
  },
});
