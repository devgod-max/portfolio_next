import { Fragment, useContext } from "react";
import Context from "../../context/context";
import Image from "next/image";

const BlogSection = () => {
  const { changeNav } = useContext(Context);
  return (
    <Fragment>
      <div className="content blog">
        {/* title */}
        <div className="title">
          <span>Certificate</span>
        </div>
        {/* content */}
        <div className="row border-line-v">
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="/images/blog/aws.jpg">
                  <Image
                    src="/images/blog/aws.jpg"
                    alt="AWS"
                    width={500}
                    height={300}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="/images/blog/english.jpg">
                  <Image
                    src="/images/blog/english.jpg"
                    alt="English"
                    width={500}
                    height={300}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="/images/blog/fs.jpg">
                  <Image
                    src="/images/blog/fs.jpg"
                    alt="styling with CSS"
                    width={500}
                    height={300}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="/images/blog/Machine Learning.jpg">
                  <Image
                    src="/images/blog/Machine Learning.jpg"
                    alt="Machine Learning"
                    width={500}
                    height={300}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="/images/blog/php.jpg">
                  <Image
                    src="/images/blog/php.jpg"
                    alt="PHP"
                    width={500}
                    height={300}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="/images/blog/vue.jpg">
                  <Image
                    src="/images/blog/vue.jpg"
                    alt="Vue"
                    width={500}
                    height={300}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default BlogSection;

export const BlogClassic = () => {
  const { changeNav } = useContext(Context);
  return (
    <Fragment>
      <div className="content blog">
        {/* title */}
        <div className="title">Latest Posts</div>
        {/* content */}
        <div className="row border-line-v">
          {/* blog item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#">
                  <img src="images/blog/blog1.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                  <span className="date">
                    <strong>20</strong>Jun
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" className="name">
                  By spite about do of do allow blush
                </a>
                <div className="category">Design</div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#">
                  <img src="images/blog/blog2.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                  <span className="date">
                    <strong>19</strong>Jun
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" className="name">
                  Two Before Arrow Not Relied
                </a>
                <div className="category">Coding</div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#">
                  <img src="images/blog/blog3.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                  <span className="date">
                    <strong>20</strong>Jun
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" className="name">
                  By spite about do of do allow blush
                </a>
                <div className="category">Travel</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
