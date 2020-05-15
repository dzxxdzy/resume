/*
 * @Description: ExperienceList
 * @Author:dzxxdzy
 * @Date: 2019-08-08 11:08:13
 * @LastEditTime: 2020-05-15 17:23:26
 * @LastEditors: Song
 */
import React from 'react';
import Experience from './Experience'
export default (props) => {
    return (
        <section className="experiencelist">
            <div className="experience-type">
                {props.type}
            </div>
            {props.experiences.map(function (experience) {
                return (
                    <Experience experience={experience} key={experience.name} />
                )
            })}
        </section>
    );
}

