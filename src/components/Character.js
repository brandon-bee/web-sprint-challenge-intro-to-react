// Write your Character component here
export default function Character({ id, info, open }) {
  return (
    <>
      <h3>{info.name}</h3>
      <button onClick={() => open(id)}>
        See details
      </button>
    </>
  )
}