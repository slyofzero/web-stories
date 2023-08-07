import { useStories } from "@/hooks/swr";
import { API_URL, apiFetcher } from "@/utils";
import { InferGetStaticPropsType } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home(props: Props) {
  const { stories } = useStories({ config: { fallbackData: props.stories } });

  const { title, content } = stories?.[0];

  return (
    <main className="bg-black text-white">
      <h1>{title}</h1>
      <p>{content}</p>
    </main>
  );
}

// ISR for fallback data
export async function getStaticProps() {
  let stories: any[] = [];

  try {
    stories = await apiFetcher(`${API_URL}/story`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Error in ISR on / : ${error}`);
  }

  return { props: { stories }, revalidate: 10 };
}
