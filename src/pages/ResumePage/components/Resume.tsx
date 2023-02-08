import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../../api/userApi';
import { useAppDispatch, useAppSelector } from '../../../state/store';
import { RepositoriesSection } from './RepositoriesSection';
import { LanguagesSection } from './LanguagesSection';
import { dateToLocaleDateString } from '../../../utils';
import { useNavigate } from 'react-router-dom';

export const Resume = () => {
  const navigate = useNavigate();
  const goToHome = () =>
    navigate({
      pathname: '/',
    });
  const { username } = useParams();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    if (username) {
      dispatch(getUser(username));
    }
  }, []);
  console.log(user);
  if (user.data.id) {
    return (
      <div className="bg-indigo-400 min-h-screen p-4 flex justify-center items-center">
        <div className="resume bg-white shadow-lg p-8 md:p-16 w-full">
          <header>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
              <span className="text-3xl font-medium">{username}</span>
              <div>
                <span className="text-lg font-medium">Public repos: </span>
                <span className="text-3xl font-medium">{user.data.publicRepos}</span>
              </div>
              <div>
                <span className="text-lg font-medium">Created: </span>
                <span className="text-3xl font-medium">{dateToLocaleDateString(user.data.createdDate)}</span>
              </div>
              <span className="text-xl text-gray-600 font-medium mt-2 md:mt-0">{user.data?.name}</span>
            </div>
          </header>
          <hr className="border-grey-light border-t" />
          <main className="py-3">
            <LanguagesSection />
            <RepositoriesSection />
          </main>
          <hr className="border-grey-light border-t" />
          <footer className="text-sm leading-loose mt-4 md:mt-8 text-grey-dark">
            <address className="not-italic flex flex-wrap justify-center text-sm text-gray-600">
              <a href={`https://github.com/${username}`} className="mx-2">
                Github
              </a>
            </address>
            <address />
          </footer>
        </div>
      </div>
    );
  } else {
    return (
      <div className="md-6 flex-items-center justify-center">
        <div className="px-40 py-20 bg-white">
          <div className="flex flex-col items-center">
            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">Error</h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">This user does not exist</p>
            <button className="px-6 py-2 text-sm font-semibold text-blue-800 bg-indigo-100" onClick={goToHome}>
              Go home
            </button>
          </div>
        </div>
      </div>
    );
  }
};
