import React, { useRef } from 'react'
import './CustomerReviews.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const CustomerReviews = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='CustomerReviews'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Jake Richard</h3>
                        </div>
                    </div>
                    <p>Joining Joyhaven was the best decision I ever made for my fitness journey. 
                    The trainers are incredibly knowledgeable and supportive, and the variety of classes keeps me motivated every week!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Paul</h3>
                        </div>
                    </div>
                    <p>I've tried many gyms before, but none compare to Joyhaven. 
                        The sense of community here is unparalleled, and the personalized attention from the trainers has helped me achieve results I never thought possible.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Sarah Jones</h3>
                        </div>
                    </div>
                    <p>As a busy professional, finding time for fitness can be a challenge.
                         But Joyhaven makes it easy with their flexible class schedules and convenient location. Plus, the positive atmosphere keeps me coming back for more!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Mike Neck</h3>
                        </div>
                    </div>
                    <p>I was hesitant to join a gym at first, but Joyhaven quickly became my second home.
                         The staff genuinely cares about your progress, and the supportive environment has helped me build confidence both inside and outside the gym.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default CustomerReviews
