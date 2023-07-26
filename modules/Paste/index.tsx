import { apiCaller } from "../../utils/fetcher";

export type PastePageProps = {
  paste?: PasteType;
  success: Boolean;
};

export type PasteType = {
  _id: string;
  title: string;
  scripts: string;
  description: string;
  gameLink: string;
  createdAt: string;
};

export async function getStaticPaths() {
  try {
    return {
      paths: [],
      fallback: true, // can also be true or 'blocking'
    }
  } catch (err) {
    return {
      paths: [],
      fallback: true, // can also be true or 'blocking'
    }
  }
}


export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  try {
    const {
      data: { paste },
    } = await apiCaller.get(`/pastes/fetchpaste/${id}`);
    return { props: { paste, success: true } };
  } catch (err) {
    return { props: { success: false } };
  }
};
