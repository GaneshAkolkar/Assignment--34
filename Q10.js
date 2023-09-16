function calculateCircleArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    return `Area of circle is ${area.toFixed(2)} having the radius ${radius}`;
  }
  
  const radius = 5;
  console.log(calculateCircleArea(radius)); // Area of circle is 78.54 having the radius 5
  