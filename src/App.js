import { useSessionStorage, useLocalStorage } from "./Hook/useStorage";

/**
 * How To Use
 * 	- const [value, setValue, removeValue] = useLocalStorage(key, value);
 * 	- const [value, setValue, removeValue] = useSessionStorage(key, value);
 */

function App() {
	const [name, setName, removeName] = useLocalStorage("name", "Kirolos");
	const [age, setAge, removeAge] = useSessionStorage("age", 21);

	return (
		<div className="App">
			<div>name - {name}</div>
			<div>age - {age}</div>
			<button onClick={() => setName("John")}>Set Name</button>
			<button onClick={() => setAge(40)}>Set Age</button>
			<button onClick={removeName}>Remove Name</button>
			<button onClick={removeAge}>Remove Age</button>
		</div>
	);
}

export default App;
