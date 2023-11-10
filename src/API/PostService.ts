import axios from 'axios';
type INewPost = {
  id: number;
  title: string;
  body: string;
};
export class PostService {
  static async getAll() {
    const response = await axios.get<
      {
        data: INewPost[];
      },
      {
        data: INewPost[];
      }
    >('https://jsonplaceholder.typicode.com/posts');
    return response;
  }
}
