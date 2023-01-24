import { useParams } from 'react-router-dom';

export default function RGB() {
  const { red, green, blue } = useParams();
  return (
    <body style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
      <p>
        rgb ({red}, {green}, {blue})
      </p>
    </body>
  );
}
