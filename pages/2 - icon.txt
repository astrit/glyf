import { useRouter } from "next/router";

function Symbol() {
  const router = useRouter();
  const { name } = router.query;

  return <> This is more than that {name}</>;
}

export default Symbol;
