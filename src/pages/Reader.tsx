
type Props = {
  onSignOut: () => void
}

function Reader({ onSignOut }: Props) {
  return (
    <section>
      <h1>Reader Room</h1>

      <p>
        Welcome to the Reader Room!
      </p>

      <p>
        This is a private page for signed-in readers.
        Here you can find special blog content.
      </p>

      <button type="button" onClick={onSignOut}>
        Sign Out
      </button>
    </section>
  )
}

export default Reader
