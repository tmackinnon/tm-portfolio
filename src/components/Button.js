export default function Button(props) {
  return (
    <button className="rounded bg-secondary p-2 font-bold">
      {props.title}
    </button>
  );
}