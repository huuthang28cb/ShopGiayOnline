import React from 'react'

const ContactInfo = () => {
    return (
        <div className="contactInfo container">
            <div className="row">
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h5>Hộ trợ 24/7</h5>
                        <p>0736 230 063</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h5>Trụ sở chính</h5>
                        <p>Số 2, Nguyễn Đình Chiểu, Nha Trang</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fas fa-fax"></i>
                        </div>
                        <h5>Fax</h5>
                        <p>0736 230 063</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo