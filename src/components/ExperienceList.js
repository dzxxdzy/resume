/*
 * @Description: ExperienceList
 * @Author:dzxxdzy
 * @Date: 2019-08-08 11:08:13
 * @LastEditTime: 2019-08-09 14:48:59
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Experience from './Experience'
export default class ExperienceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <section className="experiencelist">
                <div className="experience-type">
                    {this.props.type}
                </div>
                {this.props.experiences.map(function (experience) {
                    return (
                        <Experience experience={experience} key={experience.name} />
                    )
                })}
            </section>
        );
    }
}

