import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getUser} from "../../../api/userApi";
import {useAppDispatch, useAppSelector} from "../../../state/store";
import {RepositoriesSection} from "./RepositoriesSection";
import {LanguagesSection} from "./LanguagesSection";
export const Resume = () => {
    const {username} = useParams()
    const dispatch = useAppDispatch()

    const user = useAppSelector((state) => state.user)
    useEffect(()=>{
            dispatch(getUser(username as string))
    },[])
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
                          <span className="text-3xl font-medium">{new Date(user.data.createdDate).toLocaleDateString()}</span>
                      </div>
                      <span className="text-xl text-gray-600 font-medium mt-2 md:mt-0">{user.data?.name}</span>
                  </div>
              </header>
                  <hr className="border-grey-light border-t"></hr>
                  <main className="py-3">
                      <LanguagesSection />
                      <RepositoriesSection />
                  </main>
                  <hr className="border-grey-light border-t"></hr>
                  <footer className="text-sm leading-loose mt-4 md:mt-8 text-grey-dark">
                      <address className="not-italic flex flex-wrap justify-center text-sm text-gray-600">
                          <a href={`https://github.com/${username}`} className="mx-2">Github</a>
                          &middot;
                      </address>
                      <address>
                      </address>
                  </footer>
                  </div>
      </div>

    );
}

