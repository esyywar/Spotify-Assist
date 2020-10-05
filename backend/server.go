package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/", HomeGreet)

	log.Fatal(http.ListenAndServe(":5000", router))
}

func HomeGreet(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("API home test"))
}
