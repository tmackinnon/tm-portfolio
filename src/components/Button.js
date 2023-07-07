export default function Button(props) {
  return (
    <button className="rounded p-2 font-bold">
      {props.title}
    </button>
  );
}