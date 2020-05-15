/*
 * @Description: Resume
 * @Author:dzxxdzy
 * @Date: 2019-08-08 11:08:13
 * @LastEditTime: 2020-05-15 17:25:59
 * @LastEditors: Song
 */
import React from 'react';
import BasicInfo from './components/BasicInfo'
import Social from './components/Social'
import ExperienceList from './components/ExperienceList'
import avatar from './data/avatar.jpg'
export default (props) => {
    const header_style = {
        width: 720,
        height: 370 * (720 / 658),
        backgroundImage: props.resume.background_image ? "url(link)".replace('link', props.resume.background_image) : ""
    }
    return (
        <div className="resume-container animated fadeInUp">
            <header style={header_style}>
                <img alt='' className="avatar" src={avatar} />
                {/*    <img alt='' className="avatar" src={props.resume.background_image} />*/}
            </header>
            <BasicInfo basicinfo={props.resume.basicinfo} />
            <Social social={props.resume.social} />
            <ExperienceList type="获奖经历" experiences={props.resume.Awards} />
            <ExperienceList type="社团/组织" experiences={props.resume.socialExperiences} />
            <ExperienceList type="实习经历" experiences={props.resume.InternExperiences} />
            <ExperienceList type="项目经验" experiences={props.resume.ProjectExperience} />
        </div>
    );
}


