import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import Style from "./Footer.module.scss";
const Footer = ({ props }) => {
  return (
    <footer className={Style.footer}>
      <div className="container">
        <div className={Style.links_wrap}>
          <div className="row">
            {width >= 992 ? (
              <div className="col-lg-8 col-xxl-6 d-flex flex-wrap">
                <div className={`${Style.links} col-lg ${Style.links_common}`}>
                  <h6 className="h6 text-white">{props?.common_links?.title}</h6>
                  <ul>
                    {props?.common_links?.data?.map((item, index) => (
                      <li key={index}>
                        <Link href={`${item?.link}`}>{item?.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${Style.links} col-lg-auto`}>
                  <h6 className="h6 text-white">{props?.our_services?.title}</h6>
                  <ul>
                    {props?.our_services?.data?.map((item, index) => (
                      <li key={index}>
                        <Link href={`${item?.link}`}>{item?.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Accordion className={Style.accordion} defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{props?.common_links?.title}</Accordion.Header>
                  <Accordion.Body className={`${Style.links}`}>
                    <ul>
                      {props?.common_links?.data?.map((item, index) => (
                        <li key={index}>
                          <Link href={`${item?.link}`}>{item?.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>{props?.our_services?.title}</Accordion.Header>
                  <Accordion.Body className={`${Style.links}`}>
                    <ul>
                      {props?.our_services?.data?.map((item, index) => (
                        <li key={index}>
                          <Link href={`${item?.link}`}>{item?.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )}

            <div className="col-lg-4 col-xxl-6">
              <div className={Style.form_wrap}>
                {width >= 992 ? <SubscribeForm /> : ""}

                <h4 className="h6 text-white">Follow Us on</h4>
                <ul className={Style.social_wrap}>
                  {props?.footer_links?.map((item, index) => (
                    <li>
                      <Link href={`${item?.url}`} aria-label={item?.title} key={index}>
                        <Icon icon={item?.title} size={25} />{" "}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.contact_wrap}>
          <ul>
            <li>
              <a href={`tel:${props?.tel}`}>
                <span>
                  <Icon icon="phone" size={width >= 992 ? 26 : 19} />
                </span>
                {props?.tel}
              </a>
            </li>
            <li>
              <a href={`mailto:${props?.mail}`} className={Style.link_phone}>
                <span>
                  <Icon icon="mail" size={width >= 992 ? 17 : 12} />
                </span>
                {props?.mail}
              </a>
            </li>
          </ul>
        </div>
        <div className={Style.credit}>
          <div className="row">
            <div className="col-lg text-center text-lg-start">
              <p>{props?.copyright}</p>
            </div>
            <div className="col-lg-auto text-center text-lg-end">
              <p className="mb-0">
                Designed by 
                <a href="https://webandcrafts.com/" target={"_blank"}> 
                  webandcrafts
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
