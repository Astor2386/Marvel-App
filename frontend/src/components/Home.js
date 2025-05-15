function Home() {
  const outerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: 'calc(100vh - 100px)',
    marginTop: '20px',
  };

  const homeContentStyle = {
    backgroundColor: 'white', // Fully solid white
    padding: '15px 25px',
    borderRadius: '8px',
    display: 'inline-block',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={outerContainerStyle}>
      <div style={homeContentStyle}>
        <h1>Welcome to the Marvel Character App</h1>
        <p>Explore your favorite Marvel characters!</p>
        <a href="/characters" className="btn btn-primary">View Characters</a>
      </div>
    </div>
  );
}

export default Home;