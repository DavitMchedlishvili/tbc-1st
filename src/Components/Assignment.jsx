import React from 'react'


  const obj = {

    id: '10002',

    name: 'Eco-Friendly Water Bottle',

    description: 'Stay hydrated with our durable, eco-friendly water bottle.',

    price: 14.99,

    currency: 'USD',

    imageURL: 'https://example.com/images/product-10002.jpg',

  };



  const list = (
    <table border="1">
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(obj).reduce((acc, [key, value], index) => {
          return acc.concat(
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              <td>{index}</td>
            </tr>
          );
        }, [])}
      </tbody>
    </table>
  );

const Assignment = () => {
  return (
    <main>
        <div>{list}</div>
    </main>
    
  )
}

export default Assignment




