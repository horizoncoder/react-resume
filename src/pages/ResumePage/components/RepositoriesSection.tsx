import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../state/store';
import { getRepositories } from '../../../api/repositoryApi';
import { useParams } from 'react-router-dom';
import { resetRepositoryState } from '../../../state/repositories/repositorySlice';
import { dateToLocaleDateString } from '../../../utils';

export const RepositoriesSection = () => {
  const { username } = useParams();
  const repositories = useAppSelector((state) => state.repositories);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (username) {
      dispatch(getRepositories(username));
    }
    return () => {
      dispatch(resetRepositoryState());
    };
  }, []);
  return (
    <section className="experience pb-2">
      <h2 className="mb-3 text-2xl font-semibold text-center">Repositories</h2>
      <div>
        {repositories.data.map((repository) => {
          return (
            <div className={'bg-zinc-100 mb-5 p-2 rounded-xl mx-auto text-center'} key={repository.name}>
              <div>
                <span className={'text-2xl font-medium'}>Name: </span>
                <a href={repository.url} className={'text-xl font-normal underline text-sky-600'}>
                  {repository.name}
                </a>
              </div>
              {repository.description && (
                <div>
                  <span className={'text-2xl font-medium'}>Description: </span>
                  <span className={'text-xl font-normal'}>{repository.description}</span>
                </div>
              )}
              <div>
                <span className={'text-2xl font-medium'}>Created at: </span>
                <span className={'text-xl font-normal'}>{dateToLocaleDateString(repository.createdAt)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
