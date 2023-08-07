// import { useStories } from "@/hooks/swr";
// import { API_URL, apiFetcher } from "@/utils";
// import { InferGetStaticPropsType } from "next";

// type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home() {
  // const { stories } = useStories({ config: { fallbackData: props.stories } });

  // const { title, content } = stories?.[0];

  return (
    <main className="bg-black text-white">
      <h1>Dogggie</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
        temporibus possimus inventore maxime illo debitis, autem nostrum
        molestias, ut assumenda cupiditate ipsa molestiae illum voluptatum atque
        impedit ex dignissimos, aperiam fugiat? Laborum minima deleniti quis
        iste suscipit odio in saepe, veniam necessitatibus aliquam, totam,
        nostrum consequuntur labore quidem molestiae officiis!
      </p>
    </main>
  );
}

// ISR for fallback data
// export async function getStaticProps() {
//   let stories: any[] = [];

//   try {
//     stories = await apiFetcher(`${API_URL}/story`);
//   } catch (error) {
//     // eslint-disable-next-line no-console
//     console.log(`Error in ISR on / : ${error}`);
//   }

//   return { props: { stories }, revalidate: 10 };
// }
