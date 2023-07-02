import { styled } from "@/theme";
import Box from "@/box";

const Layout = styled(Box, {
  color: "hsla(259, 73%, 76%, 1.0)",
  fontSize: "14px",
  fontFeatureSettings: '"kern", "ss02"',
  display: "flex",
  gap: "24px",
  alignItems: "center",
});

const Action = ({
  isLoading,
  isSelected,
  searchTerm,
  numResults,
  numSymbols,
  children,
  ...props
}) => {
  const Keys = styled(Box, {
    display: "flex",
    fontSize: "10px",
    alignItems: "center",
    gap: "4px",

    key: {},
  });

  const Key = styled("kbd", {
    display: "flex",
    border: "1px solid rgba(255,255,255,0.07)",
    color: "White",
    fontWeight: "bold",
    background: "hsla(260, 73%, 53%, 1.0)",
    borderRadius: "8px",
    padding: "4px 8px",
    boxShadow:
      "1px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 12px rgba(0, 0, 0, 0.04)",

    "&:last-child": {
      fontFamily: isLoading ? "Flow Circular" : "",
    },
  });

  const Results = styled(Box, {
    fontFamily: isLoading ? "Flow Circular" : "",
    gap: "24px",
    display: "flex",
  });

  return (
    <Layout {...props}>
      <Keys>
        <Key>⇧</Key> +<Key>CLICK</Key>
      </Keys>
      <Results>
        {(isSelected && <span>{isSelected} Selected</span>) ||
          (searchTerm && (
            <span>
              {numResults} result{numResults !== 1 ? "s" : ""}
            </span>
          ))}
        <span>{numSymbols ? numSymbols : "0000"} Glyphs</span>
      </Results>
    </Layout>
  );
};

Action.displayName = "Action";

export default Action;
