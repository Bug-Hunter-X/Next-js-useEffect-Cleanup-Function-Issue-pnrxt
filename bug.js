```javascript
//pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Next.js Bug</h1>
      <p>This is a test page.</p>
      <MyComponent/>
    </div>
  );
}

//components/MyComponent.js
export default function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('Component mounted');
    // Simulate an API call or side effect
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```