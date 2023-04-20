function toURL(e) {
  return e.toLowerCase().replace(/ /g, "-");
}

function toUnicode(e) {
  return `U+${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
}

function levenshteinDistance(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const d = [];

  for (let i = 0; i <= m; i++) {
    d[i] = [i];
  }
  for (let j = 0; j <= n; j++) {
    d[0][j] = j;
  }

  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= m; i++) {
      if (s1[i - 1] === s2[j - 1]) {
        d[i][j] = d[i - 1][j - 1];
      } else {
        d[i][j] = Math.min(d[i - 1][j], d[i][j - 1], d[i - 1][j - 1]) + 1;
      }
    }
  }

  return d[m][n];
}

export { toURL, toUnicode, levenshteinDistance };
