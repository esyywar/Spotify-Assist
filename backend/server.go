package main

import (
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"strings"

	"github.com/BurntSushi/toml"
	"github.com/gorilla/mux"
)

type appSecret struct {
	ClientId     string
	ClientSecret string
}

type configData struct {
	AppScope []string
}

/* Method to generate scope string */
func (cData *configData) scopeStringify() string {
	return strings.Join(cData.AppScope, " ")
}

var appData appSecret
var config configData

func main() {
	/* Importing the app's private date */
	if _, err := toml.DecodeFile("privData.toml", &appData); err != nil {
		log.Fatal(err)
	}

	/* Importing the app config data */
	if _, err := toml.DecodeFile("config.toml", &config); err != nil {
		log.Fatal(err)
	}

	/* Router */
	router := mux.NewRouter()

	/* Home route */
	router.HandleFunc("/", HomeGreet)

	/* Login route */
	router.HandleFunc("/login", Login)

	/* User dashboard route */
	router.HandleFunc("/dashboard", Dashboard)

	log.Fatal(http.ListenAndServe(":5000", router))
}

func spotifyAuth(redirect string) *http.Response {
	fmt.Println("Getting auth from spotify...")

	req, err := http.NewRequest("GET", "https://accounts.spotify.com/authorize", nil)

	if err != nil {
		log.Fatal(err)
	}

	var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

	state := make([]byte, 16)
	for i := range state {
		state[i] = characters[rand.Int63()%int64(len(characters))]
	}

	fmt.Println(string(state))

	query := req.URL.Query()
	query.Add("client_id", appData.ClientId)
	query.Add("response_type", "code")
	query.Add("redirect_uri", "http://localhost:5000/dashboard")
	query.Add("state", string(state))
	query.Add("scope", config.scopeStringify())

	res, err := http.Get(req.URL.String())

	return res
}

func HomeGreet(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("API home test"))
}

func Login(w http.ResponseWriter, r *http.Request) {
	/* Get request to Spotify authorize */
	res := spotifyAuth("/dashboard")

	fmt.Println(res)
}

func Dashboard(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Log in successful!"))
}
