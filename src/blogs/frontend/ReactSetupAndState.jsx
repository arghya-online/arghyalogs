import React from 'react';
import CodeBlock from '../../components/Shared/CodeBlock';
import Video from '../../components/Shared/Video';

export const meta = {
  slug: 'react-setup-and-state',
  title: 'How to implement useState',
  category: 'Frontend',
  date: 'Dec 10, 2025',
  summary: 'A guide to setting up a React project with Vite and understanding useState.',
  plainText: `Step 1: Set-up react project. I've got the setup running using Vite + React. Just make a folder and run this in your terminal: npm create vite@latest. Now, everything happens inside the App.jsx file. The whole point of useState is to update the state of a variable. To use it, we need a main variable and a 'setter' function to update it. const [count, setCount] = useState(0); Here, count is the variable and setCount is how we change it. Using 'set' is just standard convention. The initial value is 0, but you can set it to whatever default you want. I wrote a line to display the value... Instead of a static value, I used {count}. This tells React to render whatever value count holds, automatically updating the UI whenever it changes. Since count defaults to 0, that's what shows up first. Now, let's add some buttons to control that count. I added two buttons. Here's how they work: The 'Increase' button triggers an onClick event. When clicked, it calls setCount(count + 1) to bump the value up by one. The 'Decrease' button does the exact same thing, just in reverse. Wait, why not just use a normal variable? You might be wondering: why not just do let count = 0 and count = count + 1? Two reasons: 1. React ignores normal variables. React doesn't know when a normal variable changes, so it won't update the screen. setCount() explicitly tells React, "Hey, this changed! Re-render components that use it!" 2. Memory. When a component re-renders, the function runs again. A normal let count = 0 would reset to 0 every single time. useState remembers the value between renders. And there you have it—two working buttons. That's useState in a nutshell. It's super versatile and you'll use it all the time depending on what your app needs.`
};

const ReactSetupAndState = () => {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-4">How to implement useState</h1>

      <p>I've got the setup running using Vite + React.</p>

      <p>Just make a folder and run this in your terminal:</p>

      <CodeBlock language="bash" code="npm create vite@latest" />

      <p>Now, everything happens inside the <code>App.jsx</code> file.</p>

      <CodeBlock
        language="jsx"
        code={`import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>How to implement useState</h1>
    </>
  );
}

export default App;`}
      />

      <h2 className="text-2xl font-bold mt-8 mb-4">Understanding why we use useState</h2>

      <p>The whole point of <code>useState</code> is to update the state of a variable.</p>

      <p>To use it, we need a main variable and a 'setter' function to update it.</p>

      <CodeBlock language="javascript" code="const [count, setCount] = useState(0);" />

      <p>Here, <code>count</code> is the variable and <code>setCount</code> is how we change it. Using "set" is just standard convention.</p>

      <p>The initial value is 0, but you can set it to whatever default you want.</p>

      <p>I wrote a line to display the value...</p>

      <p>Instead of a static value, I used <code>{'{count}'}</code>. This tells React to render whatever value <code>count</code> holds, automatically updating the UI whenever it changes.</p>

      <p>Since <code>count</code> defaults to 0, that's what shows up first.</p>

      <p>Now, let's add some buttons to control that <code>count</code>.</p>

      <h3 className="text-xl font-bold mt-6 mb-3">Adding buttons to update the state</h3>

      <CodeBlock
        language="jsx"
        code={`return (
    <>
      <h1>How to implement useState</h1>
      <h1>Value of the variable will be {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increase the Value</Button>
      <Button onClick={() => setCount(count - 1)}>Decrease the Value</Button>
    </>
) `}
      />
      <img src="/DemoImage.png" alt="Demo of the state update" className="my-6 rounded-lg shadow-md w-full max-w-2xl mx-auto" />

      <p>I added two buttons. Here's how they work:</p>

      <p>The "Increase" button triggers an <code>onClick</code> event. When clicked, it calls <code>setCount(count + 1)</code> to bump the value up by one. The "Decrease" button does the exact same thing, just in reverse.</p>

      <h3 className="text-xl font-bold mt-6 mb-3">Wait, why not just use a normal variable?</h3>

      <p>You might be wondering: why not just do <code>let count = 0</code> and <code>count = count + 1</code>?</p>

      <p>Two reasons:</p>

      <ol className="list-decimal pl-5 space-y-2 mb-6">
        <li>
          <strong>React ignores normal variables.</strong> React doesn't know when a normal variable changes, so it won't update the screen. <code>setCount()</code> explicitly tells React, "Hey, this changed! Re-render components that use it!"
        </li>
        <li>
          <strong>Memory.</strong> When a component re-renders, the function runs again. A normal <code>let count = 0</code> would reset to 0 every single time. <code>useState</code> remembers the value between renders.
        </li>
      </ol>

      <h3 className="text-xl font-bold mt-6 mb-3">Final version after adding some styling</h3>

      <CodeBlock
        language="jsx"
        code={`import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-2">How to implement useState</h1>

      <h2 className="text-xl font-medium mb-6">
        Value of the variable: {count}
      </h2>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 active:scale-95 transition"
        >
          Increase the Value
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 active:scale-95 transition"
        >
          Decrease the Value
        </button>
      </div>
    </div>
  );
}

export default App;`}
      />
      <Video src="/Video.mp4" />

      <p>And there you have it, two working buttons.</p>

      <p>That's <code>useState</code> in a nutshell. It's super versatile and you'll use it all the time depending on what your app needs.</p>
    </article>
  );
};

export default ReactSetupAndState;
