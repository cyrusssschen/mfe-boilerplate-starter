const ErrorBoundary = (error: string) => {
    return <div style={{
        width: "60vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'left',
        margin: '0 auto'
      }}>Error details: {error}</div>
}

export default ErrorBoundary;