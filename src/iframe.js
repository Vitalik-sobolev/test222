import React from 'react';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    console.log("sss", src);
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="col-md-12">
            <div className="emdeb-responsive">
                <iframe 
                    title="aaa" 
                    src={src} 
                    height={220}
                    width={'40%'}
                    scrolling="yes"
                    style={{ border: '10px solid red' }}    
                ></iframe>
            </div>
        </div>
    );
};

export default Iframe;