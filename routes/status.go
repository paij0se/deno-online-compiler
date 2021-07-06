package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"time"
)

func main() {
	start := time.Now()
	resp, err := http.Get("https://api-deno-compiler.herokuapp.com/code")
	if err != nil {
		log.Fatalln("ERROR 400 SENDING THE REQUEST TO THE API", err)
	}
	duration := time.Since(start)
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Printf("API Response Time: %d%s\n", duration.Milliseconds(), "ms")
	fmt.Println("Response 200 All Good")
	fmt.Println(string(body))
}
