# useAxios

- Help You Handle API Request Easy With Axios [ GET, POST, DELETE, PUT, PATCH ]

---

### How To Use

    - const { fetchData, loading, error, data } = useAxios(url, options, dependencies, runNow);

    - fetchData:
    		- Fetch Data Function Help You Fetch Data Again
    		- OR - Help You Fetch Data If {runNow: false}
    - loading: Loading State
    - error: Error State
    - data: Data Back From API
    - url: End Point
    - options:
    		- Fetch Options By Default {headers: Set To Json } and cancelToken
    		- By Default {method: "GET"}
    		- You Can Change Method, Add Body
    		- Example - Like {method: "POST", body: JSON.stringify({ title: "hello" }
    - dependencies: Array Of Dependencies To Use It [runNow: true]
    - runNow
    		- true: Run Fetch When Call Hook
    		- false: Run Fetch When Call fetchData Function

---

## Screenshots

#### useAxios Hook

![useAxios Hook](images/useAxios/useAxios.png "useAxios Hook")

#### Example

![Example](images/useAxios/example.png "Example")
