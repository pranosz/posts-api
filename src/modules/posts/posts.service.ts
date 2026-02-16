import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private posts = [
    { id: 1, title: 'Post 1', content: 'Content 1' },
    { id: 2, title: 'Post 2', content: 'Content 2' },
  ];

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find((post) => post.id === id);
  }

  create(post: { title: string; content: string }) {
    const newPost = {
      id: this.posts.length + 1,
      ...post,
    };
    this.posts.push(newPost);
    return newPost;
  }

  remove(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
    return { message: 'Post deleted' };
  }
}
