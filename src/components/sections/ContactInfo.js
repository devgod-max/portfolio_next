const ContactInfo = () => {
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Get in Touch</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.179385028443!2d-38.32128587440595!3d-12.896184058298315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716161dc8229fdf%3A0xf8c1cfa3ca2d173b!2sR.%20S%C3%A3o%20Raimundo%20-%20Centro%2C%20Lauro%20de%20Freitas%20-%20BA%2C%2042702-840%2C%20Brazil!5e0!3m2!1sen!2s!4v1737556098332!5m2!1sen!2s"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Address . . . .</strong> Lauro de Freitas, Bahia
              </li>
              <li>
                <strong>Email . . . .</strong>
                wodldoel@gmail.com
              </li>
              <li>
                <strong>Phone . . . .</strong> +55 71 98434 6811
              </li>
              <li>
                <strong>Freelance . . . .</strong> Available
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactInfo;
