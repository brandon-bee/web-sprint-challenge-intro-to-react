export default function Details({ , close }) {
  const [details, setDetails] = useState(null);

  // useEffect(() => {
  //   axios.get()
  //     .then(resp => {
  //       setDetails(resp.data)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, [friendId])

  return (
    <button onClick={close}>Close</button>
  )
}