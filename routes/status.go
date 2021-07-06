package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {
	resp, err := http.Get("https://api-deno-compiler.herokuapp.com/code")
	if err != nil {
		log.Fatalln("ERROR 400 SENDING THE REQUEST TO THE API", err)
	}
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println("HTTP RESPONSE 200, ALL GOOD", string(body))
}
