export default function Comment({ email, comment, date}){
  return(
    <div>
      <strong>{email}</strong>
      <p>Em {date}</p>
      <p>{comment}</p>
    </div>
  )
}