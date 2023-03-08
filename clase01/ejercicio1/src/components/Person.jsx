const Person = ({ name, age }) => {
  return (
    <div>
      <p>{name}</p>
      <p>
        {age < 18
          ? "Lo sentimos, no tiene edad legal para beber alcohol"
          : "Bienvenido. Lo invitamos a tomar una cerveza"}
      </p>
    </div>
  );
};

export default Person;
