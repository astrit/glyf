import { useRouter } from "next/router";

function Symbol() {
  const router = useRouter();
  const { name } = router.query;

  return <>{name}</>;
}

export default Symbol;
