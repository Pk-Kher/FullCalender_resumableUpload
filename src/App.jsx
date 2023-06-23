import "./assets/output.css"
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-react-inputs/styles/material.css";

import { useEffect } from "react";
import Routes from "./routes/index"
import axios from "axios";
import Loading from "./components/common/Loading";
import { useDispatch, useSelector } from "./hooks";
import { setLoading } from "./redux/Loading";
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Mgo+DSMBaFt+QHJqVk1nQ1BCaV1CX2BZe1l1QGlZfE4BCV5EYF5SRHBeS11jSn5Qc0RqWH8=;Mgo+DSMBPh8sVXJ1S0R+X1pDaV5EQmFJfFBmQGlaelRwd0U3HVdTRHRcQltiQH5TdUVgXH1fdXQ=;ORg4AjUWIQA/Gnt2VFhiQlJPcUBDW3xLflF1VWZTfFt6dFZWESFaRnZdQV1lSHdTdkZjWnpcc3JV;MjQ1NzkyN0AzMjMxMmUzMDJlMzBWY1pRcGxXZzZhdUNBOE5Xd0FqWEZLRnQ2WG1mQkNvNzBKNEZ5a1dtN1BFPQ==;MjQ1NzkyOEAzMjMxMmUzMDJlMzBVR203LytGeml2Y3ZNRlNVWVF5TmNRUjVic0s5eTBsUVYyRzViblp0RDhJPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVhdXGVWfFN0RnNcdV11flVFcC0sT3RfQF5jT39adkVgWXxbc3VcRg==;MjQ1NzkzMEAzMjMxMmUzMDJlMzBGT1lDeWhhbWV2SHlJL245V0x3dko2a0NnVTZyT1RpVTFSaEJLTHNCUVhJPQ==;MjQ1NzkzMUAzMjMxMmUzMDJlMzBSd21pcHNxNEJXcHRFUkZGRGkyODkrbUJlTXVSZTRYYWJxbTlQdkNhUnFVPQ==;Mgo+DSMBMAY9C3t2VFhiQlJPcUBDW3xLflF1VWZTfFt6dFZWESFaRnZdQV1lSHdTdkZjWnpacHJV;MjQ1NzkzM0AzMjMxMmUzMDJlMzBMVVJ5OURtS3lYdGRONUp0TnFJVjJVRHhWUTJ6QTcrT21aMWM5NFRLZjNBPQ==;MjQ1NzkzNEAzMjMxMmUzMDJlMzBJeWZZZDRsTk9lMWtBQjlaMW1TbkRWMzlBVVVQWUlQNlRCb3dNeit2REc0PQ==;MjQ1NzkzNUAzMjMxMmUzMDJlMzBGT1lDeWhhbWV2SHlJL245V0x3dko2a0NnVTZyT1RpVTFSaEJLTHNCUVhJPQ==');

function App() {
	const loading = useSelector(store => store?.Loading);
	const dispatch = useDispatch();
	try {
		axios.interceptors.request.use(function (config) {
			dispatch(setLoading(true));
			return config;
		});
		axios.interceptors.response.use(function (response) {
			dispatch(setLoading(false));
			return response;
		}, function (error) {
			dispatch(setLoading(false));
			return Promise.reject(error);
		});
	}
	catch (e) {
		dispatch(setLoading(false));
	}
	return (
		<>
			{loading && <Loading />}
			<Routes />
		</>
	);
	// const [data, setData] = useState<number[]>(Array.from(Array(10).keys()));
	// const [scrollcurrentPosition, setScrollCurrentPostion] = useState(0);
	// const scrolldiv = useRef<HTMLDivElement>(null);
	// const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
	// 	let scrollPosition = e.currentTarget.scrollTop;
	// 	let firstElementHeight = document.getElementById('top')!.clientHeight;
	// 	let lastElementHeight = document.getElementById('bottom')!.clientHeight;
	// 	if (scrollPosition > (scrollcurrentPosition || 0)) {
	// 		// Scrolling down
	// 		var threshold = scrolldiv!.current!.clientHeight - lastElementHeight;
	// 		if (scrollPosition > threshold) {
	// 			setData(prev => {
	// 				let temp = [...prev].splice(0, 1);
	// 				let temp2 = prev.filter(value => value !== prev[0]);
	// 				return [...temp2, ...temp];
	// 			});
	// 			scrollPosition -= firstElementHeight;
	// 			scrolldiv!.current!.scrollTo({ top: scrollPosition });
	// 		} else {
	// 			// Scrolling up
	// 			var threshold = firstElementHeight;
	// 			console.log(e.currentTarget.scrollTop < threshold, e.currentTarget.scrollTop);

	// 			if (e.currentTarget.scrollTop < threshold) {
	// 				setData(prev => {
	// 					let temp = [...prev].splice(prev.length - 1, 1);
	// 					let temp2 = prev.filter(value => value !== prev[prev.length - 1]);
	// 					return [...temp, ...temp2];
	// 				});
	// 				scrollPosition += lastElementHeight;
	// 				scrolldiv!.current!.scrollTo({ top: scrollPosition });
	// 			}
	// 		}
	// 		setScrollCurrentPostion(scrollPosition);
	// 	}
	// }

	// return (
	// 	<>
	// 		{/* <title>A</title> */}
	// 		<div className="list max-h-28 w-14 border-red-300 overflow-scroll" ref={scrolldiv} onScroll={(e) => {
	// 			onScroll(e);
	// 		}}>
	// 			<div id='list'>
	// 				{
	// 					data.map((value, i) => {
	// 						return <div className="dark:text-blue-500 text-red-500" id={data.length === i + 1 ? 'bottom' : (i === 0 ? 'top' : 'children')} key={i}>{value}</div>
	// 					})
	// 				}
	// 			</div>
	// 		</div>
	// 		<button className='border border-blue-200 px-6 mt-3 mr-2 hover:border-blue-500' onClick={() => {
	// 			document.getElementById('top')!.scrollIntoView({ behavior: 'smooth' });
	// 		}}>1</button>
	// 		<button className='border border-blue-200 px-6 mt-3 mr-2 hover:border-blue-500' onClick={() => {
	// 			document.getElementById('bottom')!.scrollIntoView({ behavior: 'smooth' });
	// 		}}>2</button>
	// 	</>
	// );
}

export default App;
