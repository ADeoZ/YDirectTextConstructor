import classNames from "classnames/bind";
import AdsShowSitelink from "./AdsShowSitelink";


export default function AdsShowSitelinks(props) {
  const { sitelinks } = props;

  const sitelinksBasic = sitelinks.slice(0, 4).filter((sitelink) => sitelink.name.length > 0);
  const firstBlock = sitelinksBasic.slice(0, 4).filter((sitelink) => sitelink.descr.length > 0);
  const secondBlock = sitelinks.slice(4, 8).filter((sitelink) => sitelink.name.length > 0 && sitelink.descr.length > 0);

  return (
    <>
      {sitelinksBasic.length > 0 &&
        <div className={classNames("AdsShow__sitelinks", { "AdsShow__sitelinks--string": firstBlock.length !== 4 })}>
          {firstBlock.length === 4 ? firstBlock.map((sitelink, index) => (
            <AdsShowSitelink name={sitelink.name} description={sitelink.descr} full={true} key={index} />
          )) :
            sitelinksBasic.map((sitelink, index) =>
              <AdsShowSitelink name={sitelink.name} key={index} />
            )}
          {firstBlock.length === 4 && secondBlock.length === 4 && secondBlock.map((sitelink, index) => (
            <AdsShowSitelink name={sitelink.name} description={sitelink.descr} full={true} key={index} />
          ))}
        </div>
      }
    </>
  );
}
