import { createAsyncThunk } from '@reduxjs/toolkit';

export const getLanguages = createAsyncThunk('languages', async function ({ username, repoName }: { username: string; repoName: string }) {
  const response = await fetch(`${process.env.REACT_APP_API_PATH}/repos/${username}/${repoName}/languages`);
  return await response.json();
});
