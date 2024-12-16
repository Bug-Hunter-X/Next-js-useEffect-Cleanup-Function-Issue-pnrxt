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
  const [isMounted, setIsMounted] = React.useState(true);

  React.useEffect(() => {
    setIsMounted(true);
    console.log('Component mounted');
    return () => {
      setIsMounted(false);
      console.log('Component unmounted');
    };
  }, []);

  const handleClick = () => {
    if(isMounted) setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```