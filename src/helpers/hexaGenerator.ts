const hexaGenerator = () => {
  const hexa = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexa[Math.floor(Math.random() * hexa.length)];
  }
  return color;
};

export default hexaGenerator;
