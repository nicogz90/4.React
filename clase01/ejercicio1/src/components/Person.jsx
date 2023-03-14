const Person = ({ name, age }) => {
  const message =
    age < 18
      ? "Lo sentimos, no tiene edad legal para beber alcohol"
      : "Bienvenido. Lo invitamos a tomar una cerveza";
  return (
    <div>
      <p>
        {name} ({age})
      </p>
      <p>{message}</p>
    </div>
  );
};

export default Person;
