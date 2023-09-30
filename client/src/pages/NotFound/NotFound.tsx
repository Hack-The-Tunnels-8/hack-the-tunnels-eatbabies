import { Page } from "../../components";
import "./NotFound.style.scss";
import myGif from './notfound.gif';

function NotFound() {

  return (
    <Page>
      <div className="NotFound">

        <h2>404 page not found</h2>
        <img src={myGif} />

      </div>
    </Page>
  );
}

export default NotFound;
