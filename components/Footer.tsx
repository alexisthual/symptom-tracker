import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  const router = useRouter();

  const switchButton = (router: any) => {
    switch (router.pathname) {
      case "/about":
        return (
          <Link href="/">
            <button className="btn btn-link">
              <FormattedMessage id="home" />
            </button>
          </Link>
        );
      default:
        return (
          <Link href="/about">
            <button className="btn btn-link">
              <FormattedMessage id="about" />
            </button>
          </Link>
        );
    }
  };

  return (
    <div className="footer inline-flex">
      <section className="navbar-section">
        <a href="/" className="btn btn-link">
          <FormattedMessage id="home" />
        </a>
        <a href="/about" className="btn btn-link">
          <FormattedMessage id="about" />
        </a>
        <a
          href="https://github.com/alexisthual/symptoms-tracker"
          className="btn btn-link"
        >
          <FormattedMessage id="sourcecode" />
        </a>
      </section>
    </div>

    // <div className="footer inline-flex">
    //   {switchButton(router)}
    //   <a href="https://github.com/alexisthual/symptoms-tracker">
    //     <button className="btn btn-link">
    //       <FormattedMessage id="sourcecode" />
    //     </button>
    //   </a>
    // </div>
  );
};

export default Footer;
