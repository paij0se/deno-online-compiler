package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"
)

func main() {
	start := time.Now()
	postBody, _ := json.Marshal(map[string]string{
		"code": `console.log("hello world")`,
	})
	responseBody := bytes.NewBuffer(postBody)
	resp, err := http.Post("https://api-deno-compiler.elpanajose.repl.co/code", "application/json", responseBody)
	if err != nil {
		log.Fatalf("An Error Occured %v", err, resp)
	}
	duration := time.Since(start)

	fmt.Printf("API Response Time: %d%s\n", duration.Milliseconds(), "ms")
}
