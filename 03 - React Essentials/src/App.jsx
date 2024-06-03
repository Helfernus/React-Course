import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  //Examples Section Output - Approach III
  let tabContent = <p>Please select a Topic.</p>;
  if (selectedTopic) {
    tabContent = (<div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* Dynamically generated content transforming the data into component */}
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcepts key={conceptItem.title} {...conceptItem} />)}
            {/* <CoreConcepts
              title="Components" //Props
              description="The core UI building block." //Props
              image={componentsImg} />
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image} />
            <CoreConcepts {...CORE_CONCEPTS[2]} //When data property names are exactly same as props
            />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {/* Creating anonymous arrow function definition so that arguments can be passed to the handleSelect function  */}
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* {selectedTopic} */}
          {/* Examples Section Output - Approach I */}
          {/* {!selectedTopic ? <p>Please select a Topic.</p> : (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)} */}

          {/* Examples Section Output - Approach II */}
          {/* Alternative to above (uses single ternary expression, whereas below uses 2 more readable expressions) */}

          {/* {!selectedTopic && <p>Please select a Topic.</p>}
          {selectedTopic && (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)} */}

          {/* Examples Section Output - Approach III */}
          {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;
