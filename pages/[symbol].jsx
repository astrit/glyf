import { useRouter } from "next/router";
function Symbol() {
  const router = useRouter();
  const { symbol } = router.query;

  return (
    <div>
      <h1>{symbol}</h1>
      <p>{router.query.title}</p>
    </div>
  );
}

export default Symbol;
