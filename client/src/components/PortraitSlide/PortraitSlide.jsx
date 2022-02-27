import "../LandscapeSlide/LandscapeSlide.css"

function PortraitSlide(){
    return(
        <div className="horizontalScroll">
            
            <div>
                <img className="img_gallery-vertical" src="https://res.cloudinary.com/dk00a2nda/image/upload/v1645875763/Photo_site/DSC02077_rapvr3.jpg" alt="landscape2" />
            </div>
            <div>
                <img className="img_gallery-horizontal" src="https://res.cloudinary.com/dk00a2nda/image/upload/v1645875840/Photo_site/DSC02162_v7fj1t.jpg" alt="landscape1" />
            </div>
            <div>
                <img className="img_gallery-horizontal" src="https://res.cloudinary.com/dk00a2nda/image/upload/v1645875879/Photo_site/DSC02124_aguezu.jpg" alt="landscape1" />
            </div>
            
            <div>
                <img className="img_gallery-horizontal" src="https://res.cloudinary.com/dk00a2nda/image/upload/v1645875920/Photo_site/DSC02163_ahafiy.jpg" alt="landscape1" />
            </div>
            <div>
                <img className="img_gallery-horizontal" src="https://res.cloudinary.com/dk00a2nda/image/upload/v1645875966/Photo_site/DSC02161_m7ply4.jpg" alt="landscape2" />
            </div>
        </div>
        
    )
}

export default PortraitSlide
