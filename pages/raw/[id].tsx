import React, { FC } from "react";
import { getStaticPaths, PastePageProps, getStaticProps } from "../../modules/Paste";

const RawPage: FC<PastePageProps> = ({ paste, success }) => {
  if (!success) return <></>;

  return (
    <div>{paste.scripts}</div>
  );
}

export { getStaticProps, getStaticPaths };

export default RawPage;