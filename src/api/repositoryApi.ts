import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRepositories = createAsyncThunk('user/repositories', async function (username: string) {
  const response = await fetch(`${process.env.REACT_APP_API_PATH}/users/${username}/repos?sort=updated`);
  return await response.json();
});
