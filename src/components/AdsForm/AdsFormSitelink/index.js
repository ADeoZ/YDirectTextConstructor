import AdsFormSitelinkInput from "./AdsFormSitelinkInput";

export default function AdsFormSitelink(props) {
  const { id, checkCallback, checkSum, forbidden } = props;

  return (
    <>
      №{id + 1}
      <div className="AdsForm__line AdsForm__sitelinks-headers">
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor={`sitelink_${id}_name`}>
            Заголовок
          </label>
          <div className="AdsForm__subdescription">До 30 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor={`sitelink_${id}_descr`}>
            Описание
          </label>
          <div className="AdsForm__subdescription">До 60 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor={`sitelink_${id}_link`}>
            Ссылка на сайт
          </label>
          <div className="AdsForm__subdescription">До 1016 символов</div>
        </div>
      </div>
      <div className="AdsForm__line">
        {["name", "descr", "link"].map((item) => (
          <AdsFormSitelinkInput
            id={id}
            checkCallback={checkCallback}
            checkSum={item === "name" ? checkSum : true}
            forbidden={forbidden}
            field={item}
            key={item}
          />
        ))}
      </div>
    </>
  );
}
