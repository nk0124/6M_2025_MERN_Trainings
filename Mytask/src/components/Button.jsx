
import { useState } from "react";

const tabs = [
  {
    name: "Components",
    title: "React Components",
    description: "Components are the building blocks of a React application.",
    syntax: "function MyComponent() { return <div>Hello</div>; }",
  },
  {
    name: "JSX",
    title: "JSX in React",
    description: "JSX is a syntax extension for JavaScript, recommended by React.",
    syntax: "const element = <h1>Hello, world!</h1>;",
  },
  {
    name: "Props",
    title: "Props in React",
    description: "Props allow data to be passed from one component to another.",
    syntax: "<ChildComponent name=\"John\" />",
  },
  {
    name: "Reactjs",
    title: "What is React?",
    description: "React is a JavaScript library for building UI components.",
    syntax: "import React from 'react';",
  },
  {
    name: "State",
    title: "State in React",
    description: "State is used to manage dynamic data within a component.",
    syntax: "const [count, setCount] = useState(0);",
  },
  // {
  //   name: "States",
  //   title: "States in React",
  //   description: "State is used to manage dynamic data within a component.",
  //   syntax: "const [count, setCount] = useState(0);",
  // },
];

function TabButton({ name, onClick }) {
  return (
    <button onClick={() => onClick(name)} className="px-4 py-2 m-2 bg-blue-500 text-white rounded">
      {name}
    </button>
  );
}

function TabContent({ tab }) {
  if (!tab) return <p className="text-gray-600">Please select an option</p>;
  return (
    <div className="mt-4 p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{tab.title}</h2>
      <p className="mt-2">{tab.description}</p>
      <pre className="mt-2 bg-gray-200 p-2 rounded">{tab.syntax}</pre>
    </div>
  );
}

export default function Button() {
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <div className="p-6 text-center">
      <div>
        {tabs.map((tab) => (
          <TabButton key={tab.name} name={tab.name} onClick={setSelectedTab} />
        ))}
      </div>
      <TabContent tab={tabs.find((t) => t.name === selectedTab)} />
    </div>
  );
}

