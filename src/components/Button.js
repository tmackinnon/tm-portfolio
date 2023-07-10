export default function Button(props) {
  return (
    <button className="rounded-lg p-2 font-bold">
      {props.title}
    </button>
  );
}