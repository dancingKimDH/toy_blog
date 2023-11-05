import { useState } from "react";

const IMAGE_1_URL = "https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%88%98%EC%97%AD-%ED%95%9C%EA%B0%80%EC%9A%B4%EB%8D%B0%EC%97%90-%EB%96%A0-%EC%9E%88%EB%8A%94-%EB%B9%99%EC%82%B0-R9Yfl1nSPmA"
const IMAGE_2_URL = "https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B5%AC%EB%A6%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EB%88%88-%EB%8D%AE%EC%9D%B8-%EC%82%B0-2um8kcfmOLc"
const IMAGE_3_URL = "https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%82%B0-%EA%BC%AD%EB%8C%80%EA%B8%B0%EC%9D%98-%EA%B5%AC%EB%A6%84-%EC%9C%84%EB%A1%9C-%EB%B3%B4%EB%A6%84%EB%8B%AC%EC%9D%B4-%EB%B3%B4%EC%9E%85%EB%8B%88%EB%8B%A4-zoHEgxqAiTM"

export default function Carousel() {
    const [activeImage, setActiveImage] = useState(1);
    return (
        <div>
            <div className="carousel">
                <ul className="carousel__slides">
                    <input type="radio" name="radio-buttons" id="img-1" checked={activeImage === 1} readOnly />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img src="/images/pic1.jpg" alt="scenery 1" />
                        </div>
                        <div className="carousel__controls">
                            <label onClick={() => setActiveImage(3)} className="carousel__slide-prev">
                                <span>&lsaquo;</span>
                            </label>

                            <label onClick={() => setActiveImage(2)} className="carousel__slide-next">
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input type="radio" name="radio-buttons" id="img-2" checked={activeImage === 2} readOnly />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img src="/images/pic2.jpg" alt="scenery 2" />
                        </div>
                        <div className="carousel__controls">
                            <label onClick={() => setActiveImage(1)} className="carousel__slide-prev">
                                <span>&lsaquo;</span>
                            </label>

                            <label onClick={() => setActiveImage(3)} className="carousel__slide-next">
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input type="radio" name="radio-buttons" id="img-3" checked={activeImage === 3} readOnly />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img src="/images/pic3.jpg" alt="scenery 2" />
                        </div>
                        <div className="carousel__controls">
                            <label onClick={() => setActiveImage(2)} className="carousel__slide-prev">
                                <span>&lsaquo;</span>
                            </label>

                            <label onClick={() => setActiveImage(1)} className="carousel__slide-next">
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <div className="carousel__dots">
                        <label onClick={() => setActiveImage(1)} className="carousel__dot" id="img-dot-1"></label>
                        <label onClick={() => setActiveImage(2)} className="carousel__dot" id="img-dot-2"></label>
                        <label onClick={() => setActiveImage(3)} className="carousel__dot" id="img-dot-3"></label>
                    </div>
                </ul>
            </div>

        </div>


    )
}