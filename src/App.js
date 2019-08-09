/*
 * @Description: Resume
 * @Author:dzxxdzy
 * @Date: 2019-08-08 11:08:13
 * @LastEditTime: 2019-08-09 16:51:58
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import BasicInfo from './components/BasicInfo'
import Social from './components/Social'
import ExperienceList from './components/ExperienceList'
import avatar from './data/avatar.jpg'
export default class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const header_style = {
            backgroundImage: this.props.resume.background_image ? "url(link)".replace('link', this.props.resume.background_image) : ""
        }
        console.log(this.props.resume.avatar)
        return (
            <div className="resume-container animated fadeInUp">
                <header style={header_style}>
                    <img alt='' className="avatar" src={avatar} />
                    {/*    <img alt='' className="avatar" src={this.props.resume.background_image} />*/}
                </header>
                <BasicInfo basicinfo={this.props.resume.basicinfo} />
                <Social social={this.props.resume.social} />
                <ExperienceList type="获奖经历" experiences={this.props.resume.Awards} />
                <ExperienceList type="社团/组织" experiences={this.props.resume.socialExperiences} />
                <ExperienceList type="实习经历" experiences={this.props.resume.InternExperiences} />
                <ExperienceList type="项目经验" experiences={this.props.resume.ProjectExperience} />
            </div>
        );
    }
}


