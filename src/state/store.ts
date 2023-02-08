import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import repositorySlice from './repositories/repositorySlice';
import languagesSlice from './languages/languagesSlice';

export const store = configureStore({
  reducer: { user: userSlice, repositories: repositorySlice, languages: languagesSlice },
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
