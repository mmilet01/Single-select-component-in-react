import "./App.scss";
import SingleSelectComponent from "./components/SingleSelectComponent";

function App() {
	const optionsOne = [
		{ id: 1, name: "Option one" },
		{ id: 2, name: "Option two" },
		{ id: 3, name: "Option three" },
	];

	const optionsTwo = [
		{ id: 1, name: "Option four" },
		{ id: 2, name: "Option five" },
		{ id: 3, name: "Option six" },
	];

	return (
		<div className="App">
			<header className="App-header">
				<SingleSelectComponent
					placeholder="Filter Title"
					options={optionsOne}
				/>
				<SingleSelectComponent
					placeholder="Filter Title two"
					options={optionsTwo}
				/>
				<SingleSelectComponent />
			</header>
		</div>
	);
}

export default App;
