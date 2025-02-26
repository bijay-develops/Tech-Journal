const PropDrillingExplanation = () => {
    return (
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db' }}>
          Prop Drilling Issues
        </h2>
        
  
        <h3 style={{ color: '#e74c3c', margin: '20px 0 15px' }}>
          Why We Shouldn't Use Prop Drilling?
        </h3>
  
        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
          <li style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h4 style={{ color: '#27ae60', margin: '0 0 10px 0' }}>Code Maintainability</h4>
            <p style={{ margin: 0, color: '#27ae60'}}>
              Passing props through multiple components makes the code harder to read and update.
            </p>
          </li>
  
          <li style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h4 style={{ color: '#27ae60', margin: '0 0 10px 0' }}>Component Coupling</h4>
            <p style={{ margin: 0, color: '#27ae60'}}>
              Components become tightly coupled to their parent components, making them less reusable.
            </p>
          </li>
  
          <li style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h4 style={{ color: '#27ae60', margin: '0 0 10px 0' }}>Scalability Issues</h4>
            <p style={{ margin: 0 , color: '#27ae60'}}>
              As the app grows, prop drilling can lead to a cluttered component hierarchy.
            </p>
          </li>
  
          <li style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h4 style={{ color: '#27ae60', margin: '0 0 10px 0' }}>Increased Boilerplate</h4>
            <p style={{ margin: 0 , color: '#27ae60'}}>
              Developers must manually pass props at each level, leading to unnecessary duplication of code.
            </p>
          </li>
        </ul>
  
        <div style={{ 
          marginTop: '30px',
          padding: '15px',
          backgroundColor: '#fff3e0',
          borderRadius: '8px',
          borderLeft: '4px solid #ffa500'
        }}>
          <strong style={{color: '#e74c3c'}}>Better Solution:</strong>
          <p style={{ margin: '10px 0 0 0', color: '#e74c3c' }}>
            Consider using React Context API or state management libraries like Redux/Zustand for complex applications.
          </p>
        </div>
      </div>
    );
  };

  export default PropDrillingExplanation;