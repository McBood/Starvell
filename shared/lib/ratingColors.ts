export function getRatingColors(rating: number) {
  if (rating === 5.0) {
    return {
      bg: "#E8F7EC",
      text: "#12B76A",
      star: "#12B76A",
    };
  } else if (rating >= 4.5) {
    return {
      bg: "#FFFDEB",
      text: "#E1B000",
      star: "#E1B000",
    };
  } else if (rating >= 3) {
    return {
      bg: "#FFF6EE",
      text: "#FF8E26",
      star: "#FF8E26",
    };
  } else if (rating >= 0) {
    return {
      bg: "#FFF2F2",
      text: "#FF5C5C",
      star: "#FF5C5C",
    };
  }
}
