import Link from "next/link";
import { FormattedMessage } from "react-intl";
import Head from "next/dist/next-server/lib/head";

interface IHeaderProps {
  language?: string;
}

const Header = ({}: IHeaderProps) => (
  <>
    <div className="disclaimer bg-primary py-2">
      <div className="container grid-lg">
        <div className="columns col-gapless">
          <div
            className="column col-2 text-center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <i className="icon icon-flag"></i>
          </div>
          <div className="column col-10 text-justify">
            <FormattedMessage id="disclaimer" />
          </div>
        </div>
      </div>
    </div>

    <div className="navbar">
      <section className="navbar-section"></section>
      <section className="navbar-center">
        <Link href="/">
          <div className="inline-flex flex-centered">
            <img src="coronastatus_logo.png" height="100" />
            <img src="coronastatus_logo_text_dark.png" height="100" />
          </div>
        </Link>
      </section>
      <section className="navbar-section px-2"></section>
    </div>
  </>
);

export default Header;
