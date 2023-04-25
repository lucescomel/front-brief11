
import { create } from "zustand";

export const usePostStore = create((set, get) => ({
  posts: [],
  currentPost: null,
  setPosts: (posts) => set({ posts }),
  setCurrentPost: (currentPost) => set({ currentPost }),
  removePost: (id) => {
    set((state) => ({
      posts: state.posts.filter((eleme) => eleme.id !== id),
    }));
  },
  updatePost: (post) => {
    set((state) => ({
      posts: state.posts.map((eleme) => {
        if (eleme.id !== post.id) return eleme;
        
        return post;
      }),
    }));
  },
  addNewPost: (newPost) => {
    set((state) => ({
      posts: [newPost, ...state.posts],
    }));
  },
}));


// .sort((a, b) => a.id - b.id)