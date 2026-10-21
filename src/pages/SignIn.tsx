
import { useNavigate } from 'react-router'

type Props = {
  onSignIn: () => void
}

function SignIn({ onSignIn }: Props) {
  const navigate = useNavigate()

  function handleSignIn() {
    onSignIn()
    navigate('/reader')
  }

  return (
    <section>
      <h1>Sign In</h1>

      <p>
        Please sign in to open the Reader Room.
      </p>

      <button onClick={handleSignIn}>
        Sign In
      </button>
    </section>
  )
}

export default SignIn
