import React from 'react';
import {ReactComponent as User} from '../Assets/user.svg';
import {ReactComponent as Attached} from '../Assets/attached.svg';
import Paragon from '../Assets/paragon.png';
import Classcraft from '../Assets/classcraft.png';
import Read from '../Assets/Readtome.png';
import Discovery from '../Assets/Discovery.png';
import { connect } from 'react-redux';
import Oval from '../Assets/Oval.png';
import styled from 'styled-components';
import { motion} from 'framer-motion';
import {ReactComponent as More} from '../Assets/more.svg';
import {ReactComponent as Plus} from '../Assets/plus.svg';
import {ReactComponent as Time} from '../Assets/Time.svg';
import { ReactComponent as Path } from '../Assets/Path.svg';
import { PageAnimation} from '../Animations/pageAnimations';
import { ContactForm} from '../Animations/login';

const Impact = (props) => {

    return(
        <Impactdiv variants={PageAnimation} initial="hidden" exit="exit" animate="show">

            <motion.div variants={ContactForm} initial="hidden" animate="show" className="impact_campaign">
                <div className="impact_campaign-header">
                    <span className="card-head">Impact Campaigns</span>
                    <div className="options"><Plus /><More /></div>
                </div>
                <motion.div variants={ContactForm} className="impact_card">
                <div className="impact-card-container">
                    <h3>Reading Comprehension</h3>
                    <div className="status">
                    <span className="red">High</span>
                    </div>
                    <div className="student-tools">
                        <span><User/>&nbsp;Students</span>
                        <span><Attached/>&nbsp;3 Tools</span>
                    </div>
                    <div className="timeline">
                        <span><img src={Oval} alt="Pic" /></span>
                        <div className="timedate">
                            <span>29 Sept - 10 Oct</span>
                            <div className="level">
                                <span className="level-fill"></span>
                            </div>
                        </div>
                    </div>
                    </div>
                </motion.div>
                <motion.div variants={ContactForm} className="impact_card">
                <div className="impact-card-container">
                    <h3>Career Development</h3>
                    <div className="status">
                    <span className="orange">Medium</span>
                    </div>
                    <div className="student-tools">
                        <span><User/>&nbsp;Students</span>
                        <span><Attached/>&nbsp;0 Tools</span>
                    </div>
                    <div className="timeline">
                        <span><img src={Oval} alt="Pic" /></span>
                        <div className="timedate">
                            <span>29 Sept - 10 Nov</span>
                            <div className="level">
                                <span className="level-fill"></span>
                            </div>
                        </div>
                    </div>
                    </div>
                </motion.div>
                <div className="footer"><Plus /> Start New Campaign</div>
            </motion.div> 
            <motion.div variants={ContactForm} initial="hidden" animate="show" className="impact_campaign">
                <div className="impact_campaign-header">
                    <span className="card-head">Learning Tools</span>
                    <div className="options"><Plus /><More /></div>
                </div>
                <LearningCard variants={ContactForm}>
                    <div className="card-img">
                    <img src={Paragon} alt="Pic" />
                    </div>
                    <div className="learning-card-txt">
                       <div className="l-title">Paragon One</div>
                       <div className="ls-title">Creative thinking, +3 more</div>
                    </div>
                </LearningCard>
                <LearningCard variants={ContactForm}>
                    <div className="card-img">
                    <img src={Classcraft} alt="Pic" />
                    </div>
                    <div className="learning-card-txt">
                       <div className="l-title">Classcraft</div>
                       <div className="ls-title">Writing composition, +1 more</div>
                    </div>
                </LearningCard>
                <LearningCard variants={ContactForm}>
                    <div className="card-img">
                    <img src={Read} alt="Pic" />
                    </div>
                    <div className="learning-card-txt">
                       <div className="l-title">ReadToMe</div>
                       <div className="ls-title">Experimental Learning, +2 more</div>
                    </div>
                </LearningCard>
                <LearningCard variants={ContactForm}>
                    <div className="card-img">
                    <img src={Discovery} alt="Pic" />
                    </div>
                    <div className="learning-card-txt">
                       <div className="l-title">Discovery Education</div>
                       <div className="ls-title">Creative thinking, +10 more</div>
                    </div>
                </LearningCard>
                <div className="footer"><Plus />Add New Tool</div>
            </motion.div> 
            <motion.div variants={ContactForm} initial="hidden" animate="show" className="impact_campaign">
                <div className="impact_campaign-header">
                    <span className="card-head">Tool Pilots</span>
                    <div className="options"><Plus /><More /></div>
                </div>
                <ImpactCard variants={ContactForm}>
                <div className="impact-card-container">
                    <h3>ReadToMe: Houde Pilot 1</h3>
                    <div className="status">
                    <span className="green">In Progress</span>
                    </div>
                    <div className="student-tools">
                        <span><Time/>&nbsp;Students</span>
                        <span><Path/>&nbsp;3 Tools</span>
                    </div>
                    <div className="timeline">
                        <span><img src={Oval} alt="Pic" /></span>
                        <div className="timedate">
                            <span>29 Sept - 10 Oct</span>
                            <div className="money">
                             ¥50k/year
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="tags">
                        <div className="tag">
                            words-per-minute
                        </div>
                        <div className="tag">
                            text completion
                        </div>
                        <div className="tag">
                            comprehension response
                        </div>
                        <div className="tag">
                            pronounciation accuracy
                        </div>
                    </div>
                </ImpactCard>
                <ImpactCard variants={ContactForm}>
                <div className="impact-card-container">
                    <h3>ReadToMe: Houde Pilot 2</h3>
                    <div className="status">
                    <span className="yellow">Awaiting Approval</span>
                    </div>
                    <div className="student-tools">
                        <span><Time/>&nbsp;Fall 2020</span>
                        <span><Path/>&nbsp;Student Pod</span>
                    </div>
                    <div className="timeline">
                        <span><img src={Oval} alt="Pic" /></span>
                        <div className="timedate">
                            <span>29 Sept - 10 Oct</span>
                            <div className="money">
                             ¥50k/year
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="tags">
                        <div className="tag">
                            early career prep
                        </div>
                        <div className="tag">
                            college prep
                        </div>
                        <div className="tag">
                            experiential learning
                        </div>
                    </div>
                </ImpactCard>
                <ImpactCard variants={ContactForm}>
                <div className="impact-card-container">
                    <h3>ReadToMe: Houde Pilot 2</h3>
                    <div className="status">
                    <span className="orange">Change Requested</span>
                    </div>
                    <div className="student-tools">
                        <span><Time/>&nbsp;Fall 2020</span>
                        <span><Path/>&nbsp;Student Pod</span>
                    </div>
                    <div className="timeline">
                        <span><img src={Oval} alt="Pic" /></span>
                        <div className="timedate">
                            <span>29 Sept - 10 Oct</span>
                            <div className="money">
                             ¥50k/year
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="tags">
                        <div className="tag">
                            early career prep
                        </div>
                        <div className="tag">
                            college prep
                        </div>
                        <div className="tag">
                            experiential learning
                        </div>
                    </div>
                </ImpactCard>
            </motion.div> 
            <motion.div variants={ContactForm} initial="hidden" animate="show" className="design">
            <div className="impact_campaign-header" variants={ContactForm}>
                    <span className="card-head">Design Learning Pods</span>
                    <div className="options"><More /></div>
                </div>
                <div className="pod-area">
                    <Plus/> New Learning Pod
                </div>
            </motion.div>
        </Impactdiv>
    )
}

const ImpactCard = styled(motion.div)`
background-color: white;
  box-shadow: 0px 1px 6px #0000001a;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const LearningCard = styled(motion.div)`
  background-color: white;
  padding: 0.8rem;
  border-radius: 5px;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom:1rem;
`;

const Impactdiv = styled(motion.div)`
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 1rem;
`;
const mapStateToProps = state => {
    return {
        userId:state.reducer.userId
    }
}


export default connect(mapStateToProps)(Impact);