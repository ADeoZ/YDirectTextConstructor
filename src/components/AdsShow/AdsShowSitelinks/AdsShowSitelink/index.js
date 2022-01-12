import { FIELDS_PARAMS } from "../../../fieldsParams";
import classNames from "classnames/bind";

export default function AdsShowSitelink(props) {
  const { name, description, full } = props;

  return (
    <div className={classNames({"AdsShow__sitelinks-item": full, "AdsShow__sitelinks-item--string": !full})}>
      <a className="AdsShow__sitelinks-title" href="#plug">
        {name.substring(0, FIELDS_PARAMS.sitelink.name.length)}
      </a>
      {description &&
        <div className="AdsShow__sitelinks-description">{description.substring(0, FIELDS_PARAMS.sitelink.descr.length)}</div>
      }
    </div>
  );
}
