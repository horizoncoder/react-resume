import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../state/store";
import {getRepositories} from "../../../api/repositoryApi";
import {useParams} from "react-router-dom";

export const RepositoriesSection = ()=>{
    const {username} = useParams()
    const repositories = useAppSelector(state => state.repositories)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getRepositories(username as string))
    },[])
    console.log('repos ', repositories.data)
    return <section className="experience pb-2">
        <h2 className="flex items-center mb-3">
            <i className="em em-computer text-lg mr-2"></i>
            <span className="text-2xl font-semibold">Repositories</span>
        </h2>
        <div>
            {repositories.data.map(repository=>{
                return(
                <div className={'bg-zinc-100 mb-5 p-2 rounded-xl'}>
                    <div>
                        <p className={'text-2xl font-medium'}>Name:</p>
                        <a href={repository.url} className={'text-xl font-normal underline text-sky-600'}>{repository.name}</a>
                    </div>
                    {repository.description && (<div>
                        <p className={'text-2xl font-medium'}>Description</p>
                        <p className={'text-xl font-normal'}>{repository.description}</p>
                    </div>)}
                    <div>
                        <p className={'text-2xl font-medium'}>Created at:</p>
                        <p className={'text-xl font-normal'}>{new Date(repository.createdAt).toLocaleDateString()}</p>
                    </div>

                </div>
                )
            })}
        </div>
    </section>
}
