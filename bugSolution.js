```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    // Correct way to check for previous value
    if (count > prevCount.current) {
      console.log('Count increased from', prevCount.current, 'to', count);
    }
    prevCount.current = count; // Update the ref for the next render
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```