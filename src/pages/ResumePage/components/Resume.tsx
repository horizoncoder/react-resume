import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getUser} from "../../../api/userApi";
import {useAppDispatch, useAppSelector} from "../../../state/store";
import {RepositoriesSection} from "./RepositoriesSection";
export const Resume = () => {
    const {username} = useParams()
    const dispatch = useAppDispatch()


    const user = useAppSelector((state) => state.user)
    useEffect(()=>{
            dispatch(getUser(username as string))
    },[])
    console.log(user)
    return (

          <div className="bg-indigo-400 min-h-screen p-4 flex justify-center items-center">
              <div className="resume bg-white shadow-lg p-8 md:p-16">
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
                      <RepositoriesSection />
                      <section className="bio pb-2">
                          <h2 className="flex items-center">
                              <i className="em em-wave text-lg mr-2"></i>
                              <span className="text-2xl font-semibold">Bio</span>
                          </h2>
                          <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                              mollitia distinctio sed dolore quibusdam est ad, voluptate aspernatur totam molestias
                              alias voluptatem? Officia cum quia expedita dolore adipisci pariatur odio.</p>
                      </section>
                      <section className="experience pb-2">
                          <h2 className="flex items-center">
                              <i className="em em-computer text-lg mr-2"></i>
                              <span className="text-2xl font-semibold">Experience</span>
                          </h2>
                          <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Excepturi quidem quis omnis quisquam dolor facere cum laborum dolores nesciunt magni eius,
                              cumque reprehenderit modi sunt sed molestiae veritatis, atque eos?</p>
                      </section>
                      <section className="education pb-2">
                          <h2 className="flex items-center">
                              <i className="em em-mortar_board mr-2 text-lg"></i>
                              <span className="font-semibold text-2xl">Education</span>
                          </h2>
                          <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
                              cupiditate accusamus ut veniam ea expedita modi rem sequi exercitationem cum eius tempora
                              repellat provident numquam dolore, reprehenderit adipisci eos.</p>
                      </section>
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

