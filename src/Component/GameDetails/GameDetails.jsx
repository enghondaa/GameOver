import { func } from 'joi';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getGameDetails } from '../../apiCalls';
import './GameDetails.css'

export default function GameDetails() {
    let { id } = useParams();
    const [details, setDetails] = useState([]);
    const [requierments, setRequierments] = useState([]);
    const [screenShots, setScreenShots] = useState([]);



    async function getDetails() {
        let data = await getGameDetails(id);
        setDetails(data);
        setRequierments(data.minimum_system_requirements);
        setScreenShots(data.screenshots)
    }
    getDetails();
    return <>
       <section className='py-5'>
       <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="img-details ">
                        <img src={details.thumbnail} alt="" className='w-100 rounded' />
                    </div>
                    <div className='row mt-3 w-100 justify-content-between align-items-center me-0 pe-0'>
                        <div className='col-3 col-lg-2 me-2'>
                            <span className='btn btn-dark2 py-2 cursor'>Free</span>
                        </div>
                        <div className='col me-0 pe-0'>
                            <a href={details.game_url} target='_blank' className='btn btn-ftg btn-block w-100 py-2 me-0 rounded'><strong>PlayNow</strong></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div>
                        <h1>{details.title}</h1>
                        <h5>{'about ' + details.title}</h5>
                        <p>{details.description}</p>
                        <h5>Minimum System Requierment</h5>
                        {
                            requierments ? <ul className='list-unstyled ms-2'>
                                <li>{'graphics : ' + requierments.graphics}</li>
                                <li>{'memory : ' + requierments.memory}</li>
                                <li>{'os : ' + requierments.os}</li>
                                <li>{'processor : ' + requierments.processor}</li>
                                <li>{'storage : ' + requierments.storage}</li>
                            </ul> : ''
                        }
                        <h4 className='my-3'>{details.title + ' ScreenShots'}</h4>
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {screenShots.map((screenShot, index) => <div key={index} className="carousel-item active">
                                    <img src={screenShot.image} className="d-block w-100" alt="..." />
                                </div>)}
                            </div>
                        </div>
                        <h2 className='my-3'>Additional Information</h2>
                        <hr className="mt-2 mb-3"></hr>
                        <div className="row mb-3">
                            <div className="col-6 col-md-4"><span className="text-muted">Title<br /></span><p >{details.title}</p></div>
                            <div className="col-6 col-md-4"><span className="text-muted">Developer<br /></span> {details.developer} </div>
                            <div className="col-6 col-md-4"><span className="text-muted">Publisher<br /></span> {details.publisher} </div>
                            <div className="col-6 col-md-4"><span className="text-muted">Release Date<br /></span> {details.release_date}</div>
                            <div className="col-6 col-md-4"><span className="text-muted">Genre<br /></span> {details.genre} </div>
                            <div className="col-6 col-md-4"><span className="text-muted">Platform<br /></span>{details.platform === "Windows" ? <span><i className="fa-brands fa-windows "></i></span> : <span><i className="fa-solid fa-window-maximize "></i></span>} {details.platform} </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
       </section>
    </>
}
