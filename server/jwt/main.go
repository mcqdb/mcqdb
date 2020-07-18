package main

import (
	"log"
	"net/http"
)

func main() {
	// "Signin" and "Welcome" are the handlers that we will implement

	http.HandleFunc("/signup", Signup)
	http.HandleFunc("/signin", Signin)
	http.HandleFunc("/welcome", Welcome)
	http.HandleFunc("/refresh", Refresh)

	// start the server on port 8080
	log.Fatal(http.ListenAndServe(":8080", nil))
}
