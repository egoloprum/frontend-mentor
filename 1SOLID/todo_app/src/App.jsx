import { For, createSignal } from "solid-js";
import { createStore } from "solid-js/store";

function App() {
  const [data, setData] = createStore([]);
  let dataId = -1;

  const [left, setLeft] = createSignal(0);
  const [toggle, setToggle] = createSignal('all');

  function itemToggler (event) {
    setToggle(event.target.id);
  }

  function handleInput(event) {
    if (event.key == "Enter" && event.target.value != '') {
      setData([...data, { id: ++dataId, comp: false, value: event.target.value}] );
      document.getElementById("new-todo").value = '';
      setLeft( left => left + 1 );
    }
  }

  function handleActive(event) {
    let id = parseInt(event.target.id);

    setData(
      (data) => data.id === id,
      "comp", (comp) => !comp
    );

    if (data[id].comp) {
      setLeft( left => left - 1 );
    }
    else {
      setLeft( left => left + 1 );
    }
  }

  function clearComp() {

    for (let i = 0; i < data.length; i++) {
      if (data[i].comp) {
        setData(data[i], { comp: false });
      }
    }

    setLeft(data.length);
  }

  return (
    <div class="wrapper">
      
      <div class="todo-input">
        <span class="input-radio"></span>
        <input type="text" id="new-todo" onKeyDown={ handleInput } placeholder="Create a new todo ..." />
      </div>

      <div class="todo-list">
        <For each={data}>{(elem) =>
          <>
            <Show when={ toggle() == 'active' && elem.comp == false }>
              <div class="list-elem">
                <span class={ elem.comp == true ? 'input-radio active' : 'input-radio' } onClick={ handleActive } id={ elem.id } ></span>
                <p>{ elem.value }</p>
              </div>
            </Show>

            <Show when={ toggle() == 'completed' && elem.comp == true }>
              <div class="list-elem">
                <span class={ elem.comp == true ? 'input-radio active' : 'input-radio' } onClick={ handleActive } id={ elem.id } ></span>
                <p>{ elem.value }</p>
              </div>
            </Show>
            <Show when={ toggle() == 'all' }>
              <div class="list-elem">
                <span class={ elem.comp == true ? 'input-radio active' : 'input-radio' } onClick={ handleActive } id={ elem.id } ></span>
                <p>{ elem.value }</p>
              </div>
            </Show>
          </>
        }</For>

      </div>

      <div class="todo-bar">
        <p class="todo-left-items">{ left() } items left</p>
        <p class="todo-bar-mid"> 
          <span class="todo-all-items" id="all" onClick={ itemToggler }>All</span>
          <span class="todo-active-items" id="active" onClick={ itemToggler }>Active</span>
          <span class="todo-comp-items" id="completed" onClick={ itemToggler }>Completed</span>
        </p>
        <p class="todo-clear-items" onclick={ clearComp } >Clear completed</p>
      </div>

    </div>
  );
}

export default App;
