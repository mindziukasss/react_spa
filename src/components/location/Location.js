import React from 'react';

const Location = () => {
    return (
        <div className={"location_wrapper"}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86137.82845232601!2d73.11488127533697!3d-0.7052054821917616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bd202d5e5d%3A0x545489c20f5097da!2sGan+International+Airport!5e0!3m2!1slt!2slt!4v1558880168787!5m2!1slt!2slt"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen>
            </iframe>
            <div className={"location_tag"}>
                <div>
                    Location
                </div>
            </div>
        </div>
    );
};

export default Location;
