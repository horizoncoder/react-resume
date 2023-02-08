import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../state/store";
import {useParams} from "react-router-dom";
import {getLanguages} from "../../../api/languagesApi";
import {resetState} from "../../../state/languages/languagesSlice";

export const LanguagesSection = ()=>{
    const {username} = useParams()
    const repositories = useAppSelector(state => state.repositories)
    const languages = useAppSelector(state => state.languages)
    const dispatch = useAppDispatch()
    const getUserLanguages = ()=>{

        dispatch(resetState())
         repositories.data.forEach(repository=>{
              dispatch(getLanguages({username: username as string, repoName:repository.name}))
        })
    }
    useEffect(()=>{
        getUserLanguages()
    },[repositories.status])
    if(languages.status === 'loading'){
        return <p>Loading</p>
    }
    return <section className="experience pb-2">
        <h2 className="flex items-center">

            <span className="text-2xl font-semibold">Languages</span>
        </h2>
        <div>
            {languages.data.languages &&
              Object.keys(languages.data.languages).map(key=>{
                  return <p key={key}>{key} : {((languages.data.languages[key] /languages.data.total) * 100).toFixed(1)}%</p>
              })
            }
        </div>
    </section>
}
