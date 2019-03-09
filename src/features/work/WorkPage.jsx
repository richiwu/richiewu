import React, {Component} from 'react'

class WorkPage extends Component {
    render(){
        return (
            <div className="work_page">
                <h2>Work</h2>
                <div className="work_content">
                    <div class="job-list">
                        <div class="job-title">
                            <span class="job-image">
                                <img src="../../../public/img/ssense_logo.svg"></img>
                            </span>
                            <span class="job-position">position 1</span>
                        </div>
                        <div class="job-description">
                            <span class="job-description-detail">description</span>
                        </div>
                    </div>
                    <div class="job-list">
                        <div class="job-title">
                            <span class="job-image">image 1</span>
                            <span class="job-position">position 1</span>
                        </div>
                        <div class="job-description">
                            <span class="job-description-detail">description</span>
                        </div>
                    </div>
                    <div class="job-list">
                        <div class="job-title">
                            <span class="job-image">image 1</span>
                            <span class="job-position">position 1</span>
                        </div>
                        <div class="job-description">
                            <span class="job-description-detail">description</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkPage