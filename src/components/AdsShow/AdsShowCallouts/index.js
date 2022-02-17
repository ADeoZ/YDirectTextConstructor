import { FIELDS_PARAMS } from "../../fieldsParams";

export default function AdsShowCallouts(props) {
  const {callouts} = props;

  const calloutsOutput = [];
  let lengthSum = 0;
  for (const callout of callouts) {
    if (!callout.length) continue;
    const cutCallout = callout.substring(0, FIELDS_PARAMS.callout.length);
    if (lengthSum + cutCallout.length <= FIELDS_PARAMS.callouts.fields.sum) {
      calloutsOutput.push(cutCallout);
      lengthSum += cutCallout.length;
    }
  }

  return (
    <>
      {calloutsOutput.length ? (
        <>
          <span className="AdsShow__content-dot">&nbsp;· </span>
          {calloutsOutput.join(". ")}
        </>
      ) : null}
    </>
  );
}
