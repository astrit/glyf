import Layout from "@/search/card/layout";

const Card = ({ children, ...props }) => {
  return <Layout {...props}>{children}</Layout>;
};

Card.displayName = "Card";

export default Card;
